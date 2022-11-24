import { FC } from "react";
import { Task } from "@prisma/client";

type TodoProps = {
  todo: Task;
  handleCheckTodo: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
};

export const Row: FC<{ todo: TodoProps }> = (todo) => {
  return <div>Row</div>;
};
