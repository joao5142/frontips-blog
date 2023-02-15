import styles from "./Button.module.scss";
import classNames from "classnames";

type PropsType = {
	children: React.ReactNode;
	className: string;
};

export default function Button({ children, className }: PropsType) {
	return <button className={classNames(styles.button, className)}>{children}</button>;
}
