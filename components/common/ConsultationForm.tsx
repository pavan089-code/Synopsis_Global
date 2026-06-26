"use client";

import { useState } from "react";
import { services } from "@/data/services";
import { createConsultation } from "@/src/lib/firebase/firestore";
import type { CreateConsultationInput } from "@/src/types/consultation";

function blank(service = services[0]?.title ?? ""): CreateConsultationInput {
  return { name: "", email: "", phone: "", service, preferredDate: "", preferredTime: "", notes: "" };
}

export function ConsultationForm({ initialService, onSuccess }: { initialService?: string; onSuccess?: () => void }) {
  const [form, setForm] = useState<CreateConsultationInput>(blank(initialService));
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState<{ type: "success" | "error"; text: string } | null>(null);

  function updateField(key: keyof CreateConsultationInput, value: string) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setNotice(null);

    try {
      await createConsultation(form);
      setForm(blank(form.service));
      setNotice({ type: "success", text: "Consultation request submitted successfully." });
      onSuccess?.();
    } catch (caught) {
      setNotice({ type: "error", text: caught instanceof Error ? caught.message : "Unable to book the consultation." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
      {notice ? (
        <div className={`border px-4 py-3 text-sm font-semibold ${notice.type === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-red-200 bg-red-50 text-red-700"}`}>
          {notice.text}
        </div>
      ) : null}
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-[#16325B]">
          Name
          <input required type="text" value={form.name} onChange={(event) => updateField("name", event.target.value)} className="min-h-12 rounded-sm border border-slate-300 px-4 text-slate-800 outline-none transition focus:border-[#B08D57]" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-[#16325B]">
          Phone
          <input required type="tel" value={form.phone} onChange={(event) => updateField("phone", event.target.value)} className="min-h-12 rounded-sm border border-slate-300 px-4 text-slate-800 outline-none transition focus:border-[#B08D57]" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-[#16325B]">
        Email
        <input required type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} className="min-h-12 rounded-sm border border-slate-300 px-4 text-slate-800 outline-none transition focus:border-[#B08D57]" />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-[#16325B]">
        Service Interested In
        <select value={form.service} onChange={(event) => updateField("service", event.target.value)} className="min-h-12 rounded-sm border border-slate-300 px-4 text-slate-800 outline-none transition focus:border-[#B08D57]">
          {services.map((item) => (
            <option key={item.slug}>{item.title}</option>
          ))}
        </select>
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-[#16325B]">
          Preferred Date
          <input required type="date" value={form.preferredDate} onChange={(event) => updateField("preferredDate", event.target.value)} className="min-h-12 rounded-sm border border-slate-300 px-4 text-slate-800 outline-none transition focus:border-[#B08D57]" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-[#16325B]">
          Preferred Time
          <input required type="time" value={form.preferredTime} onChange={(event) => updateField("preferredTime", event.target.value)} className="min-h-12 rounded-sm border border-slate-300 px-4 text-slate-800 outline-none transition focus:border-[#B08D57]" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-[#16325B]">
        Notes
        <textarea rows={4} value={form.notes} onChange={(event) => updateField("notes", event.target.value)} className="rounded-sm border border-slate-300 px-4 py-3 text-slate-800 outline-none transition focus:border-[#B08D57]" />
      </label>
      <button type="submit" disabled={loading} className="min-h-12 rounded-sm bg-[#16325B] px-5 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#244A73] disabled:opacity-60">
        {loading ? "Submitting..." : "Submit Consultation"}
      </button>
    </form>
  );
}
