import ExpandingPanels from "@/components/ui/ExpandingPanels";
import Reveal from "@/components/ui/Reveal";
import { categories } from "@/data/site";

// Üç ana kategori tek grupta, yan yana genişleyen paneller halinde.
export default function Products() {
  return (
    <section id="products" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <Reveal>
        <ExpandingPanels items={categories} />
      </Reveal>
    </section>
  );
}
