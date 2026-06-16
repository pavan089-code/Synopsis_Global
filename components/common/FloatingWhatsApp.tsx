import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export function FloatingWhatsApp() {
  const href = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Synopsis Global on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-slate-900/20 transition hover:-translate-y-1 hover:bg-[#1fb457] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      <MessageCircle aria-hidden="true" className="size-7" />
    </a>
  );
}
