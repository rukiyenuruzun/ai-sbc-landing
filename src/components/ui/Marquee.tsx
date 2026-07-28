// Sonsuz kayan şerit — ince çizgilerle çerçeveli, daktilo tarzı.
export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items]; // -%50 translate ile kusursuz döngü için içerik ikizlenir

  return (
    <div className="overflow-hidden border-y border-paper/15 py-4">
      <div className="flex w-max animate-marquee items-center gap-12 motion-reduce:animate-none">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-12 text-xs font-medium uppercase tracking-[0.25em] text-paper/50"
          >
            {item}
            <span className="text-accent" aria-hidden>
              ●
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
