import { Button } from "@/components/common/Button";
import { InquiryButton } from "@/components/common/InquiryButton";
import { Reveal } from "@/components/common/Reveal";

export function CTASection() {
  return (
    <section className="bg-[#082B6A] py-20 text-white">
      <Reveal className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C9A227]">Begin with clarity</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl">Ready to Start Your Global Journey?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75">
          Speak with our advisory team to understand the right route for your career, education, hiring, or immigration goals.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <InquiryButton>Book Consultation</InquiryButton>
          <Button href="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
