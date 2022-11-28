import "../styles/globals.css";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

const MyApp: AppType = ({ Component, pageProps }) => {
  const title = "TODOアプリを作成して学ぶ";
  const imgurl = "https://trpc-todo-nextapps.vercel.app/headerImg.png";
  const description = "tRPCとsupabseを使ってTODOアプリを作ってみましょう！";
  return (
    <div>
      <Toaster />
      <Head>
        <title>Todos</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={imgurl} />
        <meta property="og:description" content={description} />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
};

export default trpc.withTRPC(MyApp);
