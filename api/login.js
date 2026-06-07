/* =====================================================
   api/login.js — POST /api/login
   Body: { username, password }
   Devuelve un JWT que el frontend guarda en localStorage
   ===================================================== */

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import sql, { initDB } from "./_db.js";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Método no permitido" });
    }

    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Usuario y contraseña requeridos" });
    }

    try {
        await initDB();

        const rows = await sql`
            SELECT id, username, password
            FROM users
            WHERE username = ${username.toLowerCase().trim()}
        `;

        if (rows.length === 0) {
            return res.status(401).json({ error: "Usuario o contraseña incorrectos" });
        }

        const user = rows[0];
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(401).json({ error: "Usuario o contraseña incorrectos" });
        }

        /* Generar token JWT — expira en 7 días */
        const token = jwt.sign(
            { userId: user.id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        return res.status(200).json({
            ok: true,
            token,
            username: user.username
        });

    } catch (err) {
        console.error("login error:", err);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}