"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Database,
  Zap,
  Terminal,
  Cloud,
  Globe,
  BarChart3,
  Shield,
  MapPin,
  Sparkles,
  Phone,
  MessageSquare,
  Mail,
  Briefcase,
  BookOpen,
  Building2,
  ChevronRight,
} from "lucide-react";
import Logo from "@/components/ui/Logo";

const SERVICES_MENU = [
  {
    title: "Enterprise ERP & Custom CRM",
    desc: "100% source code ownership, multi-location inventory & billing.",
    href: "/services/erp-crm/",
    icon: Database,
    tag: "ERP/CRM",
    accent: "from-blue-500/10 to-indigo-500/10 text-blue-700",
  },
  {
    title: "Official Meta WhatsApp API",
    desc: "Meta BSP onboarding, green tick verification & high-volume broadcasts.",
    href: "/services/whatsapp-api/",
    icon: Zap,
    tag: "OFFICIAL API",
    accent: "from-emerald-500/10 to-teal-500/10 text-emerald-700",
  },
  {
    title: "Tally on Cloud Hosting",
    desc: "Access Tally Prime on Mac, Windows & Browser with 99.99% SLA.",
    href: "/services/tally-cloud/",
    icon: Cloud,
    tag: "TALLY CLOUD",
    accent: "from-sky-500/10 to-blue-500/10 text-sky-700",
  },
  {
    title: "Tally Prime WhatsApp Invoicing",
    desc: "Zero-latency automatic invoice & ledger dispatch directly from Tally.",
    href: "/services/tally-whatsapp-integration/",
    icon: Terminal,
    tag: "TALLY SYNC",
    accent: "from-teal-500/10 to-cyan-500/10 text-teal-700",
  },
  {
    title: "Next.js Web & Technical SEO",
    desc: "Sub-second edge web platforms, 100/100 Core Web Vitals & CRO.",
    href: "/services/web-development/",
    icon: Globe,
    tag: "WEB / CLOUD",
    accent: "from-purple-500/10 to-pink-500/10 text-purple-700",
  },
  {
    title: "Technical Marketing & Growth",
    desc: "Programmatic search scaling, intent lead funnels & ROI attribution.",
    href: "/services/digital-marketing/",
    icon: BarChart3,
    tag: "GROWTH",
    accent: "from-amber-500/10 to-orange-500/10 text-amber-700",
  },
  {
    title: "Enterprise Architecture Advisory",
    desc: "System audits, legacy refactoring, security & cloud infrastructure.",
    href: "/services/enterprise-consulting/",
    icon: Shield,
    tag: "CONSULTING",
    accent: "from-slate-500/10 to-neutral-500/10 text-slate-700",
  },
];

