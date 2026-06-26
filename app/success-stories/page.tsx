import type { Metadata } from "next";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { TestimonialCard } from "@/components/common/TestimonialCard";
import { statistics } from "@/data/statistics";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Success Stories",
  description: "Review Synopsis Global student testimonials, visa approvals, and graduate success stories.",
};

export default function SuccessStoriesPage() {
  return (
    <div className="bg-white">
      <section className="bg-[#16325B] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#B08D57]">Success stories</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-normal sm:text-5xl">Real outcomes across education, visas, and immigration pathways</h1>
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
                <p className="text-4xl font-semibold text-[#16325B]">
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
          <SectionHeading eyebrow="Milestones" title="Representative success pathways" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {["Students admitted to Australian universities", "Student visa approvals for Canada", "Graduate success stories in the United Kingdom"].map((item) => (
              <article key={item} className="border-l-2 border-[#B08D57] bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-[#16325B]">{item}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">Structured consultation, document readiness, interview preparation, and ongoing coordination supported this pathway.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
