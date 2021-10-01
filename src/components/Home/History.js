import React from "react";
import Link from "next/link";

const History = () => {
  return (
    <section className="history-section">
      <div className="contents d-flex align-items-end justify-content-center">
        <div className="wrapper container">
          <h3 className="heading">{Items?.heading}</h3>
          <div className="title">
            <span className="text-uppercase">{Items?.title}</span>
          </div>
          <p className="description">{Items?.description}</p>
          <Link href="/about">
            <a className="learnmore btn">Learn More</a>
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
