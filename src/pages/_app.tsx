import "../styles/globals.css";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className="grid grid-cols-9">
      <Component {...pageProps} />
    </main>
  );
};

export default trpc.withTRPC(MyApp);
