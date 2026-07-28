"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";
import VeloraMark from "@/components/ui/VeloraMark";

export default function Navbar() {
  const [open, setOpen] = useState(false); // mobil menü durumu

  return (
    <header className="sticky top-0 z-40 border-b border-paper/15 bg-ink/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="#" className="group flex items-center gap-3">
          <VeloraMark size={30} />
          <span className="font-display text-2xl tracking-wide">{siteConfig.name}</span>
        </Link>

        {/* Masaüstü menü */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.18em] text-paper/70 transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="border border-accent px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-accent transition-colors hover:bg-accent hover:text-ink"
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
        <ul className="space-y-3 border-t border-paper/15 px-5 py-5 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-xs uppercase tracking-[0.18em] text-paper/80"
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
