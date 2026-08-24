"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Database,
  Zap,
  Terminal,
  Globe,
  BarChart3,
  Shield,
  MapPin,
  Sparkles,
  Layers,
} from "lucide-react";
import Logo from "@/components/ui/Logo";

const SERVICES_MENU = [
  {
    title: "Enterprise ERP & Custom CRM",
    desc: "100% source code ownership, multi-location inventory & billing.",
    href: "/services/erp-crm",
    icon: Database,
    tag: "ERP/CRM",
  },
  {
    title: "Official Meta WhatsApp API",
    desc: "Meta BSP onboarding, green tick verification & high-volume broadcasts.",
    href: "/services/whatsapp-api",
    icon: Zap,
    tag: "OFFICIAL API",
  },
  {
    title: "Tally Prime WhatsApp Invoicing",
    desc: "Zero-latency automatic invoice & ledger dispatch directly from Tally.",
    href: "/services/tally-whatsapp-integration",
    icon: Terminal,
    tag: "TALLY SYNC",
  },
  {
    title: "Next.js Web & Technical SEO",
    desc: "Sub-second edge web platforms, 100/100 Core Web Vitals & CRO.",
    href: "/services/web-development",
    icon: Globe,
    tag: "WEB / CLOUD",
  },
  {
    title: "Technical Marketing & Growth",
    desc: "Programmatic search scaling, intent lead funnels & ROI attribution.",
    href: "/services/digital-marketing",
    icon: BarChart3,
    tag: "GROWTH",
  },
  {
    title: "Enterprise Architecture Advisory",
    desc: "System audits, legacy refactoring, security & cloud infrastructure.",
    href: "/services/enterprise-consulting",
    icon: Shield,
    tag: "CONSULTING",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
      setIsScrolled(currentScroll > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown on route change (React recommended state adjustment pattern)
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setServicesOpen(false);
    setMenuOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#E8E8E2] shadow-xs"
          : "bg-[#FAFAF8]/80 backdrop-blur-xs border-b border-transparent"
      }`}
    >
      {/* Scroll progress bar indicator */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-teal-600 transition-all duration-75 z-50"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <div className="max-w-7xl mx-auto px-6 py-3.5 flex justify-between items-center">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group transition-transform active:scale-95"
          aria-label="MIMC Technologies Home"
        >
          <Logo variant="light" />
        </Link>

        {/* Desktop Nav Links */}
        <nav
          className="hidden lg:flex items-center gap-7 text-sm font-medium"
          aria-label="Main Navigation"
        >
          {/* Services Mega-Dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`inline-flex items-center gap-1.5 py-1 text-sm transition-colors cursor-pointer ${
                pathname.startsWith("/services") || servicesOpen
                  ? "text-teal-800 font-semibold"
                  : "text-[#525252] hover:text-[#171717]"
              }`}
              aria-expanded={servicesOpen}
            >
              <span>Solutions</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180 text-teal-700" : "text-neutral-400"
                }`}
              />
            </button>

            {/* Dropdown Menu Modal */}
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[560px] animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="p-4 rounded-3xl bg-white border border-[#E8E8E2] shadow-2xl space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    {SERVICES_MENU.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="p-3 rounded-2xl hover:bg-teal-50/70 border border-transparent hover:border-teal-200/60 transition-all group block"
                      >
                        <div className="flex items-start gap-2.5">
                          <div className="p-2 rounded-xl bg-[#FAFAF8] border border-[#E8E8E2] group-hover:bg-teal-100/50 group-hover:border-teal-200 transition-colors text-teal-700 shrink-0">
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-[#171717] group-hover:text-teal-900 leading-snug mb-0.5">
                              {item.title}
                            </div>
                            <p className="text-[11px] text-neutral-500 line-clamp-2 leading-tight">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Dropdown Footer Strip */}
                  <div className="pt-3 border-t border-[#E8E8E2] flex items-center justify-between px-2 text-xs font-mono">
                    <Link
                      href="/services"
                      className="font-bold text-teal-700 hover:text-teal-900 inline-flex items-center gap-1"
                    >
                      <span>Explore All Capabilities</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                    <Link
                      href="/locations"
                      className="text-neutral-500 hover:text-neutral-900 inline-flex items-center gap-1"
                    >
                      <MapPin className="w-3 h-3 text-teal-600" />
                      <span>30+ Global Hubs</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/locations"
            className={`transition-colors relative py-1 text-sm ${
              pathname === "/locations"
                ? "text-teal-800 font-semibold"
                : "text-[#525252] hover:text-[#171717]"
            }`}
          >
            Locations
          </Link>

          <Link
            href="/partners"
            className={`transition-colors relative py-1 text-sm ${
              pathname === "/partners"
                ? "text-teal-800 font-semibold"
                : "text-[#525252] hover:text-[#171717]"
            }`}
          >
            Partners
          </Link>

          <Link
            href="/careers"
            className={`transition-colors relative py-1 text-sm inline-flex items-center gap-1.5 ${
              pathname.startsWith("/careers")
                ? "text-teal-800 font-semibold"
                : "text-[#525252] hover:text-[#171717]"
            }`}
          >
            <span>Careers</span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-1.5 py-0.2 rounded-full">
              HIRING
            </span>
          </Link>

          <Link
            href="/blog"
            className={`transition-colors relative py-1 text-sm ${
              pathname.startsWith("/blog")
                ? "text-teal-800 font-semibold"
                : "text-[#525252] hover:text-[#171717]"
            }`}
          >
            Insights
          </Link>

          <Link
            href="/about"
            className={`transition-colors relative py-1 text-sm ${
              pathname === "/about"
                ? "text-teal-800 font-semibold"
                : "text-[#525252] hover:text-[#171717]"
            }`}
          >
            About
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#111111] hover:bg-teal-700 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-xs active:scale-[0.98]"
          >
            <span>Schedule Discovery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          className="lg:hidden p-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-xl transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="lg:hidden border-t border-[#E8E8E2] bg-[#FAFAF8] px-6 py-5 space-y-4 shadow-lg max-h-[85vh] overflow-y-auto"
        >
          {/* Mobile Services Accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between w-full py-2 text-base font-semibold text-[#171717]"
            >
              <span>Solutions & Architectures</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  mobileServicesOpen ? "rotate-180 text-teal-700" : ""
                }`}
              />
            </button>

            {mobileServicesOpen && (
              <div className="pl-3 py-2 space-y-2 border-l-2 border-teal-600 mt-1">
                {SERVICES_MENU.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-1.5 text-xs text-neutral-600 hover:text-teal-800 font-medium"
                  >
                    {item.title}
                  </Link>
                ))}
                <Link
                  href="/services"
                  onClick={() => setMenuOpen(false)}
                  className="block pt-2 text-xs font-bold text-teal-700 uppercase font-mono"
                >
                  › View All Capabilities
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/locations"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#171717]"
          >
            Global Locations (30+)
          </Link>

          <Link
            href="/partners"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#171717]"
          >
            Cloud Partners & Ecosystem
          </Link>

          <Link
            href="/careers"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-between py-2 text-sm font-semibold text-[#171717]"
          >
            <span>Careers</span>
            <span className="text-[10px] font-mono font-bold uppercase text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
              WE&apos;RE HIRING
            </span>
          </Link>

          <Link
            href="/blog"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#171717]"
          >
            Engineering Insights Blog
          </Link>

          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#171717]"
          >
            About Company
          </Link>

          <div className="pt-3 border-t border-[#E8E8E2]">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#111111] hover:bg-teal-700 text-white font-semibold text-xs uppercase tracking-wider text-center shadow-xs"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
