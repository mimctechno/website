"use client";

import { useState } from "react";
import {
  Cloud,
  CheckCircle2,
  Zap,
  Clock,
  Shield,
  Laptop,
  Printer,
  Lock,
  ArrowRight,
  Plus,
  Minus,
  Send,
  Sparkles,
  Server,
  Users,
  HardDrive,
  RefreshCw,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../../components/Layout";
import RelatedServices from "../../components/RelatedServices";
import ServiceRegionalHubs from "../../components/ServiceRegionalHubs";
import ServiceSchema from "../../components/seo/ServiceSchema";
import ServiceBadges from "../../components/ui/ServiceBadges";

const features = [
  {
    icon: Laptop,
    title: "Access on Mac, PC, iPad & Browser",
    desc: "Run full Tally Prime directly on your MacBook, iMac, tablet, or web browser. No complicated software setup required on your device.",
  },
  {
    icon: Zap,
    title: "Super-Fast NVMe SSD Speed",
    desc: "High-frequency cloud CPU cores and fast NVMe storage eliminate lag. Open multi-year ledgers, stock summaries, and balance sheets in seconds.",
  },
  {
    icon: Shield,
    title: "100% Safe from Ransomware & Crashes",
    desc: "Your data is protected in secure Tier-4 ISO-certified data centers with automated daily snapshots. If a local laptop breaks or gets stolen, your data is untouched.",
  },
  {
    icon: Printer,
    title: "1-Click Local Office Printing",
    desc: "Print invoices, vouchers, and tax reports directly to your regular office printer over Wi-Fi, USB, or LAN with zero hassle.",
  },
  {
    icon: Users,
    title: "Multi-User & Multi-Branch Sync",
    desc: "Connect head office, factory, warehouse, and traveling accountants to one live company file at the same time with zero sync errors.",
  },
  {
    icon: Clock,
    title: "Ready in Under 2 Hours + Free Demo",
    desc: "Our engineers migrate your existing Tally data seamlessly with zero downtime. Test drive the speed and features with a free live demo.",
  },
];

const comparison = [
  {
    feature: "Remote Access",
    local: "Locked to office desktop computer",
    cloud: "Access anywhere on Mac, PC, iPad & Browser",
  },
  {
    feature: "Data Safety & Backups",
    local: "Manual pen drives (risk of virus & data loss)",
    cloud: "Automated daily cloud backups in secure data centers",
  },
  {
    feature: "Multi-User Speed",
    local: "Slows down and freezes when 4+ users connect",
    cloud: "High-speed NVMe servers handle 10+ users smoothly",
  },
  {
    feature: "Hardware Maintenance",
    local: "Expensive local server CPU, UPS & AMC repairs",
    cloud: "Zero hardware maintenance. 99.99% uptime SLA",
  },
  {
    feature: "Multi-Branch Operations",
    local: "Manual data syncing with frequent mismatch errors",
    cloud: "Single live database for all branches in real-time",
  },
];

const migrationSteps = [
  {
    step: "01",
    title: "Share Your Tally Backup",
    desc: "Send us your latest backup file (.zip). We verify company integrity with strict non-disclosure security.",
  },
  {
    step: "02",
    title: "We Configure Your Dedicated Cloud",
    desc: "Our engineers deploy your private cloud server, configure user logins, printer drivers, and daily backups.",
  },
  {
    step: "03",
    title: "Log In & Start Working in 2 Hours",
    desc: "Your team receives secure login credentials. Open Tally Prime on any device and start working immediately.",
  },
];

const faqs = [
  {
    q: "How do I log into Tally on Cloud?",
    a: "You can log in either using our lightweight desktop launcher or directly through any modern web browser (Google Chrome, Safari, Microsoft Edge). Enter your secure credentials, and your full Tally Prime desktop launches in under 5 seconds.",
  },
  {
    q: "Can I print invoices on my existing office printer?",
    a: "Yes! Our cloud architecture supports automatic local printer pass-through. When you press Alt+P in Tally, your invoice prints instantly on your connected office printer (USB, Wi-Fi, or Network).",
  },
  {
    q: "Can multiple team members work on Tally at the exact same time?",
    a: "Yes. With Tally Gold (Multi-User), multiple accountants, billing staff, and warehouse managers across different locations can create vouchers and view reports simultaneously without lag or data conflicts.",
  },
  {
    q: "Is my accounting data safe from ransomware and virus attacks?",
    a: "Completely safe. Your Tally data is hosted in Tier-4 enterprise data centers with 256-bit SSL encryption, restricted user roles, and automatic offsite daily backups. Even if your physical office laptop gets infected by ransomware, your cloud data remains 100% secure.",
  },
  {
    q: "Can I run Tally on my Apple MacBook or iPad?",
    a: "Yes! Tally Prime natively only runs on Windows, but with our Tally on Cloud service, you can run the full, complete Tally Prime on any Mac, MacBook Air/Pro, iMac, iPad, or Android tablet with full keyboard shortcuts.",
  },
  {
    q: "What internet speed do I need?",
    a: "A standard 2 Mbps to 5 Mbps broadband or 4G/5G connection is more than enough for smooth, lag-free performance.",
  },
];

export default function TallyCloud() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch("https://formsubmit.co/ajax/info@mimctechnologies.com", {
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

  return (
    <Layout
      title="Tally on Cloud Provider | Fast Tally Prime Cloud Hosting on Mac & PC"
      description="Run Tally Prime securely on cloud. Access anywhere on Mac, Windows, tablet or browser. Fast NVMe speed, multi-user support & automatic daily backup. Free demo."
    >
      <ServiceSchema
        name="Tally on Cloud Hosting"
        description="Managed enterprise cloud hosting for Tally Prime and Tally.ERP 9. Run on Mac, Windows, iPad and web browser with automated daily backups."
        url="https://www.mimctechnologies.com/services/tally-cloud/"
        faqs={faqs}
        breadcrumbs={[
          { name: "Home", url: "https://www.mimctechnologies.com" },
          {
            name: "Services",
            url: "https://www.mimctechnologies.com/services",
          },
          {
            name: "Tally on Cloud",
            url: "https://www.mimctechnologies.com/services/tally-cloud/",
          },
        ]}
        rating={4.9}
        reviewCount={248}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* ===================== HERO SECTION ===================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/60 text-teal-800 text-xs font-mono font-bold uppercase tracking-wider">
                <Cloud className="w-3.5 h-3.5 text-teal-600" />
                <span>MANAGED TALLY CLOUD</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-700 text-xs font-mono">
                <Lock className="w-3 h-3 text-neutral-500" />
                <span>99.99% UPTIME SLA</span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171717] leading-[1.1] font-heading">
              Run Tally Prime on Cloud.{" "}
              <span className="text-teal-700">
                Access Anywhere on Mac & PC.
              </span>
            </h1>

            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Stop running Tally on slow office desktop computers. Host your
              Tally Prime on fast NVMe cloud servers with automatic daily
              backups, local printer support, and 100% ransomware protection.
            </p>

            {/* Quick Benefits Bullet Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-neutral-700 font-medium">
              {[
                "Work on MacBook, Windows, iPad & Browser",
                "Super-fast speed for 10+ concurrent users",
                "Automatic daily backups in Tier-4 data centers",
                "1-click printing on your local office printer",
                "100% safe from viruses and hard drive crashes",
                "Live in under 2 hours with free migration",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#demo-form"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-teal-700 hover:bg-teal-600 text-white font-semibold text-sm shadow-md transition-all active:scale-95"
              >
                <span>Book Free Live Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+919259418994"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-[#E8E8E2] hover:border-teal-300 text-neutral-800 font-semibold text-sm transition-all shadow-2xs"
              >
                <Phone className="w-4 h-4 text-teal-700" />
                <span>Talk to Cloud Specialist</span>
              </a>
            </div>
          </div>

          {/* Device Showcase & Interactive Preview */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-[#FAFAF8] border border-[#E8E8E2] shadow-sm space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-[#E8E8E2]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-neutral-700 uppercase">
                    CLOUD SERVER ACTIVE
                  </span>
                </div>
                <span className="text-[11px] font-mono text-teal-700 font-bold bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200/50">
                  LATENCY: 18ms
                </span>
              </div>

              {/* Supported Platforms Cards */}
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-white border border-[#E8E8E2] flex items-center justify-between shadow-2xs">
                  <div className="flex items-center gap-3">
                    <Laptop className="w-5 h-5 text-teal-700" />
                    <div>
                      <div className="font-bold text-xs text-neutral-900">
                        Apple macOS (MacBook Air / Pro)
                      </div>
                      <div className="text-[11px] text-neutral-500">
                        Native keyboard shortcuts (Alt+C, Alt+P)
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    SUPPORTED
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#E8E8E2] flex items-center justify-between shadow-2xs">
                  <div className="flex items-center gap-3">
                    <Server className="w-5 h-5 text-teal-700" />
                    <div>
                      <div className="font-bold text-xs text-neutral-900">
                        HTML5 Web Browser (Chrome / Safari)
                      </div>
                      <div className="text-[11px] text-neutral-500">
                        Open Tally from any device without installing apps
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    INSTANT
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#E8E8E2] flex items-center justify-between shadow-2xs">
                  <div className="flex items-center gap-3">
                    <Printer className="w-5 h-5 text-teal-700" />
                    <div>
                      <div className="font-bold text-xs text-neutral-900">
                        Local Office Printer Pass-Through
                      </div>
                      <div className="text-[11px] text-neutral-500">
                        Print vouchers to Wi-Fi / USB printer in 1 click
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    AUTO-LINK
                  </span>
                </div>
              </div>

              <div className="pt-2 text-center text-xs font-mono text-neutral-500">
                Compatible with Tally Prime 4.x / 5.x & Tally.ERP 9 (Single &
                Multi-User)
              </div>
            </div>
          </div>
        </section>

        {/* ===================== COMPARISON TABLE ===================== */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block">
              [ REAL BUSINESS VALUE ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#171717] font-heading">
              Office Desktop vs. Managed Tally Cloud
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base">
              Why growing businesses in India & UAE are replacing local office
              computers with cloud hosting.
            </p>
          </div>

          <div className="overflow-x-auto border border-[#E8E8E2] rounded-3xl bg-white shadow-2xs">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#FAFAF8] border-b border-[#E8E8E2] text-xs font-mono text-neutral-500 uppercase tracking-wider">
                <tr>
                  <th className="py-4 px-6 font-bold text-neutral-900">
                    Feature
                  </th>
                  <th className="py-4 px-6 text-neutral-500">
                    Old Office Desktop Setup
                  </th>
                  <th className="py-4 px-6 font-bold text-teal-800 bg-teal-50/50">
                    MIMC Tally on Cloud
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E8E2]">
                {comparison.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-neutral-50/50 transition-colors"
                  >
                    <td className="py-4 px-6 font-bold text-neutral-900">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-neutral-500">{row.local}</td>
                    <td className="py-4 px-6 font-semibold text-teal-900 bg-teal-50/30 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>{row.cloud}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ===================== CORE FEATURES GRID ===================== */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block">
              [ ENTERPRISE PERFORMANCE ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#171717] font-heading">
              Engineered for Speed, Simplicity & Zero Downtime
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base">
              Everything your accountants, business managers, and branches need
              to work faster every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#E8E8E2] shadow-2xs hover:border-teal-300 transition-all space-y-3 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-base text-[#171717] mb-1">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===================== 3-STEP MIGRATION ===================== */}
        <section className="mb-24 p-8 sm:p-12 rounded-3xl bg-[#FAFAF8] border border-[#E8E8E2]">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
              [ ZERO DOWNTIME SETUP ]
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#171717]">
              Start Working on Cloud in 3 Simple Steps
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              You do not need an IT manager. Our engineers migrate your data and
              set up everything for you in under 2 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {migrationSteps.map((s, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E8E8E2] shadow-2xs space-y-3"
              >
                <div className="text-xl font-mono font-black text-teal-700">
                  {s.step}
                </div>
                <h3 className="font-heading font-bold text-sm text-[#171717]">
                  {s.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== LEAD FORM & FREE DEMO ===================== */}
        <section id="demo-form" className="mb-24 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block">
                [ TEST DRIVE TODAY ]
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#171717] font-heading">
                Book Your Free Live Demo & Price Estimate
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                Test the speed of Tally on Cloud on your own laptop or Mac
                before deciding. Our cloud team will set up a live trial and
                give you a straightforward price quote with zero hidden charges.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Free 24-hour live trial on your devices</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Transparent per-user pricing (monthly or annual)</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>
                    Free assisted migration & local printer configuration
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8E8E2] flex items-center justify-between text-xs font-mono text-neutral-500">
                <span>Immediate Phone Inquiry:</span>
                <a
                  href="tel:+919259418994"
                  className="text-teal-700 font-bold hover:underline"
                >
                  +91 925941-8994
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E8E2] shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#171717]">
                    Demo Request Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto">
                    A cloud specialist will connect with you via WhatsApp and
                    phone within 30 minutes to set up your live demo.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" name="_honey" className="hidden" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Lead: Tally on Cloud Live Demo Request"
                  />

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1 font-mono uppercase">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Ramesh Patel / Alex"
                      className="w-full bg-[#FAFAF8] border border-[#E8E8E2] rounded-xl px-3.5 py-2.5 text-xs text-[#171717] focus:outline-none focus:border-teal-600 focus:bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1 font-mono uppercase">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="text"
                        name="phone"
                        required
                        placeholder="+91 / +971..."
                        className="w-full bg-[#FAFAF8] border border-[#E8E8E2] rounded-xl px-3.5 py-2.5 text-xs text-[#171717] focus:outline-none focus:border-teal-600 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1 font-mono uppercase">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="name@company.com"
                        className="w-full bg-[#FAFAF8] border border-[#E8E8E2] rounded-xl px-3.5 py-2.5 text-xs text-[#171717] focus:outline-none focus:border-teal-600 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1 font-mono uppercase">
                        City / Location *
                      </label>
                      <input
                        type="text"
                        name="city"
                        required
                        placeholder="e.g. Mumbai / Dubai"
                        className="w-full bg-[#FAFAF8] border border-[#E8E8E2] rounded-xl px-3.5 py-2.5 text-xs text-[#171717] focus:outline-none focus:border-teal-600 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1 font-mono uppercase">
                        Number of Tally Users *
                      </label>
                      <select
                        name="users_count"
                        required
                        className="w-full bg-[#FAFAF8] border border-[#E8E8E2] rounded-xl px-3.5 py-2.5 text-xs text-[#171717] focus:outline-none focus:border-teal-600 focus:bg-white"
                      >
                        <option value="1 User (Silver)">1 User (Silver)</option>
                        <option value="2 to 5 Users">2 to 5 Users</option>
                        <option value="6 to 15 Users">6 to 15 Users</option>
                        <option value="15+ Enterprise Users">
                          15+ Enterprise Users
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1 font-mono uppercase">
                      Current Tally Version / Requirements
                    </label>
                    <textarea
                      name="requirements"
                      rows={2}
                      placeholder="e.g. Tally Prime Gold, want Mac access and daily backups..."
                      className="w-full bg-[#FAFAF8] border border-[#E8E8E2] rounded-xl px-3.5 py-2.5 text-xs text-[#171717] focus:outline-none focus:border-teal-600 focus:bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-4 rounded-xl bg-teal-700 hover:bg-teal-600 text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Connecting to Cloud Team...</span>
                    ) : (
                      <>
                        <span>Get Live Demo & Price Quote</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ===================== FAQ ACCORDION ===================== */}
        <section className="mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-10 space-y-1">
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block">
              [ COMMON QUESTIONS ]
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#171717]">
              Frequently Asked Questions About Tally on Cloud
            </h2>
          </div>

          <div className="divide-y divide-[#E8E8E2] border-y border-[#E8E8E2]">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-4">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none group"
                  >
                    <span className="text-base font-bold text-[#171717] group-hover:text-teal-800 transition-colors">
                      {faq.q}
                    </span>
                    <span className="w-7 h-7 rounded-full border border-[#E8E8E2] flex items-center justify-center text-neutral-500 shrink-0 group-hover:border-teal-600 transition-colors">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 text-teal-700" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 text-neutral-600 text-xs sm:text-sm leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* Regional Hubs Network */}
        <ServiceRegionalHubs
          serviceId="tally-cloud"
          serviceTitle="Tally on Cloud Hosting"
        />

        {/* Related Services Navigation */}
        <RelatedServices currentId="tally-cloud" />
      </div>
    </Layout>
  );
}
