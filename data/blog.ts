export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "How to Plan Your Study Abroad Journey",
    slug: "study-abroad-planning-guide",
    excerpt:
      "A practical guide to choosing destinations, comparing universities, preparing applications, and planning finances with confidence.",
    category: "Study Abroad Guides",
    readTime: "6 min read",
  },
  {
    title: "Study in Australia 2026",
    slug: "study-in-australia-2026",
    excerpt:
      "Key considerations for course selection, university admissions, scholarship planning, and post-study opportunities in Australia.",
    category: "Education",
    readTime: "5 min read",
  },
  {
    title: "Student Visa Documentation Checklist",
    slug: "student-visa-documentation-checklist",
    excerpt:
      "Understand the common academic, financial, identity, and intent documents students should prepare before visa submission.",
    category: "Visa Updates",
    readTime: "4 min read",
  },
  {
    title: "Scholarship Planning for International Students",
    slug: "scholarship-planning-international-students",
    excerpt:
      "Learn how to identify scholarship opportunities, prepare stronger applications, and align funding options with admissions timelines.",
    category: "Scholarship Articles",
    readTime: "7 min read",
  },
];
