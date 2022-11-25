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
  return (
    <div
      className={`flex w-full p-4 mb-2 justify-between items-center rounded ${
        task.completed ? "bg-gray-400 " : "bg-blue-300"
      }`}
    >
      <p
        className={`ml-2 text-xl font-sans font-medium ${
          task.completed ? "text-white line-through" : "text-gray-700"
        }`}
      >
        {task.text}
      </p>
    </div>
  );
};
