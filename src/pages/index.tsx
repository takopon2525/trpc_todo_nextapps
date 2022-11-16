import { getAllJSDocTagsOfKind } from "typescript";
import { trpc } from "../utils/trpc";

export default function IndexPage() {
  const todo = trpc.todo.all.useQuery();
  if (!todo.data) return <div>Loading...</div>;
  return (
    <div>
      <h3>登録されているtodo</h3>
      {todo.data.map((item, i) => (
        <p key={i}>
          {i + 1}件目:{item.text}
        </p>
      ))}
      <h3>新しいtodoの登録</h3>
    </div>
  );
}
