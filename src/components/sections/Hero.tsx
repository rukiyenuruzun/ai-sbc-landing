import Image from "next/image";
import { siteConfig } from "@/data/site";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Arka plan: yumuşak gradient + marka turuncusu glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50 via-transparent to-transparent dark:from-orange-950/25" />
        <div className="absolute left-1/2 top-[-200px] h-[500px] w-[min(800px,100vw)] -translate-x-1/2 rounded-full bg-orange-500/15 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:py-32">
        <Reveal>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            {siteConfig.tagline}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-lg text-neutral-500">{siteConfig.description}</p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex gap-4">
            <a
              href="#ai-hardware"
              className="rounded-lg bg-orange-600 px-6 py-3 font-medium text-white shadow-lg shadow-orange-600/25 hover:bg-orange-500"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-neutral-300 px-6 py-3 font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
            >
              Contact Us
            </a>
          </div>
        </Reveal>

        {/* Hero görseli: turuncu glow + hafif perspektif, hover'da düzleşir */}
        <Reveal delay={0.3} className="mt-16 w-full max-w-4xl">
          <div className="relative [perspective:1200px]">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-3xl bg-orange-500/20 blur-2xl"
            />
            <div className="relative aspect-[2/1] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-2xl transition-transform duration-500 [transform:rotateX(6deg)] hover:[transform:rotateX(0deg)] dark:border-neutral-800 dark:bg-neutral-900">
              <Image
                src={siteConfig.heroImage}
                alt="Circuit board close-up"
                fill
                priority
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
