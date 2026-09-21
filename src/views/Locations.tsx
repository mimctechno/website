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
  Briefcase,
  Cpu,
} from "lucide-react";
import {
  CANONICAL_LOCATIONS,
  CanonicalLocation,
} from "@/data/canonicalLocations";
import Layout from "@/components/Layout";
import { getCountryFlag } from "@/components/ui/FlagIcon";

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

const SERVICE_TABS = [
  { id: "ALL", label: "All Enterprise Services", badge: "Unified Hubs" },
  {
    id: "erp-crm",
    label: "Enterprise ERP & CRM Architectures",
    badge: "Global Metros",
  },
  {
    id: "whatsapp-api",
    label: "Official Meta WhatsApp Business API",
    badge: "Global Metros",
  },
  {
    id: "tally-cloud",
    label: "Tally on Cloud Hosting",
    badge: "India & GCC Only",
  },
  {
    id: "tally-whatsapp-integration",
    label: "Tally Prime WhatsApp Invoicing",
    badge: "India & GCC Only",
  },
  {
    id: "web-development",
    label: "Next.js & Modern Web Infrastructure",
    badge: "Global Metros",
  },
  {
    id: "digital-marketing",
    label: "Technical SEO & Programmatic Search",
    badge: "Global Metros",
  },
  {
    id: "enterprise-consulting",
    label: "Enterprise Architecture & IT Consulting",
    badge: "Global Metros",
  },
];

const ME_COUNTRIES = ["AE", "SA", "QA", "KW", "BH", "OM"];
const EU_COUNTRIES = ["GB", "UK", "DE", "NL", "FR", "ES", "IT", "CH", "IE"];
const LATAM_COUNTRIES = ["BR", "MX", "CO", "AR", "CL"];
const APAC_COUNTRIES = ["SG", "MY", "ID", "PH", "VN", "AU", "NZ", "JP", "KR"];
const AFR_COUNTRIES = ["ZA", "NG", "KE", "EG"];

