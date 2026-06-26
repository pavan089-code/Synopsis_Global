export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image?: string;
  outcome?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ananya Menon",
    role: "Master's Graduate, United Kingdom",
    outcome: "Graduate success",
    image: "/images/graduate-success.png",
    quote:
      "Synopsis Global helped me understand course options, university requirements, and visa documentation without pressure. The guidance felt personal and professional.",
  },
  {
    name: "Rahul Varma",
    role: "Master's Student, Australia",
    outcome: "Admission secured",
    image: "/images/campus-students.png",
    quote:
      "Their education team helped me shortlist realistic universities, strengthen my application, and understand the financial planning before I committed.",
  },
  {
    name: "Nisha Reddy",
    role: "Permanent Residency Applicant, Canada",
    outcome: "Visa approved",
    image: "/images/visa-counselling.png",
    quote:
      "The documentation review was thorough and calm. I always knew what was pending, what mattered, and how to prepare the next step.",
  },
];
