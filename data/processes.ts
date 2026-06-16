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
    title: "For Recruitment",
    description: "A disciplined hiring workflow for employers and qualified candidates.",
    steps: ["Requirement Analysis", "Candidate Sourcing", "Screening", "Interviews", "Hiring"],
  },
];
