import { getAllJSDocTagsOfKind } from "typescript";
import { trpc } from "../utils/trpc";

export default function IndexPage() {
  const todo = trpc.todo.all.useQuery();
  if (!todo.data) return <div>Loading...</div>;
  return (
    <div className="mx-auto max-w-6xl flex justify-center">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h3 className="bg-slate-500">登録されているtodo</h3>
      {todo.data.map((item, i) => (
        <p key={i}>
          {i + 1}件目:{item.text}
        </p>
      ))}
      <h3>新しいtodoの登録</h3>
      <button className="bg-indigo-300 py-2">aaaa</button>
    </div>
  );
}
