import Header from "@/components/layout/Header";
import Head from "next/head";
import Main from "../components/layout/Main/index";
import Footer from "../components/layout/Footer/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontips</title>
        <meta name="description" content="Blog,com dicas de front" />
      </Head>

      <Header />

      <Main />
      <Footer />
    </>
  );
}
