import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layouts = ({ children }) => {
  return (
    <div
      className={`h-[100vh] overflow-auto w-full global-scroll-dark  bg-bg `}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layouts;
