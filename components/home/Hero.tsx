"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, GraduationCap, PlaneTakeoff } from "lucide-react";
import { Button } from "@/components/common/Button";
import { InquiryButton } from "@/components/common/InquiryButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#082B6A] text-white">
      <div className="absolute inset-0 opacity-25" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute left-1/2 top-1/2 h-[620px] w-[980px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/25" />
        <div className="absolute left-[12%] top-[24%] h-24 w-52 rounded-[50%] border border-[#C9A227]/70" />
        <div className="absolute right-[15%] top-[31%] h-32 w-72 rounded-[50%] border border-white/30" />
        <div className="absolute bottom-[18%] left-[36%] h-24 w-60 rounded-[50%] border border-[#C9A227]/60" />
      </div>
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute left-[8%] top-[18%] h-2 w-2 rounded-full bg-[#C9A227]" />
        <div className="absolute left-[22%] top-[36%] h-2 w-2 rounded-full bg-white" />
        <div className="absolute left-[42%] top-[29%] h-2 w-2 rounded-full bg-[#C9A227]" />
        <div className="absolute right-[28%] top-[42%] h-2 w-2 rounded-full bg-white" />
        <div className="absolute right-[13%] top-[24%] h-2 w-2 rounded-full bg-[#C9A227]" />
        <div className="absolute bottom-[24%] left-[34%] h-2 w-2 rounded-full bg-white" />
      </div>

      <motion.div
        aria-hidden="true"
        className="absolute right-8 top-28 hidden h-72 w-72 rounded-full border border-[#C9A227]/30 lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
        <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.26em] text-[#C9A227]">Premium international consultancy</p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal sm:text-5xl lg:text-6xl">
            Connecting Talent to Global Opportunities
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
            Empowering careers, education journeys, workforce solutions, and immigration pathways through trusted global partnerships.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <InquiryButton>Book Consultation</InquiryButton>
            <Button href="/services" variant="outline">
              Explore Services
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
          className="border-l border-white/15 pl-8"
        >
          <div className="grid gap-4">
            {[
              { item: "Global recruitment pathways", icon: Building2 },
              { item: "University and admissions support", icon: GraduationCap },
              { item: "Visa and documentation guidance", icon: PlaneTakeoff },
              { item: "Corporate workforce partnerships", icon: ArrowRight },
            ].map(({ item, icon: Icon }) => (
                <div key={item} className="flex items-center gap-4 border-b border-white/15 py-4 text-sm font-semibold text-white/85">
                  <span className="flex size-9 items-center justify-center rounded-sm bg-[#C9A227] text-[#082B6A]">
                    <Icon aria-hidden="true" className="size-4" />
                  </span>
                  {item}
                </div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
