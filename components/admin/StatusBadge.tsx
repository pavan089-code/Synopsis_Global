import type { ConsultationStatus } from "@/src/types/consultation";
import type { LeadStatus } from "@/src/types/lead";

type Status = LeadStatus | ConsultationStatus | "Published" | "Draft";

const styles: Record<Status, string> = {
  New: "bg-blue-50 text-blue-700 ring-blue-200",
  Contacted: "bg-cyan-50 text-cyan-700 ring-cyan-200",
  Interested: "bg-amber-50 text-amber-700 ring-amber-200",
  Converted: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Closed: "bg-slate-100 text-slate-700 ring-slate-200",
  Pending: "bg-amber-50 text-amber-700 ring-amber-200",
  Confirmed: "bg-blue-50 text-blue-700 ring-blue-200",
  Completed: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Cancelled: "bg-red-50 text-red-700 ring-red-200",
  Published: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Draft: "bg-slate-100 text-slate-700 ring-slate-200",
};

export function StatusBadge({ status }: { status: Status }) {
  return <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ring-1 ${styles[status]}`}>{status}</span>;
}
