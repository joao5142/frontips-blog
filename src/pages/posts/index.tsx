import Header from "@/components/layout/Header";
import Footer from "../../components/layout/Footer/index";
import Wrapper from "../../components/layout/Wrapper/index";
import Head from "next/head";
import PostCard from "../../components/partials/PostCard/index";
import Pagination from "@/components/partials/Pagination";
import ContactSection from "../../components/partials/ContactSection/index";

export default function Posts() {
  return (
    <div>
      <Head>
        <title>Frontips Postagens</title>
        <meta name="description" content="Frontips,postagens sobre tecnologias front-end." />
      </Head>

      <Header />
      <main>
        <Wrapper>
          <div className="row">
            {new Array(9).fill(1).map((post, index) => {
              return (
                <div className="col-lg-4 mb-5" key={index}>
                  <PostCard postId={index + 1} />
                </div>
              );
            })}
          </div>
          <div className="mb-5 mt-5">
            <Pagination length={5} />
          </div>

          <ContactSection />
        </Wrapper>
      </main>
      <Footer />
    </div>
  );
}
