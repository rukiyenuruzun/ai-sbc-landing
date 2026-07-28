import { navLinks, siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="overflow-hidden border-t border-paper/15">
      <div className="grid gap-10 px-6 py-14 sm:grid-cols-3 sm:px-10 lg:px-16">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Velora Tech Limited</p>
          <p className="mt-3 max-w-xs text-xs leading-relaxed text-paper/60">
            {siteConfig.contact.address}
          </p>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="mt-2 block text-xs text-paper/80 hover:underline"
          >
            {siteConfig.contact.email}
          </a>
        </div>

        <nav aria-label="Footer navigation">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Links</p>
          <ul className="mt-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs uppercase tracking-[0.15em] text-paper/60 hover:text-paper"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Social</p>
          <ul className="mt-3 space-y-2">
            {siteConfig.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="text-xs uppercase tracking-[0.15em] text-paper/60 hover:text-paper"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Dev wordmark — ekran genişliğini kaplar */}
      <p
        aria-hidden
        className="select-none text-center font-display leading-[0.8] text-paper/90"
        style={{ fontSize: "clamp(4rem, 17.5vw, 16rem)" }}
      >
        VELORA
      </p>

      <div className="flex flex-col items-center justify-between gap-2 border-t border-paper/15 px-6 py-4 text-[10px] uppercase tracking-[0.2em] text-paper/40 sm:flex-row sm:px-10 lg:px-16">
        <span>
          © {new Date().getFullYear()} {siteConfig.legalName}
        </span>
        <span>{siteConfig.activities.primary}</span>
        <span>{siteConfig.activities.secondary}</span>
      </div>
    </footer>
  );
}
