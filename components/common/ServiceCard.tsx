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
      className="group block h-full rounded-xl border border-[#D9D6CF] bg-white p-6 shadow-sm shadow-[#16325B]/5 transition duration-300 hover:-translate-y-1 hover:border-[#B08D57] hover:shadow-xl hover:shadow-[#16325B]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B08D57]"
    >
      <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl border border-[#B08D57]/35 bg-[#B08D57]/10 text-[#16325B]">
        <Icon aria-hidden="true" className="size-6" />
      </div>
      <h3 className="text-xl font-semibold text-[#16325B]">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#6B7280]">{service.summary}</p>
      <ul className="mt-5 space-y-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-[#1F2937]">
            <span className="size-1.5 bg-[#B08D57]" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>
      <span className="mt-6 inline-flex text-sm font-semibold text-[#16325B] transition group-hover:text-[#B08D57]">Learn More</span>
    </Link>
  );
}
