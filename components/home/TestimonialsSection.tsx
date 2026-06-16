import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { TestimonialCard } from "@/components/common/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by candidates, students, and corporate teams"
            description="Realistic outcomes begin with careful guidance, clear communication, and professional follow-through."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.06}>
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
