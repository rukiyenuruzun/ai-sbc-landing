import SectionHeading from "@/components/ui/SectionHeading";
import ExpandingPanels from "@/components/ui/ExpandingPanels";
import Reveal from "@/components/ui/Reveal";
import { aiSoftware } from "@/data/site";

export default function AiSoftware() {
  return (
    <section id="ai-software" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="AI Software"
          title="Software We Build"
          subtitle="In-house AI software products and custom enterprise solutions."
        />
      </Reveal>
      <Reveal delay={0.1} className="mt-12">
        <ExpandingPanels items={aiSoftware} />
      </Reveal>
    </section>
  );
}
