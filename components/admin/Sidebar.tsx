"use client";

import {
  BookOpenText,
  CalendarDays,
  Gauge,
  Globe2,
  LogOut,
  Menu,
  MessageSquareText,
  PanelLeftClose,
  Settings,
  Star,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { logoutAdmin } from "@/src/lib/firebase/auth";

const menu = [
  { label: "Dashboard", href: "/admin/dashboard", icon: Gauge },
  { label: "Leads", href: "/admin/leads", icon: MessageSquareText },
  { label: "Consultations", href: "/admin/consultations", icon: CalendarDays },
  { label: "Blog", href: "/admin/blog", icon: BookOpenText },
  { label: "Testimonials", href: "/admin/testimonials", icon: Star },
  { label: "Countries", href: "/admin/countries", icon: Globe2 },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await logoutAdmin();
    router.replace("/admin/login");
  }

  return (
    <aside className={`border-r border-white/10 bg-[#16325B] text-white transition-all ${collapsed ? "lg:w-20" : "lg:w-72"} w-full lg:min-h-screen`}>
      <div className="flex h-16 items-center justify-between border-b border-white/10 px-4">
        <Link href="/admin/dashboard" className={`font-serif text-xl font-semibold text-white ${collapsed ? "lg:hidden" : ""}`}>
          Synopsis Admin
        </Link>
        <button
          type="button"
          onClick={() => setCollapsed((value) => !value)}
          className="inline-flex size-10 items-center justify-center rounded-sm text-white transition hover:bg-white/10"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <Menu className="size-5" aria-hidden="true" /> : <PanelLeftClose className="size-5" aria-hidden="true" />}
        </button>
      </div>
      <nav className="grid gap-1 p-3" aria-label="Admin navigation">
        {menu.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              title={collapsed ? item.label : undefined}
              className={`flex min-h-11 items-center gap-3 rounded-sm px-3 text-sm font-semibold transition ${
                active ? "bg-[#B08D57] text-[#16325B]" : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon className="size-5 shrink-0" aria-hidden="true" />
              <span className={collapsed ? "lg:hidden" : ""}>{item.label}</span>
            </Link>
          );
        })}
        <button
          type="button"
          onClick={handleLogout}
          className="mt-4 flex min-h-11 items-center gap-3 rounded-sm px-3 text-left text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
          title={collapsed ? "Logout" : undefined}
        >
          <LogOut className="size-5 shrink-0" aria-hidden="true" />
          <span className={collapsed ? "lg:hidden" : ""}>Logout</span>
        </button>
      </nav>
    </aside>
  );
}
