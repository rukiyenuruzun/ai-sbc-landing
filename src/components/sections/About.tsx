import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import { stats } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Why Velora?"
            subtitle="Company story and value proposition go here."
          />
        </Reveal>

        {/* İstatistik şeridi */}
        <div className="mt-12 grid gap-8 text-center sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <p className="text-4xl font-bold text-orange-500">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-sm text-neutral-500">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
