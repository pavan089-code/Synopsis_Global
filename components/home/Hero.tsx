"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, FileCheck2, GraduationCap, Landmark } from "lucide-react";
import { Button } from "@/components/common/Button";
import { InquiryButton } from "@/components/common/InquiryButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#16325B] text-white">
      <Image
        src="/images/hero-global-journey.png"
        alt="Students and professionals beginning an international education journey"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#16325B]/58" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_30%,rgba(176,141,87,.18),transparent_32%),linear-gradient(90deg,rgba(22,50,91,.96)_0%,rgba(22,50,91,.72)_45%,rgba(22,50,91,.34)_100%)]" aria-hidden="true" />
      <div className="absolute inset-0 opacity-[.08]" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute left-[8%] top-[22%] h-24 w-56 rounded-[50%] border border-white/30" />
        <div className="absolute right-[18%] top-[31%] h-32 w-80 rounded-[50%] border border-[#B08D57]/60" />
        <div className="absolute bottom-[14%] left-[42%] h-20 w-64 rounded-[50%] border border-white/25" />
      </div>
      <div className="absolute inset-0 opacity-15" aria-hidden="true">
        <div className="absolute left-[8%] top-[18%] h-2 w-2 rounded-full bg-[#B08D57]" />
        <div className="absolute left-[22%] top-[36%] h-2 w-2 rounded-full bg-white" />
        <div className="absolute left-[42%] top-[29%] h-2 w-2 rounded-full bg-[#B08D57]" />
        <div className="absolute right-[28%] top-[42%] h-2 w-2 rounded-full bg-white" />
        <div className="absolute right-[13%] top-[24%] h-2 w-2 rounded-full bg-[#B08D57]" />
        <div className="absolute bottom-[24%] left-[34%] h-2 w-2 rounded-full bg-white" />
      </div>

      <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-14 px-6 py-24 sm:py-28 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
        <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.26em] text-[#D7C19A]">Education and immigration consultancy</p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal sm:text-5xl lg:text-6xl">
            Building Your Future Beyond Borders
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/82">
            Guiding students and professionals through international education, visas, and immigration through trusted expertise, personalized counselling, and global opportunities.
          </p>
          <div className="mt-11 flex flex-col gap-4 sm:flex-row">
            <InquiryButton>Book Free Counselling</InquiryButton>
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
          <div className="grid gap-4 rounded-2xl border border-white/15 bg-[#16325B]/32 p-5 shadow-2xl shadow-black/10 backdrop-blur-md">
            {[
              { item: "Study Abroad Guidance", icon: GraduationCap },
              { item: "University Admissions", icon: Building2 },
              { item: "Student and Work Visa Assistance", icon: FileCheck2 },
              { item: "Immigration and PR Guidance", icon: Landmark },
            ].map(({ item, icon: Icon }) => (
                <div key={item} className="flex items-center gap-4 border-b border-white/12 py-4 text-sm font-semibold text-white/88 last:border-b-0">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-[#B08D57] text-white shadow-sm">
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
