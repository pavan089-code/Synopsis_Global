import type { Testimonial } from "@/data/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="h-full rounded-sm border border-slate-200 bg-white p-6 shadow-sm">
      <blockquote className="text-sm leading-7 text-slate-700">&ldquo;{testimonial.quote}&rdquo;</blockquote>
      <figcaption className="mt-6 border-t border-slate-100 pt-4">
        <p className="font-semibold text-[#082B6A]">{testimonial.name}</p>
        <p className="mt-1 text-sm text-slate-500">{testimonial.role}</p>
      </figcaption>
    </figure>
  );
}
