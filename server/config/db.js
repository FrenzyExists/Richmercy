import pg from 'pg'

const config = {
  user: import.meta.env.VITE_SUPABASE_USER,
  password: import.meta.env.VITE_SUPABASE_PASSWORD,
  host: import.meta.env.VITE_SUPABASE_HOST,
  port: import.meta.env.VITE_SUPABASE_PORT,
  database: import.meta.env.VITE_SUPABASE_DB_NAME
}

const pool = new pg.Pool(config)
export { pool }