const QUICK_NAV = [
  {
    label: "Global Hubs",
    href: "/locations",
    icon: MapPin,
    badge: "100+ Cities",
  },
  {
    label: "Partners & Cloud",
    href: "/partners",
    icon: Sparkles,
  },
  {
    label: "Careers",
    href: "/careers",
    icon: Briefcase,
    badge: "HIRING",
    badgeColor: "bg-emerald-100/80 text-emerald-800",
  },
  {
    label: "Insights & Guides",
    href: "/blog",
    icon: BookOpen,
  },
  {
    label: "About Company",
    href: "/about",
    icon: Building2,
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
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalScroll =
            document.documentElement.scrollHeight - window.innerHeight;
          const currentScroll = window.scrollY;
          if (totalScroll > 0) {
            setScrollProgress((currentScroll / totalScroll) * 100);
          }
          setIsScrolled(currentScroll > 20);
          ticking = false;
        });
        ticking = true;
      }
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close dropdown on route change (React recommended state adjustment pattern)
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setServicesOpen(false);
    setMenuOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        menuOpen
          ? "bg-[#FAFAF8] border-b border-[#E8E8E2]"
          : isScrolled
            ? "bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#E8E8E2] shadow-xs"
            : "bg-[#FAFAF8]/80 backdrop-blur-xs border-b border-transparent"
      }`}
    >
      {/* Scroll progress bar indicator */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-teal-500 via-teal-600 to-emerald-500 transition-all duration-75 z-50"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-label="Reading progress"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-3 sm:py-3.5 flex justify-between items-center">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group transition-transform active:scale-95 flex items-center"
          aria-label="MIMC Technologies Home"
          onClick={() => setMenuOpen(false)}
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
                      <span>100+ Global Hubs</span>
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

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden p-2 rounded-xl text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 active:scale-90 transition-all cursor-pointer focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-neutral-900" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6 text-neutral-900" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Full-Screen Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            aria-label="Mobile Navigation"
            className="fixed inset-x-0 top-[57px] sm:top-[61px] h-[calc(100dvh-57px)] sm:h-[calc(100dvh-61px)] w-full z-50 bg-[#FAFAF8] overflow-y-auto lg:hidden flex flex-col justify-between px-5 pt-3 pb-16 divide-y divide-[#E8E8E2] border-t border-[#E8E8E2]"
          >
            <div className="space-y-3 pt-1">
              {/* Section 1: Enterprise Solutions Accordion */}
              <div className="rounded-2xl bg-white border border-[#E8E8E2] p-3 shadow-2xs">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full py-1 text-xs font-mono font-bold uppercase tracking-wider text-teal-800 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-teal-600" />
                    <span>Solutions & Architectures</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-teal-700 transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 gap-2 pt-3 pb-1">
                        {SERVICES_MENU.map((item, idx) => {
                          const isActive = pathname === item.href;
                          return (
                            <Link
                              key={idx}
                              href={item.href}
                              onClick={() => setMenuOpen(false)}
                              className={`p-2.5 rounded-xl border transition-all flex items-start gap-2.5 active:scale-[0.99] ${
                                isActive
                                  ? "bg-teal-50/80 border-teal-300 shadow-2xs"
                                  : "bg-[#FAFAF8] border-[#E8E8E2] hover:border-teal-200 hover:bg-white"
                              }`}
                            >
                              <div className="p-2 rounded-lg bg-white border border-[#E8E8E2] shrink-0 text-teal-700">
                                <item.icon className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-1.5 mb-0.5">
                                  <span className="text-xs font-bold text-[#171717] font-heading truncate">
                                    {item.title}
                                  </span>
                                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-1.5 py-0.2 rounded border border-teal-200/50 shrink-0">
                                    {item.tag}
                                  </span>
                                </div>
                                <p className="text-[11px] text-neutral-500 line-clamp-1 leading-tight">
                                  {item.desc}
                                </p>
                              </div>
                              <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0 self-center" />
                            </Link>
                          );
                        })}

                        <Link
                          href="/services"
                          onClick={() => setMenuOpen(false)}
                          className="mt-1 py-2 px-3 rounded-lg bg-teal-50 border border-teal-200/60 text-teal-900 flex items-center justify-between text-xs font-bold font-mono uppercase tracking-wide hover:bg-teal-100/70 transition-colors"
                        >
                          <span>Explore All 6 Architectures</span>
                          <ArrowRight className="w-3.5 h-3.5 text-teal-700" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Section 2: Core Directory Links */}
              <div className="space-y-1 pt-1">
                {QUICK_NAV.map((nav, idx) => {
                  const isActive =
                    nav.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(nav.href);
                  return (
                    <Link
                      key={idx}
                      href={nav.href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center justify-between px-3.5 py-3 rounded-xl transition-all font-medium text-sm active:scale-[0.99] ${
                        isActive
                          ? "bg-[#111111] text-white font-semibold shadow-xs"
                          : "text-neutral-800 bg-white hover:bg-neutral-50 border border-[#E8E8E2]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <nav.icon
                          className={`w-4 h-4 ${
                            isActive ? "text-teal-400" : "text-neutral-600"
                          }`}
                        />
                        <span>{nav.label}</span>
                      </div>
                      {nav.badge && (
                        <span
                          className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            isActive
                              ? "bg-teal-800 text-teal-100"
                              : nav.badgeColor ||
                                "bg-neutral-100 text-neutral-700 border border-neutral-200"
                          }`}
                        >
                          {nav.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Section 3: Direct Actions & Contact Strip */}
            <div className="pt-4 space-y-3 mt-4">
              <div className="grid grid-cols-3 gap-2">
                <a
                  href="https://wa.me/14168578831?text=Hi%20MIMC%20Technologies%2C%20I%20would%20like%20to%20inquire%20about%20your%20enterprise%20software%2C%20WhatsApp%20API%2C%20and%20ERP%20solutions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-[#E8E8E2] hover:border-emerald-400 hover:bg-emerald-50/50 flex flex-col items-center justify-center gap-1 transition-all text-center group shadow-2xs"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-bold text-neutral-800">
                    WhatsApp
                  </span>
                  <span className="text-[9px] font-mono text-emerald-700 font-bold uppercase">
                    24/7 Live
                  </span>
                </a>

                <a
                  href="tel:+14168578831"
                  className="p-2.5 rounded-xl bg-white border border-[#E8E8E2] hover:border-teal-400 hover:bg-teal-50/50 flex flex-col items-center justify-center gap-1 transition-all text-center group shadow-2xs"
                >
                  <Phone className="w-4 h-4 text-teal-700 group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-bold text-neutral-800">
                    Call Hub
                  </span>
                  <span className="text-[9px] font-mono text-neutral-400">
                    Direct CA/IN
                  </span>
                </a>

                <a
                  href="mailto:info@mimctechnologies.com"
                  className="p-2.5 rounded-xl bg-white border border-[#E8E8E2] hover:border-teal-400 hover:bg-teal-50/50 flex flex-col items-center justify-center gap-1 transition-all text-center group shadow-2xs"
                >
                  <Mail className="w-4 h-4 text-teal-700 group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-bold text-neutral-800">
                    Email
                  </span>
                  <span className="text-[9px] font-mono text-neutral-400">
                    &lt;2h SLA
                  </span>
                </a>
              </div>

              {/* Primary CTA */}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-[#111111] hover:bg-teal-700 text-white font-semibold text-xs uppercase tracking-wider text-center shadow-md active:scale-[0.98] transition-all"
              >
                <span>Schedule Architecture Review</span>
                <ArrowRight className="w-4 h-4 text-teal-400" />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
