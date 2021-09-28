import React from "react";
import Image from "next/image";
import SingleImage from "../../assets/images/single.png";

const Character = () => {
  return (
    <section className="character">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="image">
              <figure>
                <Image src={SingleImage} />
              </figure>
            </div>
          </div>
          <div className="col-md-7 d-flex align-items-center">
            <div className="wrapper">
              <div className="title">
                <span className="text-uppercase">{Items?.title}</span>
              </div>
              <div className="type mb-3">
                  <span className="text-lowercase">{Items?.type}</span>
              </div>
              <p className="description">{Items?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Character;

const Items = {
  title: "Character Name",
  type: "Como",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
};
