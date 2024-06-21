import Image from "next/image";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className=" bg-black">
      <Hero />
      <About />
      <Services />
      <Projects />
    </main>
  );
}
