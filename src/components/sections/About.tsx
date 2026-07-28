import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import { stats } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-y border-paper/15 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading
            number="04"
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
