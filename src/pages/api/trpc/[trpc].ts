import * as trpcNext from "@trpc/server/adapters/next";
import { inferProcedureOutput } from "@trpc/server";
import { appRouter, AppRouter  } from "../../../server/routers/_app";

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});

export type inferQueryResponse<
  TRouteKey extends keyof AppRouter["_def"]["queries"]
> = inferProcedureOutput<AppRouter["_def"]["queries"][TRouteKey]>;