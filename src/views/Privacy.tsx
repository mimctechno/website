"use client";

import Layout from "../components/Layout";
import { ShieldCheck, Lock, CheckCircle2 } from "lucide-react";

export default function Privacy() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy — MIMC Technologies",
    description:
      "MIMC Technologies privacy policy covering data protection, Meta WhatsApp API data handling, SOC2 security protocols, and GDPR compliance.",
    url: "https://www.mimctechnologies.com/privacy",
    inLanguage: "en",
  };

  return (
    <Layout
      title="Privacy Policy | MIMC Technologies"
      description="MIMC Technologies privacy policy covering data collection, Meta WhatsApp API data handling, security protocols, and GDPR compliance for enterprise clients."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-10 pb-6 border-b border-[#E8E8E2]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/60 text-teal-800 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
            ENTERPRISE DATA GOVERNANCE
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171717] mb-3 font-heading">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-neutral-500">
            Last Updated: August 2026 · Global Data Protection & GDPR Compliance
          </p>
        </header>

        {/* Policy Body */}
        <article className="space-y-8 text-neutral-700 text-sm leading-relaxed">
          <section className="p-6 rounded-2xl bg-white border border-[#E8E8E2] shadow-2xs space-y-3">
            <h2 className="text-lg font-bold font-heading text-[#171717]">
              1. Information Collection & Trust Boundaries
            </h2>
            <p>
              MIMC Technologies (&quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;) collects information necessary to engineer,
              deploy, and support enterprise IT platforms, custom ERPs, and
              official Meta WhatsApp API integrations. When you interact with
              our website or submit an architectural discovery brief, we collect
              your name, organizational email, corporate entity name, telephone
              number, and technical specifications regarding your
              infrastructure.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-white border border-[#E8E8E2] shadow-2xs space-y-3">
            <h2 className="text-lg font-bold font-heading text-[#171717]">
              2. Meta WhatsApp Business API Data Governance
            </h2>
            <p>
              As a provider of enterprise WhatsApp API infrastructure and Tally
              connectors, we act strictly as a <strong>data processor</strong>{" "}
              for payloads and messages transmitted through our pipelines. We do
              not sell, inspect, or monetize the contents of your customer
              communications. All message payloads routed across Meta&apos;s
              network adhere to strict end-to-end encryption and Meta BSP data
              processing agreements.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-white border border-[#E8E8E2] shadow-2xs space-y-3">
            <h2 className="text-lg font-bold font-heading text-[#171717]">
              3. Strict Operational Use of Data
            </h2>
            <p>We process collected data exclusively to:</p>
            <ul className="space-y-2 pt-1 text-neutral-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>
                  Engineer, provision, and maintain custom enterprise software
                  and database schemas.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>
                  Generate and transmit official commercial invoices and
                  software licensing agreements.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>
                  Provide direct engineering support, security updates, and SLA
                  uptime monitoring.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>
                  Comply with statutory accounting, GSTIN, and tax authority
                  standards in Canada and India.
                </span>
              </li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl bg-white border border-[#E8E8E2] shadow-2xs space-y-3">
            <h2 className="text-lg font-bold font-heading text-[#171717]">
              4. Bank-Grade Security & Encryption Protocols
            </h2>
            <p>
              All data in transit is encrypted via TLS 1.3. Database volumes are
              protected at rest via AES-256 encryption. Our microservices are
              deployed on multi-region AWS and Vercel infrastructure protected
              by Cloudflare zero-trust security layers and DDoS defense systems.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-white border border-[#E8E8E2] shadow-2xs space-y-3">
            <h2 className="text-lg font-bold font-heading text-[#171717]">
              5. Data Protection Officer & Inquiries
            </h2>
            <p>
              For data compliance, GDPR requests, or data deletion inquiries,
              please contact our security governance desk directly:
            </p>
            <div className="pt-2 text-xs font-mono text-neutral-600">
              <div>
                <strong>Email:</strong> info@mimctechnologies.com
              </div>
              <div>
                <strong>Desk:</strong> Global Data Security & Compliance
                Division
              </div>
            </div>
          </section>
        </article>
      </div>
    </Layout>
  );
}
