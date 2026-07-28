import Image from "next/image";
import type { Product } from "@/data/site";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group rounded-xl border border-neutral-200 p-6 transition hover:shadow-lg dark:border-neutral-800">
      <div className="relative mb-4 aspect-video overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-900">
        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition group-hover:scale-105"
          />
        )}
      </div>

      <div className="flex items-center gap-2">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        {product.tag && (
          <span className="rounded-full bg-orange-500/10 px-2 py-0.5 text-xs text-orange-500">
            {product.tag}
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-neutral-500">{product.description}</p>
    </article>
  );
}
