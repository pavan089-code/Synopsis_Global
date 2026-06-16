import type { Metadata } from "next";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { companyStory, coreValues, mission, vision } from "@/data/about";
import { countries } from "@/data/countries";
import { siteConfig } from "@/data/site";
import { choicePillars } from "@/data/whyChoose";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Synopsis Global, our mission, vision, core values, global network, and professional advisory approach.",
  keywords: siteConfig.keywords,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Synopsis Global",
    description: "A professional services company connecting talent, education, and global opportunities.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Synopsis Global",
    description: siteConfig.tagline,
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="bg-[#082B6A] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C9A227]">About us</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-normal sm:text-5xl">A trusted bridge between ambition and international opportunity</h1>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <Reveal>
            <SectionHeading align="left" eyebrow="Company story" title="Built for clarity in complex global decisions" />
          </Reveal>
          <Reveal>
            <div className="space-y-6 text-base leading-8 text-slate-600">
              {companyStory.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:px-8">
          <Reveal>
            <article className="h-full border-t-2 border-[#C9A227] bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-[#082B6A]">Mission</h2>
              <p className="mt-4 leading-7 text-slate-600">{mission}</p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="h-full border-t-2 border-[#C9A227] bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-[#082B6A]">Vision</h2>
              <p className="mt-4 leading-7 text-slate-600">{vision}</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Core values"
              title="The standards behind every engagement"
              description="Our values shape how we communicate, prepare documentation, advise families, and support employers through high-stakes decisions."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.title} delay={index * 0.05}>
                  <article className="h-full border border-slate-200 p-6">
                    <Icon aria-hidden="true" className="size-8 text-[#C9A227]" />
                    <h3 className="mt-5 text-lg font-semibold text-[#082B6A]">{value.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{value.body}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Global reach"
              title="Destination-aware support for international pathways"
              description="Synopsis Global supports work, study, hiring, and immigration planning across priority markets with practical guidance for each destination."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-3 sm:grid-cols-2">
              {countries.map((country) => (
                <div key={country.code} className="flex items-center justify-between border border-slate-200 bg-white px-4 py-3">
                  <span className="font-semibold text-[#082B6A]">{country.name}</span>
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#C9A227]">{country.code}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Why choose Synopsis Global"
              title="A professional advisory partner for international decisions"
              description="Our work combines global opportunity awareness with structured local execution, helping clients make decisions with confidence."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {choicePillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={index * 0.05}>
                  <article className="h-full border-t-2 border-[#C9A227] bg-white p-6 shadow-sm">
                    <Icon aria-hidden="true" className="size-8 text-[#082B6A]" />
                    <h3 className="mt-5 text-lg font-semibold text-[#082B6A]">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{pillar.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
