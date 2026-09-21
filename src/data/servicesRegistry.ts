import { CanonicalLocation } from "./canonicalLocations";

export type ServiceId =
  | "tally-cloud"
  | "tally-whatsapp-integration"
  | "erp-crm"
  | "whatsapp-api"
  | "web-development"
  | "digital-marketing"
  | "enterprise-consulting";

export interface ServiceConfig {
  id: ServiceId;
  title: string;
  shortTitle: string;
  badge: string;
  category: string;
  tagline: string;
  getH1: (city: CanonicalLocation) => string;
  getMetaTitle: (city: CanonicalLocation) => string;
  getMetaDescription: (city: CanonicalLocation) => string;
  getHeroDescription: (city: CanonicalLocation) => string;
  getFeatures: (
    city: CanonicalLocation,
  ) => Array<{ title: string; desc: string }>;
  getFaqs: (city: CanonicalLocation) => Array<{ q: string; a: string }>;
  breadcrumbs: (
    city: CanonicalLocation,
  ) => Array<{ name: string; url: string }>;
}

export interface ResolvedCityServiceData {
  serviceId: ServiceId;
  serviceTitle: string;
  serviceBadge: string;
  serviceCategory: string;
  serviceTagline: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroDescription: string;
  features: Array<{ title: string; desc: string }>;
  faqs: Array<{ q: string; a: string }>;
  breadcrumbs: Array<{ name: string; url: string }>;
}

