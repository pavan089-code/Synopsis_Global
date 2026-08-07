import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { TestimonialCard } from "@/components/common/TestimonialCard";

const testimonials = [
  {
    name: "Chief Operations Officer",
    role: "Global Manufacturing Enterprise",
    outcome: "Operational transformation",
    image: "/images/graduate-success.png",
    quote: "Synopsis Global brought clarity to a complex transformation programme. Their team combined strategic thinking with disciplined execution and kept our priorities firmly in view.",
  },
  {
    name: "Technology Director",
    role: "Financial Services Organisation",
    outcome: "Modernised delivery model",
    image: "/images/campus-students.png",
    quote: "The engagement was practical from day one. Synopsis Global helped us strengthen delivery, access specialist talent, and create a more resilient technology foundation.",
  },
  {
    name: "Business Transformation Lead",
    role: "Multi-market Retail Group",
    outcome: "Scalable growth platform",
    image: "/images/visa-counselling.png",
    quote: "Their consultants understood both the commercial challenge and the operational detail. We now have a clearer path to scale and a partner we can rely on.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Client perspectives"
            title="Trusted to deliver where it matters most"
            description="Our clients value the clarity, capability, and commitment we bring to complex technology and business priorities."
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
