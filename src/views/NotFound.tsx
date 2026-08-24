"use client";

import Link from "next/link";
import { Home, ArrowRight, Compass, Search } from "lucide-react";
import Layout from "../components/Layout";

export default function NotFound() {
  return (
    <Layout title="404 — Page Not Found | MIMC Technologies">
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        {/* Error Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/60 text-teal-800 text-xs font-mono font-bold uppercase tracking-wider mb-6">
          <Compass className="w-4 h-4 text-teal-700" />
          HTTP 404 · ROUTE NOT FOUND
        </div>

        {/* 404 Headline */}
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-extrabold font-heading text-[#171717] tracking-tight mb-4">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#171717] mb-4">
          The requested page could not be located.
        </h2>

        <p className="text-neutral-600 text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-10">
          The URL you accessed may have moved to a new architecture route, or
          the resource has been archived. Explore our primary solutions below.
        </p>

        {/* Quick Route Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10 text-left">
          {[
            { title: "Enterprise ERP & CRM", path: "/services/erp-crm" },
            { title: "Official WhatsApp API", path: "/services/whatsapp-api" },
            {
              title: "Tally WhatsApp Sync",
              path: "/services/tally-whatsapp-integration",
            },
          ].map((item, idx) => (
            <Link
              key={idx}
              href={item.path}
              className="p-4 rounded-xl bg-white border border-[#E8E8E2] hover:border-teal-400 hover:shadow-xs transition-all group block"
            >
              <div className="text-xs font-bold text-[#171717] group-hover:text-teal-800 transition-colors mb-1">
                {item.title}
              </div>
              <div className="text-[11px] text-teal-700 flex items-center gap-1 font-semibold">
                <span>Explore</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Home Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#111111] hover:bg-teal-700 text-white font-semibold text-sm shadow-md transition-all active:scale-95"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </Layout>
  );
}
