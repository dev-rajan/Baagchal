import React, { useState } from "react";
import Image from "next/image";
import Meta from "../../partials/Meta";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Character = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const BigOption = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  const settings = {
    centerMode : true,
    slidesToShow: 8,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    focusOnSelect: true,
    swipeToSlide: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          arrows: true,
          dots: false,
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
    ],
  };

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
        TITLE="Baagchal || Character"
      />
      <section className="character">
        <div className="character-info">
          <div className="container">
            <Slider
              asNavFor={nav2}
              ref={(slider1) => setNav1(slider1)}
              {...BigOption}
            >
              {Player_Items?.map((a) => (
                <Player_desc key={a.id} {...a} />
              ))}
            </Slider>

            <Slider
              asNavFor={nav1}
              ref={(slider2) => setNav2(slider2)}
              swipeToSlide={true}
              focusOnSelect={true}
              {...settings}
            >
              {Characters?.Players?.map((a) => (
                <Player key={a.id} {...a} />
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Character;

const Player_desc = ({ SingleImage, TypeIco, type, title, description }) => {
  return (
    <div data-aos="fade-up" data-aos-delay="300" className="row">
      <div className="col-md-5">
        <div className="image">
          <figure>
            <Image src={SingleImage.default} />
          </figure>
        </div>
      </div>
      <div className="col-md-7 d-flex align-items-center">
        <div className="wrapper">
          <div className="type d-flex align-items-center">
            <Image src={TypeIco.default} />
            <div className="type-text">
              <span className="text-uppercase">{type}</span>
            </div>
          </div>
          <div className="title">
            <span className="text-uppercase">{title}</span>
          </div>
          <p className="description" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </div>
  );
};

const Player_Items = [
  {
    id: 1,
    SingleImage: require("../../assets/images/fatbag.png"),
    TypeIco: require("../../assets/images/heroagility.svg"),
    title: "Sherkhan",
    type: "Rare",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    SingleImage: require("../../assets/images/fatbag.png"),
    TypeIco: require("../../assets/images/heroagility.svg"),
    title: "Bengal Tiger",
    type: "Special",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    SingleImage: require("../../assets/images/fatbag.png"),
    TypeIco: require("../../assets/images/heroagility.svg"),
    title: "White Tiger",
    type: "Rare",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 4,
    SingleImage: require("../../assets/images/fatbag.png"),
    TypeIco: require("../../assets/images/heroagility.svg"),
    title: "Black Tiger",
    type: "Common",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 5,
    SingleImage: require("../../assets/images/fatbag.png"),
    TypeIco: require("../../assets/images/heroagility.svg"),
    title: "Blue Tiger",
    type: "Rare",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 6,
    SingleImage: require("../../assets/images/fatbag.png"),
    TypeIco: require("../../assets/images/heroagility.svg"),
    title: "Red Tiger",
    type: "Special",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 7,
    SingleImage: require("../../assets/images/fatbag.png"),
    TypeIco: require("../../assets/images/heroagility.svg"),
    title: "Green Tiger",
    type: "Common",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 8,
    SingleImage: require("../../assets/images/fatbag.png"),
    TypeIco: require("../../assets/images/heroagility.svg"),
    title: "Yellow Tiger",
    type: "Rare",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 9,
    SingleImage: require("../../assets/images/fatbag.png"),
    TypeIco: require("../../assets/images/heroagility.svg"),
    title: "Gray Tiger",
    type: "Special",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 10,
    SingleImage: require("../../assets/images/fatbag.png"),
    TypeIco: require("../../assets/images/heroagility.svg"),
    title: "Black Tiger",
    type: "Common",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const Player = ({ image, player_name }) => {
  return (
    <div className="item mt-5">
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
    </div>
  );
};

const Characters = {
  Players: [
    {
      id: 1,
      player_name: "Sherkhan",
      image: require("../../assets/images/singlebaag.png"),
    },
    {
      id: 2,
      player_name: "Sherkhan",
      image: require("../../assets/images/singlebaag.png"),
    },
    {
      id: 3,
      player_name: "Sherkhan",
      image: require("../../assets/images/singlebaag.png"),
    },
    {
      id: 4,
      player_name: "Sherkhan",
      image: require("../../assets/images/singlebaag.png"),
    },
    {
      id: 5,
      player_name: "Sherkhan",
      image: require("../../assets/images/singlebaag.png"),
    },
    {
      id: 6,
      player_name: "Sherkhan",
      image: require("../../assets/images/singlebaag.png"),
    },
    {
      id: 7,
      player_name: "Sherkhan",
      image: require("../../assets/images/singlebaag.png"),
    },
    {
      id: 8,
      player_name: "Sherkhan",
      image: require("../../assets/images/singlebaag.png"),
    },
    {
      id: 9,
      player_name: "Sherkhan",
      image: require("../../assets/images/singlebaag.png"),
    },
    {
      id: 10,
      player_name: "Sherkhan",
      image: require("../../assets/images/singlebaag.png"),
    },
  ],
};
