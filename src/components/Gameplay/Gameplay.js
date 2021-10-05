import React from "react";
import Meta from "../../partials/Meta";

const Gameplay = () => {
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
        TITLE="Baagchal || Gameplay"
      />
      <section className="gameplay">
        <div className="gameplay-hero">
          <div className="bg-img"></div>
          <div className="contents d-flex align-items-center justify-content-center">
            <div className="wrapper container">
              <div data-aos="fade-up" data-aos-delay="300" className="heading">
                <span>{Items?.heading}</span>
              </div>
              <div data-aos="fade-up" data-aos-delay="400" className="title">
                <span className="text-uppercase">{Items?.title}</span>
              </div>
              <p data-aos="fade-up" data-aos-delay="500" className="description text-light">{Items?.description}</p>
            </div>
          </div>
        </div>
        {/* Instruction */}
        <div className="instruction">
          <div className="wrapper container">
            <div className="tasks">
              {Items?.info?.map((a) => (
                <GameInfo key={a.id} {...a} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gameplay;

const GameInfo = ({ title, news_title }) => {
  return (
    <div data-aos="fade-up" data-aos-delay="300" className="row">
      <div className="col-md-5">
        <div className="title">
          <span className="text-uppercase">{title}</span>
        </div>
        <p className="description">{news_title}</p>
      </div>
    </div>
  );
};

const Items = {
  heading: "Welcome to the Baagchal",
  title: "Learn the basics",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa ac hendrerit ut facilisis eget venenatis quisque libero.",
  info: [
    {
      id: 1,
      title: "Destroy the base",
      news_title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa ac hendrerit ut facilisis eget venenatis quisque libero.",
    },
    {
      id: 2,
      title: "Take on the jungle",
      news_title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa ac hendrerit ut facilisis eget venenatis quisque libero.",
    },
    {
      id: 3,
      title: "Multiple ways to play",
      news_title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa ac hendrerit ut facilisis eget venenatis quisque libero.",
    },
    {
      id: 4,
      title: "Choose your character",
      news_title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa ac hendrerit ut facilisis eget venenatis quisque libero.",
    },
  ],
};
