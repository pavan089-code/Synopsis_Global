import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read practical guidance on study abroad planning, visas, scholarships, and immigration pathways.",
};

export default function BlogPage() {
  return (
    <div className="bg-white">
      <section className="bg-[#16325B] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#B08D57]">Blog</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-normal sm:text-5xl">Insights for study abroad, visas, and immigration planning</h1>
        </div>
      </section>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading title="Latest guidance" description="SEO-ready article structures prepared for destination guides, visa updates, scholarships, and study abroad planning." />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {blogPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.05}>
                <article className="h-full border border-slate-200 bg-white p-7 shadow-sm transition hover:border-[#B08D57] hover:shadow-lg">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B08D57]">{post.category}</p>
                  <h2 className="mt-4 text-2xl font-semibold text-[#16325B]">
                    <Link href={`/blog#${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{post.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between text-sm font-semibold text-slate-500">
                    <span>{post.readTime}</span>
                    <Link href={`/blog#${post.slug}`} className="inline-flex items-center gap-2 text-[#16325B]">
                      Read article <ArrowUpRight aria-hidden="true" className="size-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
