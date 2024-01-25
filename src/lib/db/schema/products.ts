import { sql } from "drizzle-orm";
import { boolean, date, decimal, integer, json, pgTable, smallint, text, uniqueIndex, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

import { type getProducts } from "@/lib/api/products/queries";

import { randomUUID } from "crypto";


export const products = pgTable('products', {
  id: varchar("id", { length: 191 }).primaryKey().$defaultFn(() => randomUUID()),
  name: varchar("name", { length: 256 }).notNull(),
  description: text("description"),
  sku: varchar("sku", { length: 100 }),
  categoryId: integer("category_id"),
  price: decimal("price", {precision:10, scale:2}).notNull(),
  discountedPrice: decimal("discounted_price", {precision:10, scale:2}),
  quantityInStock: smallint("quantity_in_stock").notNull(),
  weight: decimal("weight", {precision:5, scale:2}),
  size: varchar("size", { length: 50 }),
  color: varchar("color", { length: 50 }),
  brandId: integer("brand_id"),
  rating: decimal("rating",{precision:3,scale:2}),
  reviewCount: integer("review_count").notNull(),
  imageUrl: varchar("image_url", { length: 256 }).notNull(),
  additionalImages: json("additional_images"),
  tags: text("tags"),
  dateAdded: date("date_added", {mode:"date"}).notNull().default(sql`CURRENT_DATE`),
  lastUpdate: date("last_update").notNull().default(sql`CURRENT_DATE`),
  isActive: boolean("is_active").notNull().default(true),
  additionalDetails: json("additional_details")
}, (products) => {
  return {
    skuIndex: uniqueIndex('sku_idx').on(products.sku),
  }
});


// Schema for products - used to validate API requests
export const insertProductSchema = createInsertSchema(products);

export const insertProductParams = createSelectSchema(products, {
  categoryId: z.coerce.number(),
  price: z.coerce.number(),
  discountedPrice: z.coerce.number(),
  quantityInStock: z.coerce.number(),
  weight: z.coerce.number(),
  brandId: z.coerce.number(),
}).omit({ 
  id: true,
   rating: true,
  reviewCount: true,
  dateAdded: true,
  lastUpdate: true,
  isActive: true,
  sku:true
});

export const updateProductSchema = createSelectSchema(products);

export const updateProductParams = createSelectSchema(products,{
  categoryId: z.coerce.number(),
  price: z.coerce.number(),
  discountedPrice: z.coerce.number(),
  quantityInStock: z.coerce.number(),
  weight: z.coerce.number(),
  brandId: z.coerce.number(),
  rating: z.coerce.number(),
  reviewCount: z.coerce.number(),
  dateAdded: z.coerce.string().min(1),
  lastUpdate: z.coerce.string().min(1),
  isActive: z.coerce.boolean()
})

export const productIdSchema = updateProductSchema.pick({ id: true });

// Types for products - used to type API request params and within Components
export type Product = z.infer<typeof updateProductSchema>;
export type NewProduct = z.infer<typeof insertProductSchema>;
export type NewProductParams = z.infer<typeof insertProductParams>;
export type UpdateProductParams = z.infer<typeof updateProductParams>;
export type ProductId = z.infer<typeof productIdSchema>["id"];
    
// this type infers the return from getProducts() - meaning it will include any joins
export type CompleteProduct = Awaited<ReturnType<typeof getProducts>>["products"][number];

