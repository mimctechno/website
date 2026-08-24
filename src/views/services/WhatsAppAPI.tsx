"use client";

import { useState } from "react";
import {
  Zap,
  CheckCircle2,
  ChevronRight,
  MessageSquare,
  Globe,
  Clock,
  Shield,
  BarChart3,
  ArrowRight,
  Plus,
  Minus,
  Lock,
  Send,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../../components/Layout";
import SmartphoneMockup from "../../components/ui/SmartphoneMockup";
import RelatedServices from "../../components/RelatedServices";
import ServiceSchema from "../../components/seo/ServiceSchema";
import ServiceBadges from "../../components/ui/ServiceBadges";

import {
  IndiaFlag,
  CanadaFlag,
  USFlag,
  UAEFlag,
  GlobeFlag,
} from "../../components/ui/FlagIcon";

const features = [
  {
    icon: MessageSquare,
    title: "High-Volume Bulk Messaging",
    desc: "Broadcast millions of personalized transactional invoices, OTPs, booking alerts, and payment reminders with sub-2-second delivery latency.",
  },
  {
    icon: Shield,
    title: "Official Meta Business Partner",
    desc: "Complete end-to-end BSP onboarding, official Green Checkmark verified profile setup, and Meta compliance management.",
  },
  {
    icon: Zap,
    title: "Event-Driven Webhook Dispatchers",
    desc: "Instant automated triggers bridging your custom ERP, CRM, database, or Tally software straight to client WhatsApp numbers.",
  },
  {
    icon: Globe,
    title: "Multi-Region Cloud Infrastructure",
    desc: "High-availability message routing serving enterprises across Canada, India, USA, UAE, and Southeast Asia.",
  },
  {
    icon: Clock,
    title: "99.99% Infrastructure SLA",
    desc: "Resilient microservices architecture with automated retries, rate-limit governance, and queue orchestration.",
  },
  {
    icon: BarChart3,
    title: "Live Analytics & Attribution",
    desc: "Real-time delivery confirmation, read-receipt telemetry, and conversation conversion tracking in a single dashboard.",
  },
];

const useCases = [
  {
    title: "India Operations",
    flag: <IndiaFlag className="w-5 h-3.5" />,
    cases: [
      "Instant Tally ERP PDF voucher dispatch",
      "Automated outstanding payment reminders",
      "E-commerce order tracking & OTP verification",
      "Customer support auto-routing bots",
    ],
  },
  {
    title: "Canada & North America",
    flag: (
      <div className="flex items-center gap-1">
        <CanadaFlag className="w-5 h-3.5" />
        <USFlag className="w-5 h-3.5" />
      </div>
    ),
    cases: [
      "B2B service contract notifications",
      "Automated consultation booking confirmations",
      "Client billing & payment receipt alerts",
      "Field team operational notifications",
    ],
  },
  {
    title: "UAE & Middle East",
    flag: <UAEFlag className="w-5 h-3.5" />,
    cases: [
      "High-touch VIP client communication",
      "Real estate lead follow-up automation",
      "Multi-lingual customer support chatbots",
      "Logistics & delivery milestone tracking",
    ],
  },
  {
    title: "Southeast Asia",
    flag: <GlobeFlag className="w-5 h-5" />,
    cases: [
      "Banking & payment transaction alerts",
      "Omnichannel CRM lead qualification",
      "High-throughput promotional campaigns",
      "Cross-border shipping notifications",
    ],
  },
];

const faqs = [
  {
    q: "What is the Official Meta WhatsApp Business API?",
    a: "The Official WhatsApp Business API is Meta's enterprise-grade communication gateway designed for programmatic, high-volume automated messaging. Unlike the standard WhatsApp Business app on mobile devices, the API integrates directly into your backend software, databases, or ERPs with multi-agent support and zero message caps.",
  },
  {
    q: "How does MIMC handle the Meta Green Checkmark verification?",
    a: "As an official solutions provider, we manage the entire Meta Business verification process, official brand display name registration, and Green Checkmark application on your behalf. We ensure 100% compliance with Meta messaging guidelines.",
  },
  {
    q: "Can the WhatsApp API connect directly to our custom ERP or Tally?",
    a: "Yes. This is our core specialization. We build direct bi-directional webhooks and secure API bridges between your custom ERP/CRM or Tally Prime system so vouchers, invoices, and ledger statements dispatch automatically in seconds.",
  },
  {
    q: "What are the messaging costs and conversation tiers?",
    a: "Meta calculates billing based on 24-hour conversation windows categorized by Service, Utility, Authentication, and Marketing. We provide a transparent cost projection during your architecture audit and help optimize template design to minimize operational spend.",
  },
  {
    q: "How fast can we go live with the official API?",
    a: "Meta business verification typically takes 2–4 business days. For urgent enterprise deployments, our team fast-tracks sandbox integration so your backend connectors are coded, tested, and ready to dispatch the instant approvals are granted.",
  },
];

export default function WhatsAppAPI() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <Layout
      title="Official WhatsApp Business API Integration & Automation | MIMC"
      description="Official Meta WhatsApp Business API integration, high-volume broadcast messaging, and automated ERP/Tally connectors by MIMC Technologies."
    >
      <ServiceSchema
        name="Official WhatsApp Business API Setup & Management"
        description="Official and high-throughput WhatsApp Business API setup, integration, and management for enterprises in Canada, India, UAE, and worldwide."
        url="https://www.mimctechnologies.com/services/whatsapp-api"
        faqs={faqs}
        breadcrumbs={[
          { name: "Home", url: "https://www.mimctechnologies.com" },
          {
            name: "Services",
            url: "https://www.mimctechnologies.com/services",
          },
          {
            name: "WhatsApp API",
            url: "https://www.mimctechnologies.com/services/whatsapp-api",
          },
        ]}
        rating={4.9}
        reviewCount={384}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* ===================== HERO SECTION ===================== */}
        <section className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <ServiceBadges rating={4.9} reviewCount={384} />

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171717] leading-[1.08] font-heading">
              Official Meta WhatsApp <br />
              <span className="text-teal-700">Business API Integration.</span>
            </h1>

            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-normal">
              Scale customer communication, automate invoice dispatches from
              your ERP or Tally, and trigger instant two-way customer support
              with official Meta-certified cloud architecture.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#111111] hover:bg-teal-700 text-white font-semibold text-sm shadow-xs transition-all active:scale-95"
              >
                <span>Deploy WhatsApp API</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/tally-whatsapp-integration"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-[#F4F4F0] text-neutral-800 font-semibold text-sm border border-[#E8E8E2] transition-all"
              >
                <span>Tally Integration Sync</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </Link>
            </div>
          </div>

          {/* Smartphone Chat Mockup Container */}
          <div className="lg:col-span-6 flex justify-center">
            <SmartphoneMockup />
          </div>
        </section>

        {/* ===================== METRICS STRIP ===================== */}
        <section className="mb-16 rounded-2xl bg-white border border-[#E8E8E2] p-6 sm:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#E8E8E2]">
            {[
              { val: "98%", label: "Message Open Rate" },
              { val: "< 2s", label: "Average Delivery Time" },
              { val: "5M+", label: "Monthly API Volume" },
              { val: "100%", label: "Meta Official Compliance" },
            ].map((stat, sIdx) => (
              <div key={sIdx} className="pt-4 md:pt-0 px-4">
                <div className="font-heading font-extrabold text-2xl sm:text-3xl text-teal-700 mb-1">
                  {stat.val}
                </div>
                <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== FEATURES GRID ===================== */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
              [ CAPABILITIES ]
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717]">
              Engineered for Enterprise Messaging Throughput
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, idx) => (
              <div
                key={idx}
                className="precision-card rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 mb-4">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#171717] mb-2">
                    {f.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== REGIONAL DEPLOYMENTS ===================== */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
              [ GLOBAL USE CASES ]
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717]">
              Active Regional Deployments & Workflows
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((u, uIdx) => (
              <div
                key={uIdx}
                className="p-6 rounded-2xl bg-white border border-[#E8E8E2]"
              >
                <h3 className="font-heading font-bold text-lg text-[#171717] mb-4 flex items-center gap-2.5">
                  <div className="p-1 rounded-md bg-[#FAFAF8] border border-[#E8E8E2] flex items-center justify-center">
                    {u.flag}
                  </div>
                  <span>{u.title}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {u.cases.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="flex items-center gap-2 text-xs text-neutral-600 font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== FAQ ACCORDION ===================== */}
        <section className="mb-16 max-w-4xl">
          <div className="mb-8">
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
              [ FAQ ]
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717]">
              WhatsApp Business API Technical Details
            </h2>
          </div>

          <div className="divide-y divide-[#E8E8E2] border-y border-[#E8E8E2]">
            {faqs.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;
              return (
                <div key={fIdx} className="py-4">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : fIdx)}
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

        {/* Related Services Navigation */}
        <RelatedServices currentId="whatsapp-api" />
      </div>
    </Layout>
  );
}
