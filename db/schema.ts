import {
    integer,
    text,
    timestamp,
    pgTable,
    uuid,
    varchar,
} from "drizzle-orm/pg-core";

export const Users = pgTable("users", {
    id: uuid("id").primaryKey().defaultRandom(),
    first_name: varchar("first_name").notNull(), 
    last_name: varchar("last_name").notNull(), 
    email: varchar("email").notNull(), 
    password: varchar("password").notNull(), 
    image: text("image"),
    created_at: timestamp("created_at", { mode: "date" }).notNull(),
    updated_at: timestamp("updated_at", { mode: "date" }).notNull()
});

export const Workspaces = pgTable("workspace", {
    id: uuid("id").primaryKey().defaultRandom(),
    title: varchar("title").notNull(), 
    created_at: timestamp("created_at", { mode: "date" }).notNull(),
    updated_at: timestamp("updated_at", { mode: "date" }).notNull()
});

export const Campaigns = pgTable("campaigns", {
    id: uuid("id").primaryKey().defaultRandom(),
    workspace_id: uuid("workspace_id").notNull().references(() => Workspaces.id),
    title: varchar("title").notNull(),
    domain: varchar("domain").notNull(),
    status: varchar("status").notNull(),
    created_at: timestamp("created_at", { mode: "date" }).notNull(),
    updated_at: timestamp("updated_at", { mode: "date" }).notNull()
});

export const UserWorkspaceRelation = pgTable("userWorkspaceRelation", {
    id: uuid("id").primaryKey().defaultRandom(),
    workspace_id: uuid("workspace_id").notNull().references(() => Workspaces.id),
    user_id: uuid("user_id").notNull().references(() => Users.id),
    created_at: timestamp("created_at", { mode: "date" }).notNull(),
    updated_at: timestamp("updated_at", { mode: "date" }).notNull()
})

export const Pages = pgTable("pages", {
    id: uuid("id").primaryKey().defaultRandom(),
    campaign_id: uuid("campaign_id").notNull().references(() => Campaigns.id),
    title: text("title").notNull(),
    template: text("template").notNull(),
    created_at: timestamp("created_at", { mode: "date" }).notNull(),
    updated_at: timestamp("updated_at", { mode: "date" }).notNull()
});

export const Templates = pgTable("templates", {
    id: uuid("id").primaryKey().defaultRandom(),
    title: varchar("title").notNull(),
    template: text("template").notNull(),
    type: varchar("type").notNull(),
    created_at: timestamp("created_at", { mode: "date" }).notNull(),
    updated_at: timestamp("updated_at", { mode: "date" }).notNull()
});
