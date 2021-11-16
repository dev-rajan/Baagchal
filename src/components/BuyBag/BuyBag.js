import React from "react";
import Link from "next/link";
import Image from "next/image";
import Meta from "../../partials/Meta";

const BuyBag = () => {
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
        TITLE="Baagchal || Buy Bag"
      />
      <section className="buyBag">
        <div className="container-fluid">
          <h2 className="heading text-center">{BagInfo.heading}</h2>

          <div className="bags">
            {BagInfo?.ChestItem?.map((a) => (
              <Items key={a.id} {...a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BuyBag;

const Items = ({ url, Bag, Icon, Type, price, usPrice, listItem }) => {
  return (
    <div className="row">
      <div className="col-md-6 left align-items-center">
        <figure>
          <Image src={Bag} />
        </figure>
      </div>
      <div className="col-md-6 right">
        <div className="ribbon d-flex align-items-center text-light p-4">
          <div className="image">
            <figure className="m-0">
              <Image src={Icon} />
            </figure>
          </div>
          <div className="ms-4 chest-info">
            <div className="chest-title">
              <span>{Type}</span>
            </div>
            <div className="price">
              Price: <span className="gamePrice mx-1">{price} SOL</span>{" "}
              {usPrice}
              &nbsp;USD
            </div>
          </div>
        </div>
        <div className="wrapper">
          <ul className="chestInfo-list ms-3 my-5">
            {listItem?.map((a, idx) => (
              <li key={idx}>
                <p>{a}</p>
              </li>
            ))}
          </ul>
          <Link href={url}>
            <a className="btn">Buy Bag</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

const BagInfo = {
  heading: "Baagchal Special Bags",
  ChestItem: [
    {
      id: 1,
      Type: "Common Bag",
      url: "/buyBag",
      Bag: require("../../assets/images/bags1.png"),
      Icon: require("../../assets/images/herointel.svg"),
      price: "4 ",
      usPrice: "550",
      listItem: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit nihil architecto animi iste quaerat nesciunt doloremque optio sunt, temporibus eveniet.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      ],
    },
    {
      id: 2,
      Type: "Rare Bag",
      url: "/buyBag",
      Bag: require("../../assets/images/bags2.png"),
      Icon: require("../../assets/images/heroagility.svg"),
      price: "4 ",
      usPrice: "550",
      listItem: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit nihil architecto animi iste quaerat nesciunt doloremque optio sunt, temporibus eveniet.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      ],
    },
  ],
};
