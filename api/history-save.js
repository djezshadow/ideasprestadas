/* =====================================================
   api/history-save.js — POST /api/history-save
   Header: Authorization: Bearer <token>
   Body: { label, messages }
   ===================================================== */

import jwt from "jsonwebtoken";
import sql, { initDB } from "./_db.js";

function getUser(req) {
    const auth = req.headers.authorization || "";
    const token = auth.replace("Bearer ", "");
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

    const { label, messages } = req.body;

    if (!label || !messages) {
        return res.status(400).json({ error: "Faltan datos" });
    }

    try {
        await initDB();

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