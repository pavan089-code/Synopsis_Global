"use client";

import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { useAuth } from "@/src/hooks/useAuth";
import { firebaseEnv, getMissingFirebaseEnv, requiredFirebaseEnv } from "@/src/lib/firebase/client";

export default function AdminSettingsPage() {
  const { user } = useAuth();
  const missing = getMissingFirebaseEnv();
  const configured = missing.length === 0;

  return (
    <AdminLayout title="Settings">
      <div className="grid gap-5">
        <section className={`border p-5 shadow-sm ${configured ? "border-emerald-200 bg-emerald-50" : "border-amber-200 bg-amber-50"}`}>
          <div className="flex items-start gap-3">
            {configured ? <CheckCircle2 className="size-6 text-emerald-600" aria-hidden="true" /> : <AlertTriangle className="size-6 text-amber-600" aria-hidden="true" />}
            <div>
              <h2 className="text-lg font-semibold text-[#16325B]">Environment Status</h2>
              <p className="mt-1 text-sm text-slate-700">
                {configured ? "All Firebase public environment variables are present." : `Missing Firebase variables: ${missing.join(", ")}`}
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-[#16325B]">Current Firebase Project</h2>
          <dl className="grid gap-3 text-sm sm:grid-cols-2">
            <div><dt className="font-bold text-slate-500">Project ID</dt><dd className="mt-1 text-slate-800">{firebaseEnv.projectId || "Not configured"}</dd></div>
            <div><dt className="font-bold text-slate-500">Auth Domain</dt><dd className="mt-1 text-slate-800">{firebaseEnv.authDomain || "Not configured"}</dd></div>
            <div><dt className="font-bold text-slate-500">Storage Bucket</dt><dd className="mt-1 text-slate-800">{firebaseEnv.storageBucket || "Not configured"}</dd></div>
            <div><dt className="font-bold text-slate-500">App ID</dt><dd className="mt-1 text-slate-800">{firebaseEnv.appId || "Not configured"}</dd></div>
            <div><dt className="font-bold text-slate-500">Measurement ID</dt><dd className="mt-1 text-slate-800">{firebaseEnv.measurementId || "Not configured"}</dd></div>
          </dl>
        </section>
        <section className="grid gap-4 border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-[#16325B]">Current Admin User</h2>
          <dl className="grid gap-3 text-sm sm:grid-cols-2">
            <div><dt className="font-bold text-slate-500">Email</dt><dd className="mt-1 text-slate-800">{user?.email ?? "Unavailable"}</dd></div>
            <div><dt className="font-bold text-slate-500">UID</dt><dd className="mt-1 break-all text-slate-800">{user?.uid ?? "Unavailable"}</dd></div>
          </dl>
        </section>
        <section className="grid gap-4 border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-[#16325B]">Required Variables</h2>
          <ul className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
            {requiredFirebaseEnv.map((key) => (
              <li key={key} className="flex items-center gap-2">
                {missing.includes(key) ? <AlertTriangle className="size-4 text-amber-600" aria-hidden="true" /> : <CheckCircle2 className="size-4 text-emerald-600" aria-hidden="true" />}
                <code>{key}</code>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </AdminLayout>
  );
}
