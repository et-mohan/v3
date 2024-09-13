import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Mohankumar | portfolio</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="description" content="etmohan|mohankumar|Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="mohankumar | software Developer" />
        <meta name="description" content="Hey! I'm Mohankumar, and I'm software engineer." />

        <meta property="og:title" content="mohankumar | software Developer" />
        <meta property="og:type" content="article" />
       
      
      </Head>
      <Home />
    </>
  );
}
