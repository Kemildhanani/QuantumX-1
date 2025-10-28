import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReactLenis from "lenis/react";
const Layouts = ({ children }) => {
  const lenisRef = useRef();

  useEffect(() => {
    let frameId;

    function update(time) {
      lenisRef.current?.lenis?.raf(time);
      frameId = requestAnimationFrame(update);
    }

    frameId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(frameId);
  }, []);
  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
        <Header />
        {children}
        <Footer />
      </ReactLenis>
    </>
  );
};

export default Layouts;
