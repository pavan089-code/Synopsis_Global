import Image from "next/image";
import Link from "next/link";
import type { Country } from "@/data/countries";

type CountryCardProps = {
  country: Country;
};

export function CountryCard({ country }: CountryCardProps) {
  return (
    <article className="group h-full overflow-hidden rounded-xl border border-[#D9D6CF] bg-white shadow-sm shadow-[#16325B]/5 transition duration-300 hover:-translate-y-1 hover:border-[#B08D57] hover:shadow-xl hover:shadow-[#16325B]/10">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={country.image}
          alt={`${country.name} study destination`}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#16325B]/65 via-transparent to-transparent" aria-hidden="true" />
        <div className="absolute bottom-4 left-4 flex size-12 items-center justify-center rounded-xl border border-white/30 bg-white/90 text-sm font-bold text-[#16325B]">
          {country.code}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#16325B]">{country.name}</h3>
        <p className="mt-3 text-sm leading-6 text-[#6B7280]">{country.description}</p>
        <div className="mt-5 grid gap-3 text-sm text-[#1F2937]">
          <p><span className="font-semibold text-[#16325B]">Quick facts:</span> {country.quickFacts.join(", ")}</p>
          <p><span className="font-semibold text-[#16325B]">Top universities:</span> {country.topUniversities}</p>
          <p><span className="font-semibold text-[#16325B]">Popular programs:</span> {country.popularPrograms}</p>
          <p><span className="font-semibold text-[#16325B]">Visa pathway:</span> {country.visaPathway}</p>
        </div>
        <Link href="/countries" className="mt-6 inline-flex text-sm font-semibold text-[#16325B] transition hover:text-[#B08D57]">
          Explore Destination
        </Link>
      </div>
    </article>
  );
}
