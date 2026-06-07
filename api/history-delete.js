/* =====================================================
   api/history-delete.js — DELETE /api/history-delete
   Body: { chatId }        → borra un chat específico
   Body: { deleteAll: true } → borra todo el historial
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
    if (req.method !== "DELETE" && req.method !== "POST") {
        return res.status(405).json({ error: "Método no permitido" });
    }

    const user = getUser(req);
    if (!user) {
        return res.status(401).json({ error: "No autenticado" });
    }

    const { chatId, deleteAll } = req.body || {};

    try {
        await initDB();

        if (deleteAll) {
            /* Borrar todo el historial del usuario */
            await sql`
                DELETE FROM chats
                WHERE user_id = ${user.userId}
            `;
            return res.status(200).json({ ok: true, deleted: "all" });
        }

        if (chatId) {
            /* Borrar un chat específico — verificar que pertenece al usuario */
            const result = await sql`
                DELETE FROM chats
                WHERE id = ${chatId}
                  AND user_id = ${user.userId}
                RETURNING id
            `;
            if (result.length === 0) {
                return res.status(404).json({ error: "Chat no encontrado" });
            }
            return res.status(200).json({ ok: true, deleted: chatId });
        }

        return res.status(400).json({ error: "Falta chatId o deleteAll" });

    } catch (err) {
        console.error("history-delete error:", err);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}