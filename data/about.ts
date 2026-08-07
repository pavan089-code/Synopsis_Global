import type { LucideIcon } from "lucide-react";
import { Award, Lightbulb, ShieldCheck, Sparkles, UserCheck } from "lucide-react";

export type CoreValue = {
  title: string;
  body: string;
  icon: LucideIcon;
};

export const companyStory = [
  "Synopsis Global is a technology and business consulting partner helping organizations transform operations, strengthen capability, and create sustainable value. We bring together technology consulting, talent solutions, enterprise services, and business advisory to turn complex priorities into practical progress.",
  "Our journey has been shaped by a simple belief: meaningful innovation succeeds when it is connected to real business needs. Through strategic thinking, disciplined delivery, and long-term partnerships, we help leadership teams modernize with confidence and build resilience for what comes next.",
];

export const mission =
  "To help organizations achieve meaningful, measurable progress through technology, talent, and strategic consulting that puts business outcomes first.";

export const vision =
  "To be a forward-thinking global technology partner, enabling businesses to embrace digital transformation, sustainable growth, and lasting competitive advantage.";

export const coreValues: CoreValue[] = [
  { title: "Integrity", body: "We earn trust through transparent advice, honest communication, and decisions that serve the long-term interests of our clients.", icon: ShieldCheck },
  { title: "Innovation", body: "We explore better ways of working and apply technology with purpose, always focused on meaningful business value.", icon: Lightbulb },
  { title: "Client Success", body: "We define success by the outcomes our clients achieve, not simply by the work we complete together.", icon: Award },
  { title: "Collaboration", body: "We bring diverse expertise together, working openly with clients and partners to solve important challenges.", icon: UserCheck },
  { title: "Excellence & Accountability", body: "We set high standards, take ownership of delivery, and continuously improve every engagement.", icon: Sparkles },
];
