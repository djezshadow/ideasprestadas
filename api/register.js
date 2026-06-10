/* =====================================================
   api/register.js — POST /api/register
   Body: { username, email, password }
   ===================================================== */

import bcrypt from "bcryptjs";
import sql, { initDB } from "./_db.js";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Método no permitido" });
    }

    const { username, email, password } = req.body;

    /* ── Validaciones ── */
    if (!username || !email || !password) {
        return res.status(400).json({ error: "Usuario, email y contraseña requeridos" });
    }
    if (username.length < 3) {
        return res.status(400).json({ error: "El usuario debe tener al menos 3 caracteres" });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: "El email no es válido" });
    }
    if (password.length < 6) {
        return res.status(400).json({ error: "La contraseña debe tener al menos 6 caracteres" });
    }

    try {
        await initDB();

        /* ── Check duplicados ANTES de insertar (mensajes claros) ── */
        const existingUser = await sql`
            SELECT username, email FROM users
            WHERE username = ${username.toLowerCase().trim()}
               OR email    = ${email.toLowerCase().trim()}
            LIMIT 1
        `;

        if (existingUser.length > 0) {
            const taken = existingUser[0];
            if (taken.username === username.toLowerCase().trim()) {
                return res.status(409).json({ error: "Ese nombre de usuario ya está en uso" });
            }
            return res.status(409).json({ error: "Ese email ya tiene una cuenta asociada" });
        }

        const hash = await bcrypt.hash(password, 10);

        const rows = await sql`
            INSERT INTO users (username, email, password)
            VALUES (
                ${username.toLowerCase().trim()},
                ${email.toLowerCase().trim()},
                ${hash}
            )
            RETURNING id, username, created_at
        `;

        return res.status(201).json({ ok: true, user: rows[0] });

    } catch (err) {
        /* Fallback por si la DB lanza unique violation de todas formas */
        if (err.code === "23505") {
            const detail = err.detail || "";
            if (detail.includes("username")) {
                return res.status(409).json({ error: "Ese nombre de usuario ya está en uso" });
            }
            if (detail.includes("email")) {
                return res.status(409).json({ error: "Ese email ya tiene una cuenta asociada" });
            }
            return res.status(409).json({ error: "El usuario o email ya existe" });
        }
        console.error("register error:", err);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}