"use client";

import { useState } from "react";
import { ErrorMessage } from "@/components/admin/ErrorMessage";
import { createBlogPost, updateBlogPost } from "@/src/lib/firebase/firestore";
import { uploadCmsImage } from "@/src/lib/firebase/storage";
import type { BlogPost, BlogPostInput } from "@/src/types/blog";

const blankPost: BlogPostInput = { title: "", slug: "", excerpt: "", content: "", image: "", published: false };

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function BlogEditor({ post, onSaved }: { post?: BlogPost | null; onSaved?: () => void }) {
  const [form, setForm] = useState<BlogPostInput>(
    post ? { title: post.title, slug: post.slug, excerpt: post.excerpt, content: post.content, image: post.image, published: post.published } : blankPost,
  );
  const [upload, setUpload] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function updateField<K extends keyof BlogPostInput>(key: K, value: BlogPostInput[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleTitle(value: string) {
    setForm((current) => ({ ...current, title: value, slug: current.slug ? current.slug : slugify(value) }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const image = upload ? await uploadCmsImage(upload, "blog") : form.image;
      const payload = { ...form, slug: form.slug || slugify(form.title), image };
      if (post) {
        await updateBlogPost(post.id, payload);
      } else {
        await createBlogPost(payload);
      }
      setForm(blankPost);
      setUpload(null);
      onSaved?.();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Unable to save blog post.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 border border-slate-200 bg-white p-5 shadow-sm">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C9A227]">{post ? "Edit Blog" : "Create Blog"}</p>
        <h2 className="mt-1 text-xl font-semibold text-[#082B6A]">{post ? post.title : "New blog post"}</h2>
      </div>
      {error ? <ErrorMessage message={error} /> : null}
      <div className="grid gap-4 md:grid-cols-2">
        <input required placeholder="Title" value={form.title} onChange={(event) => handleTitle(event.target.value)} className="min-h-11 border border-slate-300 px-3" />
        <input required placeholder="Slug" value={form.slug} onChange={(event) => updateField("slug", slugify(event.target.value))} className="min-h-11 border border-slate-300 px-3" />
      </div>
      <textarea required rows={2} placeholder="Excerpt" value={form.excerpt} onChange={(event) => updateField("excerpt", event.target.value)} className="border border-slate-300 px-3 py-2" />
      <textarea required rows={7} placeholder="Content" value={form.content} onChange={(event) => updateField("content", event.target.value)} className="border border-slate-300 px-3 py-2" />
      <div className="grid gap-4 md:grid-cols-[1fr_auto]">
        <input placeholder="Existing image URL" value={form.image} onChange={(event) => updateField("image", event.target.value)} className="min-h-11 border border-slate-300 px-3" />
        <input type="file" accept="image/*" onChange={(event) => setUpload(event.target.files?.[0] ?? null)} className="min-h-11 border border-slate-300 px-3 py-2" />
      </div>
      <label className="flex items-center gap-3 text-sm font-semibold text-slate-700">
        <input type="checkbox" checked={form.published} onChange={(event) => updateField("published", event.target.checked)} className="size-4 accent-[#082B6A]" />
        Published
      </label>
      <button type="submit" disabled={loading} className="min-h-11 bg-[#082B6A] px-5 text-sm font-bold uppercase tracking-[0.08em] text-white disabled:opacity-60">
        {loading ? "Saving..." : post ? "Update Blog" : "Create Blog"}
      </button>
    </form>
  );
}
