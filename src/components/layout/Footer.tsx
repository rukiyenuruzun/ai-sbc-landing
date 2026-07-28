import Image from "next/image";
import { navLinks, siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src={siteConfig.logo.mark}
              alt={`${siteConfig.name} logo`}
              width={28}
              height={28}
            />
            <p className="font-bold">{siteConfig.name}</p>
          </div>
          <p className="mt-2 text-sm text-neutral-500">{siteConfig.tagline}</p>
          <p className="mt-4 text-xs text-neutral-500">{siteConfig.contact.address}</p>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="mt-1 block text-xs text-neutral-500 hover:underline"
          >
            {siteConfig.contact.email}
          </a>
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

      <div className="border-t border-neutral-200 py-4 text-center dark:border-neutral-800">
        <p className="text-xs text-neutral-500">
          © {new Date().getFullYear()} {siteConfig.legalName}. Tüm hakları saklıdır.
        </p>
        <p className="mt-1 text-[10px] text-neutral-400">
          {siteConfig.activities.primary} · {siteConfig.activities.secondary}
        </p>
      </div>
    </footer>
  );
}
