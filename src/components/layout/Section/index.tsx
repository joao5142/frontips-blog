import styles from "./Section.module.scss";

type PropsType = {
	children: React.ReactNode;
};
export default function Section({ children }: PropsType) {
	return <section className={styles.section}>{children}</section>;
}
