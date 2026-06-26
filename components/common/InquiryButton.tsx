"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { openInquiryModal } from "@/components/common/InquiryModal";

type InquiryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  service?: string;
  variant?: "primary" | "secondary" | "outline";
};

export function InquiryButton({ children, service, variant = "primary", className = "", ...props }: InquiryButtonProps) {
  const variants = {
    primary: "bg-[#B08D57] text-white shadow-sm shadow-[#16325B]/10 hover:-translate-y-0.5 hover:bg-[#967744] focus-visible:outline-[#B08D57]",
    secondary: "bg-[#16325B] text-white hover:-translate-y-0.5 hover:bg-[#244A73] focus-visible:outline-[#16325B]",
    outline: "border border-white/25 bg-transparent text-white backdrop-blur-sm hover:-translate-y-0.5 hover:bg-white/12 hover:shadow-sm focus-visible:outline-white",
  };

  return (
    <button
      type="button"
      onClick={() => openInquiryModal(service)}
      className={`inline-flex min-h-11 items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
