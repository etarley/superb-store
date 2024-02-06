
import Categories from "@/components/Categories";
import Products from "@/components/products/products";


export default async function Home(
  {searchParams}:
  {searchParams: { [key: string]: string | string[] | undefined }}
) {
  
const {category} = searchParams





  return (
      <>
    <Categories categoryParam={category}/>
    <Products/>
        {/* {session ? (
          <pre className="whitespace-break-spaces break-all rounded-sm bg-secondary p-4 text-secondary-foreground shadow-sm">
            {JSON.stringify(session, null, 2)}
          </pre>
        ) : null} */}
      </>
  );
}
