import { relations, sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { UsersOnWorkspaces } from "./users";
import { Campaigns } from "./campaigns";

export const Workspaces = sqliteTable("workspace", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`(strftime('%s', 'now'))`,
  ),
  updatedAt: integer("updated_at", { mode: "timestamp" }).default(
    sql`(strftime('%s', 'now'))`,
  ),
});

export const WorkspacesRelations = relations(Workspaces, ({ many }) => ({
  usersOnWorkspaces: many(UsersOnWorkspaces),
  campaigns: many(Campaigns),
}));
