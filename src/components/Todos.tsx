import { Task } from "@prisma/client";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { isTemplateExpression } from "typescript";
import { v4 as uuidv4 } from "uuid";

type Props = {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
};

export const Todos: FC<{ result: Task[] }> = (result) => {
  return (
    <div>
      <h3>this is todo lists</h3>
      <ul>
        {result.result.map((item, i) => (
          <li key={i}>{item.id}</li>
        ))}
      </ul>
    </div>
  );
};
