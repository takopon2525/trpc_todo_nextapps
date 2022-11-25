import { Task } from "@prisma/client";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { AddTodo } from "./AddTodo";
import { Row } from "./Row";

export const Todos: FC<{ tasks: Task[] }> = (props) => {
  const [task, setTask] = useState("");
  const hasTodos = props.tasks.length > 0;
  const remainingTodos = props.tasks.filter((task) => !task.completed).length;

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setTask(value);
  };

  const handleSubmitTodo = (e: FormEvent) => {
    e.preventDefault();
    // TODO:ここにデータベースに入れるメソッドを追加
  };

  const handleCheckTodo = () => {};
  const handleDeleteTodo = () => {};
  return (
    <section className="w-10/12 lg:w-1/2 max-w-2xl flex flex-col items-center">
      <AddTodo
        task={task}
        handleChange={handleChange}
        handleSumitTodo={handleSubmitTodo}
      />
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
