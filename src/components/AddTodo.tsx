import { ChangeEvent, FC, FormEvent } from "react";

type AddTodoProps = {
  task: string;
  handleSumitTodo: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent) => void;
};

export const AddTodo: FC<AddTodoProps> = ({
  task,
  handleSumitTodo,
  handleChange,
}) => {
  return (
    <form className="flex justify-between w-full" onSubmit={handleSumitTodo}>
      <input
        type="text"
        name="task"
        value={task}
        className="flex-1 rounded shadow p-2 text-grey-dark mr-2"
        onChange={handleChange}
      />
      <button
        className="mr-2 h-9 w-9 flex justify-center items-center bg-sky-400 hover:bg-sky-500 text-white font-bold rounded"
        type="submit"
      >
        ＋
      </button>
    </form>
  );
};
