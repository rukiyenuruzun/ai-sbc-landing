import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import AiHardware from "@/components/sections/AiHardware";
import AiSoftware from "@/components/sections/AiSoftware";
import SbcAccessories from "@/components/sections/SbcAccessories";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Marquee from "@/components/ui/Marquee";
import { techMarquee } from "@/data/site";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative flex-1 overflow-hidden">
        {/* Sayfa boyunca süzülen ortam ışıkları — bölümler arası keskin şerit yerine akış hissi */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-20">
          <div className="absolute left-[-200px] top-[28%] h-[420px] w-[420px] animate-float rounded-full bg-orange-500/10 blur-3xl motion-reduce:animate-none" />
          <div className="absolute right-[-180px] top-[52%] h-[380px] w-[380px] animate-float rounded-full bg-amber-400/10 blur-3xl [animation-delay:-7s] motion-reduce:animate-none" />
          <div className="absolute left-[10%] top-[78%] h-[360px] w-[360px] animate-float rounded-full bg-orange-600/10 blur-3xl [animation-delay:-3s] motion-reduce:animate-none" />
        </div>

        <Hero />
        <Marquee items={techMarquee} />
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
