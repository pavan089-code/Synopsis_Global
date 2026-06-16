import { Button } from "@/components/common/Button";
import { CountryCard } from "@/components/common/CountryCard";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { countries } from "@/data/countries";

export function CountriesSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Countries we serve"
              title="International destinations with structured opportunity pathways"
              description="We support candidates, students, and employers across established destinations with practical route planning and documentation guidance."
            />
          </Reveal>
          <Reveal>
            <Button href="/countries" variant="secondary">
              View Countries
            </Button>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {countries.map((country, index) => (
            <Reveal key={country.code} delay={index * 0.04}>
              <CountryCard country={country} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
