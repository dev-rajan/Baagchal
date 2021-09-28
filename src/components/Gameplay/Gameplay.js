import React from "react";

const Gameplay = () => {
  return (
    <section className="gameplay">
      <div className="gameplay-hero">
        <div className="bg-img"></div>
        <div className="contents d-flex align-items-center justify-content-center">
          <div className="wrapper container">
            <div className="heading">
              <span>{Items?.heading}</span>
            </div>
            <div className="title">
              <span className="text-uppercase">{Items?.title}</span>
            </div>
            <p className="description text-light">{Items?.description}</p>
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
  );
};

export default Gameplay;

const GameInfo = ({ title, news_title }) => {
  return (
    <div className="row">
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
