"use client";

import { useState } from "react";
import {
  Shield,
  Zap,
  ExternalLink,
  Network,
  Database,
  Brain,
  Globe,
  FileCode2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Lock,
} from "lucide-react";
import Link from "next/link";
import Layout from "../components/Layout";

const CATEGORIES = [
  "All Alliances",
  "Cloud & Edge",
  "Security & Code",
  "AI & Messaging",
];

const partners = [
  {
    name: "Amazon Web Services (AWS)",
    category: "Cloud & Edge",
    logo: "/Amazon_Web_Services_Logo.svg.webp",
    tag: "CLOUD INFRASTRUCTURE",
    icon: Database,
    website: "https://aws.amazon.com",
    description:
      "MIMC leverages AWS multi-region infrastructure to deploy mission-critical ERP databases, automated failover clusters, and encrypted storage with 99.99% guaranteed SLA uptime.",
    benefits: [
      "Elastic PostgreSQL & RDS databases",
      "SOC2 & ISO 27001 data compliance",
      "Automated daily snapshot backups",
      "Sub-10ms intra-region latency",
    ],
  },
  {
    name: "Official Meta BSP Network",
    category: "AI & Messaging",
    logo: "/whatsapp-meta.webp",
    fallbackText: "Meta Partner",
    tag: "WHATSAPP GATEWAY",
    icon: Zap,
    website: "https://business.whatsapp.com",
    description:
      "Direct technical onboarding through Meta's Business Solution Provider network, enabling high-throughput automated broadcasts, green checkmark verifications, and custom webhooks.",
    benefits: [
      "Official Green Checkmark verification",
      "Unlimited daily broadcast throughput",
      "Zero account ban risks",
      "Direct ERP & Tally webhook bridges",
    ],
  },
  {
    name: "Startup India (Govt. of India)",
    category: "Security & Code",
    logo: "/startup-india-4.webp",
    tag: "GOVERNMENT RECOGNITION",
    icon: Shield,
    website: "https://www.startupindia.gov.in",
    description:
      "Recognized by the Department for Promotion of Industry and Internal Trade (DPIIT), solidifying MIMC's status as a trusted, national-level software engineering partner.",
    benefits: [
      "Government-compliant IT architectures",
      "Verified enterprise vendor status",
      "Strict data localization governance",
      "Trusted public sector engineering",
    ],
  },
  {
    name: "Vercel Edge Platform",
    category: "Cloud & Edge",
    logo: "/Vercel_logo_2025.svg",
    tag: "EDGE SERVERLESS",
    icon: Globe,
    website: "https://vercel.com",
    description:
      "Deploying Next.js web platforms directly to Vercel's global edge network guarantees sub-second Time to First Byte (TTFB), flawless Core Web Vitals, and automated CI/CD.",
    benefits: [
      "Global Edge Network caching",
      "Instant rollback deployment pipelines",
      "100/100 Lighthouse performance",
      "Automated SSL and DDoS mitigation",
    ],
  },
  {
    name: "Cloudflare Security",
    category: "Security & Code",
    logo: "/Cloudflare_Logo.svg.webp",
    tag: "ZERO-TRUST DEFENSE",
    icon: Network,
    website: "https://www.cloudflare.com",
    description:
      "Enterprise zero-trust network access, aggressive DDoS shielding, and global DNS routing protecting every client database and web portal from unauthorized intrusion.",
    benefits: [
      "Unmetered Layer 3/4 & Layer 7 DDoS shield",
      "Strict Content Security Policies (CSP)",
      "Zero-Trust team access tunnels",
      "Global edge content delivery (CDN)",
    ],
  },
  {
    name: "GitHub Enterprise",
    category: "Security & Code",
    logo: "/GitHub-Logo.webp",
    tag: "CODE INTEGRITY",
    icon: FileCode2,
    website: "https://github.com",
    description:
      "Automated security scanning, secret detection, branch protection rules, and deterministic CI/CD workflows ensure all deployed code meets strict enterprise quality standards.",
    benefits: [
      "Automated Dependabot security audits",
      "Encrypted secret environment injection",
      "Continuous integration test suites",
      "Audit-trailed Git commit governance",
    ],
  },
  {
    name: "OpenAI Platform",
    category: "AI & Messaging",
    logo: "/OpenAI_Logo.svg.webp",
    tag: "COGNITIVE AUTOMATION",
    icon: Brain,
    website: "https://openai.com",
    description:
      "Integrating cutting-edge LLMs into ERP workflows and WhatsApp communication engines to automate customer inquiries, parse complex documents, and trigger intelligent actions.",
    benefits: [
      "24/7 intelligent conversational agents",
      "Automated invoice & document OCR parsing",
      "Custom fine-tuned enterprise models",
      "Zero training on private customer data",
    ],
  },
];

