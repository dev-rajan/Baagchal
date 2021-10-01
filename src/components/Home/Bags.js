import React from "react";
import Link from "next/link";
import Image from "next/image";

const Bags = () => {
  return (
    <section className="bags-section">
      <div className="contents d-flex justify-content-center">
        <div className="wrapper container">
          <h3 className="heading">{Items?.heading}</h3>
          <div className="title">
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

const BagItem = ({ url, title, image, ico }) => {
  return (
    <div className="col-md-6 mt-5 mt-md-0">
      <div className="buy-btn">
        <figure>
          <Image src={image.default} alt={title} title={title} />
        </figure>
        <div className="title d-flex justify-content-center mb-4">
          <Image src={ico} />
          <div className="chest-title">
            <span>{title}</span>
          </div>
        </div>
        <Link href={url}>
          <a className="btn">Connect Wallet</a>
        </Link>
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
      url: "/",
      image: require("../../assets/images/bags1.png"),
      ico: require("../../assets/images/herointel.svg"),
    },
    {
      id: 2,
      title: "Rare Bag",
      url: "/",
      image: require("../../assets/images/bags2.png"),
      ico: require("../../assets/images/heroagility.svg"),
    },
  ],
};
