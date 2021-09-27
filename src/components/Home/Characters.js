import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const OwlCarousel = dynamic(() => import("react-owl-carousel-autoheight"), {
  ssr: false,
});

const Characters = () => {
  const options = {
    center: true,
    loop: true,
    margin: 0,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 5,
      },
      1000: {
        items: 7,
      },
    },
  };
  return (
    <section className="characters-section">
      <div className="contents d-flex justify-content-center">
        <div className="wrapper container">
          <h3 className="heading">{Items?.heading}</h3>
          <div className="title">
            <span className="text-uppercase">{Items?.title}</span>
          </div>
          <div className="row mt-5">
            <div className="col-12">
              <OwlCarousel {...options}>
                {Items?.Players.map((a) => (
                  <Player key={a.id} {...a} />
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Characters;

const Player = ({ url, image, player_name, player_type }) => {
  return (
    <div className="item">
      <Link href={url}>
        <a>
          <div className="image">
            <figure>
              <Image
                src={image.default}
                alt={player_name}
                title={player_name}
                priority={true}
              />
            </figure>
          </div>
          <div className="player-info">
            <div className="player-name">
              <span className="text-uppercase">{player_name}</span>
            </div>
            <span className="player-type">{player_type}</span>
          </div>
        </a>
      </Link>
    </div>
  );
};

const Items = {
  heading: "Play with the best",
  title: "Meet the characters",
  Players: [
    {
      id: 1,
      url: "/",
      image: require("../../assets/images/1.png"),
      player_name: "Sherkhan",
      player_type: "Common",
    },
    {
      id: 2,
      url: "/",
      image: require("../../assets/images/2.png"),
      player_name: "Sherkhan",
      player_type: "Common",
    },
    {
      id: 3,
      url: "/",
      image: require("../../assets/images/3.png"),
      player_name: "Sherkhan",
      player_type: "Common",
    },
    {
      id: 4,
      url: "/",
      image: require("../../assets/images/4.png"),
      player_name: "Sherkhan",
      player_type: "Common",
    },
    {
      id: 5,
      url: "/",
      image: require("../../assets/images/5.png"),
      player_name: "Sherkhan",
      player_type: "Common",
    },
    {
      id: 6,
      url: "/",
      image: require("../../assets/images/6.png"),
      player_name: "Sherkhan",
      player_type: "Common",
    },
    {
      id: 7,
      url: "/",
      image: require("../../assets/images/7.png"),
      player_name: "Sherkhan",
      player_type: "Common",
    },
  ],
};