export default function Partners() {
  const [selectedCat, setSelectedCat] = useState("All Alliances");

  const filteredPartners = partners.filter(
    (p) => selectedCat === "All Alliances" || p.category === selectedCat,
  );

  const partnerSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MIMC Technologies Technology Alliances",
    url: "https://www.mimctechnologies.com/partners",
    description:
      "MIMC Technologies partners with AWS, Meta, Vercel, Cloudflare, and OpenAI to build enterprise software solutions.",
  };

  return (
    <Layout
      title="Technology Partners & Cloud Infrastructure | MIMC Technologies"
      description="Explore MIMC Technologies' global infrastructure alliances including AWS, Meta WhatsApp API, Vercel, Cloudflare, and OpenAI."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerSchema) }}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* ===================== HERO SECTION ===================== */}
        <section className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/60 text-teal-800 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
            TIER-1 GLOBAL ALLIANCES
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171717] leading-[1.08] mb-4 font-heading">
            Global Infrastructure & <br />
            <span className="text-teal-700">Technology Alliances.</span>
          </h1>

          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
            We don't build on fragile foundations. Every custom ERP, WhatsApp
            API pipeline, and web platform we engineer is backed by the world's
            most resilient cloud and security ecosystems.
          </p>
        </section>

        {/* ===================== FILTER TABS ===================== */}
        <section className="mb-10 flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide border-y border-[#E8E8E2] py-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCat === cat
                  ? "bg-[#111111] text-white shadow-xs"
                  : "bg-white text-neutral-600 hover:text-neutral-900 border border-[#E8E8E2]"
              }`}
            >
              {cat}
            </button>
          ))}
        </section>

        {/* ===================== PARTNERS GRID ===================== */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPartners.map((partner, idx) => (
              <div
                key={idx}
                className="precision-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Logo & Tag */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8E8E2] mb-6">
                    <div className="h-12 max-w-[180px] flex items-center">
                      {partner.logo ? (
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="max-h-10 max-w-[160px] object-contain"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = "none";
                          }}
                        />
                      ) : (
                        <span className="font-heading font-extrabold text-lg text-[#171717]">
                          {partner.name}
                        </span>
                      )}
                    </div>

                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded border border-teal-200/50 self-start sm:self-auto">
                      {partner.tag}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-[#171717] mb-2">
                    {partner.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                    {partner.description}
                  </p>

                  {/* Architecture Benefits */}
                  <div className="space-y-2 pt-4 border-t border-[#E8E8E2]">
                    <div className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider mb-2">
                      ARCHITECTURAL INTEGRATION SPECIFICATIONS
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {partner.benefits.map((b, bIdx) => (
                        <div
                          key={bIdx}
                          className="flex items-center gap-2 text-xs font-medium text-neutral-700"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E8E8E2] flex items-center justify-between">
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-teal-700 hover:text-teal-900 inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Official Ecosystem Link</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-[10px] font-mono text-neutral-400">
                    VERIFIED PARTNERSHIP
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== ALLIANCE CTA BANNER ===================== */}
        <section className="rounded-3xl bg-[#111111] text-white p-8 sm:p-12 border border-neutral-800 shadow-xl text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block">
              [ ENTERPRISE INFRASTRUCTURE ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
              Ready to Deploy on Battle-Tested Infrastructure?
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pb-2">
              Leverage the same cloud, security, and messaging stack that powers
              the modern global internet. Connect with our solutions architects
              today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm shadow-md transition-all active:scale-95"
              >
                <span>Initiate Project Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 font-semibold text-sm border border-neutral-700 transition-all"
              >
                <span>Browse All Solutions</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
