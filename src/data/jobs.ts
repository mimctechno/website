export interface Job {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  compensation: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export const JOBS: Job[] = [
  {
    id: "ENG-091",
    slug: "senior-frontend-engineer",
    title: "Senior Next.js & React Frontend Engineer",
    department: "Engineering",
    location: "Remote (Canada / India)",
    type: "Full-Time",
    experience: "4+ Years",
    compensation: "$85,000 – $120,000 CAD / Top Tier INR",
    summary:
      "We are looking for a senior frontend engineer with deep expertise in Next.js App Router, React Server Components (RSC), Tailwind CSS, and performance optimization (100/100 Core Web Vitals). You will architect our next-generation enterprise dashboards and high-conversion client web apps.",
    responsibilities: [
      "Architect sub-second, edge-rendered Next.js enterprise web applications.",
      "Build complex interactive dashboards with real-time WebSocket telemetry.",
      "Optimize rendering pipelines for zero Cumulative Layout Shift (CLS) and sub-1s LCP.",
      "Collaborate directly with backend engineers to integrate REST and GraphQL APIs.",
      "Conduct rigorous code reviews and mentor junior engineering team members.",
    ],
    requirements: [
      "4+ years of professional React and Next.js development experience.",
      "Mastery of TypeScript, Tailwind CSS, and state management architectures.",
      "Experience with Framer Motion, GSAP, or Three.js animations.",
      "Proven track record of shipping fast, accessible (WCAG compliant) web apps.",
      "Excellent asynchronous communication in a remote-first team setting.",
    ],
    benefits: [
      "100% remote-first flexibility with global hubs in Toronto & Delhi NCR.",
      "Comprehensive health, dental, and wellness insurance coverage.",
      "Annual technology stipend for hardware, monitor setups, and workspace.",
      "Generous paid time off (PTO) and continuous learning allowance.",
    ],
  },
  {
    id: "ENG-044",
    slug: "whatsapp-api-integration-engineer",
    title: "Meta WhatsApp API & Backend Integration Engineer",
    department: "Cloud Infrastructure",
    location: "Delhi NCR, India (Hybrid) or Remote",
    type: "Full-Time",
    experience: "3+ Years",
    compensation: "₹18,00,000 – ₹28,00,000 INR / Competitive",
    summary:
      "Join our core automation engineering team building high-volume message routing infrastructure directly on the Official Meta WhatsApp Business API Cloud gateway. You will engineer webhooks, rate limiters, and bridges connecting Tally ERP and enterprise databases handling millions of monthly dispatches.",
    responsibilities: [
      "Design resilient, high-throughput microservices using Node.js, Express, and PostgreSQL.",
      "Engineer direct webhook listeners and bi-directional message queuing pipelines (Redis / RabbitMQ).",
      "Develop custom connectors bridging Tally Prime / ERP 9 data directly into Meta's BSP infrastructure.",
      "Implement automated failover, rate-limit governance, and retry mechanisms.",
      "Maintain 99.99% uptime SLAs across multi-region cloud infrastructure.",
    ],
    requirements: [
      "3+ years building production backend systems with Node.js and TypeScript.",
      "Direct hands-on experience integrating Meta WhatsApp Cloud API or BSP gateways.",
      "Deep understanding of relational databases, indexing, and high-concurrency query optimization.",
      "Familiarity with containerization (Docker), CI/CD pipelines, and AWS / Vercel.",
      "Strong debugging skills and knowledge of secure API token management.",
    ],
    benefits: [
      "High-impact role working on mission-critical financial automation systems.",
      "Competitive base salary with annual performance incentives.",
      "Modern office hubs in Delhi NCR with flexible remote work policies.",
      "Health insurance, wellness benefits, and rapid career progression.",
    ],
  },
  {
    id: "SALES-112",
    slug: "enterprise-sales-executive",
    title: "Enterprise Solutions Sales Director",
    department: "Sales & Growth",
    location: "Toronto, Canada or Delhi NCR, India",
    type: "Full-Time + Uncapped Commission",
    experience: "5+ Years",
    compensation: "Competitive Base + Uncapped Commission",
    summary:
      "Lead enterprise growth across manufacturing, wholesale distribution, and multi-location retail firms. You will engage technical decision-makers (CTOs, CFOs, Operations Directors) to demonstrate how our custom ERP platforms and Tally-to-WhatsApp automation eliminate millions in operational inefficiencies.",
    responsibilities: [
      "Drive the complete enterprise sales lifecycle from qualified discovery to deal close.",
      "Conduct technical solution demos illustrating ERP dashboards and WhatsApp API workflows.",
      "Prepare formal architectural proposals, ROI financial models, and contract deliverables.",
      "Collaborate with solution architects to structure custom scopes for mid-market clients.",
      "Maintain rigorous pipeline forecasting and exceed quarterly revenue targets.",
    ],
    requirements: [
      "5+ years of demonstrated success in B2B enterprise software or SaaS sales.",
      "Strong understanding of accounting workflows, ERP software, or messaging APIs.",
      "Exceptional verbal and written communication with C-level executives.",
      "Proven track record of consistently exceeding enterprise sales quotas ($500k+ ARR).",
      "Self-driven entrepreneurial mindset with disciplined pipeline management.",
    ],
    benefits: [
      "Generous base salary with uncapped quarterly commission structures.",
      "Executive travel allowance for key client presentations and conferences.",
      "Comprehensive medical and executive benefits package.",
      "Direct partnership track with company leadership.",
    ],
  },
  {
    id: "ENG-088",
    slug: "full-stack-erp-architect",
    title: "Full-Stack Enterprise ERP Architect",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-Time",
    experience: "5+ Years",
    compensation: "$90,000 – $130,000 CAD / Top Tier INR",
    summary:
      "Architect and build custom modular ERP systems from the database schema up to the responsive UI. You will define database entity relationships, role-based access controls, automated ledger reconciliations, and custom reporting engines for manufacturing and logistics enterprises.",
    responsibilities: [
      "Architect scalable database models for multi-warehouse inventory, accounting, and CRM pipelines.",
      "Build modular full-stack features using Next.js, Node.js, PostgreSQL, and Prisma / Drizzle.",
      "Ensure SOC2 data encryption standards and immutable financial audit logging.",
      "Lead technical scoping sessions with client engineering teams.",
    ],
    requirements: [
      "5+ years in full-stack software development with a focus on enterprise SaaS / ERPs.",
      "Deep expertise with PostgreSQL, complex relational schemas, and query optimization.",
      "Mastery of modern TypeScript across both server and client environments.",
      "Experience with financial software, billing engines, or multi-currency accounting logic.",
    ],
    benefits: [
      "Work on complex, zero-bloat greenfield software architectures.",
      "Flexible asynchronous work schedule across global time zones.",
      "Competitive compensation package with annual hardware stipends.",
      "Generous paid time off and health benefits.",
    ],
  },
];
