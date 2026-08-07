import { BriefcaseBusiness, CloudCog, Network, PanelsTopLeft, UsersRound, Workflow } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ServiceCard } from "@/components/common/ServiceCard";
import type { Service } from "@/data/services";

const technologyServices: Service[] = [
  { title: "Technology Consulting", slug: "technology-consulting", summary: "Strategic technology guidance that aligns investment decisions with business priorities.", overview: "", benefits: [], features: ["Technology Strategy", "Architecture Advisory"], cta: "", icon: BriefcaseBusiness },
  { title: "Digital Transformation", slug: "digital-transformation", summary: "Transformation roadmaps that modernise operating models, customer experiences, and core processes.", overview: "", benefits: [], features: ["Transformation Roadmaps", "Process Modernisation"], cta: "", icon: Workflow },
  { title: "Cloud & Infrastructure", slug: "cloud-infrastructure", summary: "Resilient, secure infrastructure foundations designed for performance, flexibility, and scale.", overview: "", benefits: [], features: ["Cloud Strategy", "Infrastructure Operations"], cta: "", icon: CloudCog },
  { title: "Business Advisory", slug: "business-advisory", summary: "Practical advisory that connects strategic intent with executable plans and measurable outcomes.", overview: "", benefits: [], features: ["Operating Models", "Growth Strategy"], cta: "", icon: PanelsTopLeft },
  { title: "Talent Solutions", slug: "talent-solutions", summary: "Specialist talent solutions that give organisations access to the capability needed to deliver.", overview: "", benefits: [], features: ["Talent Strategy", "Specialist Delivery Teams"], cta: "", icon: UsersRound },
];

const enterpriseServices: Service[] = [
  { title: "Managed Services", slug: "managed-services", summary: "Dependable managed services that keep critical operations stable, efficient, and continuously improving.", overview: "", benefits: [], features: ["Service Management", "Continuous Improvement"], cta: "", icon: Network },
  { title: "Enterprise Solutions", slug: "enterprise-solutions", summary: "Integrated solutions that strengthen the systems and processes at the centre of your enterprise.", overview: "", benefits: [], features: ["Enterprise Platforms", "Solution Integration"], cta: "", icon: PanelsTopLeft },
  { title: "Data & Insights", slug: "data-insights", summary: "Actionable insights that help leaders make faster, more confident, and better-informed decisions.", overview: "", benefits: [], features: ["Data Strategy", "Performance Insights"], cta: "", icon: Workflow },
  { title: "Cybersecurity", slug: "cybersecurity", summary: "Practical security support that helps protect operations, information, and stakeholder confidence.", overview: "", benefits: [], features: ["Security Assessment", "Risk Management"], cta: "", icon: CloudCog },
  { title: "Global Delivery", slug: "global-delivery", summary: "Flexible delivery models that bring the right expertise, governance, and responsiveness to every engagement.", overview: "", benefits: [], features: ["Distributed Teams", "Delivery Governance"], cta: "", icon: UsersRound },
  { title: "Innovation Services", slug: "innovation-services", summary: "Focused innovation initiatives that turn emerging opportunities into commercial and operational value.", overview: "", benefits: [], features: ["Innovation Planning", "Value Realisation"], cta: "", icon: BriefcaseBusiness },
];

export function ServicesPreview() {
  return (
    <section className="bg-[#F7F5F2] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Technology and consulting"
            title="Solutions designed for lasting business impact"
            description="We combine strategic perspective, technical depth, and delivery discipline to help organisations respond to change and build momentum."
          />
        </Reveal>
        <div id="study-abroad" className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {technologyServices.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.06}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-20 max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Enterprise services"
            title="Operational strength for a changing world"
            description="From managed operations to global delivery, we provide the capabilities businesses need to perform reliably, adapt quickly, and grow with confidence."
          />
        </Reveal>
        <div id="immigration" className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {enterpriseServices.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.06}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
