import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { InquiryModal } from "@/components/common/InquiryModal";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Synopsis Global | International Recruitment, Education and Immigration Consultancy",
    template: "%s | Synopsis Global",
  },
  description:
    "Synopsis Global connects talent, education, and global opportunities through recruitment services, study abroad guidance, immigration services, and workforce solutions.",
  keywords: ["Synopsis Global", ...siteConfig.keywords],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Synopsis Global",
    description: siteConfig.tagline,
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "Synopsis Global",
    images: [
      {
        url: "/logo.jpeg",
        width: 1254,
        height: 1254,
        alt: "Synopsis Global Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Synopsis Global",
    description: siteConfig.tagline,
    images: ["/logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <InquiryModal />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
