"use client";

import Layout from "../components/Layout";
import { FileText, CheckCircle2, ShieldCheck } from "lucide-react";

export default function Terms() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms of Service — MIMC Technologies",
    description:
      "MIMC Technologies terms of service for enterprise software development, Meta WhatsApp API integrations, Tally ERP connectors, and SLA agreements.",
    url: "https://www.mimctechnologies.com/terms",
    inLanguage: "en",
  };

  return (
    <Layout
      title="Terms of Service | MIMC Technologies"
      description="MIMC Technologies terms of service for enterprise software development, Meta WhatsApp API integrations, Tally connectors, and SLA agreements."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-10 pb-6 border-b border-[#E8E8E2]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/60 text-teal-800 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <FileText className="w-3.5 h-3.5 text-teal-700" />
            LEGAL AGREEMENT & LICENSING
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171717] mb-3 font-heading">
            Terms of Service
          </h1>
          <p className="text-xs font-mono text-neutral-500">
            Last Updated: August 2026 · Governed by Ontario (Canada) & Delhi
            (India) Law
          </p>
        </header>

        {/* Terms Body */}
        <article className="space-y-8 text-neutral-700 text-sm leading-relaxed">
          <section className="p-6 rounded-2xl bg-white border border-[#E8E8E2] shadow-2xs space-y-3">
            <h2 className="text-lg font-bold font-heading text-[#171717]">
              1. Acceptance of Enterprise Terms
            </h2>
            <p>
              By accessing the digital platforms of MIMC Technologies or
              commissioning our engineering team for enterprise software
              development, ERP architecture, or Meta WhatsApp API integrations,
              you agree to be bound by these Terms of Service and any associated
              Master Services Agreement (MSA).
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-white border border-[#E8E8E2] shadow-2xs space-y-3">
            <h2 className="text-lg font-bold font-heading text-[#171717]">
              2. Intellectual Property & Custom Source Code
            </h2>
            <p>
              MIMC Technologies provides custom software engineering under
              client-first IP structures. Unless explicitly specified otherwise
              in an individual Statement of Work (SOW), client-funded custom
              modules, bespoke ERP extensions, and integration code become the
              unencumbered intellectual property of the commissioning client
              upon full milestone payment settlement.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-white border border-[#E8E8E2] shadow-2xs space-y-3">
            <h2 className="text-lg font-bold font-heading text-[#171717]">
              3. Meta WhatsApp Business API Compliance
            </h2>
            <p>
              Clients utilizing our WhatsApp Business API integration (including
              Tally-to-WhatsApp automated dispatchers) must strictly comply with
              Meta&apos;s WhatsApp Commerce and Messaging Policies. MIMC
              reserves the right to immediately suspend dispatch pipelines if a
              client violates anti-spam guidelines or transmits prohibited
              content.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-white border border-[#E8E8E2] shadow-2xs space-y-3">
            <h2 className="text-lg font-bold font-heading text-[#171717]">
              4. Infrastructure Uptime & SLA Commitments
            </h2>
            <p>
              While hosted and managed infrastructure targets 99.99% operational
              uptime, MIMC Technologies is not liable for upstream network
              interruptions originating from third-party backbone providers
              (e.g. AWS data center outages, Meta Cloud API maintenance
              windows). Formal uptime guarantees and remediation credits are
              defined within your individual SLA agreement.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-white border border-[#E8E8E2] shadow-2xs space-y-3">
            <h2 className="text-lg font-bold font-heading text-[#171717]">
              5. Governing Jurisdiction
            </h2>
            <p>
              These Terms shall be interpreted and governed by the laws of
              Ontario, Canada, or Delhi, India, depending on the contracting
              legal entity specified in your commercial invoice.
            </p>
          </section>
        </article>
      </div>
    </Layout>
  );
}