export default function Locations() {
  const [selectedService, setSelectedService] = useState("ALL");
  const [selectedRegion, setSelectedRegion] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLocations = useMemo(() => {
    return CANONICAL_LOCATIONS.filter((loc) => {
      // Service filter
      if (
        (selectedService === "tally-whatsapp-integration" ||
          selectedService === "tally-cloud") &&
        !loc.supportsTally
      ) {
        return false;
      }

      // Region filter
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
  }, [selectedService, selectedRegion, searchQuery]);

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
          cities: CanonicalLocation[];
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
        "@type": "ItemList",
        name: "MIMC Technologies Regional Service Hubs",
        description:
          "Directory of official WhatsApp Business API, Tally Prime Invoicing, and Enterprise ERP software deployment hubs across 100+ global commercial metros.",
        numberOfItems: CANONICAL_LOCATIONS.length,
        itemListElement: CANONICAL_LOCATIONS.map((loc, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: `Enterprise Services in ${loc.city}, ${loc.country}`,
          url: `https://www.mimctechnologies.com/services/erp-crm/${loc.citySlug}/`,
        })),
      },
    ],
  };

  return (
    <Layout
      title="Global Deployment Hubs — WhatsApp API & Enterprise ERP | MIMC Technologies"
      description="Explore MIMC Technologies' 100+ deployment hubs across Canada, India, USA, UAE, and Europe. Dedicated infrastructure for Meta WhatsApp API, Tally invoicing, and custom ERP systems."
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
            100+ GLOBAL COMMERCIAL HUBS · 35+ COUNTRIES
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171717] leading-[1.08] mb-4 font-heading">
            Enterprise Solutions <br />
            <span className="text-teal-700">in 100+ Cities Worldwide.</span>
          </h1>

          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
            MIMC Technologies provides official Meta WhatsApp Business API
            onboarding, automated Tally Prime invoicing, and custom enterprise
            ERP software for commercial leaders across 100+ global metros.
          </p>
        </section>

        {/* ===================== SERVICE FILTER TABS ===================== */}
        <section className="mb-8 p-3 rounded-2xl bg-white border border-[#E8E8E2] shadow-xs">
          <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-bold px-3 pt-1 pb-2">
            Filter by Service Pipeline:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {SERVICE_TABS.map((srv) => {
              const active = selectedService === srv.id;
              return (
                <button
                  key={srv.id}
                  onClick={() => setSelectedService(srv.id)}
                  className={`p-3 rounded-xl text-left transition-all cursor-pointer flex flex-col justify-between border ${
                    active
                      ? "bg-[#111111] text-white border-[#111111] shadow-sm"
                      : "bg-[#FAFAF8] hover:bg-neutral-100 text-neutral-700 border-[#E8E8E2]"
                  }`}
                >
                  <span className="font-heading font-bold text-xs leading-snug">
                    {srv.label}
                  </span>
                  <span
                    className={`text-[10px] font-mono mt-2 inline-block px-1.5 py-0.5 rounded w-fit ${
                      active
                        ? "bg-teal-950 text-teal-300 border border-teal-800"
                        : "bg-white text-neutral-500 border border-neutral-200"
                    }`}
                  >
                    {srv.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* ===================== CONTINENT & SEARCH FILTER ===================== */}
        <section className="mb-10 space-y-4 border-y border-[#E8E8E2] py-5">
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
            {/* Continent Filter Tabs */}
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
            </div>

            {/* Search Input */}
            <div className="relative min-w-[280px]">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search cities (e.g. Toronto, Dubai, Mumbai, London)..."
                className="w-full bg-white border border-[#E8E8E2] rounded-xl pl-9 pr-4 py-2.5 text-xs text-[#171717] placeholder:text-neutral-400 focus:outline-none focus:border-teal-600 transition-all shadow-2xs"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-neutral-500 pt-1">
            <span>
              Displaying{" "}
              <strong className="text-teal-800 font-bold">
                {filteredLocations.length} Regional Hubs
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
                    <div className="space-y-3">
                      {group.cities.map((city) => {
                        // If specific service is selected, link directly
                        if (selectedService !== "ALL") {
                          const targetUrl = `/services/${selectedService}/${city.citySlug}/`;
                          return (
                            <Link
                              key={city.citySlug}
                              href={targetUrl}
                              className="flex items-center justify-between p-3 rounded-xl bg-[#FAFAF8] hover:bg-teal-50/80 border border-[#E8E8E2] hover:border-teal-300 transition-all group/item block"
                            >
                              <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0 group-hover/item:scale-125 transition-transform" />
                                <span className="text-xs font-bold text-neutral-900 group-hover/item:text-teal-900 transition-colors">
                                  {city.city}
                                </span>
                              </div>
                              <div className="flex items-center gap-1 text-[11px] font-semibold text-teal-700 group-hover/item:text-teal-900">
                                <span>View Hub</span>
                                <ArrowRight className="w-3 h-3 group-hover/item:translate-x-0.5 transition-transform" />
                              </div>
                            </Link>
                          );
                        }

                        // If ALL selected, show multi-service chips
                        return (
                          <div
                            key={city.citySlug}
                            className="p-3 rounded-xl bg-[#FAFAF8] border border-[#E8E8E2] space-y-2"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-neutral-900">
                                {city.city}
                              </span>
                              <span className="text-[10px] font-mono text-neutral-400">
                                {city.countryCode}
                              </span>
                            </div>

                            <div className="flex flex-wrap items-center gap-1.5 pt-1">
                              <Link
                                href={`/services/erp-crm/${city.citySlug}/`}
                                className="px-2 py-0.5 rounded-md bg-white hover:bg-teal-50 text-[10px] font-mono font-semibold text-neutral-700 hover:text-teal-800 border border-neutral-200 hover:border-teal-300 transition-all"
                              >
                                ERP
                              </Link>
                              <Link
                                href={`/services/whatsapp-api/${city.citySlug}/`}
                                className="px-2 py-0.5 rounded-md bg-white hover:bg-teal-50 text-[10px] font-mono font-semibold text-neutral-700 hover:text-teal-800 border border-neutral-200 hover:border-teal-300 transition-all"
                              >
                                WhatsApp
                              </Link>
                              <Link
                                href={`/services/web-development/${city.citySlug}/`}
                                className="px-2 py-0.5 rounded-md bg-white hover:bg-teal-50 text-[10px] font-mono font-semibold text-neutral-700 hover:text-teal-800 border border-neutral-200 hover:border-teal-300 transition-all"
                              >
                                Web Dev
                              </Link>
                              <Link
                                href={`/services/digital-marketing/${city.citySlug}/`}
                                className="px-2 py-0.5 rounded-md bg-white hover:bg-teal-50 text-[10px] font-mono font-semibold text-neutral-700 hover:text-teal-800 border border-neutral-200 hover:border-teal-300 transition-all"
                              >
                                SEO
                              </Link>
                              <Link
                                href={`/services/enterprise-consulting/${city.citySlug}/`}
                                className="px-2 py-0.5 rounded-md bg-white hover:bg-teal-50 text-[10px] font-mono font-semibold text-neutral-700 hover:text-teal-800 border border-neutral-200 hover:border-teal-300 transition-all"
                              >
                                IT Advisory
                              </Link>
                              {city.supportsTallyCloud && (
                                <Link
                                  href={`/services/tally-cloud/${city.citySlug}/`}
                                  className="px-2 py-0.5 rounded-md bg-sky-50 hover:bg-sky-100 text-[10px] font-mono font-semibold text-sky-800 border border-sky-200 transition-all"
                                >
                                  Tally Cloud
                                </Link>
                              )}
                              {city.supportsTally && (
                                <Link
                                  href={`/services/tally-whatsapp-integration/${city.citySlug}/`}
                                  className="px-2 py-0.5 rounded-md bg-teal-50 hover:bg-teal-100 text-[10px] font-mono font-semibold text-teal-800 border border-teal-200 transition-all"
                                >
                                  Tally Sync
                                </Link>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Direct Hub Phone Line */}
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
      </div>
    </Layout>
  );
}
