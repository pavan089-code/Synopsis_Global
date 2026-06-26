"use client";

import { useEffect, useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { DashboardCards } from "@/components/admin/DashboardCards";
import { ErrorMessage } from "@/components/admin/ErrorMessage";
import { LoadingSpinner } from "@/components/admin/LoadingSpinner";
import {
  subscribeToBlogPosts,
  subscribeToConsultations,
  subscribeToCountries,
  subscribeToLeads,
  subscribeToTestimonials,
} from "@/src/lib/firebase/firestore";

type TotalKey = "leads" | "consultations" | "blog" | "testimonials" | "countries";
type Totals = Record<TotalKey, number>;

export default function AdminDashboardPage() {
  const [totals, setTotals] = useState<Totals>({ leads: 0, consultations: 0, blog: 0, testimonials: 0, countries: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const update = (key: TotalKey, count: number) => setTotals((current) => ({ ...current, [key]: count }));
    const fail = (message: string) => {
      setError(message);
      setLoading(false);
    };

    const unsubscribers = [
      subscribeToLeads((items) => update("leads", items.length), (caught) => fail(caught.message)),
      subscribeToConsultations((items) => update("consultations", items.length), (caught) => fail(caught.message)),
      subscribeToBlogPosts((items) => update("blog", items.length), (caught) => fail(caught.message)),
      subscribeToTestimonials((items) => update("testimonials", items.length), (caught) => fail(caught.message)),
      subscribeToCountries((items) => {
        update("countries", items.length);
        setLoading(false);
      }, (caught) => fail(caught.message)),
    ];

    return () => unsubscribers.forEach((unsubscribe) => unsubscribe());
  }, []);

  return (
    <AdminLayout title="Dashboard">
      {error ? <ErrorMessage message={error} /> : null}
      {loading ? <LoadingSpinner label="Loading dashboard metrics" /> : <DashboardCards totals={totals} />}
      <section className="mt-6 grid gap-5 lg:grid-cols-2">
        <div className="min-h-72 border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-[#16325B]">Lead Trend</h2>
          <div className="mt-6 flex h-48 items-center justify-center border border-dashed border-slate-300 text-sm font-semibold text-slate-500">Analytics chart placeholder</div>
        </div>
        <div className="min-h-72 border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-[#16325B]">Conversion Pipeline</h2>
          <div className="mt-6 flex h-48 items-center justify-center border border-dashed border-slate-300 text-sm font-semibold text-slate-500">Pipeline chart placeholder</div>
        </div>
      </section>
    </AdminLayout>
  );
}
