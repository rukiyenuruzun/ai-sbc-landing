// Sonsuz kayan şerit — kenarlar mask ile yumuşatılır.
export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items]; // -%50 translate ile kusursuz döngü için içerik ikizlenir

  return (
    <div className="relative overflow-hidden py-8 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
      <div className="flex w-max animate-marquee items-center gap-14 motion-reduce:animate-none">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-14 text-sm font-medium uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-orange-500/60" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
