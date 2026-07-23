import SectionHeading from "@/components/ui/SectionHeading";
import { stats } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-neutral-50 py-20 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Hakkımızda"
          title="Neden Biz?"
          subtitle="Şirket hikâyesi ve değer önerisi buraya gelecek."
        />

        {/* İstatistik şeridi */}
        <div className="mt-12 grid gap-8 text-center sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-bold text-indigo-500">{s.value}</p>
              <p className="mt-1 text-sm text-neutral-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
