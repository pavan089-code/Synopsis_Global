import Link from "next/link";
import type { Service } from "@/data/services";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Link
      href={`/services#${service.slug}`}
      className="group block h-full rounded-sm border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#C9A227] hover:shadow-xl hover:shadow-[#082B6A]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227]"
    >
      <div className="mb-5 inline-flex size-12 items-center justify-center rounded-sm border border-[#C9A227]/40 bg-[#C9A227]/10 text-[#082B6A]">
        <Icon aria-hidden="true" className="size-6" />
      </div>
      <h3 className="text-xl font-semibold text-[#082B6A]">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{service.summary}</p>
      <ul className="mt-5 space-y-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-slate-700">
            <span className="size-1.5 bg-[#C9A227]" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>
      <span className="mt-6 inline-flex text-sm font-semibold text-[#082B6A] transition group-hover:text-[#C9A227]">Learn More</span>
    </Link>
  );
}
