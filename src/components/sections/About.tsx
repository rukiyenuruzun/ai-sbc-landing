import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import { stats } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden border-y border-paper/15 py-28">
      {/* Arka plan görseli — tek renge (lacivert) çekilip zemine gömülür,
          kenarlardan ink'e eriyerek kaybolur. Kaldırmak istersen bu div'i sil. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/about-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_30%] opacity-25 grayscale contrast-125 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/35 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-transparent to-ink" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Why Velora?"
            subtitle="Company story and value proposition go here."
          />
        </Reveal>

        {/* İstatistik şeridi — ince çizgilerle bölünmüş */}
        <div className="mt-16 grid divide-y divide-paper/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="py-8 sm:px-8 sm:py-0 sm:first:pl-0">
              <p className="font-display text-6xl text-accent">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-paper/60">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
