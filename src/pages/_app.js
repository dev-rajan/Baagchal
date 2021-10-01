import Head from "next/head";
import Layout from "../components/Common/Layout/Layout";
import "../assets/scss/main.scss"
import "bootstrap/dist/css/bootstrap.css";
import Meta from "../partials/Meta";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
