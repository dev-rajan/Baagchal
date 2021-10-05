import React from "react";
import Link from "next/link";
import Image from "next/image";
import Learn from "../../assets/images/info.svg";

const Bags = () => {
  return (
    <section className="bags-section">
      <div className="contents d-flex justify-content-center">
        <div className="wrapper container">
          <h3 data-aos="fade-down" data-aos-delay="300" className="heading">
            {Items?.heading}
          </h3>
          <div data-aos="fade-down" data-aos-delay="400" className="title">
            <span className="text-uppercase">{Items?.title}</span>
          </div>
          <div className="container p-0 d-md-flex bags">
            {Items?.ChestItem?.map((a) => (
              <BagItem key={a.id} {...a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bags;

const BagItem = ({ url, title, image, ico, price, usPrice }) => {
  return (
    <div className="col-md-6 mt-5 mt-md-0">
      <div className="buy-btn">
        <figure data-aos="fade-down" data-aos-delay="500" className="m-0">
          <Image src={image.default} alt={title} title={title} />
        </figure>
        <div
          data-aos="fade-down"
          data-aos-delay="600"
          className="title d-flex justify-content-center"
        >
          <Image src={ico} />
          <div className="chest-title">
            <span>{title}</span>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="700"
          className="price mb-4 mt-1"
        >
          Price: <span className="gamePrice mx-1">{price} SOL</span> {usPrice}
          &nbsp;USD
        </div>
        <div data-aos="fade-down" data-aos-delay="800">
          <Link href={url}>
            <a className="btn">Buy Bag</a>
          </Link>
          <div className="mt-4">
            <Link href={url}>
              <a className="learnMore text-light d-flex justify-content-center">
                <Image src={Learn} />
                <span className="ms-2">Learn More</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Items = {
  heading: "Get All The Characters",
  title: "Baagchal Bags",
  ChestItem: [
    {
      id: 1,
      title: "Common Bag",
      url: "/buyBag",
      image: require("../../assets/images/bags1.png"),
      ico: require("../../assets/images/herointel.svg"),
      price: "4 ",
      usPrice: "550",
    },
    {
      id: 2,
      title: "Rare Bag",
      url: "/buyBag",
      image: require("../../assets/images/bags2.png"),
      ico: require("../../assets/images/heroagility.svg"),
      price: "4 ",
      usPrice: "550",
    },
  ],
};
