import { prisma } from "../src/server/utils/prisma";

const doBackfill = async () => {
  const createion = await prisma.task.create({
    data: { text: "aaa" },
  });
  console.log("Creation?", createion);
};

doBackfill();
