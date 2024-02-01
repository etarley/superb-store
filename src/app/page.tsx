
import Categories from "@/components/Categories";
import Products from "@/components/products/products";
import { getUserAuth } from "@/lib/auth/utils";


export default async function Home() {
  
  const { session } = await getUserAuth();
  return (
      <main className="container">
    <Categories/>
    <Products/>
        {session ? (
          <pre className="whitespace-break-spaces break-all rounded-sm bg-secondary p-4 text-secondary-foreground shadow-sm">
            {JSON.stringify(session, null, 2)}
          </pre>
        ) : null}
      </main>
  );
}
