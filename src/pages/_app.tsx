import "../styles/globals.css";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";
import { Toaster } from "react-hot-toast";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div>
      <Toaster />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
};

export default trpc.withTRPC(MyApp);