export const SERVICES_CONFIG: Record<ServiceId, ServiceConfig> = {
  "tally-cloud": {
    id: "tally-cloud",
    title: "Tally on Cloud Hosting",
    shortTitle: "Tally on Cloud",
    badge: "MANAGED CLOUD HOSTING",
    category: "Cloud Accounting & Remote Infrastructure",
    tagline:
      "Run Tally Prime securely from anywhere on Mac, PC, phone, or web browser.",
    getH1: (city) =>
      `Tally on Cloud Hosting in ${city.city} — Access Anywhere on Mac & PC.`,
    getMetaTitle: (city) =>
      `Tally on Cloud Provider in ${city.city} | Fast Tally Prime Cloud Hosting`,
    getMetaDescription: (city) =>
      `Run Tally Prime securely on cloud in ${city.city}. Access on Mac, Windows, tablet or browser. Fast SSD speed, multi-user support & automatic daily backup. Free demo.`,
    getHeroDescription: (city) =>
      `Stop running Tally on slow office desktop computers. Host your Tally Prime on high-speed NVMe cloud servers with 99.99% uptime. Work securely from home, factory, branch office, or client meetings in ${city.city}. 100% ransomware safe with daily automated backups.`,
    getFeatures: (city) => [
      {
        title: "Access Tally on Mac, iPad, Windows & Mobile",
        desc: "Open your real Tally Prime directly on MacBook, iMac, tablet, or any web browser without complicated setups.",
      },
      {
        title: "Super-Fast Speed for Multi-User Teams",
        desc: "High-frequency CPU cores and NVMe SSD drives mean zero freezing, even when multiple accountants run heavy balance sheets at once.",
      },
      {
        title: "100% Ransomware-Proof & Daily Backups",
        desc: `Your data is backed up automatically every day in Tier-4 ISO-certified data centers. Even if a local laptop gets a virus or crashes, your Tally data in ${city.city} is completely safe.`,
      },
      {
        title: "1-Click Local Printing & GST Ready",
        desc: `Print invoices and delivery challans straight to your regular local office printer in ${city.city} with one click. Fully ready for GST, e-Invoicing, and e-Way bills.`,
      },
    ],
    getFaqs: (city) => [
      {
        q: `How do I access Tally on Cloud from ${city.city}?`,
        a: "You can log in through our secure desktop client or directly from any web browser (Chrome, Safari, Edge) on your Mac, Windows PC, iPad, or Android phone. Enter your credentials and your full Tally Prime desktop opens in seconds.",
      },
      {
        q: "Can I print invoices on my local office printer?",
        a: "Yes! Our cloud architecture passes print jobs straight through to your local USB, Wi-Fi, or network printer in your office without manual downloading.",
      },
      {
        q: "How long does it take to migrate our existing Tally data?",
        a: `Migration typically takes under 2 hours. Simply share your latest Tally backup with our team. We configure your cloud server, test data integrity, set up user logins for your ${city.city} team, and hand over access with zero business downtime.`,
      },
      {
        q: "Is our financial data safe from ransomware and unauthorized access?",
        a: "Yes. Your Tally data is isolated in private cloud storage with bank-grade 256-bit SSL encryption, granular user permissions, and automated off-site daily backups. Nobody can copy or extract data without admin authorization.",
      },
      {
        q: "Can multiple users in different branches work on Tally at the same time?",
        a: "Yes! With Tally Multi-User (Gold), your head office, retail counters, and remote warehouses can all create vouchers and check stock simultaneously with zero lag.",
      },
    ],
    breadcrumbs: (city) => [
      { name: "Home", url: "/" },
      { name: "Services", url: "/services/" },
      { name: "Tally on Cloud", url: "/services/tally-cloud/" },
      {
        name: city.city,
        url: `/services/tally-cloud/${city.citySlug}/`,
      },
    ],
  },
  "tally-whatsapp-integration": {
    id: "tally-whatsapp-integration",
    title: "Automated Tally Prime WhatsApp Invoicing",
    shortTitle: "Tally WhatsApp Integration",
    badge: "SPECIALIZED CONNECTOR",
    category: "Financial Automation & Messaging",
    tagline:
      "Instant 3-second voucher and ledger dispatch directly from Tally Prime.",
    getH1: (city) =>
      `Automated Tally Prime WhatsApp Invoicing in ${city.city}.`,
    getMetaTitle: (city) =>
      `Tally Prime WhatsApp Integration in ${city.city} | Automated Invoicing`,
    getMetaDescription: (city) =>
      `Automate Tally Prime invoice dispatch, payment reminders & outstanding ledger statements directly to WhatsApp in ${city.city}, ${city.state}. ${city.complianceNote}`,
    getHeroDescription: (city) =>
      `Zero manual PDF exports or accounting overhead. Connect Tally Prime or ERP 9 directly with Meta-approved WhatsApp Cloud gateways to dispatch digitally watermarked GST/VAT invoices across ${city.city}, ${city.country}.`,
    getFeatures: (city) => [
      {
        title: `Instant Trigger Voucher Dispatch`,
        desc: `When invoices or payment receipts are created in Tally, an encrypted, branded PDF invoice is automatically delivered to your ${city.city} client's WhatsApp in under 3 seconds.`,
      },
      {
        title: `Automated Outstanding Ledger Reminders`,
        desc: `Schedule automated overdue payment reminders with clickable UPI / bank payment links, accelerating debtor cash flow recovery for commercial suppliers across ${city.city}.`,
      },
      {
        title: `Multi-Company & Multi-GST / VAT Sync`,
        desc: `Seamlessly manage multiple branches, godowns, and GSTIN / VAT registrations across ${city.state} and ${city.country} without separate licensing fees.`,
      },
      {
        title: `Direct Client Communication & Zero Ban Risk`,
        desc: `Operates directly on the official Meta Business API with verified Green Tick verification support, ensuring 100% message deliverability across ${city.city}.`,
      },
    ],
    getFaqs: (city) => [
      {
        q: `How quickly can businesses in ${city.city} set up Tally WhatsApp integration?`,
        a: `Onboarding takes less than 24 hours. Our technical integration team configures the Tally Prime connector, verifies your Meta WhatsApp Business API account, and connects your accounting ledger without interrupting daily billing.`,
      },
      {
        q: `Does it support ${city.country === "India" ? "GST e-invoicing and e-Way bills" : "local VAT tax compliance"}?`,
        a: `Yes. All invoices generated in Tally include standard tax breakdown (${city.complianceNote}), QR codes, and tamper-proof digital watermarks.`,
      },
      {
        q: `Will our Tally accounting data remain secure?`,
        a: `Absolutely. No financial database credentials or customer records are stored on third-party servers. All transactions use bank-grade AES-256 and SSL encryption directly over Meta's Cloud API.`,
      },
    ],
    breadcrumbs: (city) => [
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      {
        name: "Tally WhatsApp Integration",
        url: "/services/tally-whatsapp-integration",
      },
      {
        name: city.city,
        url: `/services/tally-whatsapp-integration/${city.citySlug}`,
      },
    ],
  },

  "erp-crm": {
    id: "erp-crm",
    title: "Enterprise ERP & Custom CRM Architectures",
    shortTitle: "Custom ERP & CRM",
    badge: "MISSION CRITICAL ARCHITECTURE",
    category: "Enterprise Systems & Data",
    tagline:
      "Custom-engineered resource planning and CRM platforms with zero recurring seat licensing.",
    getH1: (city) => `Custom Enterprise ERP & CRM Software in ${city.city}.`,
    getMetaTitle: (city) =>
      `Custom ERP & CRM Software Development in ${city.city} | MIMC Technologies`,
    getMetaDescription: (city) =>
      `Custom enterprise ERP & CRM development for multi-branch wholesale, manufacturing, and commercial logistics in ${city.city}, ${city.country}. 100% source code ownership with sub-100ms database speed.`,
    getHeroDescription: (city) =>
      `Escape bloated per-user seat fees and rigid SaaS constraints. We architect bespoke ERP platforms and real-time CRM engines engineered specifically for high-volume manufacturing, distribution, and corporate operations in ${city.city}, ${city.country}.`,
    getFeatures: (city) => [
      {
        title: `100% Source Code Ownership & Zero Seat Fees`,
        desc: `Unlike NetSuite, SAP, or Salesforce, you own the entire intellectual property and database schema. Add unlimited users across your ${city.city} offices without incremental per-user fees.`,
      },
      {
        title: `Sub-100ms High-Concurrency PostgreSQL Core`,
        desc: `Engineered on modern PostgreSQL and Node.js microservices to deliver sub-100ms query latency across multi-warehouse inventory, accounting ledgers, and billing pipelines in ${city.city}.`,
      },
      {
        title: `Native Tax & Regulatory Alignment`,
        desc: `Built-in automated compliance (${city.complianceNote}), multi-currency ledger conversions, and automated audit logs for enterprise governance in ${city.country}.`,
      },
      {
        title: `Legacy System & API Bridges`,
        desc: `Bi-directional connectors bridging legacy databases, EDI feeds, WhatsApp notifications, and payment gateways into one unified operational cockpit.`,
      },
    ],
    getFaqs: (city) => [
      {
        q: `Why choose custom ERP development over off-the-shelf software for our ${city.city} operations?`,
        a: `Off-the-shelf platforms charge thousands in monthly recurring user fees and force your workflow into rigid templates. Custom ERP grants 100% source code ownership, zero license overhead, and exact alignment with your specific business logic.`,
      },
      {
        q: `What is the typical deployment timeline for ${city.city} enterprises?`,
        a: `A production-ready MVP is delivered within 3 to 6 weeks using our modular architecture foundations, followed by phased branch and user migration.`,
      },
      {
        q: `How do you handle multi-branch data synchronization?`,
        a: `We deploy distributed, multi-region cloud databases with automated real-time replication, role-based access control, and 99.99% uptime guarantees.`,
      },
    ],
    breadcrumbs: (city) => [
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: "Enterprise ERP & CRM", url: "/services/erp-crm" },
      { name: city.city, url: `/services/erp-crm/${city.citySlug}` },
    ],
  },

  "whatsapp-api": {
    id: "whatsapp-api",
    title: "Official Meta WhatsApp Business API",
    shortTitle: "WhatsApp Business API",
    badge: "OFFICIAL META PARTNER",
    category: "High-Volume Messaging & AI",
    tagline:
      "Automate million-message customer communication pipelines directly over Meta Cloud API.",
    getH1: (city) =>
      `Official Meta WhatsApp Business API Provider in ${city.city}.`,
    getMetaTitle: (city) =>
      `WhatsApp Business API Provider in ${city.city} | Official Meta Partner`,
    getMetaDescription: (city) =>
      `Deploy official Meta WhatsApp Business API in ${city.city}, ${city.country}. Verified Green Tick onboarding, instant CRM & ERP automation, high-throughput broadcast campaigns with 99.99% SLA.`,
    getHeroDescription: (city) =>
      `Direct Meta Cloud API infrastructure for enterprise customer engagement across ${city.city}, ${city.country}. Fast-track Green Checkmark verification, automated webhook routing, and multi-agent customer support consoles.`,
    getFeatures: (city) => [
      {
        title: `Official Meta Green Checkmark Verification`,
        desc: `Boost trust and open rates across ${city.city} with an official verified Meta Green Badge next to your brand name on WhatsApp.`,
      },
      {
        title: `High-Throughput Transactional & Marketing Broadcasts`,
        desc: `Dispatch hundreds of thousands of personalized notifications, invoices, order dispatches, and promotional updates with real-time delivery telemetry.`,
      },
      {
        title: `2-Way Interactive Chatbots & Agent Consoles`,
        desc: `Integrate AI-driven customer service bots and multi-agent shared inbox systems for sales teams across ${city.city} and ${city.state}.`,
      },
      {
        title: `Direct Webhook & ERP Telemetry Integration`,
        desc: `Hook directly into your custom ERP, CRM, or billing databases for automated transactional confirmations and instant payment collection links.`,
      },
    ],
    getFaqs: (city) => [
      {
        q: `What is the difference between WhatsApp Business App and WhatsApp Business API in ${city.city}?`,
        a: `The standard app is limited to one or two devices and manual typing. The Official Meta WhatsApp Business API enables unlimited messaging volume, automated system webhooks, multi-agent consoles, and verified Green Checkmark branding.`,
      },
      {
        q: `How long does Meta verification take for ${city.city} companies?`,
        a: `As an official integration specialist, we typically complete Meta Business Manager verification and phone number onboarding within 48 to 72 hours.`,
      },
      {
        q: `Does the messaging comply with ${city.country} data privacy standards?`,
        a: `Yes. All messages travel across end-to-end encrypted official Meta Cloud API infrastructure adhering to ${city.complianceNote}.`,
      },
    ],
    breadcrumbs: (city) => [
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: "WhatsApp Business API", url: "/services/whatsapp-api" },
      { name: city.city, url: `/services/whatsapp-api/${city.citySlug}` },
    ],
  },

  "web-development": {
    id: "web-development",
    title: "Next.js & Modern Web Infrastructure",
    shortTitle: "Web Development",
    badge: "NEXT.JS & EDGE CLOUD",
    category: "Web Architecture & Performance",
    tagline: "Sub-second web platforms engineered for maximum B2B conversion.",
    getH1: (city) => `Next.js & Enterprise Web Development in ${city.city}.`,
    getMetaTitle: (city) =>
      `Next.js & Web Development Agency in ${city.city} | MIMC Technologies`,
    getMetaDescription: (city) =>
      `Sub-second load times, 100/100 Core Web Vitals, and modern Next.js App Router web development for enterprises in ${city.city}, ${city.country}. High-converting digital architectures.`,
    getHeroDescription: (city) =>
      `Elevate your digital footprint in ${city.city}, ${city.country} with edge-rendered Next.js web applications, mobile-first responsive interfaces, and headless CMS platforms engineered to convert qualified commercial leads.`,
    getFeatures: (city) => [
      {
        title: `100/100 Core Web Vitals & Sub-Second Latency`,
        desc: `Engineered on Next.js 15 App Router and React Server Components (RSC) to achieve flawless Google PageSpeed scores, zero CLS, and instant page transitions for ${city.city} audiences.`,
      },
      {
        title: `Tailored Regional UI/UX Design System`,
        desc: `High-conversion design tailored to corporate standards in ${city.country}, featuring sleek typography, accessible WCAG standards, and micro-animations that establish immediate trust.`,
      },
      {
        title: `Enterprise Cloud & Edge Serverless`,
        desc: `Deployed across distributed edge CDNs with automatic failover, SSL encryption, and compliance with ${city.complianceNote}.`,
      },
      {
        title: `Headless CMS & API Integration`,
        desc: `Empower non-technical marketing teams in ${city.city} to publish content effortlessly while engineers retain full control over performance and security.`,
      },
    ],
    getFaqs: (city) => [
      {
        q: `Why is Next.js the preferred web framework for businesses in ${city.city}?`,
        a: `Next.js combines server-side rendering with edge caching to deliver sub-second page loads. This directly improves Google search rankings, reduces visitor bounce rates, and significantly boosts lead conversion rates compared to legacy WordPress or basic React SPAs.`,
      },
      {
        q: `Do you provide ongoing maintenance and security patches for ${city.city} clients?`,
        a: `Yes. We provide 24/7 infrastructure monitoring, automated security patching, regular dependency updates, and continuous performance tuning backed by enterprise SLAs.`,
      },
      {
        q: `Can you integrate our existing CRM or accounting system with the website?`,
        a: `Absolutely. We engineer direct API webhooks connecting your web forms directly to your CRM, WhatsApp API, ERP, or payment gateways.`,
      },
    ],
    breadcrumbs: (city) => [
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: "Web Development", url: "/services/web-development" },
      { name: city.city, url: `/services/web-development/${city.citySlug}` },
    ],
  },

  "digital-marketing": {
    id: "digital-marketing",
    title: "Technical SEO & Programmatic Search Consulting",
    shortTitle: "Technical SEO & Growth",
    badge: "REVENUE GROWTH & SEARCH",
    category: "Organic Growth & Search Dominance",
    tagline:
      "Dominate high-intent commercial search queries in competitive regional markets.",
    getH1: (city) =>
      `Technical SEO & Digital Growth Consulting in ${city.city}.`,
    getMetaTitle: (city) =>
      `Technical SEO Agency & Digital Growth in ${city.city} | MIMC Technologies`,
    getMetaDescription: (city) =>
      `Capture high-intent B2B search traffic in ${city.city}, ${city.country}. Deep technical code audits, Schema.org structured data, and programmatic SEO architectures that generate qualified corporate leads.`,
    getHeroDescription: (city) =>
      `Capture high-value search intent across ${city.city}, ${city.country}. We engineer clean crawl budgets, programmatic landing architectures, and conversion-optimized funnels that consistently generate qualified inbound corporate leads.`,
    getFeatures: (city) => [
      {
        title: `Programmatic Schema & Structured Data`,
        desc: `Implement Google Search Console-approved JSON-LD schemas (Service, Organization, FAQ, LocalBusiness) to secure rich snippets and top positions across ${city.city}.`,
      },
      {
        title: `Technical Code & Core Web Vitals Auditing`,
        desc: `Eliminate JavaScript rendering bottlenecks, render-blocking scripts, crawl errors, and broken canonical chains affecting your ${city.city} digital presence.`,
      },
      {
        title: `High-Intent Commercial Keyword Targeting`,
        desc: `Laser-focused keyword strategy mapping out real commercial queries searched by corporate decision-makers and procurement leads across ${city.state} and ${city.country}.`,
      },
      {
        title: `Transparent Lead Attribution & Analytics`,
        desc: `Full GA4 and Google Search Console telemetry tracking every inbound phone call, WhatsApp click, and form submission to tangible pipeline revenue.`,
      },
    ],
    getFaqs: (city) => [
      {
        q: `How does technical SEO differ from traditional marketing in ${city.city}?`,
        a: `Traditional marketing often relies on generic blog articles or expensive paid ads. Technical SEO fixes underlying website architecture, crawlability, speed, and schema markup so Google ranks your core commercial service pages at the top organically for years.`,
      },
      {
        q: `How long does it take to see organic search ranking improvements in ${city.city}?`,
        a: `Technical indexing and Core Web Vital improvements typically show measurable movement within 3 to 6 weeks, followed by substantial organic lead growth over 3 to 6 months.`,
      },
      {
        q: `Do you adhere strictly to Google's Search Essentials guidelines?`,
        a: `Yes, 100%. We employ white-hat, Google-compliant technical optimizations, structured schema, and authentic local content signals that protect your domain from algorithmic penalties.`,
      },
    ],
    breadcrumbs: (city) => [
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: "Technical SEO", url: "/services/digital-marketing" },
      { name: city.city, url: `/services/digital-marketing/${city.citySlug}` },
    ],
  },

  "enterprise-consulting": {
    id: "enterprise-consulting",
    title: "Enterprise Architecture & IT Consulting",
    shortTitle: "Enterprise IT Consulting",
    badge: "STRATEGY & ARCHITECTURE",
    category: "IT Strategy & System Modernization",
    tagline:
      "Strategic software blueprints, tech stack audits, and vendor independence.",
    getH1: (city) => `Enterprise Architecture & IT Consulting in ${city.city}.`,
    getMetaTitle: (city) =>
      `Enterprise IT Consulting & Software Architecture in ${city.city} | MIMC`,
    getMetaDescription: (city) =>
      `Senior software architecture audits, cloud migration roadmaps, and software vendor negotiation advisory for enterprises across ${city.city}, ${city.country}.`,
    getHeroDescription: (city) =>
      `Independent technical guidance before investing millions in software. We audit legacy systems, eliminate software vendor lock-in, and engineer cloud migration blueprints for growing enterprises in ${city.city}, ${city.country}.`,
    getFeatures: (city) => [
      {
        title: `Legacy Infrastructure & Bottleneck Audits`,
        desc: `Rigorous diagnostic analysis of your existing databases, microservices, and network topologies across ${city.city} facilities to uncover security gaps and performance bottlenecks.`,
      },
      {
        title: `Vendor Independence & Build vs. Buy Scoping`,
        desc: `Unbiased advisory helping corporate boards evaluate expensive SaaS contracts, negotiate vendor SLAs, and avoid proprietary vendor lock-in across ${city.country}.`,
      },
      {
        title: `Cloud Modernization & Security Blueprints`,
        desc: `Architect phased migration blueprints from on-premise servers to modern serverless and containerized cloud stacks adhering to ${city.complianceNote}.`,
      },
      {
        title: `Fractional CTO & Executive Advisory`,
        desc: `Senior architectural leadership guiding C-level executives in ${city.city} through critical technological transitions and complex IT procurement decisions.`,
      },
    ],
    getFaqs: (city) => [
      {
        q: `Who benefits most from IT architecture consulting in ${city.city}?`,
        a: `Mid-market enterprises ($10M–$200M+ revenue) in manufacturing, wholesale, logistics, and professional services that have outgrown legacy software or are considering costly ERP/SaaS migrations.`,
      },
      {
        q: `How do you guarantee unbiased advice?`,
        a: `We do not take commissions or kickbacks from software vendors. Our evaluations are 100% vendor-agnostic and focused entirely on what produces the lowest Total Cost of Ownership (TCO) for your business.`,
      },
      {
        q: `What is the output of an architecture audit for ${city.city} companies?`,
        a: `You receive a comprehensive Executive Technical Blueprint: security risk matrix, database schema recommendations, cloud cost optimization analysis, and a phased execution roadmap.`,
      },
    ],
    breadcrumbs: (city) => [
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: "Enterprise Consulting", url: "/services/enterprise-consulting" },
      {
        name: city.city,
        url: `/services/enterprise-consulting/${city.citySlug}`,
      },
    ],
  },
};

export function resolveCityServiceData(
  serviceId: ServiceId,
  location: CanonicalLocation,
): ResolvedCityServiceData {
  const config = SERVICES_CONFIG[serviceId];
  return {
    serviceId,
    serviceTitle: config.title,
    serviceBadge: config.badge,
    serviceCategory: config.category,
    serviceTagline: config.tagline,
    h1: config.getH1(location),
    metaTitle: config.getMetaTitle(location),
    metaDescription: config.getMetaDescription(location),
    heroDescription: config.getHeroDescription(location),
    features: config.getFeatures(location),
    faqs: config.getFaqs(location),
    breadcrumbs: config.breadcrumbs(location),
  };
}
