"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks, siteConfig } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false); // mobil menü durumu

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="#" className="flex items-center gap-2 text-lg font-bold">
          <Image
            src={siteConfig.logo.mark}
            alt={`${siteConfig.name} logo`}
            width={32}
            height={32}
          />
          {siteConfig.name}
        </Link>

        {/* Masaüstü menü */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-500"
            >
              Get a Quote
            </a>
          </li>
        </ul>

        {/* Mobil menü butonu */}
        <button
          type="button"
          className="md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </nav>

      {/* Mobil menü */}
      {open && (
        <ul className="space-y-2 border-t border-neutral-200 px-4 py-4 md:hidden dark:border-neutral-800">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)} className="block py-1 text-sm">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
