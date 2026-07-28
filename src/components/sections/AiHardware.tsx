import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";
import { aiHardware } from "@/data/site";

export default function AiHardware() {
  return (
    <section id="ai-hardware" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20">
      <SectionHeading
        eyebrow="AI Hardware"
        title="Hardware Built for AI"
        subtitle="Hardware solutions for AI workloads, from the edge to the data center."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {aiHardware.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
