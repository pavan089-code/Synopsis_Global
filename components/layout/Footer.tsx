import Link from "next/link";
import Image from "next/image";
import { Globe2, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { siteConfig } from "@/data/site";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const studyLinks = ["University Selection", "Admissions", "SOP / LOR", "Scholarships", "Career Counselling"];
const immigrationLinks = ["Student Visa", "Visitor Visa", "Work Visa", "Permanent Residency", "Documentation"];
const destinationLinks = ["Canada", "Australia", "United Kingdom", "United States", "Germany", "New Zealand", "UAE"];

export function Footer() {
  return (
    <footer className="bg-[#16325B] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-[1.15fr_.8fr_.8fr_.8fr_1fr] lg:px-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="inline-flex items-center gap-3" aria-label="Synopsis Global home">
            <Image
              src="/logo.jpeg"
              alt="Synopsis Global Logo"
              width={1254}
              height={1254}
              sizes="56px"
              className="size-14 rounded-sm bg-white object-contain"
            />
            <span className="text-xl font-semibold">Synopsis Global</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/75">{siteConfig.tagline}</p>
          <div className="mt-6 flex gap-3">
            {[
              { label: "LinkedIn", icon: Globe2 },
              { label: "WhatsApp", icon: MessageCircle },
              { label: "Newsletter", icon: Send },
            ].map(({ label, icon: Icon }) => (
              <Link
                key={label}
              href={label === "WhatsApp" ? `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}` : "#"}
                aria-label={label}
                className="inline-flex size-10 items-center justify-center rounded-xl border border-white/20 text-white/80 transition hover:border-[#B08D57] hover:text-[#B08D57]"
              >
                <Icon aria-hidden="true" className="size-4" />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#B08D57]">Study Abroad</h3>
          <ul className="mt-5 space-y-3">
            {studyLinks.map((label) => (
              <li key={label}>
                <Link href="/services#study-abroad" className="text-sm text-white/75 transition hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#B08D57]">Immigration</h3>
          <ul className="mt-5 space-y-3">
            {immigrationLinks.map((label) => (
              <li key={label}>
                <Link href="/services#immigration" className="text-sm text-white/75 transition hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#B08D57]">Destinations</h3>
          <ul className="mt-5 space-y-3">
            {destinationLinks.map((label) => (
              <li key={label}>
                <Link href="/countries" className="text-sm text-white/75 transition hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#B08D57]">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm text-white/75">
            <li className="flex gap-3">
              <Phone aria-hidden="true" className="mt-0.5 size-4 text-[#B08D57]" />
              {siteConfig.phone}
            </li>
            <li className="flex gap-3">
              <Mail aria-hidden="true" className="mt-0.5 size-4 text-[#B08D57]" />
              {siteConfig.email}
            </li>
            <li className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 size-4 text-[#B08D57]" />
              {siteConfig.address}
            </li>
          </ul>
          <form className="mt-6 flex overflow-hidden rounded-xl border border-white/15 bg-white/5">
            <label className="sr-only" htmlFor="footer-email">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder="Email address"
              className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/45 focus:outline-none"
            />
            <button type="submit" className="px-4 text-[#B08D57] transition hover:bg-white/10" aria-label="Subscribe">
              <Send aria-hidden="true" className="size-4" />
            </button>
          </form>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-6 border-t border-white/10 px-6 py-6 text-sm text-white/65 sm:grid-cols-2 lg:px-8">
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {quickLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-left sm:text-right">Copyright 2026 Synopsis Global. All rights reserved.</p>
      </div>
    </footer>
  );
}
