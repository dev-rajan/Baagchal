import React from "react";
import Image from "next/image";

const Work = () => {
  return (
    <section className="work-section">
      <div className="contents d-flex justify-content-center">
        <div className="wrapper container">
          <h3 className="heading">{Items?.heading}</h3>
          <div className="title">
            <span className="text-uppercase">{Items?.title}</span>
          </div>
          <div className="grid">
            {Items?.ques?.map((a) => (
              <Boxes key={a.id} {...a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;

const Boxes = ({ image, question, description }) => {
  return (
    <div className="grid-item">
      <div className="box">
        <figure className="m-0">
          <Image src={image.default} title="console" alt="console"></Image>
        </figure>
        <div className="question">
          <span className="text-uppercase">{question}</span>
        </div>
        <p className="answer">{description}</p>
      </div>
    </div>
  );
};

const Items = {
  heading: "How does it work?",
  title: "Learn about the game",
  ques: [
    {
      id: 1,
      image: require("../../assets/images/54261.png"),
      question: "What are NFT?",
      description:
        "A NFT (non-fungible token) is data added to a file that creates a unique signature. It can be an image file, a song, a tweet, a text posted on a website, a physical item, and various other digital formats. This basically means that someone can own a digital file (and that it's marked with code to differentiate it from any digital replicas).",
    },
    {
      id: 2,
      image: require("../../assets/images/Group.png"),
      question: "How do NFT games work?",
      description:
        "NFT games are different from just holding crypto-collectibles in your wallet. An NFT game will use NFTs in its rules, mechanisms, and player interactions. For example, a game could represent your unique character or avatar as an NFT. Digital items you find while playing the game could also be NFTs. You can then swap or trade your NFTs with other players for profit. A newer, play-to-earn model also allows you to generate income from NFT games which we'll discuss more later.",
    },
  ],
};
