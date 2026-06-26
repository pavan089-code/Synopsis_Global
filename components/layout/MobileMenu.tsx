"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { InquiryButton } from "@/components/common/InquiryButton";

type NavItem = {
  label: string;
  href: string;
};

export function MobileMenu({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-11 items-center justify-center rounded-xl border border-[#D9D6CF] text-[#16325B] transition hover:border-[#B08D57]"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
      >
        {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
      </button>

      {open ? (
        <div className="absolute left-0 top-full w-full border-t border-[#D9D6CF] bg-[#F7F5F2] shadow-xl">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-5" aria-label="Mobile navigation">
            {items.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`border-b border-slate-100 py-3 text-sm font-semibold transition ${
                    active ? "text-[#16325B]" : "text-[#1F2937]/78 hover:text-[#16325B]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <InquiryButton className="mt-5 w-full" onClick={() => setOpen(false)}>
              Book Free Counselling
            </InquiryButton>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
