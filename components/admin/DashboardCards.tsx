import { BookOpenText, CalendarDays, Globe2, MessageSquareText, Star } from "lucide-react";

const cardConfig = [
  { label: "Total Leads", key: "leads", icon: MessageSquareText },
  { label: "Total Consultations", key: "consultations", icon: CalendarDays },
  { label: "Total Blog Posts", key: "blog", icon: BookOpenText },
  { label: "Total Testimonials", key: "testimonials", icon: Star },
  { label: "Total Countries", key: "countries", icon: Globe2 },
] as const;

export function DashboardCards({ totals }: { totals: Record<(typeof cardConfig)[number]["key"], number> }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {cardConfig.map((card) => {
        const Icon = card.icon;
        return (
          <div key={card.key} className="border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-500">{card.label}</p>
              <span className="inline-flex size-10 items-center justify-center rounded-sm bg-[#082B6A] text-white">
                <Icon className="size-5" aria-hidden="true" />
              </span>
            </div>
            <p className="mt-5 text-3xl font-semibold text-[#082B6A]">{totals[card.key]}</p>
          </div>
        );
      })}
    </div>
  );
}
