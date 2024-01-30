"use client";
import { CompleteCategory } from "@/lib/db/schema/categories";
import { trpc } from "@/lib/trpc/client";
import CategoryModal from "./CategoryModal";


export default function CategoryList({ categories }: { categories: CompleteCategory[] }) {
  const { data: c } = trpc.categories.getCategories.useQuery(undefined, {
    initialData: { categories },
    refetchOnMount: false,
  });

  if (c.categories.length === 0) {
    return <EmptyState />;
  }

  return (
    <ul>
      {c.categories.map((category) => (
        <Category category={category} key={category.id} />
      ))}
    </ul>
  );
}

const Category = ({ category }: { category: CompleteCategory }) => {
  return (
    <li className="flex justify-between my-2">
      <div className="w-full">
        <div>{category.name}</div>
      </div>
      <CategoryModal category={category} />
    </li>
  );
};

const EmptyState = () => {
  return (
    <div className="text-center">
      <h3 className="mt-2 text-sm font-semibold text-secondary-foreground">
        No categories
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Get started by creating a new category.
      </p>
      <div className="mt-6">
        <CategoryModal emptyState={true} />
      </div>
    </div>
  );
};

