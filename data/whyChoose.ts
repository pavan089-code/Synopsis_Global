import type { LucideIcon } from "lucide-react";
import { Globe2, Handshake, ShieldCheck, UserCheck } from "lucide-react";

export type ChoicePillar = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const choicePillars: ChoicePillar[] = [
  {
    title: "Global Network",
    description: "Access to international education, employment, and workforce markets through trusted channels.",
    icon: Globe2,
  },
  {
    title: "Industry Expertise",
    description: "Practical experience across recruitment, education, immigration, HR, and compliance workflows.",
    icon: ShieldCheck,
  },
  {
    title: "End-to-End Support",
    description: "Clear guidance from initial consultation through documentation, submission, and onboarding.",
    icon: UserCheck,
  },
  {
    title: "Trusted Partnerships",
    description: "Professional relationships with employers, institutions, and advisory stakeholders.",
    icon: Handshake,
  },
];
