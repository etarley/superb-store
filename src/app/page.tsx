
import Categories from "@/components/Categories";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { getUserAuth } from "@/lib/auth/utils";


export default async function Home() {
  
  const { session } = await getUserAuth();
  return (
  <MaxWidthWrapper>
    <Categories/>
      <main>
        {session ? (
          <pre className="whitespace-break-spaces break-all rounded-sm bg-secondary p-4 text-secondary-foreground shadow-sm">
            {JSON.stringify(session, null, 2)}
          </pre>
        ) : null}
      </main>
  </MaxWidthWrapper>
  );
}
