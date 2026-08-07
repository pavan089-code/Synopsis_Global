import { Globe2, Lightbulb, ShieldCheck, TrendingUp, UsersRound } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";

const choicePillars = [
  { title: "Innovation with Purpose", description: "We focus innovation on the opportunities that can create meaningful value for your organisation.", icon: Lightbulb },
  { title: "Experienced Teams", description: "Our teams bring practical expertise, sound judgment, and a delivery mindset to every engagement.", icon: UsersRound },
  { title: "Customer Success", description: "We measure our contribution by the outcomes our clients achieve and the confidence they build over time.", icon: TrendingUp },
  { title: "Global Delivery", description: "Flexible delivery models provide the reach, responsiveness, and governance complex programmes require.", icon: Globe2 },
  { title: "Scalable Partnerships", description: "Our solutions and relationships are built to evolve with changing priorities, growth plans, and market conditions.", icon: ShieldCheck },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why choose us"
            title="The confidence to move from ambition to advantage"
            description="Synopsis Global combines consulting insight, technology capability, and accountable delivery to help clients achieve sustainable progress."
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
