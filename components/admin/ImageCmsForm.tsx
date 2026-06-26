"use client";

import { useState } from "react";
import { ErrorMessage } from "@/components/admin/ErrorMessage";
import type { Country, CountryInput } from "@/src/types/country";
import type { Testimonial, TestimonialInput } from "@/src/types/testimonial";
import { uploadCmsImage } from "@/src/lib/firebase/storage";

type Mode = "testimonials" | "countries";
type CmsItem = Testimonial | Country;
type CmsInput = TestimonialInput | CountryInput;

const testimonialBlank: TestimonialInput = { name: "", designation: "", country: "", testimonial: "", image: "" };
const countryBlank: CountryInput = { name: "", description: "", opportunities: "", image: "" };

export function ImageCmsForm<T extends CmsItem>({
  mode,
  item,
  onSave,
  onSaved,
}: {
  mode: Mode;
  item?: T | null;
  onSave: (input: CmsInput, id?: string) => Promise<void>;
  onSaved?: () => void;
}) {
  const [form, setForm] = useState<CmsInput>(() => {
    if (item && mode === "testimonials" && "testimonial" in item) {
      return { name: item.name, designation: item.designation, country: item.country, testimonial: item.testimonial, image: item.image };
    }
    if (item && mode === "countries" && "opportunities" in item) {
      return { name: item.name, description: item.description, opportunities: item.opportunities, image: item.image };
    }
    return mode === "testimonials" ? testimonialBlank : countryBlank;
  });
  const [upload, setUpload] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function updateField(key: string, value: string) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const image = upload ? await uploadCmsImage(upload, mode) : form.image;
      await onSave({ ...form, image }, item?.id);
      setForm(mode === "testimonials" ? testimonialBlank : countryBlank);
      setUpload(null);
      onSaved?.();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Unable to save item.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold text-[#16325B]">{item ? "Edit" : "Create"} {mode === "testimonials" ? "Testimonial" : "Country"}</h2>
      {error ? <ErrorMessage message={error} /> : null}
      <input required placeholder={mode === "countries" ? "Country Name" : "Name"} value={form.name} onChange={(event) => updateField("name", event.target.value)} className="min-h-11 border border-slate-300 px-3" />
      {mode === "testimonials" ? (
        <>
          <input required placeholder="Designation" value={"designation" in form ? form.designation : ""} onChange={(event) => updateField("designation", event.target.value)} className="min-h-11 border border-slate-300 px-3" />
          <input required placeholder="Country" value={"country" in form ? form.country : ""} onChange={(event) => updateField("country", event.target.value)} className="min-h-11 border border-slate-300 px-3" />
          <textarea required rows={4} placeholder="Testimonial" value={"testimonial" in form ? form.testimonial : ""} onChange={(event) => updateField("testimonial", event.target.value)} className="border border-slate-300 px-3 py-2" />
        </>
      ) : (
        <>
          <textarea required rows={4} placeholder="Description" value={"description" in form ? form.description : ""} onChange={(event) => updateField("description", event.target.value)} className="border border-slate-300 px-3 py-2" />
          <textarea required rows={4} placeholder="Opportunities" value={"opportunities" in form ? form.opportunities : ""} onChange={(event) => updateField("opportunities", event.target.value)} className="border border-slate-300 px-3 py-2" />
        </>
      )}
      <div className="grid gap-4 md:grid-cols-[1fr_auto]">
        <input placeholder="Existing image URL" value={form.image} onChange={(event) => updateField("image", event.target.value)} className="min-h-11 border border-slate-300 px-3" />
        <input type="file" accept="image/*" onChange={(event) => setUpload(event.target.files?.[0] ?? null)} className="min-h-11 border border-slate-300 px-3 py-2" />
      </div>
      <button type="submit" disabled={loading} className="min-h-11 bg-[#16325B] px-5 text-sm font-bold uppercase tracking-[0.08em] text-white disabled:opacity-60">
        {loading ? "Saving..." : "Save"}
      </button>
    </form>
  );
}
