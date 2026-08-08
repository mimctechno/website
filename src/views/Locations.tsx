"use client";
import React from "react";
import Link from "next/link";
import { MapPin, Globe, Database, Network } from "lucide-react";
import whatsappLocations from "@/data/whatsappLocations.json";

import Layout from "@/components/Layout";

export default function Locations() {
  const BASE_URL = "https://www.mimctechnologies.com";

  // Group locations by region or state
  const locationsByState = whatsappLocations.reduce(
    (acc, loc) => {
      if (!acc[loc.state]) acc[loc.state] = [];
      acc[loc.state].push(loc);
      return acc;
    },
    {} as Record<string, typeof whatsappLocations>,
  );

  return (
    <Layout>
      <div className="min-h-screen bg-[var(--color-cyber-bg)] text-[var(--color-cyber-fg)] pt-32 pb-24 font-[var(--font-cyber-body)]">
        {/* ── Breadcrumb Schema ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: BASE_URL,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Locations",
                  item: `${BASE_URL}/locations/`,
                },
              ],
            }),
          }}
        />

        <div className="max-w-7xl mx-auto px-6">
          <header className="mb-20 text-center relative">
            <div className="inline-flex items-center justify-center border border-[var(--color-cyber-accent)]/30 bg-[var(--color-cyber-accent)]/5 px-4 py-1 mb-8 cyber-chamfer">
              <Globe className="w-4 h-4 text-[var(--color-cyber-accent)] mr-2" />
              <span className="text-[var(--color-cyber-accent)] font-[var(--font-cyber-accent)] text-xs uppercase tracking-widest">
                Global_Infrastructure_Map
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black font-[var(--font-cyber-head)] uppercase tracking-tighter text-white mb-6">
              Active{" "}
              <span className="text-[var(--color-cyber-accent)]">Nodes</span>
            </h1>
            <p className="text-[var(--color-cyber-muted-fg)] max-w-2xl mx-auto font-[var(--font-cyber-accent)] text-sm tracking-widest leading-relaxed uppercase">
              Browse our global deployment zones. We provide enterprise WhatsApp
              API, ERP, and Web Development infrastructure across these primary
              regions.
            </p>
          </header>

          {/* WhatsApp API Section */}
          <div className="mb-24">
            <div className="flex items-center gap-4 border-b border-[var(--color-cyber-border)] pb-6 mb-12">
              <div className="w-12 h-12 bg-[var(--color-cyber-accent)]/10 flex items-center justify-center cyber-chamfer border border-[var(--color-cyber-accent)]/30">
                <Network className="text-[var(--color-cyber-accent)] w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black font-[var(--font-cyber-head)] text-white uppercase tracking-widest">
                  WhatsApp API Infrastructure
                </h2>
                <p className="text-[var(--color-cyber-muted-fg)] text-xs font-[var(--font-cyber-accent)] tracking-widest uppercase">
                  Deployed Servers & Integration Points
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(locationsByState).map(([state, cities]) => (
                <div
                  key={state}
                  className="border border-[var(--color-cyber-border)] bg-[#050508] p-6 cyber-chamfer"
                >
                  <h3 className="text-[var(--color-cyber-accent2)] font-[var(--font-cyber-accent)] text-sm font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
                    <Database className="w-4 h-4" />
                    REGION: {state}
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {cities.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/services/${city.slug}/`}
                        className="flex items-center justify-between border border-[var(--color-cyber-border)] hover:border-[var(--color-cyber-accent)] bg-black/50 hover:bg-[var(--color-cyber-accent)]/10 p-4 cyber-chamfer group/link transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <MapPin className="w-4 h-4 text-[var(--color-cyber-muted-fg)] group-hover/link:text-[var(--color-cyber-accent)] transition-colors" />
                          <span className="font-[var(--font-cyber-accent)] text-sm font-bold tracking-wider uppercase text-white group-hover/link:text-[var(--color-cyber-accent)] transition-colors">
                            {city.city}
                          </span>
                        </div>
                        <span className="w-2 h-2 rounded-full bg-[var(--color-cyber-border)] group-hover/link:bg-[var(--color-cyber-accent)] group-hover/link:animate-pulse" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
