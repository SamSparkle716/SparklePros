import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const walkthroughFormSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  companyName: z.string().min(2, "Company name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  facilityAddress: z.string().min(5, "Facility address is required"),
  facilityType: z.string().min(1, "Please select a facility type"),
  servicesNeeded: z.array(z.string()).min(1, "Please select at least one service"),
  desiredFrequency: z.string().min(1, "Please select a frequency"),
  approxSqFt: z.string().optional(),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  notes: z.string().optional(),
});

export type WalkthroughFormData = z.infer<typeof walkthroughFormSchema>;

export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  serviceCategory: z.string().min(1, "Please select a service category"),
  serviceDetails: z.string().min(1, "Please select service details"),
  message: z.string().min(10, "Please provide more details about your needs"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
