import Image from "next/image";
import { heroRotatingWords, siteConfig } from "@/data/site";
import Reveal from "@/components/ui/Reveal";
import RotatingText from "@/components/ui/RotatingText";

export default function Hero() {
  return (
    <section id="hero" className="mx-auto max-w-6xl px-5 pb-20 pt-24 sm:pt-32">
      <Reveal>
        <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-paper/60">
          <span className="h-px w-8 bg-accent" aria-hidden />
          AI Hardware · AI Software · SBC — Hong Kong
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <h1 className="mt-8 max-w-5xl font-display text-5xl leading-[1.05] sm:text-7xl lg:text-8xl">
          Powering the future of{" "}
          <RotatingText words={heroRotatingWords} className="text-accent" />
        </h1>
      </Reveal>

      <Reveal delay={0.16}>
        <p className="mt-8 max-w-md text-sm leading-relaxed text-paper/60">
          {siteConfig.description}
        </p>
      </Reveal>

      <Reveal delay={0.24}>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#products"
            className="bg-accent px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:bg-paper"
          >
            Explore Products
          </a>
          <a
            href="#contact"
            className="border border-paper/30 px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink"
          >
            Contact Us
          </a>
        </div>
      </Reveal>

      {/* Hero görseli — duotone, ince çerçeve, köşesiz */}
      <Reveal delay={0.32} className="mt-16">
        <div className="duotone relative aspect-[21/9] overflow-hidden border border-paper/15 bg-ink-soft">
          <Image
            src={siteConfig.heroImage}
            alt="Circuit board close-up"
            fill
            priority
            sizes="(min-width: 1280px) 1152px, 100vw"
            className="object-cover"
          />
          <span className="absolute bottom-3 right-3 bg-ink/80 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-paper/60">
            VLR — 001
          </span>
        </div>
      </Reveal>
    </section>
  );
}
