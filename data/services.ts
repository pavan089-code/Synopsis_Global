import type { LucideIcon } from "lucide-react";
import { BriefcaseBusiness, GraduationCap, Landmark, UsersRound } from "lucide-react";

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
    title: "Workforce Solutions",
    slug: "workforce-solutions",
    summary: "Scalable workforce programs for companies building dependable, compliant teams.",
    overview:
      "Synopsis Global partners with organisations to structure workforce operations, improve HR delivery, and support compliant people management across growing teams.",
    benefits: ["Lower operational complexity", "Reliable workforce planning", "Compliance-focused execution", "Flexible support for scale"],
    features: ["Workforce Management", "HR Outsourcing", "Payroll Services", "Compliance Management"],
    cta: "Plan Workforce Support",
    icon: UsersRound,
  },
  {
    title: "Recruitment & Staffing",
    slug: "recruitment-staffing",
    summary: "International hiring support for employers and professionals pursuing trusted opportunities.",
    overview:
      "We help organisations identify capable talent and guide candidates through structured, transparent recruitment pathways tailored to role, market, and readiness.",
    benefits: ["Qualified candidate pipelines", "Faster shortlisting cycles", "Role-specific screening", "Support from selection to onboarding"],
    features: ["Permanent Staffing", "Contract Staffing", "Bulk Hiring", "IT Recruitment", "Non-IT Recruitment"],
    cta: "Discuss Hiring Needs",
    icon: BriefcaseBusiness,
  },
  {
    title: "Education Services",
    slug: "education-services",
    summary: "Personalised study abroad guidance for admissions, visas, and long-term career planning.",
    overview:
      "Our education advisors support students from profile evaluation through university selection, application preparation, documentation, and visa coordination.",
    benefits: ["Clear destination planning", "Better course and university fit", "Stronger admission documentation", "Career-aligned study decisions"],
    features: ["Study Abroad Consulting", "University Selection", "Admission Assistance", "Visa Assistance", "Career Counseling"],
    cta: "Start Study Abroad Planning",
    icon: GraduationCap,
  },
  {
    title: "Immigration Services",
    slug: "immigration-services",
    summary: "Professional visa and documentation guidance for work, study, and permanent residency goals.",
    overview:
      "We simplify complex immigration requirements with careful eligibility reviews, country-specific documentation guidance, and practical process tracking.",
    benefits: ["Country-specific route clarity", "Document readiness checks", "Reduced avoidable delays", "Guidance for long-term settlement goals"],
    features: ["Student Visa", "Work Visa", "PR Consultation", "Documentation Support", "Immigration Guidance"],
    cta: "Review Immigration Options",
    icon: Landmark,
  },
];
