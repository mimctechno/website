"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  MapPin,
  Globe,
  Search,
  ArrowRight,
  Phone,
  CheckCircle2,
  Server,
  Zap,
  Building2,
  Layers,
  Sparkles,
  Shield,
} from "lucide-react";
import whatsappLocations from "@/data/whatsappLocations.json";
import Layout from "@/components/Layout";
import { getCountryFlag, GlobeFlag } from "@/components/ui/FlagIcon";

const CONTINENTS = [
  { id: "ALL", label: "All Hubs (100+)" },
  { id: "IN", label: "India" },
  { id: "CA", label: "Canada" },
  { id: "US", label: "United States" },
  { id: "ME", label: "Middle East (UAE/KSA/QA)" },
  { id: "EU", label: "Europe (UK/DE/NL/FR)" },
  { id: "LATAM", label: "Latin America (BR/MX/CO)" },
  { id: "APAC", label: "Asia Pacific (SG/MY/ID/AU)" },
  { id: "AFR", label: "Africa (ZA/NG/KE/EG)" },
];

const ME_COUNTRIES = ["AE", "SA", "QA", "KW", "BH", "OM"];
const EU_COUNTRIES = ["GB", "UK", "DE", "NL", "FR", "ES", "IT", "CH", "IE"];
const LATAM_COUNTRIES = ["BR", "MX", "CO", "AR", "CL"];
const APAC_COUNTRIES = ["SG", "MY", "ID", "PH", "VN", "AU", "NZ", "JP", "KR"];
const AFR_COUNTRIES = ["ZA", "NG", "KE", "EG"];

const CORE_SERVICES = [
  {
    title: "Official Meta WhatsApp Business API",
    desc: "Meta BSP onboarding, green tick verification & high-throughput broadcasts.",
    href: "/services/whatsapp-api",
  },
  {
    title: "Tally Prime WhatsApp Integration",
    desc: "Zero-latency automatic invoice & payment reminder dispatch from Tally.",
    href: "/services/tally-whatsapp-integration",
  },
  {
    title: "Enterprise Custom ERP & CRM",
    desc: "100% source code ownership, multi-location inventory & billing engines.",
    href: "/services/erp-crm",
  },
  {
    title: "Next.js Web & Technical SEO",
    desc: "Sub-second load times, 100/100 Core Web Vitals & organic lead funnels.",
    href: "/services/web-development",
  },
];

