import { db } from "@/lib/db/index";
import { eq } from "drizzle-orm";
import { 
  CategoryId, 
  NewCategoryParams,
  UpdateCategoryParams, 
  updateCategorySchema,
  insertCategorySchema, 
  categories,
  categoryIdSchema 
} from "@/lib/db/schema/categories";

export const createCategory = async (category: NewCategoryParams) => {
  const newCategory = insertCategorySchema.parse(category);
  try {
    const [c] =  await db.insert(categories).values(newCategory).returning();
    return { category: c };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};

export const updateCategory = async (id: CategoryId, category: UpdateCategoryParams) => {
  const { id: categoryId } = categoryIdSchema.parse({ id });
  const newCategory = updateCategorySchema.parse(category);
  try {
    const [c] =  await db
     .update(categories)
     .set(newCategory)
     .where(eq(categories.id, categoryId!))
     .returning();
    return { category: c };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};

export const deleteCategory = async (id: CategoryId) => {
  const { id: categoryId } = categoryIdSchema.parse({ id });
  try {
    const [c] =  await db.delete(categories).where(eq(categories.id, categoryId!))
    .returning();
    return { category: c };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};

