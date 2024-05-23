import '../envConfig'
import * as schema from "./schema";
import postgres from "postgres";
import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";

if (!process.env.POSTGRES_URL) {
  throw new Error("POSTGRES_URL environment variable is not defined");
}

const connection = postgres(process.env.POSTGRES_URL as string);

export const db = drizzle(connection);


