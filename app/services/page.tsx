import type { Metadata } from "next";
import { InquiryButton } from "@/components/common/InquiryButton";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Synopsis Global services across study abroad counselling, university admissions, visa guidance, and immigration services.",
  keywords: siteConfig.keywords,
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Synopsis Global",
    description: "Study abroad, university admissions, visa guidance, and immigration services.",
    url: "/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Synopsis Global Services",
    description: "Study abroad, student visa, work visa, and immigration guidance.",
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <section className="bg-[#16325B] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#B08D57]">Services</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-normal sm:text-5xl">Strategic support for every stage of global mobility</h1>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-12 px-6 lg:px-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.slug} delay={index * 0.04}>
                <article id={service.slug} className="grid gap-8 border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[.7fr_1.3fr]">
                  <div>
                    <div className="mb-5 inline-flex size-12 items-center justify-center rounded-sm bg-[#B08D57]/10 text-[#16325B]">
                      <Icon aria-hidden="true" className="size-6" />
                    </div>
                    <h2 className="text-2xl font-semibold text-[#16325B]">{service.title}</h2>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{service.overview}</p>
                  </div>
                  <div>
                    <SectionHeading align="left" title="What we support" description={service.summary} />
                    <div className="mt-6 grid gap-6 lg:grid-cols-2">
                      <div>
                        <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-[#16325B]">Capabilities</h3>
                        <ul className="mt-4 grid gap-3">
                          {service.features.map((feature) => (
                            <li key={feature} className="border-l-2 border-[#B08D57] bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-[#16325B]">Benefits</h3>
                        <ul className="mt-4 grid gap-3">
                          {service.benefits.map((benefit) => (
                            <li key={benefit} className="border border-slate-200 px-4 py-3 text-sm text-slate-700">
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <InquiryButton service={service.title} variant="secondary" className="mt-7">
                      {service.cta}
                    </InquiryButton>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
