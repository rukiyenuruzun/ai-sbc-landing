import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

const inputClass =
  "w-full border border-paper/20 bg-transparent px-4 py-3 text-sm text-paper placeholder:text-xs placeholder:uppercase placeholder:tracking-[0.18em] placeholder:text-paper/40 focus:border-accent focus:outline-none";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
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
            <input type="text" name="name" placeholder="Full Name" className={inputClass} />
            <input type="email" name="email" placeholder="Email" className={inputClass} />
            <textarea name="message" placeholder="Your Message" rows={5} className={inputClass} />
            <button
              type="submit"
              className="bg-accent px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:bg-paper"
            >
              Send
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-6 text-sm text-paper/60">
            <p className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-[0.2em] text-accent">Email</span>
              <a href={`mailto:${siteConfig.contact.email}`} className="text-paper hover:underline">
                {siteConfig.contact.email}
              </a>
            </p>
            <p className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-[0.2em] text-accent">Address</span>
              <span className="text-paper/80">{siteConfig.contact.address}</span>
            </p>
            {/* Harita / ek görsel alanı */}
            <div className="duotone relative aspect-video overflow-hidden border border-paper/15 bg-ink-soft">
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
