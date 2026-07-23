import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";
import { aiHardware } from "@/data/site";

export default function AiHardware() {
  return (
    <section id="ai-hardware" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20">
      <SectionHeading
        eyebrow="AI Donanım"
        title="AI Hardware"
        subtitle="Edge'den veri merkezine, yapay zekâ iş yükleri için donanım çözümleri."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {aiHardware.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
