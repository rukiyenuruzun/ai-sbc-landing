import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";
import Reveal from "@/components/ui/Reveal";
import { aiHardware } from "@/data/site";

export default function AiHardware() {
  return (
    <section id="ai-hardware" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="AI Hardware"
          title="Hardware Built for AI"
          subtitle="Hardware solutions for AI workloads, from the edge to the data center."
        />
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {aiHardware.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.1}>
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
