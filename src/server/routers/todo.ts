import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { prisma } from "../../server/utils/prisma";

export const todoRouter = router({
  all: publicProcedure.query(async () => {
    return await prisma.task.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });
  }),
  add: publicProcedure
    .input(
      z.object({
        id: z.string().optional(),
        text: z.string().min(1),
      })
    )
    .mutation(async ({ input }) => {
      const todo = await prisma.task.create({
        data: input,
      });
      return todo;
    }),
});
