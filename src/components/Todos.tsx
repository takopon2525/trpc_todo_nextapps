import { trpc } from "@/utils/trpc";
import { Task } from "@prisma/client";
import { FC, useState } from "react";
import toast from "react-hot-toast";
import { Row } from "./Row";

export const Todos: FC<{ tasks: Task[] }> = (props) => {
  const hasTodos = props.tasks.length > 0;
  const remainingTodos = props.tasks.filter((task) => !task.completed).length;
  const utils = trpc.useContext();

  const addTask = trpc.todo.add.useMutation({
    async onMutate({ text }) {
      const notification = toast.loading("todoを投稿しています...");
      console.log("onMutate");
      await utils.todo.all.cancel();
      const tasks = props.tasks ?? [];
      // react-hookでここでデータを待つようにしたらいいかもしれない。
      // loadingをかませるような感じ

      utils.todo.all.setData(undefined, [
        ...tasks,
        {
          id: `${Math.random()}`,
          completed: false,
          text,
          createdAt: new Date(),
        },
      ]);
      toast.success("todoの投稿に成功しました！", {
        id: notification,
      });
    },
    // toastingを表示する
    async onSuccess() {
      console.log("success");
    },
  });

  const handleCheckTodo = () => {};
  const handleDeleteTodo = () => {};

  return (
    <section className="h-screen w-10/12 lg:w-1/2 max-w-2xl flex flex-col items-center">
      <div className="flex justify-between w-full my-5">
        <input
          className="flex-1 rounded shadow p-2 text-grey-dark mr-2"
          placeholder="What needs to be done"
          autoFocus
          onKeyDown={(e) => {
            const text = e.currentTarget.value.trim();
            if (e.key === "Enter" && text) {
              addTask.mutate({ text });
              e.currentTarget.value = "";
            }
          }}
        />
      </div>
      <div className="h-10" />
      {props.tasks.map((task) => (
        <Row
          key={task.id}
          task={task}
          handleCheckTodo={() => handleCheckTodo}
          handleDeleteTodo={() => handleDeleteTodo}
        />
      ))}
      {!hasTodos && <p>Please add a todo!</p>}
      {hasTodos && (
        <p>
          [{remainingTodos} of {props.tasks.length}] todos remaining
        </p>
      )}
    </section>
  );
};
