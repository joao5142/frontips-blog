import Header from "@/components/layout/Header";
import Footer from "../../components/layout/Footer/index";
import Wrapper from "../../components/layout/Wrapper/index";
import Head from "next/head";
import PostCard from "../../components/partials/PostCard/index";

export default function Posts() {
	return (
		<div>
			<Head>
				<title>Frontips Postagens</title>
				<meta name="description" content="Frontips,postagens sobre tecnologias front-end." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<main>
				<Wrapper>
					<div className="row">
						<div className="col-lg-4 mb-5">
							<PostCard />
						</div>

						<div className="col-lg-4 mb-5">
							<PostCard />
						</div>

						<div className="col-lg-4 mb-5">
							<PostCard />
						</div>

						<div className="col-lg-4 mb-5">
							<PostCard />
						</div>

						<div className="col-lg-4 mb-5">
							<PostCard />
						</div>

						<div className="col-lg-4 mb-5">
							<PostCard />
						</div>

						<div className="col-lg-4 mb-5">
							<PostCard />
						</div>

						<div className="col-lg-4 mb-5">
							<PostCard />
						</div>

						<div className="col-lg-4 mb-5">
							<PostCard />
						</div>
					</div>
				</Wrapper>
				;
			</main>
			<Footer />
		</div>
	);
}
