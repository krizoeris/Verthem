import { relations, sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { Workspaces } from "./workspaces";
import { Pages } from "./pages";

export const Campaigns = sqliteTable("campaigns", {
  id: integer("id").primaryKey(),
  workspaceId: integer("workspace_id")
    .notNull()
    .references(() => Workspaces.id),
  title: text("title").notNull(),
  domain: text("domain").notNull(),
  status: text("status").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`(strftime('%s', 'now'))`,
  ),
  updatedAt: integer("updated_at", { mode: "timestamp" }).default(
    sql`(strftime('%s', 'now'))`,
  ),
});

export const CampaignsRelations = relations(Campaigns, ({ one, many }) => ({
  workspace: one(Workspaces, {
    fields: [Campaigns.workspaceId],
    references: [Workspaces.id],
  }),
  pages: many(Pages),
}));
