import React from "react";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="contents d-flex align-items-center">
        <div className="wrapper">
          <h2 data-aos="fade-up" data-aos-delay="500" className="logo m-0 text-uppercase">{Items?.logo}</h2>
          <div data-aos="fade-up" data-aos-delay="600" className="title">
            <span className="text-uppercase">{Items?.title}</span>
          </div>
          <p data-aos="fade-up" data-aos-delay="700" className="description mt-2">{Items?.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

const Items = {
  logo: "Baagchal",
  title: "A Classic Masterpiece",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aspernatur esse unde? Est tempora recusandae voluptatem obcaecati reprehenderit, suscipit, eligendi beatae impedit explicabo, quidem",
};
