import React from "react";
import Header from "../components/Header";

const Layouts = ({ children }) => {
  return (
    <div className={`h-[100vh] w-full bg-bg container`}>
      <Header />
      {children}
    </div>
  );
};

export default Layouts;
