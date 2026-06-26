"use client";

import { Edit3, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { DataTable, type DataTableColumn } from "@/components/admin/DataTable";
import { ErrorMessage } from "@/components/admin/ErrorMessage";
import { ImageCmsForm } from "@/components/admin/ImageCmsForm";
import { LoadingSpinner } from "@/components/admin/LoadingSpinner";
import { createCountry, deleteCountry, subscribeToCountries, updateCountry } from "@/src/lib/firebase/firestore";
import type { Country, CountryInput } from "@/src/types/country";

export default function AdminCountriesPage() {
  const [items, setItems] = useState<Country[]>([]);
  const [editing, setEditing] = useState<Country | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    return subscribeToCountries(
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

  async function save(input: CountryInput, id?: string) {
    if (id) await updateCountry(id, input);
    else await createCountry(input);
    setEditing(null);
  }

  const columns: DataTableColumn<Country>[] = [
    { key: "name", header: "Country", cell: (item) => <span className="font-semibold text-[#16325B]">{item.name}</span> },
    { key: "description", header: "Description", cell: (item) => <span className="line-clamp-2">{item.description}</span> },
    { key: "opportunities", header: "Opportunities", cell: (item) => <span className="line-clamp-2">{item.opportunities}</span> },
    {
      key: "actions",
      header: "Actions",
      cell: (item) => (
        <div className="flex gap-2">
          <button type="button" onClick={() => setEditing(item)} className="inline-flex size-9 items-center justify-center border border-slate-200 text-[#16325B]" aria-label={`Edit ${item.name}`}>
            <Edit3 className="size-4" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => deleteCountry(item.id)} className="inline-flex size-9 items-center justify-center border border-red-200 text-red-600" aria-label={`Delete ${item.name}`}>
            <Trash2 className="size-4" aria-hidden="true" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <AdminLayout title="Countries">
      <div className="grid gap-5 xl:grid-cols-[420px_1fr]">
        <ImageCmsForm key={editing?.id ?? "new"} mode="countries" item={editing} onSave={(input, id) => save(input as CountryInput, id)} onSaved={() => setEditing(null)} />
        <div className="grid content-start gap-4">
          {error ? <ErrorMessage message={error} /> : null}
          {loading ? <LoadingSpinner label="Loading countries" /> : <DataTable columns={columns} items={items} emptyText="No countries yet." />}
        </div>
      </div>
    </AdminLayout>
  );
}
