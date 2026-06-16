import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ServiceCard } from "@/components/common/ServiceCard";
import { services, type Service } from "@/data/services";

export function ServicesPreview() {
  const homepageServices = [
    services.find((service) => service.slug === "recruitment-staffing"),
    services.find((service) => service.slug === "workforce-solutions"),
    services.find((service) => service.slug === "education-services"),
    services.find((service) => service.slug === "immigration-services"),
  ].filter((service): service is Service => Boolean(service));

  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our services"
            title="Integrated support for global mobility"
            description="From talent acquisition to admissions and immigration coordination, our teams align every step around clarity, compliance, and long-term outcomes."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {homepageServices.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.06}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
