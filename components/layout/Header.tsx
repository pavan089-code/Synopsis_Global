"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { InquiryButton } from "@/components/common/InquiryButton";
import { MobileMenu } from "@/components/layout/MobileMenu";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "Countries", href: "/countries" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm shadow-slate-900/5 backdrop-blur transition">
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Synopsis Global home">
          <Image
            src="/Rlogo.jpeg"
            alt="Synopsis Global Logo"
            width={1254}
            height={1254}
            priority
            sizes="56px"
            className="size-12 rounded-sm object-contain"
          />
          <span className="hidden text-lg font-semibold tracking-normal text-[#082B6A] sm:inline">Synopsis Global</span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-2 text-sm font-semibold transition ${
                  active ? "text-[#082B6A]" : "text-slate-700 hover:text-[#082B6A]"
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-1 h-0.5 bg-[#C9A227] transition-transform duration-200 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <InquiryButton>Book Consultation</InquiryButton>
        </div>

        <MobileMenu items={navItems} />
      </div>
    </header>
  );
}
