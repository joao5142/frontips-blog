import styles from "./Section.module.scss";
import classNames from "classnames";

type PropsType = {
	children: React.ReactNode;
};
export default function Section({ children }: PropsType) {
	return <section className={classNames(styles.section)}>{children}</section>;
}
