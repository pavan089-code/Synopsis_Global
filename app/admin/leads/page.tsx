"use client";

import { Eye, Trash2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { DataTable, type DataTableColumn } from "@/components/admin/DataTable";
import { ErrorMessage } from "@/components/admin/ErrorMessage";
import { LeadForm } from "@/components/admin/LeadForm";
import { LoadingSpinner } from "@/components/admin/LoadingSpinner";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { deleteLead, subscribeToLeads, updateLeadStatus } from "@/src/lib/firebase/firestore";
import type { ContactLead, LeadStatus } from "@/src/types/lead";

const statuses: LeadStatus[] = ["New", "Contacted", "Interested", "Converted", "Closed"];
const pageSize = 8;

export default function AdminLeadsPage() {
  const [items, setItems] = useState<ContactLead[]>([]);
  const [selected, setSelected] = useState<ContactLead | null>(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    return subscribeToLeads(
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
    return items.filter((item) => [item.name, item.email, item.phone, item.service, item.status].join(" ").toLowerCase().includes(value));
  }, [items, query]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  const columns: DataTableColumn<ContactLead>[] = [
    { key: "name", header: "Name", cell: (item) => <span className="font-semibold text-[#082B6A]">{item.name}</span> },
    { key: "email", header: "Email", cell: (item) => item.email },
    { key: "phone", header: "Phone", cell: (item) => item.phone },
    { key: "service", header: "Service", cell: (item) => item.service },
    {
      key: "status",
      header: "Status",
      cell: (item) => (
        <select value={item.status} onChange={(event) => updateLeadStatus(item.id, event.target.value as LeadStatus)} className="min-h-9 border border-slate-300 bg-white px-2">
          {statuses.map((status) => (
            <option key={status}>{status}</option>
          ))}
        </select>
      ),
    },
    { key: "date", header: "Date", cell: (item) => item.createdAt?.toLocaleDateString() ?? "-" },
    {
      key: "actions",
      header: "Actions",
      cell: (item) => (
        <div className="flex gap-2">
          <button type="button" onClick={() => setSelected(item)} className="inline-flex size-9 items-center justify-center border border-slate-200 text-[#082B6A]" aria-label={`View ${item.name}`}>
            <Eye className="size-4" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => deleteLead(item.id)} className="inline-flex size-9 items-center justify-center border border-red-200 text-red-600" aria-label={`Delete ${item.name}`}>
            <Trash2 className="size-4" aria-hidden="true" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <AdminLayout title="Leads">
      <div className="grid gap-5">
        <LeadForm />
        {error ? <ErrorMessage message={error} /> : null}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <input value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} placeholder="Search leads" className="min-h-11 w-full border border-slate-300 px-3 sm:w-80" />
          <StatusBadge status="New" />
        </div>
        {loading ? <LoadingSpinner label="Loading leads" /> : <DataTable columns={columns} items={paged} emptyText="No leads found." />}
        <div className="flex items-center justify-end gap-3 text-sm font-semibold text-slate-600">
          <button disabled={page === 1} onClick={() => setPage((value) => Math.max(1, value - 1))} className="border border-slate-300 px-3 py-2 disabled:opacity-40">Previous</button>
          Page {page} of {pageCount}
          <button disabled={page === pageCount} onClick={() => setPage((value) => Math.min(pageCount, value + 1))} className="border border-slate-300 px-3 py-2 disabled:opacity-40">Next</button>
        </div>
      </div>
      {selected ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-xl bg-white p-6 shadow-xl">
            <h2 className="text-2xl font-semibold text-[#082B6A]">{selected.name}</h2>
            <p className="mt-2 text-sm text-slate-600">{selected.email} | {selected.phone}</p>
            <p className="mt-4 font-semibold text-[#082B6A]">{selected.service}</p>
            <p className="mt-3 whitespace-pre-line text-slate-700">{selected.message}</p>
            <button type="button" onClick={() => setSelected(null)} className="mt-6 min-h-11 bg-[#082B6A] px-5 text-sm font-bold uppercase tracking-[0.08em] text-white">Close</button>
          </div>
        </div>
      ) : null}
    </AdminLayout>
  );
}
