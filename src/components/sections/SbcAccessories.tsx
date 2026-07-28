import SectionHeading from "@/components/ui/SectionHeading";
import ExpandingPanels from "@/components/ui/ExpandingPanels";
import Reveal from "@/components/ui/Reveal";
import { sbcProducts } from "@/data/site";

export default function SbcAccessories() {
  return (
    <section id="sbc" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="SBC & Accessories"
          title="Single Board Computers & Accessories"
          subtitle="SBCs, expansion boards, cases and all the accessories around them."
        />
      </Reveal>
      <Reveal delay={0.1} className="mt-12">
        <ExpandingPanels items={sbcProducts} />
      </Reveal>
    </section>
  );
}
