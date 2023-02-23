import Contact from "@/components/form/Contact";
import Section from "@/components/layout/Section";
import styles from "./ContactSection.module.scss";

import classNames from "classnames";

export default function ContactSection() {
  return (
    <Section>
      <div className={styles.contact}>
        <h2 className="mb-5">Deseja fazer parte da equipe ? </h2>
        <Contact />
        <div className={classNames("gradient-blur", styles["contact__gradient"])} />
      </div>
    </Section>
  );
}
