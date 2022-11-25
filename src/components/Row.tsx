import { FC } from "react";
import { Task } from "@prisma/client";

type TaskProps = {
  task: Task;
  handleCheckTodo: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
};

export const Row: FC<TaskProps> = ({
  task,
  handleCheckTodo,
  handleDeleteTodo,
}) => {
  return <div></div>;
};
