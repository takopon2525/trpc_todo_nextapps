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
});
