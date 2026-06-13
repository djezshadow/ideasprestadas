/* =====================================================
   api/delete-account.js — POST /api/delete-account
   Header: Authorization: Bearer <token>
   Body: { password }
   Elimina la cuenta del usuario autenticado y todo su
   historial asociado (ON DELETE CASCADE en la tabla chats)
   ===================================================== */

import bcrypt from "bcryptjs";
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
    if (req.method !== "POST" && req.method !== "DELETE") {
        return res.status(405).json({ error: "Método no permitido" });
    }

    const user = getUser(req);
    if (!user) {
        return res.status(401).json({ error: "No autenticado" });
    }

    const { password } = req.body || {};

    if (!password) {
        return res.status(400).json({ error: "Ingresá tu contraseña para confirmar" });
    }

    try {
        await initDB();

        const rows = await sql`
            SELECT password FROM users
            WHERE id = ${user.userId}
            LIMIT 1
        `;

        if (rows.length === 0) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        const match = await bcrypt.compare(password, rows[0].password);

        if (!match) {
            return res.status(401).json({ error: "Contraseña incorrecta" });
        }

        /* El borrado de "chats" es automático gracias a
           ON DELETE CASCADE en la foreign key user_id */
        await sql`
            DELETE FROM users
            WHERE id = ${user.userId}
        `;

        return res.status(200).json({ ok: true });

    } catch (err) {
        console.error("delete-account error:", err);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}
