import CategoryList from "@/components/categories/CategoryList";
import NewCategoryModal from "@/components/categories/CategoryModal";
import { api } from "@/lib/trpc/api";

export default async function Categories() {
  const { categories } = await api.categories.getCategories.query();  

  return (
    <main>
      <div className="flex justify-between">
        <h1 className="my-2 text-2xl font-semibold">Categories</h1>
        <NewCategoryModal />
      </div>
      <CategoryList categories={categories} />
    </main>
  );
}
