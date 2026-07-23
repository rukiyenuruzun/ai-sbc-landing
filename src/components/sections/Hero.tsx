import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section id="hero" className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:py-32">
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
        {siteConfig.tagline}
      </h1>
      <p className="mt-6 max-w-xl text-lg text-neutral-500">{siteConfig.description}</p>

      <div className="mt-8 flex gap-4">
        <a
          href="#ai-hardware"
          className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-500"
        >
          Ürünleri Keşfet
        </a>
        <a
          href="#contact"
          className="rounded-lg border border-neutral-300 px-6 py-3 font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
        >
          Bize Ulaşın
        </a>
      </div>

      {/* Hero görseli / animasyon alanı — tasarımı burada kurgulayın */}
      <div className="mt-16 aspect-[2/1] w-full max-w-4xl rounded-2xl bg-neutral-100 dark:bg-neutral-900" />
    </section>
  );
}
