export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "How to Get a Work Visa in Canada",
    slug: "work-visa-canada",
    excerpt:
      "A practical overview of employer requirements, documentation, timelines, and preparation steps for skilled professionals exploring Canada.",
    category: "Immigration",
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
    title: "Top Healthcare Jobs Abroad",
    slug: "top-healthcare-jobs-abroad",
    excerpt:
      "Explore international demand for nurses, care professionals, allied health workers, and medical support roles across major destinations.",
    category: "Recruitment",
    readTime: "4 min read",
  },
  {
    title: "UK Sponsorship Jobs Guide",
    slug: "uk-sponsorship-jobs-guide",
    excerpt:
      "Understand sponsored employment basics, compliance expectations, candidate readiness, and how to approach UK employers professionally.",
    category: "Workforce",
    readTime: "7 min read",
  },
];
