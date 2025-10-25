import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  out: './src/db/seed/drizzle/migrations',
  schema: './src/db/drizzle/schema.ts',
  dialect: 'sqlite',
  dbCredentials: {
    url: './db.sqlite3',
  }
});
drizzle
