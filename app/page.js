import Image from "next/image";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Hero from "./components/Hero";
import Howitwork from "./components/Howitwork";

export default function Home() {
  return (
    <main className=" w-screen overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Howitwork />
    </main>
  );
}
