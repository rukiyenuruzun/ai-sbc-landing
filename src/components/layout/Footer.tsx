import { navLinks, siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3">
        <div>
          <p className="font-bold">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-neutral-500">{siteConfig.tagline}</p>
        </div>

        <nav aria-label="Alt menü">
          <p className="text-sm font-semibold">Bağlantılar</p>
          <ul className="mt-2 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-neutral-500 hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold">Sosyal</p>
          <ul className="mt-2 space-y-1">
            {siteConfig.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="text-sm text-neutral-500 hover:underline">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="border-t border-neutral-200 py-4 text-center text-xs text-neutral-500 dark:border-neutral-800">
        © {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.
      </p>
    </footer>
  );
}
