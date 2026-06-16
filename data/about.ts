import type { LucideIcon } from "lucide-react";
import { Award, Lightbulb, ShieldCheck, Sparkles, UserCheck } from "lucide-react";

export type CoreValue = {
  title: string;
  body: string;
  icon: LucideIcon;
};

export const companyStory = [
  "Synopsis Global supports professionals, students, employers, and families as they navigate recruitment, education, immigration, and workforce planning across borders.",
  "Our approach is corporate, careful, and relationship-led. We help clients understand requirements, prepare credible documentation, and move forward with confidence.",
];

export const mission =
  "To connect people and organisations with reliable global pathways through ethical advisory, market insight, and consistent operational support.";

export const vision =
  "To be recognised as a premium international consultancy known for trust, quality partnerships, and outcomes that stand the test of time.";

export const coreValues: CoreValue[] = [
  { title: "Integrity", body: "We set clear expectations and guide clients through responsible, transparent advisory practices.", icon: ShieldCheck },
  { title: "Excellence", body: "We bring discipline, detail, and quality control to applications, hiring, and documentation.", icon: Award },
  { title: "Innovation", body: "We use structured processes and market insight to improve how global opportunities are planned.", icon: Lightbulb },
  { title: "Commitment", body: "We stay close to clients through each stage of their career, education, hiring, or visa journey.", icon: UserCheck },
  { title: "Professionalism", body: "We operate with corporate standards, timely communication, and respect for every stakeholder.", icon: Sparkles },
];
