"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Shield,
  Zap,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  MapPin,
  Building2,
  Clock,
  Send,
  Lock,
  Plus,
  Minus,
  MessageSquare,
  Sparkles,
  Layers,
  BarChart3,
  Phone,
} from "lucide-react";
import Layout from "@/components/Layout";
import {
  CanonicalLocation,
  CANONICAL_LOCATIONS,
} from "@/data/canonicalLocations";
import { ResolvedCityServiceData } from "@/data/servicesRegistry";
import { getCountryFlag } from "@/components/ui/FlagIcon";

export default function CityServiceDetail({
  location,
  data,
}: {
  location: CanonicalLocation;
  data: ResolvedCityServiceData;
}) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    serviceId,
    serviceTitle,
    serviceBadge,
    h1,
    metaTitle,
    metaDescription,
    heroDescription,
    features,
    faqs,
    breadcrumbs,
  } = data;

  const canonicalUrl = `https://www.mimctechnologies.com/services/${serviceId}/${location.citySlug}/`;

  // Related regional hubs for this service (same country first, then global tier-1)
  const isTallyService =
    serviceId === "tally-cloud" || serviceId === "tally-whatsapp-integration";
  const sameCountry = CANONICAL_LOCATIONS.filter(
    (l) =>
      l.citySlug !== location.citySlug &&
      l.countryCode === location.countryCode &&
      (isTallyService ? l.supportsTally : true),
  );
  const fallbackHubs = CANONICAL_LOCATIONS.filter(
    (l) =>
      l.citySlug !== location.citySlug &&
      l.countryCode !== location.countryCode &&
      (isTallyService ? l.supportsTally : true),
  );
  const siblingLocations = [...sameCountry, ...fallbackHubs].slice(0, 8);

  // Structured Data
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `${serviceTitle} in ${location.city}`,
        serviceType: serviceTitle,
        description: metaDescription,
        provider: {
          "@type": "Organization",
          name: "MIMC Technologies",
          url: "https://www.mimctechnologies.com",
          logo: "https://www.mimctechnologies.com/logo.webp",
          sameAs: "https://www.mimctechnologies.com",
        },
        areaServed: {
          "@type": "City",
          name: location.city,
          containedInPlace: {
            "@type": "Country",
            name: location.country,
          },
        },
        url: canonicalUrl,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((b, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: b.name,
          item: `https://www.mimctechnologies.com${b.url}`,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };

  async function handleInquiry(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch("https://formsubmit.co/ajax/info@mimctechnologies.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
    } catch {
      // Fallback
    }
    setSubmitting(false);
    setSubmitted(true);
    form.reset();
  }

  return (
    <Layout title={metaTitle} description={metaDescription}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center flex-wrap gap-2 text-xs font-mono text-neutral-500">
            {breadcrumbs.map((b, idx) => (
              <li key={idx} className="flex items-center gap-2">
                {idx > 0 && (
                  <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
                )}
                {idx === breadcrumbs.length - 1 ? (
                  <span className="text-neutral-900 font-bold">{b.name}</span>
                ) : (
                  <Link
                    href={b.url}
                    className="hover:text-teal-700 transition-colors"
                  >
                    {b.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* ===================== HERO SECTION ===================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-7 space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/60 text-teal-800 text-xs font-mono font-bold uppercase tracking-wider">
                <span className="text-base">
                  {getCountryFlag(location.countryCode)}
                </span>
                {location.city}, {location.country}
              </span>
              <span className="px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-700 text-xs font-mono font-bold uppercase tracking-wider">
                {serviceBadge}
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                DEPLOYMENT READY
              </span>
            </div>

            {/* Main H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171717] leading-[1.08] font-heading">
              {h1}
            </h1>

            {/* Subtitle */}
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              {heroDescription}
            </p>

            {/* Regional Trust Callout Card */}
            <div className="p-5 rounded-2xl bg-[#FAFAF8] border border-[#E8E8E2] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-teal-800 uppercase tracking-wide">
                <MapPin className="w-3.5 h-3.5 text-teal-700" />
                Regional Operating Context — {location.city}
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {location.localContext}
              </p>
              <div className="pt-2 border-t border-neutral-200/70 flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-500">
                <span className="flex items-center gap-1.5 text-teal-700 font-semibold">
                  <Shield className="w-3.5 h-3.5" />
                  {location.complianceNote}
                </span>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#E8E8E2] text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-[#171717] font-mono">
                  99.99%
                </div>
                <div className="text-[11px] font-mono text-neutral-500 uppercase mt-0.5">
                  Uptime SLA
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E8E8E2] text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-teal-700 font-mono">
                  &lt; 3s
                </div>
                <div className="text-[11px] font-mono text-neutral-500 uppercase mt-0.5">
                  API Latency
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E8E8E2] text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-[#171717] font-mono">
                  24/7
                </div>
                <div className="text-[11px] font-mono text-neutral-500 uppercase mt-0.5">
                  SLA Support
                </div>
              </div>
            </div>
          </div>

          {/* Right Lead Capture Form */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E8E2] shadow-xl sticky top-28 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
                  [ RAPID DEPLOYMENT CONSULTATION ]
                </span>
                <h2 className="text-xl font-bold font-heading text-[#171717]">
                  Consult with an Architect in {location.city}
                </h2>
                <p className="text-xs text-neutral-500 mt-1">
                  Connect directly with our solutions team for live demo &
                  technical scoping.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-teal-900">
                    Request Dispatched!
                  </h3>
                  <p className="text-xs text-teal-700 leading-relaxed">
                    Our solutions architect for {location.city},{" "}
                    {location.country} will review your inquiry and connect with
                    you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquiry} className="space-y-4">
                  <input type="text" name="_honey" className="hidden" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_subject"
                    value={`Client Inquiry: ${serviceTitle} (${location.city}, ${location.country})`}
                  />

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1 font-mono uppercase">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rahul Sharma / David Miller"
                      className="w-full bg-[#FAFAF8] border border-[#E8E8E2] rounded-xl px-3.5 py-2.5 text-xs text-[#171717] focus:outline-none focus:border-teal-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1 font-mono uppercase">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      className="w-full bg-[#FAFAF8] border border-[#E8E8E2] rounded-xl px-3.5 py-2.5 text-xs text-[#171717] focus:outline-none focus:border-teal-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1 font-mono uppercase">
                      Phone Number & City *
                    </label>
                    <input
                      type="text"
                      name="phone"
                      required
                      placeholder={`e.g. ${location.phone} (${location.city})`}
                      className="w-full bg-[#FAFAF8] border border-[#E8E8E2] rounded-xl px-3.5 py-2.5 text-xs text-[#171717] focus:outline-none focus:border-teal-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1 font-mono uppercase">
                      Project Requirements *
                    </label>
                    <textarea
                      name="requirements"
                      required
                      rows={3}
                      placeholder={`Describe your company workflows and timeline for ${location.city}...`}
                      className="w-full bg-[#FAFAF8] border border-[#E8E8E2] rounded-xl px-3.5 py-2.5 text-xs text-[#171717] focus:outline-none focus:border-teal-600 focus:bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-4 rounded-xl bg-[#111111] hover:bg-teal-700 text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Connecting with Architect...</span>
                    ) : (
                      <>
                        <span>Book 30-Min Architecture Discovery</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}

              <div className="pt-3 border-t border-[#E8E8E2] flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                <span>Direct Hotline:</span>
                <a
                  href={`tel:${location.phone}`}
                  className="text-teal-700 font-semibold hover:underline"
                >
                  {location.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== CORE ARCHITECTURE PILLARS ===================== */}
        <section className="mb-20">
          <div className="mb-10">
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-2">
              [ TECHNICAL ARCHITECTURE & LOCAL CAPABILITIES ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#171717] font-heading">
              Engineered for Enterprise Performance in {location.city}
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base mt-2 max-w-3xl">
              Our deployments avoid third-party bottlenecks. All workflows
              integrate directly with bank-grade security protocols, local
              compliance standards, and cloud endpoints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E8E8E2] shadow-2xs hover:border-teal-600/40 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 font-bold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="font-heading font-bold text-lg text-[#171717]">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== TARGET INDUSTRIES IN CITY ===================== */}
        <section className="mb-20 p-8 sm:p-12 rounded-3xl bg-[#FAFAF8] border border-[#E8E8E2]">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
              [ INDUSTRIAL ECOSYSTEM ]
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#171717]">
              Key Commercial Sectors We Power in {location.city}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2">
              {location.localTrustSignal}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {location.industries.map((ind, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white border border-[#E8E8E2] flex items-center gap-3 text-xs sm:text-sm font-semibold text-neutral-800"
              >
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>{ind}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== LOCALIZED FAQ SECTION ===================== */}
        <section className="mb-20 max-w-4xl">
          <div className="mb-8">
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
              [ FREQUENTLY ASKED QUESTIONS ]
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#171717]">
              Common Questions from {location.city} Enterprises
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#E8E8E2] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-sm sm:text-base text-[#171717] cursor-pointer hover:text-teal-700"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? (
                    <Minus className="w-4 h-4 text-teal-700 shrink-0" />
                  ) : (
                    <Plus className="w-4 h-4 text-neutral-400 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 mt-2 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ===================== REGIONAL SERVICE SIBLING HUBS ===================== */}
        <section className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
                [ REGIONAL COVERAGE NETWORK ]
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#171717]">
                Other {serviceTitle} Hubs
              </h2>
            </div>
            <Link
              href="/locations/"
              className="text-xs font-mono font-bold text-teal-700 hover:text-teal-900 inline-flex items-center gap-1.5"
            >
              <span>View All 100+ Commercial Locations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            {siblingLocations.map((sib) => (
              <Link
                key={sib.citySlug}
                href={`/services/${serviceId}/${sib.citySlug}/`}
                className="p-3.5 rounded-2xl bg-white border border-[#E8E8E2] hover:border-teal-300 hover:bg-teal-50/50 transition-all group flex flex-col justify-between shadow-2xs"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-heading font-bold text-xs sm:text-sm text-[#171717] group-hover:text-teal-800 transition-colors">
                    {sib.city}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400">
                    {sib.countryCode}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-teal-700">
                  <span>{sib.state}</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ===================== BOTTOM CTA ===================== */}
        <section className="rounded-3xl bg-[#111111] text-white p-8 sm:p-12 border border-neutral-800 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block">
              [ ARCHITECTURE DISCOVERY ]
            </span>
            <h2 className="text-3xl font-bold font-heading text-white">
              Ready to Upgrade Operations in {location.city}?
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pb-2">
              Speak with a technical lead today to review solution architecture,
              compliance, and rapid onboarding roadmaps.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:info@mimctechnologies.com?subject=Enterprise%20Inquiry%20—%20${encodeURIComponent(serviceTitle)}%20(${location.city})`}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm shadow-md transition-all active:scale-95"
              >
                <span>Email Our Technical Team</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`tel:${location.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-teal-400" />
                <span>Call {location.phone}</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
