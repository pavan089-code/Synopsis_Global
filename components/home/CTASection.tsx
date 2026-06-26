import { Button } from "@/components/common/Button";
import { InquiryButton } from "@/components/common/InquiryButton";
import { Reveal } from "@/components/common/Reveal";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#16325B] py-20 text-white">
      <div className="absolute inset-0 opacity-[.07] bg-[linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.14)_1px,transparent_1px)] bg-[size:72px_72px]" aria-hidden="true" />
      <Reveal className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#D7C19A]">Begin with clarity</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl">Ready to Begin Your Global Journey?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75">
          Speak with our advisory team to understand the right route for your education, visa, or immigration goals.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <InquiryButton>Book Free Counselling</InquiryButton>
          <Button href="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
