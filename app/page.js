import Image from "next/image";
import Services from "./components/Services";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="">
      <Services />
      <Projects />
    </main>
  );
}
