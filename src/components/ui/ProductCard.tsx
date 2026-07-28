import Image from "next/image";
import type { Product } from "@/data/site";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col border border-paper/15 transition-colors hover:border-paper/40">
      {/* Duotone görsel — hover'da renklenir (globals.css .duotone) */}
      <div className="duotone relative aspect-[4/3] overflow-hidden border-b border-paper/15 bg-ink-soft">
        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        )}
        {product.tag && (
          <span className="absolute left-3 top-3 border border-accent bg-ink/80 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
            {product.tag}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl">{product.name}</h3>
        <p className="mt-2 text-xs leading-relaxed text-paper/60">{product.description}</p>
      </div>
    </article>
  );
}
