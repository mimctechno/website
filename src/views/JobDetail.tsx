"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle2,
  Send,
  Building,
  ShieldCheck,
  X,
} from "lucide-react";
import Link from "next/link";
import Layout from "../components/Layout";
import { type Job } from "../data/jobs";

export default function JobDetail({ job }: { job: Job }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleApply(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch("https://formsubmit.co/ajax/hr@mimctechnologies.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
    } catch {
      // Fallback
    }
    setSubmitting(false);
    setSubmitted(true);
    form.reset();
  }

  const jobSchema = {
    "@context": "https://schema.org",
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
  };

  return (
    <Layout
      title={`${job.title} — Careers | MIMC Technologies`}
      description={job.summary}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobSchema) }}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Back Link */}
        <Link
          href="/careers"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-teal-800 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Open Roles</span>
        </Link>

        {/* ===================== HERO HEADER ===================== */}
        <header className="mb-12 pb-8 border-b border-[#E8E8E2]">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200/50">
              {job.id} · {job.department}
            </span>
            <span className="text-xs font-mono text-neutral-500 bg-white border border-[#E8E8E2] px-2.5 py-0.5 rounded flex items-center gap-1">
              <MapPin className="w-3 h-3 text-neutral-400" />
              {job.location}
            </span>
            <span className="text-xs font-mono text-neutral-500 bg-white border border-[#E8E8E2] px-2.5 py-0.5 rounded flex items-center gap-1">
              <Briefcase className="w-3 h-3 text-neutral-400" />
              {job.type}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171717] leading-[1.15] mb-4 font-heading">
            {job.title}
          </h1>

          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-4xl">
            {job.summary}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-600 bg-[#FAFAF8] border border-[#E8E8E2] p-4 rounded-xl">
            <div>
              <span className="text-neutral-400 uppercase">Experience:</span>{" "}
              <strong className="text-neutral-800">{job.experience}</strong>
            </div>
            <div className="h-4 w-px bg-neutral-200 hidden sm:block" />
            <div>
              <span className="text-neutral-400 uppercase">Compensation:</span>{" "}
              <strong className="text-teal-700">{job.compensation}</strong>
            </div>
          </div>
        </header>

        {/* ===================== MAIN CONTENT & APPLICATION ===================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Responsibilities & Requirements */}
          <div className="lg:col-span-7 space-y-10">
            {/* Responsibilities */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold font-heading text-[#171717] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-600" />
                <span>Key Responsibilities</span>
              </h2>
              <div className="space-y-3">
                {job.responsibilities.map((resp, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E8E8E2]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">
                      {resp}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Requirements */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold font-heading text-[#171717] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-600" />
                <span>Qualifications & Technical Background</span>
              </h2>
              <div className="space-y-3">
                {job.requirements.map((req, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E8E8E2]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">
                      {req}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold font-heading text-[#171717] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-600" />
                <span>What We Offer & Culture Perks</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {job.benefits.map((b, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[#FAFAF8] border border-[#E8E8E2] text-xs text-neutral-700 font-medium leading-relaxed"
                  >
                    ✓ {b}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Direct Application Form */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E8E2] shadow-xl sticky top-28 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
                  [ DIRECT APPLICATION ]
                </span>
                <h3 className="text-xl font-bold font-heading text-[#171717]">
                  Apply for this Role
                </h3>
                <p className="text-xs text-neutral-500 mt-1">
                  Our engineering leads review every submission directly within
                  48 hours.
                </p>
              </div>

              <form onSubmit={handleApply} className="space-y-4">
                <input type="text" name="_honey" className="hidden" />
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_subject"
                  value={`Job Application: ${job.title} (${job.id})`}
                />

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1 font-mono uppercase">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Jane Doe"
                    className="w-full bg-[#FAFAF8] border border-[#E8E8E2] rounded-xl px-3.5 py-2.5 text-xs text-[#171717] focus:outline-none focus:border-teal-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1 font-mono uppercase">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="jane@domain.com"
                    className="w-full bg-[#FAFAF8] border border-[#E8E8E2] rounded-xl px-3.5 py-2.5 text-xs text-[#171717] focus:outline-none focus:border-teal-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1 font-mono uppercase">
                    LinkedIn / GitHub / Portfolio URL *
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    required
                    placeholder="https://linkedin.com/in/username"
                    className="w-full bg-[#FAFAF8] border border-[#E8E8E2] rounded-xl px-3.5 py-2.5 text-xs text-[#171717] focus:outline-none focus:border-teal-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1 font-mono uppercase">
                    Why are you a strong fit? *
                  </label>
                  <textarea
                    name="cover_letter"
                    required
                    rows={4}
                    placeholder="Briefly highlight your relevant experience and projects..."
                    className="w-full bg-[#FAFAF8] border border-[#E8E8E2] rounded-xl px-3.5 py-2.5 text-xs text-[#171717] focus:outline-none focus:border-teal-600 focus:bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#111111] hover:bg-teal-700 text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-50"
                >
                  {submitting ? (
                    <span>Submitting Application...</span>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>

              <div className="pt-4 border-t border-[#E8E8E2] flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                <span>Direct HR Email:</span>
                <a
                  href="mailto:hr@mimctechnologies.com"
                  className="text-teal-700 hover:text-teal-900 font-semibold"
                >
                  hr@mimctechnologies.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 sm:p-10 max-w-md w-full border border-[#E8E8E2] shadow-2xl text-center relative">
            <button
              onClick={() => setSubmitted(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-800 p-2 rounded-full hover:bg-neutral-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 mx-auto mb-5">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold font-heading text-[#171717] mb-2">
              Application Received!
            </h3>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
              Thank you for applying for <strong>{job.title}</strong>. Our
              engineering leads will review your portfolio and reach out
              directly.
            </p>

            <button
              onClick={() => setSubmitted(false)}
              className="w-full py-3.5 px-6 rounded-xl bg-[#111111] hover:bg-teal-700 text-white text-xs font-semibold uppercase tracking-wider transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}
