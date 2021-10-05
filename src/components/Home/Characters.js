import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import Type from "../../assets/images/heroagility.svg";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Characters = () => {
  const options = {
    center: true,
    loop: true,
    margin: 0,
    responsive: {
      0: {
        nav: false,
        items: 1,
        dots: true,
      },
      767: {
        nav: false,
        items: 4,
        dots: true,
      },
      1000: {
        nav: true,
        items: 7,
        dots: false,
      },
    },
    navText: [
      '<i className="fa fa-angle-left"></i>',
      '<i className="fa fa-angle-right"></i>',
    ],
  };
  return (
    <section className="characters-section">
      <div className="contents d-flex justify-content-center">
        <div className="wrapper container-fluid">
          <h3 data-aos="fade-up" data-aos-delay="300" className="heading">{Items?.heading}</h3>
          <div data-aos="fade-up" data-aos-delay="400" className="title">
            <span className="text-uppercase">{Items?.title}</span>
          </div>
          <div className="row mt-5">
            <div className="col-12 carousel">
              <OwlCarousel className="owl-theme" {...options}>
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
    <div data-aos="fade-up" data-aos-delay="500" className="item">
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
            <div className="type d-flex align-items-center justify-content-center">
              <Image src={Type} priority={true} />
              <div className="type-text">
                <span className="text-uppercase">{player_type}</span>
              </div>
            </div>
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
      url: "/characters",
      image: require("../../assets/images/1.svg"),
      player_name: "Sherkhan",
      player_type: "Rare",
    },
    {
      id: 2,
      url: "/characters",
      image: require("../../assets/images/2.svg"),
      player_name: "Sherkhan",
      player_type: "Common",
    },
    {
      id: 3,
      url: "/characters",
      image: require("../../assets/images/3.svg"),
      player_name: "Sherkhan",
      player_type: "Rare",
    },
    {
      id: 4,
      url: "/characters",
      image: require("../../assets/images/4.svg"),
      player_name: "Sherkhan",
      player_type: "Common",
    },
    {
      id: 5,
      url: "/characters",
      image: require("../../assets/images/5.svg"),
      player_name: "Sherkhan",
      player_type: "Rare",
    },
    {
      id: 6,
      url: "/characters",
      image: require("../../assets/images/6.svg"),
      player_name: "Sherkhan",
      player_type: "Rare",
    },
    {
      id: 7,
      url: "/characters",
      image: require("../../assets/images/7.svg"),
      player_name: "Sherkhan",
      player_type: "Common",
    },
  ],
};
