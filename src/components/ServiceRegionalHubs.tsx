"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { getCountryFlag } from "@/components/ui/FlagIcon";

const GLOBAL_FEATURED_SLUGS = [
  { slug: "toronto", name: "Toronto", countryCode: "CA", label: "Global HQ" },
  {
    slug: "new-york",
    name: "New York",
    countryCode: "US",
    label: "Americas Hub",
  },
  { slug: "london", name: "London", countryCode: "GB", label: "Europe HQ" },
  { slug: "dubai", name: "Dubai", countryCode: "AE", label: "MENA Hub" },
  {
    slug: "mumbai",
    name: "Mumbai",
    countryCode: "IN",
    label: "Commercial Hub",
  },
  { slug: "delhi", name: "Delhi NCR", countryCode: "IN", label: "R&D Center" },
  {
    slug: "singapore",
    name: "Singapore",
    countryCode: "SG",
    label: "APAC Gateway",
  },
  { slug: "sydney", name: "Sydney", countryCode: "AU", label: "ANZ Hub" },
  {
    slug: "chicago",
    name: "Chicago",
    countryCode: "US",
    label: "Logistics Hub",
  },
  {
    slug: "bengaluru",
    name: "Bengaluru",
    countryCode: "IN",
    label: "Tech Core",
  },
  {
    slug: "vancouver",
    name: "Vancouver",
    countryCode: "CA",
    label: "West Hub",
  },
  { slug: "riyadh", name: "Riyadh", countryCode: "SA", label: "KSA Gateway" },
];

const TALLY_FEATURED_SLUGS = [
  {
    slug: "mumbai",
    name: "Mumbai",
    countryCode: "IN",
    label: "Financial Capital",
  },
  {
    slug: "delhi",
    name: "Delhi NCR",
    countryCode: "IN",
    label: "Northern Hub",
  },
  {
    slug: "bengaluru",
    name: "Bengaluru",
    countryCode: "IN",
    label: "Silicon Valley of India",
  },
  {
    slug: "ahmedabad",
    name: "Ahmedabad",
    countryCode: "IN",
    label: "Industrial Hub",
  },
  {
    slug: "pune",
    name: "Pune",
    countryCode: "IN",
    label: "Manufacturing Core",
  },
  {
    slug: "chennai",
    name: "Chennai",
    countryCode: "IN",
    label: "Automotive Hub",
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    countryCode: "IN",
    label: "Tech Corridor",
  },
  { slug: "kolkata", name: "Kolkata", countryCode: "IN", label: "Eastern Hub" },
  { slug: "dubai", name: "Dubai", countryCode: "AE", label: "UAE GCC Hub" },
  {
    slug: "abu-dhabi",
    name: "Abu Dhabi",
    countryCode: "AE",
    label: "Capital Center",
  },
  {
    slug: "riyadh",
    name: "Riyadh",
    countryCode: "SA",
    label: "Saudi Arabia Hub",
  },
  { slug: "doha", name: "Doha", countryCode: "QA", label: "Qatar Center" },
];

export default function ServiceRegionalHubs({
  serviceId,
  serviceTitle,
}: {
  serviceId: string;
  serviceTitle: string;
}) {
  const hubs =
    serviceId === "tally-whatsapp-integration"
      ? TALLY_FEATURED_SLUGS
      : GLOBAL_FEATURED_SLUGS;

  return (
    <section className="mt-20 pt-12 border-t border-[#E8E8E2]">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
            [ REGIONAL DEPLOYMENTS ]
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#171717]">
            {serviceTitle} — Global Regional Hubs
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1 max-w-2xl">
            Direct on-site engineering advisory and cloud integrations deployed
            across tier-1 commercial hubs with local compliance.
          </p>
        </div>
        <Link
          href="/locations/"
          className="text-xs font-mono font-bold text-teal-700 hover:text-teal-900 inline-flex items-center gap-1.5 shrink-0"
        >
          <span>All 100+ Enterprise Hubs</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
        {hubs.map((hub) => (
          <Link
            key={hub.slug}
            href={`/services/${serviceId}/${hub.slug}/`}
            className="p-3.5 rounded-2xl bg-white border border-[#E8E8E2] hover:border-teal-300 hover:bg-teal-50/50 transition-all group flex flex-col justify-between shadow-2xs"
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5">
                {getCountryFlag(hub.countryCode, "w-4 h-3")}
                <span className="font-heading font-bold text-xs sm:text-sm text-[#171717] group-hover:text-teal-800 transition-colors">
                  {hub.name}
                </span>
              </div>
              <span className="text-[10px] font-mono text-neutral-400">
                {hub.countryCode}
              </span>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-teal-700">
              <span className="text-neutral-500">{hub.label}</span>
              <span className="group-hover:translate-x-0.5 transition-transform font-bold">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
