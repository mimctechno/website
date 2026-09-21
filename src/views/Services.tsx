"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Database,
  Zap,
  Terminal,
  Cloud,
  Globe,
  BarChart3,
  Shield,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Server,
  Lock,
  Workflow,
  Sparkles,
  ChevronRight,
  Plus,
  Minus,
  Send,
  ArrowUpRight,
} from "lucide-react";
import Layout from "../components/Layout";

const allServices = [
  {
    slug: "erp-crm",
    category: "ERP & CRM",
    icon: Database,
    badge: "MISSION CRITICAL",
    title: "Enterprise ERP & Custom CRM Architectures",
    tagline:
      "Unify finance, inventory, and operations with sub-second latency.",
    desc: "Custom-engineered resource planning and CRM platforms designed for multi-branch wholesale, manufacturing, and logistics enterprises. Built without proprietary recurring seat licensing or rigid SaaS constraints.",
    techStack: [
      "PostgreSQL",
      "Node.js Microservices",
      "Multi-Tenant Cloud",
      "Role-Based ACL",
    ],
    bullets: [
      "Custom Multi-Entity Ledger & Inventory Modules",
      "Real-Time BI Dashboard with Sub-100ms Query Times",
      "Full API Connectors to Legacy Databases",
      "Automated Multi-State Invoicing & Compliance",
    ],
    sla: "99.99% Cloud SLA",
    timeline: "3–4 Weeks MVP",
  },
  {
    slug: "whatsapp-api",
    category: "WhatsApp & Messaging",
    icon: Zap,
    badge: "OFFICIAL PARTNER",
    title: "Official Meta WhatsApp Business API",
    tagline: "Automate million-message customer communication flows.",
    desc: "High-volume official Meta WhatsApp Cloud API pipelines. Implement verified Green Checkmark business accounts, bi-directional webhook dispatchers, automated payment alerts, and AI-assisted support bots.",
    techStack: [
      "Meta Cloud API",
      "Webhooks Infrastructure",
      "Redis Message Queue",
      "SOC2 Encryption",
    ],
    bullets: [
      "Official Meta Green Checkmark Verification Support",
      "Instant 2-Way Automated Invoicing & PDF Dispatch",
      "High-Throughput Broadcast Campaigns with Analytics",
      "Seamless Integration with Custom ERP & CRM Hubs",
    ],
    sla: "< 2s API Delivery",
    timeline: "48h Fast Track",
  },
  {
    slug: "tally-cloud",
    category: "Cloud Hosting",
    icon: Cloud,
    badge: "MANAGED CLOUD HOSTING",
    title: "Tally on Cloud Hosting",
    tagline:
      "Run Tally Prime securely from anywhere on Mac, PC, phone, or web browser.",
    desc: "Host your Tally Prime on fast NVMe cloud servers. Access your accounting from any MacBook, Windows laptop, tablet, or browser with 99.99% uptime, 1-click office printing, and automated daily backups.",
    techStack: [
      "Tier-4 Cloud Servers",
      "NVMe SSD Storage",
      "HTML5 Web Client",
      "Daily Automated Backups",
    ],
    bullets: [
      "Run on Mac, Windows, iPad, Android & Web Browser",
      "Super-Fast Multi-User Concurrency with Zero Lag",
      "100% Ransomware-Proof Daily Cloud Backups",
      "Direct 1-Click Local Office Printer Support",
    ],
    sla: "99.99% Guaranteed SLA",
    timeline: "2-Hour Fast Migration",
  },
  {
    slug: "tally-whatsapp-integration",
    category: "WhatsApp & Messaging",
    icon: Terminal,
    badge: "SPECIALIZED CONNECTOR",
    title: "Automated Tally ERP WhatsApp Invoicing",
    tagline: "Direct 3-second voucher dispatch straight from Tally Prime.",
    desc: "A bi-directional software connector hooking directly into Tally Prime and Tally.ERP 9. When vouchers, ledgers, or payment reminders are generated, it dispatches branded, encrypted PDFs directly to clients' WhatsApp.",
    techStack: [
      "Tally XML Connector",
      "Meta Cloud Gateway",
      "Automated PDF Engine",
      "Bank-Grade Encryption",
    ],
    bullets: [
      "Zero Manual Export or Accounting Overhead",
      "Automated Ledger Reconciliation Reminders",
      "Multi-Company, Multi-GST & Multi-User Support",
      "Tamper-Proof Digital Watermarked Invoices",
    ],
    sla: "Instant Trigger",
    timeline: "Same-Day Setup",
  },
  {
    slug: "web-development",
    category: "Web & Cloud",
    icon: Globe,
    badge: "NEXT.JS & EDGE",
    title: "Modern Web & Edge Cloud Infrastructure",
    tagline: "Sub-second web platforms engineered for maximum conversion.",
    desc: "High-performance enterprise web applications built with Next.js App Router, edge serverless computing, and headless CMS integrations. Designed for high organic search rankings and flawless Core Web Vitals.",
    techStack: [
      "Next.js 15 App Router",
      "Tailwind CSS",
      "Vercel / AWS Edge",
      "Headless CMS",
    ],
    bullets: [
      "Sub-Second Core Web Vitals & Google Speed Scores",
      "Mobile-First Responsive Editorial UI/UX",
      "Enterprise SOC2-Compliant Cloud Deployments",
      "End-to-End Analytics & Revenue Funnel Tracking",
    ],
    sla: "100 / 100 Speed Score",
    timeline: "2–3 Weeks Delivery",
  },
  {
    slug: "digital-marketing",
    category: "Growth & SEO",
    icon: BarChart3,
    badge: "REVENUE GROWTH",
    title: "Technical SEO & Programmatic Search",
    tagline:
      "Dominate high-intent search queries in competitive global markets.",
    desc: "Data-driven organic search architecture and programmatic search engines. We engineer structured data schemas, crawl budgets, and programmatic landing architectures to capture qualified enterprise leads.",
    techStack: [
      "Programmatic Schema",
      "Search Console API",
      "Ahrefs Auditing",
      "Revenue Attribution",
    ],
    bullets: [
      "Comprehensive Technical Code & Speed Auditing",
      "Programmatic High-Intent Search Architecture",
      "B2B Conversion Rate Optimization (CRO)",
      "Multi-Region International Search Indexing",
    ],
    sla: "Data-Driven ROI",
    timeline: "Ongoing Optimization",
  },
  {
    slug: "enterprise-consulting",
    category: "Consulting",
    icon: Shield,
    badge: "STRATEGY & ARCHITECTURE",
    title: "Enterprise Architecture & IT Consulting",
    tagline: "Technology blueprints before line of code.",
    desc: "Senior engineering audits of your current tech stack. We identify bottlenecks, evaluate build vs. buy decisions, eliminate software vendor lock-in, and engineer a phased migration roadmap for your enterprise.",
    techStack: [
      "Architecture Blueprints",
      "Security Audits",
      "Vendor Negotiation",
      "Cloud Cost Optimization",
    ],
    bullets: [
      "Full Stack Infrastructure & Bottleneck Audits",
      "Cloud Migration & Microservices Roadmaps",
      "Unbiased Vendor & Technology Selection",
      "Zero Proprietary Lock-In Guarantees",
    ],
    sla: "100% Code Ownership",
    timeline: "Custom Scope",
  },
];

