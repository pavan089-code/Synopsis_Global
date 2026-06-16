"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { services } from "@/data/services";

export const inquiryEventName = "synopsis:open-inquiry";

export function openInquiryModal(service?: string) {
  window.dispatchEvent(new CustomEvent(inquiryEventName, { detail: { service } }));
}

export function InquiryModal() {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState(services[0]?.title ?? "");

  useEffect(() => {
    function handleOpen(event: Event) {
      const detail = (event as CustomEvent<{ service?: string }>).detail;
      if (detail?.service) {
        setService(detail.service);
      }
      setOpen(true);
    }

    window.addEventListener(inquiryEventName, handleOpen);
    return () => window.removeEventListener(inquiryEventName, handleOpen);
  }, []);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[#041735]/70 px-4 py-8" role="dialog" aria-modal="true" aria-labelledby="inquiry-title">
      <div className="relative w-full max-w-2xl rounded-sm bg-white p-6 shadow-2xl">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-sm border border-slate-200 text-[#082B6A] transition hover:border-[#C9A227]"
          aria-label="Close inquiry form"
        >
          <X aria-hidden="true" className="size-5" />
        </button>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">Inquiry</p>
        <h2 id="inquiry-title" className="mt-3 pr-12 text-2xl font-semibold text-[#082B6A]">
          Speak with Synopsis Global
        </h2>
        <form
          className="mt-6 grid gap-4"
          onSubmit={(event) => {
            event.preventDefault();
            setOpen(false);
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-[#082B6A]">
              Name
              <input required type="text" className="min-h-12 rounded-sm border border-slate-300 px-4 text-slate-800 outline-none transition focus:border-[#C9A227]" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-[#082B6A]">
              Phone
              <input required type="tel" className="min-h-12 rounded-sm border border-slate-300 px-4 text-slate-800 outline-none transition focus:border-[#C9A227]" />
            </label>
          </div>
          <label className="grid gap-2 text-sm font-semibold text-[#082B6A]">
            Email
            <input required type="email" className="min-h-12 rounded-sm border border-slate-300 px-4 text-slate-800 outline-none transition focus:border-[#C9A227]" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-[#082B6A]">
            Service Interested In
            <select
              value={service}
              onChange={(event) => setService(event.target.value)}
              className="min-h-12 rounded-sm border border-slate-300 px-4 text-slate-800 outline-none transition focus:border-[#C9A227]"
            >
              {services.map((item) => (
                <option key={item.slug}>{item.title}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold text-[#082B6A]">
            Message
            <textarea rows={4} className="rounded-sm border border-slate-300 px-4 py-3 text-slate-800 outline-none transition focus:border-[#C9A227]" />
          </label>
          <button
            type="submit"
            className="min-h-12 rounded-sm bg-[#082B6A] px-5 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#061f4f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#082B6A]"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}
