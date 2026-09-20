"use client";

import { useState } from "react";
import {
  Database,
  CheckCircle2,
  ChevronRight,
  BarChart3,
  Users,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  Plus,
  Minus,
  Layers,
  Sparkles,
  Server,
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
    icon: Database,
    title: "Custom Module Architecture",
    desc: "Engineered specifically for your exact supply chain, accounting logic, and multi-warehouse operations. Zero bloated generic templates.",
  },
  {
    icon: Users,
    title: "CRM & Unified Lead Pipelines",
    desc: "Complete client directory, multi-channel lead capture, automated follow-up cadences, and client interaction history in one pane of glass.",
  },
  {
    icon: BarChart3,
    title: "Sub-100ms Live Telemetry",
    desc: "Real-time query execution on inventory levels, multi-branch revenue aggregates, and overdue receivables with instant export capabilities.",
  },
  {
    icon: Zap,
    title: "Automated Workflow Engines",
    desc: "Eliminate manual data reconciliation. Automated purchase order generation, dynamic invoice dispatch, and cross-department approvals.",
  },
  {
    icon: Shield,
    title: "Role-Based ACL & Audit Logs",
    desc: "Granular access controls ensure team members only access their authorized scope. Immutable audit logging on all financial records.",
  },
  {
    icon: Globe,
    title: "Multi-Entity & Multi-GST Ready",
    desc: "Consolidated multi-company balance sheets, multi-currency conversion, and regional tax compliance managed seamlessly.",
  },
];

const industries = [
  {
    name: "Manufacturing & Assembly",
    items: [
      "Bill of Materials (BOM) tracking",
      "Raw material inventory forecast",
      "Quality assurance inspection gates",
      "Cost of Goods Sold (COGS) analytics",
    ],
  },
  {
    name: "Wholesale & Distribution",
    items: [
      "Multi-location warehouse sync",
      "Dynamic wholesale price lists",
      "Credit limit enforcement & alerts",
      "Automated e-way bill generation",
    ],
  },
  {
    name: "Professional Services",
    items: [
      "Milestone-based project billing",
      "Resource allocation tracking",
      "Automated recurring retainer invoices",
      "Profitability forecasting dashboards",
    ],
  },
  {
    name: "Healthcare & Logistics",
    items: [
      "Batch & expiry date tracking",
      "Cold-chain shipment telemetry",
      "Regulatory compliance audit logs",
      "Encrypted patient & client records",
    ],
  },
];

const faqs = [
  {
    q: "What is an enterprise ERP system and why build custom?",
    a: "An Enterprise Resource Planning (ERP) platform consolidates your finance, inventory, sales, and operations into a single authoritative database. Building custom gives you complete source code ownership, eliminates monthly per-user licensing fees, and adapts 100% to your workflows instead of forcing your team into rigid SaaS constraints.",
  },
  {
    q: "How does your custom CRM integrate with the ERP database?",
    a: "Our CRM and ERP share a unified PostgreSQL/Node.js architecture. When a sales deal closes in the CRM, it instantly provisions invoices, inventory reservations, and billing records in the ERP with zero sync delays or API mismatches.",
  },
  {
    q: "What is the typical deployment timeline for a custom ERP?",
    a: "Using our rapid modular development methodology, core modules (invoicing, accounts, inventory) are operational in staging within 3–4 weeks. Full enterprise rollouts occur in iterative phases with continuous user training.",
  },
  {
    q: "Can this ERP integrate with Tally Prime and WhatsApp Business API?",
    a: "Yes. All our ERP deployments feature integration-first architecture. We deploy native connectors to Tally Prime for accounting sync and the official Meta WhatsApp API for instant invoice delivery and automated customer communication.",
  },
  {
    q: "Do you deploy to our cloud infrastructure or host it?",
    a: "We deploy directly to your enterprise cloud infrastructure (AWS, Vercel, Google Cloud, or On-Premise bare-metal servers). You retain full administrative root access, database backups, and intellectual property.",
  },
];

