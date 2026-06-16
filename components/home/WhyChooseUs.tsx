import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { choicePillars } from "@/data/whyChoose";

export function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why choose us"
            title="Built for trust, precision, and international outcomes"
            description="Synopsis Global combines structured advisory processes with market awareness, helping clients make confident decisions across borders."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {choicePillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={index * 0.06}>
                <article className="h-full border-t-2 border-[#C9A227] bg-slate-50 p-6">
                  <Icon aria-hidden="true" className="size-8 text-[#082B6A]" />
                  <h3 className="mt-5 text-lg font-semibold text-[#082B6A]">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{pillar.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
