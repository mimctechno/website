"use client";

import { useState } from "react";
import {
  CheckCircle2,
  ChevronRight,
  Search,
  BarChart3,
  Users,
  Lightbulb,
  Handshake,
  FileText,
  ArrowRight,
  Plus,
  Minus,
  Shield,
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
    title: "Full-Stack Technology Stack Audit",
    desc: "Rigorous diagnostic of your active software infrastructure, database performance, legacy bottlenecks, and recurring SaaS cost bloat.",
  },
  {
    icon: Lightbulb,
    title: "Digital Transformation Blueprints",
    desc: "Actionable, phased architectural roadmaps to modernize legacy operations with realistic budgets, team training plans, and zero operational downtime.",
  },
  {
    icon: Users,
    title: "Vendor-Neutral System Selection",
    desc: "Unbiased technical advisory. We evaluate ERP, CRM, and cloud platforms strictly against your requirements without vendor commissions.",
  },
  {
    icon: FileText,
    title: "Precision Requirements Engineering",
    desc: "We translate high-level business goals into rigorous technical specs, database schemas, and API contracts that prevent scope creep.",
  },
  {
    icon: BarChart3,
    title: "Implementation & Code Oversight",
    desc: "Senior engineering governance overseeing internal or third-party developers, enforcing code quality, automated test coverage, and milestone SLAs.",
  },
  {
    icon: Handshake,
    title: "Fractional CTO & Strategic Advisory",
    desc: "Executive-level technology governance and board-level strategy on demand without the overhead of a full-time C-suite executive.",
  },
];

const deliverables = [
  "Comprehensive Technology Stack Diagnostic Report",
  "Target Future-State Architecture Blueprint & Schemas",
  "Unbiased Vendor & Technology Scoring Matrix",
  "Phased Implementation Timeline & Financial Model",
  "Enterprise Risk Register & Failover Mitigation Plan",
  "Change Management & Team Enablement Roadmap",
];

const faqs = [
  {
    q: "Why hire an enterprise IT consultant before writing code?",
    a: "Building the wrong architecture or choosing the wrong vendor can cost hundreds of thousands of dollars and months of lost operational momentum. Our advisory ensures your database schemas, technology choices, and vendor contracts are validated and optimized before significant capital is committed.",
  },
  {
    q: "Are your consulting recommendations 100% vendor-neutral?",
    a: "Yes. MIMC accepts zero referral commissions or reseller kickbacks from third-party software vendors. Our assessments and architectural recommendations are 100% objective and aligned exclusively with your company's operational success.",
  },
  {
    q: "Can you assist with complex legacy system migrations?",
    a: "Yes. We specialize in mapping legacy SQL/desktop databases (such as legacy ERPs, FoxPro, or custom on-premise systems) into modern PostgreSQL cloud architectures with staged data verification and zero data loss.",
  },
  {
    q: "What size enterprises do you typically advise?",
    a: "We work with fast-growing middle-market firms outgrowing manual spreadsheets ($5M–$50M revenue) as well as multi-national enterprise corporations executing complex cloud migrations across North America and South Asia.",
  },
];

export default function EnterpriseConsulting() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <Layout
      title="Enterprise IT Consulting & Architecture Strategy | MIMC Technologies"
      description="Vendor-neutral enterprise IT consulting, technology stack audits, and digital transformation roadmaps by senior software architects at MIMC."
    >
      <ServiceSchema
        name="Enterprise IT Consulting"
        description="Vendor-neutral enterprise IT consulting including technology audits, digital transformation roadmaps, vendor selection, and implementation oversight."
        url="https://www.mimctechnologies.com/services/enterprise-consulting"
        faqs={faqs}
        breadcrumbs={[
          { name: "Home", url: "https://www.mimctechnologies.com" },
          {
            name: "Services",
            url: "https://www.mimctechnologies.com/services",
          },
          {
            name: "Enterprise Consulting",
            url: "https://www.mimctechnologies.com/services/enterprise-consulting",
          },
        ]}
        rating={4.8}
        reviewCount={312}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* ===================== HERO SECTION ===================== */}
        <section className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <ServiceBadges rating={4.8} reviewCount={312} />

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171717] leading-[1.08]">
              Enterprise IT Consulting <br />
              <span className="text-teal-700">& Architecture Strategy.</span>
            </h1>

            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-normal">
              Strategy before software. We audit legacy infrastructure, engineer
              custom system blueprints, and eliminate expensive vendor lock-in.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#111111] hover:bg-teal-700 text-white font-semibold text-sm shadow-xs transition-all active:scale-95"
              >
                <span>Schedule Architect Advisory</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-[#F4F4F0] text-neutral-800 font-semibold text-sm border border-[#E8E8E2] transition-all"
              >
                <span>All Capabilities</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </Link>
            </div>
          </div>

          {/* Console Mockup */}
          <div className="lg:col-span-6">
            <DashboardMockup
              title="Enterprise Infrastructure Audit Telemetry"
              stats={[
                { label: "Cost Inefficiencies", value: "-34.2%" },
                { label: "Architecture Score", value: "94 / 100" },
                { label: "Vendor Independence", value: "100%" },
              ]}
              tableHeaders={[
                "Assessment Area",
                "Current State",
                "Recommended Target",
                "Impact",
              ]}
              tableRows={[
                [
                  "Database & Storage",
                  "Fragmented SQL Server",
                  "Managed PostgreSQL + Edge",
                  "Critical",
                ],
                [
                  "Messaging & Alerts",
                  "Manual SMS + Email",
                  "Meta WhatsApp API Automation",
                  "High ROI",
                ],
                [
                  "ERP Licensing",
                  "$4,200/mo SaaS Fee",
                  "Custom Owned Architecture",
                  "$50k/yr Saved",
                ],
              ]}
            />
          </div>
        </section>

        {/* ===================== METRICS STRIP ===================== */}
        <section className="mb-16 rounded-2xl bg-white border border-[#E8E8E2] p-6 sm:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#E8E8E2]">
            {[
              { val: "100%", label: "Vendor Neutrality" },
              { val: "10+ Yrs", label: "Enterprise Experience" },
              { val: "50+", label: "Audits Completed" },
              { val: "24h", label: "Consultation Response" },
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
              [ ADVISORY SERVICES ]
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717]">
              Strategic Consulting Capabilities
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

        {/* ===================== DELIVERABLES MATRIX ===================== */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
              [ DELIVERABLES ]
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717]">
              Concrete Assets Delivered in Every Advisory Engagement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliverables.map((d, dIdx) => (
              <div
                key={dIdx}
                className="p-5 rounded-2xl bg-white border border-[#E8E8E2] flex items-center gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-neutral-800">
                  {d}
                </span>
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
              IT Consulting & Architecture Advisory Details
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
          serviceId="enterprise-consulting"
          serviceTitle="Enterprise IT Consulting"
        />

        {/* Related Services Navigation */}
        <RelatedServices currentId="enterprise-consulting" />
      </div>
    </Layout>
  );
}
