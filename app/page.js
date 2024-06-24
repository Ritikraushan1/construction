"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Hero from "./components/Hero";
import Howitwork from "./components/Howitwork";
import Video from "./components/Video";
import WhyUs from "./components/WhyUs";
import Cookies from "js-cookie";
import Popup from "./Popup";
import Package from "./components/Package";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const userSelection = Cookies.get("userSelection");
    if (!userSelection) {
      setShowPopup(true);
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <main className=" w-screen overflow-x-hidden">
      <div>{showPopup && <Popup onClose={handleClosePopup} />}</div>
      <Hero />
      <About />
      <Package />
      <Services />
      <Projects />
      <WhyUs />
      <Video />
      <Howitwork />
    </main>
  );
}
