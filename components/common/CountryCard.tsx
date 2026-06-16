import type { Country } from "@/data/countries";

type CountryCardProps = {
  country: Country;
};

export function CountryCard({ country }: CountryCardProps) {
  return (
    <article className="h-full rounded-sm border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:border-[#C9A227] hover:shadow-lg">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="flex size-12 items-center justify-center rounded-sm border border-slate-200 bg-slate-50 text-sm font-bold text-[#082B6A]">
          {country.code}
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A227]">Future flag ready</span>
      </div>
      <h3 className="text-xl font-semibold text-[#082B6A]">{country.name}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{country.description}</p>
      <p className="mt-4 border-l-2 border-[#C9A227] pl-4 text-sm leading-6 text-slate-700">{country.opportunities}</p>
    </article>
  );
}
