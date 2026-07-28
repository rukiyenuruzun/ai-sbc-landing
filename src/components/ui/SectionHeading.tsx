type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">
          <span className="h-px w-8 bg-accent/50" aria-hidden />
          <span>{eyebrow}</span>
        </p>
      )}
      <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 max-w-xl text-sm leading-relaxed text-paper/60">{subtitle}</p>}
    </div>
  );
}
