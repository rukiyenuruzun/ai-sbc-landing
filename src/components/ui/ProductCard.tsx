import type { Product } from "@/data/site";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group rounded-xl border border-neutral-200 p-6 transition hover:shadow-lg dark:border-neutral-800">
      {/* Görsel alanı — product.image dolunca next/image ile değiştirin */}
      <div className="mb-4 aspect-video rounded-lg bg-neutral-100 dark:bg-neutral-900" />

      <div className="flex items-center gap-2">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        {product.tag && (
          <span className="rounded-full bg-indigo-500/10 px-2 py-0.5 text-xs text-indigo-500">
            {product.tag}
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-neutral-500">{product.description}</p>
    </article>
  );
}
