import SectionHeading from "@/components/ui/SectionHeading";
import ExpandingPanels from "@/components/ui/ExpandingPanels";
import Reveal from "@/components/ui/Reveal";
import { categories } from "@/data/site";

// Üç ana kategori tek grupta, yan yana genişleyen paneller halinde.
export default function Products() {
  return (
    <section id="products" className="scroll-mt-20 px-6 py-24 sm:px-10 lg:px-16">
      <Reveal>
        <SectionHeading
          eyebrow="Products"
          title="What We Do"
          subtitle="Three pillars: AI hardware, our own software, and single board computing."
        />
      </Reveal>
      <Reveal delay={0.1} className="mt-12">
        <ExpandingPanels items={categories} />
      </Reveal>
    </section>
  );
}
