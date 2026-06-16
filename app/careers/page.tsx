import type { Metadata } from "next";
import { BriefcaseBusiness, Clock, MapPin } from "lucide-react";
import { ResumeUploader } from "@/components/careers/ResumeUploader";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { jobOpenings } from "@/data/jobs";
import { siteConfig } from "@/data/site";
import { submitCandidateRegistration } from "@/app/careers/actions";

export const metadata: Metadata = {
  title: "Careers",
  description: "Register with Synopsis Global for international career opportunities in IT, healthcare, engineering, and customer support.",
  keywords: ["International Hiring", "Recruitment Services", "Work Visa", "Global Jobs", ...siteConfig.keywords],
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers | Synopsis Global",
    description: "Explore global career opportunities and submit your candidate registration.",
    url: "/careers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Synopsis Global",
    description: "Register for international career opportunities.",
  },
};

export default function CareersPage() {
  return (
    <div className="bg-white">
      <section className="bg-[#082B6A] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C9A227]">Careers</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-normal sm:text-5xl">Career opportunities for globally minded professionals</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">
            Register your profile for current and upcoming roles across technology, healthcare, engineering, customer support, and international workforce programs.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Open opportunities"
              title="Sample roles we support"
              description="Our recruitment team evaluates candidate readiness, role fit, documentation needs, and destination requirements."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {jobOpenings.map((job, index) => (
              <Reveal key={job.title} delay={index * 0.05}>
                <article className="h-full border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#C9A227] hover:shadow-lg">
                  <BriefcaseBusiness aria-hidden="true" className="size-8 text-[#C9A227]" />
                  <h2 className="mt-5 text-xl font-semibold text-[#082B6A]">{job.title}</h2>
                  <div className="mt-5 grid gap-3 text-sm text-slate-600">
                    <p className="flex gap-3">
                      <MapPin aria-hidden="true" className="size-5 text-[#082B6A]" />
                      {job.location}
                    </p>
                    <p className="flex gap-3">
                      <Clock aria-hidden="true" className="size-5 text-[#082B6A]" />
                      {job.experience} / {job.type}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Candidate registration"
              title="Submit your profile"
              description="Resume files are stored locally for now under a dedicated uploads directory. The server action is isolated so cloud storage can be added later without changing the page contract."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <form action={submitCandidateRegistration} className="grid gap-5 border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-[#082B6A]">
                  Full Name
                  <input required name="fullName" type="text" className="min-h-12 rounded-sm border border-slate-300 px-4 text-slate-800 outline-none transition focus:border-[#C9A227]" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-[#082B6A]">
                  Email
                  <input required name="email" type="email" className="min-h-12 rounded-sm border border-slate-300 px-4 text-slate-800 outline-none transition focus:border-[#C9A227]" />
                </label>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-[#082B6A]">
                  Phone
                  <input required name="phone" type="tel" className="min-h-12 rounded-sm border border-slate-300 px-4 text-slate-800 outline-none transition focus:border-[#C9A227]" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-[#082B6A]">
                  Experience
                  <input required name="experience" type="text" placeholder="Example: 3 years" className="min-h-12 rounded-sm border border-slate-300 px-4 text-slate-800 outline-none transition focus:border-[#C9A227]" />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-semibold text-[#082B6A]">
                Position Interested In
                <select name="position" className="min-h-12 rounded-sm border border-slate-300 px-4 text-slate-800 outline-none transition focus:border-[#C9A227]">
                  {jobOpenings.map((job) => (
                    <option key={job.title}>{job.title}</option>
                  ))}
                </select>
              </label>
              <ResumeUploader />
              <button
                type="submit"
                className="min-h-12 rounded-sm bg-[#082B6A] px-5 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#061f4f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#082B6A]"
              >
                Submit Registration
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
