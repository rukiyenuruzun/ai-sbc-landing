import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";
import Reveal from "@/components/ui/Reveal";
import { aiSoftware } from "@/data/site";

export default function AiSoftware() {
  return (
    <section id="ai-software" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <Reveal>
        <SectionHeading
          number="02"
          eyebrow="AI Software"
          title="Software We Build"
          subtitle="In-house AI software products and custom enterprise solutions."
        />
      </Reveal>
      <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
        {aiSoftware.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08}>
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
