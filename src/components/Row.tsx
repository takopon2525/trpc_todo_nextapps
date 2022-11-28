import { FC, useState } from "react";
import { Task } from "@prisma/client";
import { trpc } from "@/utils/trpc";
import { ArchiveBoxXMarkIcon } from "@heroicons/react/24/solid";

type TaskProps = {
  task: Task;
};

export const Row: FC<TaskProps> = ({ task }) => {
  const utils = trpc.useContext();
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.text);
  const [completed, setCompleted] = useState(task.completed);
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

  const deleteTask = trpc.todo.delete.useMutation({
    async onMutate() {
      await utils.todo.all.cancel();
      const allTasks = utils.todo.all.getData();
      if (!allTasks) return;
      utils.todo.all.setData(
        undefined,
        allTasks.filter((t) => t.id != task.id)
      );
    },
  });

  return (
    <div
      className={`flex w-full p-2 mb-2 justify-between items-center rounded ${
        completed ? "bg-gray-400 " : "bg-sky-300"
      }`}
    >
      {/* 編集 */}
      <input
        className={`mr-2 text-xl font-sans font-medium w-full rounded ${
          completed ? "line-through" : "text-gray-700"
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
        {/* todoの完了 */}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={(e) => {
            const checked = e.currentTarget.checked;
            setCompleted(checked);
            editTask.mutate({
              id: task.id,
              data: { completed: checked },
            });
          }}
          className="form-checkbox h-7 w-7"
          autoFocus={editing}
        />
        <div
          className="text-gray-600 hover:text-gray-800 mx-2"
          onClick={() => {
            deleteTask.mutate(task.id);
          }}
        >
          <ArchiveBoxXMarkIcon className="h-9 w-9" />
        </div>
      </div>
    </div>
  );
};
