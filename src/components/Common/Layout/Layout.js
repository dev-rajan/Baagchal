import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <div className="mask-box"></div>
    </>
  );
};

export default Layout;
