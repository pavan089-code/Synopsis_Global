import { Button } from "@/components/common/Button";
import { CountryCard } from "@/components/common/CountryCard";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import type { Country } from "@/data/countries";

const industries: Country[] = [
  { name: "Healthcare", code: "HC", image: "/images/campus-students.png", description: "Technology strategies that support connected care, efficient operations, and resilient patient services.", quickFacts: ["Operational resilience", "Experience improvement"], topUniversities: "Care operations, interoperability", popularPrograms: "Modern platforms, secure workflows", visaPathway: "Improved outcomes and service continuity", isIndustry: true },
  { name: "Banking", code: "BK", image: "/images/visa-counselling.png", description: "Secure, scalable solutions for financial institutions navigating customer expectations and regulatory change.", quickFacts: ["Trust and security", "Operational efficiency"], topUniversities: "Core operations, customer platforms", popularPrograms: "Modernisation, data-led decisioning", visaPathway: "Greater agility and customer confidence", isIndustry: true },
  { name: "Manufacturing", code: "MF", image: "/images/graduate-success.png", description: "Connected operations and technology roadmaps that improve productivity across the value chain.", quickFacts: ["Productivity", "Supply chain visibility"], topUniversities: "Operations, field services", popularPrograms: "Connected systems, performance insight", visaPathway: "Stronger efficiency and operational control", isIndustry: true },
  { name: "Retail", code: "RT", image: "/images/campus-students.png", description: "Customer-centred technology and operating models that help retailers adapt and grow across channels.", quickFacts: ["Customer experience", "Channel performance"], topUniversities: "Commerce, fulfilment", popularPrograms: "Unified journeys, smarter operations", visaPathway: "Sustainable growth and loyalty", isIndustry: true },
  { name: "Education", code: "ED", image: "/images/graduate-success.png", description: "Modern digital capabilities that strengthen learning experiences, administration, and institutional performance.", quickFacts: ["Learner experience", "Institutional agility"], topUniversities: "Learning platforms, operations", popularPrograms: "Digital services, data insight", visaPathway: "More connected educational outcomes", isIndustry: true },
  { name: "Logistics", code: "LG", image: "/images/visa-counselling.png", description: "Technology-enabled delivery models that improve visibility, responsiveness, and coordination across networks.", quickFacts: ["Network visibility", "Delivery speed"], topUniversities: "Supply chain, field operations", popularPrograms: "Connected platforms, process optimisation", visaPathway: "Reliable, scalable service delivery", isIndustry: true },
  { name: "Government", code: "GV", image: "/images/campus-students.png", description: "Citizen-focused technology and transformation support for more responsive, effective public services.", quickFacts: ["Service access", "Public value"], topUniversities: "Digital services, operational delivery", popularPrograms: "Modern platforms, process improvement", visaPathway: "Better outcomes for communities", isIndustry: true },
  { name: "Energy", code: "EN", image: "/images/graduate-success.png", description: "Technology and advisory capabilities that support resilient operations in an evolving energy landscape.", quickFacts: ["Resilience", "Asset performance"], topUniversities: "Field operations, enterprise systems", popularPrograms: "Connected assets, operational insight", visaPathway: "Preparedness for long-term change", isIndustry: true },
];

export function CountriesSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Industries we serve"
              title="Industry insight that turns change into opportunity"
              description="We work with organisations across essential industries, applying technology and business consulting to the challenges that matter most."
            />
          </Reveal>
          <Reveal>
            <Button href="/countries" variant="secondary">
              View Industries
            </Button>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((country, index) => (
            <Reveal key={country.code} delay={index * 0.04}>
              <CountryCard country={country} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
