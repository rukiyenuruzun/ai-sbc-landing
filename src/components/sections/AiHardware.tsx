import SectionHeading from "@/components/ui/SectionHeading";
import ExpandingPanels from "@/components/ui/ExpandingPanels";
import Reveal from "@/components/ui/Reveal";
import { aiHardware } from "@/data/site";

export default function AiHardware() {
  return (
    <section id="ai-hardware" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="AI Hardware"
          title="Hardware Built for AI"
          subtitle="Hardware solutions for AI workloads, from the edge to the data center."
        />
      </Reveal>
      <Reveal delay={0.1} className="mt-12">
        <ExpandingPanels items={aiHardware} />
      </Reveal>
    </section>
  );
}
