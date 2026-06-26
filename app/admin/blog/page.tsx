"use client";

import { Edit3, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { BlogEditor } from "@/components/admin/BlogEditor";
import { DataTable, type DataTableColumn } from "@/components/admin/DataTable";
import { ErrorMessage } from "@/components/admin/ErrorMessage";
import { LoadingSpinner } from "@/components/admin/LoadingSpinner";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { deleteBlogPost, subscribeToBlogPosts, updateBlogPost } from "@/src/lib/firebase/firestore";
import type { BlogPost } from "@/src/types/blog";

export default function AdminBlogPage() {
  const [items, setItems] = useState<BlogPost[]>([]);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    return subscribeToBlogPosts(
      (nextItems) => {
        setItems(nextItems);
        setLoading(false);
      },
      (caught) => {
        setError(caught.message);
        setLoading(false);
      },
    );
  }, []);

  const columns: DataTableColumn<BlogPost>[] = [
    { key: "title", header: "Title", cell: (item) => <span className="font-semibold text-[#16325B]">{item.title}</span> },
    { key: "slug", header: "Slug", cell: (item) => item.slug },
    { key: "status", header: "Status", cell: (item) => <StatusBadge status={item.published ? "Published" : "Draft"} /> },
    { key: "updated", header: "Updated", cell: (item) => item.updatedAt?.toLocaleDateString() ?? "-" },
    {
      key: "actions",
      header: "Actions",
      cell: (item) => (
        <div className="flex gap-2">
          <button type="button" onClick={() => updateBlogPost(item.id, { title: item.title, slug: item.slug, excerpt: item.excerpt, content: item.content, image: item.image, published: !item.published })} className="border border-slate-300 px-3 text-xs font-bold uppercase tracking-[0.08em] text-[#16325B]">
            {item.published ? "Unpublish" : "Publish"}
          </button>
          <button type="button" onClick={() => setEditing(item)} className="inline-flex size-9 items-center justify-center border border-slate-200 text-[#16325B]" aria-label={`Edit ${item.title}`}>
            <Edit3 className="size-4" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => deleteBlogPost(item.id)} className="inline-flex size-9 items-center justify-center border border-red-200 text-red-600" aria-label={`Delete ${item.title}`}>
            <Trash2 className="size-4" aria-hidden="true" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <AdminLayout title="Blog CMS">
      <div className="grid gap-5 xl:grid-cols-[420px_1fr]">
        <BlogEditor key={editing?.id ?? "new"} post={editing} onSaved={() => setEditing(null)} />
        <div className="grid content-start gap-4">
          {error ? <ErrorMessage message={error} /> : null}
          {loading ? <LoadingSpinner label="Loading blog posts" /> : <DataTable columns={columns} items={items} emptyText="No blog posts yet." />}
        </div>
      </div>
    </AdminLayout>
  );
}
