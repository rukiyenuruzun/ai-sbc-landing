import Image from "next/image";
import type { Product } from "@/data/site";
import TiltCard from "@/components/ui/TiltCard";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <TiltCard className="h-full">
      <article className="group relative h-full overflow-hidden rounded-xl border border-neutral-200 p-6 transition hover:border-orange-500/40 hover:shadow-lg dark:border-neutral-800">
        {/* İmleci takip eden spotlight — koordinatlar TiltCard'dan (--mx/--my) gelir */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(249, 115, 22, 0.1), transparent 60%)",
          }}
        />

        <div className="relative mb-4 aspect-video overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-900">
          {product.image && (
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
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
    </TiltCard>
  );
}
