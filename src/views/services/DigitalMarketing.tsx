"use client";

import { useState } from "react";
import {
  CheckCircle2,
  ChevronRight,
  Target,
  Search,
  Globe,
  Megaphone,
  Mail,
  TrendingUp,
  ArrowRight,
  Plus,
  Minus,
  BarChart3,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../../components/Layout";
import DashboardMockup from "../../components/ui/DashboardMockup";
import RelatedServices from "../../components/RelatedServices";
import ServiceRegionalHubs from "../../components/ServiceRegionalHubs";
import ServiceSchema from "../../components/seo/ServiceSchema";
import ServiceBadges from "../../components/ui/ServiceBadges";

const features = [
  {
    icon: Search,
    title: "Programmatic Search Architecture",
    desc: "Scale organic rankings across thousands of long-tail enterprise keywords with automated structured schema, dynamic landing routes, and edge-rendered indexing.",
  },
  {
    icon: TrendingUp,
    title: "High-Intent Google Ads & SEM",
    desc: "B2B search campaigns engineered for maximum pipeline ROI. Granular negative keyword trees, exact match bidding, and conversion-optimized landing pages.",
  },
  {
    icon: Globe,
    title: "Multi-Region International SEO",
    desc: "Dominate search queries across Canada, India, UAE, and US markets with proper hreflang clustering, regional schema, and localized content strategies.",
  },
  {
    icon: Megaphone,
    title: "B2B LinkedIn & Account Targeting",
    desc: "Target high-value decision-makers by company revenue, job titles, and software tech stacks to fill sales pipelines with qualified enterprise demos.",
  },
  {
    icon: Mail,
    title: "WhatsApp & Email Lead Nurturing",
    desc: "Automated broadcast workflows and drip cadences achieving 98% message open rates, re-engaging past clients and accelerating deal velocity.",
  },
  {
    icon: Target,
    title: "Conversion Rate Optimization (CRO)",
    desc: "Heatmap session analysis, form friction reduction, and multivariate layout testing to maximize qualified lead volume without expanding ad budgets.",
  },
];

const channels = [
  {
    name: "High-Intent Google Search Ads",
    desc: "Capture active decision-makers at the exact second they search for enterprise ERP, CRM, and WhatsApp API software.",
  },
  {
    name: "Organic Technical SEO & Core Web Vitals",
    desc: "Build an enduring organic search pipeline that delivers continuous high-ticket inbound leads without per-click fees.",
  },
  {
    name: "LinkedIn B2B Account-Based Marketing",
    desc: "Precision targeting for CTOs, CFOs, and operations directors filtered by company headcount and industry.",
  },
  {
    name: "Official WhatsApp Broadcast Engines",
    desc: "Direct-to-mobile communications delivering 98% open rates for instant promotion and re-engagement campaigns.",
  },
  {
    name: "Multi-Region Local Citation SEO",
    desc: "Localized Google Business optimization and city-specific landing pages across major international commercial hubs.",
  },
  {
    name: "Authoritative Technical Content",
    desc: "Deep-dive case studies, architecture whitepapers, and integration guides that rank top of page on Google.",
  },
];

const faqs = [
  {
    q: "How does MIMC's technical SEO strategy differ from standard marketing agencies?",
    a: "Standard agencies focus purely on basic blog posts and low-quality backlinks. We approach SEO from an engineering standpoint: sub-second Core Web Vitals, programmatic Schema.org JSON-LD architectures, crawl budget optimization, and conversion-first landing page funnels.",
  },
  {
    q: "How long does it take to achieve Page 1 Google rankings?",
    a: "For programmatic and technical SEO overhauls, indexation and ranking velocity improvements typically begin within 4–8 weeks. High-difficulty enterprise keywords reach dominant Page 1 positions within 4–6 months with continuous domain authority compounding.",
  },
  {
    q: "Can you manage WhatsApp marketing campaigns alongside Google Ads?",
    a: "Yes. Combining Google Ads with instant WhatsApp conversational lead capture creates an ultra-high converting funnel, reducing lead drop-off by up to 60% compared to traditional lengthy web forms.",
  },
  {
    q: "How do you report attribution and pipeline revenue?",
    a: "We deploy server-side tracking, Google Search Console API telemetry, and CRM pipeline attribution so you can trace every closed deal directly back to its originating search query or campaign channel.",
  },
];

export default function DigitalMarketing() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <Layout
      title="Digital Marketing & Technical SEO Services | MIMC Technologies"
      description="Data-driven technical SEO, Google Ads, and automated WhatsApp campaigns for high-growth enterprises in Canada, India, and global markets."
    >
      <ServiceSchema
        name="Digital Marketing & SEO"
        description="Data-driven digital marketing including SEO, Google Ads, and automated WhatsApp campaigns for India, Canada, and global markets."
        url="https://www.mimctechnologies.com/services/digital-marketing"
        faqs={faqs}
        breadcrumbs={[
          { name: "Home", url: "https://www.mimctechnologies.com" },
          {
            name: "Services",
            url: "https://www.mimctechnologies.com/services",
          },
          {
            name: "Digital Marketing",
            url: "https://www.mimctechnologies.com/services/digital-marketing",
          },
        ]}
        rating={4.8}
        reviewCount={391}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* ===================== HERO SECTION ===================== */}
        <section className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <ServiceBadges rating={4.8} reviewCount={391} />

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171717] leading-[1.08] font-heading">
              Technical SEO & B2B <br />
              <span className="text-teal-700">Programmatic Search Growth.</span>
            </h1>

            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-normal">
              Dominate organic search rankings for high-intent commercial
              keywords, scale qualified inbound lead funnels, and optimize for
              Google AI Overviews with programmatic technical SEO.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#111111] hover:bg-teal-700 text-white font-semibold text-sm shadow-xs transition-all active:scale-95"
              >
                <span>Request Growth Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/web-development"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-[#F4F4F0] text-neutral-800 font-semibold text-sm border border-[#E8E8E2] transition-all"
              >
                <span>Web Development Services</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </Link>
            </div>
          </div>

          {/* Console Mockup */}
          <div className="lg:col-span-6">
            <DashboardMockup
              title="Global Enterprise Lead Pipeline Analytics"
              stats={[
                { label: "Total Inbound Leads", value: "8,490" },
                { label: "Average CPA", value: "$14.20" },
                { label: "Search Pipeline ROAS", value: "6.4x" },
              ]}
              tableHeaders={[
                "Campaign / Channel",
                "Spend",
                "Qualified Inquiries",
                "Pipeline Value",
              ]}
              tableRows={[
                [
                  "High-Intent Google Search (B2B)",
                  "$45,000",
                  "3,400",
                  "$890,000",
                ],
                ["LinkedIn Enterprise ABM", "$18,500", "480", "$520,000"],
                [
                  "Programmatic Organic SEO",
                  "$0 (Organic)",
                  "4,610",
                  "$1,450,000",
                ],
              ]}
            />
          </div>
        </section>

        {/* ===================== METRICS STRIP ===================== */}
        <section className="mb-16 rounded-2xl bg-white border border-[#E8E8E2] p-6 sm:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#E8E8E2]">
            {[
              { val: "6.4x", label: "Average Campaign ROAS" },
              { val: "98%", label: "WhatsApp Open Rate" },
              { val: "Top 3", label: "Target Organic Ranking" },
              { val: "100%", label: "Attribution Transparency" },
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
              Engineered for Scalable Customer Acquisition
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

        {/* ===================== CHANNELS MATRIX ===================== */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
              [ CHANNELS ]
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717]">
              Growth Channels We Optimize & Operate
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {channels.map((c, cIdx) => (
              <div
                key={cIdx}
                className="p-6 rounded-2xl bg-white border border-[#E8E8E2]"
              >
                <h3 className="font-heading font-bold text-base text-teal-800 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-600" />
                  <span>{c.name}</span>
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {c.desc}
                </p>
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
              Digital Marketing & SEO Specifications
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

        {/* Regional Hubs Network */}
        <ServiceRegionalHubs
          serviceId="digital-marketing"
          serviceTitle="Technical SEO & Search Growth"
        />

        {/* Related Services Navigation */}
        <RelatedServices currentId="digital-marketing" />
      </div>
    </Layout>
  );
}
