import { FC, use, useState } from "react";
import { Task } from "@prisma/client";
import { trpc } from "@/utils/trpc";

type TaskProps = {
  task: Task;
};

export const Row: FC<TaskProps> = ({ task }) => {
  const utils = trpc.useContext();
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.text);
  const [] = useState(task.completed)
  const editTask = trpc.todo.edit.useMutation({
    async onMutate({ id, data }) {
      await utils.todo.all.cancel();
      const allTasks = utils.todo.all.getData();
      if (!allTasks) return;
      utils.todo.all.setData(
        undefined,
        allTasks.map((t) => (t.id === id ? { ...t, ...data } : t))
      );
    },
  });

  return (
    <div
      className={`flex w-full p-4 mb-2 justify-between items-center rounded ${
        task.completed ? "bg-gray-400 " : "bg-sky-300"
      }`}
    >
      {/* 編集 */}
      <input
        className={`ml-2 text-xl font-sans font-medium w-full rounded-l ${
          task.completed ? "text-white line-through" : "text-gray-700"
        }`}
        value={text}
        onChange={(e) => {
          const newText = e.currentTarget.value;
          setText(newText);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            editTask.mutate({
              id: task.id,
              data: { text },
            });
            setEditing(false);
          }
        }}
      />
      <div className="flex justify-between items-center mr-2">
        <button
          className="mr-2 h-7 w-7 flex justify-center items-center bg-red-400 hover:bg-red-500 text-white font-bold rounded"
          onClick={() => {}}
        >
          X
        </button>
        {/* todoの完了 */}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={(e) => {
            const checked = e.currentTarget.checked
            
          }}
          className="form-checkbox h-7 w-7"
        />
      </div>
    </div>
  );
};
