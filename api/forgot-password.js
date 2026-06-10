/* =====================================================
   api/forgot-password.js — POST /api/forgot-password
   Body: { email }
   Genera un token de reset y manda el email con Resend
   ===================================================== */

import { Resend } from "resend";
import crypto from "crypto";
import sql, { initDB } from "./_db.js";

const resend = new Resend(process.env.RESEND_API_KEY); /* Variable en Vercel: RESEND_API_KEY = re_gqTkecJy_... */

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Método no permitido" });
    }

    const { email } = req.body || {};

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: "Email inválido" });
    }

    try {
        await initDB();

        /* Buscar usuario por email — respuesta genérica para no revelar si existe */
        const rows = await sql`
            SELECT id, username, email FROM users
            WHERE email = ${email.toLowerCase().trim()}
            LIMIT 1
        `;

        if (rows.length === 0) {
            /* No revelar que el email no existe (seguridad) */
            return res.status(200).json({ ok: true });
        }

        const user = rows[0];

        /* Generar token seguro (64 hex chars) con expiración de 1 hora */
        const token  = crypto.randomBytes(32).toString("hex");
        const expiry = new Date(Date.now() + 60 * 60 * 1000); /* +1h */

        await sql`
            UPDATE users
            SET reset_token     = ${token},
                reset_token_exp = ${expiry}
            WHERE id = ${user.id}
        `;

        const baseUrl   = process.env.BASE_URL || "https://neurascript.vercel.app";
        const resetLink = `${baseUrl}/auth.html?reset=${token}`;

        /* ── Email con Resend ── */
        await resend.emails.send({
            from:    "onboarding@resend.dev",  /* ← funciona sin dominio propio; reemplazá por "NeuraScript <no-reply@tudominio.com>" cuando tengas dominio verificado */
            to:      user.email,
            subject: "Recuperá tu contraseña — NeuraScript",
            html: `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
</head>
<body style="margin:0;padding:0;background:#0000cc;font-family:'Segoe UI',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0000cc;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" style="max-width:480px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);border-radius:20px;padding:40px 36px;" cellpadding="0" cellspacing="0">

          <!-- Logo -->
          <tr>
            <td align="center" style="padding-bottom:28px;">
              <span style="color:white;font-size:22px;font-weight:800;letter-spacing:-.3px;">⚡ NeuraScript</span>
            </td>
          </tr>

          <!-- Título -->
          <tr>
            <td style="color:white;font-size:22px;font-weight:700;text-align:center;padding-bottom:12px;line-height:1.3;">
              Recuperá tu contraseña
            </td>
          </tr>

          <!-- Texto -->
          <tr>
            <td style="color:rgba(255,255,255,.72);font-size:15px;text-align:center;padding-bottom:32px;line-height:1.65;">
              Hola <strong style="color:white;">${user.username}</strong>, recibimos una solicitud para restablecer la contraseña de tu cuenta.<br><br>
              Este enlace expira en <strong style="color:white;">1 hora</strong>.
            </td>
          </tr>

          <!-- Botón -->
          <tr>
            <td align="center" style="padding-bottom:32px;">
              <a href="${resetLink}"
                 style="display:inline-block;background:white;color:#0000cc;padding:14px 36px;border-radius:50px;font-size:15px;font-weight:700;text-decoration:none;letter-spacing:.2px;">
                Restablecer contraseña →
              </a>
            </td>
          </tr>

          <!-- URL de respaldo -->
          <tr>
            <td style="color:rgba(255,255,255,.4);font-size:12px;text-align:center;padding-bottom:24px;line-height:1.5;word-break:break-all;">
              Si el botón no funciona, copiá este link:<br>
              <span style="color:rgba(255,255,255,.65);">${resetLink}</span>
            </td>
          </tr>

          <!-- Aviso -->
          <tr>
            <td style="color:rgba(255,255,255,.35);font-size:11px;text-align:center;border-top:1px solid rgba(255,255,255,.12);padding-top:20px;line-height:1.5;">
              Si no solicitaste esto, ignorá este mensaje. Tu contraseña no cambiará.<br>
              © 2026 NeuraScript / 5 Voces Producciones
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
            `.trim()
        });

        return res.status(200).json({ ok: true });

    } catch (err) {
        console.error("forgot-password error:", err);
        return res.status(500).json({ error: "Error al enviar el email. Intentá de nuevo." });
    }
}