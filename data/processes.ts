export type ProcessFlow = {
  title: string;
  description: string;
  steps: string[];
};

export const processFlows: ProcessFlow[] = [
  {
    title: "For Students",
    description: "A clear route from first conversation to confident study abroad preparation.",
    steps: ["Consultation", "University Selection", "Admission Support", "Visa Assistance", "Departure Guidance"],
  },
  {
    title: "For Global Mobility",
    description: "A careful route from eligibility review through documentation, application readiness, and next-step planning.",
    steps: ["Eligibility Review", "Route Planning", "Document Checklist", "Application Support", "Interview Preparation"],
  },
];
