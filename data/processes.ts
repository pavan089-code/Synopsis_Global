export type ProcessFlow = {
  title: string;
  description: string;
  steps: string[];
};

export const processFlows: ProcessFlow[] = [
  {
    title: "For Students",
    description: "A guided path from first consultation to confident departure planning.",
    steps: ["Consultation", "University Selection", "Admission Support", "Visa Assistance", "Departure Guidance"],
  },
  {
    title: "For Immigration",
    description: "A careful pathway from eligibility review to document readiness and submission planning.",
    steps: ["Eligibility Review", "Route Planning", "Document Checklist", "Application Support", "Interview Preparation"],
  },
];
