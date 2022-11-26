import { Todos } from "@/components/Todos";
import { trpc } from "../utils/trpc";

export default function IndexPage() {
  const allTasks = trpc.todo.all.useQuery();
  if (!allTasks.data) return <div>Loading...</div>;
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <Todos tasks={allTasks.data} />
    </div>
  );
}
