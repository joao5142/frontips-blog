import Navbar from "@/components/layout/Navbar";
import Wrapper from "@/components/layout/Wrapper";
import styles from "@/styles/pages/404.module.scss";

import classNames from "classnames";

export default function Custom404() {
  return (
    <>
      <Wrapper>
        <header className="mt-5">
          <Navbar />
          <div className="d-flex justify-content-center mt-5">
            <div className={classNames("gradient-blur", styles.gradient)} />
            <div className={classNames("gradient-blur", styles["gradient--2"])} />
            <img className={styles["error-image"]} width={400} src="/assets/ilustrations/404.svg" alt="Error" />
          </div>
        </header>
      </Wrapper>
    </>
  );
}
