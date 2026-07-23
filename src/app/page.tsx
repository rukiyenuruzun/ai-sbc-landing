import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import AiHardware from "@/components/sections/AiHardware";
import AiSoftware from "@/components/sections/AiSoftware";
import SbcAccessories from "@/components/sections/SbcAccessories";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AiHardware />
        <AiSoftware />
        <SbcAccessories />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
