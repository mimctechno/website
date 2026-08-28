"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Clock,
  MessageSquare,
  CheckCircle2,
  X,
  ArrowRight,
  ShieldCheck,
  Building,
  Sparkles,
  MapPin,
  Lock,
} from "lucide-react";
import Layout from "../components/Layout";
import { IndiaFlag, CanadaFlag } from "../components/ui/FlagIcon";

const contactMethods = [
  {
    flag: <CanadaFlag className="w-5 h-3.5" />,
    label: "North America Hub (Toronto)",
    role: "Enterprise Strategy & Sales",
    value: "+1 416-857-8831",
    href: "tel:+14168578831",
    hours: "9:00 AM – 6:00 PM EST",
  },
  {
    flag: <IndiaFlag className="w-5 h-3.5" />,
    label: "South Asia Hub (Delhi NCR)",
    role: "Core Engineering & Tally Center",
    value: "+91 925941-8994",
    href: "tel:+919259418994",
    hours: "9:30 AM – 6:30 PM IST",
  },
  {
    icon: Mail,
    label: "Direct Email Dispatch",
    role: "Architecture Inquiries",
    value: "info@mimctechnologies.com",
    href: "mailto:info@mimctechnologies.com",
    hours: "Sub-2h response during business hours",
  },
  {
    icon: MessageSquare,
    label: "Official WhatsApp Line",
    role: "Fastest Technical Response",
    value: "+1 (416) 857-8831",
    href: "https://wa.me/14168578831?text=Hi%20MIMC%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20new%20software%20project%20and%20request%20an%20enterprise%20consultation.",
    hours: "Live 24/7 routing bot",
    highlight: true,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch("https://formsubmit.co/ajax/info@mimctechnologies.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
    } catch {
      // Fallback gracefully
    }
    setSending(false);
    setSubmitted(true);
    form.reset();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact MIMC Technologies",
    url: "https://www.mimctechnologies.com/contact",
    description:
      "Connect with MIMC Technologies enterprise software architects. Offices in Canada and India.",
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: "MIMC Technologies",
    url: "https://www.mimctechnologies.com",
    logo: "https://www.mimctechnologies.com/logo.webp",
    email: "info@mimctechnologies.com",
    telephone: ["+14168578831", "+919259418994"],
    openingHours: "Mo-Fr 09:00-18:00",
    priceRange: "$$",
    currenciesAccepted: "USD, CAD, INR",
    paymentAccepted: "Credit Card, Bank Transfer, UPI",
    address: [
      {
        "@type": "PostalAddress",
        addressCountry: "CA",
        addressRegion: "Ontario",
        addressLocality: "Toronto",
      },
      {
        "@type": "PostalAddress",
        addressCountry: "IN",
        addressRegion: "Delhi",
      },
    ],
  };

  return (
    <Layout
      title="Contact Enterprise Architects | MIMC Technologies"
      description="Connect with MIMC Technologies. Direct software engineering advisory in Canada and India. 24-hour response SLA for ERP, CRM, WhatsApp API, and Tally integrations."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* ===================== HEADER ===================== */}
        <section className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/60 text-teal-800 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
            DIRECT ENGINEERING CONSULTATION
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171717] leading-[1.08] mb-4">
            Let's Engineer Your <br />
            <span className="text-teal-700">Enterprise Architecture.</span>
          </h1>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
            Directly consult with senior software architects. Whether you
            require a custom ERP deployment, Meta WhatsApp API pipelines, or
            Tally integration — our engineering team responds within 24 hours.
          </p>
        </section>

        {/* ===================== MAIN GRID ===================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Communication Hubs */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest mb-2">
              [ GLOBAL OPERATING HUBS ]
            </div>

            {contactMethods.map((m, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all ${
                  m.highlight
                    ? "bg-teal-50/50 border-teal-200/80 shadow-xs hover:border-teal-400"
                    : "bg-white border-[#E8E8E2] shadow-2xs hover:border-teal-300"
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-white border border-[#E8E8E2] shrink-0 shadow-2xs flex items-center justify-center">
                    {m.flag ? (
                      m.flag
                    ) : m.icon ? (
                      <m.icon className="w-4 h-4 text-teal-700" />
                    ) : null}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <span className="text-xs font-bold text-[#171717] font-heading truncate">
                        {m.label}
                      </span>
                      {m.highlight && (
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded-full">
                          FASTEST
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-neutral-500 mb-2">
                      {m.role}
                    </p>
                    {m.href ? (
                      <a
                        href={m.href}
                        target={
                          m.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          m.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-sm font-bold text-teal-700 hover:text-teal-900 transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>{m.value}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-sm font-bold text-[#171717]">
                        {m.value}
                      </span>
                    )}
                    <div className="text-[10px] font-mono text-neutral-400 mt-2 flex items-center gap-1.5 pt-2 border-t border-neutral-100">
                      <Clock className="w-3 h-3 text-neutral-400" />
                      <span>{m.hours}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Security Guarantee Card */}
            <div className="p-5 rounded-2xl bg-[#111111] text-white space-y-3 shadow-lg">
              <div className="flex items-center gap-2 text-teal-400 text-xs font-mono font-bold uppercase tracking-wider">
                <Lock className="w-4 h-4" />
                <span>CONFIDENTIALITY & NDA</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                All client architectural specifications, financial workflows,
                and database structures are governed under mutual Non-Disclosure
                Agreements.
              </p>
            </div>
          </div>

          {/* Right Column: High-Converting Consultation Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#E8E8E2] shadow-xl relative overflow-hidden">
              <div className="mb-6 pb-4 border-b border-[#E8E8E2] flex items-center justify-between">
                <div>
                  <h2 className="font-heading font-bold text-xl text-[#171717]">
                    Project Discovery Brief
                  </h2>
                  <p className="text-xs text-neutral-500">
                    Fill out the form below to receive a formal architectural
                    scope & timeline.
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200/60 hidden sm:inline-block">
                  SLA: &lt; 24 HOURS
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* FormSubmit Honeypot */}
                <input type="text" name="_honey" className="hidden" />
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_subject"
                  value="New Enterprise Architecture Inquiry — MIMC"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5 uppercase font-mono tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Alexander Wright"
                      className="w-full bg-[#FAFAF8] border border-[#E8E8E2] rounded-xl px-4 py-3 text-sm text-[#171717] placeholder:text-neutral-400 focus:outline-none focus:border-teal-600 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5 uppercase font-mono tracking-wider">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="alex@company.com"
                      className="w-full bg-[#FAFAF8] border border-[#E8E8E2] rounded-xl px-4 py-3 text-sm text-[#171717] placeholder:text-neutral-400 focus:outline-none focus:border-teal-600 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5 uppercase font-mono tracking-wider">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="e.g. Apex Global Corp"
                      className="w-full bg-[#FAFAF8] border border-[#E8E8E2] rounded-xl px-4 py-3 text-sm text-[#171717] placeholder:text-neutral-400 focus:outline-none focus:border-teal-600 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5 uppercase font-mono tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 019-2834"
                      className="w-full bg-[#FAFAF8] border border-[#E8E8E2] rounded-xl px-4 py-3 text-sm text-[#171717] placeholder:text-neutral-400 focus:outline-none focus:border-teal-600 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1.5 uppercase font-mono tracking-wider">
                    Primary Architecture Focus *
                  </label>
                  <select
                    name="service"
                    required
                    className="w-full bg-[#FAFAF8] border border-[#E8E8E2] rounded-xl px-4 py-3 text-sm text-[#171717] focus:outline-none focus:border-teal-600 focus:bg-white transition-all"
                  >
                    <option value="">Select an engineering solution...</option>
                    <option value="Enterprise ERP / CRM Development">
                      Custom Enterprise ERP & CRM Software
                    </option>
                    <option value="Official WhatsApp Business API">
                      Official Meta WhatsApp Business API & Bots
                    </option>
                    <option value="Tally Prime WhatsApp Integration">
                      Tally Prime WhatsApp Invoicing Sync
                    </option>
                    <option value="Next.js Web & Cloud Architecture">
                      Next.js Web Engineering & Technical SEO
                    </option>
                    <option value="IT Architecture Consulting">
                      IT Architecture Advisory & System Audits
                    </option>
                    <option value="Other Enterprise Requirement">
                      Other Bespoke Engineering
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1.5 uppercase font-mono tracking-wider">
                    Project Scope & Operational Details *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe your current system bottlenecks, volume requirements, timeline expectations, or desired integrations..."
                    className="w-full bg-[#FAFAF8] border border-[#E8E8E2] rounded-xl px-4 py-3 text-sm text-[#171717] placeholder:text-neutral-400 focus:outline-none focus:border-teal-600 focus:bg-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full rounded-xl bg-[#111111] hover:bg-teal-700 text-white font-semibold text-sm py-4 px-6 shadow-md transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50 cursor-pointer"
                >
                  {sending ? (
                    <span>Submitting Brief...</span>
                  ) : (
                    <>
                      <span>Submit Architecture Brief</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Thank-You Confirmation Modal */}
      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 sm:p-10 max-w-md w-full border border-[#E8E8E2] shadow-2xl text-center relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSubmitted(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-800 p-2 rounded-full hover:bg-neutral-100 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 mx-auto mb-5 shadow-xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs font-mono font-bold text-teal-800 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200/50 inline-block mb-3">
              TRANSMISSION RECEIVED
            </span>

            <h3 className="text-2xl font-bold font-heading text-[#171717] mb-2">
              Discovery Brief Submitted!
            </h3>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
              Thank you for connecting with MIMC Technologies. Our lead software
              architect will review your project brief and follow up with a
              technical roadmap within 24 hours.
            </p>

            <button
              onClick={() => setSubmitted(false)}
              className="w-full py-3.5 px-6 rounded-xl bg-[#111111] hover:bg-teal-700 text-white text-xs font-semibold uppercase tracking-wider transition-all"
            >
              Return to Website
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}
