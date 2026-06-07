/* =====================================================
   api/history-get.js — GET /api/history-get
   Header: Authorization: Bearer <token>
   Devuelve todos los chats del usuario autenticado
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
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Método no permitido" });
    }

    const user = getUser(req);
    if (!user) {
        return res.status(401).json({ error: "No autenticado" });
    }

    try {
        await initDB();

        const chats = await sql`
            SELECT id, label, messages, created_at
            FROM chats
            WHERE user_id = ${user.userId}
            ORDER BY created_at DESC
            LIMIT 50
        `;

        return res.status(200).json({ ok: true, chats });

    } catch (err) {
        console.error("history-get error:", err);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}