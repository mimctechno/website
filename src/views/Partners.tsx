import Layout from "../components/Layout";
import Link from "next/link";

import {
  Shield,
  Zap,
  ExternalLink,
  Network,
  Database,
  Brain,
  Globe,
  FileCode2,
} from "lucide-react";

export default function Partners() {
  const partnerSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MIMC Technologies",
    url: "https://www.mimctechnologies.com",
    logo: "https://www.mimctechnologies.com/logo.webp",
    description:
      "MIMC Technologies partners with world-class technology providers to deliver enterprise software, WhatsApp API, ERP, and CRM solutions globally.",
    sameAs: [
      "https://aws.amazon.com",
      "https://vercel.com",
      "https://github.com",
      "https://www.cloudflare.com",
      "https://openai.com",
    ],
    memberOf: {
      "@type": "Organization",
      name: "Startup India",
      url: "https://www.startupindia.gov.in",
    },
  };

  const partners = [
    {
      name: "Amazon Web Services",
      logo: "/Amazon_Web_Services_Logo.svg.webp",
      tag: "CLOUD INFRASTRUCTURE",
      icon: Database,
      description:
        "MIMC Technologies leverages AWS cloud infrastructure to architect and deploy highly scalable Enterprise Resource Planning (ERP) and CRM solutions. By utilizing AWS's globally distributed data centers, we ensure 99.99% uptime, localized data compliance, and infinitely elastic compute power for your mission-critical databases and web applications.",
      imgClass: "w-32 h-16 object-contain bg-white rounded p-2",
    },
    {
      name: "Startup India",
      logo: "/startup-india-4.webp",
      tag: "GOVERNMENT RECOGNITION",
      icon: Shield,
      description:
        "Recognized by the Government of India's flagship initiative for technological innovation and wealth creation. This prestigious backing solidifies MIMC's status as a trusted, national-level IT partner, granting us access to elite networks and allowing us to build secure, government-compliant solutions for enterprises across India.",
      imgClass: "w-40 h-20 object-contain bg-white rounded p-2",
    },
    {
      name: "Vercel",
      logo: "/Vercel_logo_2025.svg",
      tag: "EDGE DEPLOYMENT",
      icon: Globe,
      description:
        "We build blazing fast, serverless web architectures using Vercel's global edge network. By deploying Next.js and React applications directly to the edge, we guarantee lightning-fast load times, flawless SEO performance, and zero-configuration CI/CD pipelines that keep your digital storefronts ahead of the competition.",
      imgClass: "w-32 h-16 object-contain bg-white rounded p-3",
    },
    {
      name: "GitHub",
      logo: "/GitHub-Logo.webp",
      tag: "CODE PIPELINES",
      icon: FileCode2,
      description:
        "Enterprise-grade code security, intelligent version control, and automated CI/CD deployment pipelines form the backbone of our development cycle. We utilize GitHub's advanced infrastructure to manage complex software ecosystems, ensuring every line of code shipped is audited, secure, and ready for production.",
      imgClass: "w-32 h-16 object-contain bg-white rounded p-2",
    },
    {
      name: "Cloudflare",
      logo: "/Cloudflare_Logo.svg.webp",
      tag: "ZERO-TRUST SECURITY",
      icon: Network,
      description:
        "Security is non-negotiable. We integrate Cloudflare's zero-trust web security, aggressive DDoS protection, and global Content Delivery Networks (CDN) into every web application we build. This ensures our clients' digital assets are impenetrable to malicious traffic while delivering content instantly across the globe.",
      imgClass: "w-32 h-16 object-contain bg-white rounded p-2",
    },
    {
      name: "OpenAI",
      logo: "/OpenAI_Logo.svg.webp",
      tag: "LLM INTEGRATION",
      icon: Brain,
      description:
        "We are at the frontier of integrating advanced Large Language Models (LLMs) into enterprise software. By utilizing OpenAI's powerful APIs, we automate complex workflows, build intelligent chatbots for WhatsApp API systems, and deploy cognitive agents that drastically reduce operational overhead for our clients.",
      imgClass: "w-32 h-16 object-contain bg-white rounded p-2",
    },
    {
      name: "ElevenLabs",
      logo: "/elevenlabs-official-logo.svg",
      tag: "VOICE SYNTHESIS",
      icon: Zap,
      description:
        "Next-generation voice synthesis APIs power our automated client communication systems. We leverage ElevenLabs' hyper-realistic AI voice generation to create dynamic IVR systems, personalized marketing blasts, and accessible web experiences that engage users through auditory intelligence.",
      imgClass: "w-32 h-16 object-contain bg-white rounded p-2",
    },
  ];

  return (
    <Layout
      title="Infrastructure & Technology Partners"
      description="Explore MIMC Technologies' global infrastructure partners including AWS, Vercel, Cloudflare, and OpenAI. We leverage enterprise-grade tech to build secure, scalable solutions."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerSchema) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-[var(--color-cyber-border)]">
        <div className="absolute inset-0 bg-cyber-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050508]/50 to-[#050508]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-block border border-[var(--color-cyber-accent2)] bg-[var(--color-cyber-accent2)]/10 px-4 py-2 mb-8 cyber-chamfer animate-pulse">
            <span className="text-[var(--color-cyber-accent2)] font-[var(--font-cyber-accent)] tracking-widest text-sm uppercase">
              // SYS_NETWORK: ALLIANCES
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter uppercase font-[var(--font-cyber-headers)] drop-shadow-[0_0_15px_rgba(0,255,170,0.3)]">
            INFRASTRUCTURE &
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cyber-accent)] to-[var(--color-cyber-accent2)]">
              BACKING
            </span>
          </h1>

          <p className="text-lg text-[var(--color-cyber-muted-fg)] max-w-2xl font-light mb-12 border-l-2 border-[var(--color-cyber-accent)] pl-6">
            We don't just write code. We architect enterprise systems backed by
            the most powerful, secure, and scalable technological infrastructure
            on the planet. Discover the stack that powers our solutions.
          </p>
        </div>
      </section>

      {/* Partners Data Grid */}
      <section className="py-24 relative overflow-hidden bg-[#050508]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-cyber-accent)]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {partners.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <div
                  key={index}
                  className="group relative border border-[var(--color-cyber-border)] bg-[var(--color-cyber-card)] p-8 md:p-10 hover:border-[var(--color-cyber-accent)] hover:shadow-[0_0_30px_rgba(0,255,170,0.05)] transition-all duration-500 cyber-chamfer flex flex-col md:flex-row gap-8"
                >
                  {/* Glowing Corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[var(--color-cyber-accent)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Logo Container */}
                  <div className="w-full md:w-1/3 flex-shrink-0 flex items-start justify-center md:justify-start">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[var(--color-cyber-accent)]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <img
                        src={partner.logo}
                        alt={`${partner.name} Logo`}
                        className={`relative z-10 ${partner.imgClass} group-hover:-translate-y-1 transition-transform duration-500 shadow-xl`}
                      />
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="w-full md:w-2/3 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-5 h-5 text-[var(--color-cyber-accent)]" />
                      <span className="text-[var(--color-cyber-accent)] font-[var(--font-cyber-accent)] tracking-widest text-xs uppercase">
                        {partner.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-[var(--color-cyber-fg)] mb-4 uppercase tracking-wide">
                      {partner.name}
                    </h3>

                    <p className="text-[var(--color-cyber-muted-fg)] text-sm leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-[var(--color-cyber-border)] relative overflow-hidden bg-[#0a0a0f]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5 mix-blend-screen" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tighter">
            Ready to Build on a{" "}
            <span className="text-[var(--color-cyber-accent)]">
              Solid Foundation?
            </span>
          </h2>
          <p className="text-[var(--color-cyber-muted-fg)] mb-10 text-lg">
            Deploy your enterprise software using the same infrastructure that
            powers the global web. Let's architect your success.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="group font-[var(--font-cyber-accent)] uppercase tracking-widest cyber-chamfer bg-[var(--color-cyber-accent)] text-black px-8 py-4 hover:shadow-[0_0_20px_rgba(0,255,170,0.4)] transition-all flex items-center justify-center gap-2"
            >
              INITIATE_PROJECT
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
