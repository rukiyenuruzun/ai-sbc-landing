import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";
import { aiSoftware } from "@/data/site";

export default function AiSoftware() {
  return (
    <section id="ai-software" className="scroll-mt-20 bg-neutral-50 py-20 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="AI Yazılım"
          title="AI Software"
          subtitle="Kendi geliştirdiğimiz yapay zekâ yazılımları ve kuruma özel çözümler."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aiSoftware.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
