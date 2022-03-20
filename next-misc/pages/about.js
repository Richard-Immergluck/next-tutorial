import Head from "next/head";
import Footer from "../components/layout/Footer";

function About() {
  return (
    <>
    <Head>
      <title>About!</title>
      <meta name='description' content='about page innit'></meta>
    </Head>
      <h1 className="content">Content</h1>;
    </>
  );
}

export default About;

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
