"use client";

import { ShieldCheck } from "lucide-react";
import { useAuth } from "@/src/hooks/useAuth";

export function Topbar({ title }: { title?: string }) {
  const { user } = useAuth();

  return (
    <header className="flex min-h-16 flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-white px-5">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A227]">Admin Panel</p>
        <h1 className="text-xl font-semibold text-[#082B6A]">{title ?? "Synopsis Global"}</h1>
      </div>
      <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
        <ShieldCheck className="size-5 text-[#C9A227]" aria-hidden="true" />
        {user?.email ?? "Authenticated admin"}
      </div>
    </header>
  );
}
