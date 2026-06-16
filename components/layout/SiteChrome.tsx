"use client";

import { usePathname } from "next/navigation";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { InquiryModal } from "@/components/common/InquiryModal";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const adminRoute = pathname.startsWith("/admin");

  if (adminRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <InquiryModal />
      <FloatingWhatsApp />
    </>
  );
}
