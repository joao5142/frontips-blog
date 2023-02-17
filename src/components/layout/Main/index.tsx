import styles from "./Main.module.scss";

import classNames from "classnames";

import Section from "../Section/index";
import Wrapper from "../Wrapper/index";
import Author from "../../partials/Author/index";

import PostCard from "@/components/partials/PostCard";
import Button from "@/components/ui/Button";
import Contact from "@/components/form/Contact";

import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module

export default function Main() {
	const [sliderRef] = useKeenSlider({
		slides: { perView: 4, spacing: 5 },
	});

	return (
		<>
			<Wrapper>
				<Section>
					<h2 className="mb-5">Mais Recente</h2>

					<div className="row">
						<div className="col-lg-6">
							<img
								height={400}
								width="100%"
								src="https://images.unsplash.com/photo-1559854036-2409f22a918a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
								alt=""
							/>
						</div>
						<div className="col-lg-6 d-flex align-items-center justify-content-center">
							<div className="w-75">
								<PostCard />
							</div>
						</div>
					</div>
				</Section>

				<div className="position-relative">
					<Section>
						<h2 className="mb-5">Postagens</h2>
						<div className={styles.posts}>
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
						</div>
						<div className="d-flex justify-content-center">
							<Button>Ver Mais</Button>
						</div>
					</Section>
					<div className={classNames("gradient-blur", styles["posts__gradient"])} />
				</div>
			</Wrapper>
			<Wrapper noRight>
				<Section>
					<h2 className="mb-5">Autores</h2>

					<div ref={sliderRef} className="keen-slider">
						<div className="keen-slider__slide number-slide1">
							<Author />
						</div>
						<div className="keen-slider__slide number-slide2">
							<Author />
						</div>
						<div className="keen-slider__slide number-slide3">
							<Author />
						</div>
						<div className="keen-slider__slide number-slide4">
							<Author />
						</div>
						<div className="keen-slider__slide number-slide5">
							<Author />
						</div>
						<div className="keen-slider__slide number-slide6">
							<Author />
						</div>
					</div>
				</Section>
			</Wrapper>
			<Wrapper>
				<Section>
					<div className={styles.contact}>
						<h2 className="mb-5">Deseja fazer parte da equipe ? </h2>
						<Contact />
						<div className={classNames("gradient-blur", styles["contact__gradient"])} />
					</div>
				</Section>
			</Wrapper>
		</>
	);
}
