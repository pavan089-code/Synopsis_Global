import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ServiceCard } from "@/components/common/ServiceCard";
import { services, type Service } from "@/data/services";

export function ServicesPreview() {
  const educationServices = ["university-selection", "admissions", "sop-lor", "scholarships", "career-counselling"]
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is Service => Boolean(service));
  const immigrationServices = ["student-visa", "visitor-visa", "work-visa", "permanent-residency", "documentation", "interview-preparation"]
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is Service => Boolean(service));

  return (
    <section className="bg-[#F7F5F2] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Study abroad services"
            title="Premium guidance for every stage of your education journey"
            description="From university selection to scholarship planning, our counsellors help students make informed decisions with clear documentation and destination planning."
          />
        </Reveal>
        <div id="study-abroad" className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {educationServices.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.06}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-20 max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Immigration services"
            title="Structured visa and immigration support"
            description="Our immigration advisory process focuses on eligibility clarity, document readiness, interview preparation, and country-specific application requirements."
          />
        </Reveal>
        <div id="immigration" className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {immigrationServices.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.06}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
