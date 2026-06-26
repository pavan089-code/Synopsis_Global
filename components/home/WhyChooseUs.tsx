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
            title="Built for trust, clarity, and international outcomes"
            description="Synopsis Global combines personalized counselling with careful documentation standards, helping students and applicants move forward with confidence."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {choicePillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={index * 0.06}>
                <article className="h-full border-t-2 border-[#B08D57] bg-[#F7F5F2] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#16325B]/8">
                  <Icon aria-hidden="true" className="size-8 text-[#16325B]" />
                  <h3 className="mt-5 text-lg font-semibold text-[#16325B]">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#6B7280]">{pillar.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
