import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import "@next/env";

if (!process.env.POSTGRES_URL) {
  throw new Error("POSTGRES_URL environment variable is not defined");
}

const sql = postgres(process.env.POSTGRES_URL);

const db = drizzle(sql);

export default db;
