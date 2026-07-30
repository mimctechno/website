import {
  CheckCircle,
  ChevronRight,
  Search,
  BarChart3,
  Users,
  Lightbulb,
  Handshake,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import BrowserMockup from "../../components/ui/BrowserMockup";
import RelatedServices from "../../components/RelatedServices";
import ServiceSchema from "../../components/seo/ServiceSchema";
import ServiceBadges from "../../components/ui/ServiceBadges";

const features = [
  {
    icon: Search,
    title: "Technology Stack Audit",
    desc: "We audit your existing software, integrations, and processes to identify inefficiencies, redundancies, and security gaps.",
  },
  {
    icon: Lightbulb,
    title: "Digital Transformation Roadmap",
    desc: "A clear, prioritised plan to modernise your business — from legacy systems to cloud-native infrastructure — with realistic timelines and budgets.",
  },
  {
    icon: Users,
    title: "Vendor Selection",
    desc: "Vendor-agnostic advice. We evaluate ERP, CRM, and SaaS providers against your requirements and negotiate on your behalf.",
  },
  {
    icon: FileText,
    title: "Requirements Engineering",
    desc: "We translate your business goals into precise technical specifications that prevent scope creep and developer misunderstandings.",
  },
  {
    icon: BarChart3,
    title: "Implementation Oversight",
    desc: "We manage your technology implementations — holding vendors accountable, reviewing deliverables, and keeping projects on schedule.",
  },
  {
    icon: Handshake,
    title: "Ongoing Advisory",
    desc: "Fractional CTO / IT Director service. Strategic technology advice on demand — without the cost of a full-time executive hire.",
  },
];

const deliverables = [
  "Current state technology assessment report",
  "Future state architecture blueprint",
  "Vendor shortlist with scoring matrix",
  "Implementation timeline & budget estimate",
  "Risk register & mitigation plan",
  "Change management recommendations",
];

const faqs = [
  {
    q: "What does an Enterprise IT Consultant do?",
    a: "An IT consultant helps businesses make better technology decisions. We assess your current systems, identify what's slowing you down, recommend the right software and integrations, help you select and negotiate with vendors, and oversee implementations to ensure they actually deliver what was promised.",
  },
  {
    q: "When should I hire an IT consultant instead of building an internal team?",
    a: "IT consulting makes sense when you need specialist expertise for a specific project (ERP selection, digital transformation, system audit) without the cost of a full-time hire. It's also ideal when you need an objective, vendor-neutral perspective — something an internal team with existing vendor relationships cannot always provide.",
  },
  {
    q: "Are you vendor-neutral?",
    a: "Yes. We don't receive commissions or referral fees from any software vendor. Our recommendations are based purely on what is the best fit for your requirements, budget, and team. This is why clients trust our assessments.",
  },
  {
    q: "Do you work with small businesses or only enterprises?",
    a: "Both. We work with growing SMEs who are outgrowing spreadsheets and basic accounting software, as well as mid-market and enterprise companies undertaking full digital transformations. Our advice scales to your size and budget.",
  },
  {
    q: "Can you help us migrate from legacy software?",
    a: "Yes. Legacy system migrations are one of our core specialisations. We assess the current system, map data structures, select the target platform, plan the migration in phases to minimise disruption, and oversee the full transition.",
  },
];

export default function EnterpriseConsulting() {
  return (
    <Layout
      title="Enterprise IT Consulting — Technology Audits & Digital Transformation"
      description="Vendor-neutral enterprise IT consulting by MIMC Technologies. Technology audits, digital transformation roadmaps, vendor selection, and implementation oversight."
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
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero */}
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex gap-3 flex-wrap">
              <span className="border border-[var(--color-cyber-accent2)]/40 text-[var(--color-cyber-accent2)] px-3 py-1 text-xs font-[var(--font-cyber-accent)] uppercase tracking-widest bg-[var(--color-cyber-accent2)]/10">
                Vendor Neutral
              </span>
              <span className="border border-[var(--color-cyber-accent)]/40 text-[var(--color-cyber-accent)] px-3 py-1 text-xs font-[var(--font-cyber-accent)] uppercase tracking-widest bg-[var(--color-cyber-accent)]/10">
                <span className="animate-blink mr-1">_</span> Advisory
              </span>
            </div>
            <ServiceBadges rating={4.8} reviewCount={312} />

            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-widest font-[var(--font-cyber-head)] leading-none text-white">
              <span className="block cyber-glitch" data-text="ENTERPRISE">
                ENTERPRISE
              </span>
              <span className="text-[var(--color-cyber-accent2)]">IT</span>
              <span className="block text-white">CONSULTING</span>
            </h1>
            <p className="border-l-2 border-[var(--color-cyber-accent2)] pl-4 font-[var(--font-cyber-accent)] text-[var(--color-cyber-muted-fg)] leading-relaxed uppercase tracking-wider text-sm">
              &gt; Strategy before software.
              <br />
              &gt; Honest, vendor-neutral advice.
              <br />
              &gt; From audit to implementation — we own it.
              <span className="inline-block w-2 h-4 bg-[var(--color-cyber-accent2)] animate-blink ml-1 align-middle" />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 font-[var(--font-cyber-accent)] uppercase tracking-widest cyber-chamfer border-2 border-[var(--color-cyber-accent2)] bg-[var(--color-cyber-accent2)] text-black hover:bg-transparent hover:text-[var(--color-cyber-accent2)] transition-all duration-300 px-8 py-4 font-bold"
              >
                BOOK CONSULTATION{" "}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-2 font-[var(--font-cyber-accent)] uppercase tracking-widest cyber-chamfer border-2 border-[var(--color-cyber-accent)] text-[var(--color-cyber-accent)] hover:bg-[var(--color-cyber-accent)] hover:text-black transition-all duration-300 px-8 py-4"
              >
                ALL SERVICES
              </Link>
            </div>
          </div>

          {/* Strategy Session Mockup */}
          <div className="relative p-1 cyber-chamfer-reverse bg-gradient-to-br from-[#ff00ff]/20 to-transparent group overflow-hidden">
            <BrowserMockup title="mimc.tech/digital-strategy-plan" />
          </div>
        </section>

        {/* Stats */}
        <section className="mb-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-cyber-border)]">
          {[
            { value: "100%", label: "Vendor Neutral" },
            { value: "10+", label: "Years Experience" },
            { value: "50+", label: "Audits Completed" },
            { value: "24h", label: "First Response Time" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-[var(--color-cyber-card)] p-8 text-center hover:bg-[var(--color-cyber-accent2)]/5 transition-colors"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-black font-[var(--font-cyber-head)] mb-2 text-[var(--color-cyber-accent2)]">
                {s.value}
              </div>
              <div className="text-xs font-[var(--font-cyber-accent)] uppercase tracking-widest text-[var(--color-cyber-muted-fg)]">
                {s.label}
              </div>
            </div>
          ))}
        </section>

        {/* Features */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12 border-b border-[var(--color-cyber-border)] pb-4">
            <span className="text-[var(--color-cyber-accent2)] font-[var(--font-cyber-accent)] text-sm uppercase tracking-widest">
              &gt;&gt; CONSULTING_SERVICES
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-[2px] cyber-chamfer"
                style={{
                  background: "linear-gradient(135deg, #ff00ff33, transparent)",
                }}
              >
                <div className="bg-[var(--color-cyber-card)] cyber-chamfer p-8 h-full relative overflow-hidden group-hover:bg-[#0a0a0f] transition-colors">
                  <div
                    className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background:
                        "linear-gradient(to right, transparent, var(--color-cyber-accent2), transparent)",
                    }}
                  />
                  <div className="w-12 h-12 border border-[var(--color-cyber-accent2)]/30 flex items-center justify-center mb-6 bg-black">
                    <f.icon
                      className="w-6 h-6 text-[var(--color-cyber-accent2)]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-[var(--font-cyber-head)] text-base font-bold uppercase tracking-widest text-white mb-3 group-hover:text-[var(--color-cyber-accent2)] transition-colors">
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

        {/* Deliverables */}
        <section className="mb-24 border border-[var(--color-cyber-border)] p-6 sm:p-10 md:p-14 relative overflow-hidden group hover:border-[var(--color-cyber-accent2)]/50 transition-colors">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[var(--color-cyber-accent2)]/5 blur-[80px]" />
          <h2 className="text-2xl md:text-3xl font-bold font-[var(--font-cyber-head)] uppercase tracking-widest text-white mb-10 flex items-center gap-4">
            <span className="text-[var(--color-cyber-accent2)]">&gt;&gt;</span>{" "}
            WHAT_YOU_RECEIVE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliverables.map((d) => (
              <div
                key={d}
                className="flex items-center gap-4 p-4 border border-[var(--color-cyber-border)] bg-[var(--color-cyber-bg)] hover:border-[var(--color-cyber-accent2)]/50 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-[var(--color-cyber-accent2)] flex-shrink-0" />
                <span className="font-[var(--font-cyber-accent)] text-sm uppercase tracking-wider text-[var(--color-cyber-muted-fg)]">
                  {d}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Audit Report Mockup */}
        <section className="mb-24 p-1 group">
          <BrowserMockup title="mimc.tech/audit-report-viewer" />
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
                className="group border border-[var(--color-cyber-border)] bg-[var(--color-cyber-card)] hover:border-[var(--color-cyber-accent2)]/50 transition-colors cyber-chamfer"
              >
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <h3 className="text-sm md:text-base font-bold tracking-widest uppercase font-[var(--font-cyber-head)] text-white group-hover:text-[var(--color-cyber-accent2)] transition-colors pr-4">
                    {f.q}
                  </h3>
                  <span className="text-[var(--color-cyber-accent2)] text-xl flex-shrink-0 group-open:rotate-45 transition-transform">
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
        <section className="text-center border-2 border-[var(--color-cyber-accent2)] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[var(--color-cyber-accent2)]/3" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-widest font-[var(--font-cyber-head)] text-white mb-6 relative z-10">
            NOT SURE WHAT
            <br />
            <span className="text-[var(--color-cyber-accent2)]">
              YOU ACTUALLY NEED?
            </span>
          </h2>
          <p className="font-[var(--font-cyber-accent)] text-[var(--color-cyber-muted-fg)] uppercase tracking-widest text-sm mb-10 relative z-10">
            Start with a free 30-minute call. No pitch, no pressure — just
            honest advice.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 font-[var(--font-cyber-accent)] uppercase tracking-widest cyber-chamfer border-2 border-[var(--color-cyber-accent2)] bg-[var(--color-cyber-accent2)] text-black hover:bg-transparent hover:text-[var(--color-cyber-accent2)] transition-all duration-300 px-10 py-5 text-base font-bold relative z-10"
          >
            BOOK FREE CALL{" "}
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>

        <RelatedServices currentId="enterprise-consulting" />
      </div>
    </Layout>
  );
}
