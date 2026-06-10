/* =====================================================
   api/reset-password.js — POST /api/reset-password
   Body: { token, newPassword }
   Valida el token y actualiza la contraseña
   ===================================================== */

import bcrypt from "bcryptjs";
import sql, { initDB } from "./_db.js";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Método no permitido" });
    }

    const { token, newPassword } = req.body || {};

    if (!token || !newPassword) {
        return res.status(400).json({ error: "Token y nueva contraseña requeridos" });
    }
    if (newPassword.length < 6) {
        return res.status(400).json({ error: "La contraseña debe tener al menos 6 caracteres" });
    }

    try {
        await initDB();

        /* Buscar usuario con el token válido y no expirado */
        const rows = await sql`
            SELECT id FROM users
            WHERE reset_token     = ${token}
              AND reset_token_exp > NOW()
            LIMIT 1
        `;

        if (rows.length === 0) {
            return res.status(400).json({ error: "El enlace expiró o ya fue usado. Solicitá uno nuevo." });
        }

        const hash = await bcrypt.hash(newPassword, 10);

        /* Actualizar contraseña y limpiar el token */
        await sql`
            UPDATE users
            SET password        = ${hash},
                reset_token     = NULL,
                reset_token_exp = NULL
            WHERE id = ${rows[0].id}
        `;

        return res.status(200).json({ ok: true });

    } catch (err) {
        console.error("reset-password error:", err);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}
