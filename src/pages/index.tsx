import Header from "@/components/layout/Header";
import Head from "next/head";
import Main from "../components/layout/Main/index";
import Footer from "../components/layout/Footer/index";

export default function Home() {
	return (
		<>
			<Head>
				<title>Frontips</title>
				<meta name="description" content="Blob,com dicas de front" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<Main />
			<Footer />
		</>
	);
}
