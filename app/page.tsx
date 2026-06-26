import type { Metadata } from "next";
import { Button } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { BlogPreview } from "@/components/home/BlogPreview";
import { CountriesSection } from "@/components/home/CountriesSection";
import { CTASection } from "@/components/home/CTASection";
import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { StatisticsSection } from "@/components/home/StatisticsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { TrustIndicators } from "@/components/home/TrustIndicators";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Building Your Future Beyond Borders",
  description:
    "Synopsis Global guides students and professionals through study abroad, university admissions, visas, and immigration pathways.",
  keywords: siteConfig.keywords,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Synopsis Global | Building Your Future Beyond Borders",
    description: "Premium international education and immigration consultancy for study abroad, visas, and global pathways.",
    url: "/",
    type: "website",
    images: [{ url: "/images/hero-global-journey.png", width: 1792, height: 1024, alt: "Synopsis Global international education journey" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Synopsis Global",
    description: "Study abroad, visa, and immigration counselling for global futures.",
    images: ["/images/hero-global-journey.png"],
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
                  body: "Synopsis Global is a professional education and immigration consultancy supporting students, families, and professionals with trusted international guidance.",
                },
                {
                  title: "Mission",
                  body: "To guide every client through education, visa, and immigration decisions with ethical counselling, careful documentation, and practical destination insight.",
                },
                {
                  title: "Vision",
                  body: "To become a respected international advisory brand known for dependable guidance, transparent processes, and long-term client success.",
                },
              ].map((item) => (
                <article key={item.title} className="border-l-2 border-[#B08D57] pl-6">
                  <h3 className="text-lg font-semibold text-[#16325B]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#6B7280]">{item.body}</p>
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
      <TestimonialsSection />
      <StatisticsSection />
      <BlogPreview />
      <CTASection />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: siteConfig.name,
            url: siteConfig.url,
            logo: `${siteConfig.url}/logo.jpeg`,
            description: siteConfig.tagline,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Hyderabad",
              addressCountry: "IN",
            },
            areaServed: ["Canada", "Australia", "United Kingdom", "United States", "Germany", "New Zealand", "UAE"],
            serviceType: ["Study Abroad Counselling", "University Admissions", "Student Visa Guidance", "Immigration Guidance"],
            telephone: siteConfig.phone,
            email: siteConfig.email,
          }),
        }}
      />
    </>
  );
}
