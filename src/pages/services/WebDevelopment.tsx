import {
  CheckCircle,
  ChevronRight,
  Zap,
  BarChart3,
  Shield,
  Search,
  Smartphone,
  Code2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import BrowserMockup from "../../components/ui/BrowserMockup";
import RelatedServices from "../../components/RelatedServices";

const features = [
  {
    icon: Code2,
    title: "Custom UI/UX Design",
    desc: "Bespoke, visually stunning websites built to your brand identity. No templates. No page builders. Pixel-perfect execution.",
  },
  {
    icon: Search,
    title: "Technical SEO",
    desc: "Schema markup, Core Web Vitals, crawl optimisation, XML sitemaps, and structured data — all built-in from day one.",
  },
  {
    icon: Smartphone,
    title: "Fully Responsive",
    desc: "Every site we build is flawless on mobile, tablet, and desktop. Performance-tested across all major devices and browsers.",
  },
  {
    icon: Zap,
    title: "Core Web Vitals Optimised",
    desc: "LCP under 2.5s, zero CLS, and FID under 100ms. Google's page experience signals are not an afterthought — they're our baseline.",
  },
  {
    icon: BarChart3,
    title: "Conversion Optimised",
    desc: "We design with one goal: turn visitors into enquiries. Clear CTAs, trust signals, and lead funnels built into every page.",
  },
  {
    icon: Shield,
    title: "Secure & Maintained",
    desc: "SSL, security headers, regular updates, and uptime monitoring included. Your site stays fast, safe, and live.",
  },
];

const seoServices = [
  {
    title: "On-Page SEO",
    items: [
      "Keyword research & mapping",
      "Title tags & meta descriptions",
      "Header hierarchy (H1–H6)",
      "Internal linking strategy",
    ],
  },
  {
    title: "Technical SEO",
    items: [
      "Core Web Vitals optimisation",
      "Structured data / JSON-LD",
      "XML sitemap & robots.txt",
      "Crawl error resolution",
    ],
  },
  {
    title: "Local SEO",
    items: [
      "Google Business Profile setup",
      "Local citations & NAP consistency",
      "Local keyword targeting",
      "Region-specific landing pages",
    ],
  },
  {
    title: "Content Strategy",
    items: [
      "Keyword-driven blog articles",
      "Landing page copywriting",
      "FAQ & rich snippet content",
      "Competitor gap analysis",
    ],
  },
];

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "A standard business website (5–10 pages) typically takes 3–6 weeks from kickoff to launch. More complex projects with custom functionality may take 8–12 weeks. We always agree on a timeline before starting and stick to it.",
  },
  {
    q: "Do you build websites that rank on Google?",
    a: "Yes. SEO is built into every website we deliver — not added as an afterthought. This includes technical SEO (Core Web Vitals, structured data, sitemaps), on-page optimisation (title tags, meta descriptions, heading hierarchy), and content strategy. We don't build websites that are invisible to search engines.",
  },
  {
    q: "What technology stack do you use?",
    a: "We build with modern, performance-focused stacks: React / Next.js for web apps, static site generators for content sites, and WordPress for clients who need easy self-management. The choice depends on your specific needs, budget, and team capabilities.",
  },
  {
    q: "Can you improve my existing website's SEO?",
    a: "Yes. We conduct a full technical SEO audit of your current site, identify the issues hurting your rankings, and implement fixes in order of impact. This typically includes Core Web Vitals improvements, structured data, crawl error resolution, and on-page optimisation.",
  },
  {
    q: "Do you provide ongoing SEO management?",
    a: "Yes. One-time SEO work gets you to the starting line. Ongoing monthly SEO management keeps you ahead of competitors and Google algorithm changes. We offer retainer packages that include content creation, link building, and monthly reporting.",
  },
  {
    q: "Can you build in multiple languages for international SEO?",
    a: "Yes. We build multi-language websites with proper hreflang tags, language-specific URLs, and localised content strategies. This is especially effective for our clients targeting WhatsApp API markets in Brazil (Portuguese), Latin America (Spanish), and South/Southeast Asia.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Development & SEO Services",
  provider: {
    "@type": "Organization",
    name: "MIMC Technologies",
    url: "https://www.mimctechnologies.com",
  },
  description:
    "Custom web development, technical SEO, and digital marketing services. High-performance websites built to rank on Google and convert visitors into leads.",
  url: "https://www.mimctechnologies.com/services/web-development",
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

export default function WebDevelopment() {
  return (
    <Layout
      title="Web Development & SEO — High-Performance Websites That Rank"
      description="Custom web development and technical SEO services by MIMC Technologies. Websites built for performance, Google rankings, and lead generation."
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
              <span className="border border-[var(--color-cyber-accent2)]/40 text-[var(--color-cyber-accent2)] px-3 py-1 text-xs font-[var(--font-cyber-accent)] uppercase tracking-widest bg-[var(--color-cyber-accent2)]/10">
                Full Stack
              </span>
              <span className="border border-[var(--color-cyber-accent)]/40 text-[var(--color-cyber-accent)] px-3 py-1 text-xs font-[var(--font-cyber-accent)] uppercase tracking-widest bg-[var(--color-cyber-accent)]/10">
                <span className="animate-blink mr-1">_</span> SEO Ready
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-widest font-[var(--font-cyber-head)] leading-none text-white">
              <span className="block cyber-glitch" data-text="WEB DEV">
                WEB DEV
              </span>
              <span className="text-[var(--color-cyber-accent2)]">
                &amp; SEO
              </span>
              <span className="block text-white text-2xl sm:text-3xl md:text-4xl mt-2">
                THAT GETS FOUND
              </span>
            </h1>

            <p className="border-l-2 border-[var(--color-cyber-accent2)] pl-4 font-[var(--font-cyber-accent)] text-[var(--color-cyber-muted-fg)] leading-relaxed uppercase tracking-wider text-sm">
              &gt; Beautiful design that stops the scroll.
              <br />
              &gt; Technical SEO that ranks on Google.
              <br />
              &gt; Conversion architecture that generates leads.
              <span className="inline-block w-2 h-4 bg-[var(--color-cyber-accent2)] animate-blink ml-1 align-middle" />
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 font-[var(--font-cyber-accent)] uppercase tracking-widest cyber-chamfer border-2 border-[var(--color-cyber-accent2)] bg-[var(--color-cyber-accent2)] text-black hover:bg-transparent hover:text-[var(--color-cyber-accent2)] transition-all duration-300 px-8 py-4 font-bold"
              >
                GET A QUOTE{" "}
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

          {/* Web Design Browser Mockup */}
          <div className="relative p-1 cyber-chamfer-reverse bg-gradient-to-br from-[#ff00ff]/20 to-transparent group overflow-hidden">
            <BrowserMockup title="mimc.tech/new-platform" />
          </div>
        </section>

        {/* Stats */}
        <section className="mb-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-cyber-border)]">
          {[
            { value: "< 2.5s", label: "LCP Target (Core Web Vitals)" },
            { value: "100", label: "Lighthouse Score Target" },
            { value: "3–6wk", label: "Avg. Delivery Time" },
            { value: "P.1", label: "Google Page 1 Goal" },
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

        {/* Feature Grid */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12 border-b border-[var(--color-cyber-border)] pb-4">
            <span className="text-[var(--color-cyber-accent2)] font-[var(--font-cyber-accent)] text-sm uppercase tracking-widest">
              &gt;&gt; WHAT_WE_BUILD
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

        {/* Portfolio Mockup */}
        <section className="mb-24 p-1 group">
          <BrowserMockup title="mimc.tech/portfolio/e-commerce" />
        </section>

        {/* SEO Services Grid */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12 border-b border-[var(--color-cyber-border)] pb-4">
            <span className="text-[var(--color-cyber-accent)] font-[var(--font-cyber-accent)] text-sm uppercase tracking-widest">
              &gt;&gt; SEO_SERVICES
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seoServices.map((s) => (
              <div
                key={s.title}
                className="border border-[var(--color-cyber-border)] bg-[var(--color-cyber-card)] p-8 hover:border-[var(--color-cyber-accent2)]/50 transition-colors group"
              >
                <h3 className="font-[var(--font-cyber-head)] text-lg font-bold uppercase tracking-widest text-white mb-6 group-hover:text-[var(--color-cyber-accent2)] transition-colors flex items-center gap-3">
                  <Search className="w-5 h-5 text-[var(--color-cyber-accent2)]" />{" "}
                  {s.title}
                </h3>
                <ul className="space-y-3">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-[var(--font-cyber-accent)] uppercase tracking-wider text-[var(--color-cyber-muted-fg)]"
                    >
                      <CheckCircle className="w-4 h-4 flex-shrink-0 text-[var(--color-cyber-accent2)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-24 border border-[var(--color-cyber-border)] p-6 sm:p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[var(--color-cyber-accent2)]/5 blur-[80px]" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-[var(--font-cyber-head)] uppercase tracking-widest text-white mb-10 sm:mb-16 flex flex-wrap items-center gap-2 sm:gap-4 break-words">
            <span className="text-[var(--color-cyber-accent2)]">&gt;&gt;</span>{" "}
            HOW_WE_BUILD
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {
                n: "01",
                title: "Discovery",
                desc: "Goals, audience, competitors, keyword targets.",
              },
              {
                n: "02",
                title: "Design",
                desc: "Wireframes → high-fidelity mockups → your approval.",
              },
              {
                n: "03",
                title: "Build",
                desc: "Development with SEO architecture baked in from line one.",
              },
              {
                n: "04",
                title: "Optimise",
                desc: "Performance audit, Lighthouse score, Core Web Vitals pass.",
              },
              {
                n: "05",
                title: "Launch & Grow",
                desc: "Go live, submit to Google Search Console, begin ranking.",
              },
            ].map((p, i) => (
              <div key={p.n} className="relative">
                {i < 4 && (
                  <div
                    className="hidden md:block absolute top-5 left-full w-full h-px z-10"
                    style={{
                      background:
                        "linear-gradient(to right, var(--color-cyber-accent2), transparent)",
                    }}
                  />
                )}
                <div className="font-[var(--font-cyber-head)] text-4xl font-black mb-3 text-[var(--color-cyber-accent2)] opacity-20">
                  {p.n}
                </div>
                <h3 className="font-[var(--font-cyber-head)] text-sm font-bold uppercase tracking-widest text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-[var(--color-cyber-muted-fg)] text-xs uppercase tracking-wider leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
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
            YOUR WEBSITE SHOULD
            <br />
            <span className="text-[var(--color-cyber-accent2)]">
              WORK HARDER.
            </span>
          </h2>
          <p className="font-[var(--font-cyber-accent)] text-[var(--color-cyber-muted-fg)] uppercase tracking-widest text-sm mb-10 relative z-10">
            Free audit of your current site. We'll show you exactly what's
            costing you rankings.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 font-[var(--font-cyber-accent)] uppercase tracking-widest cyber-chamfer border-2 border-[var(--color-cyber-accent2)] bg-[var(--color-cyber-accent2)] text-black hover:bg-transparent hover:text-[var(--color-cyber-accent2)] transition-all duration-300 px-10 py-5 text-base font-bold relative z-10"
          >
            GET FREE AUDIT{" "}
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>

        <RelatedServices currentId="web-development" />
      </div>
    </Layout>
  );
}
