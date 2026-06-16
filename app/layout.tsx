import type { Metadata, Viewport } from "next";
import { SiteChrome } from "@/components/layout/SiteChrome";
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
  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico", sizes: "any" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/favicon_io/site.webmanifest",
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

export const viewport: Viewport = {
  themeColor: "#082B6A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
