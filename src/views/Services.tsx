import {
  Terminal,
  Zap,
  Shield,
  Globe,
  BarChart3,
  Database,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Layout from "../components/Layout";

const services = [
  {
    slug: "erp-crm",
    icon: Database,
    badge: "ENTERPRISE",
    title: "ERP & CRM Solutions",
    tagline: "Unify your entire business into one powerful system.",
    desc: "Custom Enterprise Resource Planning and Customer Relationship Management platforms engineered for your exact workflow. From inventory to invoicing — fully automated.",
    bullets: [
      "Custom module development",
      "Legacy system migration",
      "Cloud & on-premise deployments",
      "Real-time reporting dashboards",
    ],
    accent: "var(--color-cyber-accent)",
  },
  {
    slug: "whatsapp-api",
    icon: Zap,
    badge: "MOST POPULAR",
    title: "WhatsApp Business API",
    tagline: "Automate every client conversation at scale.",
    desc: "Official Meta WhatsApp Business API setup and management. Send invoices, alerts, and support messages automatically. Also available: unofficial high-volume solutions.",
    bullets: [
      "Official Meta API partner setup",
      "Bulk messaging automation",
      "Chatbot & auto-reply systems",
      "CRM & ERP integration",
    ],
    accent: "#25D366",
  },
  {
    slug: "tally-whatsapp-integration",
    icon: Terminal,
    badge: "SPECIALIST",
    title: "Tally WhatsApp Integration",
    tagline: "Send invoices directly from Tally to WhatsApp.",
    desc: "Deep integration between your Tally accounting software and WhatsApp API. Automatically dispatch invoices, payment reminders, and ledger summaries to clients.",
    bullets: [
      "Zero manual data entry",
      "Instant invoice delivery",
      "Payment reminder automation",
      "Tally ERP 9 & Tally Prime",
    ],
    accent: "var(--color-cyber-accent3)",
  },
  {
    slug: "web-development",
    icon: Globe,
    badge: "FULL STACK",
    title: "Web Development & SEO",
    tagline: "Your website as a lead generation engine.",
    desc: "High-performance, visually stunning websites engineered to rank on Google and convert visitors into clients. Technical SEO, Core Web Vitals, and content strategy included.",
    bullets: [
      "Custom UI/UX design",
      "Technical SEO & Core Web Vitals",
      "Local & international SEO",
      "Performance optimization",
    ],
    accent: "var(--color-cyber-accent2)",
  },
  {
    slug: "digital-marketing",
    icon: BarChart3,
    badge: "GROWTH",
    title: "Digital Marketing",
    tagline: "Dominate search rankings globally.",
    desc: "Data-driven SEO and digital marketing campaigns that put your business in front of buyers who are actively searching. From Google Ads to content marketing — we cover it all.",
    bullets: [
      "Search engine marketing (SEM)",
      "Content & keyword strategy",
      "Google Analytics & reporting",
      "Lead funnel optimization",
    ],
    accent: "var(--color-cyber-accent)",
  },
  {
    slug: "enterprise-consulting",
    icon: Shield,
    badge: "CONSULTING",
    title: "Enterprise IT Consulting",
    tagline: "Strategy before software.",
    desc: "Not sure which system is right for you? We audit your current stack, map your requirements, and recommend the most efficient path — with zero vendor bias.",
    bullets: [
      "Technology stack audits",
      "Digital transformation roadmaps",
      "Vendor selection & negotiation",
      "Implementation oversight",
    ],
    accent: "var(--color-cyber-accent2)",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "MIMC Technologies Services",
  url: "https://www.mimctechnologies.com/services",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.title,
    url: `https://www.mimctechnologies.com/services/${s.slug}`,
  })),
};

