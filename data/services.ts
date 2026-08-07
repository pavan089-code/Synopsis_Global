import type { LucideIcon } from "lucide-react";
import { Award, BookOpenCheck, GraduationCap, ScrollText, UserRoundCheck } from "lucide-react";

export type Service = {
  title: string;
  slug: string;
  summary: string;
  overview: string;
  benefits: string[];
  features: string[];
  cta: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Technology Consulting",
    slug: "technology-consulting",
    summary: "Strategic technology guidance that aligns investment decisions with business priorities, operational needs, and long-term growth.",
    overview:
      "Synopsis Global assesses your current technology landscape, clarifies the opportunities that matter most, and creates a practical path from strategy to execution. Our advisory brings business leaders and technology teams into one clear, confident decision-making process.",
    benefits: ["Clearer investment priorities", "Reduced technology risk", "Stronger business and IT alignment", "Actionable growth roadmap"],
    features: ["Technology Strategy", "Digital Roadmap", "IT Assessment", "Enterprise Consulting", "Business Process Optimization", "Digital Advisory"],
    cta: "Discuss Your Technology Strategy",
    icon: GraduationCap,
  },
  {
    title: "Digital Transformation",
    slug: "digital-transformation",
    summary: "Business-led transformation programs that make operations more connected, responsive, and ready for sustainable change.",
    overview:
      "We help organizations move beyond isolated digital initiatives by modernizing legacy processes, enabling adoption, and improving how work gets done. Every engagement is shaped around measurable business outcomes and a change path people can embrace.",
    benefits: ["More efficient operations", "Improved customer and employee experiences", "Greater organizational agility", "Sustained adoption of change"],
    features: ["Business Transformation", "Legacy Modernization", "Process Automation", "Digital Enablement", "Operational Excellence", "Cloud Adoption Strategy"],
    cta: "Plan Your Transformation",
    icon: BookOpenCheck,
  },
  {
    title: "Talent Solutions",
    slug: "talent-solutions",
    summary: "Flexible, quality-focused talent solutions that give organizations the specialist capability and capacity to deliver with confidence.",
    overview:
      "Synopsis Global connects employers with professionals who match both the technical brief and the culture of the business. From a critical hire to a fully dedicated delivery team, we make talent acquisition more focused, scalable, and accountable.",
    benefits: ["Faster access to qualified talent", "Flexible workforce capacity", "Reduced hiring complexity", "Teams aligned to delivery goals"],
    features: ["IT Staffing", "Contract Staffing", "Permanent Recruitment", "Executive Search", "Dedicated Development Teams", "Resource Augmentation", "Global Talent Acquisition"],
    cta: "Build Your Team",
    icon: ScrollText,
  },
  {
    title: "Managed Services",
    slug: "managed-services",
    summary: "Dependable managed technology services that keep essential systems supported, monitored, and prepared for business continuity.",
    overview:
      "Our managed services provide a steady operational foundation so internal teams can focus on strategic priorities. We combine responsive support, proactive oversight, and clear service accountability to protect performance across the technology environment.",
    benefits: ["More reliable daily operations", "Proactive issue management", "Predictable support coverage", "Improved business resilience"],
    features: ["Application Support", "Infrastructure Management", "Help Desk Support", "Remote Operations", "System Monitoring", "Managed IT Services", "Business Continuity"],
    cta: "Strengthen Your IT Operations",
    icon: Award,
  },
  {
    title: "Cloud & Infrastructure",
    slug: "cloud-infrastructure",
    summary: "Cloud and infrastructure solutions that improve performance, resilience, and the ability to scale without unnecessary complexity.",
    overview:
      "Whether you are moving workloads, improving a hybrid environment, or planning for future demand, Synopsis Global designs a secure and practical foundation. We balance technical fit, cost awareness, and operational impact to help infrastructure support the business—not slow it down.",
    benefits: ["Scalable technology foundation", "Better system performance", "Increased resilience and flexibility", "More informed cloud investment"],
    features: ["Cloud Migration", "Infrastructure Optimization", "Cloud Strategy", "Hybrid Cloud", "Performance Optimization", "Scalable Infrastructure"],
    cta: "Explore Cloud Readiness",
    icon: UserRoundCheck,
  },
  {
    title: "Business Advisory",
    slug: "business-advisory",
    summary: "Practical business advisory that turns ambitious goals into focused priorities, accountable plans, and stronger execution.",
    overview:
      "Synopsis Global works alongside leadership teams to examine opportunities, manage risk, and prepare for change with greater clarity. Our advice connects operational reality with commercial goals, helping organizations make confident decisions at every stage of growth.",
    benefits: ["Sharper strategic focus", "Stronger operational decisions", "Earlier visibility of risk", "Plans built for sustainable growth"],
    features: ["Business Consulting", "Operational Strategy", "Technology Adoption", "Risk Advisory", "Transformation Planning", "Growth Consulting"],
    cta: "Talk to a Business Advisor",
    icon: UserRoundCheck,
  },
];
