import React, { useEffect } from "react";
import Hero from "../components/Hero";
import About from "./About";
import Solutions from "../components/Solutions";
import Showcase from "../components/Showcase";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const Home = () => {
  useEffect(() => {}, []);
  return (
    <div className="">
      <main>
        <Hero />
        <About />
        <Solutions />
        <Showcase />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
