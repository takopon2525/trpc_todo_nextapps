import { Todos } from "@/components/Todos";
import { trpc } from "../utils/trpc";

export default function IndexPage() {
  const todo = trpc.todo.all.useQuery();
  if (!todo.data) return <div>Loading...</div>;
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <Todos tasks={todo.data} />
    </div>
  );
}
