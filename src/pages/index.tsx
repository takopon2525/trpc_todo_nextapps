import { getAllJSDocTagsOfKind } from "typescript";
import { trpc } from "../utils/trpc";

export default function IndexPage() {
  const todo = trpc.todo.all.useQuery();
  if (!todo.data) return <div>Loading...</div>;
  return (
    <div>
      {todo.data.map((item, i) => (
        <p key={i}>{item.text}</p>
      ))}
    </div>
  );
}
