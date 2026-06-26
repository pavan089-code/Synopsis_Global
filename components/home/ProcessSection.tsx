import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { processFlows } from "@/data/processes";

export function ProcessSection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="Clear workflows for students and applicants"
            description="Every engagement follows a structured path so clients understand the next action, the required documents, and the expected decision points."
          />
        </Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {processFlows.map((flow, flowIndex) => (
            <Reveal key={flow.title} delay={flowIndex * 0.08}>
              <article className="h-full border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-2xl font-semibold text-[#16325B]">{flow.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{flow.description}</p>
                <ol className="mt-8 grid gap-5">
                  {flow.steps.map((step, index) => (
                    <li key={step} className="grid grid-cols-[3rem_1fr] items-center gap-4">
                      <span className="flex size-12 items-center justify-center rounded-sm bg-[#16325B] text-sm font-bold text-[#B08D57]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="border-b border-slate-200 pb-4 text-base font-semibold text-slate-800">{step}</span>
                    </li>
                  ))}
                </ol>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
