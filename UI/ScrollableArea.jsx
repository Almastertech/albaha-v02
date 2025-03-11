"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ScrollableArea({ children }) {
  const mainRef = useRef();
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (mainRef.current.scrollTop > 100) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    const mainElement = mainRef.current;
    mainElement.addEventListener("scroll", handleScroll);

    return () => {
      mainElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main
      ref={mainRef}
      className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth relative">
      <Navbar showNav={showNav} setShowNav={setShowNav} />
      {children}
      <Footer />
    </main>
  );
}

export default ScrollableArea;
