import React from "react";
import { NavItem } from "../Header";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Footer = ({ logo = "Baagchal" }) => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <div className="wrapper">
          <Link href="/">
            <a>
              <h2 className="logo text-uppercase">{logo}</h2>
            </a>
          </Link>
          <div className="navigation-links">
            <ul className="d-lg-flex flex-row mb-2 mb-lg-0 p-0 justify-content-center">
              {Items?.Navlinks?.map((a) => (
                <NavItem key={a.id} {...a} />
              ))}
            </ul>
          </div>
          <p className="description">{Items?.description}</p>
          <div className="social-icons">
            <ul className="d-flex justify-content-center p-0">
              <Icons className="twitter" url="/" title={faTwitter} />
              <Icons className="facebook" url="/" title={faFacebookF} />
              <Icons className="telegram" url="/" title={faTelegramPlane} />
              <Icons className="instagram" url="/" title={faInstagram} />
            </ul>
          </div>
          <p className="copyright">{Items?.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const Items = {
  Navlinks: [
    {
      id: 1,
      title: "About",
      url: "/about",
    },
    {
      id: 2,
      title: "FAQ",
      url: "/faq",
    },
    {
      id: 3,
      title: "Terms and Conditions",
      url: "/terms",
    },
    {
      id: 4,
      title: "Privacy Policy",
      url: "/privacy",
    },
  ],
  description:
    "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply and typesetting industry. Lorem Ipsum has been the industry's.",
  copyright: "@ Copyrights Bagchal 2021. All Rights Reserved",
};

export const Icons = ({ className, url, title }) => {
  return (
    <li>
      <a
        className={className}
        href={url}
        title={title}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={title} />
      </a>
    </li>
  );
};
