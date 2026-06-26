import { AnimatedCounter } from "@/components/common/AnimatedCounter";
import { Reveal } from "@/components/common/Reveal";
import { statistics } from "@/data/statistics";

export function StatisticsSection() {
  return (
    <section className="bg-[#F7F5F2] py-20 sm:py-24" aria-label="Synopsis Global results">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {statistics.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.05}>
            <div className="h-full border-l-2 border-[#B08D57] bg-white px-6 py-7 shadow-sm shadow-[#16325B]/5">
              <p className="text-4xl font-semibold text-[#16325B]">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#6B7280]">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
