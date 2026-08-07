import type { LucideIcon } from "lucide-react";
import { BadgeCheck, Globe2, Handshake, ShieldCheck, UserCheck } from "lucide-react";

export type ChoicePillar = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const choicePillars: ChoicePillar[] = [
  {
    title: "Customized Solutions",
    description: "Every engagement is shaped around your operating model, priorities, and the outcomes that matter most to your business.",
    icon: UserCheck,
  },
  {
    title: "Experienced Professionals",
    description: "Our teams combine practical consulting experience with industry expertise to address complex business and technology challenges.",
    icon: ShieldCheck,
  },
  {
    title: "Client-Centric Delivery",
    description: "Clear governance, accountable communication, and measurable milestones keep every program aligned with your goals.",
    icon: BadgeCheck,
  },
  {
    title: "Global Delivery Model",
    description: "Flexible delivery capability gives you access to the right expertise, coordinated support, and consistent quality across markets.",
    icon: Handshake,
  },
  {
    title: "Trusted Partnerships",
    description: "We build enduring relationships through strategic insight, dependable execution, and a shared commitment to long-term success.",
    icon: Globe2,
  },
];