export default function ERPCRM() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <Layout
      title="Enterprise ERP & CRM Solutions — Custom Software Development"
      description="Custom ERP and CRM solutions for manufacturing, retail, distribution, and services companies. Cloud & on-premise deployments by MIMC Technologies."
    >
      <ServiceSchema
        name="Enterprise ERP & CRM Solutions"
        description="Custom ERP and CRM software development and deployment for manufacturing, retail, distribution, and services businesses globally."
        url="https://www.mimctechnologies.com/services/erp-crm"
        faqs={faqs}
        breadcrumbs={[
          { name: "Home", url: "https://www.mimctechnologies.com" },
          {
            name: "Services",
            url: "https://www.mimctechnologies.com/services",
          },
          {
            name: "ERP & CRM",
            url: "https://www.mimctechnologies.com/services/erp-crm",
          },
        ]}
        rating={4.9}
        reviewCount={345}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* ===================== HERO SECTION ===================== */}
        <section className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <ServiceBadges rating={4.9} reviewCount={345} />

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171717] leading-[1.08] font-heading">
              Custom Enterprise ERP <br />
              <span className="text-teal-700">& Scalable CRM Software.</span>
            </h1>

            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-normal">
              Eliminate operational bottlenecks, disconnected spreadsheets, and
              expensive per-user SaaS license fees. We engineer custom business
              software that unifies multi-warehouse inventory, billing, and
              sales pipelines.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#111111] hover:bg-teal-700 text-white font-semibold text-sm shadow-xs transition-all active:scale-95"
              >
                <span>Schedule Architecture Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-[#F4F4F0] text-neutral-800 font-semibold text-sm border border-[#E8E8E2] transition-all"
              >
                <span>All Solutions</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </Link>
            </div>
          </div>

          {/* Console Mockup */}
          <div className="lg:col-span-6">
            <DashboardMockup
              title="Enterprise ERP System Overview"
              stats={[
                { label: "Q3 Gross Revenue", value: "$4,280,000" },
                { label: "Active Deals", value: "84 Open" },
                { label: "Fulfillment SLA", value: "99.4%" },
              ]}
              tableHeaders={["Account Name", "Value", "Stage", "Lead Engineer"]}
              tableRows={[
                ["Acme Global Holdings", "$150,000", "Contracted", "Sarah J."],
                ["Vertex Logistics Ltd", "$420,000", "Deployed", "David M."],
                ["Nexus Retail Corp", "$85,000", "In Review", "Alex K."],
              ]}
            />
          </div>
        </section>

        {/* ===================== METRICS STRIP ===================== */}
        <section className="mb-16 rounded-2xl bg-white border border-[#E8E8E2] p-6 sm:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#E8E8E2]">
            {[
              { val: "3–4 Wks", label: "Core Module Delivery" },
              { val: "99.99%", label: "Infrastructure Uptime" },
              { val: "100%", label: "Source Code Ownership" },
              { val: "$0", label: "Per-User License Fees" },
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
              [ CORE CAPABILITIES ]
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717]">
              Engineered for Enterprise Operational Velocity
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

        {/* ===================== INDUSTRY VERTICALS ===================== */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
              [ VERTICALS ]
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717]">
              Industry-Specific Implementation Modules
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((ind, iIdx) => (
              <div
                key={iIdx}
                className="p-6 rounded-2xl bg-white border border-[#E8E8E2]"
              >
                <h3 className="font-heading font-bold text-lg text-[#171717] mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-600" />
                  <span>{ind.name}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {ind.items.map((item, itemIdx) => (
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
              ERP & CRM Architecture Details
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
          serviceId="erp-crm"
          serviceTitle="Enterprise ERP & CRM"
        />

        {/* Related Services Navigation */}
        <RelatedServices currentId="erp-crm" />
      </div>
    </Layout>
  );
}
