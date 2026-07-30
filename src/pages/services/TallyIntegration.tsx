import {
  CheckCircle,
  ChevronRight,
  Zap,
  Clock,
  Shield,
  Database,
  FileText,
  Terminal,
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import DashboardMockup from "../../components/ui/DashboardMockup";
import BrowserMockup from "../../components/ui/BrowserMockup";
import RelatedServices from "../../components/RelatedServices";

const features = [
  {
    icon: FileText,
    title: "Auto Invoice Dispatch",
    desc: "The moment an invoice is saved in Tally, it is automatically sent to your client's WhatsApp. Zero manual steps.",
  },
  {
    icon: Clock,
    title: "Payment Reminders",
    desc: "Automated overdue payment reminders sent directly via WhatsApp — customisable at 3, 7, and 15-day intervals.",
  },
  {
    icon: Zap,
    title: "Ledger Statements",
    desc: "Send party-wise ledger statements, outstanding balances, and account summaries on demand or on schedule.",
  },
  {
    icon: Database,
    title: "Tally ERP 9 & Prime",
    desc: "Full compatibility with Tally ERP 9 and the latest Tally Prime. No Tally upgrade required.",
  },
  {
    icon: Shield,
    title: "Secure Data Transfer",
    desc: "All data transfers between Tally and WhatsApp are encrypted. Your financial data never touches a third-party server.",
  },
  {
    icon: Terminal,
    title: "Custom Message Templates",
    desc: "Pre-approved WhatsApp message templates for invoices, reminders, and confirmations — all editable by you.",
  },
];

const faqs = [
  {
    q: "What is Tally WhatsApp Integration?",
    a: "Tally WhatsApp Integration is a direct bridge between your Tally accounting software (ERP 9 or Tally Prime) and the WhatsApp Business API. It allows you to automatically send invoices, payment reminders, and ledger statements to clients via WhatsApp the moment they are generated in Tally — without any manual copy-pasting or downloading.",
  },
  {
    q: "Does this work with Tally ERP 9 and Tally Prime?",
    a: "Yes. Our integration is fully compatible with both Tally ERP 9 and Tally Prime. We also support customised Tally configurations and company-specific modifications (TDL files).",
  },
  {
    q: "Can I send invoices in PDF format on WhatsApp?",
    a: "Yes. Invoices, vouchers, and ledger statements can be sent as PDF documents directly on WhatsApp, exactly as they appear in Tally. The client receives a professional, branded PDF on their phone.",
  },
  {
    q: "How long does the Tally WhatsApp Integration setup take?",
    a: "Standard setup takes 1–3 business days. This includes WhatsApp API configuration, Tally connector installation, and testing with your live data.",
  },
  {
    q: "Does it require any changes to my Tally software?",
    a: "No major changes are needed. We install a lightweight Tally connector (TDL or TCP based) that runs alongside your existing Tally installation. Your workflow stays exactly the same.",
  },
  {
    q: "Can I customise what gets sent and when?",
    a: "Absolutely. You can configure which transaction types trigger a message (invoices, receipts, journal entries), which clients receive messages, the timing of reminders, and the content of each message template.",
  },
];

const steps = [
  {
    n: "01",
    title: "Tally Audit",
    desc: "We review your Tally version, company configuration, and existing workflow to plan the integration.",
  },
  {
    n: "02",
    title: "WhatsApp Setup",
    desc: "We configure your WhatsApp Business API account and create approved message templates.",
  },
  {
    n: "03",
    title: "Connector Install",
    desc: "Our Tally connector is installed on your server. It runs silently alongside Tally — no disruption to operations.",
  },
  {
    n: "04",
    title: "Test & Go Live",
    desc: "We test with real transactions, confirm delivery, and hand over full control to your team.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tally WhatsApp Integration",
  provider: {
    "@type": "Organization",
    name: "MIMC Technologies",
    url: "https://www.mimctechnologies.com",
  },
  description:
    "Direct integration between Tally ERP 9 / Tally Prime and WhatsApp Business API. Automatically send invoices, payment reminders, and ledger statements via WhatsApp.",
  areaServed: ["IN"],
  url: "https://www.mimctechnologies.com/services/tally-whatsapp-integration",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function TallyIntegration() {
  return (
    <Layout
      title="Tally WhatsApp Integration — Auto Invoice & Reminder Dispatch"
      description="Send invoices, payment reminders, and ledger statements directly from Tally ERP 9 & Tally Prime to WhatsApp. Official API integration by MIMC Technologies."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero */}
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex gap-3 flex-wrap">
              <span className="border border-[var(--color-cyber-accent3)]/40 text-[var(--color-cyber-accent3)] px-3 py-1 text-xs font-[var(--font-cyber-accent)] uppercase tracking-widest bg-[var(--color-cyber-accent3)]/10">
                Tally Specialist
              </span>
              <span className="border border-[#25D366]/40 text-[#25D366] px-3 py-1 text-xs font-[var(--font-cyber-accent)] uppercase tracking-widest bg-[#25D366]/10">
                WhatsApp API
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-widest font-[var(--font-cyber-head)] leading-none text-white">
              <span className="block cyber-glitch" data-text="TALLY">
                TALLY
              </span>
              <span className="text-[var(--color-cyber-accent3)]">
                WHATSAPP
              </span>
              <span className="block text-white">INTEGRATION</span>
            </h1>

            <p className="border-l-2 border-[var(--color-cyber-accent3)] pl-4 font-[var(--font-cyber-accent)] text-[var(--color-cyber-muted-fg)] leading-relaxed uppercase tracking-wider text-sm">
              &gt; Invoice generated in Tally? WhatsApp sent instantly.
              <br />
              &gt; Payment overdue? Automated reminder dispatched.
              <br />
              &gt; Zero manual steps. Zero missed follow-ups.
              <span className="inline-block w-2 h-4 bg-[var(--color-cyber-accent3)] animate-blink ml-1 align-middle" />
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 font-[var(--font-cyber-accent)] uppercase tracking-widest cyber-chamfer border-2 border-[var(--color-cyber-accent3)] bg-[var(--color-cyber-accent3)] text-black hover:bg-transparent hover:text-[var(--color-cyber-accent3)] transition-all duration-300 px-8 py-4 font-bold"
              >
                GET STARTED{" "}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services/whatsapp-api"
                className="group inline-flex items-center justify-center gap-2 font-[var(--font-cyber-accent)] uppercase tracking-widest cyber-chamfer border-2 border-[var(--color-cyber-accent)] text-[var(--color-cyber-accent)] hover:bg-[var(--color-cyber-accent)] hover:text-black transition-all duration-300 px-8 py-4"
              >
                WHATSAPP API INFO
              </Link>
            </div>
          </div>

          {/* Image placeholder */}
          {/* Tally Dashboard Mockup */}
          <div className="relative p-1 cyber-chamfer-reverse bg-gradient-to-br from-[#00d4ff]/20 to-transparent group overflow-hidden">
            <DashboardMockup
              title="Tally ERP 9 / Prime Sync"
              stats={[
                { label: "Invoices Synced", value: "1,204" },
                { label: "WhatsApp Delivery", value: "99.9%" },
                { label: "Payments Collected", value: "₹4.2M" },
              ]}
              tableHeaders={["Invoice", "Customer", "Amount", "Status"]}
              tableRows={[
                ["INV-2026-001", "Acme Corp", "₹45,000", "Paid"],
                ["INV-2026-002", "Global Tech", "₹12,500", "Sent via WA"],
                ["INV-2026-003", "Stark Ind", "₹85,000", "Pending"],
              ]}
            />
            <div className="absolute bottom-4 right-4 z-20 bg-black/80 backdrop-blur-md border border-[var(--color-cyber-accent)] px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[var(--color-cyber-accent)] font-[var(--font-cyber-accent)] text-[10px] tracking-widest uppercase animate-blink">
                TALLY_SYNC_ACTIVE
              </span>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-cyber-border)]">
          {[
            { value: "< 1s", label: "Invoice Delivery Time" },
            { value: "100%", label: "Automation Rate" },
            { value: "0", label: "Manual Steps Required" },
            { value: "1–3", label: "Days to Go Live" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-[var(--color-cyber-card)] p-8 text-center group hover:bg-[var(--color-cyber-accent3)]/5 transition-colors"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-black font-[var(--font-cyber-head)] mb-2 text-[var(--color-cyber-accent3)]">
                {s.value}
              </div>
              <div className="text-xs font-[var(--font-cyber-accent)] uppercase tracking-widest text-[var(--color-cyber-muted-fg)]">
                {s.label}
              </div>
            </div>
          ))}
        </section>

        {/* What gets sent */}
        <section className="mb-24 border border-[var(--color-cyber-border)] p-6 sm:p-10 md:p-14 relative overflow-hidden group hover:border-[var(--color-cyber-accent3)]/50 transition-colors">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[var(--color-cyber-accent3)]/5 blur-[100px]" />
          <h2 className="text-2xl md:text-3xl font-bold font-[var(--font-cyber-head)] uppercase tracking-widest text-white mb-10 flex items-center gap-4">
            <span className="text-[var(--color-cyber-accent3)]">&gt;&gt;</span>{" "}
            WHAT_GETS_SENT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Invoices & Bills",
                items: [
                  "Sales invoices (PDF)",
                  "Purchase bills",
                  "Proforma invoices",
                  "Debit/Credit notes",
                ],
              },
              {
                title: "Reminders & Alerts",
                items: [
                  "Overdue payment reminders",
                  "Due date alerts",
                  "Bounced cheque notifications",
                  "Credit limit warnings",
                ],
              },
              {
                title: "Statements & Reports",
                items: [
                  "Party ledger statements",
                  "Outstanding balance summaries",
                  "Monthly account reports",
                  "Custom Tally reports",
                ],
              },
            ].map((col) => (
              <div key={col.title}>
                <h3 className="font-[var(--font-cyber-head)] text-sm font-bold uppercase tracking-widest text-[var(--color-cyber-accent3)] mb-5">
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-[var(--font-cyber-accent)] uppercase tracking-wider text-[var(--color-cyber-muted-fg)]"
                    >
                      <CheckCircle className="w-4 h-4 flex-shrink-0 text-[var(--color-cyber-accent3)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Feature Grid */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12 border-b border-[var(--color-cyber-border)] pb-4">
            <span className="text-[var(--color-cyber-accent3)] font-[var(--font-cyber-accent)] text-sm uppercase tracking-widest">
              &gt;&gt; FEATURE_SET
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-[2px] cyber-chamfer"
                style={{
                  background: "linear-gradient(135deg, #00d4ff33, transparent)",
                }}
              >
                <div className="bg-[var(--color-cyber-card)] cyber-chamfer p-8 h-full relative overflow-hidden group-hover:bg-[#0a0a0f] transition-colors">
                  <div
                    className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background:
                        "linear-gradient(to right, transparent, var(--color-cyber-accent3), transparent)",
                    }}
                  />
                  <div className="w-12 h-12 border border-[var(--color-cyber-accent3)]/30 flex items-center justify-center mb-6 bg-black">
                    <f.icon
                      className="w-6 h-6 text-[var(--color-cyber-accent3)]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-[var(--font-cyber-head)] text-base font-bold uppercase tracking-widest text-white mb-3 group-hover:text-[var(--color-cyber-accent3)] transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-[var(--color-cyber-muted-fg)] text-sm leading-relaxed uppercase tracking-wider">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Setup Process */}
        <section className="mb-24 border border-[var(--color-cyber-border)] p-6 sm:p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[var(--color-cyber-accent3)]/5 blur-[80px]" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-[var(--font-cyber-head)] uppercase tracking-widest text-white mb-10 sm:mb-16 flex flex-wrap items-center gap-2 sm:gap-4 break-words">
            <span className="text-[var(--color-cyber-accent3)]">&gt;&gt;</span>{" "}
            SETUP_PROCESS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.n} className="relative">
                {i < 3 && (
                  <div
                    className="hidden md:block absolute top-5 left-full w-full h-px z-10"
                    style={{
                      background:
                        "linear-gradient(to right, var(--color-cyber-accent3), transparent)",
                    }}
                  />
                )}
                <div className="font-[var(--font-cyber-head)] text-5xl font-black mb-4 text-[var(--color-cyber-accent3)] opacity-20">
                  {s.n}
                </div>
                <h3 className="font-[var(--font-cyber-head)] text-base font-bold uppercase tracking-widest text-white mb-3">
                  {s.title}
                </h3>
                <p className="text-[var(--color-cyber-muted-fg)] text-sm uppercase tracking-wider leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Integration Mockup */}
        <section className="mb-24 p-1 group">
          <BrowserMockup title="mimc.tech/tally-integration-portal" />
        </section>

        {/* FAQ */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12 border-b border-[var(--color-cyber-border)] pb-4">
            <span className="text-[var(--color-cyber-accent)] font-[var(--font-cyber-accent)] text-sm uppercase tracking-widest">
              &gt;&gt; FAQ // RICH_SNIPPETS
            </span>
          </div>
          <div className="space-y-4 max-w-4xl">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group border border-[var(--color-cyber-border)] bg-[var(--color-cyber-card)] hover:border-[var(--color-cyber-accent3)]/50 transition-colors cyber-chamfer"
              >
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <h3 className="text-sm md:text-base font-bold tracking-widest uppercase font-[var(--font-cyber-head)] text-white group-hover:text-[var(--color-cyber-accent3)] transition-colors pr-4">
                    {f.q}
                  </h3>
                  <span className="text-[var(--color-cyber-accent3)] text-xl flex-shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="px-6 pb-6 text-sm text-[var(--color-cyber-muted-fg)] leading-relaxed uppercase tracking-wider border-t border-[var(--color-cyber-border)] pt-4">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center p-12 md:p-20 relative overflow-hidden border-2 border-[var(--color-cyber-accent3)]">
          <div className="absolute inset-0 bg-[var(--color-cyber-accent3)]/3" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-widest font-[var(--font-cyber-head)] text-white mb-6 relative z-10">
            STOP SENDING INVOICES
            <br />
            <span className="text-[var(--color-cyber-accent3)]">MANUALLY.</span>
          </h2>
          <p className="font-[var(--font-cyber-accent)] text-[var(--color-cyber-muted-fg)] uppercase tracking-widest text-sm mb-10 relative z-10">
            Setup in 1–3 days. Works with your existing Tally. No disruption.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 font-[var(--font-cyber-accent)] uppercase tracking-widest cyber-chamfer border-2 border-[var(--color-cyber-accent3)] bg-[var(--color-cyber-accent3)] text-black hover:bg-transparent hover:text-[var(--color-cyber-accent3)] transition-all duration-300 px-10 py-5 text-base font-bold"
            >
              GET FREE DEMO{" "}
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services/whatsapp-api"
              className="group inline-flex items-center gap-2 font-[var(--font-cyber-accent)] uppercase tracking-widest cyber-chamfer border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-black transition-all duration-300 px-10 py-5 text-base"
            >
              WHATSAPP API DETAILS
            </Link>
          </div>
        </section>

        <RelatedServices currentId="tally-integration" />
      </div>
    </Layout>
  );
}
