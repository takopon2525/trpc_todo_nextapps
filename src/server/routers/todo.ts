import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { prisma } from "../../server/utils/prisma";

export const todoRouter = router({
  all: publicProcedure.query(async () => {
    return await prisma.task.findMany({
      orderBy: {
        createdAt: "desc",
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
  edit: publicProcedure
    .input(
      z.object({
        id: z.string().uuid(),
        data: z.object({
          completed: z.boolean().optional(),
          text: z.string().min(1).optional(),
        }),
      })
    )
    .mutation(async ({ input }) => {
      const { id, data } = input;
      const todo = await prisma.task.update({
        where: { id },
        data,
      });
      return todo;
    }),
  delete: publicProcedure
    .input(z.string().uuid())
    .mutation(async ({ input: id }) => {
      await prisma.task.delete({ where: { id } });
      return id;
    }),
});
