import Image from "next/image";
import type { Testimonial } from "@/data/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="h-full overflow-hidden rounded-xl border border-[#D9D6CF] bg-white shadow-sm shadow-[#16325B]/5">
      {testimonial.image ? (
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={testimonial.image}
            alt={`${testimonial.name} success story`}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition duration-500 hover:scale-105"
          />
          {testimonial.outcome ? (
            <span className="absolute left-4 top-4 rounded-full bg-[#16325B]/88 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              {testimonial.outcome}
            </span>
          ) : null}
        </div>
      ) : null}
      <div className="p-6">
        <blockquote className="text-sm leading-7 text-[#1F2937]">&ldquo;{testimonial.quote}&rdquo;</blockquote>
        <figcaption className="mt-6 border-t border-[#D9D6CF] pt-4">
          <p className="font-semibold text-[#16325B]">{testimonial.name}</p>
          <p className="mt-1 text-sm text-[#6B7280]">{testimonial.role}</p>
        </figcaption>
      </div>
    </figure>
  );
}
