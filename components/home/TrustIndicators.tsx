import { AnimatedCounter } from "@/components/common/AnimatedCounter";
import { Reveal } from "@/components/common/Reveal";
import { statistics } from "@/data/statistics";

export function TrustIndicators() {
  return (
    <section className="border-b border-slate-200 bg-white py-10 sm:py-12" aria-label="Synopsis Global results">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {statistics.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.05}>
            <div className="h-full border-l-2 border-[#C9A227] bg-slate-50 px-6 py-5">
              <p className="text-4xl font-semibold text-[#082B6A]">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
