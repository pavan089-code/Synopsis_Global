import type { Metadata } from "next";
import { CountryCard } from "@/components/common/CountryCard";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { countries } from "@/data/countries";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Countries",
  description: "Explore international destinations served by Synopsis Global, including Canada, Australia, UK, USA, Germany, UAE, and New Zealand.",
  keywords: siteConfig.keywords,
  alternates: { canonical: "/countries" },
  openGraph: {
    title: "Countries | Synopsis Global",
    description: "International destinations for work, study, and immigration pathways.",
    url: "/countries",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Countries Supported by Synopsis Global",
    description: "Canada, Australia, UK, USA, Germany, UAE, and New Zealand.",
  },
};

export default function CountriesPage() {
  return (
    <div className="bg-white">
      <section className="bg-[#082B6A] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C9A227]">Countries</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-normal sm:text-5xl">Global destinations for work, study, and long-term growth</h1>
        </div>
      </section>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              title="Countries we serve"
              description="Each destination card is structured to support future flag images, program details, and destination-specific opportunity updates."
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
