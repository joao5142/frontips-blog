import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Head from "next/head";
import Wrapper from "../components/layout/Wrapper/index";
import Main from "../components/layout/Main/index";

export default function Home() {
	return (
		<>
			<Head>
				<title>FronTips</title>
				<meta name="description" content="Blob,com dicas de front" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<Main />
		</>
	);
}
