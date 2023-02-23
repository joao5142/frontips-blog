import Wrapper from "../../components/layout/Wrapper/index";
import Head from "next/head";
import Navbar from "../../components/layout/Navbar/index";

import styles from "./Post.module.scss";
import classNames from "classnames";
import Footer from "@/components/layout/Footer";

export default function Post() {
  return (
    <div>
      <Head>
        <title>Frontips Postagens</title>
        <meta name="description" content="Frontips,postagens sobre tecnologias front-end." />
      </Head>

      <Wrapper>
        <div className="mt-5">
          <Navbar />
        </div>
        <div className={styles.post}>
          <main className="mt-5">
            <div className={classNames("d-flex justify-content-between align-items-center", styles["post__header"])}>
              <div className={styles["post__author"]}>
                <img
                  src="https://img.freepik.com/free-photo/positive-plump-man-with-thick-beard-shares-great-news-social-networks-with-friend-being-cloud-nine-from-happiness-holds-modern-smartphone_273609-34625.jpg?w=1380&t=st=1676645288~exp=1676645888~hmac=9970e77cda201b5162010838b58bd4b03291bca3f47c1ec7ff2dcf89b7e6aab9"
                  alt="Author"
                  className={styles["post__author-image"]}
                />
                <span>Maya Unzip</span>
              </div>
              <small className={styles["post__date"]}>15/02/2023</small>
            </div>

            <section className={classNames("mt-5", styles["post__body"])}>
              <h3 className={styles["post__title"]}>Propriedade z-index</h3>
              <img src="/assets/posts/z-index-01.png" alt="Author" />
              <p>
                Morem ipsum dolor sit <strong>amet</strong>, consectetur adipiscing elit. Nunc vulputate libero et velit
                interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.Morem ipsum dolor sit amet,
                consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus
                urna at turpis condimentum lobortis.
              </p>

              <img src="/assets/posts/z-index.webp" alt="Post" />
              <div className={styles["post__separator"]}></div>
              <p>
                Morem ipsum dolor sit amet, <strong>consectetur</strong> adipiscing elit. Nunc vulputate libero et velit
                interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.Morem ipsum dolor sit amet,
                consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus
                urna at turpis condimentum lobortis.
              </p>
            </section>
          </main>
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
}
