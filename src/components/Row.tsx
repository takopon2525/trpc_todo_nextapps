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
        task.completed ? "bg-gray-400 " : "bg-sky-300"
      }`}
    >
      <p
        className={`ml-2 text-xl font-sans font-medium ${
          task.completed ? "text-white line-through" : "text-gray-700"
        }`}
      >
        {task.text}
      </p>
      <div className="flex justify-between items-center mr-2">
        <button
          className="h-7 w-7 flex justify-center items-center bg-red-400 hover:bg-red-500 text-white font-bold rounded"
          onClick={() => handleDeleteTodo(task.id)}
        >
          X
        </button>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => handleCheckTodo(task.id)}
          className="form-checkbox h-7 w-7"
        />
      </div>
    </div>
  );
};
