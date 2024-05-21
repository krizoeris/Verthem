import '../envConfig'
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import * as schema from "./schema"

// for migrations
const migrationClient = postgres(process.env.POSTGRES_URL as string, { max: 1 });

async function main() {
    await migrate(drizzle(migrationClient, { schema }), {
        migrationsFolder: "db/migrations"
    });

    await migrationClient.end();
}

main();