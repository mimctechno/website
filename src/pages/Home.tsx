import {
  Terminal,
  Shield,
  Zap,
  ChevronRight,
  MapPin,
  Plus,
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout
      title="Enterprise Software & WhatsApp API"
      description="MIMC Technologies delivers ERP, CRM, official WhatsApp API, and Tally integration solutions globally from Canada and India."
    >
      <div className="max-w-7xl mx-auto px-6 py-8 relative z-10">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32 relative z-10">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-block border border-[var(--color-cyber-accent)] text-[var(--color-cyber-accent)] px-4 py-2 text-xs font-[var(--font-cyber-accent)] uppercase tracking-widest bg-[var(--color-cyber-accent)]/10 shadow-[0_0_10px_rgba(0,255,170,0.2)]">
              <span className="animate-blink mr-2">_</span> SYSTEM_STATUS:
              ONLINE
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-widest font-[var(--font-cyber-head)] leading-[1.1] text-white">
              <span className="block cyber-glitch" data-text="ENTERPRISE">
                ENTERPRISE
              </span>
              <span className="bg-gradient-to-r from-[var(--color-cyber-accent)] via-[var(--color-cyber-accent3)] to-[var(--color-cyber-accent2)] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,255,170,0.3)]">
                SOFTWARE & INTEGRATIONS
              </span>
            </h1>

            <p className="max-w-lg border-l-2 border-[var(--color-cyber-accent)] pl-4 font-[var(--font-cyber-accent)] text-[var(--color-cyber-muted-fg)] text-base md:text-lg leading-relaxed uppercase tracking-wider">
              &gt; ERP, CRM, and Invoicing Solutions deployed globally.
              <br />
              &gt; Official WhatsApp API & Tally Integration.
              <br />
              &gt; We build the infrastructure to scale your business.
              <span className="inline-block w-2 h-4 bg-[var(--color-cyber-accent)] animate-blink ml-1 align-middle"></span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <Link
                to="/contact"
                className="group relative font-[var(--font-cyber-accent)] uppercase tracking-widest cyber-chamfer border-2 border-[var(--color-cyber-accent)] bg-[var(--color-cyber-accent)] text-black hover:bg-transparent hover:text-[var(--color-cyber-accent)] hover:cyber-glow transition-all duration-300 px-8 py-4 flex items-center justify-center gap-2"
              >
                INITIATE_DEMO
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="group font-[var(--font-cyber-accent)] uppercase tracking-widest cyber-chamfer border-2 border-[var(--color-cyber-accent2)] text-[var(--color-cyber-accent2)] hover:bg-[var(--color-cyber-accent2)] hover:text-black hover:cyber-glow-secondary transition-all duration-300 px-8 py-4 flex items-center justify-center"
              >
                EXPLORE_SERVICES
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative p-[2px] cyber-chamfer bg-gradient-to-br from-[var(--color-cyber-accent)] to-transparent h-[400px] overflow-hidden group">
              <div className="absolute inset-[2px] cyber-chamfer bg-black overflow-hidden">
                <div className="absolute top-4 right-4 text-[var(--color-cyber-accent)] font-[var(--font-cyber-accent)] text-xs z-20 bg-black border border-[var(--color-cyber-accent)] px-3 py-1">
                  DATA.VIZ // LIVE
                </div>
                <div className="absolute inset-0 bg-[var(--color-cyber-accent)]/10 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay"></div>

                <img
                  src="/cyberpunk-hero.png"
                  alt="Cyberpunk Data Interface"
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-105 group-hover:scale-100"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Global Trust Signals / Tech Stack */}
        <section className="mb-32 relative overflow-hidden border-y border-[var(--color-cyber-border)] bg-[#050508] py-8">
          <div className="flex w-[200%]">
            <div className="flex w-1/2 justify-around items-center animate-marquee whitespace-nowrap">
              <span className="text-xl md:text-2xl font-bold font-[var(--font-cyber-head)] text-[var(--color-cyber-muted-fg)] uppercase tracking-widest flex items-center gap-4">
                <img
                  src="/logo.png"
                  className="w-8 h-8 opacity-50"
                  alt="icon"
                />{" "}
                OFFICIAL WHATSAPP PARTNER
              </span>
              <span className="text-xl md:text-2xl font-bold font-[var(--font-cyber-head)] text-[var(--color-cyber-muted-fg)] uppercase tracking-widest flex items-center gap-4">
                <img
                  src="/logo.png"
                  className="w-8 h-8 opacity-50"
                  alt="icon"
                />{" "}
                TALLY INTEGRATION
              </span>
              <span className="text-xl md:text-2xl font-bold font-[var(--font-cyber-head)] text-[var(--color-cyber-muted-fg)] uppercase tracking-widest flex items-center gap-4">
                <img
                  src="/logo.png"
                  className="w-8 h-8 opacity-50"
                  alt="icon"
                />{" "}
                ERP SPECIALISTS
              </span>
              <span className="text-xl md:text-2xl font-bold font-[var(--font-cyber-head)] text-[var(--color-cyber-muted-fg)] uppercase tracking-widest flex items-center gap-4">
                <img
                  src="/logo.png"
                  className="w-8 h-8 opacity-50"
                  alt="icon"
                />{" "}
                CANADA & INDIA HUB
              </span>
            </div>
            <div
              className="flex w-1/2 justify-around items-center animate-marquee whitespace-nowrap"
              aria-hidden="true"
            >
              <span className="text-xl md:text-2xl font-bold font-[var(--font-cyber-head)] text-[var(--color-cyber-muted-fg)] uppercase tracking-widest flex items-center gap-4">
                <img
                  src="/logo.png"
                  className="w-8 h-8 opacity-50"
                  alt="icon"
                />{" "}
                OFFICIAL WHATSAPP PARTNER
              </span>
              <span className="text-xl md:text-2xl font-bold font-[var(--font-cyber-head)] text-[var(--color-cyber-muted-fg)] uppercase tracking-widest flex items-center gap-4">
                <img
                  src="/logo.png"
                  className="w-8 h-8 opacity-50"
                  alt="icon"
                />{" "}
                TALLY INTEGRATION
              </span>
              <span className="text-xl md:text-2xl font-bold font-[var(--font-cyber-head)] text-[var(--color-cyber-muted-fg)] uppercase tracking-widest flex items-center gap-4">
                <img
                  src="/logo.png"
                  className="w-8 h-8 opacity-50"
                  alt="icon"
                />{" "}
                ERP SPECIALISTS
              </span>
              <span className="text-xl md:text-2xl font-bold font-[var(--font-cyber-head)] text-[var(--color-cyber-muted-fg)] uppercase tracking-widest flex items-center gap-4">
                <img
                  src="/logo.png"
                  className="w-8 h-8 opacity-50"
                  alt="icon"
                />{" "}
                CANADA & INDIA HUB
              </span>
            </div>
          </div>
        </section>

        {/* About Section - SEO Rich */}
        <section className="mb-32">
          <div className="p-[2px] cyber-chamfer-reverse bg-gradient-to-br from-[var(--color-cyber-border)] to-[var(--color-cyber-border)] hover:from-[var(--color-cyber-accent)] hover:to-[var(--color-cyber-accent2)] transition-colors duration-500 relative overflow-hidden group">
            <div className="bg-[var(--color-cyber-card)] cyber-chamfer-reverse p-8 md:p-16 h-full relative">
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-[var(--color-cyber-accent)]/10 blur-[100px] group-hover:bg-[var(--color-cyber-accent)]/20 transition-colors"></div>

              <h2 className="text-3xl md:text-5xl font-bold font-[var(--font-cyber-head)] uppercase tracking-widest text-white mb-12 flex items-center gap-4">
                <span className="text-[var(--color-cyber-accent)]">
                  &gt;&gt;
                </span>{" "}
                SYS_CORE: ABOUT MIMC
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm md:text-base text-[var(--color-cyber-muted-fg)] leading-relaxed uppercase tracking-wider">
                <div>
                  <p className="mb-6">
                    MIMC Technologies is a premier global technology and
                    consulting firm with operating offices in{" "}
                    <span className="text-white font-bold">
                      India and Canada
                    </span>
                    . We specialize in engineering high-performance enterprise
                    software solutions, including scalable ERP (Enterprise
                    Resource Planning), CRM (Customer Relationship Management),
                    and global invoicing systems designed to handle intense
                    operational data loads.
                  </p>
                  <div className="flex items-center gap-4 text-[var(--color-cyber-accent)] font-[var(--font-cyber-accent)] tracking-widest text-sm uppercase p-4 border border-[var(--color-cyber-accent)]/30 bg-[var(--color-cyber-accent)]/5">
                    <Terminal className="w-4 h-4" /> System Uptime: 99.99%
                  </div>
                </div>
                <div>
                  <p className="mb-6">
                    Beyond enterprise infrastructure, we are industry leaders in
                    automated communication. We engineer highly secure setups
                    for both Official and Unofficial WhatsApp API services,
                    specializing in deep, seamless Tally WhatsApp integrations
                    that eliminate manual accounting workflows entirely.
                  </p>
                  <div className="flex items-center gap-4 text-[var(--color-cyber-accent2)] font-[var(--font-cyber-accent)] tracking-widest text-sm uppercase p-4 border border-[var(--color-cyber-accent2)]/30 bg-[var(--color-cyber-accent2)]/5">
                    <Shield className="w-4 h-4" /> Encrypted Protocols Active
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid - SEO Rich */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12 border-b border-[var(--color-cyber-border)] pb-4">
            <span className="text-[var(--color-cyber-accent)] font-[var(--font-cyber-accent)]">
              &gt;&gt; MODULE_REGISTRY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Terminal,
                title: "Enterprise Systems",
                desc: "Our custom ERP and CRM solutions are engineered to eliminate bottlenecks. We deploy robust, secure, and scalable architectures that consolidate your operations.",
                href: "/services/erp-crm",
              },
              {
                icon: Zap,
                title: "WhatsApp API",
                desc: "Automate client communication. Secure setups for Official WhatsApp Business APIs and specialized Tally WhatsApp integrations for automated invoicing.",
                href: "/services/whatsapp-api",
              },
              {
                icon: Shield,
                title: "Web Architecture",
                desc: "Your website is your ultimate digital asset. We craft 'Awwwards-winning' designs and cyberpunk architectures that convert traffic into revenue.",
                href: "/services/web-development",
              },
              {
                icon: MapPin,
                title: "Digital Marketing",
                desc: "Beautiful design is useless without visibility. Our aggressive SEO strategies and digital marketing campaigns dominate search rankings globally.",
                href: "/services/digital-marketing",
              },
            ].map((feature, i) => (
              <Link
                to={feature.href}
                key={i}
                className="group p-[2px] cyber-chamfer bg-[var(--color-cyber-border)] hover:bg-[var(--color-cyber-accent)] transition-colors duration-300 cursor-pointer block"
              >
                <div className="bg-[var(--color-cyber-card)] cyber-chamfer p-8 md:p-12 h-full relative overflow-hidden group-hover:bg-[#0a0a0f]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-cyber-accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="w-16 h-16 border border-[var(--color-cyber-border)] flex items-center justify-center mb-8 group-hover:border-[var(--color-cyber-accent)] group-hover:cyber-glow transition-all bg-black">
                    <feature.icon
                      className="text-[var(--color-cyber-muted-fg)] group-hover:text-[var(--color-cyber-accent)] w-8 h-8"
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold font-[var(--font-cyber-head)] uppercase tracking-widest mb-4 text-white group-hover:text-[var(--color-cyber-accent)] transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-[var(--color-cyber-muted-fg)] leading-relaxed text-sm uppercase tracking-wider">
                    {feature.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* SEO FAQ Section */}
        <section className="mb-48 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-cyber-head)] uppercase tracking-widest text-white">
              DATA{" "}
              <span className="text-[var(--color-cyber-accent2)]">QUERIES</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What is Tally WhatsApp Integration?",
                a: "Tally WhatsApp integration connects your Tally accounting software directly to the WhatsApp API. This allows you to instantly send invoices, receipts, and ledger statements to your clients' WhatsApp numbers automatically, reducing manual work.",
              },
              {
                q: "Do you offer Official or Unofficial WhatsApp APIs?",
                a: "We provide comprehensive setups for both Official WhatsApp Business API (powered by Meta) and unofficial solutions, depending on your specific business requirements, budget, and messaging volume.",
              },
              {
                q: "How long does a custom ERP deployment take?",
                a: "Deployment timelines vary based on the complexity of your enterprise requirements. However, our agile methodology ensures that core modules are often deployed within weeks, allowing you to scale up gradually.",
              },
              {
                q: "Can you guarantee SEO rankings?",
                a: "While no agency can guarantee a #1 spot due to search engine algorithms, our deep technical SEO expertise, high-performance web architecture, and content strategies consistently place our clients on the first page.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="border border-[var(--color-cyber-border)] bg-[var(--color-cyber-card)] p-6 hover:border-[var(--color-cyber-accent)] hover:shadow-[0_0_15px_rgba(0,255,170,0.15)] transition-all cursor-pointer group cyber-chamfer"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-sm md:text-base font-bold tracking-widest uppercase font-[var(--font-cyber-head)] text-white group-hover:text-[var(--color-cyber-accent)] transition-colors">
                    {faq.q}
                  </h3>
                  <Plus className="w-6 h-6 text-[var(--color-cyber-accent)] group-hover:rotate-90 transition-transform flex-shrink-0" />
                </div>
                <p className="mt-4 text-sm text-[var(--color-cyber-muted-fg)] leading-relaxed hidden group-hover:block border-t border-[var(--color-cyber-border)] pt-4 uppercase tracking-wider">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
