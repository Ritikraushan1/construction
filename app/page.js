import Image from "next/image";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";

export default function Home() {
  return (
    <main className=" bg-black">
      <About />
      <Services />
      <Projects />
    </main>
  );
}
