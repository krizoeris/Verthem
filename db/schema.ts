import {
  integer,
  text,
  timestamp,
  pgTable,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  image: text("image"),
  created_at: timestamp("created_at", { mode: "date" }).notNull(),
  updated_at: timestamp("updated_at", { mode: "date" }).notNull(),
});

export const CampaignsTable = pgTable("campaigns", {
  id: uuid("id").primaryKey().defaultRandom(),
});
