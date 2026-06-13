/* =====================================================
   api/change-password.js — POST /api/change-password
   Header: Authorization: Bearer <token>
   Body: { currentPassword, newPassword }
   Cambia la contraseña del usuario autenticado
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
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Método no permitido" });
    }

    const user = getUser(req);
    if (!user) {
        return res.status(401).json({ error: "No autenticado" });
    }

    const { currentPassword, newPassword } = req.body || {};

    if (!currentPassword || !newPassword) {
        return res.status(400).json({ error: "Completá la contraseña actual y la nueva" });
    }
    if (newPassword.length < 6) {
        return res.status(400).json({ error: "La nueva contraseña debe tener al menos 6 caracteres" });
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

        const match = await bcrypt.compare(currentPassword, rows[0].password);

        if (!match) {
            return res.status(401).json({ error: "La contraseña actual es incorrecta" });
        }

        const hash = await bcrypt.hash(newPassword, 10);

        await sql`
            UPDATE users
            SET password = ${hash}
            WHERE id = ${user.userId}
        `;

        return res.status(200).json({ ok: true });

    } catch (err) {
        console.error("change-password error:", err);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}