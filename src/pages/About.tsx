import {
  MapPin,
  Shield,
  Globe,
  Clock,
  Users,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "200+", label: "Clients Worldwide" },
  { value: "2", label: "Global Offices" },
  { value: "99.9%", label: "Uptime SLA" },
];

const values = [
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Operating from Canada and India, we serve clients across 20+ countries with around-the-clock support.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "Every solution we build meets enterprise-grade security standards. Your data is always encrypted and protected.",
  },
  {
    icon: Clock,
    title: "Fast Deployment",
    desc: "Our agile methodology means your ERP, CRM, or WhatsApp integration is live in weeks, not months.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    desc: "You get a dedicated account manager and direct access to our engineering team — not a generic help desk.",
  },
];

export default function About() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://www.mimctechnologies.com/about#webpage",
        name: "About MIMC Technologies",
        description:
          "MIMC Technologies is an enterprise software and WhatsApp API company headquartered in Canada with offices in India.",
        url: "https://www.mimctechnologies.com/about",
        isPartOf: { "@id": "https://www.mimctechnologies.com" },
      },
      {
        "@type": "Organization",
        "@id": "https://www.mimctechnologies.com/#organization",
        name: "MIMC Technologies",
        url: "https://www.mimctechnologies.com",
        logo: "https://www.mimctechnologies.com/logo.webp",
        foundingDate: "2014",
        numberOfEmployees: { "@type": "QuantitativeValue", value: "50" },
        areaServed: ["IN", "CA", "US", "GB", "AU", "AE", "SG"],
        knowsAbout: [
          "ERP Software",
          "CRM Systems",
          "WhatsApp Business API",
          "Tally WhatsApp Integration",
          "Enterprise Software Development",
          "Digital Marketing",
        ],
        address: [
          {
            "@type": "PostalAddress",
            addressCountry: "CA",
            addressRegion: "Ontario",
          },
          { "@type": "PostalAddress", addressCountry: "IN" },
        ],
      },
    ],
  };

  return (
    <Layout
      title="About Us"
      description="Learn about MIMC Technologies — an enterprise software company with offices in Canada and India, specializing in ERP, CRM, WhatsApp API, and Tally integrations."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero */}
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block border border-[var(--color-cyber-accent)] text-[var(--color-cyber-accent)] px-4 py-2 text-xs font-[var(--font-cyber-accent)] uppercase tracking-widest bg-[var(--color-cyber-accent)]/10">
              <span className="animate-blink mr-2">_</span> ABOUT_MIMC
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-widest font-[var(--font-cyber-head)] leading-none text-white">
              <span className="block cyber-glitch" data-text="BUILT TO">
                BUILT TO
              </span>
              <span className="bg-gradient-to-r from-[var(--color-cyber-accent)] via-[var(--color-cyber-accent3)] to-[var(--color-cyber-accent2)] bg-clip-text text-transparent">
                SCALE
              </span>
            </h1>
            <p className="border-l-2 border-[var(--color-cyber-accent)] pl-4 font-[var(--font-cyber-accent)] text-[var(--color-cyber-muted-fg)] leading-relaxed uppercase tracking-wider">
              &gt; Enterprise software consultancy &amp; integrations firm.
              <br />
              &gt; Headquartered in Canada. Engineering hub in India.
              <br />
              &gt; A decade of building systems that actually work.
              <span className="inline-block w-2 h-4 bg-[var(--color-cyber-accent)] animate-blink ml-1 align-middle" />
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 font-[var(--font-cyber-accent)] uppercase tracking-widest cyber-chamfer border-2 border-[var(--color-cyber-accent)] bg-[var(--color-cyber-accent)] text-black hover:bg-transparent hover:text-[var(--color-cyber-accent)] transition-all duration-300 px-8 py-4"
            >
              GET IN TOUCH{" "}
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Hero Image */}
          <div className="relative h-[400px] p-[2px] cyber-chamfer-reverse bg-gradient-to-br from-[var(--color-cyber-accent)] to-[var(--color-cyber-accent2)] group">
            <div className="absolute inset-[2px] cyber-chamfer-reverse bg-[var(--color-cyber-card)] overflow-hidden border border-[var(--color-cyber-border)]">
              <div className="absolute inset-0 bg-cyber-grid opacity-30 z-10 mix-blend-overlay pointer-events-none"></div>
              <img
                src="/data-core.webp"
                alt="Cyberpunk Data Core"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 right-4 z-20 bg-black/80 backdrop-blur-md border border-[var(--color-cyber-accent)] px-3 py-1">
                <span className="text-[var(--color-cyber-accent)] font-[var(--font-cyber-accent)] text-xs tracking-widest uppercase animate-blink">
                  NODE_ONLINE
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-cyber-border)]">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-[var(--color-cyber-card)] p-10 text-center group hover:bg-[var(--color-cyber-accent)]/5 transition-colors"
            >
              <div
                className="text-3xl sm:text-4xl md:text-5xl font-black font-[var(--font-cyber-head)] text-[var(--color-cyber-accent)] mb-2 cyber-glitch"
                data-text={s.value}
              >
                {s.value}
              </div>
              <div className="text-xs font-[var(--font-cyber-accent)] uppercase tracking-widest text-[var(--color-cyber-muted-fg)]">
                {s.label}
              </div>
            </div>
          ))}
        </section>

        {/* Mission */}
        <section className="mb-24 p-[2px] cyber-chamfer bg-gradient-to-br from-[var(--color-cyber-border)] to-[var(--color-cyber-border)] hover:from-[var(--color-cyber-accent)] hover:to-[var(--color-cyber-accent2)] transition-colors duration-500 group">
          <div className="bg-[var(--color-cyber-card)] cyber-chamfer p-6 sm:p-10 md:p-16 relative overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-[var(--color-cyber-accent)]/5 blur-[120px] group-hover:bg-[var(--color-cyber-accent)]/10 transition-colors" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-[var(--font-cyber-head)] uppercase tracking-widest text-white mb-8 flex items-center gap-4">
              <span className="text-[var(--color-cyber-accent)]">&gt;&gt;</span>{" "}
              OUR MISSION
            </h2>
            <p className="text-[var(--color-cyber-muted-fg)] leading-relaxed text-base md:text-lg uppercase tracking-wider max-w-3xl">
              We exist to give growing businesses access to the same
              enterprise-grade technology that Fortune 500 companies use —
              without the Fortune 500 price tag or the Fortune 500 bureaucracy.
              From ERP deployments to WhatsApp API automation, we engineer
              infrastructure that scales with your ambition.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12 border-b border-[var(--color-cyber-border)] pb-4">
            <span className="text-[var(--color-cyber-accent)] font-[var(--font-cyber-accent)] text-sm uppercase tracking-widest">
              &gt;&gt; CORE_VALUES
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="group p-[2px] cyber-chamfer bg-[var(--color-cyber-border)] hover:bg-[var(--color-cyber-accent)] transition-colors duration-300"
              >
                <div className="bg-[var(--color-cyber-card)] cyber-chamfer p-8 h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-cyber-accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-14 h-14 border border-[var(--color-cyber-border)] flex items-center justify-center mb-6 group-hover:border-[var(--color-cyber-accent)] group-hover:cyber-glow transition-all bg-black">
                    <v.icon
                      className="text-[var(--color-cyber-muted-fg)] group-hover:text-[var(--color-cyber-accent)] w-7 h-7"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-lg font-bold font-[var(--font-cyber-head)] uppercase tracking-widest mb-3 text-white group-hover:text-[var(--color-cyber-accent)] transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-[var(--color-cyber-muted-fg)] text-sm leading-relaxed uppercase tracking-wider">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Office Locations */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12 border-b border-[var(--color-cyber-border)] pb-4">
            <span className="text-[var(--color-cyber-accent)] font-[var(--font-cyber-accent)] text-sm uppercase tracking-widest">
              &gt;&gt; GLOBAL_NODES
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                city: "CANADA",
                flag: "🇨🇦",
                role: "HQ / Sales",
                phone: "+1 416-857-8831",
                detail:
                  "North American headquarters. Business development, client relations, and enterprise sales.",
              },
              {
                city: "INDIA",
                flag: "🇮🇳",
                role: "Engineering Hub",
                phone: "+91 925941-8994",
                detail:
                  "Core engineering and development center. WhatsApp API, ERP, and Tally integration specialists.",
              },
            ].map((loc) => (
              <div
                key={loc.city}
                className="p-[2px] cyber-chamfer-reverse bg-gradient-to-br from-[var(--color-cyber-border)] to-[var(--color-cyber-border)] hover:from-[var(--color-cyber-accent)] hover:to-[var(--color-cyber-accent2)] transition-colors duration-300 group"
              >
                <div className="bg-[var(--color-cyber-card)] cyber-chamfer-reverse p-8 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{loc.flag}</span>
                    <div>
                      <div className="font-[var(--font-cyber-head)] text-2xl font-bold text-white tracking-widest group-hover:text-[var(--color-cyber-accent)] transition-colors">
                        {loc.city}
                      </div>
                      <div className="font-[var(--font-cyber-accent)] text-xs text-[var(--color-cyber-accent2)] uppercase tracking-widest">
                        {loc.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-[var(--color-cyber-muted-fg)] text-sm uppercase tracking-wider leading-relaxed mb-4">
                    {loc.detail}
                  </p>
                  <a
                    href={`tel:${loc.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-[var(--color-cyber-accent)] font-[var(--font-cyber-accent)] text-sm hover:cyber-glow-text transition-all"
                  >
                    <MapPin className="w-4 h-4" /> {loc.phone}
                  </a>
                  {/* Cyber Node Radar */}
                  <div className="mt-6 h-32 bg-black border border-[var(--color-cyber-border)] flex items-center justify-center group-hover:border-[var(--color-cyber-accent)] transition-colors relative overflow-hidden">
                    <div className="absolute inset-0 bg-cyber-grid opacity-20" />

                    {/* Radar Circles */}
                    <div className="w-16 h-16 rounded-full border border-[var(--color-cyber-accent)]/30 relative flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full border border-[var(--color-cyber-accent)]/50 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[var(--color-cyber-accent)] animate-ping" />
                      </div>
                      <div
                        className="absolute inset-0 border-t-2 border-[var(--color-cyber-accent)] rounded-full animate-spin"
                        style={{ animationDuration: "3s" }}
                      />
                    </div>

                    {/* Coordinates */}
                    <div className="absolute bottom-2 left-2 text-[8px] font-[var(--font-cyber-accent)] text-[var(--color-cyber-accent)] tracking-widest">
                      LAT: {loc.city === "CANADA" ? "43.6532° N" : "28.6139° N"}
                      <br />
                      LNG: {loc.city === "CANADA" ? "79.3832° W" : "77.2090° E"}
                    </div>

                    {/* Signal Bars */}
                    <div className="absolute top-2 right-2 flex gap-1 items-end h-4">
                      <div className="w-1 h-2 bg-[var(--color-cyber-accent)] animate-pulse" />
                      <div
                        className="w-1 h-3 bg-[var(--color-cyber-accent)] animate-pulse"
                        style={{ animationDelay: "150ms" }}
                      />
                      <div
                        className="w-1 h-4 bg-[var(--color-cyber-accent)] animate-pulse"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center border border-[var(--color-cyber-accent)] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[var(--color-cyber-accent)]/3" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-widest font-[var(--font-cyber-head)] text-white mb-6 relative z-10">
            READY TO{" "}
            <span className="text-[var(--color-cyber-accent)]">
              WORK TOGETHER?
            </span>
          </h2>
          <p className="text-[var(--color-cyber-muted-fg)] font-[var(--font-cyber-accent)] uppercase tracking-widest text-sm mb-10 relative z-10">
            Drop us a message and our team responds within 24 hours.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 font-[var(--font-cyber-accent)] uppercase tracking-widest cyber-chamfer border-2 border-[var(--color-cyber-accent)] bg-[var(--color-cyber-accent)] text-black hover:bg-transparent hover:text-[var(--color-cyber-accent)] transition-all duration-300 px-10 py-5 text-base relative z-10"
          >
            CONTACT US{" "}
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>
      </div>
    </Layout>
  );
}
