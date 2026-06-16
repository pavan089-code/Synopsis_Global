import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { faqs } from "@/data/faqs";

export function FAQSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions before getting started"
            description="Quick answers for students, professionals, employers, and families considering international opportunities."
          />
        </Reveal>
        <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.04}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-[#082B6A]">
                  {faq.question}
                  <span className="text-2xl leading-none text-[#C9A227] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
