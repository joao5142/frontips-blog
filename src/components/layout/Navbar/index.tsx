import styles from "./Navbar.module.scss";

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<ul className="d-flex gap-5">
				<li>Home</li>
				<li>Postagens</li>
				<li>Sobre</li>
				<li>Contato</li>
			</ul>
		</nav>
	);
}
