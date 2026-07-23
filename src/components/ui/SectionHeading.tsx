type SectionHeadingProps = {
  eyebrow?: string; // başlığın üstündeki küçük etiket
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <span className="text-sm font-medium uppercase tracking-wider text-indigo-500">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-neutral-500">{subtitle}</p>}
    </div>
  );
}
