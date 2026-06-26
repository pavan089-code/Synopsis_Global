import type { LucideIcon } from "lucide-react";
import { Award, BookOpenCheck, FileCheck2, GraduationCap, Landmark, PlaneTakeoff, ScrollText, ShieldCheck, UserRoundCheck, WalletCards } from "lucide-react";

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
    title: "University Selection",
    slug: "university-selection",
    summary: "Shortlisting guidance across destinations, institutions, courses, intakes, budgets, and career goals.",
    overview:
      "Synopsis Global helps students compare destinations, universities, course structures, admission requirements, and future pathways before committing.",
    benefits: ["Profile-based shortlists", "Destination comparison", "Budget alignment", "Career-linked course choices"],
    features: ["Destination Mapping", "Course Fit", "Intake Planning", "Budget Review"],
    cta: "Plan Study Options",
    icon: GraduationCap,
  },
  {
    title: "Admissions",
    slug: "admissions",
    summary: "Application planning, document preparation, deadline tracking, and university communication support.",
    overview:
      "Our admissions support helps students prepare complete, compelling applications while staying ahead of intake deadlines.",
    benefits: ["Application readiness", "Clear timelines", "Document checks", "Offer follow-up"],
    features: ["Application Forms", "Document Review", "Deadline Tracking", "Offer Guidance"],
    cta: "Prepare Applications",
    icon: BookOpenCheck,
  },
  {
    title: "SOP and LOR",
    slug: "sop-lor",
    summary: "Editorial guidance for statements of purpose, recommendation letters, and academic narratives.",
    overview:
      "We help students shape authentic, structured application documents that reflect their goals, achievements, and destination fit.",
    benefits: ["Sharper academic story", "Program alignment", "Professional editing", "Stronger documentation"],
    features: ["SOP Review", "LOR Guidance", "Resume Support", "Application Essays"],
    cta: "Strengthen Documents",
    icon: ScrollText,
  },
  {
    title: "Scholarships",
    slug: "scholarships",
    summary: "Scholarship discovery, eligibility guidance, and funding strategy for international students.",
    overview:
      "Our counsellors help students identify suitable scholarships and prepare stronger financial planning before submission.",
    benefits: ["Funding route clarity", "Eligibility matching", "Deadline planning", "Application preparation"],
    features: ["Scholarship Search", "Eligibility Review", "Funding Documents", "Timeline Planning"],
    cta: "Explore Scholarships",
    icon: Award,
  },
  {
    title: "Career Counselling",
    slug: "career-counselling",
    summary: "Personalized education planning based on long-term career outcomes and destination realities.",
    overview:
      "We connect academic choices with practical outcomes so students understand how each program supports their future.",
    benefits: ["Goal clarity", "Program direction", "Destination fit", "Long-term planning"],
    features: ["Profile Evaluation", "Career Mapping", "Program Advice", "Intake Strategy"],
    cta: "Book Counselling",
    icon: UserRoundCheck,
  },
  {
    title: "Student Visa",
    slug: "student-visa",
    summary: "Country-specific student visa guidance with careful document and financial readiness checks.",
    overview:
      "We guide students through visa requirements, document assembly, financial evidence, and interview preparation where required.",
    benefits: ["Document clarity", "Financial readiness", "Country-specific review", "Reduced avoidable delays"],
    features: ["Visa Checklist", "Financial Documents", "Genuine Intent Support", "Submission Guidance"],
    cta: "Review Student Visa",
    icon: PlaneTakeoff,
  },
  {
    title: "Visitor Visa",
    slug: "visitor-visa",
    summary: "Visitor visa guidance for family visits, campus travel, graduation travel, and short stays.",
    overview:
      "We help applicants understand eligibility, travel purpose documentation, sponsorship records, and itinerary evidence.",
    benefits: ["Purpose clarity", "Evidence review", "Application support", "Travel planning"],
    features: ["Document Checklist", "Invitation Support", "Travel Evidence", "Application Review"],
    cta: "Plan Visitor Visa",
    icon: FileCheck2,
  },
  {
    title: "Work Visa",
    slug: "work-visa",
    summary: "Guidance for professionals assessing work visa requirements, eligibility, and documentation.",
    overview:
      "We help professionals understand destination-specific requirements, supporting evidence, and immigration timelines.",
    benefits: ["Eligibility clarity", "Document preparation", "Route comparison", "Application readiness"],
    features: ["Eligibility Review", "Document Guidance", "Route Planning", "Timeline Support"],
    cta: "Review Work Visa",
    icon: WalletCards,
  },
  {
    title: "Permanent Residency",
    slug: "permanent-residency",
    summary: "PR pathway guidance for eligible applicants considering long-term settlement abroad.",
    overview:
      "We support applicants with route assessment, document planning, profile strengthening, and settlement-oriented next steps.",
    benefits: ["Long-term route clarity", "Profile assessment", "Document planning", "Milestone tracking"],
    features: ["PR Assessment", "Profile Review", "Document Planning", "Settlement Guidance"],
    cta: "Assess PR Options",
    icon: Landmark,
  },
  {
    title: "Documentation",
    slug: "documentation",
    summary: "Detailed review of academic, financial, identity, professional, and supporting documents.",
    overview:
      "Our process helps applicants prepare complete and consistent files before admissions or visa submission.",
    benefits: ["Cleaner files", "Fewer gaps", "Better consistency", "Submission confidence"],
    features: ["File Review", "Checklist Planning", "Evidence Mapping", "Gap Identification"],
    cta: "Check Documents",
    icon: ShieldCheck,
  },
  {
    title: "Interview Preparation",
    slug: "interview-preparation",
    summary: "Coaching for visa interviews, university conversations, and confidence-building preparation.",
    overview:
      "We help students and applicants practice clear, honest answers that match their profile and documentation.",
    benefits: ["Stronger confidence", "Clearer answers", "Profile consistency", "Practical rehearsal"],
    features: ["Mock Interviews", "Question Practice", "Profile Review", "Response Coaching"],
    cta: "Prepare Interview",
    icon: UserRoundCheck,
  },
];
