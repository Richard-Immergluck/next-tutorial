import Head from "next/head";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import "styles/globals.css";
import "styles/layout.css";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <title>About Misc Tutorial stuffz</title>
        <meta
          name="description"
          content="Interesting information for your benefit"
        ></meta>
      </Head>
      <Header />
      <h1 className="content">Content</h1>;
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
