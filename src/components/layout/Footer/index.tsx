import Navbar from "../Navbar";
import styles from "./Footer.module.scss";
import classNames from "classnames";
import Wrapper from "../Wrapper";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <div className="d-flex align-items-center justify-content-center justify-content-md-between">
          <div className="d-none d-md-block">
            <Navbar />
          </div>
          <div className={classNames(styles["footer__socials"], "d-flex alig-items-center gap-5")}>
            <img src="/assets/icons/facebook.svg" alt="Facebook" />
            <img src="/assets/icons/twitter.svg" alt="Twitter" />
            <img src="/assets/icons/instagram.svg" alt="Instagram" />
          </div>
        </div>
        <div className={classNames(styles["footer__copy"], "text-center mt-4")}>© Frontips - 2023</div>
      </Wrapper>
    </footer>
  );
}
