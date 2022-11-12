import { trpc } from "../utils/trpc";

export default function IndexPage() {
  // const hello = trpc.hello.hello.useQuery({ text: "client" });
  const hello = trpc.hello.hello.useQuery({ text: "client" });
  if (!hello.data) return <div>Loading...</div>;
  return (
    <div>
      <p>{hello.data.greeting}</p>
    </div>
  );
}
