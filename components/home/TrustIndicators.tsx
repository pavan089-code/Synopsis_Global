import { Reveal } from "@/components/common/Reveal";

const partners = ["Enterprise Clients", "Global Delivery Teams", "Technology Partners", "Industry Specialists", "Business Leaders"];

export function TrustIndicators() {
  return (
    <section className="border-y border-[#D9D6CF] bg-[#F7F5F2] py-10 sm:py-12" aria-label="Synopsis Global business capabilities">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-xs text-xs font-bold uppercase tracking-[0.22em] text-[#6B7280]">Trusted by leaders building resilient, high-performing businesses</p>
            <div className="grid flex-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {partners.map((partner) => (
                <div key={partner} className="flex min-h-20 items-center justify-center border border-[#D9D6CF] bg-white/70 px-4 text-center text-sm font-semibold text-[#244A73]">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