const categories = [
  "All Solutions",
  "ERP & CRM",
  "WhatsApp & Messaging",
  "Web & Cloud",
  "Growth & SEO",
  "Consulting",
];

const schema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "MIMC Technologies Enterprise Services",
  url: "https://www.mimctechnologies.com/services",
  itemListElement: allServices.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.title,
    url: `https://www.mimctechnologies.com/services/${s.slug}`,
  })),
};

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState("All Solutions");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const filteredServices =
    selectedCategory === "All Solutions"
      ? allServices
      : allServices.filter((s) => s.category === selectedCategory);

  return (
    <Layout
      title="Enterprise Solutions & Architecture Services | MIMC Technologies"
      description="Explore MIMC Technologies' enterprise software services: Custom ERP & CRM, official Meta WhatsApp API, Tally automation, Next.js web development, and technical SEO."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ===================== HERO SECTION ===================== */}
      <section className="relative px-6 pt-14 pb-12 overflow-hidden border-b border-[#E8E8E2]">
        <div className="max-w-7xl mx-auto">
          {/* Overline Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#E8E8E2] text-xs font-semibold text-neutral-800 shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            <span className="font-mono text-[11px] text-teal-700 tracking-wide uppercase">
              CAPABILITIES DIRECTORY
            </span>
            <span className="text-neutral-300">|</span>
            <span className="text-neutral-600 font-normal">
              Toronto & Delhi Hubs
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#171717] leading-[1.08]">
                Bespoke Software Engineering <br />
                <span className="text-teal-700">
                  For High-Stakes Operations.
                </span>
              </h1>
              <p className="text-neutral-600 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
                Every enterprise platform we construct is custom-tailored, fully
                owned by your company, and backed by rigid 99.99% uptime
                guarantees.
              </p>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#111111] hover:bg-teal-700 text-white font-medium text-sm transition-all shadow-xs active:scale-95"
              >
                <span>Request Architecture Review</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="mt-10 pt-6 border-t border-[#E8E8E2]/60 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#111111] text-white shadow-xs"
                    : "bg-white border border-[#E8E8E2] text-neutral-600 hover:text-neutral-900 hover:border-neutral-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SERVICES GRID ===================== */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((s, idx) => (
              <motion.div
                key={s.slug}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: idx * 0.04 }}
                className="precision-card rounded-2xl p-7 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100/80 flex items-center justify-center text-teal-700 group-hover:bg-teal-700 group-hover:text-white transition-all duration-300">
                      <s.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider text-teal-700 bg-teal-50/80 px-2.5 py-1 rounded-md border border-teal-200/50 uppercase">
                      {s.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h2 className="text-xl font-bold text-[#171717] group-hover:text-teal-800 transition-colors mb-1.5">
                    {s.title}
                  </h2>
                  <p className="text-xs font-medium text-teal-700 mb-3">
                    {s.tagline}
                  </p>

                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-5">
                    {s.desc}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {s.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono text-neutral-500 bg-[#F4F4F0] px-2 py-0.5 rounded border border-[#E8E8E2]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-[#E8E8E2]/60">
                    {s.bullets.map((b, bIdx) => (
                      <div
                        key={bIdx}
                        className="flex items-start gap-2 text-xs text-neutral-600 font-medium"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer of Card: SLA + Action */}
                <div className="pt-4 border-t border-[#E8E8E2] flex items-center justify-between">
                  <div className="text-[11px] font-mono text-neutral-500">
                    SLA:{" "}
                    <span className="text-teal-700 font-bold">{s.sla}</span>
                  </div>

                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#171717] group-hover:text-teal-700 transition-colors"
                  >
                    <span>Architecture Docs</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* ===================== ENGINEERING LIFECYCLE (METHODOLOGY) ===================== */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="rounded-3xl bg-[#111111] text-white p-8 sm:p-14 border border-neutral-800 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block mb-2">
              [ METHODOLOGY ]
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              The Enterprise Engineering Lifecycle
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed mt-2">
              Predictable, transparent, and structured delivery. Zero guesswork,
              zero unaccounted delays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery & Audit",
                desc: "We analyze your existing database schemas, bottlenecks, and workflow friction.",
              },
              {
                step: "02",
                title: "Custom Blueprint",
                desc: "We engineer architectural schemas, security models, and API interfaces for sign-off.",
              },
              {
                step: "03",
                title: "Staged Deployment",
                desc: "Iterative rollouts to staging and production with automated failover pipelines.",
              },
              {
                step: "04",
                title: "SLA Governance",
                desc: "24/7/365 infrastructure monitoring with dedicated architect escalation channels.",
              },
            ].map((phase, pIdx) => (
              <div
                key={pIdx}
                className="p-6 rounded-2xl bg-neutral-900/90 border border-neutral-800 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-2xl font-bold text-teal-400 block mb-3">
                    {phase.step}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-neutral-400 text-xs leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FAQ ACCORDION ===================== */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <div className="text-center mb-8">
          <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
            [ CLARITY ]
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#171717]">
            Frequently Asked Technical Questions
          </h2>
        </div>

        <div className="divide-y divide-[#E8E8E2] border-y border-[#E8E8E2]">
          {[
            {
              q: "Can you customize ERP and CRM modules specifically for our business logic?",
              a: "Yes. Unlike generic off-the-shelf software, our systems are built specifically around your operating procedures. You get dedicated modules for your exact invoicing logic, warehouse dispatch routines, multi-branch tax requirements, and user permission hierarchies.",
            },
            {
              q: "How does the Meta WhatsApp API integrate with existing legacy systems?",
              a: "We deploy secure webhook listeners and API gateways that interface with your existing SQL databases, REST/GraphQL endpoints, or local desktop software (such as Tally Prime) with sub-second message dispatch times.",
            },
            {
              q: "Who owns the code and intellectual property after deployment?",
              a: "You retain 100% ownership of all source code, database architecture, and API credentials. We deploy directly into your cloud accounts (AWS, Vercel, or on-premise servers).",
            },
            {
              q: "What level of support is provided after launch?",
              a: "We provide 24/7 infrastructure monitoring, guaranteed SLA response windows, and dedicated senior software engineers across our Toronto and Delhi hubs.",
            },
          ].map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} className="py-4">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#171717] group-hover:text-teal-800 transition-colors">
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
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 text-neutral-600 text-xs sm:text-sm leading-relaxed max-w-3xl">
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

      {/* ===================== CONVERSION CTA ===================== */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="rounded-3xl bg-[#F4F4F0] border border-[#E8E8E2] p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block">
              [ GET STARTED ]
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#171717] leading-tight">
              Schedule Your Free Architecture Consultation
            </h2>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Speak directly with an enterprise software architect. We’ll assess
              your requirements and deliver a detailed technical roadmap.
            </p>

            {isSubscribed ? (
              <div className="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-teal-800 text-sm font-medium flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-600" />
                <span>
                  Thank you! An architect will reach out within 24 hours.
                </span>
              </div>
            ) : (
              <form
                className="flex flex-col sm:flex-row items-stretch justify-center gap-3 max-w-lg mx-auto pt-2"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const email = new FormData(form).get("email");
                  try {
                    await fetch(
                      "https://formsubmit.co/ajax/info@mimctechnologies.com",
                      {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                          Accept: "application/json",
                        },
                        body: JSON.stringify({
                          email: email,
                          _subject:
                            "Services Consultation Request from MIMC Redesign",
                        }),
                      },
                    );
                    setIsSubscribed(true);
                  } catch (err) {
                    console.error(err);
                    setIsSubscribed(true);
                  }
                }}
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter corporate email address..."
                  className="px-5 py-3 rounded-xl bg-white border border-[#E8E8E2] text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 w-full"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#111111] hover:bg-teal-700 text-white text-sm font-semibold transition-all shrink-0 active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Request Scope</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-500 pt-2">
              <span>✓ Direct Architect Review</span>
              <span>✓ Unbiased Technology Guidance</span>
              <span>✓ Canada & India Operations</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
