import styles from "./Main.module.scss";

import Button from "@/components/ui/Button";
import Section from "../Section/index";
import Wrapper from "../Wrapper/index";
import ChevronRight from "../../icons/ChevronRight/index";
import PostCard from "@/components/partials/PostCard";

export default function Main() {
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

				<Section>
					<h2 className="mb-5">Autores</h2>
				</Section>
			</Wrapper>
		</>
	);
}
