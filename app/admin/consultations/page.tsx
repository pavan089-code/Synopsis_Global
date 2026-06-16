"use client";

import { Trash2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { DataTable, type DataTableColumn } from "@/components/admin/DataTable";
import { ErrorMessage } from "@/components/admin/ErrorMessage";
import { LoadingSpinner } from "@/components/admin/LoadingSpinner";
import { deleteConsultation, subscribeToConsultations, updateConsultationStatus } from "@/src/lib/firebase/firestore";
import type { Consultation, ConsultationStatus } from "@/src/types/consultation";

const statuses: ConsultationStatus[] = ["Pending", "Confirmed", "Completed", "Cancelled"];

export default function AdminConsultationsPage() {
  const [items, setItems] = useState<Consultation[]>([]);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<ConsultationStatus | "All">("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    return subscribeToConsultations(
      (nextItems) => {
        setItems(nextItems);
        setLoading(false);
      },
      (caught) => {
        setError(caught.message);
        setLoading(false);
      },
    );
  }, []);

  const filtered = useMemo(() => {
    const value = query.toLowerCase();
    return items.filter((item) => {
      const matchesText = [item.name, item.email, item.phone, item.service, item.status].join(" ").toLowerCase().includes(value);
      return matchesText && (status === "All" || item.status === status);
    });
  }, [items, query, status]);

  const columns: DataTableColumn<Consultation>[] = [
    { key: "name", header: "Name", cell: (item) => <span className="font-semibold text-[#082B6A]">{item.name}</span> },
    { key: "email", header: "Email", cell: (item) => item.email },
    { key: "phone", header: "Phone", cell: (item) => item.phone },
    { key: "service", header: "Service", cell: (item) => item.service },
    { key: "preferred", header: "Preferred", cell: (item) => `${item.preferredDate} ${item.preferredTime}` },
    {
      key: "status",
      header: "Status",
      cell: (item) => (
        <select value={item.status} onChange={(event) => updateConsultationStatus(item.id, event.target.value as ConsultationStatus)} className="min-h-9 border border-slate-300 bg-white px-2">
          {statuses.map((nextStatus) => (
            <option key={nextStatus}>{nextStatus}</option>
          ))}
        </select>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      cell: (item) => (
        <button type="button" onClick={() => deleteConsultation(item.id)} className="inline-flex size-9 items-center justify-center border border-red-200 text-red-600" aria-label={`Delete ${item.name}`}>
          <Trash2 className="size-4" aria-hidden="true" />
        </button>
      ),
    },
  ];

  return (
    <AdminLayout title="Consultations">
      <div className="grid gap-5">
        {error ? <ErrorMessage message={error} /> : null}
        <div className="flex flex-wrap gap-3">
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search consultations" className="min-h-11 w-full border border-slate-300 px-3 sm:w-80" />
          <select value={status} onChange={(event) => setStatus(event.target.value as ConsultationStatus | "All")} className="min-h-11 border border-slate-300 bg-white px-3">
            <option>All</option>
            {statuses.map((nextStatus) => <option key={nextStatus}>{nextStatus}</option>)}
          </select>
        </div>
        {loading ? <LoadingSpinner label="Loading consultations" /> : <DataTable columns={columns} items={filtered} emptyText="No consultations found." />}
      </div>
    </AdminLayout>
  );
}
