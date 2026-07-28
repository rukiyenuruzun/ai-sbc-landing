import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Get in Touch"
          subtitle="Reach out for your projects and product inquiries."
        />
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        {/* Form gönderimi için bir API route (src/app/api/contact/route.ts)
            veya server action bağlamanız gerekiyor. */}
        <Reveal>
          <form className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full rounded-lg border border-neutral-300 px-4 py-3 dark:border-neutral-700 dark:bg-neutral-900"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full rounded-lg border border-neutral-300 px-4 py-3 dark:border-neutral-700 dark:bg-neutral-900"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="w-full rounded-lg border border-neutral-300 px-4 py-3 dark:border-neutral-700 dark:bg-neutral-900"
            />
            <button
              type="submit"
              className="rounded-lg bg-orange-600 px-6 py-3 font-medium text-white hover:bg-orange-500"
            >
              Send
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-4 text-sm text-neutral-500">
            <p>
              <span className="font-semibold text-neutral-900 dark:text-white">Email:</span>{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:underline">
                {siteConfig.contact.email}
              </a>
            </p>
            <p>
              <span className="font-semibold text-neutral-900 dark:text-white">Address:</span>{" "}
              {siteConfig.contact.address}
            </p>
            {/* Harita / ek görsel alanı */}
            <div className="relative aspect-video overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900">
              <Image
                src={siteConfig.contactImage}
                alt="Hong Kong skyline at night"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
