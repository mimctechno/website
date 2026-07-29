import {
  Zap,
  CheckCircle,
  ChevronRight,
  MessageSquare,
  Globe,
  Clock,
  Shield,
  BarChart3,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import RelatedServices from "../../components/RelatedServices";

const features = [
  {
    icon: MessageSquare,
    title: "Bulk Messaging",
    desc: "Send thousands of personalised messages simultaneously — invoices, alerts, promotions, OTPs.",
  },
  {
    icon: Shield,
    title: "Official Meta Partner",
    desc: "We set up the official WhatsApp Business API through Meta's approved BSP network. 100% compliant.",
  },
  {
    icon: Zap,
    title: "Instant Automation",
    desc: "Trigger messages automatically from your ERP, CRM, Tally, or any system via webhooks and APIs.",
  },
  {
    icon: Globe,
    title: "Multi-Region",
    desc: "Serving India, Brazil, Indonesia, Philippines, Mexico, and all high-WhatsApp adoption markets.",
  },
  {
    icon: Clock,
    title: "24/7 Uptime",
    desc: "Our managed infrastructure guarantees message delivery with 99.9% uptime SLA.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    desc: "Real-time delivery reports, open rates, and conversation analytics in one clean dashboard.",
  },
];

const useCases = [
  {
    region: "🇮🇳 India",
    cases: [
      "Invoice dispatch via Tally",
      "Payment reminders for SMEs",
      "Order confirmations for e-commerce",
      "OTP & transactional alerts",
    ],
  },
  {
    region: "🇧🇷 Brazil",
    cases: [
      "Customer support automation",
      "Appointment reminders",
      "Promotional campaigns",
      "Bulk B2C outreach",
    ],
  },
  {
    region: "🌏 South & Southeast Asia",
    cases: [
      "Banking notifications",
      "Logistics tracking updates",
      "HR & internal communications",
      "Lead nurturing sequences",
    ],
  },
  {
    region: "🌎 Latin America",
    cases: [
      "E-commerce order updates",
      "WhatsApp chatbots",
      "CRM follow-up sequences",
      "Customer retention campaigns",
    ],
  },
];

const faqs = [
  {
    q: "What is the Official WhatsApp Business API?",
    a: "The Official WhatsApp Business API is a Meta-approved communication channel that allows businesses to send automated messages at scale. Unlike the WhatsApp Business App (which is for manual use), the API connects directly to your software systems and enables automated, two-way communication with customers.",
  },
  {
    q: "What is the difference between Official and Unofficial WhatsApp API?",
    a: "The Official API is Meta-approved, fully compliant, and safe for long-term use. It requires a verified business account. Unofficial solutions (such as those using WhatsApp Web automation) are lower cost and faster to set up, but carry a risk of account bans. We offer both and advise based on your volume and risk tolerance.",
  },
  {
    q: "How long does WhatsApp API setup take?",
    a: "Official API setup typically takes 3–7 business days, including Meta business verification. Unofficial solutions can be live within 24–48 hours. We handle the entire process end-to-end.",
  },
  {
    q: "Do you support WhatsApp API in India?",
    a: "Yes. India is our largest market for WhatsApp API. We have specialist teams handling Tally WhatsApp integration, transactional messaging, and bulk business communication for Indian SMEs and enterprises.",
  },
  {
    q: "Can WhatsApp API integrate with Tally?",
    a: "Yes — this is one of our signature solutions. We build a direct bridge between your Tally accounting software and the WhatsApp API, so invoices and payment reminders are sent automatically the moment they are generated in Tally.",
  },
  {
    q: "What is the cost of WhatsApp Business API?",
    a: "Meta charges per conversation (not per message). Rates vary by country and conversation type. We provide a full cost breakdown during your free discovery call based on your expected monthly message volume.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "WhatsApp Business API Setup & Management",
  provider: {
    "@type": "Organization",
    name: "MIMC Technologies",
    url: "https://www.mimctechnologies.com",
  },
  description:
    "Official and unofficial WhatsApp Business API setup, integration, and management for businesses in India, Brazil, South Asia, Southeast Asia, and Latin America.",
  areaServed: ["IN", "BR", "ID", "PH", "MX", "CO", "BD", "PK", "LK"],
  url: "https://www.mimctechnologies.com/services/whatsapp-api",
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

export default function WhatsAppAPI() {
  return (
    <Layout
      title="WhatsApp Business API — Official Setup & Integration"
      description="Official WhatsApp Business API setup and management for India, Brazil, Southeast Asia, and Latin America. Tally integration, bulk messaging, and automation by MIMC Technologies."
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
              <span className="border border-[#25D366]/40 text-[#25D366] px-3 py-1 text-xs font-[var(--font-cyber-accent)] uppercase tracking-widest bg-[#25D366]/10">
                Official Meta Partner
              </span>
              <span className="border border-[var(--color-cyber-accent)]/40 text-[var(--color-cyber-accent)] px-3 py-1 text-xs font-[var(--font-cyber-accent)] uppercase tracking-widest bg-[var(--color-cyber-accent)]/10">
                <span className="animate-blink mr-1">_</span> Live
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-widest font-[var(--font-cyber-head)] leading-none text-white">
              <span className="block cyber-glitch" data-text="WHATSAPP">
                WHATSAPP
              </span>
              <span style={{ color: "#25D366" }}>BUSINESS</span>
              <span className="block text-white">API</span>
            </h1>

            <p
              className="border-l-2 pl-4 font-[var(--font-cyber-accent)] text-[var(--color-cyber-muted-fg)] leading-relaxed uppercase tracking-wider text-sm"
              style={{ borderColor: "#25D366" }}
            >
              &gt; Automate customer communication at scale.
              <br />
              &gt; Official Meta BSP — fully compliant setup.
              <br />
              &gt; Serving India, Brazil, SEA &amp; LATAM markets.
              <span
                className="inline-block w-2 h-4 animate-blink ml-1 align-middle"
                style={{ background: "#25D366" }}
              />
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 font-[var(--font-cyber-accent)] uppercase tracking-widest cyber-chamfer border-2 px-8 py-4 font-bold transition-all duration-300"
                style={{
                  borderColor: "#25D366",
                  background: "#25D366",
                  color: "#000",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLElement).style.color = "#25D366";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#25D366";
                  (e.currentTarget as HTMLElement).style.color = "#000";
                }}
              >
                GET STARTED{" "}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services/tally-whatsapp-integration"
                className="group inline-flex items-center justify-center gap-2 font-[var(--font-cyber-accent)] uppercase tracking-widest cyber-chamfer border-2 border-[var(--color-cyber-accent)] text-[var(--color-cyber-accent)] hover:bg-[var(--color-cyber-accent)] hover:text-black transition-all duration-300 px-8 py-4"
              >
                TALLY INTEGRATION
              </Link>
            </div>
          </div>

          {/* Image placeholder */}
          <div
            className="relative h-[450px] p-[2px]"
            style={{
              background: "linear-gradient(135deg, #25D36644, transparent)",
            }}
          >
            <div className="absolute inset-[2px] bg-[var(--color-cyber-card)] flex flex-col items-center justify-center gap-4">
              <MessageSquare
                className="w-20 h-20 opacity-20"
                style={{ color: "#25D366" }}
                strokeWidth={1}
              />
              <p className="font-[var(--font-cyber-accent)] text-[var(--color-cyber-muted-fg)] text-xs uppercase tracking-widest text-center px-8">
                [IMAGE PLACEHOLDER]
                <br />
                WhatsApp API dashboard screenshot
              </p>
              {/* Decorative corner labels */}
              <div
                className="absolute top-4 left-4 text-[10px] font-[var(--font-cyber-accent)] uppercase tracking-widest"
                style={{ color: "#25D366" }}
              >
                WA.API // LIVE
              </div>
              <div className="absolute bottom-4 right-4 text-[10px] font-[var(--font-cyber-accent)] text-[var(--color-cyber-muted-fg)] uppercase tracking-widest">
                STATUS: ACTIVE
              </div>
            </div>
          </div>
        </section>

        {/* Key Stats */}
        <section className="mb-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-cyber-border)]">
          {[
            { value: "2B+", label: "WhatsApp Users Globally" },
            { value: "98%", label: "Message Open Rate" },
            { value: "180+", label: "Countries Supported" },
            { value: "24h", label: "Average Setup Time" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-[var(--color-cyber-card)] p-8 text-center group hover:bg-[#25D366]/5 transition-colors"
            >
              <div
                className="text-4xl font-black font-[var(--font-cyber-head)] mb-2"
                style={{ color: "#25D366" }}
              >
                {s.value}
              </div>
              <div className="text-xs font-[var(--font-cyber-accent)] uppercase tracking-widest text-[var(--color-cyber-muted-fg)]">
                {s.label}
              </div>
            </div>
          ))}
        </section>

        {/* Features Grid */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12 border-b border-[var(--color-cyber-border)] pb-4">
            <span
              className="font-[var(--font-cyber-accent)] text-sm uppercase tracking-widest"
              style={{ color: "#25D366" }}
            >
              &gt;&gt; FEATURE_SET
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-[2px] cyber-chamfer"
                style={{
                  background: "linear-gradient(135deg, #25D36633, transparent)",
                }}
              >
                <div className="bg-[var(--color-cyber-card)] cyber-chamfer p-8 h-full relative overflow-hidden group-hover:bg-[#0a0a0f] transition-colors">
                  <div
                    className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background:
                        "linear-gradient(to right, transparent, #25D366, transparent)",
                    }}
                  />
                  <div
                    className="w-12 h-12 border flex items-center justify-center mb-6 bg-black transition-all"
                    style={{ borderColor: "#25D36644" }}
                  >
                    <f.icon
                      className="w-6 h-6"
                      style={{ color: "#25D366" }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-[var(--font-cyber-head)] text-base font-bold uppercase tracking-widest text-white mb-3 group-hover:text-[#25D366] transition-colors">
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

        {/* Regional Use Cases */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12 border-b border-[var(--color-cyber-border)] pb-4">
            <span className="text-[var(--color-cyber-accent)] font-[var(--font-cyber-accent)] text-sm uppercase tracking-widest">
              &gt;&gt; REGIONAL_DEPLOYMENTS
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((u) => (
              <div
                key={u.region}
                className="border border-[var(--color-cyber-border)] bg-[var(--color-cyber-card)] p-8 hover:border-[#25D366]/50 transition-colors group"
              >
                <h3 className="font-[var(--font-cyber-head)] text-lg font-bold uppercase tracking-widest text-white mb-6 group-hover:text-[#25D366] transition-colors">
                  {u.region}
                </h3>
                <ul className="space-y-3">
                  {u.cases.map((c) => (
                    <li
                      key={c}
                      className="flex items-center gap-3 text-sm font-[var(--font-cyber-accent)] uppercase tracking-wider text-[var(--color-cyber-muted-fg)]"
                    >
                      <CheckCircle
                        className="w-4 h-4 flex-shrink-0"
                        style={{ color: "#25D366" }}
                      />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mb-24 border border-[var(--color-cyber-border)] p-10 md:p-16 relative overflow-hidden">
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[80px] opacity-10"
            style={{ background: "#25D366" }}
          />
          <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-cyber-head)] uppercase tracking-widest text-white mb-16 flex items-center gap-4">
            <span style={{ color: "#25D366" }}>&gt;&gt;</span> SETUP_PROCESS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery Call",
                desc: "We understand your messaging volume, use case, and region to recommend the right solution.",
              },
              {
                step: "02",
                title: "Business Verification",
                desc: "We handle Meta's business verification process end-to-end. You just provide documents.",
              },
              {
                step: "03",
                title: "API Integration",
                desc: "We connect the WhatsApp API to your existing systems — ERP, CRM, Tally, or custom software.",
              },
              {
                step: "04",
                title: "Go Live & Monitor",
                desc: "Your automation goes live. We monitor delivery rates and provide ongoing support.",
              },
            ].map((p, i) => (
              <div key={p.step} className="relative">
                {i < 3 && (
                  <div
                    className="hidden md:block absolute top-5 left-full w-full h-px z-10"
                    style={{
                      background:
                        "linear-gradient(to right, #25D366, transparent)",
                    }}
                  />
                )}
                <div
                  className="font-[var(--font-cyber-head)] text-5xl font-black mb-4 opacity-20"
                  style={{ color: "#25D366" }}
                >
                  {p.step}
                </div>
                <h3 className="font-[var(--font-cyber-head)] text-base font-bold uppercase tracking-widest text-white mb-3">
                  {p.title}
                </h3>
                <p className="text-[var(--color-cyber-muted-fg)] text-sm uppercase tracking-wider leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Image placeholder — Use case visual */}
        <section className="mb-24 h-64 border border-[var(--color-cyber-border)] bg-[var(--color-cyber-card)] flex flex-col items-center justify-center gap-4 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(#25D36644 1px, transparent 1px), linear-gradient(90deg, #25D36644 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
          <Users
            className="w-12 h-12 opacity-20"
            style={{ color: "#25D366" }}
            strokeWidth={1}
          />
          <p className="font-[var(--font-cyber-accent)] text-[var(--color-cyber-muted-fg)] text-xs uppercase tracking-widest text-center">
            [IMAGE PLACEHOLDER]
            <br />
            WhatsApp API workflow diagram / infographic
          </p>
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
                className="group border border-[var(--color-cyber-border)] bg-[var(--color-cyber-card)] hover:border-[#25D366]/50 transition-colors cyber-chamfer"
              >
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <h3 className="text-sm md:text-base font-bold tracking-widest uppercase font-[var(--font-cyber-head)] text-white group-hover:text-[#25D366] transition-colors pr-4">
                    {f.q}
                  </h3>
                  <span className="text-[#25D366] text-xl flex-shrink-0 group-open:rotate-45 transition-transform">
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
        <section
          className="text-center p-12 md:p-20 relative overflow-hidden border-2"
          style={{ borderColor: "#25D366" }}
        >
          <div
            className="absolute inset-0 opacity-5"
            style={{ background: "#25D366" }}
          />
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-widest font-[var(--font-cyber-head)] text-white mb-6 relative z-10">
            READY TO AUTOMATE
            <br />
            <span style={{ color: "#25D366" }}>WHATSAPP?</span>
          </h2>
          <p className="font-[var(--font-cyber-accent)] text-[var(--color-cyber-muted-fg)] uppercase tracking-widest text-sm mb-10 relative z-10">
            Free discovery call. No commitment. We'll tell you exactly what you
            need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 font-[var(--font-cyber-accent)] uppercase tracking-widest cyber-chamfer border-2 px-10 py-5 text-base font-bold transition-all duration-300"
              style={{
                borderColor: "#25D366",
                background: "#25D366",
                color: "#000",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "transparent";
                (e.currentTarget as HTMLElement).style.color = "#25D366";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#25D366";
                (e.currentTarget as HTMLElement).style.color = "#000";
              }}
            >
              BOOK FREE CALL{" "}
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services/tally-whatsapp-integration"
              className="group inline-flex items-center gap-2 font-[var(--font-cyber-accent)] uppercase tracking-widest cyber-chamfer border-2 border-[var(--color-cyber-accent)] text-[var(--color-cyber-accent)] hover:bg-[var(--color-cyber-accent)] hover:text-black transition-all duration-300 px-10 py-5 text-base"
            >
              VIEW TALLY INTEGRATION
            </Link>
          </div>
        </section>

        <RelatedServices currentId="whatsapp-api" />
      </div>
    </Layout>
  );
}
