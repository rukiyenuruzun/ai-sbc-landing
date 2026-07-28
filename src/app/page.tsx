import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Marquee from "@/components/ui/Marquee";
import { techMarquee } from "@/data/site";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee items={techMarquee} />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
