import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Prestations from "@/components/Prestations";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Prestations />
      <Contact />
    </main>
  );
}
