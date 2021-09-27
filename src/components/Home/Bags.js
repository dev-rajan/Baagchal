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

const BagItem = ({ url, title, image }) => {
  return (
    <div className="col-md-6 mt-5 mt-md-0">
      <div className="buy-btn">
        <figure>
          <Image src={image.default} alt={title} title={title} />
        </figure>
        <div className="title mb-4">
          <span>{title}</span>
        </div>
        <Link href={url}>
          <a className="btn">Buy</a>
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
      title: "Common",
      url: "/",
      image: require("../../assets/images/bags1.png"),
    },
    {
      id: 2,
      title: "Rare",
      url: "/",
      image: require("../../assets/images/bags2.png"),
    },
  ],
};
