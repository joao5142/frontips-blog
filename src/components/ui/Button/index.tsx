import styles from "./Button.module.scss";
import classNames from "classnames";

import { useState } from "react";

type PropsType = {
	children: React.ReactNode;
	className?: string;
	mouseMove?: Function;
};

export default function Button({ children, className, mouseMove }: PropsType) {
	const [isActive, setIsActive] = useState<boolean>();

	return (
		<button
			onMouseLeave={() => {
				setIsActive(false);
				if (mouseMove) mouseMove(false);
			}}
			onMouseEnter={() => {
				setIsActive(true);
				if (mouseMove) mouseMove(true);
			}}
			className={classNames(styles.button, className)}
		>
			{children}
		</button>
	);
}
