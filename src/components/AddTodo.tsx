import { Task } from "@prisma/client";
import { ChangeEvent, FC, FormEvent } from "react";

type AddTodoProps = {
  task: Task;
  handleSumitTodo: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent) => void;
};

export const AddTodo: FC<AddTodoProps> = ({
  task,
  handleSumitTodo,
  handleChange,
}) => {
  return <div>AddTodo</div>;
};
