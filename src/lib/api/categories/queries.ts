import { db } from "@/lib/db/index";
import { eq } from "drizzle-orm";
import { type CategoryId, categoryIdSchema, categories } from "@/lib/db/schema/categories";

export const getCategories = async () => {
  const c = await db.select().from(categories);
  return { categories: c };
};

export const getCategoryById = async (id: CategoryId) => {
  const { id: categoryId } = categoryIdSchema.parse({ id });
  const [c] = await db.select().from(categories).where(eq(categories.id, categoryId));
  return { category: c };
};

