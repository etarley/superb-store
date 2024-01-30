import { text, varchar, pgTable, uniqueIndex } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

import { type getCategories } from "@/lib/api/categories/queries";

import { nanoid } from "@/lib/utils";


export const categories = pgTable('categories', {
  id: varchar("id", { length: 191 }).primaryKey().$defaultFn(() => nanoid()),
  name: text("name").notNull(),
  categoryIcon: varchar("category_icon", { length: 256 })
}, (categories) => {
  return {
    nameIndex: uniqueIndex('name_idx').on(categories.name),
  }
});


// Schema for categories - used to validate API requests
export const insertCategorySchema = createInsertSchema(categories);

export const insertCategoryParams = createSelectSchema(categories, {}).omit({ 
  id: true
});

export const updateCategorySchema = createSelectSchema(categories);

export const updateCategoryParams = createSelectSchema(categories,{})

export const categoryIdSchema = updateCategorySchema.pick({ id: true });

// Types for categories - used to type API request params and within Components
export type Category = z.infer<typeof updateCategorySchema>;
export type NewCategory = z.infer<typeof insertCategorySchema>;
export type NewCategoryParams = z.infer<typeof insertCategoryParams>;
export type UpdateCategoryParams = z.infer<typeof updateCategoryParams>;
export type CategoryId = z.infer<typeof categoryIdSchema>["id"];
    
// this type infers the return from getCategories() - meaning it will include any joins
export type CompleteCategory = Awaited<ReturnType<typeof getCategories>>["categories"][number];

