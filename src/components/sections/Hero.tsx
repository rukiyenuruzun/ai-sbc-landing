import Image from "next/image";
import { heroRotatingWords, siteConfig } from "@/data/site";
import Reveal from "@/components/ui/Reveal";
import RotatingText from "@/components/ui/RotatingText";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[92vh] items-center overflow-hidden">
      {/* Gravür illüstrasyon — sağ yarıyı kaplar, zemine gömülü (invert + screen),
          sola doğru eriyerek başlıkla iç içe geçer. Mobilde silik arka plan olur. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[62%]"
      >
        <Image
          src={siteConfig.heroImage}
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 62vw, 100vw"
          className="object-contain object-right opacity-30 brightness-90 grayscale invert mix-blend-screen [mask-image:linear-gradient(to_left,black_60%,transparent_100%)] lg:opacity-80"
        />
        {/* Üstte ink'e eriyen geçiş — navbar yazıları desenin üzerinde kaybolmasın */}
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-ink via-ink/70 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-6 pb-20 pt-36 sm:px-10 lg:px-16">
        <Reveal>
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-paper/60">
            <span className="h-px w-8 bg-accent" aria-hidden />
            AI Hardware · AI Software · SBC — Hong Kong
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-8 max-w-4xl font-display text-6xl leading-[1.02] sm:text-7xl xl:text-8xl">
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
      </div>
    </section>
  );
}
