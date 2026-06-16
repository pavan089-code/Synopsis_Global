import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone, UserRound } from "lucide-react";
import { Button } from "@/components/common/Button";
import { ContactLeadForm } from "@/components/common/ContactLeadForm";
import { InquiryButton } from "@/components/common/InquiryButton";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Yeshwanth at Synopsis Global for recruitment services, study abroad guidance, work visa support, immigration services, and workforce solutions.",
  keywords: siteConfig.keywords,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Synopsis Global",
    description: "Book a consultation with Synopsis Global.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Synopsis Global",
    description: "Recruitment, education, immigration, and workforce consultation.",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="bg-[#082B6A] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C9A227]">Contact</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-normal sm:text-5xl">Start with a focused consultation</h1>
        </div>
      </section>
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
          <Reveal>
            <div>
              <SectionHeading align="left" title="Book a consultation" description="Share your details and our advisory team will review the best next step for your goal." />
              <ContactLeadForm />
              <InquiryButton variant="secondary" className="w-full">
                Open Inquiry Form
              </InquiryButton>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <aside className="space-y-6">
              <div className="border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-2xl font-semibold text-[#082B6A]">Contact Information</h2>
                <ul className="mt-6 space-y-5 text-sm text-slate-700">
                  <li className="flex gap-3"><UserRound className="size-5 text-[#C9A227]" aria-hidden="true" /> Contact Person: {siteConfig.contactPerson}</li>
                  <li className="flex gap-3"><Phone className="size-5 text-[#C9A227]" aria-hidden="true" /> {siteConfig.phone}</li>
                  <li className="flex gap-3"><Mail className="size-5 text-[#C9A227]" aria-hidden="true" /> <a href={`mailto:${siteConfig.email}`} className="hover:text-[#082B6A]">{siteConfig.email}</a></li>
                  <li className="flex gap-3"><MapPin className="size-5 text-[#C9A227]" aria-hidden="true" /> {siteConfig.address}</li>
                  <li className="flex gap-3"><Clock className="size-5 text-[#C9A227]" aria-hidden="true" /> {siteConfig.businessHours}</li>
                </ul>
                <Button
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                  className="mt-7 gap-2"
                >
                  <MessageCircle aria-hidden="true" className="size-4" />
                  WhatsApp
                </Button>
              </div>
              <div className="border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-[#082B6A]">Inquiry Form</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Prefer a focused service inquiry? Open the reusable inquiry form and select the service you are interested in.
                </p>
                <InquiryButton className="mt-6 w-full">Send Service Inquiry</InquiryButton>
              </div>
              <div className="flex min-h-72 items-center justify-center border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
                <div>
                  <MapPin aria-hidden="true" className="mx-auto size-8 text-[#C9A227]" />
                  <p className="mt-4 font-semibold text-[#082B6A]">Google Maps Placeholder</p>
                  <p className="mt-2 text-sm text-slate-600">Embed office location once the final address is confirmed.</p>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
