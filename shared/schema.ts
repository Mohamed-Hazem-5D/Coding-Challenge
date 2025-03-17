import { pgTable, text, serial, integer, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
});

export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  tripId: text("trip_id").notNull(),
  departureDate: timestamp("departure_date").notNull(),
  seatClass: text("seat_class").notNull(),
  hotelId: text("hotel_id"),
  status: text("status").notNull().default("pending"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  fullName: true,
  email: true,
});

export const insertBookingSchema = createInsertSchema(bookings).pick({
  userId: true,
  tripId: true,
  departureDate: true,
  seatClass: true,
  hotelId: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type User = typeof users.$inferSelect;
export type Booking = typeof bookings.$inferSelect;
