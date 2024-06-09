import { relations, sql } from "drizzle-orm";
import {
  sqliteTable,
  text,
  integer,
  primaryKey,
} from "drizzle-orm/sqlite-core";
import { Workspaces } from "./workspaces";

export const Users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  image: text("image"),
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`(strftime('%s', 'now'))`,
  ),
  updatedAt: integer("updated_at", { mode: "timestamp" }).default(
    sql`(strftime('%s', 'now'))`,
  ),
});

export const UsersRelations = relations(Users, ({ many }) => ({
  usersOnWorkspaces: many(UsersOnWorkspaces),
}));

export const UsersOnWorkspaces = sqliteTable(
  "users_on_workspaces",
  {
    workspaceId: integer("workspace_id")
      .notNull()
      .references(() => Workspaces.id),
    userId: integer("user_id")
      .notNull()
      .references(() => Users.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.userId, t.workspaceId] }),
  }),
);

export const UsersOnWorkspacesRelations = relations(
  UsersOnWorkspaces,
  ({ one }) => ({
    user: one(Users, {
      fields: [UsersOnWorkspaces.userId],
      references: [Users.id],
    }),
    workspace: one(Workspaces, {
      fields: [UsersOnWorkspaces.userId],
      references: [Workspaces.id],
    }),
  }),
);
