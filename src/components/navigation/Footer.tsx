"use client";

import Link from "next/link";
import {
  Shield,
  Layers,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  Globe2,
  Lock,
  Terminal,
  CheckCircle2,
  Users,
  Briefcase,
} from "lucide-react";
import { IndiaFlag, CanadaFlag } from "@/components/ui/FlagIcon";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer
      className="w-full bg-[#0D0D0D] text-neutral-400 pt-14 pb-12 px-6 md:px-12 border-t border-neutral-800/80 relative z-20 mt-16"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Site Footer
      </h2>

      <div className="max-w-7xl mx-auto">
        {/* Top Footer Banner: Global Status & Direct Contact */}
        <div className="pb-10 mb-10 border-b border-neutral-800/80 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span>GLOBAL CORE SYSTEMS: OPERATIONAL</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300">
              <Lock className="w-3 h-3 text-teal-400" />
              <span>SOC2 & ISO 27001 COMPLIANT ARCHITECTURE</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-neutral-500 font-mono">
              DIRECT ARCHITECT LINE:
            </span>
            <a
              href="mailto:info@mimctechnologies.com"
              className="text-xs font-mono font-medium text-teal-400 hover:text-teal-300 transition-colors underline underline-offset-4"
            >
              info@mimctechnologies.com
            </a>
          </div>
        </div>

        {/* Main 4-Column Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Col 1: Brand & Enterprise Profile */}
          <div className="md:col-span-4 space-y-5">
            <Link
              href="/"
              className="inline-flex items-center group transition-transform active:scale-95"
              aria-label="MIMC Technologies Home"
            >
              <Logo variant="dark" size="lg" />
            </Link>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm font-normal">
              High-performance enterprise software engineering firm architecting
              custom ERP platforms, Meta WhatsApp API pipelines, and automated
              accounting bridges globally.
            </p>

            <div className="pt-2 text-xs font-mono text-neutral-500 space-y-1.5">
              <div>HQ: Toronto, Ontario, Canada</div>
              <div>Engineering Hub: Delhi NCR, India</div>
              <div className="text-teal-400/90 font-medium">
                99.99% Guaranteed Cloud SLA
              </div>
            </div>
          </div>

          {/* Col 2: Core Solutions (6 Services) */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-white font-mono font-bold text-xs uppercase tracking-widest flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-teal-400" />
              <span>[ SOLUTIONS ]</span>
            </div>
            <ul className="space-y-2.5 text-sm">
              {[
                ["Enterprise ERP & Custom CRM", "/services/erp-crm/"],
                ["Official Meta WhatsApp API", "/services/whatsapp-api/"],
                ["Tally on Cloud Hosting", "/services/tally-cloud/"],
                [
                  "Tally Prime WhatsApp Invoicing",
                  "/services/tally-whatsapp-integration/",
                ],
                ["Next.js Web & Cloud Platform", "/services/web-development/"],
                [
                  "Technical SEO & Search Growth",
                  "/services/digital-marketing/",
                ],
                [
                  "Enterprise IT Consulting",
                  "/services/enterprise-consulting/",
                ],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-neutral-400 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                  >
                    <span className="text-neutral-600 text-xs">›</span>
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company & Careers */}
          <div className="md:col-span-2 space-y-4">
            <div className="text-white font-mono font-bold text-xs uppercase tracking-widest flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-teal-400" />
              <span>[ COMPANY ]</span>
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about/"
                  className="text-neutral-400 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                >
                  <span className="text-neutral-600 text-xs">›</span>
                  <span>About Firm</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/careers/"
                  className="text-neutral-400 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all group/item"
                >
                  <span className="text-neutral-600 text-xs">›</span>
                  <span>Careers</span>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-1.5 py-0.2 rounded-full">
                    HIRING
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/partners/"
                  className="text-neutral-400 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                >
                  <span className="text-neutral-600 text-xs">›</span>
                  <span>Cloud Partners</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/locations/"
                  className="text-neutral-400 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                >
                  <span className="text-neutral-600 text-xs">›</span>
                  <span>Global Hubs (100+)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/"
                  className="text-neutral-400 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                >
                  <span className="text-neutral-600 text-xs">›</span>
                  <span>Engineering Blog</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact/"
                  className="text-neutral-400 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                >
                  <span className="text-neutral-600 text-xs">›</span>
                  <span>Contact Sales</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Global Hubs & Dispatch */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-white font-mono font-bold text-xs uppercase tracking-widest flex items-center gap-2">
              <Globe2 className="w-3.5 h-3.5 text-teal-400" />
              <span>[ GLOBAL HUBS ]</span>
            </div>

            <div className="space-y-4 text-xs">
              {/* Canada Hub */}
              <div className="p-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800">
                <div className="flex items-center justify-between text-neutral-200 font-semibold mb-1">
                  <div className="flex items-center gap-1.5">
                    <CanadaFlag className="w-4 h-3 shrink-0" />
                    <span>Toronto, Canada (HQ)</span>
                  </div>
                  <span className="text-[10px] font-mono text-teal-400 bg-teal-950/60 border border-teal-800/40 px-1.5 py-0.5 rounded">
                    EST
                  </span>
                </div>
                <a
                  href="tel:+14168578831"
                  className="hover:text-teal-400 transition-colors flex items-center gap-1.5 text-neutral-400 font-mono"
                >
                  <Phone className="w-3 h-3 text-neutral-500" /> +1 (416)
                  857-8831
                </a>
              </div>

              {/* India Hub */}
              <div className="p-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800">
                <div className="flex items-center justify-between text-neutral-200 font-semibold mb-1">
                  <div className="flex items-center gap-1.5">
                    <IndiaFlag className="w-4 h-3 shrink-0" />
                    <span>Delhi NCR, India (R&D)</span>
                  </div>
                  <span className="text-[10px] font-mono text-teal-400 bg-teal-950/60 border border-teal-800/40 px-1.5 py-0.5 rounded">
                    IST
                  </span>
                </div>
                <a
                  href="tel:+919259418994"
                  className="hover:text-teal-400 transition-colors flex items-center gap-1.5 text-neutral-400 font-mono"
                >
                  <Phone className="w-3 h-3 text-neutral-500" /> +91 925941-8994
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="border-t border-neutral-800/80 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-mono">
          <div className="flex items-center gap-3">
            <span>© 2026 MIMC TECHNOLOGIES INC. ALL RIGHTS RESERVED.</span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy/"
              className="hover:text-neutral-300 transition-colors"
            >
              PRIVACY POLICY
            </Link>
            <span className="text-neutral-700">/</span>
            <Link
              href="/terms/"
              className="hover:text-neutral-300 transition-colors"
            >
              TERMS OF SERVICE
            </Link>
            <span className="text-neutral-700">/</span>
            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new Event("open-cookie-settings"));
                }
              }}
              className="hover:text-neutral-300 transition-colors uppercase cursor-pointer"
            >
              COOKIE SETTINGS
            </button>
            <span className="text-neutral-700">/</span>
            <span className="text-teal-500">ENTERPRISE EDITION V3.4</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
