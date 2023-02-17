import "bootstrap/dist/css/bootstrap.css";
import "keen-slider/keen-slider.min.css";

import "@/styles/app.scss";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
