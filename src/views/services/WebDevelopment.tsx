"use client";

import { useState } from "react";
import {
  CheckCircle2,
  ChevronRight,
  Zap,
  BarChart3,
  Shield,
  Search,
  Smartphone,
  Code2,
  ArrowRight,
  Plus,
  Minus,
  Globe,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../../components/Layout";
import DashboardMockup from "../../components/ui/DashboardMockup";
import RelatedServices from "../../components/RelatedServices";
import ServiceSchema from "../../components/seo/ServiceSchema";
import ServiceBadges from "../../components/ui/ServiceBadges";

const features = [
  {
    icon: Code2,
    title: "Next.js App Router Architecture",
    desc: "Sub-second serverless rendering, edge caching, and streaming SSR. Zero bloat, zero brittle third-party plugins, and clean modular code.",
  },
  {
    icon: Search,
    title: "Programmatic Technical SEO",
    desc: "Complete JSON-LD schema graphs, structured breadcrumbs, crawl budget optimization, and automated sitemap generators built into every route.",
  },
  {
    icon: Smartphone,
    title: "Adaptive Responsive Layouts",
    desc: "Engineered for high readability and fast conversion across mobile viewports, tablet formats, ultra-wide screens, and retina displays.",
  },
  {
    icon: Zap,
    title: "100 / 100 Core Web Vitals",
    desc: "LCP under 1.2s, zero Cumulative Layout Shift (CLS), and sub-50ms Interaction to Next Paint (INP) to guarantee top Google ranking signals.",
  },
  {
    icon: BarChart3,
    title: "Enterprise Conversion Funnels",
    desc: "Strategic UI friction reduction, high-intent consultation triggers, and multi-channel attribution tracking for enterprise sales pipelines.",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security Headers",
    desc: "Strict CSP policies, automated DDoS mitigation, automated daily backups, and SOC2-compliant edge deployment pipelines.",
  },
];

const seoServices = [
  {
    title: "On-Page Semantic Optimization",
    items: [
      "High-intent keyword hierarchy mapping",
      "Semantic HTML5 heading structure (H1–H6)",
      "Dynamic OpenGraph & Twitter cards",
      "Internal authority linking graph",
    ],
  },
  {
    title: "Technical Infrastructure SEO",
    items: [
      "Sub-second Core Web Vitals optimization",
      "Rich snippet Schema.org JSON-LD markup",
      "Multi-region hreflang localization",
      "Automated edge canonicalization",
    ],
  },
  {
    title: "Conversion Architecture (CRO)",
    items: [
      "Friction-free consultation booking flows",
      "Interactive technical calculators & tools",
      "Proof blocks & customer outcome cards",
      "A/B multivariate landing variants",
    ],
  },
  {
    title: "Analytics & Lead Attribution",
    items: [
      "Custom server-side conversion tracking",
      "Google Search Console API telemetry",
      "Heatmap & user session analysis",
      "Multi-touch pipeline revenue attribution",
    ],
  },
];

const faqs = [
  {
    q: "How does Next.js 15 App Router improve SEO and conversion?",
    a: "Next.js App Router renders pages on the edge server with React Server Components (RSC). Googlebot receives pure semantic HTML instantly without executing heavy client-side JavaScript, resulting in higher crawl indexation, sub-second LCP scores, and significantly higher organic search rankings.",
  },
  {
    q: "What is your typical delivery timeline for an enterprise web platform?",
    a: "Standard business platforms (8–15 custom routes) are delivered in 3–4 weeks. Complex web applications with dynamic customer portals, client dashboards, or API integrations take 6–8 weeks with weekly staging demos.",
  },
  {
    q: "Who owns the code repository and cloud hosting accounts?",
    a: "You retain 100% intellectual property and code ownership. We set up automated CI/CD deployment pipelines connected directly to your GitHub repository and cloud provider (Vercel or AWS).",
  },
  {
    q: "Can you optimize and re-engineer our existing slow website?",
    a: "Yes. We conduct complete technical audits to identify slow database queries, render-blocking scripts, and layout shift bottlenecks, migrating legacy sites onto modern edge infrastructure with zero downtime.",
  },
];

export default function WebDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <Layout
      title="Web Development & Technical SEO Services | MIMC Technologies"
      description="Custom Next.js web development and technical SEO engineering. Sub-second Core Web Vitals, conversion architecture, and high Google rankings."
    >
      <ServiceSchema
        name="Web Development & SEO Services"
        description="Custom web development, technical SEO, and digital marketing services. High-performance websites built to rank on Google and convert visitors into leads."
        url="https://www.mimctechnologies.com/services/web-development"
        faqs={faqs}
        breadcrumbs={[
          { name: "Home", url: "https://www.mimctechnologies.com" },
          {
            name: "Services",
            url: "https://www.mimctechnologies.com/services",
          },
          {
            name: "Web Development",
            url: "https://www.mimctechnologies.com/services/web-development",
          },
        ]}
        rating={4.9}
        reviewCount={365}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* ===================== HERO SECTION ===================== */}
        <section className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <ServiceBadges rating={4.9} reviewCount={365} />

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171717] leading-[1.08] font-heading">
              Next.js Web Development <br />
              <span className="text-teal-700">& Technical SEO Platforms.</span>
            </h1>

            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-normal">
              Sub-second web platforms engineered with Next.js App Router for
              100/100 Core Web Vitals, edge serverless architecture, and organic
              search ranking domination.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#111111] hover:bg-teal-700 text-white font-semibold text-sm shadow-xs transition-all active:scale-95"
              >
                <span>Request Platform Scope</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/digital-marketing"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-[#F4F4F0] text-neutral-800 font-semibold text-sm border border-[#E8E8E2] transition-all"
              >
                <span>Technical SEO Details</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </Link>
            </div>
          </div>

          {/* Console Mockup */}
          <div className="lg:col-span-6">
            <DashboardMockup
              title="Next.js Edge Performance Telemetry"
              stats={[
                { label: "Lighthouse Score", value: "100 / 100" },
                { label: "Core Web Vitals", value: "PASSED (0.8s)" },
                { label: "Organic Search", value: "+142% MoM" },
              ]}
              tableHeaders={[
                "Route",
                "Rendering Engine",
                "Edge Latency",
                "Core Web Vitals",
              ]}
              tableRows={[
                ["/services/erp-crm", "Edge Serverless", "28ms", "100 Green"],
                ["/services/whatsapp-api", "Static + ISR", "14ms", "100 Green"],
                [
                  "/blog/enterprise-architecture",
                  "Edge Static",
                  "18ms",
                  "100 Green",
                ],
              ]}
            />
          </div>
        </section>

        {/* ===================== METRICS STRIP ===================== */}
        <section className="mb-16 rounded-2xl bg-white border border-[#E8E8E2] p-6 sm:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#E8E8E2]">
            {[
              { val: "< 1.2s", label: "LCP Target (Speed)" },
              { val: "100", label: "Lighthouse Score Baseline" },
              { val: "3–4 Wks", label: "Average Delivery Time" },
              { val: "Top 3", label: "Google Rank Target" },
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
              [ ARCHITECTURE ]
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717]">
              Engineering Standards Built Into Every Line of Code
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

        {/* ===================== SEO SERVICES MATRIX ===================== */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
              [ TECHNICAL SEO ]
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717]">
              Organic Search & Conversion Architecture Matrix
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seoServices.map((s, sIdx) => (
              <div
                key={sIdx}
                className="p-6 rounded-2xl bg-white border border-[#E8E8E2]"
              >
                <h3 className="font-heading font-bold text-lg text-teal-800 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-600" />
                  <span>{s.title}</span>
                </h3>
                <ul className="space-y-2.5">
                  {s.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex items-center gap-2 text-xs text-neutral-600 font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
              Web Development & SEO Specifications
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
        <RelatedServices currentId="web-development" />
      </div>
    </Layout>
  );
}
