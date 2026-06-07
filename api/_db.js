/* =====================================================
   _db.js — conexión compartida a Neon (PostgreSQL)
   ===================================================== */

import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

export async function initDB() {
    await sql`
        CREATE TABLE IF NOT EXISTS users (
            id                SERIAL PRIMARY KEY,
            username          TEXT UNIQUE NOT NULL,
            email             TEXT UNIQUE NOT NULL,
            password          TEXT NOT NULL,
            email_verified    BOOLEAN DEFAULT FALSE,
            verify_token      TEXT,
            reset_token       TEXT,
            reset_token_exp   TIMESTAMP,
            created_at        TIMESTAMP DEFAULT NOW()
        )
    `;
    await sql`
        CREATE TABLE IF NOT EXISTS chats (
            id         SERIAL PRIMARY KEY,
            user_id    INTEGER REFERENCES users(id) ON DELETE CASCADE,
            label      TEXT NOT NULL,
            messages   JSONB NOT NULL DEFAULT '[]',
            created_at TIMESTAMP DEFAULT NOW()
        )
    `;
}

export default sql;