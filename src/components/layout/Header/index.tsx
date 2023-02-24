import Navbar from "../Navbar";
import styles from "./Header.module.scss";
import classNames from "classnames";
import Wrapper from "../Wrapper/index";

export default function Header() {
  return (
    <Wrapper>
      <header className={classNames(styles.header, "container-width")}>
        <div className="mt-3 mt-md-5">
          <Navbar />
        </div>
        <div className={classNames("gradient-blur", styles["header__gradient"])} />
        <div className={classNames("gradient-blur", styles["header__gradient--2"])} />
        <div className={styles["header__container-title"]}>
          <h1 className={styles["header__title"]}>
            As melhores dicas sobre
            <span className={styles["header__title--bold"]}> Front-end</span>
            <span className={styles["header__title--dot"]}>.</span>
          </h1>
          <div className={classNames(styles["header__socials"], "d-flex gap-5")}>
            <img src="/assets/icons/facebook.svg" alt="Facebook" />
            <img src="/assets/icons/twitter.svg" alt="Twitter" />
            <img src="/assets/icons/instagram.svg" alt="Instagram" />
          </div>
        </div>
      </header>
    </Wrapper>
  );
}
