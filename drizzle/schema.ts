import { integer, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = pgTable("users", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: text("role", { enum: ["user", "admin"] }).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Percal products table.
 * Stores fabric products for the Percal line (150 fios and 200 fios).
 */
export const percalProducts = pgTable("percal_products", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  codigo: varchar("codigo", { length: 20 }).notNull(),
  fios: integer("fios").notNull(),
  artigo: varchar("artigo", { length: 10 }).notNull(),
  composicao: varchar("composicao", { length: 100 }).notNull(),
  largura: varchar("largura", { length: 50 }).notNull(),
  imagemUrl: text("imagemUrl").notNull(),
});

export type PercalProduct = typeof percalProducts.$inferSelect;
export type InsertPercalProduct = typeof percalProducts.$inferInsert;
