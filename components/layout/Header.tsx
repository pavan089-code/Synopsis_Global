"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { InquiryButton } from "@/components/common/InquiryButton";
import { MobileMenu } from "@/components/layout/MobileMenu";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Study Abroad", href: "/services#study-abroad" },
  { label: "Immigration", href: "/services#immigration" },
  { label: "Destinations", href: "/countries" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#D9D6CF]/80 bg-[#F7F5F2]/88 shadow-sm shadow-[#16325B]/5 backdrop-blur-md transition">
      <div className="relative mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-5 px-6 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3" aria-label="Synopsis Global home">
          <Image
            src="/logo.jpeg"
            alt="Synopsis Global Logo"
            width={1254}
            height={1254}
            priority
            sizes="60px"
            className="size-12 rounded-sm object-contain"
          />
          <span className="hidden text-lg font-semibold tracking-normal text-[#16325B] sm:inline">Synopsis Global</span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-5 xl:gap-7 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`group relative py-2 text-sm font-semibold transition ${
                  active ? "text-[#16325B]" : "text-[#1F2937]/78 hover:text-[#16325B]"
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-1 h-px origin-left bg-[#B08D57] transition-transform duration-200 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <InquiryButton>Book Free Counselling</InquiryButton>
        </div>

        <MobileMenu items={navItems} />
      </div>
    </header>
  );
}
