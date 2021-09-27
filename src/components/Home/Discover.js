import React from "react";
import Image from "next/image";
import Link from "next/link";

const Discover = () => {
  return (
    <section className="discover-section">
      <div className="contents d-flex justify-content-center">
        <div className="wrapper container">
          <h3 className="heading">{Items?.heading}</h3>
          <div className="title">
            <span className="text-uppercase">{Items?.title}</span>
          </div>
          <div className="row mt-5">
            {Items?.News?.map((a) => (
              <NewsItem key={a.id} {...a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;

const NewsItem = ({ url, image, news_title }) => {
  return (
    <div className="col-md-4 mt-3 mt-md-0">
      <div className="news">
        <Link href={url}>
          <a>
            <div className="image">
              <figure className="m-0">
                <Image
                  src={image.default}
                  alt={news_title}
                  title={news_title}
                />
              </figure>
              <div className="news-title">
                <span>{news_title}</span>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

const Items = {
  heading: "More to",
  title: "Discover",
  News: [
    {
      id: 1,
      url: "/",
      image: require("../../assets/images/Rectangle1.png"),
      news_title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      id: 2,
      url: "/",
      image: require("../../assets/images/Rectangle2.png"),
      news_title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      id: 3,
      url: "/",
      image: require("../../assets/images/Rectangle3.png"),
      news_title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
  ],
};
