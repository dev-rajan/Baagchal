import React from "react";
import Link from "next/link";

const History = () => {
  return (
    <section className="history-section">
      <div className="contents d-flex align-items-end justify-content-center">
        <div className="wrapper container">
          <h3 data-aos="fade-in" data-aos-delay="300" className="heading">{Items?.heading}</h3>
          <div data-aos="fade-up" data-aos-delay="400" className="title">
            <span className="text-uppercase">{Items?.title}</span>
          </div>
          <p data-aos="fade-up" data-aos-delay="500" className="description">{Items?.description}</p>
          <Link href="/about">
            <a data-aos="fade-up" data-aos-delay="600" className="learnmore btn">Learn More</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default History;

const Items = {
  heading: "Know About",
  title: "Bagchal History",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa ac hendrerit ut facilisis eget venenatis quisque libero.Ut massa ac hendrerit ut facilisis ege tvenenatis quisque libero.",
};
