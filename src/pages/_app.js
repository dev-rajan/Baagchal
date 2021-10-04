import { useEffect } from "react";
import Layout from "../components/Common/Layout/Layout";
import "../assets/scss/main.scss"
import "bootstrap/dist/css/bootstrap.css";
import Meta from "../partials/Meta";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, [])
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
