"use client";

import { useState } from "react";
import {
  CheckCircle2,
  ChevronRight,
  Zap,
  Clock,
  Shield,
  Database,
  FileText,
  Terminal,
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
import DashboardMockup from "../../components/ui/DashboardMockup";
import RelatedServices from "../../components/RelatedServices";
import ServiceSchema from "../../components/seo/ServiceSchema";
import ServiceBadges from "../../components/ui/ServiceBadges";

const features = [
  {
    icon: FileText,
    title: "Instant PDF Voucher Dispatch",
    desc: "The moment an invoice or voucher is entered in Tally Prime, an encrypted, watermarked PDF is rendered and dispatched to the client's verified WhatsApp in < 3 seconds.",
  },
  {
    icon: Clock,
    title: "Automated Outstanding Cadences",
    desc: "Configurable overdue reminder schedules (e.g. 3, 7, 15 days past due) that notify account contacts automatically with direct payment link integration.",
  },
  {
    icon: Zap,
    title: "Party-Wise Ledger Summaries",
    desc: "Generate and dispatch monthly account statements, debit/credit reconciliations, and balance confirmations on demand or recurring schedules.",
  },
  {
    icon: Database,
    title: "Tally Prime & ERP 9 Native Bridge",
    desc: "Direct XML/TDL connector compatible with both Tally ERP 9 and Tally Prime multi-user network configurations without requiring database upgrades.",
  },
  {
    icon: Shield,
    title: "Bank-Grade Encryption & Privacy",
    desc: "Direct endpoint-to-endpoint payload transfer. Your accounting ledgers and client databases never route through third-party data collection relays.",
  },
  {
    icon: Terminal,
    title: "Multi-GST & Multi-Company Support",
    desc: "Manage multiple enterprise subsidiaries, distinct GSTIN registrations, and customized voucher formats from a single unified server instance.",
  },
];

const faqs = [
  {
    q: "How does Tally WhatsApp Integration work in real-time?",
    a: "Our lightweight connector integrates into your Tally Prime or ERP 9 environment. Whenever a voucher (Sales Invoice, Receipt, Payment Advice) is accepted, the connector extracts the data, converts it into a high-resolution tamper-proof PDF, and triggers the Meta WhatsApp API to dispatch it to the ledger's verified mobile number in under 3 seconds.",
  },
  {
    q: "Does this require modifying our existing Tally company data or chart of accounts?",
    a: "No. The integration runs silently alongside your standard Tally installation. Your accountants continue entering vouchers exactly as they always have. There is zero change to your daily accounting workflow.",
  },
  {
    q: "Can clients reply to the WhatsApp invoice and interact with our accounts team?",
    a: "Yes. Inbound customer replies can be routed to your central WhatsApp inbox, auto-answered via chatbot with balance summaries, or forwarded directly to your assigned accounts executive.",
  },
  {
    q: "What is the typical setup timeline for an enterprise with multiple branches?",
    a: "Standard deployment takes 24–48 hours. This includes installing the connector, configuring Meta message templates, mapping customer phone fields, and performing live trial dispatches.",
  },
  {
    q: "Are the PDF invoices compliant with tax authorities and watermarked?",
    a: "Yes. The generated PDFs are identical to your official Tally invoices, complete with GST breakdowns, QR codes, digital signatures, and custom company branding.",
  },
];

const steps = [
  {
    n: "01",
    title: "Tally Architecture Audit",
    desc: "We analyze your Tally version (Prime / ERP 9), server configuration, and voucher templates.",
  },
  {
    n: "02",
    title: "Meta Template Approval",
    desc: "We register pre-approved WhatsApp invoice and reminder templates with Meta for 100% deliverability.",
  },
  {
    n: "03",
    title: "Connector Installation",
    desc: "Our engineers install the background connector service on your local or cloud Tally server.",
  },
  {
    n: "04",
    title: "Live Trial & Go-Live",
    desc: "We conduct end-to-end invoice dispatch trials, train your accounts team, and enable automated schedules.",
  },
];

export default function TallyIntegration() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <Layout
      title="Tally WhatsApp Integration — Auto Invoice & Reminder Dispatch | MIMC"
      description="Send invoices, payment reminders, and ledger statements directly from Tally ERP 9 & Tally Prime to WhatsApp. Official API integration by MIMC Technologies."
    >
      <ServiceSchema
        name="Tally WhatsApp Integration"
        description="Direct integration between Tally ERP 9 / Tally Prime and WhatsApp Business API. Automatically send invoices, payment reminders, and ledger statements via WhatsApp."
        url="https://www.mimctechnologies.com/services/tally-whatsapp-integration"
        faqs={faqs}
        breadcrumbs={[
          { name: "Home", url: "https://www.mimctechnologies.com" },
          {
            name: "Services",
            url: "https://www.mimctechnologies.com/services",
          },
          {
            name: "Tally Integration",
            url: "https://www.mimctechnologies.com/services/tally-whatsapp-integration",
          },
        ]}
        rating={4.9}
        reviewCount={328}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* ===================== HERO SECTION ===================== */}
        <section className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <ServiceBadges rating={4.9} reviewCount={328} />

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171717] leading-[1.08]">
              Automated Tally ERP <br />
              <span className="text-teal-700">WhatsApp Invoicing Sync.</span>
            </h1>

            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-normal">
              Invoice entered in Tally? Dispatched to WhatsApp instantly in 3
              seconds. Eliminate manual PDF exporting, missed follow-ups, and
              delayed payment collections.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#111111] hover:bg-teal-700 text-white font-semibold text-sm shadow-xs transition-all active:scale-95"
              >
                <span>Request Free Tally Trial</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/whatsapp-api"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-[#F4F4F0] text-neutral-800 font-semibold text-sm border border-[#E8E8E2] transition-all"
              >
                <span>Meta API Capabilities</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </Link>
            </div>
          </div>

          {/* Console Mockup */}
          <div className="lg:col-span-6">
            <DashboardMockup
              title="Tally Prime to WhatsApp Dispatch Stream"
              stats={[
                { label: "Invoices Synced", value: "48,290" },
                { label: "Delivery Speed", value: "1.8s Avg" },
                { label: "Collection Rate", value: "+38.4%" },
              ]}
              tableHeaders={[
                "Voucher #",
                "Enterprise Account",
                "Amount",
                "WhatsApp Status",
              ]}
              tableRows={[
                [
                  "INV-84920",
                  "Acme Global Corp",
                  "$14,250",
                  "Delivered · Read",
                ],
                ["INV-84921", "Nexus Retail Ltd", "$8,900", "Ledger Synced"],
                [
                  "INV-84922",
                  "Vertex Logistics",
                  "$22,400",
                  "Payment Link Sent",
                ],
              ]}
            />
          </div>
        </section>

        {/* ===================== METRICS STRIP ===================== */}
        <section className="mb-16 rounded-2xl bg-white border border-[#E8E8E2] p-6 sm:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#E8E8E2]">
            {[
              { val: "< 3s", label: "Invoice Delivery Time" },
              { val: "100%", label: "Manual Delay Eliminated" },
              { val: "24h", label: "Same-Day Deployment" },
              { val: "Tally Prime", label: "Full Compatibility" },
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

        {/* ===================== WHAT GETS SENT ===================== */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
              [ AUTOMATED DISPATCH TYPES ]
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717]">
              Documents Dispatched Directly from Tally
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Invoices & Billing Vouchers",
                items: [
                  "Sales Invoices with GST & QR",
                  "Proforma & Quotation PDFs",
                  "Debit & Credit Adjustment Notes",
                  "Delivery Challans & Dispatch Slips",
                ],
              },
              {
                title: "Outstanding Reminders",
                items: [
                  "Overdue Payment Alert Cadences",
                  "Due-Date Notification Blasts",
                  "Credit Limit Approaching Warnings",
                  "Instant Payment Link Inclusions",
                ],
              },
              {
                title: "Ledgers & Account Reports",
                items: [
                  "Party-Wise Ledger Statements",
                  "Outstanding Balance Summaries",
                  "Annual Account Balance Confirmations",
                  "Custom Branded TDL Exports",
                ],
              },
            ].map((col, cIdx) => (
              <div
                key={cIdx}
                className="p-6 rounded-2xl bg-white border border-[#E8E8E2]"
              >
                <h3 className="font-heading font-bold text-lg text-teal-800 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-600" />
                  <span>{col.title}</span>
                </h3>
                <ul className="space-y-2.5">
                  {col.items.map((item, itemIdx) => (
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

        {/* ===================== FEATURES GRID ===================== */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
              [ CAPABILITIES ]
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717]">
              Enterprise Connector Capabilities
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

        {/* ===================== SETUP METHODOLOGY ===================== */}
        <section className="mb-16">
          <div className="rounded-3xl bg-[#111111] text-white p-8 sm:p-12 border border-neutral-800 shadow-xl">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block mb-1">
                [ RAPID SETUP ]
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                4-Step Integration Lifecycle
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {steps.map((s, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-neutral-900 border border-neutral-800"
                >
                  <span className="font-mono text-xl font-bold text-teal-400 block mb-2">
                    {s.n}
                  </span>
                  <h3 className="text-sm font-bold text-white mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-neutral-400 text-xs leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== FAQ ACCORDION ===================== */}
        <section className="mb-16 max-w-4xl">
          <div className="mb-8">
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
              [ FAQ ]
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717]">
              Tally Integration Technical Specifications
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
        <RelatedServices currentId="tally-integration" />
      </div>
    </Layout>
  );
}
