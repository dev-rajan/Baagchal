import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/Common/Layout/Layout";
import "../assets/scss/main.scss"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;