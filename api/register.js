/* =====================================================
   api/register.js — POST /api/register
   Body: { username, password }
   // email: columna guardada pero ya no obligatoria en el formulario
   ===================================================== */

import bcrypt from "bcryptjs";
import sql, { initDB } from "./_db.js";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Método no permitido" });
    }

    const { username, /*email,*/ password } = req.body;

    /* Validaciones */
    if (!username || !password) {
        return res.status(400).json({ error: "Usuario y contraseña requeridos" });
    }
    if (username.length < 3) {
        return res.status(400).json({ error: "El usuario debe tener al menos 3 caracteres" });
    }
    /* Validación de email desactivada — campo opcional en el futuro
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: "El email no es válido" });
    }
    */
    if (password.length < 6) {
        return res.status(400).json({ error: "La contraseña debe tener al menos 6 caracteres" });
    }

    try {
        await initDB();

        const hash = await bcrypt.hash(password, 10);

        /* email se guarda vacío por ahora — la columna acepta NULL o string vacío */
        const rows = await sql`
            INSERT INTO users (username, email, password)
            VALUES (
                ${username.toLowerCase().trim()},
                ${''},
                ${hash}
            )
            RETURNING id, username, created_at
        `;

        return res.status(201).json({ ok: true, user: rows[0] });

    } catch (err) {
        if (err.code === "23505") {
            const detail = err.detail || "";
            if (detail.includes("username")) {
                return res.status(409).json({ error: "Ese nombre de usuario ya está en uso" });
            }
            return res.status(409).json({ error: "El usuario ya existe" });
        }
        console.error("register error:", err);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}