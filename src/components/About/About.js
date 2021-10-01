import React from "react";
import Image from "next/image";
import Rect from "../../assets/images/roadmap.png";
import Meta from "../../partials/Meta";

const About = () => {
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
        TITLE="Baagchal || About"
      />
      <section className="about">
        <div className="about-hero">
          <div className="bg-img"></div>
          <div className="contents d-flex align-items-center justify-content-center">
            <div className="wrapper container">
              <div className="title">
                <span className="text-uppercase">{Items?.title}</span>
              </div>
              <p dangerouslySetInnerHTML={{ __html: Items?.description }} />
            </div>
          </div>
        </div>
        {/* Roadmap */}
        <div className="roadmap">
          <div className="wrapper container">
            <div className="title text-center">
              <span className="text-uppercase">{Items?.roadmap?.title}</span>
            </div>
            <div className="tasks">
              {Items?.roadmap?.info?.map((a) => (
                <RoadMap key={a.id} {...a} lists={a.lists} Rect={Rect} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

const RoadMap = ({ Rect, heading, lists }) => {
  return (
    <div className="row">
      <div className="col-md-6 left"></div>
      <div className="col-md-6 right">
        <div className="box d-flex">
          <figure>
            <Image src={Rect} alt="shape" />
          </figure>
          <div className="info">
            <span className="heading">{heading}</span>
            <ul className="p-0">
              {lists?.map((a, idx) => (
                <li key={idx}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Items = {
  title: "About Bagchal",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officiis illo animi, quam tempore dignissimos ducimus. Harum, sapiente aliquam. Facere quisquam error laboriosam quasi dolorum quaerat cupiditate impedit at quibusdam ullam praesentium deserunt tempora beatae a distinctio libero itaque harum ratione sapiente, consectetur eveniet soluta enim aut? Odio, est. Autem soluta ab, tempore et, praesentium laboriosam cum facilis esse mollitia totam, incidunt cumque distinctio architecto. Provident ratione neque iste. Non cum dolorum enim nobis fugiat ad reprehenderit ratione totam nisi?",

  roadmap: {
    title: "Roadmap",
    info: [
      {
        id: 1,
        heading: "Q1 2000",
        lists: [
          "Academic Research",
          "Technical Prototyping",
          "Academic Research",
          "Technical Prototyping",
        ],
      },
      {
        id: 2,
        heading: "Q2 2005",
        lists: [
          "Academic Research",
          "Technical Prototyping",
          "Academic Research",
          "Technical Prototyping",
        ],
      },
      {
        id: 3,
        heading: "Q3 2010",
        lists: [
          "Academic Research",
          "Technical Prototyping",
          "Academic Research",
          "Technical Prototyping",
        ],
      },
      {
        id: 4,
        heading: "Q4 2015",
        lists: [
          "Academic Research",
          "Technical Prototyping",
          "Academic Research",
          "Technical Prototyping",
        ],
      },
      {
        id: 5,
        heading: "Q5 2020",
        lists: [
          "Academic Research",
          "Technical Prototyping",
          "Academic Research",
          "Technical Prototyping",
        ],
      },
    ],
  },
};
