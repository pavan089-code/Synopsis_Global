import type { Metadata } from "next";
import { CountryCard } from "@/components/common/CountryCard";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { countries } from "@/data/countries";

export const metadata: Metadata = {
  title: "Industries We Serve & Business Solutions",
  description: "Explore Synopsis Global industry expertise and technology consulting solutions for healthcare, financial services, manufacturing, retail, logistics, government, and more.",
  keywords: ["industries we serve", "business solutions", "industry technology consulting", "digital transformation by industry", "enterprise technology solutions", "managed IT services", "cloud strategy"],
  alternates: { canonical: "/countries" },
  openGraph: {
    title: "Industries We Serve & Business Solutions | Synopsis Global",
    description: "Industry-focused technology consulting, digital transformation, managed services, cloud strategy, and business advisory.",
    url: "/countries",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | Synopsis Global",
    description: "Business and technology solutions designed for the challenges of modern industries.",
  },
};

export default function CountriesPage() {
  return (
    <div className="bg-white">
      <section className="bg-[#16325B] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#B08D57]">Industries & solutions</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-normal sm:text-5xl">Industry expertise and business solutions built for lasting performance</h1>
        </div>
      </section>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              title="Industries we serve"
              description="Deep domain understanding helps us tailor scalable technology, practical consulting, and innovation-led delivery to the realities of each industry."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {countries.map((country, index) => (
              <Reveal key={country.code} delay={index * 0.04}>
                <CountryCard country={country} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
