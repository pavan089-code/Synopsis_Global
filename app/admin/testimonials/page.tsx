"use client";

import { Edit3, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { DataTable, type DataTableColumn } from "@/components/admin/DataTable";
import { ErrorMessage } from "@/components/admin/ErrorMessage";
import { ImageCmsForm } from "@/components/admin/ImageCmsForm";
import { LoadingSpinner } from "@/components/admin/LoadingSpinner";
import { createTestimonial, deleteTestimonial, subscribeToTestimonials, updateTestimonial } from "@/src/lib/firebase/firestore";
import type { Testimonial, TestimonialInput } from "@/src/types/testimonial";

export default function AdminTestimonialsPage() {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [editing, setEditing] = useState<Testimonial | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    return subscribeToTestimonials(
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

  async function save(input: TestimonialInput, id?: string) {
    if (id) await updateTestimonial(id, input);
    else await createTestimonial(input);
    setEditing(null);
  }

  const columns: DataTableColumn<Testimonial>[] = [
    { key: "name", header: "Name", cell: (item) => <span className="font-semibold text-[#16325B]">{item.name}</span> },
    { key: "designation", header: "Designation", cell: (item) => item.designation },
    { key: "country", header: "Country", cell: (item) => item.country },
    { key: "testimonial", header: "Testimonial", cell: (item) => <span className="line-clamp-2">{item.testimonial}</span> },
    {
      key: "actions",
      header: "Actions",
      cell: (item) => (
        <div className="flex gap-2">
          <button type="button" onClick={() => setEditing(item)} className="inline-flex size-9 items-center justify-center border border-slate-200 text-[#16325B]" aria-label={`Edit ${item.name}`}>
            <Edit3 className="size-4" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => deleteTestimonial(item.id)} className="inline-flex size-9 items-center justify-center border border-red-200 text-red-600" aria-label={`Delete ${item.name}`}>
            <Trash2 className="size-4" aria-hidden="true" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <AdminLayout title="Testimonials">
      <div className="grid gap-5 xl:grid-cols-[420px_1fr]">
        <ImageCmsForm key={editing?.id ?? "new"} mode="testimonials" item={editing} onSave={(input, id) => save(input as TestimonialInput, id)} onSaved={() => setEditing(null)} />
        <div className="grid content-start gap-4">
          {error ? <ErrorMessage message={error} /> : null}
          {loading ? <LoadingSpinner label="Loading testimonials" /> : <DataTable columns={columns} items={items} emptyText="No testimonials yet." />}
        </div>
      </div>
    </AdminLayout>
  );
}
