"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/data/site";

// NVIDIA tarzı genişleyen paneller: yan yana dururlar, tıklanan büyür,
// altındaki çizgi aktif olanı gösterir. Mobilde dikey yığılır.
export default function ExpandingPanels({ items }: { items: Product[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-2 md:h-[440px] md:flex-row">
      {items.map((p, i) => {
        const isActive = i === active;
        return (
          <button
            key={p.id}
            type="button"
            onClick={() => setActive(i)}
            aria-expanded={isActive}
            className={`group relative flex min-h-[140px] basis-0 flex-col justify-end overflow-hidden border border-paper/15 text-left transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:min-h-0 ${
              isActive ? "grow-[3]" : "grow cursor-pointer hover:border-paper/40"
            }`}
          >
            {p.image && (
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className={`object-cover transition-[filter,transform] duration-700 ${
                  isActive ? "" : "brightness-[0.55] grayscale"
                }`}
              />
            )}
            {/* Metin okunurluğu için alt gradyan */}
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink via-ink/50 to-transparent"
            />

            <div className="relative p-5 pb-7">
              <h3 className="font-display text-xl leading-snug sm:text-2xl">{p.name}</h3>
              <p
                className={`overflow-hidden text-xs leading-relaxed text-paper/70 transition-all duration-500 ${
                  isActive ? "mt-2 max-h-24 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {p.description}
              </p>
            </div>

            {/* Alt çizgi göstergesi */}
            <span
              aria-hidden
              className={`absolute bottom-0 left-0 h-1 w-full transition-colors duration-500 ${
                isActive ? "bg-accent" : "bg-paper/20"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
