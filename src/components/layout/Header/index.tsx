import Navbar from "../Navbar";
import styles from "./Header.module.scss";
import classNames from "classnames";
import Wrapper from "../Wrapper/index";

export default function Header() {
	return (
		<Wrapper>
			<header className={classNames(styles.header, "container-width")}>
				<Navbar />

				<div className={classNames("gradient-blur", styles["header__gradient"])} />
				<h1 className={styles["header__title"]}>Aqui voce recebe dicas sobre front-end !</h1>
				<div className={classNames(styles["header__socials"], "d-flex gap-5 ")}>
					<img src="/assets/icons/facebook.svg" alt="Facebook" />
					<img src="/assets/icons/twitter.svg" alt="Twitter" />
					<img src="/assets/icons/instagram.svg" alt="Instagram" />
				</div>
			</header>
		</Wrapper>
	);
}
