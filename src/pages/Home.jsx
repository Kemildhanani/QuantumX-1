import React, { useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Solutions from "../components/Solutions";
import Showcase from "../components/Showcase";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const Home = () => {
  useEffect(() => {}, []);
  return (
    <div className="bg-primary">
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
