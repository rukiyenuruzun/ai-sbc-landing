"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";
import VeloraMark from "@/components/ui/VeloraMark";

// Çubuk yok: linkler zeminin üzerinde serbest durur, logo ortada.
// Header absolute'tür, scroll'da sayfayla birlikte akar (sticky değil).
export default function Navbar() {
  const [open, setOpen] = useState(false); // mobil menü durumu
  const mid = Math.ceil(navLinks.length / 2);
  const left = navLinks.slice(0, mid);
  const right = navLinks.slice(mid);

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <nav className="flex items-center justify-between px-6 py-7 sm:px-10 md:grid md:grid-cols-[1fr_auto_1fr] lg:px-16">
        {/* Sol linkler */}
        <ul className="hidden items-center gap-10 md:flex">
          {left.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.2em] text-paper/70 transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Ortada logo */}
        <Link href="#" className="group flex items-center gap-3 md:justify-self-center">
          <VeloraMark size={30} />
          <span className="font-display text-2xl tracking-wide">{siteConfig.name}</span>
        </Link>

        {/* Sağ linkler + CTA */}
        <ul className="hidden items-center justify-end gap-10 md:flex">
          {right.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.2em] text-paper/70 transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="border border-accent px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-accent transition-colors hover:bg-accent hover:text-ink"
            >
              Get a Quote
            </a>
          </li>
        </ul>

        {/* Mobil menü butonu */}
        <button
          type="button"
          className="text-paper md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </nav>

      {/* Mobil menü */}
      {open && (
        <ul className="space-y-3 border-y border-paper/15 bg-ink px-6 py-5 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-xs uppercase tracking-[0.2em] text-paper/80"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
