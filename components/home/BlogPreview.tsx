import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";

const blogPosts = [
  { title: "Building a Practical Digital Transformation Roadmap", slug: "digital-transformation-roadmap", excerpt: "How leaders can connect business priorities, technology investment, and measurable delivery outcomes.", category: "Transformation Insights", readTime: "6 min read" },
  { title: "Creating Resilient Technology Operations", slug: "resilient-technology-operations", excerpt: "Key considerations for strengthening service reliability, governance, and continuous improvement.", category: "Managed Services", readTime: "5 min read" },
  { title: "The Talent Strategy Behind High-Performing Delivery", slug: "talent-strategy-delivery", excerpt: "Why the right blend of specialist capability, collaboration, and leadership makes the difference.", category: "Talent Solutions", readTime: "4 min read" },
];

export function BlogPreview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Insights"
              title="Ideas for technology, transformation, and growth"
              description="Practical perspectives for leaders navigating change, strengthening capability, and building long-term business value."
            />
          </Reveal>
          <Reveal>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#16325B] transition hover:text-[#B08D57]">
              View Insights
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.06}>
              <article className="h-full border border-[#D9D6CF] bg-[#F7F5F2] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-[#16325B]/8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B08D57]">{post.category}</p>
                <h3 className="mt-4 text-xl font-semibold text-[#16325B]">{post.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#6B7280]">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between border-t border-[#D9D6CF] pt-4 text-sm">
                  <span className="text-[#6B7280]">{post.readTime}</span>
                  <Link href="/blog" className="font-semibold text-[#16325B] transition hover:text-[#B08D57]">
                    Read Insight
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
