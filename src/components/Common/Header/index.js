import React, { useEffect, useState } from "react";
import Link from "next/link";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "../Footer";

const Header = ({ logo = "Baagchal" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const navbar = document.querySelector("#header");

    window.addEventListener("scroll", function (e) {
      const lastPosition = window.scrollY;
      if (lastPosition > 50) {
        navbar.classList.add("active");
      } else if (navbar.classList.contains("active")) {
        navbar.classList.remove("active");
      } else {
        navbar.classList.remove("active");
      }
    });
  }, []);

  return (
    <header id="header" className="fixed-top header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          {/* LOGO */}
          <Link href="/">
            <a className="navbar-brand text-uppercase">{logo}</a>
          </Link>

          <button className="btn text-light d-lg-none" id="show" onClick={handleClick}>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </button>

          {/* SIDEBAR */}
          <div id="nav" className={`navigation ${isOpen ? "active" : ''}`}>
            <div className="navigation__inner">
              <div className="d-flex justify-content-between px-2 nav-border">
                <Link href="/">
                  <a className="navbar-brand text-uppercase">{logo}</a>
                </Link>
                <button
                  className="btn text-light"
                  id="close"
                  onClick={handleClick}
                >
                  <FontAwesomeIcon icon={faTimes} size="2x" />
                </button>
              </div>
              {/* <!-- Navigation Content Here --> */}
              <ul className="navbar-nav mt-4 mb-2 mb-lg-0">
                {Items?.map((a) => (
                  <NavItem key={a.id} {...a} />
                ))}
              </ul>
              <div className="fixed-bottom nav-footer">
                <div className="social-icons">
                  <ul className="d-flex justify-content-start p-0">
                    <Icons className="twitter" url="/" title={faTwitter} />
                    <Icons className="facebook" url="/" title={faFacebookF} />
                    <Icons
                      className="telegram"
                      url="/"
                      title={faTelegramPlane}
                    />
                    <Icons className="instagram" url="/" title={faInstagram} />
                  </ul>
                </div>
                <p className="copyright m-2">
                  @ Copyrights Bagchal 2021. All Rights Reserved
                </p>
              </div>
            </div>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navlinks */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {Items?.map((a) => (
                <NavItem key={a.id} {...a} />
              ))}
            </ul>
            {/* Connect Button */}
            <Link href="/">
              <a className="btn connect-btn">Connect Wallet</a>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

export const NavItem = ({ title, url }) => {
  return (
    <li className="nav-item">
      <Link href={`/${url}`}>
        <a className="nav-link">{title}</a>
      </Link>
    </li>
  );
};

const Items = [
  {
    id: 1,
    title: "About",
    url: "/about",
  },
  {
    id: 2,
    title: "Gameplay",
    url: "/gameplay",
  },
  {
    id: 3,
    title: "Characters",
    url: "/characters",
  },
];
