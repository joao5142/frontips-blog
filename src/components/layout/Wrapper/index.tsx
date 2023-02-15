import styles from "./Wrapper.module.scss";

type PropsType = {
	children: React.ReactNode;
};

export default function Wrapper({ children }: PropsType) {
	return <div className={styles.container}>{children}</div>;
}
