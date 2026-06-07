/* =====================================================
   api/history-save.js — POST /api/history-save
   Soporta tanto fetch con Authorization header
   como sendBeacon (cierre de pestaña).
   ===================================================== */

import jwt from "jsonwebtoken";
import sql, { initDB } from "./_db.js";

function getUser(req) {
    const auth = req.headers.authorization || "";
    const token = auth.replace("Bearer ", "").trim();
    if (!token) return null;
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch {
        return null;
    }
}

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Método no permitido" });
    }

    const user = getUser(req);
    if (!user) {
        return res.status(401).json({ error: "No autenticado" });
    }

    let body = req.body;

    /* sendBeacon envía como text/plain — parsear manualmente */
    if (typeof body === "string") {
        try { body = JSON.parse(body); } catch {
            return res.status(400).json({ error: "Body inválido" });
        }
    }

    const { label, messages } = body || {};

    if (!label || !Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ error: "Faltan datos o mensajes vacíos" });
    }

    try {
        await initDB();

        /* Upsert: si ya existe un chat con el mismo label del mismo usuario
           en los últimos 10 minutos, actualizarlo en vez de crear uno nuevo */
        const existing = await sql`
            SELECT id FROM chats
            WHERE user_id = ${user.userId}
              AND label   = ${label}
              AND created_at > NOW() - INTERVAL '10 minutes'
            ORDER BY created_at DESC
            LIMIT 1
        `;

        if (existing.length > 0) {
            await sql`
                UPDATE chats
                SET messages = ${JSON.stringify(messages)}
                WHERE id = ${existing[0].id}
            `;
            return res.status(200).json({ ok: true, updated: true });
        }

        const rows = await sql`
            INSERT INTO chats (user_id, label, messages)
            VALUES (${user.userId}, ${label}, ${JSON.stringify(messages)})
            RETURNING id, label, created_at
        `;

        return res.status(201).json({ ok: true, chat: rows[0] });

    } catch (err) {
        console.error("history-save error:", err);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}