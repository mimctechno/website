"use client";

import { useState } from "react";
import {
  Zap,
  CheckCircle2,
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
  Plus,
  Minus,
  Briefcase,
  FileCheck2,
  Lock,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../../components/Layout";
import ServiceSchema from "../../components/seo/ServiceSchema";
import ServiceBadges from "../../components/ui/ServiceBadges";
import RelatedServices from "../../components/RelatedServices";
import SmartphoneMockup from "../../components/ui/SmartphoneMockup";
import whatsappLocations from "../../data/whatsappLocations.json";
import { getCountryFlag } from "@/components/ui/FlagIcon";

export interface LocationData {
  city: string;
  state: string;
  country: string;
  countryCode: string;
  slug: string;
  phone: string;
  industries?: string[];
  localContext?: string;
  complianceNote?: string;
  localTrustSignal?: string;
}

export default function WhatsAppLocation({ data }: { data: LocationData }) {
  const {
    city: CITY,
    state: STATE,
    country: COUNTRY,
    countryCode: COUNTRY_CODE,
    slug: SLUG,
    phone: PHONE_IN,
    industries = [
      "Wholesale & Distribution",
      "Manufacturing & Supply Chain",
      "Professional Services",
      "E-Commerce",
    ],
    localContext = `${CITY} is a major commercial growth center in ${STATE}, ${COUNTRY}, where modern enterprises leverage automated WhatsApp communication and custom ERP software to streamline daily operations.`,
    complianceNote = `Compliant with ${COUNTRY} commercial regulatory standards, local tax frameworks, and end-to-end encrypted Meta Cloud API protocols.`,
    localTrustSignal = `Serving commercial enterprises and growing businesses across the ${CITY} metropolitan area.`,
  } = data;

  const BASE_URL = "https://www.mimctechnologies.com";
  const PAGE_URL = `${BASE_URL}/services/${SLUG}`;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const features = [
    {
      icon: Shield,
      title: "Official Meta BSP Cloud Gateway",
      desc: `100% Meta-approved WhatsApp Business API architecture for ${CITY} businesses. Zero ban risk with dedicated high-throughput cloud delivery.`,
    },
    {
      icon: Zap,
      title: "Tally Prime Live Synchronization",
      desc: `Automatic voucher dispatch for ${CITY} commercial firms: send invoices, receipts, and party ledgers from Tally directly to client WhatsApp in < 3 seconds.`,
    },
    {
      icon: MessageSquare,
      title: "High-Speed Transactional Messaging",
      desc: `Broadcast verified transactional updates to your ${CITY} customers — invoice PDFs, OTP verification codes, dispatch tracking, and payment alerts.`,
    },
    {
      icon: Globe,
      title: "Integrated Instant Payment Links",
      desc: `Embed direct automated payment and UPI links inside WhatsApp invoice messages so your ${CITY} clients pay on time with zero friction.`,
    },
    {
      icon: BarChart3,
      title: "Real-Time Telemetry & Reports",
      desc: `Live analytics dashboard tracking message delivery confirmation, read rates, and customer interaction telemetry across ${CITY}.`,
    },
    {
      icon: Clock,
      title: "99.99% Infrastructure SLA",
      desc: `High-availability cloud infrastructure with 24/7/365 uptime monitoring and automated queue orchestration for ${CITY} operations.`,
    },
  ];

  const comparisonRows = [
    {
      feature: "Meta-Approved BSP (Zero Ban Risk)",
      official: true,
      unofficial: false,
    },
    {
      feature: "High-Volume Daily Message Scale",
      official: true,
      unofficial: false,
    },
    {
      feature: "Verified Official Green Checkmark",
      official: true,
      unofficial: false,
    },
    {
      feature: "Pre-Approved Template Campaigns",
      official: true,
      unofficial: true,
    },
    {
      feature: "Two-Way Conversational Automation",
      official: true,
      unofficial: true,
    },
    {
      feature: "Tally Prime & ERP Webhook Bridge",
      official: true,
      unofficial: true,
    },
    {
      feature: "GDPR & Regional Privacy Compliant",
      official: true,
      unofficial: false,
    },
    {
      feature: "Deployment Timeline",
      official: "2–4 days",
      unofficial: "24–48 hrs",
    },
  ];

  const faqs = [
    {
      q: `Is the Official WhatsApp Business API available for businesses in ${CITY}, ${STATE}?`,
      a: `Yes. MIMC Technologies provides complete WhatsApp Business API onboarding, Meta Business verification, and webhook software integration for companies across ${CITY}, ${STATE}. We manage all technical verification and template submissions end-to-end.`,
    },
    {
      q: `How does Tally Prime WhatsApp integration work for ${CITY} companies?`,
      a: `We install our lightweight Tally connector on your server in ${CITY}. The moment a sales invoice, payment receipt, or reminder is recorded in Tally Prime or ERP 9, it dispatches as an encrypted PDF to the client's verified WhatsApp number in under 3 seconds.`,
    },
    {
      q: `Can WhatsApp OTP replace traditional SMS for my platform in ${CITY}?`,
      a: `Yes. WhatsApp OTP achieves delivery rates exceeding 98% in ${CITY} compared to 75–85% for traditional SMS, with significantly lower per-message delivery costs and instant delivery speeds.`,
    },
    {
      q: `How does MIMC Technologies ensure local compliance in ${COUNTRY}?`,
      a: `${complianceNote} All data payloads are transmitted over encrypted TLS 1.3 channels adhering strictly to international and regional data privacy standards.`,
    },
    {
      q: `How long does WhatsApp API onboarding take in ${CITY}?`,
      a: `Official Meta API onboarding takes 2 to 4 business days, including Business Manager verification and display name approvals. We guide you through every step.`,
    },
  ];

  const otherCities = whatsappLocations.filter((l) => l.slug !== SLUG);
  const offset =
    otherCities.findIndex((l) => l.slug === SLUG) % (otherCities.length || 1) ||
    0;
  const alsoServingCities = [
    ...otherCities.slice(offset),
    ...otherCities.slice(0, offset),
  ].slice(0, 8);

  return (
    <Layout
      title={`WhatsApp Business API Provider in ${CITY}, ${STATE} | Official Meta BSP`}
      description={`Official WhatsApp Business API setup and Tally Prime integration for enterprises in ${CITY}, ${STATE}, ${COUNTRY}. Sub-3s delivery, automated invoices, and 99.99% SLA.`}
    >
      <ServiceSchema
        name={`WhatsApp Business API Service in ${CITY}, ${STATE}`}
        description={`Official WhatsApp Business API setup, Tally ERP integration, bulk messaging, OTP, and chatbot automation for businesses in ${CITY}, ${STATE}, ${COUNTRY}.`}
        url={PAGE_URL}
        faqs={faqs}
        breadcrumbs={[
          { name: "Home", url: BASE_URL },
          { name: "Locations", url: `${BASE_URL}/locations` },
          { name: `${CITY} Hub`, url: PAGE_URL },
        ]}
        rating={4.9}
        reviewCount={127}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* ===================== HERO SECTION ===================== */}
        <section className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-teal-50 border border-teal-200/60 px-3 py-1 rounded-full text-xs font-mono font-bold text-teal-800">
                {getCountryFlag(COUNTRY_CODE, "w-4 h-3")}
                <span>
                  {CITY.toUpperCase()}, {COUNTRY.toUpperCase()}
                </span>
              </span>
              <span className="inline-flex items-center gap-1 bg-white border border-[#E8E8E2] px-3 py-1 rounded-full text-xs font-bold text-[#171717]">
                Official Meta Business Partner
              </span>
            </div>

            <ServiceBadges rating={4.9} reviewCount={127} />

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171717] leading-[1.08] font-heading">
              WhatsApp Business API <br />
              <span className="text-teal-700">Provider in {CITY}.</span>
            </h1>

            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-normal">
              Official Meta BSP onboarding, instant Tally Prime invoice
              automation, verified Green Checkmark profiles, and enterprise
              custom software integration for businesses across {CITY}, {STATE}.
            </p>

            {/* Localized Context Box */}
            <div className="p-4 rounded-2xl bg-[#FAFAF8] border border-[#E8E8E2] text-xs text-neutral-600 space-y-1.5">
              <div className="font-bold text-neutral-900 flex items-center gap-1.5 font-heading">
                <MapPin className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                <span>Regional Operating Context — {CITY}</span>
              </div>
              <p className="leading-relaxed">{localContext}</p>
              <div className="text-[11px] text-teal-800 font-mono pt-1 border-t border-[#E8E8E2]">
                ● {localTrustSignal}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#111111] hover:bg-teal-700 text-white font-semibold text-sm shadow-xs transition-all active:scale-95"
              >
                <span>Get Free {CITY} Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/tally-whatsapp-integration"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-[#F4F4F0] text-neutral-800 font-semibold text-sm border border-[#E8E8E2] transition-all"
              >
                <span>Tally Integration Sync</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <SmartphoneMockup />
          </div>
        </section>

        {/* ===================== LOCAL KEY INDUSTRIES STRIP ===================== */}
        <section className="mb-16 rounded-3xl bg-white border border-[#E8E8E2] p-6 sm:p-8 shadow-xs">
          <div className="mb-4">
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
              [ {CITY.toUpperCase()} KEY SECTORS SERVED ]
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#171717] font-heading">
              Tailored Automation for Top Industries in {CITY}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {industries.map((ind, iIdx) => (
              <div
                key={iIdx}
                className="p-4 rounded-2xl bg-[#FAFAF8] border border-[#E8E8E2]"
              >
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center mb-2 font-mono text-xs font-bold">
                  0{iIdx + 1}
                </div>
                <div className="font-bold text-sm text-neutral-900 mb-1 font-heading">
                  {ind}
                </div>
                <div className="text-[11px] text-neutral-500 leading-relaxed">
                  Automated WhatsApp invoice dispatch, delivery alerts, and
                  customer engagement bots tailored for {CITY} enterprises.
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-[#E8E8E2] flex items-center gap-2 text-xs text-neutral-600">
            <FileCheck2 className="w-4 h-4 text-teal-700 shrink-0" />
            <span className="font-mono text-[11px]">
              <strong>Regulatory Notice:</strong> {complianceNote}
            </span>
          </div>
        </section>

        {/* ===================== FEATURES GRID ===================== */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
              [ {CITY.toUpperCase()} ARCHITECTURE ]
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] font-heading">
              Official WhatsApp API Capabilities in {CITY}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, idx) => (
              <div
                key={idx}
                className="precision-card rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 mb-4">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#171717] mb-2">
                    {f.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== COMPARISON TABLE ===================== */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
              [ OFFICIAL COMPLIANCE ]
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] font-heading">
              Official Meta BSP vs Unofficial Script Automation
            </h2>
            <p className="text-xs text-neutral-500 mt-1">
              Why leading enterprises in {CITY} choose official Meta BSP
              infrastructure to protect their brand phone numbers.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E8E8E2] overflow-hidden bg-white">
            <table className="w-full text-left text-xs font-sans border-collapse">
              <thead className="bg-[#FAFAF8] text-neutral-500 uppercase tracking-wider text-[11px] font-mono border-b border-[#E8E8E2]">
                <tr>
                  <th className="p-4 font-semibold">Capability / Standard</th>
                  <th className="p-4 font-semibold text-teal-800 text-center">
                    Official Meta API (MIMC)
                  </th>
                  <th className="p-4 font-semibold text-neutral-500 text-center">
                    Unofficial Scripts
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E8E2]">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="hover:bg-[#FAFAF8] transition-colors">
                    <td className="p-4 font-medium text-neutral-800">
                      {row.feature}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.official === "boolean" ? (
                        row.official ? (
                          <CheckCircle2 className="w-4 h-4 text-teal-600 mx-auto" />
                        ) : (
                          <XCircle className="w-4 h-4 text-red-400 mx-auto" />
                        )
                      ) : (
                        <span className="font-bold text-teal-800">
                          {row.official}
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.unofficial === "boolean" ? (
                        row.unofficial ? (
                          <CheckCircle2 className="w-4 h-4 text-teal-600 mx-auto" />
                        ) : (
                          <XCircle className="w-4 h-4 text-neutral-400 mx-auto" />
                        )
                      ) : (
                        <span className="text-neutral-500">
                          {row.unofficial}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ===================== FAQ ACCORDION ===================== */}
        <section className="mb-16 max-w-4xl">
          <div className="mb-8">
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
              [ {CITY.toUpperCase()} FAQ ]
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] font-heading">
              Frequently Asked Questions for {CITY} Businesses
            </h2>
          </div>

          <div className="divide-y divide-[#E8E8E2] border-y border-[#E8E8E2]">
            {faqs.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;
              return (
                <div key={fIdx} className="py-4">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                    className="w-full text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none group"
                  >
                    <span className="text-base font-bold text-[#171717] group-hover:text-teal-800 transition-colors font-heading">
                      {faq.q}
                    </span>
                    <span className="w-7 h-7 rounded-full border border-[#E8E8E2] flex items-center justify-center text-neutral-500 shrink-0 group-hover:border-teal-600 transition-colors">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 text-teal-700" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 text-neutral-600 text-xs sm:text-sm leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===================== ALSO SERVING CLUSTER ===================== */}
        <section className="mb-16">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
              [ GLOBAL NETWORK ]
            </span>
            <h3 className="text-xl font-bold text-[#171717] font-heading">
              Also Serving Key Commercial Regions
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {alsoServingCities.map((city) => (
              <Link
                key={city.slug}
                href={`/services/${city.slug}`}
                className="precision-card rounded-xl p-3.5 flex items-center justify-between group block"
              >
                <div>
                  <div className="font-heading font-bold text-xs text-[#171717] group-hover:text-teal-800 transition-colors">
                    {city.city}
                  </div>
                  <div className="text-[10px] text-neutral-400 font-mono">
                    {city.country} Hub
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-teal-700 group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>
        </section>

        {/* Related Services Navigation */}
        <RelatedServices currentId="whatsapp-api" />
      </div>
    </Layout>
  );
}
