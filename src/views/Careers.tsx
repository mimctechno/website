"use client";

import { useState } from "react";
import {
  ArrowRight,
  Briefcase,
  MapPin,
  Code2,
  MessageSquare,
  Target,
  Sparkles,
  Users,
  HeartHandshake,
  CheckCircle2,
  DollarSign,
  Globe,
} from "lucide-react";
import Link from "next/link";
import Layout from "../components/Layout";
import { JOBS } from "../data/jobs";

const DEPARTMENTS = [
  "All Departments",
  "Engineering",
  "Cloud Infrastructure",
  "Sales & Growth",
];

const benefits = [
  {
    title: "Remote-First Architecture",
    desc: "Work flexibly from anywhere across Canada, India, or globally with asynchronous communication tools.",
  },
  {
    title: "Competitive Compensation",
    desc: "Top-of-market compensation packages with uncapped performance bonuses and equity alignment.",
  },
  {
    title: "Annual Hardware Stipend",
    desc: "Top-tier MacBook Pro, 4K monitors, ergonomic workspace allowances, and home office setups.",
  },
  {
    title: "Comprehensive Health",
    desc: "Full medical, dental, vision, and mental wellness coverage for you and your family.",
  },
];

export default function Careers() {
  const [selectedDept, setSelectedDept] = useState("All Departments");

  const filteredJobs = JOBS.filter(
    (job) =>
      selectedDept === "All Departments" || job.department === selectedDept,
  );

  const careersSchema = {
    "@context": "https://schema.org",
    "@graph": JOBS.map((job) => ({
      "@type": "JobPosting",
      title: job.title,
      description: job.summary,
      datePosted: "2026-07-29",
      validThrough: "2026-12-31",
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: "MIMC Technologies",
        sameAs: "https://www.mimctechnologies.com",
        logo: "https://www.mimctechnologies.com/logo.webp",
      },
      jobLocationType: job.location.toLowerCase().includes("remote")
        ? "TELECOMMUTE"
        : undefined,
    })),
  };

  return (
    <Layout
      title="Careers — Join the Engineering Team | MIMC Technologies"
      description="Explore open engineering, product, and sales positions at MIMC Technologies. Remote-first flexibility across Canada and India with top-tier compensation."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(careersSchema) }}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* ===================== HERO SECTION ===================== */}
        <section className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/60 text-teal-800 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
            WE ARE HIRING · REMOTE-FIRST CULTURE
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171717] leading-[1.08] mb-4">
            Build Mission-Critical <br />
            <span className="text-teal-700">Enterprise Software.</span>
          </h1>

          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
            We are looking for exceptional software engineers, solutions
            architects, and enterprise sales directors to engineer
            high-throughput ERPs and Meta WhatsApp API infrastructure.
          </p>
        </section>

        {/* ===================== CULTURE & BENEFITS STRIP ===================== */}
        <section className="mb-16">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
              [ PERKS & CULTURE ]
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-[#171717]">
              Why Senior Engineers Choose MIMC
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#E8E8E2] shadow-2xs space-y-2"
              >
                <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 font-bold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="font-heading font-bold text-sm text-[#171717]">
                  {b.title}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== JOB LISTINGS DIRECTORY ===================== */}
        <section className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E8E8E2] mb-8">
            <div>
              <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
                [ OPEN ROLES ]
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-[#171717]">
                Available Positions ({filteredJobs.length})
              </h2>
            </div>

            {/* Department Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
              {DEPARTMENTS.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedDept === dept
                      ? "bg-[#111111] text-white"
                      : "bg-white text-neutral-600 hover:text-neutral-900 border border-[#E8E8E2]"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job Cards */}
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <Link
                key={job.id}
                href={`/careers/${job.slug}`}
                className="precision-card rounded-2xl p-6 sm:p-8 block group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200/50">
                        {job.id} · {job.department}
                      </span>
                      <span className="text-xs font-mono text-neutral-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-neutral-400" />
                        {job.location}
                      </span>
                      <span className="text-xs font-mono text-neutral-500 flex items-center gap-1">
                        <Briefcase className="w-3 h-3 text-neutral-400" />
                        {job.type}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-xl text-[#171717] group-hover:text-teal-800 transition-colors">
                      {job.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-2 max-w-4xl">
                      {job.summary}
                    </p>

                    <div className="text-xs font-mono text-neutral-500 pt-1">
                      <span className="text-neutral-400">Compensation:</span>{" "}
                      <strong className="text-teal-700 font-semibold">
                        {job.compensation}
                      </strong>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-2 text-xs font-bold text-teal-700 group-hover:text-teal-900 bg-teal-50/50 group-hover:bg-teal-50 px-4 py-2.5 rounded-xl border border-teal-200/40 transition-colors">
                    <span>View Role & Apply</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ===================== GENERAL APPLICATION CTA ===================== */}
        <section className="rounded-3xl bg-[#111111] text-white p-8 sm:p-12 border border-neutral-800 shadow-xl text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block">
              [ SPONTANEOUS INQUIRY ]
            </span>
            <h2 className="text-3xl font-bold font-heading text-white">
              Don't See Your Specific Role Listed?
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pb-2">
              If you are a high-caliber engineer, solutions architect, or growth
              leader, we always make room for top 1% talent.
            </p>
            <a
              href="mailto:hr@mimctechnologies.com?subject=General%20Application%20—%20Engineering%20Talent"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm shadow-md transition-all active:scale-95"
            >
              <span>Email Your Resume to HR</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
