import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";
import { sbcProducts } from "@/data/site";

export default function SbcAccessories() {
  return (
    <section id="sbc" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20">
      <SectionHeading
        eyebrow="SBC & Aksesuar"
        title="Single Board Computer ve Aksesuarları"
        subtitle="SBC'ler, genişletme kartları, kasalar ve tüm aksesuarlar."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sbcProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
