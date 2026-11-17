"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Zap,
  TrendingDown,
  Users,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Plus,
  Minus,
  HelpCircle,
  Clock,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import Layout from "../../components/Layout";
import WhatsAppComparison from "../../components/whatsapp/WhatsAppComparison";
import WhatsAppCalculator from "../../components/whatsapp/WhatsAppCalculator";
import WhatsAppEmbeddedSignupCard from "../../components/whatsapp/WhatsAppEmbeddedSignupCard";
import WhatsAppFloatingCTA from "../../components/whatsapp/WhatsAppFloatingCTA";
import ServiceInquirySection from "../../components/forms/ServiceInquirySection";

export default function WhatsAppCompare() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const migrationSteps = [
    {
      step: "01",
      title: "Keep Your Existing Number (Zero Downtime)",
      desc: "You do not need to buy a new number. We use Meta's official 2FA number migration protocol to transfer your existing business phone number from Wati, Twilio, or AiSensy to your direct Meta WABA without losing client chats.",
    },
    {
      step: "02",
      title: "Transfer Meta Business Manager Ownership",
      desc: "Connect your official Facebook Business Manager via Meta Embedded Signup. Your business maintains 100% legal ownership of your WABA, verified display name, and approved templates.",
    },
    {
      step: "03",
      title: "Direct Webhook & Backend Cutover",
      desc: "We configure sub-second webhook routing straight to your backend, database, or ERP (Tally Prime, custom CRM) with automated message queue failover and 99.99% SLA.",
    },
    {
      step: "04",
      title: "Eliminate Aggregator Surcharges Instantly",
      desc: "Start dispatching messages at official Meta base conversation rates. You immediately stop paying aggregator monthly user fees and conversation markups.",
    },
  ];

  const faqs = [
    {
      q: "Can we keep our existing WhatsApp phone number when switching to MIMC?",
      a: "Yes, 100%. Meta provides an official number porting protocol. Your phone number, verified display name, and quality rating seamlessly transfer from your current BSP (like Wati, Twilio, or Gupshup) directly into your official Meta WABA with zero downtime.",
    },
    {
      q: "Why do SaaS aggregators charge a markup on WhatsApp conversations?",
      a: "Aggregators act as commercial middlemen. They take Meta's base conversation rate and add a 15% to 40% margin on top of it, alongside monthly platform fees ($49–$299/mo) and per-agent user fees ($29–$79/agent/mo). As an official Meta Cloud API Tech Provider, MIMC routes your messages directly to Meta's infrastructure with 0% middleman surcharge.",
    },
    {
      q: "Do we have to pay monthly per-user fees for our support agents?",
      a: "No. With MIMC, you do not pay per-agent SaaS subscription fees. You have full code and data ownership to connect unlimited team members, automated AI agents, or multi-department inboxes without paying extra seat fees every month.",
    },
    {
      q: "How does direct Meta Cloud API latency compare to traditional aggregators?",
      a: "Direct Meta Cloud API delivers sub-second throughput (average delivery latency < 1.8 seconds) and supports 80 to 500+ messages per second. Aggregators route through multi-hop proxy servers, which frequently introduce queuing bottlenecks during peak promotional hours.",
    },
    {
      q: "Will we lose our Meta Verified Green Tick checkmark during migration?",
      a: "No. The Official Business Account (Green Tick) belongs to your business phone number and Meta Business Manager, not to the aggregator. Your green badge stays permanently active throughout the migration.",
    },
    {
      q: "How long does the entire migration take?",
      a: "Typical enterprise migration takes under 24 hours. We test your backend webhooks, templates, and automated workflows in our sandbox environment before executing the 5-minute DNS and 2FA cutover.",
    },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* ===================== HERO SECTION ===================== */}
        <section className="mb-16 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-900 text-xs font-mono font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
            <span>
              OFFICIAL META CLOUD API · ARCHITECTURE & PRICING TRANSPARENCY
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171717] leading-[1.08] font-heading mb-6">
            Why Growing Enterprises Are Migrating from <br />
            <span className="text-teal-700">
              SaaS Aggregators to Direct Meta Cloud API.
            </span>
          </h1>

          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-normal mb-8">
            Stop paying 15%–40% per-message surcharges and escalating per-agent
            subscription fees. Compare the technical architecture, total cost of
            ownership, and data privacy of MIMC against traditional 3rd-party
            aggregators and unofficial bot scrapers.
          </p>

          {/* Official Meta Badges Row */}
          <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900 text-white border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold">
              VERIFIED ENTERPRISE ALLIANCE:
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <img
                src="/badges/Official-Meta-Business-Partner.webp"
                alt="Official Meta Business Partner"
                className="h-9 md:h-11 w-auto object-contain brightness-110"
                loading="lazy"
                width={160}
                height={46}
              />
              <img
                src="/badges/Meta-badge.png"
                alt="WhatsApp for Business Technical Certified Company"
                className="h-10 md:h-12 w-auto object-contain rounded"
                loading="lazy"
                width={150}
                height={48}
              />
              <img
                src="/badges/Meta-badge-2.png"
                alt="Business Messaging Strategy Certified Company"
                className="h-10 md:h-12 w-auto object-contain rounded"
                loading="lazy"
                width={150}
                height={48}
              />
            </div>
          </div>
        </section>

        {/* ===================== 3 CORE PILLARS ===================== */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E8E2] shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 mb-5">
              <TrendingDown className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono font-bold text-teal-700 uppercase tracking-wider mb-1">
              0% PER-MESSAGE SURCHARGE
            </div>
            <h3 className="font-heading font-bold text-xl text-[#171717] mb-2">
              Direct Meta Base Rates
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Aggregators mark up Meta conversation charges by 15% to 40%. With
              MIMC, you pay official Meta conversation base rates directly with
              zero middleman tax.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E8E2] shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 mb-5">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono font-bold text-teal-700 uppercase tracking-wider mb-1">
              $0 PER-AGENT USER FEES
            </div>
            <h3 className="font-heading font-bold text-xl text-[#171717] mb-2">
              Unlimited Team Seats
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Never pay $29–$79 per support agent per month. Scale your sales,
              customer support, and operations teams without escalating monthly
              software subscriptions.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E8E2] shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 mb-5">
              <Shield className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono font-bold text-teal-700 uppercase tracking-wider mb-1">
              0% BAN RISK · META SLA
            </div>
            <h3 className="font-heading font-bold text-xl text-[#171717] mb-2">
              Official Cloud Infrastructure
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Unlike unofficial desktop scraper tools that get numbers
              permanently banned, MIMC deploys on official Meta Cloud API v20+
              with bank-grade SOC 2 & ISO 27001 data governance.
            </p>
          </div>
        </section>

        {/* ===================== THE COMPARISON MATRIX ===================== */}
        <WhatsAppComparison />

        {/* ===================== ROI SAVINGS CALCULATOR ===================== */}
        <div id="savings-calculator">
          <WhatsAppCalculator />
        </div>

        {/* ===================== ZERO DOWNTIME MIGRATION WALKTHROUGH ===================== */}
        <section className="my-16 sm:my-20">
          <div className="mb-8">
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
              [ ZERO DOWNTIME TRANSITION ]
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717]">
              How to Migrate from Wati, Twilio, or AiSensy to Direct Meta
            </h2>
            <p className="text-sm text-neutral-600 mt-2 max-w-3xl">
              Switching to direct Meta Cloud API takes less than 24 hours with
              zero downtime, zero customer chat loss, and complete preservation
              of your verified Green Checkmark.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {migrationSteps.map((m, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-[#E8E8E2] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-700 text-white font-mono font-bold text-sm flex items-center justify-center mb-4 shadow-xs">
                    {m.step}
                  </div>
                  <h4 className="font-heading font-bold text-base text-[#171717] mb-2">
                    {m.title}
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== EMBEDDED SIGNUP & RATE CARD ===================== */}
        <WhatsAppEmbeddedSignupCard />

        {/* ===================== MIGRATION FAQS ===================== */}
        <section className="my-16 max-w-4xl">
          <div className="mb-8">
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
              [ MIGRATION & BILLING FAQ ]
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717]">
              Frequently Asked Questions About Switching
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

        {/* ===================== LEAD INQUIRY FORM ===================== */}
        <ServiceInquirySection
          serviceId="whatsapp-comparison"
          serviceTitle="WhatsApp Cloud API Migration & Cost Audit"
          subtitle="Submit your current monthly messaging volume or aggregator provider. Our cloud architects will calculate your exact annual cost reduction and provide a zero-downtime migration blueprint within 24 hours."
          scopePills={[
            "Migrating from Wati / AiSensy",
            "Migrating from Twilio / Gupshup",
            "Direct Meta Cloud API Onboarding",
            "Official Green Tick Verification",
            "Custom ERP / Database Webhook Sync",
            "High-Volume OTP & Marketing Setup",
          ]}
          placeholder="e.g. We currently spend $1,400/month on Twilio/Wati with 80k monthly messages and 8 support agents. We want to cut costs and migrate to direct Meta Cloud API..."
        />
      </div>

      {/* Floating 1-Click WhatsApp Architect Contact */}
      <WhatsAppFloatingCTA />
    </Layout>
  );
}