export default function Services() {
  return (
    <Layout
      title="Services — ERP, WhatsApp API, Tally Integration & More"
      description="MIMC Technologies offers enterprise ERP, CRM, official WhatsApp API, Tally WhatsApp integration, web development, and SEO services globally."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <section className="mb-20">
          <div className="inline-block border border-[var(--color-cyber-accent)] text-[var(--color-cyber-accent)] px-4 py-2 text-xs font-[var(--font-cyber-accent)] uppercase tracking-widest bg-[var(--color-cyber-accent)]/10 mb-8">
            <span className="animate-blink mr-2">_</span> MODULE_REGISTRY
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-widest font-[var(--font-cyber-head)] leading-none text-white">
              <span className="block cyber-glitch" data-text="OUR">
                OUR
              </span>
              <span className="bg-gradient-to-r from-[var(--color-cyber-accent)] via-[var(--color-cyber-accent3)] to-[var(--color-cyber-accent2)] bg-clip-text text-transparent">
                SERVICES
              </span>
            </h1>
            <p className="text-[var(--color-cyber-muted-fg)] font-[var(--font-cyber-accent)] uppercase tracking-wider text-sm leading-relaxed border-l-2 border-[var(--color-cyber-accent)] pl-4">
              From enterprise ERP deployments to WhatsApp API automation — we
              engineer the infrastructure that scales your business. Each
              service is delivered by specialists, not generalists.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group p-[2px] cyber-chamfer block"
                style={{
                  background: `linear-gradient(135deg, ${s.accent}33, transparent)`,
                }}
              >
                <div className="bg-[var(--color-cyber-card)] cyber-chamfer p-8 h-full flex flex-col relative overflow-hidden transition-all duration-300 group-hover:bg-[#0a0a0f]">
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(to right, transparent, ${s.accent}, transparent)`,
                    }}
                  />

                  {/* Badge */}
                  <div className="mb-6 self-start">
                    <span
                      className="text-[10px] font-[var(--font-cyber-accent)] uppercase tracking-[0.3em] px-3 py-1 border"
                      style={{
                        color: s.accent,
                        borderColor: `${s.accent}44`,
                        background: `${s.accent}11`,
                      }}
                    >
                      {s.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className="w-14 h-14 border border-[var(--color-cyber-border)] flex items-center justify-center mb-6 bg-black transition-all group-hover:border-current"
                    style={{ ["--tw-shadow-color" as string]: s.accent }}
                  >
                    <s.icon
                      className="w-7 h-7 transition-colors"
                      strokeWidth={1.5}
                      style={{ color: "var(--color-cyber-muted-fg)" }}
                    />
                  </div>

                  <h2
                    className="text-lg md:text-xl font-bold font-[var(--font-cyber-head)] uppercase tracking-widest mb-2 text-white transition-colors"
                    style={{}}
                  >
                    {s.title}
                  </h2>
                  <p
                    className="font-[var(--font-cyber-accent)] text-xs uppercase tracking-widest mb-4"
                    style={{ color: s.accent }}
                  >
                    {s.tagline}
                  </p>
                  <p className="text-[var(--color-cyber-muted-fg)] text-sm leading-relaxed uppercase tracking-wider mb-6 flex-1">
                    {s.desc}
                  </p>

                  {/* Bullet list */}
                  <ul className="space-y-2 mb-8">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2 text-xs font-[var(--font-cyber-accent)] uppercase tracking-wider text-[var(--color-cyber-muted-fg)]"
                      >
                        <span style={{ color: s.accent }}>›</span> {b}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div
                    className="flex items-center gap-2 font-[var(--font-cyber-accent)] text-xs uppercase tracking-widest font-bold transition-all"
                    style={{ color: s.accent }}
                  >
                    LEARN MORE{" "}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-24 border border-[var(--color-cyber-border)] p-6 sm:p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[var(--color-cyber-accent)]/5 blur-[80px]" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-[var(--font-cyber-head)] uppercase tracking-widest text-white mb-10 sm:mb-16 flex flex-wrap items-center gap-2 sm:gap-4 break-words">
            <span className="text-[var(--color-cyber-accent)]">&gt;&gt;</span>{" "}
            HOW_WE_WORK
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We audit your current systems and map exact requirements.",
              },
              {
                step: "02",
                title: "Blueprint",
                desc: "We engineer a detailed solution architecture for your approval.",
              },
              {
                step: "03",
                title: "Deploy",
                desc: "Our team builds and deploys — fast, clean, with zero disruption.",
              },
              {
                step: "04",
                title: "Support",
                desc: "Ongoing monitoring, updates, and a dedicated account manager.",
              },
            ].map((p, i) => (
              <div key={p.step} className="relative">
                {i < 3 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-[var(--color-cyber-accent)] to-transparent z-10" />
                )}
                <div className="font-[var(--font-cyber-head)] text-5xl font-black text-[var(--color-cyber-accent)]/20 mb-4">
                  {p.step}
                </div>
                <h3 className="font-[var(--font-cyber-head)] text-lg font-bold uppercase tracking-widest text-white mb-3">
                  {p.title}
                </h3>
                <p className="text-[var(--color-cyber-muted-fg)] text-sm uppercase tracking-wider leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center border border-[var(--color-cyber-accent)] p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[var(--color-cyber-accent)]/3" />
          <h2 className="text-4xl font-black uppercase tracking-widest font-[var(--font-cyber-head)] text-white mb-6 relative z-10">
            NOT SURE WHICH{" "}
            <span className="text-[var(--color-cyber-accent)]">
              SERVICE YOU NEED?
            </span>
          </h2>
          <p className="text-[var(--color-cyber-muted-fg)] font-[var(--font-cyber-accent)] uppercase tracking-widest text-sm mb-10 relative z-10">
            Book a free 30-minute discovery call. No sales pitch. Just honest
            advice.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 font-[var(--font-cyber-accent)] uppercase tracking-widest cyber-chamfer border-2 border-[var(--color-cyber-accent)] bg-[var(--color-cyber-accent)] text-black hover:bg-transparent hover:text-[var(--color-cyber-accent)] transition-all duration-300 px-10 py-5 text-base relative z-10"
          >
            BOOK FREE CALL{" "}
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>
      </div>
    </Layout>
  );
}
