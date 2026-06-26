import type { LucideIcon } from "lucide-react";
import { BadgeCheck, Globe2, Handshake, ShieldCheck, UserCheck } from "lucide-react";

export type ChoicePillar = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const choicePillars: ChoicePillar[] = [
  {
    title: "Personalized Counselling",
    description: "Every student and applicant receives route planning shaped around profile, finances, destination, and long-term goals.",
    icon: UserCheck,
  },
  {
    title: "Certified Experts",
    description: "Experienced counsellors review eligibility, admissions requirements, visa criteria, and documentation with care.",
    icon: ShieldCheck,
  },
  {
    title: "Transparent Process",
    description: "Clear timelines, document checklists, application milestones, and honest guidance at each decision point.",
    icon: BadgeCheck,
  },
  {
    title: "Global Partnerships",
    description: "Access to education partners, visa guidance networks, and destination knowledge across leading study countries.",
    icon: Handshake,
  },
  {
    title: "High Visa Success",
    description: "Strong preparation standards help reduce avoidable gaps before applications reach admissions or visa review.",
    icon: Globe2,
  },
];
