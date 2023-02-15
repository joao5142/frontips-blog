import Navbar from "@/components/layout/Navbar";
import Wrapper from "@/components/layout/Wrapper";
import styles from "@/styles/pages/404.module.scss";

import classNames from "classnames";

export default function Custom404() {
	return (
		<>
			<Wrapper>
				<Navbar />
				<div className="d-flex justify-content-center mt-5">
					<div className={classNames("gradient-blur", styles.gradient)} />
					<img width={400} src="/assets/ilustrations/404.svg" alt="Error" />
				</div>
			</Wrapper>
		</>
	);
}
