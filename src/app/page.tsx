import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Portfolio from "@/components/sections/Portfolio";
import Philosophy from "@/components/sections/Philosophy";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import BehindTheScenes from "@/components/sections/BehindTheScenes";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen">
      <Hero />
      <About />
      <Portfolio />
      <Philosophy />
      <Services />
      <Testimonials />
      <BehindTheScenes />
      <Contact />
    </main>
  );
}
