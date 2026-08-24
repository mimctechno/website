"use client";

import {
  MapPin,
  Shield,
  Globe,
  Clock,
  Users,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Lock,
  Code2,
  Zap,
  Building,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Layout from "../components/Layout";
import { IndiaFlag, CanadaFlag } from "../components/ui/FlagIcon";

const stats = [
  { value: "10+ Yrs", label: "Enterprise Experience" },
  { value: "500+", label: "Systems Deployed Globally" },
  { value: "2", label: "Primary Operating Hubs" },
  { value: "99.99%", label: "Infrastructure Uptime SLA" },
];

const principles = [
  {
    icon: Code2,
    title: "100% Code Ownership",
    desc: "We believe enterprises should own their tools. You receive full source code, unencumbered intellectual property, and direct database control with zero per-user subscription fees.",
  },
  {
    icon: Shield,
    title: "Bank-Grade Privacy & Security",
    desc: "Every system is built with strict role-based access control, SOC2 compliance standards, encrypted storage, and automated failover recovery pipelines.",
  },
  {
    icon: Zap,
    title: "Integration-First Engineering",
    desc: "Software should never exist in a silo. We build native event-driven webhooks connecting custom ERPs, Tally Prime, and official Meta WhatsApp APIs seamlessly.",
  },
  {
    icon: Users,
    title: "Direct Senior Architect Access",
    desc: "No junior account managers or generic support tickets. You collaborate directly with experienced software engineers who understand your exact operational workflow.",
  },
];

const hubs = [
  {
    city: "Toronto, Canada",
    flag: <CanadaFlag className="w-5 h-3.5" />,
    role: "Global Headquarters & Enterprise Strategy",
    address: "Toronto Financial & Tech Corridor, Ontario, Canada",
    phone: "+1 416-857-8831",
    focus: [
      "Enterprise Solution Architecture",
      "North American Client Relations",
      "Executive Technical Advisory",
      "Global Infrastructure Governance",
    ],
  },
  {
    city: "Delhi NCR, India",
    flag: <IndiaFlag className="w-5 h-3.5" />,
    role: "Core Engineering & API Innovation Hub",
    address: "Technology & Software Development Park, India",
    phone: "+91 925941-8994",
    focus: [
      "Custom ERP & CRM Core Engineering",
      "Official Meta WhatsApp API Pipelines",
      "Tally Prime Connector & TDL R&D",
      "Continuous Monitoring & 24/7 Support",
    ],
  },
];

export default function About() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://www.mimctechnologies.com/about#webpage",
        name: "About MIMC Technologies",
        description:
          "MIMC Technologies is an enterprise software consultancy and integrations firm with operating hubs in Canada and India.",
        url: "https://www.mimctechnologies.com/about",
      },
      {
        "@type": "Organization",
        "@id": "https://www.mimctechnologies.com/#organization",
        name: "MIMC Technologies",
        url: "https://www.mimctechnologies.com",
        logo: "https://www.mimctechnologies.com/logo.webp",
        foundingDate: "2014",
        numberOfEmployees: { "@type": "QuantitativeValue", value: "50" },
        areaServed: ["IN", "CA", "US", "AE", "SG", "GB"],
      },
    ],
  };

  return (
    <Layout
      title="About Us — Enterprise Software Consultancy | MIMC"
      description="Learn about MIMC Technologies — an enterprise software consultancy with hubs in Canada and India, specializing in ERP, CRM, WhatsApp API, and Tally integrations."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* ===================== HERO SECTION ===================== */}
        <section className="mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/60 text-teal-800 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
            FOUNDED 2014 · 10+ YEARS OF EXCELLENCE
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171717] leading-[1.08] mb-6">
            Engineering Enterprise <br />
            <span className="text-teal-700">Software for Global Scale.</span>
          </h1>

          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
            MIMC Technologies was founded on a simple premise: growing
            enterprises shouldn't be trapped in rigid, expensive, per-seat SaaS
            software that limits their workflow. We design, build, and deploy
            high-performance custom ERPs, official WhatsApp API communication
            engines, and native Tally bridges that give businesses complete
            control over their operations.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#111111] hover:bg-teal-700 text-white font-semibold text-sm shadow-xs transition-all active:scale-95"
            >
              <span>Connect with an Architect</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-[#F4F4F0] text-neutral-800 font-semibold text-sm border border-[#E8E8E2] transition-all"
            >
              <span>Explore Capabilities</span>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
            </Link>
          </div>
        </section>

        {/* ===================== METRICS STRIP ===================== */}
        <section className="mb-16 rounded-2xl bg-white border border-[#E8E8E2] p-6 sm:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#E8E8E2]">
            {stats.map((s, idx) => (
              <div key={idx} className="pt-4 md:pt-0 px-4">
                <div className="font-heading font-extrabold text-2xl sm:text-3xl text-teal-700 mb-1">
                  {s.value}
                </div>
                <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== CORE PRINCIPLES ===================== */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
              [ OUR PHILOSOPHY ]
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717]">
              Engineering Principles That Drive Every Engagement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p, idx) => (
              <div
                key={idx}
                className="precision-card rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 mb-4">
                    <p.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#171717] mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== DUAL GLOBAL HUBS ===================== */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
              [ GLOBAL NETWORK ]
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717]">
              Dual Operating Hubs Across North America & South Asia
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hubs.map((hub, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E8E2] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-1 rounded-md bg-[#FAFAF8] border border-[#E8E8E2] inline-block">
                      {hub.flag}
                    </div>
                    <span className="font-mono text-xs font-bold text-teal-800 uppercase tracking-wider">
                      {hub.role}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-2xl text-[#171717] mb-2">
                    {hub.city}
                  </h3>

                  <p className="text-xs text-neutral-500 mb-6 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>{hub.address}</span>
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-[#E8E8E2]">
                    <div className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
                      PRIMARY ENGINEERING FOCUS
                    </div>
                    {hub.focus.map((item, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center gap-2 text-xs font-medium text-neutral-700"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E8E8E2] flex items-center justify-between">
                  <a
                    href={`tel:${hub.phone.replace(/[^+\d]/g, "")}`}
                    className="text-xs font-bold text-teal-700 hover:text-teal-900 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{hub.phone}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-[10px] font-mono text-neutral-400">
                    DIRECT HUB LINE
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== CTA BANNER ===================== */}
        <section className="rounded-3xl bg-[#111111] text-white p-8 sm:p-12 border border-neutral-800 shadow-xl text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block">
              [ COLLABORATE WITH US ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
              Ready to Upgrade Your Enterprise Infrastructure?
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pb-2">
              Book a 30-minute discovery consultation with a senior software
              architect. We'll analyze your workflows and provide actionable
              recommendations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm shadow-md transition-all active:scale-95"
              >
                <span>Schedule Discovery Session</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/whatsapp-api"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 font-semibold text-sm border border-neutral-700 transition-all"
              >
                <span>Explore WhatsApp API</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
