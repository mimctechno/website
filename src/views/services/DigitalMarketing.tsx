import {
  CheckCircle,
  ChevronRight,
  Target,
  Search,
  Globe,
  Megaphone,
  Mail,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import Layout from "../../components/Layout";
import DashboardMockup from "../../components/ui/DashboardMockup";
import BrowserMockup from "../../components/ui/BrowserMockup";
import RelatedServices from "../../components/RelatedServices";
import ServiceSchema from "../../components/seo/ServiceSchema";
import ServiceBadges from "../../components/ui/ServiceBadges";

const features = [
  {
    icon: Search,
    title: "Search Engine Marketing",
    desc: "Google Ads campaigns engineered for maximum ROI. Keyword targeting, ad copy, bid strategy, and landing page optimisation.",
  },
  {
    icon: TrendingUp,
    title: "SEO & Organic Growth",
    desc: "Long-term organic traffic growth through technical SEO, content strategy, link building, and keyword domination.",
  },
  {
    icon: Globe,
    title: "Local SEO",
    desc: 'Dominate "near me" searches. Google Business Profile, local citations, and region-specific landing pages for your target cities.',
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    desc: "LinkedIn, Instagram, and Facebook campaigns targeting your exact buyer persona — with creative content that converts.",
  },
  {
    icon: Mail,
    title: "Email & WhatsApp Marketing",
    desc: "Automated nurture sequences via email and WhatsApp. Keep leads warm, re-engage past clients, and drive repeat business.",
  },
  {
    icon: Target,
    title: "Conversion Rate Optimisation",
    desc: "A/B testing, heatmaps, and funnel analysis to squeeze more leads out of your existing traffic — without increasing ad spend.",
  },
];

const channels = [
  {
    name: "Google Search Ads",
    desc: "Capture high-intent buyers at the exact moment they search for your service.",
  },
  {
    name: "Google SEO",
    desc: "Build a permanent source of organic leads that doesn't cost per click.",
  },
  {
    name: "LinkedIn Ads",
    desc: "B2B targeting by job title, company size, and industry for enterprise deals.",
  },
  {
    name: "Meta (Facebook/Instagram)",
    desc: "Brand awareness and retargeting campaigns for B2C and SME audiences.",
  },
  {
    name: "WhatsApp Campaigns",
    desc: "Direct outreach via WhatsApp API — 98% open rates vs 22% for email.",
  },
  {
    name: "Content Marketing",
    desc: "Blog posts, case studies, and guides that rank on Google and build authority.",
  },
];

const faqs = [
  {
    q: "How long does SEO take to show results?",
    a: "SEO is a long-term investment. Most clients see measurable improvements in rankings within 3–6 months, and significant organic traffic growth within 6–12 months. The timeline depends on competition in your niche, your current domain authority, and the quality of content we produce. We provide monthly reports so you can track progress.",
  },
  {
    q: "What is the minimum budget for Google Ads?",
    a: "We recommend a minimum ad spend of $500–$1,000/month to gather meaningful data and optimise effectively. Our management fee is separate. Lower budgets are possible for highly targeted local campaigns, but scale limits results. We'll advise the right budget for your goals on a discovery call.",
  },
  {
    q: "Do you handle WhatsApp marketing for businesses in India and Brazil?",
    a: "Yes — this is one of our specialisations. We combine WhatsApp Business API with targeted campaign strategies for Indian and Brazilian markets, where WhatsApp is the primary communication channel. This includes broadcast campaigns, automated follow-up sequences, and chatbot-based lead qualification.",
  },
  {
    q: "How do you measure marketing performance?",
    a: "We track the metrics that matter to your business: leads generated, cost per lead, keyword rankings, organic traffic growth, and conversion rate. You receive a comprehensive monthly report with clear data and our interpretation of what it means for your growth.",
  },
  {
    q: "Can you help with local SEO for multiple cities?",
    a: "Yes. We create city-specific landing pages, localise your Google Business Profile, build local citations, and develop region-specific content. This is especially effective for businesses targeting multiple cities in India, Brazil, or other high-growth markets.",
  },
];

export default function DigitalMarketing() {
  return (
    <Layout
      title="Digital Marketing — SEO, Google Ads & WhatsApp Campaigns"
      description="Digital marketing services by MIMC Technologies — SEO, Google Ads, WhatsApp marketing for India, Brazil, and global markets. Drive leads with data-driven campaigns."
    >
      <ServiceSchema
        name="Digital Marketing & SEO"
        description="Data-driven digital marketing including SEO, Google Ads, and automated WhatsApp campaigns for India, Brazil, and global markets."
        url="https://www.mimctechnologies.com/services/digital-marketing"
        faqs={faqs}
        breadcrumbs={[
          { name: "Home", url: "https://www.mimctechnologies.com" },
          {
            name: "Services",
            url: "https://www.mimctechnologies.com/services",
          },
          {
            name: "Digital Marketing",
            url: "https://www.mimctechnologies.com/services/digital-marketing",
          },
        ]}
        rating={4.8}
        reviewCount={391}
      />
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero */}
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex gap-3 flex-wrap">
              <span className="border border-[var(--color-cyber-accent)]/40 text-[var(--color-cyber-accent)] px-3 py-1 text-xs font-[var(--font-cyber-accent)] uppercase tracking-widest bg-[var(--color-cyber-accent)]/10">
                Data Driven
              </span>
              <span className="border border-[var(--color-cyber-accent3)]/40 text-[var(--color-cyber-accent3)] px-3 py-1 text-xs font-[var(--font-cyber-accent)] uppercase tracking-widest bg-[var(--color-cyber-accent3)]/10">
                <span className="animate-blink mr-1">_</span> Growth
              </span>
            </div>
            <ServiceBadges rating={4.8} reviewCount={391} />
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-widest font-[var(--font-cyber-head)] leading-none text-white">
              <span className="block cyber-glitch" data-text="DIGITAL">
                DIGITAL
              </span>
              <span className="bg-gradient-to-r from-[var(--color-cyber-accent)] to-[var(--color-cyber-accent3)] bg-clip-text text-transparent">
                MARKETING
              </span>
              <span className="block text-white text-2xl sm:text-3xl md:text-4xl mt-2">
                THAT DRIVES LEADS
              </span>
            </h1>
            <p className="border-l-2 border-[var(--color-cyber-accent)] pl-4 font-[var(--font-cyber-accent)] text-[var(--color-cyber-muted-fg)] leading-relaxed uppercase tracking-wider text-sm">
              &gt; SEO, Google Ads, and WhatsApp campaigns.
              <br />
              &gt; Targeting India, Brazil, SEA &amp; LATAM markets.
              <br />
              &gt; Every rupee and dollar tracked and justified.
              <span className="inline-block w-2 h-4 bg-[var(--color-cyber-accent)] animate-blink ml-1 align-middle" />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 font-[var(--font-cyber-accent)] uppercase tracking-widest cyber-chamfer border-2 border-[var(--color-cyber-accent)] bg-[var(--color-cyber-accent)] text-black hover:bg-transparent hover:text-[var(--color-cyber-accent)] transition-all duration-300 px-8 py-4 font-bold"
              >
                GET FREE AUDIT{" "}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-2 font-[var(--font-cyber-accent)] uppercase tracking-widest cyber-chamfer border-2 border-[var(--color-cyber-accent2)] text-[var(--color-cyber-accent2)] hover:bg-[var(--color-cyber-accent2)] hover:text-black transition-all duration-300 px-8 py-4"
              >
                ALL SERVICES
              </Link>
            </div>
          </div>

          {/* Marketing Dashboard Mockup */}
          <div className="relative p-1 cyber-chamfer-reverse bg-gradient-to-br from-[var(--color-cyber-accent)]/20 to-[var(--color-cyber-accent3)]/10 group overflow-hidden">
            <DashboardMockup
              title="Global Campaign Analytics"
              stats={[
                { label: "Total Conversions", value: "84,209" },
                { label: "Avg. CPA", value: "$12.40" },
                { label: "ROAS", value: "4.8x" },
              ]}
              tableHeaders={["Campaign", "Spend", "Conversions", "ROAS"]}
              tableRows={[
                ["Q3 Search Intent (B2B)", "$45,000", "3,200", "5.1x"],
                ["LinkedIn Enterprise Retargeting", "$12,500", "410", "8.2x"],
                ["Meta Broad Awareness", "$18,000", "12,500", "2.1x"],
              ]}
            />
          </div>
        </section>

        {/* Stats */}
        <section className="mb-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-cyber-border)]">
          {[
            { value: "98%", label: "WhatsApp Open Rate" },
            { value: "3x", label: "Avg. ROI on Ad Spend" },
            { value: "20+", label: "Markets Served" },
            { value: "P.1", label: "Target: Google Page 1" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-[var(--color-cyber-card)] p-8 text-center hover:bg-[var(--color-cyber-accent)]/5 transition-colors"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-black font-[var(--font-cyber-head)] mb-2 text-[var(--color-cyber-accent)]">
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
            <span className="text-[var(--color-cyber-accent)] font-[var(--font-cyber-accent)] text-sm uppercase tracking-widest">
              &gt;&gt; SERVICE_MODULES
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-[2px] cyber-chamfer bg-gradient-to-br from-[var(--color-cyber-accent)]/20 to-transparent"
              >
                <div className="bg-[var(--color-cyber-card)] cyber-chamfer p-8 h-full relative overflow-hidden group-hover:bg-[#0a0a0f] transition-colors">
                  <div
                    className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background:
                        "linear-gradient(to right, transparent, var(--color-cyber-accent), transparent)",
                    }}
                  />
                  <div className="w-12 h-12 border border-[var(--color-cyber-accent)]/30 flex items-center justify-center mb-6 bg-black">
                    <f.icon
                      className="w-6 h-6 text-[var(--color-cyber-accent)]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-[var(--font-cyber-head)] text-base font-bold uppercase tracking-widest text-white mb-3 group-hover:text-[var(--color-cyber-accent)] transition-colors">
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

        {/* Channels */}
        <section className="mb-24 border border-[var(--color-cyber-border)] p-6 sm:p-10 md:p-14 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-[var(--color-cyber-accent)]/5 blur-[100px]" />
          <h2 className="text-2xl md:text-3xl font-bold font-[var(--font-cyber-head)] uppercase tracking-widest text-white mb-10 flex items-center gap-4">
            <span className="text-[var(--color-cyber-accent)]">&gt;&gt;</span>{" "}
            CHANNELS_WE_OPERATE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {channels.map((c) => (
              <div
                key={c.name}
                className="border border-[var(--color-cyber-border)] p-6 hover:border-[var(--color-cyber-accent)]/50 transition-colors group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-4 h-4 text-[var(--color-cyber-accent)] flex-shrink-0" />
                  <h3 className="font-[var(--font-cyber-head)] text-sm font-bold uppercase tracking-widest text-white group-hover:text-[var(--color-cyber-accent)] transition-colors">
                    {c.name}
                  </h3>
                </div>
                <p className="text-[var(--color-cyber-muted-fg)] text-xs uppercase tracking-wider leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Client Campaign Mockup */}
        <section className="mb-24 p-1 group">
          <BrowserMockup title="mimc.tech/case-studies/growth" />
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
                className="group border border-[var(--color-cyber-border)] bg-[var(--color-cyber-card)] hover:border-[var(--color-cyber-accent)]/50 transition-colors cyber-chamfer"
              >
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <h3 className="text-sm md:text-base font-bold tracking-widest uppercase font-[var(--font-cyber-head)] text-white group-hover:text-[var(--color-cyber-accent)] transition-colors pr-4">
                    {f.q}
                  </h3>
                  <span className="text-[var(--color-cyber-accent)] text-xl flex-shrink-0 group-open:rotate-45 transition-transform">
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
        <section className="text-center border-2 border-[var(--color-cyber-accent)] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[var(--color-cyber-accent)]/3" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-widest font-[var(--font-cyber-head)] text-white mb-6 relative z-10">
            STOP HOPING.
            <br />
            <span className="text-[var(--color-cyber-accent)]">
              START RANKING.
            </span>
          </h2>
          <p className="font-[var(--font-cyber-accent)] text-[var(--color-cyber-muted-fg)] uppercase tracking-widest text-sm mb-10 relative z-10">
            Free 30-minute marketing audit. We'll show you exactly where your
            leads are going.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 font-[var(--font-cyber-accent)] uppercase tracking-widest cyber-chamfer border-2 border-[var(--color-cyber-accent)] bg-[var(--color-cyber-accent)] text-black hover:bg-transparent hover:text-[var(--color-cyber-accent)] transition-all duration-300 px-10 py-5 text-base font-bold relative z-10"
          >
            BOOK FREE AUDIT{" "}
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>

        <RelatedServices currentId="digital-marketing" />
      </div>
    </Layout>
  );
}
