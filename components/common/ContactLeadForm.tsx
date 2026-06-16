"use client";

import { useState } from "react";
import { services } from "@/data/services";
import { createContactLead } from "@/src/lib/firebase/firestore";
import type { CreateContactLeadInput } from "@/src/types/lead";

const initialState: CreateContactLeadInput = {
  name: "",
  email: "",
  phone: "",
  service: services[0]?.title ?? "",
  message: "",
};

export function ContactLeadForm() {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState<{ type: "success" | "error"; text: string } | null>(null);

  function updateField(key: keyof CreateContactLeadInput, value: string) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setNotice(null);

    try {
      await createContactLead(form);
      setForm(initialState);
      setNotice({ type: "success", text: "Thank you. Your enquiry has been submitted successfully." });
    } catch (caught) {
      setNotice({ type: "error", text: caught instanceof Error ? caught.message : "Unable to submit your enquiry right now." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="grid gap-5 rounded-sm border border-slate-200 bg-white p-6 shadow-sm" aria-label="Contact form" onSubmit={handleSubmit}>
      {notice ? (
        <div className={`border px-4 py-3 text-sm font-semibold ${notice.type === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-red-200 bg-red-50 text-red-700"}`}>
          {notice.text}
        </div>
      ) : null}
      {[
        { label: "Name", type: "text", key: "name" },
        { label: "Email", type: "email", key: "email" },
        { label: "Phone", type: "tel", key: "phone" },
      ].map((field) => (
        <label key={field.label} className="grid gap-2 text-sm font-semibold text-[#082B6A]">
          {field.label}
          <input
            required
            type={field.type}
            value={form[field.key as keyof CreateContactLeadInput]}
            onChange={(event) => updateField(field.key as keyof CreateContactLeadInput, event.target.value)}
            className="min-h-12 rounded-sm border border-slate-300 px-4 text-slate-800 outline-none transition focus:border-[#C9A227]"
          />
        </label>
      ))}
      <label className="grid gap-2 text-sm font-semibold text-[#082B6A]">
        Service Interested In
        <select value={form.service} onChange={(event) => updateField("service", event.target.value)} className="min-h-12 rounded-sm border border-slate-300 px-4 text-slate-800 outline-none transition focus:border-[#C9A227]">
          {services.map((service) => (
            <option key={service.slug}>{service.title}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-[#082B6A]">
        Message
        <textarea required rows={5} value={form.message} onChange={(event) => updateField("message", event.target.value)} className="rounded-sm border border-slate-300 px-4 py-3 text-slate-800 outline-none transition focus:border-[#C9A227]" />
      </label>
      <button
        type="submit"
        disabled={loading}
        className="min-h-12 rounded-sm bg-[#082B6A] px-5 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#061f4f] disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#082B6A]"
      >
        {loading ? "Submitting..." : "Submit Enquiry"}
      </button>
    </form>
  );
}
