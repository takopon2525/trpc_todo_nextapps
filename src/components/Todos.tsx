import { Task } from "@prisma/client";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { isTemplateExpression } from "typescript";
import { v4 as uuidv4 } from "uuid";
import { Row } from "./Row";

export const Todos: FC<{ tasks: Task[] }> = (props) => {
  const handleCheckTodo = () => {};
  const handleDeleteTodo = () => {};
  return (
    <div>
      <h3>this is todo lists</h3>
      <ul>
        {props?.tasks?.map((item, i) => (
          <li key={i}>todo:{item.text}</li>
        ))}
      </ul>
      {props.tasks.map((task) => (
        <Row
          key={task.id}
          task={task}
          handleCheckTodo={() => handleCheckTodo}
          handleDeleteTodo={() => handleDeleteTodo}
        />
      ))}
    </div>
  );
};
