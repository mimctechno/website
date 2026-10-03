"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  Clock,
  Shield,
  Code2,
  MessageSquare,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { enrichFormDataWithAttribution } from "../../utils/leadAttribution";

interface ServiceInquirySectionProps {
  serviceId: string;
  serviceTitle: string;
  subtitle?: string;
  scopePills?: string[];
  placeholder?: string;
}

export default function ServiceInquirySection({
  serviceId,
  serviceTitle,
  subtitle,
  scopePills = [],
  placeholder,
}: ServiceInquirySectionProps) {
  const [selectedPills, setSelectedPills] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const togglePill = (pill: string) => {
    setSelectedPills((prev) => {
      const exists = prev.includes(pill);
      const next = exists ? prev.filter((p) => p !== pill) : [...prev, pill];
      return next;
    });
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    let formData = new FormData(form);

    // Append selected scope pills if any
    if (selectedPills.length > 0) {
      formData.append("selected_scope_modules", selectedPills.join(", "));
    }

    // Attach automated attribution & page metadata
    formData = enrichFormDataWithAttribution(formData);

    try {
      await fetch("https://formsubmit.co/ajax/info@mimctechnologies.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      setSubmitted(true);
      form.reset();
      setSelectedPills([]);
      setMessage("");
    } catch {
      // Fallback graceful display
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  const defaultPlaceholder =
    placeholder ||
    `Describe your project requirements (e.g. key workflows, expected user volume, current software or legacy systems to integrate with)...`;

  const defaultSubtitle =
    subtitle ||
    `Connect directly with our principal engineering team. We deliver technical scoping, architecture blueprints, and fixed-price proposals within 24 hours.`;

  return (
    <section
      id="inquire"
      className="my-16 sm:my-20 rounded-3xl bg-gradient-to-br from-[#FAFAF8] via-white to-[#F5F5F0] border border-[#E8E8E2] p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden"
    >
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Value Proposition & Trust Badges */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-mono font-bold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
            DIRECT ARCHITECT CONSULTATION
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#171717] tracking-tight font-heading leading-tight">
              Request an Architecture Brief for {serviceTitle}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
              {defaultSubtitle}
            </p>
          </div>

          {/* Value Highlights */}
          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E8E8E2]">
              <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold font-mono uppercase text-[#171717]">
                  &lt; 24-Hour SLA Delivery
                </h4>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Full scope breakdown, estimated timelines, and tech stack
                  recommendations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E8E8E2]">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold font-mono uppercase text-[#171717]">
                  100% IP & Code Ownership
                </h4>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Bilateral NDA, private repo deployment, and zero proprietary
                  vendor lock-in.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E8E8E2]">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold font-mono uppercase text-[#171717]">
                  Direct Senior Engineers
                </h4>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Consult with principal architects in Canada & India, not sales
                  brokers.
                </p>
              </div>
            </div>
          </div>

          {/* Fast WhatsApp Route */}
          <div className="pt-2">
            <a
              href={`https://wa.me/14168578831?text=Hi%20MIMC%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20new%20project%20for%20${encodeURIComponent(serviceTitle)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-teal-800 hover:text-teal-950 transition-colors group"
            >
              <MessageSquare className="w-4 h-4 text-teal-600" />
              <span>Prefer instant messaging? Chat on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Column: High-Converting Form Card */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl border border-[#E8E8E2] p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold font-heading text-[#171717]">
                    Inquiry Dispatched Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Thank you. Our principal solutions architect for{" "}
                    <strong>{serviceTitle}</strong> is reviewing your
                    requirements and will reach out within 24 hours.
                  </p>
                </div>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-[#E8E8E2] text-xs font-mono font-bold text-neutral-700 hover:bg-[#FAFAF8] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                  <a
                    href={`https://wa.me/14168578831?text=Hi%20MIMC%2C%20I%20just%20submitted%20an%20inquiry%20for%20${encodeURIComponent(serviceTitle)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-teal-800 text-white text-xs font-mono font-bold hover:bg-teal-900 transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    Chat with Architect Now
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* FormSubmit Configuration */}
                <input type="text" name="_honey" className="hidden" />
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_subject"
                  value={`[${serviceTitle} Inquiry] Lead via Website — MIMC`}
                />
                <input type="hidden" name="service" value={serviceTitle} />
                <input type="hidden" name="service_id" value={serviceId} />

                {/* Scope Quick-Pills / Fast Selection */}
                {scopePills.length > 0 && (
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-2 font-mono uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                      Quick Scope Selectors (Click to tag requirements)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {scopePills.map((pill) => {
                        const isSelected = selectedPills.includes(pill);
                        return (
                          <button
                            key={pill}
                            type="button"
                            onClick={() => togglePill(pill)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all text-left flex items-center gap-1.5 ${
                              isSelected
                                ? "bg-teal-800 text-white shadow-sm ring-2 ring-teal-800/20"
                                : "bg-[#FAFAF8] text-neutral-700 border border-[#E8E8E2] hover:border-teal-600/60 hover:bg-white"
                            }`}
                          >
                            <span>{isSelected ? "✓" : "+"}</span>
                            <span>{pill}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5 font-mono uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Alexander Wright / Priya Sharma"
                      className="w-full bg-[#FAFAF8] border border-[#E8E8E2] rounded-xl px-4 py-3 text-sm text-[#171717] placeholder:text-neutral-400 focus:outline-none focus:border-teal-700 focus:bg-white focus:ring-2 focus:ring-teal-700/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5 font-mono uppercase tracking-wider">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      className="w-full bg-[#FAFAF8] border border-[#E8E8E2] rounded-xl px-4 py-3 text-sm text-[#171717] placeholder:text-neutral-400 focus:outline-none focus:border-teal-700 focus:bg-white focus:ring-2 focus:ring-teal-700/10 transition-all"
                    />
                  </div>
                </div>

                {/* Phone & Company Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5 font-mono uppercase tracking-wider">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +1 (416) 555-0199 / +91 98765 43210"
                      className="w-full bg-[#FAFAF8] border border-[#E8E8E2] rounded-xl px-4 py-3 text-sm text-[#171717] placeholder:text-neutral-400 focus:outline-none focus:border-teal-700 focus:bg-white focus:ring-2 focus:ring-teal-700/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5 font-mono uppercase tracking-wider">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="e.g. Acme Corp / Apex Global Enterprises"
                      className="w-full bg-[#FAFAF8] border border-[#E8E8E2] rounded-xl px-4 py-3 text-sm text-[#171717] placeholder:text-neutral-400 focus:outline-none focus:border-teal-700 focus:bg-white focus:ring-2 focus:ring-teal-700/10 transition-all"
                    />
                  </div>
                </div>

                {/* Project Message / Requirements */}
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1.5 font-mono uppercase tracking-wider">
                    Project Scope / Specific Requirements *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={defaultPlaceholder}
                    className="w-full bg-[#FAFAF8] border border-[#E8E8E2] rounded-xl px-4 py-3 text-sm text-[#171717] placeholder:text-neutral-400 focus:outline-none focus:border-teal-700 focus:bg-white focus:ring-2 focus:ring-teal-700/10 transition-all resize-y min-h-[90px]"
                  />
                </div>

                {/* Submit Action & Guarantee */}
                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-teal-800 hover:bg-teal-900 active:bg-teal-950 text-white font-mono font-bold text-sm py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {submitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Transmitting Scope Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Request Architecture Scope & Proposal</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-neutral-500 text-center font-mono">
                    🔒 Strict Bilateral NDA • No Spam Guarantee • 100% IP
                    Ownership
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
