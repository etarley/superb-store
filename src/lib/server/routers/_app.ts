import { router } from "@/lib/server/trpc";
import { categoriesRouter } from "./categories";

export const appRouter = router({
  categories: categoriesRouter,
});

export type AppRouter = typeof appRouter;
