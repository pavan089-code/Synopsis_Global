"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { ConsultationForm } from "@/components/common/ConsultationForm";

export const inquiryEventName = "synopsis:open-inquiry";

export function openInquiryModal(service?: string) {
  window.dispatchEvent(new CustomEvent(inquiryEventName, { detail: { service } }));
}

export function InquiryModal() {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState("");

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
        <ConsultationForm initialService={service} onSuccess={() => setOpen(false)} />
      </div>
    </div>
  );
}
