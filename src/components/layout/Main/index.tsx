import styles from "./Main.module.scss";

import classNames from "classnames";

import Section from "../Section/index";
import Wrapper from "../Wrapper/index";
import Author from "../../partials/Author/index";

import PostCard from "@/components/partials/PostCard";
import Button from "@/components/ui/Button";

import Link from "next/link";

import { useKeenSlider } from "keen-slider/react";
import ContactSection from "../../partials/ContactSection/index";

export default function Main() {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(max-width: 1200px)": {
        slides: { perView: 3, spacing: 5 },
      },
      "(max-width: 900px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(max-width: 600px)": {
        slides: { perView: 1, spacing: 5 },
      },
    },
    slides: { perView: 4, spacing: 5 },
  });

  return (
    <>
      <Wrapper>
        <Section>
          <h2 className="mb-5">Mais Recente</h2>

          <div className="row  ">
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
              <img
                className={classNames(styles.img, "img-fluid")}
                width="100%"
                src="https://images.unsplash.com/photo-1559854036-2409f22a918a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </div>
            <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
              <div className="w-md-75">
                <PostCard postId={1} />
              </div>
            </div>
          </div>
        </Section>

        <div className="position-relative">
          <Section>
            <h2 className="mb-5">Postagens</h2>
            <div className={styles.posts}>
              <div className="row">
                {new Array(9).fill(1).map((post, index) => {
                  return (
                    <div className="col-lg-4 mb-5" key={index}>
                      <PostCard postId={index + 1} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <Link href="/posts">
                <Button>Ver Mais</Button>
              </Link>
            </div>
          </Section>
          <div className={classNames("gradient-blur", styles["posts__gradient"])} />
        </div>
      </Wrapper>
      <Wrapper noRight>
        <Section>
          <h2 className="mb-5">Autores</h2>

          <div ref={sliderRef} className="keen-slider">
            {new Array(9).fill(1).map((author, index) => {
              return (
                <div className={classNames("keen-slider__slide", "number-slide" + (index + 1))} key={index}>
                  <Author />
                </div>
              );
            })}
          </div>
        </Section>
      </Wrapper>
      <Wrapper>
        <ContactSection />
      </Wrapper>
    </>
  );
}
