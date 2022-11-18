import { todoRouter } from "./todo";
import { z } from "zod";
import { router } from "../trpc";
import { helloRouter } from "./hello";

export const appRouter = router({
  hello: helloRouter,
  todo: todoRouter,
});

export type AppRouter = typeof appRouter;
