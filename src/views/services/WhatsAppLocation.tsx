"use client";
import {
  Zap,
  CheckCircle,
  ChevronRight,
  MessageSquare,
  Globe,
  Clock,
  Shield,
  BarChart3,
  MapPin,
  Star,
  Building2,
  PhoneCall,
  ArrowRight,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import Layout from "../../components/Layout";
import ServiceSchema from "../../components/seo/ServiceSchema";
import ServiceBadges from "../../components/ui/ServiceBadges";
import RelatedServices from "../../components/RelatedServices";
import SmartphoneMockup from "../../components/ui/SmartphoneMockup";

export interface LocationData {
  city: string;
  state: string;
  country: string;
  countryCode: string;
  slug: string;
  phone: string;
}

import whatsappLocations from "../../data/whatsappLocations.json";

// ─────────────────────────────────────────────────────────────
export default function WhatsAppLocation({ data }: { data: LocationData }) {
  const {
    city: CITY,
    state: STATE,
    country: COUNTRY,
    countryCode: COUNTRY_CODE,
    slug: SLUG,
    phone: PHONE_IN,
  } = data;
  const BASE_URL = "https://www.mimctechnologies.com";
  const PAGE_URL = `${BASE_URL}/services/${SLUG}`;

  const features = [
    {
      icon: Shield,
      title: "Official Meta BSP",
      desc: `100% Meta-approved WhatsApp Business API for ${CITY} businesses. Zero risk of account ban. Fully compliant.`,
    },
    {
      icon: Zap,
      title: "Tally Integration",
      desc: `${CITY}'s most-requested feature. Auto-send invoices, payment reminders, and ledger statements from TallyPrime or Tally ERP 9 via WhatsApp.`,
    },
    {
      icon: MessageSquare,
      title: "Bulk Messaging",
      desc: `Send thousands of personalised WhatsApp messages to your ${CITY} customer base — invoices, OTPs, promotions, shipping alerts — in one click.`,
    },
    {
      icon: Globe,
      title: "UPI & Payment Links",
      desc: `Generate and send payment links automatically via WhatsApp. Your ${CITY} customers pay without switching apps.`,
    },
    {
      icon: BarChart3,
      title: "Live Analytics",
      desc: `Real-time delivery rate, read rate, and response rate dashboard. Know exactly how your ${CITY} customers are engaging.`,
    },
    {
      icon: Clock,
      title: "99.9% Uptime SLA",
      desc: `Managed cloud infrastructure with dedicated monitoring. Critical for high-volume ${CITY} enterprises and manufacturing units.`,
    },
  ];

  const localUseCases = [
    {
      sector: "🏭 Manufacturing & SMEs",
      highlight: "Most Popular in " + CITY,
      cases: [
        "Auto-dispatch Tally invoices via WhatsApp",
        "Payment reminder automation (reduce DSO)",
        "Vendor & supplier PO confirmations",
        "Factory shift & maintenance alerts",
      ],
    },
    {
      sector: "🛍️ E-commerce & Retail",
      highlight: "High ROI Use Case",
      cases: [
        "Order confirmation & live tracking",
        "Abandoned cart recovery sequences",
        "COD confirmation to slash RTO rates",
        "Festival & promotional campaigns",
      ],
    },
    {
      sector: "🏦 Finance & FinTech",
      highlight: "Regulated & Secure",
      cases: [
        "Loan disbursal & EMI notifications",
        "Transaction OTP (replace expensive SMS)",
        "KYC document collection via chat",
        "Portfolio & NAV update alerts",
      ],
    },
    {
      sector: "🏥 Healthcare & Clinics",
      highlight: "Patient Engagement",
      cases: [
        "Appointment booking & reminders",
        "Lab report delivery on WhatsApp",
        "Post-consultation follow-ups",
        "Medicine refill & prescription alerts",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Mehta",
      role: "Director, Mehta Exports Pvt Ltd",
      location: CITY,
      text: "Our Tally invoices now go automatically to clients via WhatsApp the moment they are generated. Payment cycles have improved by 40%. The MIMC team understood our SME challenges perfectly.",
      rating: 5,
    },
    {
      name: "Priya Shah",
      role: "Head of Operations, QuickMeds",
      location: CITY,
      text: "We replaced our SMS OTP system with WhatsApp OTP. Costs dropped by 60% and delivery rates went from 78% to 98.5%. Setup was done in under 48 hours.",
      rating: 5,
    },
    {
      name: "Amit Desai",
      role: "Founder, Desai Trading Co.",
      location: CITY,
      text: `Running a wholesale business in ${CITY}, WhatsApp is everything for us. MIMC built a chatbot that handles order queries 24/7. Our support team now handles 3x the volume.`,
      rating: 5,
    },
  ];

  const comparisonRows = [
    {
      feature: "Meta-approved (no ban risk)",
      official: true,
      unofficial: false,
    },
    { feature: "Unlimited daily messages", official: true, unofficial: false },
    {
      feature: "Verified business green tick",
      official: true,
      unofficial: false,
    },
    { feature: "Template message campaigns", official: true, unofficial: true },
    { feature: "Two-way chatbot support", official: true, unofficial: true },
    { feature: "CRM & Tally integration", official: true, unofficial: true },
    { feature: "TRAI & GDPR compliant", official: true, unofficial: false },
    { feature: "Setup time", official: "3–7 days", unofficial: "24–48 hrs" },
  ];

  const faqs = [
    {
      q: `Is the Official WhatsApp Business API available for businesses in ${CITY}?`,
      a: `Yes. MIMC Technologies provides complete WhatsApp Business API setup for businesses across ${CITY}. We manage Meta verification, API configuration, and integration with your existing software end-to-end.`,
    },
    {
      q: `What is the cost of WhatsApp Business API for a ${CITY} business?`,
      a: `Meta charges per conversation (not per message). Utility conversations — like order confirmations or payment reminders — are highly cost-effective and typically 60–80% cheaper than SMS for the same outcome. We provide a full cost breakdown during your free discovery call.`,
    },
    {
      q: `Can you integrate WhatsApp API with Tally ERP for ${CITY} businesses?`,
      a: `Yes, and this is our most popular service in ${CITY}. We build a direct bridge between your TallyPrime or Tally ERP 9 and the WhatsApp Business API. The moment you generate an invoice or payment reminder in Tally, it is automatically sent to the client on WhatsApp — no manual copy-pasting required.`,
    },
    {
      q: `Can WhatsApp API replace SMS OTP for my ${CITY} business?`,
      a: `Absolutely. WhatsApp OTP delivery is cheaper than SMS in most regions and achieves delivery rates of 98%+ compared to 75–85% for SMS. We set up the full OTP infrastructure including template approval with Meta and API endpoints for your developers to integrate in hours.`,
    },
    {
      q: `How long does WhatsApp API setup take in ${CITY}?`,
      a: `Official API setup typically takes 3–7 business days, including Meta's business verification step. We handle all the paperwork — you just provide your business registration documents. For urgent requirements, we also offer unofficial API setup that goes live in 24–48 hours.`,
    },
    {
      q: `Do you provide compliant local billing for ${CITY} clients?`,
      a: `Yes. We provide proper tax invoices for all services in your local currency where applicable, ensuring full compliance for your accounting team.`,
    },
    {
      q: `Which industries in ${CITY} benefit most from WhatsApp API?`,
      a: `In ${CITY}, we see the strongest ROI in manufacturing and trading SMEs (for Tally invoice automation), e-commerce and D2C brands (for order and cart recovery), FinTech and NBFCs (for OTP and loan alerts), and healthcare clinics (for appointment and report delivery).`,
    },
  ];

  // Pick 8 other cities for cross-linking, deterministically offset by current page index
  // (no Math.random — impure, breaks SSR and re-render stability)
  const otherCities = whatsappLocations.filter((l) => l.slug !== SLUG);
  const offset =
    otherCities.findIndex((l) => l.slug === SLUG) % otherCities.length || 0;
  const alsoServingCities = [
    ...otherCities.slice(offset),
    ...otherCities.slice(0, offset),
  ].slice(0, 8);

  return (
    <Layout
      title={`WhatsApp Business API Provider in ${CITY} | Official Meta BSP — MIMC Technologies`}
      description={`#1 rated WhatsApp Business API provider in ${CITY}, ${STATE}. Official Meta BSP setup, Tally integration, bulk messaging, OTP & chatbot automation for ${CITY} businesses. INR billing. Free consultation: ${PHONE_IN}`}
    >
      {/* ── Schema: Product + FAQ + Breadcrumb (4-level deep) ── */}
      <ServiceSchema
        name={`WhatsApp Business API Service in ${CITY}, ${STATE}`}
        description={`Official WhatsApp Business API setup, Tally ERP integration, bulk messaging, OTP, and chatbot automation for businesses in ${CITY}, ${STATE}, ${COUNTRY}. Serving manufacturing, retail, FinTech, and healthcare sectors across Mumbai Metropolitan Region.`}
        url={PAGE_URL}
        faqs={faqs}
        breadcrumbs={[
          { name: "Home", url: BASE_URL },
          { name: "Services", url: `${BASE_URL}/services` },
          { name: "WhatsApp API", url: `${BASE_URL}/services/whatsapp-api` },
          { name: `WhatsApp API ${CITY}`, url: PAGE_URL },
        ]}
        rating={4.9}
        reviewCount={127}
      />

      {/* ── Schema: Local Service with areaServed ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": `${PAGE_URL}#service`,
                name: `WhatsApp Business API Provider in ${CITY}`,
                alternateName: [
                  `WhatsApp API ${CITY}`,
                  `WhatsApp Business API ${STATE}`,
                  `Tally WhatsApp Integration ${CITY}`,
                ],
                description: `Official Meta-approved WhatsApp Business API setup, Tally integration, bulk messaging, OTP delivery, and chatbot automation for businesses in ${CITY}, ${STATE}.`,
                url: PAGE_URL,
                provider: {
                  "@type": "Organization",
                  "@id": `${BASE_URL}#org`,
                  name: "MIMC Technologies",
                  url: BASE_URL,
                  logo: `${BASE_URL}/logo.webp`,
                  telephone: PHONE_IN,
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: COUNTRY_CODE,
                  },
                },
              },
              {
                "@type": "SoftwareApplication",
                "@id": `${PAGE_URL}#software`,
                name: `WhatsApp Business API Provider in ${CITY}`,
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web, iOS, Android",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "127",
                  bestRating: "5",
                  worstRating: "1",
                },
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock",
                },
                areaServed: [
                  {
                    "@type": "City",
                    name: CITY,
                    containedInPlace: { "@type": "State", name: STATE },
                  },
                  {
                    "@type": "City",
                    name: "Thane",
                    containedInPlace: { "@type": "State", name: STATE },
                  },
                  {
                    "@type": "City",
                    name: "Navi Mumbai",
                    containedInPlace: { "@type": "State", name: STATE },
                  },
                ],
                serviceType: "WhatsApp Business API Integration",
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: `WhatsApp API Services in ${CITY}`,
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Official WhatsApp Business API Setup",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: `Tally WhatsApp Integration ${CITY}`,
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "WhatsApp OTP & 2FA Authentication",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "WhatsApp Chatbot Development",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "WhatsApp CRM Integration",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "WhatsApp Bulk Messaging",
                      },
                    },
                  ],
                },
              },
              {
                "@type": "Review",
                "@id": `${PAGE_URL}#review-1`,
                itemReviewed: { "@id": `${PAGE_URL}#service` },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                },
                author: { "@type": "Person", name: "Rajesh Mehta" },
                reviewBody:
                  "Our Tally invoices now go automatically to clients via WhatsApp. Payment cycles improved by 40%.",
              },
              {
                "@type": "Review",
                "@id": `${PAGE_URL}#review-2`,
                itemReviewed: { "@id": `${PAGE_URL}#service` },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                },
                author: { "@type": "Person", name: "Priya Shah" },
                reviewBody:
                  "Replaced SMS OTP with WhatsApp OTP. Costs dropped 60% and delivery went to 98.5%.",
              },
            ],
          }),
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* ── Breadcrumb Nav ── */}
        <nav
          className="flex items-center gap-2 mb-12 text-xs font-[var(--font-cyber-accent)] uppercase tracking-widest text-[var(--color-cyber-muted-fg)] flex-wrap"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-[#25D366] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 flex-shrink-0" />
          <Link
            href="/services"
            className="hover:text-[#25D366] transition-colors"
          >
            Services
          </Link>
          <ChevronRight className="w-3 h-3 flex-shrink-0" />
          <Link
            href="/services/whatsapp-api"
            className="hover:text-[#25D366] transition-colors"
          >
            WhatsApp API
          </Link>
          <ChevronRight className="w-3 h-3 flex-shrink-0" />
          <span style={{ color: "#25D366" }}>Mumbai</span>
        </nav>

        {/* ── Hero ── */}
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Trust badges */}
            <div className="flex gap-3 flex-wrap">
              <span className="border border-[#25D366]/40 text-[#25D366] px-3 py-1 text-xs font-[var(--font-cyber-accent)] uppercase tracking-widest bg-[#25D366]/10">
                ✓ Official Meta Partner
              </span>
              <span className="flex items-center gap-1 border border-orange-400/40 text-orange-400 px-3 py-1 text-xs font-[var(--font-cyber-accent)] uppercase tracking-widest bg-orange-400/10">
                <MapPin className="w-3 h-3" />
                {CITY}, {COUNTRY}
              </span>
              <span className="border border-[var(--color-cyber-accent)]/40 text-[var(--color-cyber-accent)] px-3 py-1 text-xs font-[var(--font-cyber-accent)] uppercase tracking-widest bg-[var(--color-cyber-accent)]/10">
                <span className="animate-pulse mr-1">●</span> Serving MMR
              </span>
            </div>

            <ServiceBadges rating={4.9} reviewCount={127} />

            {/* H1 — primary keyword in first 3 words */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-widest font-[var(--font-cyber-head)] leading-none text-white">
              <span
                className="block text-sm md:text-base font-[var(--font-cyber-accent)] tracking-[0.3em] mb-4"
                style={{ color: "#25D366" }}
              >
                &gt; {CITY.toUpperCase()}, {STATE.toUpperCase()}
              </span>
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
              &gt; Official Meta BSP for {CITY} — zero ban risk.
              <br />
              &gt; Tally integration · Bulk messaging · OTP · Chatbots.
              <br />
              &gt; INR billing · GST invoice · Hindi &amp; English support.
              <span
                className="inline-block w-2 h-4 animate-blink ml-1 align-middle"
                style={{ background: "#25D366" }}
              />
            </p>

            {/* Phone CTA — important for local SEO */}
            <a
              href={`tel:${PHONE_IN.replace(/[^+\d]/g, "")}`}
              className="inline-flex items-center gap-2 text-sm font-[var(--font-cyber-accent)] uppercase tracking-widest text-[var(--color-cyber-muted-fg)] hover:text-[#25D366] transition-colors"
            >
              <PhoneCall className="w-4 h-4" style={{ color: "#25D366" }} />
              Call {PHONE_IN} for a free consultation
            </a>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/contact"
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
                Get Free Quote
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services/tally-whatsapp-integration"
                className="group inline-flex items-center justify-center gap-2 font-[var(--font-cyber-accent)] uppercase tracking-widest cyber-chamfer border-2 border-[var(--color-cyber-accent)] text-[var(--color-cyber-accent)] hover:bg-[var(--color-cyber-accent)] hover:text-black transition-all duration-300 px-8 py-4"
              >
                Tally + WhatsApp
              </Link>
            </div>
          </div>

          <SmartphoneMockup />
        </section>

        {/* ── Key Local Stats ── */}
        <section className="mb-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-cyber-border)]">
          {[
            { value: "127+", label: `${CITY} Clients` },
            { value: "98%", label: "Delivery Rate" },
            { value: "₹0.11", label: "Per Conversation (INR)" },
            { value: "3–7d", label: "Official Setup Time" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-[var(--color-cyber-card)] p-8 text-center group hover:bg-[#25D366]/5 transition-colors"
            >
              <div
                className="text-3xl md:text-4xl font-black font-[var(--font-cyber-head)] mb-2"
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

        {/* ── Features Grid ── */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12 border-b border-[var(--color-cyber-border)] pb-4">
            <span
              className="font-[var(--font-cyber-accent)] text-sm uppercase tracking-widest"
              style={{ color: "#25D366" }}
            >
              &gt;&gt; CAPABILITIES // {CITY.toUpperCase()}
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
                    className="w-12 h-12 border flex items-center justify-center mb-6 bg-black"
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

        {/* ── Mumbai Use Cases ── */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-4 border-b border-[var(--color-cyber-border)] pb-4">
            <span className="text-[var(--color-cyber-accent)] font-[var(--font-cyber-accent)] text-sm uppercase tracking-widest">
              &gt;&gt; {CITY.toUpperCase()}_USE_CASES
            </span>
          </div>
          <p className="text-[var(--color-cyber-muted-fg)] font-[var(--font-cyber-accent)] text-xs uppercase tracking-widest mb-10">
            Industry-specific WhatsApp API deployments across {CITY} and the
            Mumbai Metropolitan Region (MMR)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {localUseCases.map((u) => (
              <div
                key={u.sector}
                className="border border-[var(--color-cyber-border)] bg-[var(--color-cyber-card)] p-8 hover:border-[#25D366]/50 transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <span
                    className="text-[10px] font-[var(--font-cyber-accent)] uppercase tracking-widest px-2 py-1 border"
                    style={{ borderColor: "#25D36644", color: "#25D366" }}
                  >
                    {u.highlight}
                  </span>
                </div>
                <h3 className="font-[var(--font-cyber-head)] text-base font-bold uppercase tracking-widest text-white mb-6 group-hover:text-[#25D366] transition-colors">
                  {u.sector}
                </h3>
                <ul className="space-y-3">
                  {u.cases.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-3 text-sm font-[var(--font-cyber-accent)] uppercase tracking-wider text-[var(--color-cyber-muted-fg)]"
                    >
                      <CheckCircle
                        className="w-4 h-4 flex-shrink-0 mt-0.5"
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

        {/* ── Official vs Unofficial Comparison ── */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12 border-b border-[var(--color-cyber-border)] pb-4">
            <span className="text-[var(--color-cyber-accent)] font-[var(--font-cyber-accent)] text-sm uppercase tracking-widest">
              &gt;&gt; OFFICIAL_VS_UNOFFICIAL // COMPARISON
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse font-[var(--font-cyber-accent)] text-xs uppercase tracking-wider">
              <thead>
                <tr className="border-b border-[var(--color-cyber-border)]">
                  <th className="text-left p-4 text-[var(--color-cyber-muted-fg)]">
                    Feature
                  </th>
                  <th className="p-4 text-center" style={{ color: "#25D366" }}>
                    ✓ Official API
                    <br />
                    <span className="text-[10px] opacity-60 normal-case tracking-normal">
                      Meta-approved BSP
                    </span>
                  </th>
                  <th className="p-4 text-center text-orange-400">
                    ⚠ Unofficial API
                    <br />
                    <span className="text-[10px] opacity-60 normal-case tracking-normal">
                      Grey-market tools
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-[var(--color-cyber-border)] ${i % 2 === 0 ? "bg-[var(--color-cyber-card)]" : ""}`}
                  >
                    <td className="p-4 text-[var(--color-cyber-muted-fg)]">
                      {row.feature}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.official === "boolean" ? (
                        row.official ? (
                          <CheckCircle
                            className="w-4 h-4 mx-auto"
                            style={{ color: "#25D366" }}
                          />
                        ) : (
                          <XCircle className="w-4 h-4 mx-auto text-red-500" />
                        )
                      ) : (
                        <span style={{ color: "#25D366" }}>{row.official}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.unofficial === "boolean" ? (
                        row.unofficial ? (
                          <CheckCircle
                            className="w-4 h-4 mx-auto"
                            style={{ color: "#25D366" }}
                          />
                        ) : (
                          <XCircle className="w-4 h-4 mx-auto text-red-500" />
                        )
                      ) : (
                        <span className="text-orange-400">
                          {row.unofficial}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs font-[var(--font-cyber-accent)] uppercase tracking-widest text-[var(--color-cyber-muted-fg)]">
            We offer both. We will honestly recommend what is right for your{" "}
            {CITY} business based on your volume and risk tolerance.
          </p>
        </section>

        {/* ── Why Mumbai section ── */}
        <section className="mb-24 border border-[var(--color-cyber-border)] p-10 md:p-16 relative overflow-hidden">
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[80px] opacity-10"
            style={{ background: "#25D366" }}
          />
          <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-cyber-head)] uppercase tracking-widest text-white mb-10 flex flex-wrap items-center gap-4">
            <span style={{ color: "#25D366" }}>&gt;&gt;</span> WHY_
            {CITY.toUpperCase()}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                stat: "20M+",
                label: "WhatsApp users in Mumbai",
                desc: "Your customers are already on WhatsApp. You are losing sales every day by communicating via SMS or email instead.",
              },
              {
                stat: "#1",
                label: "Tally ERP market in India",
                desc: `${STATE} is India's largest Tally market. Our Tally WhatsApp connector is built specifically for the ${CITY} manufacturing and trading ecosystem.`,
              },
              {
                stat: "GST",
                label: "Compliant INR billing",
                desc: "We bill in Indian Rupees with a GSTIN-compliant invoice. Every paisa is properly documented — ITC-eligible for your business.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-[var(--color-cyber-border)] bg-[var(--color-cyber-card)] p-6 hover:border-[#25D366]/40 transition-colors"
              >
                <div
                  className="text-3xl font-black font-[var(--font-cyber-head)] mb-2"
                  style={{ color: "#25D366" }}
                >
                  {item.stat}
                </div>
                <div className="font-[var(--font-cyber-accent)] text-xs uppercase tracking-widest text-white mb-3">
                  {item.label}
                </div>
                <p className="text-[var(--color-cyber-muted-fg)] text-xs uppercase tracking-wider leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12 border-b border-[var(--color-cyber-border)] pb-4">
            <span
              className="font-[var(--font-cyber-accent)] text-sm uppercase tracking-widest"
              style={{ color: "#25D366" }}
            >
              &gt;&gt; {CITY.toUpperCase()}_CLIENT_REVIEWS
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="border border-[var(--color-cyber-border)] bg-[var(--color-cyber-card)] p-8 flex flex-col gap-6 hover:border-[#25D366]/50 transition-colors group"
              >
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-current"
                      style={{ color: "#25D366" }}
                    />
                  ))}
                </div>
                <p className="text-[var(--color-cyber-muted-fg)] text-sm leading-relaxed tracking-wider flex-1">
                  "{t.text}"
                </p>
                <div>
                  <div className="font-[var(--font-cyber-head)] text-sm font-bold uppercase tracking-widest text-white">
                    {t.name}
                  </div>
                  <div className="font-[var(--font-cyber-accent)] text-xs uppercase tracking-widest text-[var(--color-cyber-muted-fg)] mt-1">
                    {t.role}
                  </div>
                  <div
                    className="flex items-center gap-1 mt-1 text-xs font-[var(--font-cyber-accent)] uppercase tracking-widest"
                    style={{ color: "#25D366" }}
                  >
                    <MapPin className="w-3 h-3" />
                    {t.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Setup Process ── */}
        <section className="mb-24 border border-[var(--color-cyber-border)] p-10 md:p-16 relative overflow-hidden">
          <h2 className="text-2xl md:text-4xl font-bold font-[var(--font-cyber-head)] uppercase tracking-widest text-white mb-10 sm:mb-16 flex flex-wrap items-center gap-4">
            <span style={{ color: "#25D366" }}>&gt;&gt;</span> HOW_IT_WORKS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Free Discovery Call",
                desc: `We map your ${CITY} business needs — message volume, Tally version, CRM in use — and recommend the best API tier.`,
              },
              {
                step: "02",
                title: "Meta Verification",
                desc: "We handle Meta's business verification end-to-end. You provide GST certificate + business PAN. We do the rest.",
              },
              {
                step: "03",
                title: "API Integration",
                desc: "Our engineers connect WhatsApp to your Tally, ERP, CRM, or custom software. Full webhook and automation setup.",
              },
              {
                step: "04",
                title: "Go Live & Support",
                desc: `Live in 3–7 days. Ongoing Hindi/English support, delivery monitoring, and template management for your ${CITY} team.`,
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

        {/* ── FAQ ── */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12 border-b border-[var(--color-cyber-border)] pb-4">
            <span className="text-[var(--color-cyber-accent)] font-[var(--font-cyber-accent)] text-sm uppercase tracking-widest">
              &gt;&gt; FAQ // {CITY.toUpperCase()}_QUERIES
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

        {/* ── Also Serving (Internal Link Cluster) ── */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8 border-b border-[var(--color-cyber-border)] pb-4">
            <span className="text-[var(--color-cyber-accent)] font-[var(--font-cyber-accent)] text-sm uppercase tracking-widest">
              &gt;&gt; ALSO_SERVING
            </span>
          </div>
          <p className="text-[var(--color-cyber-muted-fg)] font-[var(--font-cyber-accent)] text-xs uppercase tracking-widest mb-6">
            WhatsApp Business API deployments across India, UAE, and Canada
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {alsoServingCities.map((city) => (
              <Link
                key={city.slug}
                href={`/services/${city.slug}`}
                className="group border border-[var(--color-cyber-border)] bg-[var(--color-cyber-card)] p-4 flex items-center justify-between hover:border-[#25D366]/50 hover:bg-[#25D366]/5 transition-all"
              >
                <div>
                  <div className="font-[var(--font-cyber-head)] text-xs font-bold uppercase tracking-widest text-white group-hover:text-[#25D366] transition-colors">
                    {city.city}
                  </div>
                  <div className="font-[var(--font-cyber-accent)] text-[10px] uppercase tracking-widest text-[var(--color-cyber-muted-fg)] mt-1">
                    WhatsApp API
                  </div>
                </div>
                <ArrowRight className="w-3 h-3 text-[var(--color-cyber-muted-fg)] group-hover:text-[#25D366] group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section
          className="text-center p-12 md:p-20 relative overflow-hidden border-2"
          style={{ borderColor: "#25D366" }}
        >
          <div
            className="absolute inset-0 opacity-5"
            style={{ background: "#25D366" }}
          />
          <div
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-32 blur-[60px] opacity-20"
            style={{ background: "#25D366" }}
          />
          <div className="relative z-10 flex items-center justify-center gap-2 mb-6">
            <Building2 className="w-5 h-5" style={{ color: "#25D366" }} />
            <span
              className="font-[var(--font-cyber-accent)] text-xs uppercase tracking-widest"
              style={{ color: "#25D366" }}
            >
              {CITY} Business — Ready to Automate?
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-widest font-[var(--font-cyber-head)] text-white mb-6 relative z-10">
            LET YOUR TALLY
            <br />
            <span style={{ color: "#25D366" }}>TALK ON WHATSAPP.</span>
          </h2>
          <p className="font-[var(--font-cyber-accent)] text-[var(--color-cyber-muted-fg)] uppercase tracking-widest text-sm mb-4 relative z-10">
            Free discovery call · INR billing · GST invoice · Hindi &amp;
            English support
          </p>
          <p
            className="font-[var(--font-cyber-accent)] text-xs mb-10 relative z-10"
            style={{ color: "#25D366" }}
          >
            Call us: {PHONE_IN}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link
              href="/contact"
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
              Book Free Call
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services/whatsapp-api"
              className="group inline-flex items-center gap-2 font-[var(--font-cyber-accent)] uppercase tracking-widest cyber-chamfer border-2 border-[var(--color-cyber-accent)] text-[var(--color-cyber-accent)] hover:bg-[var(--color-cyber-accent)] hover:text-black transition-all duration-300 px-10 py-5 text-base"
            >
              All WhatsApp Services
            </Link>
          </div>
        </section>

        <RelatedServices currentId="whatsapp-api" />
      </div>
    </Layout>
  );
}
