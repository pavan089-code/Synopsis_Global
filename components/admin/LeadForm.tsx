"use client";

import { useState } from "react";
import { ErrorMessage } from "@/components/admin/ErrorMessage";
import { createContactLead } from "@/src/lib/firebase/firestore";
import type { CreateContactLeadInput } from "@/src/types/lead";

const initialState: CreateContactLeadInput = { name: "", email: "", phone: "", service: "", message: "" };

export function LeadForm({ onSaved }: { onSaved?: () => void }) {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      await createContactLead(form);
      setForm(initialState);
      onSaved?.();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Unable to save lead.");
    } finally {
      setLoading(false);
    }
  }

  function updateField(key: keyof CreateContactLeadInput, value: string) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 border border-slate-200 bg-white p-5 shadow-sm">
      {error ? <ErrorMessage message={error} /> : null}
      <div className="grid gap-4 md:grid-cols-2">
        <input required placeholder="Name" value={form.name} onChange={(event) => updateField("name", event.target.value)} className="min-h-11 border border-slate-300 px-3" />
        <input required type="email" placeholder="Email" value={form.email} onChange={(event) => updateField("email", event.target.value)} className="min-h-11 border border-slate-300 px-3" />
        <input required placeholder="Phone" value={form.phone} onChange={(event) => updateField("phone", event.target.value)} className="min-h-11 border border-slate-300 px-3" />
        <input required placeholder="Service" value={form.service} onChange={(event) => updateField("service", event.target.value)} className="min-h-11 border border-slate-300 px-3" />
      </div>
      <textarea required rows={4} placeholder="Message" value={form.message} onChange={(event) => updateField("message", event.target.value)} className="border border-slate-300 px-3 py-2" />
      <button type="submit" disabled={loading} className="min-h-11 bg-[#082B6A] px-5 text-sm font-bold uppercase tracking-[0.08em] text-white disabled:opacity-60">
        {loading ? "Saving..." : "Create Lead"}
      </button>
    </form>
  );
}
