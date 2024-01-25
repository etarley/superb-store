import { computersRouter } from "./computers";
import { router } from "@/lib/server/trpc";
import { productsRouter } from "./products";

export const appRouter = router({
  computers: computersRouter,
  products: productsRouter,
});

export type AppRouter = typeof appRouter;
