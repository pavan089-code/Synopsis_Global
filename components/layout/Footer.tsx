import Link from "next/link";
import Image from "next/image";
import { Globe2, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "Countries", href: "/countries" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#082B6A] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
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
                className="inline-flex size-10 items-center justify-center rounded-sm border border-white/20 text-white/80 transition hover:border-[#C9A227] hover:text-[#C9A227]"
              >
                <Icon aria-hidden="true" className="size-4" />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#C9A227]">Quick Links</h3>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/75 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#C9A227]">Services</h3>
          <ul className="mt-5 space-y-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href="/services" className="text-sm text-white/75 transition hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#C9A227]">Contact Details</h3>
          <ul className="mt-5 space-y-4 text-sm text-white/75">
            <li className="flex gap-3">
              <Phone aria-hidden="true" className="mt-0.5 size-4 text-[#C9A227]" />
              {siteConfig.phone}
            </li>
            <li className="flex gap-3">
              <Mail aria-hidden="true" className="mt-0.5 size-4 text-[#C9A227]" />
              {siteConfig.email}
            </li>
            <li className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 size-4 text-[#C9A227]" />
              {siteConfig.address}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/60">
        Copyright 2026 Synopsis Global. All rights reserved.
      </div>
    </footer>
  );
}
