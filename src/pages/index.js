import Bags from "../components/Home/Bags";
import Characters from "../components/Home/Characters";
import Discover from "../components/Home/Discover";
import Hero from "../components/Home/Hero";
import History from "../components/Home/History";
import Work from "../components/Home/Work";
import Meta from "../partials/Meta";

export default function Home() {
  return (
    <>
      <Meta
        DESCRIPTION="description"
        OG_TYPE="og:type"
        OG_TITLE="og:title"
        OG_DESCRIPTION="description"
        OG_URL="og:url"
        TWITTER_CARD="twitter:card"
        TWITTER_TITLE="twitter:title"
        TWITTER_DESC="twitter:description"
        TWITTER_URL="twitter:url"
        OG_IMG="og:image"
        TWITTER_IMG="twitter:image"
        TITLE="Baagchal || Home"
      />
      <Hero />
      <History />
      <Work />
      <Characters />
      <Bags />
      <Discover />
    </>
  );
}
