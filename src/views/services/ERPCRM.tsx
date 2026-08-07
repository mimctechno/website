import {
  Database,
  CheckCircle,
  ChevronRight,
  BarChart3,
  Users,
  Shield,
  Zap,
  Globe,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Layout from "../../components/Layout";
import DashboardMockup from "../../components/ui/DashboardMockup";
import RelatedServices from "../../components/RelatedServices";
import ServiceSchema from "../../components/seo/ServiceSchema";
import ServiceBadges from "../../components/ui/ServiceBadges";

const features = [
  {
    icon: Database,
    title: "Custom ERP Modules",
    desc: "We engineer ERP modules precisely for your industry — manufacturing, retail, distribution, services. No bloated generic software.",
  },
  {
    icon: Users,
    title: "CRM & Lead Pipeline",
    desc: "Full CRM with lead capture, pipeline management, follow-up automation, and client communication history in one dashboard.",
  },
  {
    icon: BarChart3,
    title: "Live Reporting",
    desc: "Real-time dashboards and reports. Inventory levels, revenue trends, overdue invoices — always visible, always accurate.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    desc: "Eliminate repetitive tasks. Automate purchase orders, sales invoices, approval workflows, and inter-department data flow.",
  },
  {
    icon: Shield,
    title: "Role-Based Access",
    desc: "Granular user permissions ensure each team member sees only what they need. Full audit logs for every action.",
  },
  {
    icon: Globe,
    title: "Multi-Company & Multi-Branch",
    desc: "Manage multiple companies, branches, and warehouses from a single unified platform — with consolidated reporting.",
  },
];

const industries = [
  {
    name: "Manufacturing",
    items: [
      "Production planning & tracking",
      "Raw material inventory",
      "Quality control modules",
      "Cost of goods sold reporting",
    ],
  },
  {
    name: "Distribution & Retail",
    items: [
      "Multi-warehouse inventory",
      "Purchase order automation",
      "Customer credit management",
      "GST & tax compliance",
    ],
  },
  {
    name: "Services & Consulting",
    items: [
      "Project tracking & billing",
      "Timesheet management",
      "Client invoice automation",
      "Revenue forecasting",
    ],
  },
  {
    name: "Healthcare & Education",
    items: [
      "Patient/student records",
      "Appointment scheduling",
      "Fee management",
      "Compliance & audit trails",
    ],
  },
];

const faqs = [
  {
    q: "What is an ERP system?",
    a: "ERP (Enterprise Resource Planning) is software that connects all departments of your business — finance, inventory, sales, HR, and operations — into a single system. Instead of using separate tools that don't talk to each other, ERP gives you one unified platform with real-time data across your whole business.",
  },
  {
    q: "What is a CRM and how is it different from ERP?",
    a: "CRM (Customer Relationship Management) focuses on managing your relationships with leads and clients — tracking interactions, managing pipelines, and automating follow-ups. ERP covers the broader operational picture including inventory, finance, and HR. We often deploy both together for maximum efficiency.",
  },
  {
    q: "How long does ERP implementation take?",
    a: "A core ERP deployment for a small to mid-size business typically takes 4–12 weeks depending on the number of modules, data migration complexity, and team size. We use an agile approach so you see working software in the first 2–3 weeks.",
  },
  {
    q: "Can you integrate ERP with WhatsApp or Tally?",
    a: "Yes. This is one of our specialisations. We can integrate your ERP with WhatsApp Business API for automated client communications, and with Tally for seamless accounting data flow. All our ERP deployments are built with integration-first architecture.",
  },
  {
    q: "Do you provide cloud-based or on-premise ERP?",
    a: "Both. We offer cloud-hosted ERP (lower upfront cost, accessible anywhere) and on-premise deployments (for businesses with data sovereignty requirements or existing server infrastructure). We advise based on your specific needs.",
  },
  {
    q: "Can I migrate from my existing software to your ERP?",
    a: "Yes. We handle full data migration from your existing accounting software, spreadsheets, or legacy ERP systems. Our team ensures zero data loss and minimal disruption to your daily operations.",
  },
];

export default function ERPCRM() {
  return (
    <Layout
      title="Enterprise ERP & CRM Solutions — Custom Software Development"
      description="Custom ERP and CRM solutions for manufacturing, retail, distribution, and services companies. Cloud & on-premise deployments by MIMC Technologies."
    >
      <ServiceSchema
        name="Enterprise ERP & CRM Solutions"
        description="Custom ERP and CRM software development and deployment for manufacturing, retail, distribution, and services businesses globally."
        url="https://www.mimctechnologies.com/services/erp-crm"
        faqs={faqs}
        breadcrumbs={[
          { name: "Home", url: "https://www.mimctechnologies.com" },
          {
            name: "Services",
            url: "https://www.mimctechnologies.com/services",
          },
          {
            name: "ERP & CRM",
            url: "https://www.mimctechnologies.com/services/erp-crm",
          },
        ]}
        rating={4.9}
        reviewCount={345}
      />
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero */}
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex gap-3 flex-wrap">
              <span className="border border-[var(--color-cyber-accent)]/40 text-[var(--color-cyber-accent)] px-3 py-1 text-xs font-[var(--font-cyber-accent)] uppercase tracking-widest bg-[var(--color-cyber-accent)]/10">
                Enterprise Grade
              </span>
              <span className="border border-[var(--color-cyber-accent2)]/40 text-[var(--color-cyber-accent2)] px-3 py-1 text-xs font-[var(--font-cyber-accent)] uppercase tracking-widest bg-[var(--color-cyber-accent2)]/10">
                Custom Built
              </span>
            </div>

            <ServiceBadges rating={4.9} reviewCount={345} />

            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-widest font-[var(--font-cyber-head)] leading-none text-white">
              <span className="block cyber-glitch" data-text="ENTERPRISE">
                ENTERPRISE
              </span>
              <span className="bg-gradient-to-r from-[var(--color-cyber-accent)] to-[var(--color-cyber-accent2)] bg-clip-text text-transparent">
                ERP & CRM
              </span>
              <span className="block text-white text-2xl sm:text-3xl md:text-4xl mt-2">
                SOLUTIONS
              </span>
            </h1>

            <p className="border-l-2 border-[var(--color-cyber-accent)] pl-4 font-[var(--font-cyber-accent)] text-[var(--color-cyber-muted-fg)] leading-relaxed uppercase tracking-wider text-sm">
              &gt; One system for your entire operation.
              <br />
              &gt; Custom-built for your industry and workflow.
              <br />
              &gt; From first module to full deployment in weeks.
              <span className="inline-block w-2 h-4 bg-[var(--color-cyber-accent)] animate-blink ml-1 align-middle" />
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 font-[var(--font-cyber-accent)] uppercase tracking-widest cyber-chamfer border-2 border-[var(--color-cyber-accent)] bg-[var(--color-cyber-accent)] text-black hover:bg-transparent hover:text-[var(--color-cyber-accent)] transition-all duration-300 px-8 py-4 font-bold"
              >
                REQUEST DEMO{" "}
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

          {/* ERP Dashboard Mockup */}
          <div className="relative p-1 cyber-chamfer-reverse bg-gradient-to-br from-[var(--color-cyber-accent)]/50 to-[var(--color-cyber-accent2)]/50 group overflow-hidden">
            <DashboardMockup
              title="Enterprise ERP System Overview"
              stats={[
                { label: "Q3 Gross Revenue", value: "$4.2M" },
                { label: "Active Enterprise Deals", value: "84" },
                { label: "Inventory Fulfillment", value: "98.9%" },
              ]}
              tableHeaders={["Deal Name", "Value", "Stage", "Assigned To"]}
              tableRows={[
                [
                  "Global Tech Inc - Phase 1",
                  "$150,000",
                  "Negotiation",
                  "Sarah J.",
                ],
                [
                  "Logistics Corp Fulfillment",
                  "$420,000",
                  "Closed Won",
                  "David M.",
                ],
                [
                  "Retail Supply Chain Upgrade",
                  "$85,000",
                  "Discovery",
                  "Alex K.",
                ],
              ]}
            />
            <div className="absolute bottom-4 right-4 z-20 bg-black/80 backdrop-blur-md border border-[var(--color-cyber-accent)] px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[var(--color-cyber-accent)] font-[var(--font-cyber-accent)] text-[10px] tracking-widest uppercase animate-blink">
                ERP_DASH_LIVE
              </span>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-cyber-border)]">
          {[
            { value: "4–12wk", label: "Avg. Deployment Time" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "20+", label: "Industries Served" },
            { value: "100%", label: "Custom Built" },
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

        {/* Features */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12 border-b border-[var(--color-cyber-border)] pb-4">
            <span className="text-[var(--color-cyber-accent)] font-[var(--font-cyber-accent)] text-sm uppercase tracking-widest">
              &gt;&gt; CORE_MODULES
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

        {/* Operations Dashboard Mockup */}
        <section className="mb-24 relative p-1 cyber-chamfer-reverse bg-[var(--color-cyber-border)] hover:bg-[var(--color-cyber-accent)] transition-colors duration-500 group overflow-hidden">
          <DashboardMockup
            title="Global Operations & HR"
            stats={[
              { label: "Total Headcount", value: "1,204" },
              { label: "Payroll Run", value: "SUCCESS" },
              { label: "System Uptime", value: "99.99%" },
            ]}
            tableHeaders={["Department", "Budget", "Spend", "Status"]}
            tableRows={[
              ["Engineering R&D", "$1.2M", "$850K", "On Track"],
              ["Global Marketing", "$450K", "$410K", "Warning"],
              ["Customer Success", "$300K", "$120K", "Optimal"],
            ]}
          />
          <div className="absolute bottom-4 right-4 z-20 bg-black/80 backdrop-blur-md border border-[var(--color-cyber-accent)] px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-[var(--color-cyber-accent)] font-[var(--font-cyber-accent)] text-[10px] tracking-widest uppercase animate-blink">
              OPS_MODULE_ACTIVE
            </span>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12 border-b border-[var(--color-cyber-border)] pb-4">
            <span className="text-[var(--color-cyber-accent)] font-[var(--font-cyber-accent)] text-sm uppercase tracking-widest">
              &gt;&gt; INDUSTRY_SOLUTIONS
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="border border-[var(--color-cyber-border)] bg-[var(--color-cyber-card)] p-8 hover:border-[var(--color-cyber-accent)]/50 transition-colors group"
              >
                <h3 className="font-[var(--font-cyber-head)] text-lg font-bold uppercase tracking-widest text-white mb-6 group-hover:text-[var(--color-cyber-accent)] transition-colors flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-[var(--color-cyber-accent)]" />{" "}
                  {ind.name}
                </h3>
                <ul className="space-y-3">
                  {ind.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-[var(--font-cyber-accent)] uppercase tracking-wider text-[var(--color-cyber-muted-fg)]"
                    >
                      <CheckCircle className="w-4 h-4 flex-shrink-0 text-[var(--color-cyber-accent)]" />
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
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-[var(--color-cyber-accent)]/5 blur-[80px]" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-[var(--font-cyber-head)] uppercase tracking-widest text-white mb-10 sm:mb-16 flex flex-wrap items-center gap-2 sm:gap-4 break-words">
            <span className="text-[var(--color-cyber-accent)]">&gt;&gt;</span>{" "}
            DEPLOYMENT_PROCESS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                n: "01",
                title: "Discovery",
                desc: "We audit your operations, map workflows, and define the exact modules you need.",
              },
              {
                n: "02",
                title: "Architecture",
                desc: "We design the system architecture, database schema, and integration points for your approval.",
              },
              {
                n: "03",
                title: "Build & Test",
                desc: "Agile development with weekly demos. You see progress every step of the way.",
              },
              {
                n: "04",
                title: "Deploy & Train",
                desc: "We deploy to production, migrate your data, and train your entire team.",
              },
            ].map((p, i) => (
              <div key={p.n} className="relative">
                {i < 3 && (
                  <div className="hidden md:block absolute top-5 left-full w-full h-px z-10 bg-gradient-to-r from-[var(--color-cyber-accent)] to-transparent" />
                )}
                <div className="font-[var(--font-cyber-head)] text-5xl font-black mb-4 text-[var(--color-cyber-accent)] opacity-20">
                  {p.n}
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
            REPLACE YOUR
            <br />
            <span className="text-[var(--color-cyber-accent)]">
              SPREADSHEETS TODAY.
            </span>
          </h2>
          <p className="font-[var(--font-cyber-accent)] text-[var(--color-cyber-muted-fg)] uppercase tracking-widest text-sm mb-10 relative z-10">
            Book a free discovery call. We'll show you exactly what your ERP
            would look like.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 font-[var(--font-cyber-accent)] uppercase tracking-widest cyber-chamfer border-2 border-[var(--color-cyber-accent)] bg-[var(--color-cyber-accent)] text-black hover:bg-transparent hover:text-[var(--color-cyber-accent)] transition-all duration-300 px-10 py-5 text-base font-bold relative z-10"
          >
            BOOK FREE DEMO{" "}
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>

        <RelatedServices currentId="erp-crm" />
      </div>
    </Layout>
  );
}
