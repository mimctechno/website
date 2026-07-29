import { ArrowRight, Briefcase, MapPin, Code2, MessageSquare, Target } from 'lucide-react';
import Layout from '../components/Layout';

const JOBS = [
  {
    id: 'req-091',
    title: 'Senior React / Frontend Developer',
    location: 'Remote (India / Canada)',
    type: 'Full-Time',
    icon: Code2,
    desc: 'We are looking for a pixel-perfect React developer who understands performance, Core Web Vitals, and modern CSS (Tailwind). You will be building enterprise dashboards and high-converting marketing sites.',
    reqs: ['4+ years React experience', 'Deep understanding of CSR vs SSR', 'Experience with Framer Motion or GSAP', 'Strong portfolio of live projects'],
  },
  {
    id: 'req-044',
    title: 'WhatsApp API Integration Engineer',
    location: 'Delhi NCR, India (Hybrid)',
    type: 'Full-Time',
    icon: MessageSquare,
    desc: 'Join our automation team integrating the Official Meta WhatsApp Business API with Tally ERP, custom CRMs, and Node.js backends. You will be building the infrastructure that handles millions of messages.',
    reqs: ['Node.js & Express expertise', 'Previous experience with WhatsApp Cloud API', 'Understanding of webhooks and API rate limits', 'Database design (PostgreSQL/MongoDB)'],
  },
  {
    id: 'req-112',
    title: 'Enterprise Sales Executive',
    location: 'Remote (India)',
    type: 'Full-Time + Commission',
    icon: Target,
    desc: 'Drive growth for our Tally-to-WhatsApp and ERP solutions across B2B manufacturing and distribution sectors in India. You need to understand enterprise software sales cycles and how to close technical decision-makers.',
    reqs: ['3+ years B2B software sales', 'Existing network in manufacturing/distribution', 'Ability to conduct technical product demos', 'Aggressive closer with track record'],
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  // Normally you'd output one for each job, we'll output the main one for SEO purposes
  title: 'Senior React / Frontend Developer',
  description: 'We are looking for a pixel-perfect React developer who understands performance, Core Web Vitals, and modern CSS (Tailwind).',
  datePosted: '2026-07-29',
  validThrough: '2026-12-31',
  employmentType: 'FULL_TIME',
  hiringOrganization: {
    '@type': 'Organization',
    name: 'MIMC Technologies',
    sameAs: 'https://www.mimctechnologies.com',
    logo: 'https://www.mimctechnologies.com/logo.png',
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
  },
  applicantLocationRequirements: {
    '@type': 'Country',
    name: 'India',
  },
  jobLocationType: 'TELECOMMUTE',
};

export default function Careers() {
  return (
    <Layout
      title="Careers — Join the MIMC Technologies Team"
      description="We are hiring! Join MIMC Technologies to build enterprise software, WhatsApp API integrations, and digital marketing campaigns."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Header */}
        <section className="mb-24 text-center max-w-4xl mx-auto">
          <div className="inline-block border border-[var(--color-cyber-accent2)] text-[var(--color-cyber-accent2)] px-4 py-2 text-xs font-[var(--font-cyber-accent)] uppercase tracking-widest bg-[var(--color-cyber-accent2)]/10 mb-8">
            <span className="animate-blink mr-2">_</span> JOIN_THE_GRID
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-widest font-[var(--font-cyber-head)] leading-none text-white mb-8">
            <span className="block text-white">BUILD THE</span>
            <span className="bg-gradient-to-r from-[var(--color-cyber-accent)] to-[var(--color-cyber-accent2)] bg-clip-text text-transparent">FUTURE</span>
          </h1>
          <p className="text-[var(--color-cyber-muted-fg)] font-[var(--font-cyber-accent)] uppercase tracking-wider text-sm leading-relaxed">
            We are always looking for exceptional engineers, marketers, and sales professionals to join our remote-first team across Canada and India. We build high-performance software and we need high-performance people.
          </p>
        </section>

        {/* Job Listings */}
        <section className="mb-24 space-y-8">
          <div className="flex items-center gap-4 mb-12 border-b border-[var(--color-cyber-border)] pb-4">
            <span className="text-[var(--color-cyber-accent)] font-[var(--font-cyber-accent)] text-sm uppercase tracking-widest">&gt;&gt; OPEN_POSITIONS</span>
            <div className="flex-1 h-px bg-[var(--color-cyber-border)]"></div>
            <span className="text-[var(--color-cyber-muted-fg)] font-[var(--font-cyber-accent)] text-xs uppercase tracking-widest">{JOBS.length} ROLES AVAILABLE</span>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {JOBS.map((job) => (
              <div key={job.id} className="group border border-[var(--color-cyber-border)] bg-[var(--color-cyber-card)] hover:border-[var(--color-cyber-accent)]/50 transition-colors cyber-chamfer p-8 md:p-10 relative overflow-hidden flex flex-col md:flex-row gap-8 items-start">
                <div className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(to right, transparent, var(--color-cyber-accent), transparent)' }} />
                
                {/* Icon block */}
                <div className="w-16 h-16 border border-[var(--color-cyber-border)] bg-black flex-shrink-0 flex items-center justify-center group-hover:border-[var(--color-cyber-accent)]/50 transition-colors">
                  <job.icon className="w-8 h-8 text-[var(--color-cyber-muted-fg)] group-hover:text-[var(--color-cyber-accent)] transition-colors" strokeWidth={1} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap mb-4">
                    <span className="text-[10px] font-[var(--font-cyber-accent)] uppercase tracking-widest px-2 py-1 bg-[var(--color-cyber-accent)]/10 text-[var(--color-cyber-accent)] border border-[var(--color-cyber-accent)]/30">
                      {job.id}
                    </span>
                    <span className="text-[10px] font-[var(--font-cyber-accent)] uppercase tracking-widest flex items-center gap-1 text-[var(--color-cyber-muted-fg)]">
                      <MapPin className="w-3 h-3" /> {job.location}
                    </span>
                    <span className="text-[10px] font-[var(--font-cyber-accent)] uppercase tracking-widest flex items-center gap-1 text-[var(--color-cyber-muted-fg)]">
                      <Briefcase className="w-3 h-3" /> {job.type}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold font-[var(--font-cyber-head)] uppercase tracking-widest text-white mb-4 group-hover:text-[var(--color-cyber-accent)] transition-colors">
                    {job.title}
                  </h2>
                  <p className="text-[var(--color-cyber-muted-fg)] text-sm leading-relaxed uppercase tracking-wider mb-8 max-w-3xl">
                    {job.desc}
                  </p>

                  <div className="space-y-3">
                    <h3 className="text-xs font-[var(--font-cyber-accent)] text-white uppercase tracking-widest mb-4">REQUIREMENTS:</h3>
                    {job.reqs.map((req, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs font-[var(--font-cyber-accent)] uppercase tracking-wider text-[var(--color-cyber-muted-fg)]">
                        <span className="w-1 h-1 bg-[var(--color-cyber-accent)] rounded-full"></span>
                        {req}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Apply Button (Desktop Right Aligned, Mobile Bottom) */}
                <div className="mt-6 md:mt-0 md:ml-auto self-start">
                  <a href={`mailto:hr@mimctechnologies.com?subject=Application:%20${job.title}%20(${job.id})`}
                    className="group/btn inline-flex items-center justify-center gap-2 font-[var(--font-cyber-accent)] uppercase tracking-widest border border-[var(--color-cyber-border)] hover:border-[var(--color-cyber-accent)] bg-transparent text-[var(--color-cyber-muted-fg)] hover:text-[var(--color-cyber-accent)] hover:bg-[var(--color-cyber-accent)]/5 transition-all duration-300 px-6 py-3 text-xs font-bold whitespace-nowrap">
                    APPLY NOW <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* General Application CTA */}
        <section className="text-center border-2 border-dashed border-[var(--color-cyber-border)] p-12 md:p-20 relative overflow-hidden hover:border-[var(--color-cyber-accent)] transition-colors group">
          <div className="absolute inset-0 bg-black" />
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest font-[var(--font-cyber-head)] text-white mb-6 relative z-10">
            DON'T SEE YOUR <span className="text-[var(--color-cyber-accent)]">ROLE?</span>
          </h2>
          <p className="font-[var(--font-cyber-accent)] text-[var(--color-cyber-muted-fg)] uppercase tracking-widest text-sm mb-10 relative z-10 max-w-2xl mx-auto leading-relaxed">
            If you are a top-tier performer in sales, marketing, or development, we still want to hear from you. Send us your resume and tell us why we need you.
          </p>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6">
            <span className="font-[var(--font-cyber-accent)] text-xs text-[var(--color-cyber-muted-fg)] uppercase tracking-widest">
              TRANSMIT RESUME TO:
            </span>
            <a href="mailto:hr@mimctechnologies.com"
              className="inline-flex items-center gap-3 font-[var(--font-cyber-head)] uppercase tracking-widest text-xl md:text-2xl font-bold text-[var(--color-cyber-accent)] hover:text-white transition-colors group-hover:scale-105 transform duration-300">
              HR@MIMCTECHNOLOGIES.COM
            </a>
          </div>
        </section>

      </div>
    </Layout>
  );
}
