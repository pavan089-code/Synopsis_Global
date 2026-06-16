import type { Metadata } from "next";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { TestimonialCard } from "@/components/common/TestimonialCard";
import { statistics } from "@/data/statistics";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Success Stories",
  description: "Review Synopsis Global success statistics, testimonials, and placement outcomes.",
};

export default function SuccessStoriesPage() {
  return (
    <div className="bg-white">
      <section className="bg-[#082B6A] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C9A227]">Success stories</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-normal sm:text-5xl">Real outcomes across careers, education, and workforce partnerships</h1>
        </div>
      </section>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading title="Progress measured by meaningful milestones" />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {statistics.map((stat) => (
              <div key={stat.label} className="border border-slate-200 p-6 text-center">
                <p className="text-4xl font-semibold text-[#082B6A]">
                  {stat.value}
                  {stat.suffix}
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Testimonials" title="Client confidence, in their own words" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Placements" title="Representative placement pathways" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {["Healthcare professionals placed with UK employers", "Students admitted to Australian universities", "Corporate staffing support for UAE operations"].map((item) => (
              <article key={item} className="border-l-2 border-[#C9A227] bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-[#082B6A]">{item}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">Structured consultation, document readiness, interview preparation, and ongoing coordination supported this pathway.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
