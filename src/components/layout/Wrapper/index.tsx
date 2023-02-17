import styles from "./Wrapper.module.scss";
import classNames from "classnames";

type PropsType = {
	children: React.ReactNode;
	noRight?: boolean;
	noLeft?: boolean;
};

export default function Wrapper({ children, noLeft, noRight }: PropsType) {
	return (
		<div
			className={classNames(
				styles.container,
				{ [styles["container--no-right"]]: noRight },
				{ [styles["container--no-left"]]: noLeft }
			)}
		>
			{children}
		</div>
	);
}
