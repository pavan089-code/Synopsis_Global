export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  country: string;
  testimonial: string;
  image: string;
  createdAt: Date | null;
}

export type TestimonialInput = Omit<Testimonial, "id" | "createdAt">;
