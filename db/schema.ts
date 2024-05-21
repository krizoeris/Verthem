import { 
    pgTable,
    uuid,
    varchar
} from "drizzle-orm/pg-core"

export const CampaignsTable = pgTable("campaigns", {
    id: uuid("id").primaryKey().defaultRandom()
})