import { relations, sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { Campaigns } from "./campaigns";

export const Pages = sqliteTable("pages", {
  id: integer("id").primaryKey(),
  campaignId: integer("campaign_id")
    .notNull()
    .references(() => Campaigns.id),
  title: text("title").notNull(),
  template: text("template").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`(strftime('%s', 'now'))`,
  ),
  updatedAt: integer("updated_at", { mode: "timestamp" }).default(
    sql`(strftime('%s', 'now'))`,
  ),
});

export const PagesRelations = relations(Pages, ({ one }) => ({
  campaign: one(Campaigns, {
    fields: [Pages.campaignId],
    references: [Campaigns.id],
  }),
}));
