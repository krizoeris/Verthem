import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./db/schema",
  out: "./db/migrations",
  dialect: "sqlite",
  ...(process.env.DATABASE_AUTH_TOKEN && { driver: "turso" }),
  dbCredentials: {
    url: process.env.DATABASE_URL! as string,
    authToken: process.env.DATABASE_AUTH_TOKEN! as string,
  },
  verbose: true,
  strict: true,
});
