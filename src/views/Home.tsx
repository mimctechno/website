"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Zap,
  ChevronRight,
  Plus,
  Minus,
  CheckCircle2,
  Database,
  MessageSquare,
  Globe2,
  TrendingUp,
  Server,
  ArrowRight,
  Layers,
  Sparkles,
  Lock,
  BarChart3,
  Send,
  Workflow,
  Cpu,
  ArrowUpRight,
  Code2,
  Building2,
  Phone,
  HelpCircle,
} from "lucide-react";
import Layout from "../components/Layout";
import {
  IndiaFlag,
  CanadaFlag,
  UAEFlag,
  USFlag,
} from "@/components/ui/FlagIcon";

// Lazy-load ticker marquee
const Marquee = dynamic(() => import("react-fast-marquee"), {
  ssr: false,
  loading: () => null,
});

// Lazy-load Three.js canvas on client only (Zero SSR/LCP penalty)
const HeroCanvas = dynamic(() => import("../components/HeroCanvas"), {
  ssr: false,
  loading: () => null,
});

// Counter component with SEO-friendly fallback
function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
}: {
  end: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState<number | null>(null);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1600;
          const startTime = performance.now();

          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const easeOutExpo = 1 - Math.pow(2, -10 * progress);
            const current = Math.floor(easeOutExpo * end);
            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  const displayValue = count !== null ? count : end;

  return (
    <span ref={ref} className="tabular-nums font-heading">
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Home() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeService, setActiveService] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      num: "01",
      title: "Official Meta WhatsApp Business API Solutions",
      tag: "Official Meta BSP",
      desc: "Fast-track Meta BSP onboarding, Green Tick profile verification, and high-volume automated messaging for order tracking, OTPs, and client support without ban risk.",
      bullets: [
        "Direct Official Meta Cloud API",
        "Automated Payment Reminders & Ledgers",
        "Broadcast Campaigns with Live Analytics",
      ],
      href: "/services/whatsapp-api",
    },
    {
      num: "02",
      title: "Automated Tally Prime WhatsApp Invoicing Connectors",
      tag: "Specialized Sync",
      desc: "Automatic invoice dispatch from Tally Prime / ERP 9 directly to client WhatsApp in under 3 seconds. Includes PDF vouchers, ledger summaries, and automated overdue payment reminders.",
      bullets: [
        "Sub-3-Second Voucher Delivery",
        "Multi-Company & Multi-GST Support",
        "Digital Signature & Bank-Grade Security",
      ],
      href: "/services/tally-whatsapp-integration",
    },
    {
      num: "03",
      title: "Custom Enterprise ERP & CRM Software Development",
      tag: "100% Code Ownership",
      desc: "Custom business software built for your exact inventory, manufacturing, wholesale distribution, and billing workflows. Zero recurring per-user license fees.",
      bullets: [
        "Custom PostgreSQL & Node.js Backends",
        "Multi-Warehouse Inventory & Automated Billing",
        "Fast Sub-100ms Financial Reports",
      ],
      href: "/services/erp-crm",
    },
    {
      num: "04",
      title: "High-Performance Next.js Web Development",
      tag: "Sub-Second Speed",
      desc: "Modern web applications and commercial platforms engineered with Next.js App Router for 100/100 Core Web Vitals, ultra-fast load times, and high search engine conversion.",
      bullets: [
        "100/100 Core Web Vitals Guaranteed",
        "Global Edge CDN & Automated Failover",
        "Programmatic SEO Architecture",
      ],
      href: "/services/web-development",
    },
    {
      num: "05",
      title: "Technical SEO & Programmatic Search Growth",
      tag: "Organic Pipeline",
      desc: "Dominate search engine rankings with high-intent keyword architecture, structured JSON-LD schema, and local search landing systems engineered for qualified B2B lead flow.",
      bullets: [
        "100+ City Programmatic Scaling",
        "AI Search Engine Optimization (GEO)",
        "High-Intent Commercial Funnel Focus",
      ],
      href: "/services/digital-marketing",
    },
  ];

  const homepageFaqs = [
    {
      q: "What is the difference between WhatsApp Business App and WhatsApp Business API?",
      a: "The standard WhatsApp Business App is designed for small single-person shops with manual typing and a 256-contact broadcast limit. The official WhatsApp Business API is built for growing enterprises: it enables unlimited automated messages, multi-agent customer support dashboards, direct Tally/ERP software integrations, verified Green Checkmarks, and zero risk of phone number bans.",
    },
    {
      q: "How does Tally Prime WhatsApp integration work in real-time?",
      a: "Our connector hooks directly into your Tally Prime or ERP 9 data stream on your local server. The moment a sales invoice, payment receipt, or payment reminder is generated, the connector creates a tamper-proof PDF and sends it directly to the customer's WhatsApp in under 3 seconds via the official Meta Cloud API.",
    },
    {
      q: "How long does official WhatsApp Business API setup take?",
      a: "Official Meta API onboarding typically takes 2 to 4 business days. As an authorized provider, MIMC handles the complete Meta Business Manager verification, phone number provisioning, display name approvals, and message template submissions end-to-end.",
    },
    {
      q: "Can I get the verified Green Tick checkmark on WhatsApp?",
      a: "Yes. We assist registered businesses in applying for and securing the official Meta Verified Green Badge. This displays your verified brand name instead of an unknown phone number, increasing message open rates and customer trust.",
    },
    {
      q: "Who owns the source code and database for custom ERP systems?",
      a: "You own 100% of your source code, database architecture, and intellectual property. We deploy directly to your preferred cloud infrastructure (AWS, DigitalOcean, Vercel, or On-Premise) with full CI/CD deployment pipelines and no proprietary lock-in.",
    },
    {
      q: "How much does WhatsApp Business API cost in India and globally?",
      a: "Meta charges per-conversation fees based on message categories: Authentication (OTPs), Utility (Invoices/Order alerts), and Marketing (Broadcasts). Utility and OTP messages are significantly more cost-effective than traditional SMS, with delivery rates exceeding 98%. We provide transparent billing with no hidden markups.",
    },
    {
      q: "Which cities and countries does MIMC Technologies support?",
      a: "We operate dual engineering hubs in Toronto, Canada and Delhi, India, actively supporting enterprises across 100+ commercial metros in India, Canada, the United States, the United Arab Emirates, Saudi Arabia, the United Kingdom, Singapore, Brazil, and worldwide.",
    },
    {
      q: "How quickly can custom software or ERP modules be deployed?",
      a: "Using our modular rapid architecture framework, core database schemas and initial modules (such as billing and customer management) go live within 3 to 4 weeks, followed by seamless iterative feature rollouts with zero operational downtime.",
    },
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.mimctechnologies.com/#organization",
        name: "MIMC Technologies",
        url: "https://www.mimctechnologies.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.mimctechnologies.com/logo.webp",
          width: 1200,
          height: 630,
        },
        description:
          "Official WhatsApp Business API setup, custom ERP software, automated Tally integration, and enterprise software engineering.",
        foundingDate: "2020",
        areaServed: [
          "India",
          "Canada",
          "United States",
          "United Arab Emirates",
          "Saudi Arabia",
          "United Kingdom",
          "Singapore",
          "Brazil",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+91-9259418994",
            contactType: "sales & technical support",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
          },
          {
            "@type": "ContactPoint",
            telephone: "+1-647-797-2878",
            contactType: "enterprise architecture consulting",
            areaServed: ["CA", "US"],
            availableLanguage: ["English"],
          },
        ],
        sameAs: [
          "https://www.linkedin.com/company/mimc-technologies",
          "https://github.com/mimctechnologies",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.mimctechnologies.com/#website",
        url: "https://www.mimctechnologies.com",
        name: "MIMC Technologies",
        publisher: {
          "@id": "https://www.mimctechnologies.com/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target:
            "https://www.mimctechnologies.com/locations/?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.mimctechnologies.com/#faq",
        mainEntity: homepageFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <Layout
      title="Official WhatsApp Business API, Custom ERP & Tally Integration | MIMC Technologies"
      description="Official WhatsApp Business API onboarding, custom ERP development, and automated Tally Prime integration. Live in 48 hours for enterprises in India, Canada, UAE & 100+ cities."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* ===================== SECTION 1: HERO (HIGH-INTENT KEYWORD DRIVEN) ===================== */}
      <section className="relative min-h-[78vh] flex flex-col justify-center items-center text-center px-6 pt-12 pb-12 overflow-hidden">
        {/* Three.js Interactive Constellation Canvas */}
        <HeroCanvas />

        {/* Ambient Subtle Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto z-10 relative">
          {/* Overline Badge */}
          <div className="hero-badge inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#E8E8E2] text-xs font-semibold text-neutral-800 shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            <span className="font-mono text-[11px] text-teal-700 tracking-wide uppercase">
              Official Meta Business Partner
            </span>
            <span className="text-neutral-300">|</span>
            <span className="text-neutral-600 font-normal">
              Canada & India Operating Hubs
            </span>
          </div>

          {/* High-Intent Keyword H1 */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[74px] font-extrabold tracking-[-0.04em] text-[#171717] leading-[1.05] mb-6 font-heading">
            <span className="hero-title-line block">
              Official WhatsApp Business API,
            </span>
            <span className="hero-title-line block text-teal-700">
              Custom ERP & Tally Integration
            </span>
            <span className="hero-title-line block font-normal text-neutral-500 text-2xl sm:text-4xl lg:text-5xl mt-1">
              Built for Enterprises Worldwide.
            </span>
          </h1>

          {/* Plain English Sub-headline */}
          <p className="text-base sm:text-xl text-[#525252] max-w-3xl mx-auto leading-relaxed font-normal mb-8">
            We help businesses across India, Canada, UAE, and 100+ global cities
            set up official WhatsApp Business API in 48 hours, build custom ERP
            software with 100% code ownership, and automate Tally Prime invoice
            delivery.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#111111] hover:bg-teal-700 text-white font-medium text-base shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
            >
              <span>Get Free 48-Hour Setup Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/locations"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white hover:bg-[#F4F4F0] text-neutral-800 font-medium text-base border border-[#E8E8E2] transition-all"
            >
              <Globe2 className="w-4 h-4 text-teal-700" />
              <span>Explore 100+ City Hubs</span>
            </Link>
          </div>

          {/* Quick SLA Trust Badges */}
          <div className="mt-10 pt-6 border-t border-[#E8E8E2]/60 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-neutral-500 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>Official Meta BSP · Zero Ban Risk</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>Sub-3-Second Tally Invoice Dispatch</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>100% Source Code Ownership</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 2: MARQUEE TICKER ===================== */}
      <section className="w-full border-y border-[#E8E8E2] bg-[#F4F4F0] py-3.5 overflow-hidden">
        <Marquee speed={35} gradient={false} pauseOnHover={true}>
          <div className="flex items-center gap-12 text-xs font-mono uppercase tracking-widest text-neutral-600 px-6">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600" /> OFFICIAL
              META WHATSAPP BUSINESS API
            </span>
            <span className="text-neutral-300">/</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600" /> TALLY
              PRIME REAL-TIME INVOICE SYNC
            </span>
            <span className="text-neutral-300">/</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600" /> CUSTOM
              ERP & CRM ARCHITECTURE
            </span>
            <span className="text-neutral-300">/</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600" /> 100+
              GLOBAL CITY HUBS
            </span>
            <span className="text-neutral-300">/</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600" /> 24/7/365
              ARCHITECT SUPPORT
            </span>
            <span className="text-neutral-300">/</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600" /> TORONTO
              & DELHI DEV HUBS
            </span>
            <span className="text-neutral-300">/</span>
          </div>
        </Marquee>
      </section>

      {/* ===================== SECTION 3: METRICS / PROOF (DARK EDITORIAL) ===================== */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="rounded-3xl bg-[#111111] text-white p-8 sm:p-12 border border-neutral-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-600/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-teal-400 uppercase tracking-widest">
                <BarChart3 className="w-4 h-4" /> Proven Scale & Reliability
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight font-heading">
                Engineered for High-Volume Business Operations
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                From high-frequency invoice dispatch to custom multi-branch ERP
                databases, our infrastructure is built for 99.99% uptime and
                zero latency.
              </p>
              <div className="text-[10px] font-mono text-neutral-400 pt-1">
                * Based on internal deployment telemetry and verified client
                logs.
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 border-t lg:border-t-0 lg:border-l border-neutral-800 pt-6 lg:pt-0 lg:pl-10">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-neutral-200">
                  Enterprises Deployed
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">
                  India, Canada, UAE & Global
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-teal-400 tracking-tight mb-1">
                  <AnimatedCounter end={5} suffix="M+" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-neutral-200">
                  Messages Dispatched
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">
                  Via Meta Official Cloud API
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1">
                  <span className="font-heading">99.99%</span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-neutral-200">
                  Uptime Guarantee
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">
                  High-Availability Cloud SLA
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 4: PLAIN-ENGLISH VALUE PROPOSITION ===================== */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-3">
              <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block">
                [ 00 // WHAT WE DO ]
              </span>
              <h3 className="text-2xl font-bold text-[#171717] font-heading">
                We eliminate operational bottlenecks with software you actually
                own.
              </h3>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8 text-neutral-600 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              Most companies struggle with disconnected spreadsheets, expensive
              monthly SaaS subscriptions that increase prices every year, and
              unofficial WhatsApp automation scripts that risk getting phone
              numbers permanently banned.
            </p>

            <p>
              At{" "}
              <strong className="text-[#171717] font-semibold">
                MIMC Technologies
              </strong>
              , we solve this by delivering official, compliant, and permanent
              solutions:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 text-sm text-[#171717]">
              <div className="p-6 rounded-2xl bg-white border border-[#E8E8E2] shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                  <Workflow className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base mb-1 font-heading">
                  You Own 100% of Your Code
                </h4>
                <p className="text-neutral-500 leading-relaxed text-xs sm:text-sm">
                  Never get locked into per-user SaaS fees. You own your
                  complete source code, database tables, and API credentials
                  forever.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E8E8E2] shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base mb-1 font-heading">
                  100% Meta Official & Safe
                </h4>
                <p className="text-neutral-500 leading-relaxed text-xs sm:text-sm">
                  We only use official Meta Cloud APIs. Zero ban risk, verified
                  Green Tick eligibility, and bank-grade data encryption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 5: NUMBERED SERVICE ROWS ===================== */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#E8E8E2]">
          <div>
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
              [ 01 // CORE CAPABILITIES ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#171717] font-heading">
              Our Core Software & API Solutions
            </h2>
          </div>
          <Link
            href="/services"
            className="mt-3 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors"
          >
            <span>View All 6 Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Numbered Row Architecture */}
        <div className="divide-y divide-[#E8E8E2] border-y border-[#E8E8E2]">
          {services.map((item, idx) => {
            const isHovered = activeService === idx;
            return (
              <motion.div
                key={idx}
                onHoverStart={() => setActiveService(idx)}
                onHoverEnd={() => setActiveService(null)}
                className="group relative p-5 sm:p-7 transition-all duration-300 hover:bg-[#F4F4F0] cursor-pointer"
              >
                <div
                  className={`absolute top-0 left-0 bottom-0 w-1 bg-teal-600 transition-opacity duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />

                <Link href={item.href} className="block">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                    <div className="lg:col-span-2 flex items-baseline justify-between lg:block">
                      <span className="font-mono text-xl sm:text-2xl font-bold text-neutral-600 group-hover:text-teal-700 transition-colors">
                        {item.num}
                      </span>
                      <span className="lg:mt-1.5 block text-[11px] font-mono uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200/50 w-fit">
                        {item.tag}
                      </span>
                    </div>

                    <div className="lg:col-span-6 space-y-1.5">
                      <h3 className="text-lg sm:text-xl font-bold text-[#171717] group-hover:text-teal-800 transition-colors flex items-center gap-2 font-heading">
                        <span>{item.title}</span>
                      </h3>
                      <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="lg:col-span-3 space-y-1 text-xs text-neutral-700 font-medium">
                      {item.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>

                    <div className="lg:col-span-1 flex justify-end items-center">
                      <div className="w-9 h-9 rounded-full border border-[#E8E8E2] group-hover:border-teal-600 group-hover:bg-teal-600 group-hover:text-white text-neutral-600 flex items-center justify-center transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ===================== SECTION 6: FEATURED INTEGRATION CASE PROOF ===================== */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="rounded-3xl bg-gradient-to-br from-teal-800 via-teal-900 to-[#111111] text-white p-7 sm:p-11 border border-teal-700/50 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-700/60 border border-teal-500/40 text-teal-200 text-xs font-mono tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" /> Verified Business Impact
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight font-heading">
              “Payment collection cycles reduced from 28 days down to 6 days
              with automated Tally WhatsApp dispatch.”
            </h2>

            <p className="text-teal-100/80 text-sm sm:text-base leading-relaxed">
              How our automated Tally Prime to Meta WhatsApp API sync connector
              eliminated manual accountant follow-ups and accelerated cash
              collection for wholesale distributors.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/services/tally-whatsapp-integration"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-teal-50 text-teal-950 font-semibold text-sm transition-all shadow-md active:scale-95"
              >
                <span>Explore Tally Integration Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-800/80 hover:bg-teal-700/80 text-white font-semibold text-sm border border-teal-600/60 transition-all"
              >
                <span>Request Free Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 7: PLATFORM ECOSYSTEM ===================== */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
            [ 02 // PLATFORM ECOSYSTEM ]
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#171717] font-heading">
            Certified Cloud & Technology Alliances
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mt-2">
            Every software system and API gateway is engineered on certified
            enterprise-grade cloud platforms.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {[
            {
              logo: "/Amazon_Web_Services_Logo.svg.webp",
              tag: "Cloud Compute",
              alt: "Amazon Web Services",
              customClass: "max-h-8 max-w-[95px]",
            },
            {
              logo: "/startup-india-4.webp",
              tag: "Govt Recognized",
              alt: "Startup India (DPIIT)",
              customClass: "max-h-11 max-w-[120px]",
            },
            {
              logo: "/Vercel_logo_2025.svg",
              tag: "Edge CDN",
              alt: "Vercel Platform",
              customClass: "max-h-7 max-w-[95px]",
            },
            {
              logo: "/GitHub-Logo.webp",
              tag: "Code Governance",
              alt: "GitHub Enterprise",
              customClass: "max-h-8 max-w-[95px]",
            },
            {
              logo: "/Cloudflare_Logo.svg.webp",
              tag: "DDoS & Security",
              alt: "Cloudflare Zero Trust",
              customClass: "max-h-8 max-w-[100px]",
            },
            {
              logo: "/OpenAI_Logo.svg.webp",
              tag: "AI Cognitive Models",
              alt: "OpenAI Platform",
              customClass: "max-h-8 max-w-[100px]",
            },
            {
              logo: "/elevenlabs-official-logo.svg",
              tag: "Voice Synthesis",
              alt: "ElevenLabs Voice API",
              customClass: "max-h-7 max-w-[95px]",
            },
          ].map((partner, i) => (
            <Link
              key={i}
              href="/partners"
              className="p-5 rounded-2xl bg-white border border-[#E8E8E2] flex flex-col items-center justify-between gap-3 hover:border-teal-500 hover:shadow-sm transition-all duration-200 min-h-[120px] group"
            >
              <div className="flex-1 flex items-center justify-center w-full">
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  width={120}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  className={`${partner.customClass} object-contain transition-transform duration-300 group-hover:scale-105`}
                />
              </div>
              <span className="text-[11px] font-mono font-bold text-neutral-700 group-hover:text-teal-800 tracking-wide text-center">
                {partner.tag}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ===================== SECTION 8: EXPANDED 8-ITEM FAQ ACCORDION (AI-OPTIMIZED) ===================== */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
            [ 03 // FREQUENTLY ASKED QUESTIONS ]
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#171717] font-heading">
            Everything You Need to Know About WhatsApp API & ERP
          </h2>
          <p className="text-xs text-neutral-500 mt-1.5">
            Direct, plain-English answers to the most common questions about
            pricing, setup, compliance, and ownership.
          </p>
        </div>

        <div className="divide-y divide-[#E8E8E2] border-y border-[#E8E8E2]">
          {homepageFaqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} className="py-4">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#171717] group-hover:text-teal-800 transition-colors font-heading">
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

      {/* ===================== SECTION 9: REGIONAL DIRECTORY STRIP ===================== */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="p-8 rounded-3xl bg-white border border-[#E8E8E2] shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
                [ GLOBAL OPERATING FOOTPRINT ]
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#171717]">
                Deploying Solutions in 100+ Major Commercial Cities
              </h3>
            </div>
            <Link
              href="/locations"
              className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 hover:text-teal-900 font-mono uppercase"
            >
              <span>View All 100+ Hubs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
            {[
              { city: "Mumbai", country: "India", code: "IN" },
              { city: "Delhi NCR", country: "India", code: "IN" },
              { city: "Bengaluru", country: "India", code: "IN" },
              { city: "Dubai", country: "UAE", code: "AE" },
              { city: "Riyadh", country: "Saudi Arabia", code: "SA" },
              { city: "Toronto", country: "Canada", code: "CA" },
              { city: "London", country: "UK", code: "GB" },
              { city: "Singapore", country: "Singapore", code: "SG" },
              { city: "São Paulo", country: "Brazil", code: "BR" },
              { city: "Surat", country: "India", code: "IN" },
              { city: "Ahmedabad", country: "India", code: "IN" },
              { city: "Johannesburg", country: "South Africa", code: "ZA" },
            ].map((hub, hIdx) => (
              <Link
                key={hIdx}
                href="/locations"
                className="p-3 rounded-xl bg-[#FAFAF8] hover:bg-teal-50 border border-[#E8E8E2] hover:border-teal-300 transition-all flex flex-col justify-between"
              >
                <span className="font-bold text-neutral-900 font-heading">
                  {hub.city}
                </span>
                <span className="text-[10px] text-neutral-400 font-mono mt-0.5">
                  {hub.country}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION 10: CONVERSION CTA ===================== */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="rounded-3xl bg-[#F4F4F0] border border-[#E8E8E2] p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block">
              [ 04 // GET STARTED TODAY ]
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#171717] leading-tight font-heading">
              Ready to Onboard Meta WhatsApp API or Build Your Custom ERP?
            </h2>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Consult directly with our senior software architects in Canada or
              India. We’ll review your business requirements and provide a clear
              48-hour onboarding plan.
            </p>

            {isSubscribed ? (
              <div className="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-teal-800 text-sm font-medium flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-600" />
                <span>
                  Thank you! An enterprise consultant will contact you within 24
                  hours.
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
                            "Enterprise Consultation Request from MIMC Redesign",
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
                  placeholder="Enter your corporate email address..."
                  className="px-5 py-3 rounded-xl bg-white border border-[#E8E8E2] text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 w-full"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#111111] hover:bg-teal-700 text-white text-sm font-semibold transition-all shrink-0 active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Request Roadmap</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-500 pt-2">
              <span>✓ Direct Architect Review</span>
              <span>✓ 48-Hour Meta Onboarding</span>
              <span>✓ Toronto & Delhi Engineering Hubs</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
