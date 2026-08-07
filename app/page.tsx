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
  title: "Technology and Business Consulting",
  description:
    "Synopsis Global provides technology consulting, digital transformation, talent solutions, managed services, and business advisory for ambitious enterprises.",
  keywords: siteConfig.keywords,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Synopsis Global | Technology and Business Consulting",
    description: "Technology consulting, digital transformation, talent solutions, managed services, and business advisory for ambitious enterprises.",
    url: "/",
    type: "website",
    images: [{ url: "/images/hero-global-journey.png", width: 1792, height: 1024, alt: "Synopsis Global technology and business consulting" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Synopsis Global",
    description: "Technology consulting and business solutions for enterprise growth.",
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
            <SectionHeading align="left" eyebrow="About Synopsis Global" title="A strategic partner for technology-led growth" />
          </Reveal>
          <Reveal>
            <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-1">
              {[
                {
                  title: "Who We Are",
                  body: "Synopsis Global is a modern IT solutions and business consulting company helping enterprises translate complex priorities into practical, measurable progress.",
                },
                {
                  title: "Mission",
                  body: "To help clients unlock stronger performance through insightful consulting, dependable technology services, and exceptional delivery.",
                },
                {
                  title: "Vision",
                  body: "To be a globally trusted partner for innovation, scalable transformation, and long-term business success.",
                },
              ].map((item) => (
                <article key={item.title} className="border-l-2 border-[#B08D57] pl-6">
                  <h3 className="text-lg font-semibold text-[#16325B]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#6B7280]">{item.body}</p>
                </article>
              ))}
              <Button href="/about" variant="secondary" className="w-fit">
                Discover Our Approach
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
            "@type": "ProfessionalService",
            name: siteConfig.name,
            url: siteConfig.url,
            logo: `${siteConfig.url}/logo.jpeg`,
            description: siteConfig.tagline,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Hyderabad",
              addressCountry: "IN",
            },
            areaServed: "Global",
            serviceType: ["Technology Consulting", "Digital Transformation", "Talent Solutions", "Managed Services", "Business Advisory"],
            telephone: siteConfig.phone,
            email: siteConfig.email,
          }),
        }}
      />
    </>
  );
}
