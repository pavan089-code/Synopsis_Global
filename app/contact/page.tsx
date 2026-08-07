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
  description: "Contact Synopsis Global for overseas study, recruitment, immigration, and workforce consultancy.",
  keywords: siteConfig.keywords,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Synopsis Global",
    description: "Discuss your international education, recruitment, immigration, or workforce requirement with Synopsis Global.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Synopsis Global",
    description: "Overseas consultancy for study, recruitment, immigration, and workforce solutions.",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="bg-[#16325B] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#B08D57]">Contact</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-normal sm:text-5xl">Start with a focused international consultation</h1>
        </div>
      </section>
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
          <Reveal>
            <div>
              <SectionHeading align="left" title="Request a consultation" description="Share your objective and our advisory team will recommend the most appropriate next step." />
              <ContactLeadForm />
              <InquiryButton variant="secondary" className="w-full">
                Open Inquiry Form
              </InquiryButton>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <aside className="space-y-6">
              <div className="border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-2xl font-semibold text-[#16325B]">Contact Information</h2>
                <ul className="mt-6 space-y-5 text-sm text-slate-700">
                  <li className="flex gap-3"><UserRound className="size-5 text-[#B08D57]" aria-hidden="true" /> Contact Person: {siteConfig.contactPerson}</li>
                  <li className="flex gap-3"><Phone className="size-5 text-[#B08D57]" aria-hidden="true" /> {siteConfig.phone}</li>
                  <li className="flex gap-3"><Mail className="size-5 text-[#B08D57]" aria-hidden="true" /> <a href={`mailto:${siteConfig.email}`} className="hover:text-[#16325B]">{siteConfig.email}</a></li>
                  <li className="flex gap-3"><MapPin className="size-5 text-[#B08D57]" aria-hidden="true" /> {siteConfig.address}</li>
                  <li className="flex gap-3"><Clock className="size-5 text-[#B08D57]" aria-hidden="true" /> {siteConfig.businessHours}</li>
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
                <h2 className="text-2xl font-semibold text-[#16325B]">Inquiry Form</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Looking for support in a specific area? Use the inquiry form to tell us how we can help.
                </p>
                <InquiryButton className="mt-6 w-full">Send Service Inquiry</InquiryButton>
              </div>
              <div className="flex min-h-72 items-center justify-center border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
                <div>
                  <MapPin aria-hidden="true" className="mx-auto size-8 text-[#B08D57]" />
                  <p className="mt-4 font-semibold text-[#16325B]">Synopsis Global, Hyderabad</p>
                  <p className="mt-2 text-sm text-slate-600">Contact our team to arrange an in-person consultation or receive directions to our office.</p>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
