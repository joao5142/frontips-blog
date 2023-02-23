import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <ul className="d-flex gap-5 d-none d-md-flex">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/posts">
          <li>Postagens</li>
        </Link>
        <Link href="/404">
          <li>Sobre</li>
        </Link>
        <Link href="/404">
          <li>Contato</li>
        </Link>
      </ul>
      {isMenuOpen ? (
        <div className={styles["menu"]}>
          <div className="d-flex justify-content-end px-4 py-4">
            <FontAwesomeIcon
              cursor="pointer"
              className="d-block d-md-none"
              size="2x"
              icon={faClose}
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
          <ul className="d-block gap-5">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/posts">
              <li>Postagens</li>
            </Link>
            <Link href="/404">
              <li>Sobre</li>
            </Link>
            <Link href="/404">
              <li>Contato</li>
            </Link>
          </ul>
        </div>
      ) : (
        ""
      )}
      <FontAwesomeIcon
        cursor="pointer"
        onClick={() => setIsMenuOpen(true)}
        className="d-block d-md-none"
        size="2x"
        icon={faBars}
      />
    </nav>
  );
}
