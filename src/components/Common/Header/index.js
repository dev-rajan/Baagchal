import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Cross from "../../../assets/images/cross.svg";
import Menu from "../../../assets/images/menu.svg";
import Twitter from "../../../assets/images/twitter.svg";
import Facebook from "../../../assets/images/fb.svg";
import Telegram from "../../../assets/images/telegram.svg";
import Instagram from "../../../assets/images/insta.svg";
import { Icons } from "../Footer";

const Header = ({ logo = "Baagchal" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [path, setPath] = useState();

  useEffect(() => {
    setPath(window.location.pathname);
  });

  const handleClick = () => {
    const body = document.getElementById("body");
    if (isOpen === false) {
      setIsOpen(true);
      body.classList.add("fixed_body");
    } else {
      setIsOpen(false);
      body.classList.remove("fixed_body");
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

          <button
            className="btn text-light d-lg-none"
            id="show"
            onClick={handleClick}
          >
            <Image src={Menu} />
          </button>

          {/* SIDEBAR */}
          <div
            id="nav"
            className={`navigation d-lg-none ${isOpen ? "active" : ""}`}
          >
            <div className="navigation__inner">
              <div className="d-flex justify-content-between px-2 nav-border">
                <Link href="/">
                  <a
                    className="navbar-brand text-uppercase"
                    onClick={handleClick}
                  >
                    {logo}
                  </a>
                </Link>
                <button
                  className="btn text-light"
                  id="close"
                  onClick={handleClick}
                >
                  <Image src={Cross} />
                </button>
              </div>
              {/* <!-- Navigation Content Here --> */}
              <ul className="navbar-nav mt-4 mb-2 mb-lg-0">
                {Items?.map((a) => (
                  <NavItem
                    key={a.id}
                    {...a}
                    handleClick={handleClick}
                    pathname={path}
                  />
                ))}

                <li className="nav-item" onClick={handleClick}>
                  <Link href={`/faq`}>
                    <a
                      className={`nav-link ${
                        path?.match("/faq") ? "selected" : ""
                      } `}
                    >
                      FAQ
                    </a>
                  </Link>
                </li>
                <li className="nav-item" onClick={handleClick}>
                  <Link href={`/terms`}>
                    <a
                      className={`nav-link ${
                        path?.match("/terms") ? "selected" : ""
                      } `}
                    >
                      Terms and conditions
                    </a>
                  </Link>
                </li>
                <li className="nav-item" onClick={handleClick}>
                  <Link href={`/privacy`}>
                    <a
                      className={`nav-link ${
                        path?.match("/privacy") ? "selected" : ""
                      } `}
                    >
                      Privacy and Policy
                    </a>
                  </Link>
                </li>
                <li className="nav-item mt-3"></li>
                <Link href="/">
                  <a className="btn connect-btn mt-3 mx-4">Connect Wallet</a>
                </Link>
              </ul>
              <div className="fixed-bottom nav-footer">
                <div className="social-icons">
                  <ul className="d-flex justify-content-start p-0">
                    <Icons className="twitter" url="/" title={Twitter} />
                    <Icons className="facebook" url="/" title={Facebook} />
                    <Icons className="telegram" url="/" title={Telegram} />
                    <Icons className="instagram" url="/" title={Instagram} />
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
                <NavItem key={a.id} {...a} pathname={path} />
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

export const NavItem = ({ title, url, handleClick, pathname }) => {
  return (
    <li className="nav-item" onClick={handleClick}>
      <Link href={`/${url}`}>
        <a className={`nav-link ${pathname?.match(url) ? "selected" : ""} `}>
          {title}
        </a>
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
