import Bags from "../components/Home/Bags";
import Characters from "../components/Home/Characters";
import Discover from "../components/Home/Discover";
import Hero from "../components/Home/Hero";
import History from "../components/Home/History";
import Work from "../components/Home/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <History />
      <Work />
      <Characters />
      <Bags />
      <Discover />
    </>
  );
}
