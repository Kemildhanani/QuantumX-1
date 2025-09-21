import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layouts = ({ children }) => {
  return (
    <div className={`h-[100vh] w-full bg-bg container`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layouts;
