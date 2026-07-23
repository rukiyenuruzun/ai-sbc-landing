import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20">
      <SectionHeading
        eyebrow="İletişim"
        title="Bize Ulaşın"
        subtitle="Projeleriniz ve ürün talepleriniz için bizimle iletişime geçin."
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        {/* Form gönderimi için bir API route (src/app/api/contact/route.ts)
            veya server action bağlamanız gerekiyor. */}
        <form className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Ad Soyad"
            className="w-full rounded-lg border border-neutral-300 px-4 py-3 dark:border-neutral-700 dark:bg-neutral-900"
          />
          <input
            type="email"
            name="email"
            placeholder="E-posta"
            className="w-full rounded-lg border border-neutral-300 px-4 py-3 dark:border-neutral-700 dark:bg-neutral-900"
          />
          <textarea
            name="message"
            placeholder="Mesajınız"
            rows={5}
            className="w-full rounded-lg border border-neutral-300 px-4 py-3 dark:border-neutral-700 dark:bg-neutral-900"
          />
          <button
            type="submit"
            className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-500"
          >
            Gönder
          </button>
        </form>

        <div className="space-y-4 text-sm text-neutral-500">
          <p>
            <span className="font-semibold text-neutral-900 dark:text-white">E-posta:</span>{" "}
            {siteConfig.contact.email}
          </p>
          <p>
            <span className="font-semibold text-neutral-900 dark:text-white">Telefon:</span>{" "}
            {siteConfig.contact.phone}
          </p>
          <p>
            <span className="font-semibold text-neutral-900 dark:text-white">Adres:</span>{" "}
            {siteConfig.contact.address}
          </p>
          {/* Harita / ek görsel alanı */}
          <div className="aspect-video rounded-xl bg-neutral-100 dark:bg-neutral-900" />
        </div>
      </div>
    </section>
  );
}