export default function Locations() {
  const [selectedRegion, setSelectedRegion] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLocations = useMemo(() => {
    return whatsappLocations.filter((loc) => {
      let matchesRegion = true;
      if (selectedRegion === "IN") matchesRegion = loc.countryCode === "IN";
      else if (selectedRegion === "CA")
        matchesRegion = loc.countryCode === "CA";
      else if (selectedRegion === "US")
        matchesRegion = loc.countryCode === "US";
      else if (selectedRegion === "ME")
        matchesRegion = ME_COUNTRIES.includes(loc.countryCode);
      else if (selectedRegion === "EU")
        matchesRegion = EU_COUNTRIES.includes(loc.countryCode);
      else if (selectedRegion === "LATAM")
        matchesRegion = LATAM_COUNTRIES.includes(loc.countryCode);
      else if (selectedRegion === "APAC")
        matchesRegion = APAC_COUNTRIES.includes(loc.countryCode);
      else if (selectedRegion === "AFR")
        matchesRegion = AFR_COUNTRIES.includes(loc.countryCode);

      const matchesSearch =
        loc.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.country.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesRegion && matchesSearch;
    });
  }, [selectedRegion, searchQuery]);

  // Group by country and state
  const locationsByCountryState = useMemo(() => {
    return filteredLocations.reduce(
      (acc, loc) => {
        const key = `${loc.country} — ${loc.state}`;
        if (!acc[key])
          acc[key] = {
            countryCode: loc.countryCode,
            country: loc.country,
            state: loc.state,
            cities: [],
          };
        acc[key].cities.push(loc);
        return acc;
      },
      {} as Record<
        string,
        {
          countryCode: string;
          country: string;
          state: string;
          cities: typeof whatsappLocations;
        }
      >,
    );
  }, [filteredLocations]);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.mimctechnologies.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Global Deployment Locations",
            item: "https://www.mimctechnologies.com/locations/",
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.mimctechnologies.com/#toronto-hub",
        name: "MIMC Technologies — North America Engineering Hub",
        url: "https://www.mimctechnologies.com/locations/",
        telephone: "+1-647-797-2878",
        address: {
          "@type": "PostalAddress",
          streetAddress: "100 King Street West, Suite 5600",
          addressLocality: "Toronto",
          addressRegion: "ON",
          postalCode: "M5X 1C9",
          addressCountry: "CA",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 43.6487,
          longitude: -79.3817,
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.mimctechnologies.com/#delhi-hub",
        name: "MIMC Technologies — Asia Operations & Meta BSP Hub",
        url: "https://www.mimctechnologies.com/locations/",
        telephone: "+91-9259418994",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Cyber City, DLF Phase 2",
          addressLocality: "Gurugram, Delhi NCR",
          addressRegion: "Haryana",
          postalCode: "122002",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 28.4908,
          longitude: 77.0894,
        },
      },
      {
        "@type": "ItemList",
        name: "MIMC Technologies Regional Service Hubs",
        description:
          "Directory of official WhatsApp Business API, ERP, and software integration service locations across 100+ cities.",
        numberOfItems: whatsappLocations.length,
        itemListElement: whatsappLocations.map((loc, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: `WhatsApp Business API & ERP Solutions in ${loc.city}, ${loc.country}`,
          url: `https://www.mimctechnologies.com/services/${loc.slug}/`,
        })),
      },
    ],
  };

  return (
    <Layout
      title="WhatsApp Business API & ERP Services in 100+ Cities Worldwide | MIMC"
      description="Explore MIMC Technologies' 100+ regional deployment hubs across India, Canada, United States, UAE, Saudi Arabia, Europe, and Latin America for official WhatsApp API & ERP solutions."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* ===================== HERO SECTION ===================== */}
        <section className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/60 text-teal-800 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
            100+ GLOBAL COMMERCIAL HUBS · 25+ COUNTRIES
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171717] leading-[1.08] mb-4 font-heading">
            WhatsApp Business API & ERP Services <br />
            <span className="text-teal-700">in 100+ Cities Worldwide.</span>
          </h1>

          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
            MIMC Technologies provides official Meta WhatsApp Business API
            onboarding, automated Tally Prime invoicing, and custom ERP software
            for enterprises across 100+ commercial metros globally. Every local
            deployment connects to dedicated low-latency cloud gateways with
            99.99% uptime SLAs.
          </p>
        </section>

        {/* ===================== EDITORIAL OVERVIEW ===================== */}
        <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#E8E8E2] shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-3">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm font-heading text-neutral-900 mb-1">
              Local Regulatory Compliance
            </h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Full alignment with local tax frameworks: GST, TDS, and e-way
              bills in India; FTA VAT in the GCC; and CRA HST in Canada.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E8E8E2] shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-3">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm font-heading text-neutral-900 mb-1">
              Low-Latency Cloud Gateways
            </h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Regional webhook endpoints deployed on AWS and edge infrastructure
              guarantee sub-2-second message dispatch and real-time database
              sync.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E8E8E2] shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-3">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm font-heading text-neutral-900 mb-1">
              Dedicated Regional Support
            </h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Direct access to senior software architects across Toronto and
              Delhi time zones for rapid 48-hour onboarding and 24/7 SLA
              governance.
            </p>
          </div>
        </section>

        {/* ===================== CONTINENT & SEARCH FILTER ===================== */}
        <section className="mb-10 space-y-4 border-y border-[#E8E8E2] py-5">
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
            {/* Continent Filter Tabs */}
            {/* Scroll fade hint on mobile */}
            <div className="relative">
              <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {CONTINENTS.map((c) => {
                  const isActive = selectedRegion === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setSelectedRegion(c.id)}
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer shrink-0 ${
                        isActive
                          ? "bg-[#111111] text-white shadow-xs"
                          : "bg-white text-neutral-600 hover:text-neutral-900 border border-[#E8E8E2]"
                      }`}
                    >
                      <span>{c.label}</span>
                    </button>
                  );
                })}
              </div>
              {/* Right fade hint — hidden on xl where full tabs are always visible */}
              <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[#FAFAF8] to-transparent xl:hidden" />
            </div>

            {/* Search Input */}
            <div className="relative min-w-[280px]">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 100+ cities (e.g. Dubai, São Paulo, London, Surat)..."
                className="w-full bg-white border border-[#E8E8E2] rounded-xl pl-9 pr-4 py-2.5 text-xs text-[#171717] placeholder:text-neutral-400 focus:outline-none focus:border-teal-600 transition-all shadow-2xs"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-neutral-500 pt-1">
            <span>
              Displaying{" "}
              <strong className="text-teal-800 font-bold">
                {filteredLocations.length} Active Gateways
              </strong>
            </span>
            <span className="text-[11px] text-neutral-400 hidden sm:inline">
              ● All nodes connected to Meta Cloud API, Tally Connector & Custom
              ERP Pipelines
            </span>
          </div>
        </section>

        {/* ===================== REGIONAL HUBS GRID ===================== */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(locationsByCountryState).map(([key, group]) => {
              return (
                <div
                  key={key}
                  className="p-6 rounded-3xl bg-white border border-[#E8E8E2] shadow-sm flex flex-col justify-between"
                >
                  <div>
                    {/* Header with SVG Flag & Region */}
                    <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E2] mb-4">
                      <div className="flex items-center gap-2.5">
                        {getCountryFlag(group.countryCode, "w-5 h-3.5")}
                        <div>
                          <span className="font-heading font-bold text-sm text-[#171717] block">
                            {group.country}
                          </span>
                          <span className="text-[10px] font-mono text-neutral-400">
                            {group.state}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200/50">
                        {group.cities.length}{" "}
                        {group.cities.length === 1 ? "Hub" : "Hubs"}
                      </span>
                    </div>

                    {/* City Links */}
                    <div className="space-y-2">
                      {group.cities.map((city) => (
                        <Link
                          key={city.slug}
                          href={`/services/${city.slug}/`}
                          className="flex items-center justify-between p-3 rounded-xl bg-[#FAFAF8] hover:bg-teal-50/80 border border-[#E8E8E2] hover:border-teal-300 transition-all group/item block"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0 group-hover/item:scale-125 transition-transform" />
                            <span className="text-xs font-bold text-neutral-900 group-hover/item:text-teal-900 transition-colors">
                              {city.city}
                            </span>
                          </div>

                          <div className="flex items-center gap-1 text-[11px] font-semibold text-teal-700 group-hover/item:text-teal-900">
                            <span>Hub</span>
                            <ArrowRight className="w-3 h-3 group-hover/item:translate-x-0.5 transition-transform" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Direct Hub Line */}
                  <div className="mt-6 pt-3 border-t border-[#E8E8E2] flex items-center justify-between text-[11px] font-mono text-neutral-400">
                    <span>Direct Line:</span>
                    <a
                      href={`tel:${group.cities[0]?.phone.replace(/[^+\d]/g, "")}`}
                      className="text-teal-700 hover:text-teal-900 font-bold inline-flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3" />
                      <span>{group.cities[0]?.phone}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===================== SEO INTERNAL LINKING STRIP ===================== */}
        <section className="mb-16 p-8 rounded-3xl bg-white border border-[#E8E8E2] shadow-sm">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
              [ ARCHITECTURAL SOLUTIONS BY REGION ]
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#171717] font-heading">
              Explore Enterprise Solutions Across All Operating Hubs
            </h2>
            <p className="text-xs text-neutral-500 mt-1">
              Every regional gateway connects to MIMC&apos;s unified
              multi-region software infrastructure:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CORE_SERVICES.map((srv, idx) => (
              <Link
                key={idx}
                href={srv.href}
                className="p-4 rounded-2xl bg-[#FAFAF8] hover:bg-teal-50/70 border border-[#E8E8E2] hover:border-teal-300 transition-all group block"
              >
                <div className="text-xs font-bold font-heading text-[#171717] group-hover:text-teal-900 transition-colors mb-1.5 flex items-center justify-between">
                  <span>{srv.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-teal-700 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-neutral-500 leading-relaxed">
                  {srv.desc}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ===================== CTA BANNER ===================== */}
        <section className="rounded-3xl bg-[#111111] text-white p-8 sm:p-12 border border-neutral-800 shadow-xl text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block">
              [ DEDICATED REGIONAL CLUSTERS ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
              Need Dedicated Cloud Infrastructure in Your Territory?
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pb-2">
              We deploy dedicated Meta WhatsApp API servers, local Tally
              accounting connectors, and regional ERP databases for multi-branch
              enterprises worldwide.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm shadow-md transition-all active:scale-95"
              >
                <span>Request Regional Architecture Review</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 font-semibold text-sm border border-neutral-700 transition-all"
              >
                <span>All Capabilities</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
