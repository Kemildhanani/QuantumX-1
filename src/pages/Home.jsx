import React from "react";
import Hero from "../components/Hero";
import About from "./About";
import Solutions from "../components/Solutions";
import Showcase from "../components/Showcase";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import DarkVeil from "../components/ui/DarkVeil";

const Home = () => {
  return (
    <div className="relative ">
      {/* Background */}
      <DarkVeil />

      {/* Content */}
      <div className="absolute z-10">
        <About />
        <Solutions />
        <Showcase />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
