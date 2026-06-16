"use client";

import { Sidebar } from "@/components/admin/Sidebar";
import { Topbar } from "@/components/admin/Topbar";
import { ProtectedRoute } from "@/components/admin/ProtectedRoute";

export function AdminLayout({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-slate-50 lg:flex">
        <Sidebar />
        <div className="min-w-0 flex-1">
          <Topbar title={title} />
          <main className="mx-auto w-full max-w-7xl px-5 py-6">{children}</main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
