import type { Metadata } from "next";
import { Button } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CountriesSection } from "@/components/home/CountriesSection";
import { CTASection } from "@/components/home/CTASection";
import { FAQSection } from "@/components/home/FAQSection";
import { Hero } from "@/components/home/Hero";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { TrustIndicators } from "@/components/home/TrustIndicators";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Connecting Talent to Global Opportunities",
  description:
    "Synopsis Global delivers workforce solutions, recruitment services, study abroad consulting, and immigration services for global opportunities.",
  keywords: siteConfig.keywords,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Synopsis Global | Connecting Talent to Global Opportunities",
    description: "Premium consultancy for workforce solutions, recruitment, education services, and immigration pathways.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Synopsis Global",
    description: siteConfig.tagline,
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <Reveal>
            <SectionHeading align="left" eyebrow="About Synopsis Global" title="A premium consultancy for international pathways" />
          </Reveal>
          <Reveal>
            <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-1">
              {[
                {
                  title: "Who We Are",
                  body: "Synopsis Global is a professional services company offering end-to-end solutions in workforce management, recruitment & staffing, education services, and immigration services.",
                },
                {
                  title: "Mission",
                  body: "To connect qualified talent with trusted global pathways through ethical guidance, careful documentation, and strong institutional partnerships.",
                },
                {
                  title: "Vision",
                  body: "To become a respected international advisory brand known for dependable outcomes and long-term client success.",
                },
              ].map((item) => (
                <article key={item.title} className="border-l-2 border-[#C9A227] pl-6">
                  <h3 className="text-lg font-semibold text-[#082B6A]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
                </article>
              ))}
              <Button href="/about" variant="secondary" className="w-fit">
                Learn More
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
      <ServicesPreview />
      <WhyChooseUs />
      <CountriesSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
