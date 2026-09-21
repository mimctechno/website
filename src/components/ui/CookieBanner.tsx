"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, ShieldCheck } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user already consented
    const consent = localStorage.getItem("mimc_cookie_consent");
    if (!consent) {
      // Show banner after brief delay for smooth entrance
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 900);
      return () => clearTimeout(timer);
    }

    // Listen for custom event if user clicks "Cookie Settings" in footer
    const handleOpen = () => setIsVisible(true);
    window.addEventListener("open-cookie-settings", handleOpen);
    return () => window.removeEventListener("open-cookie-settings", handleOpen);
  }, []);

  const handleConsent = (choice: "accepted" | "essential") => {
    localStorage.setItem("mimc_cookie_consent", choice);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          role="region"
          aria-label="Cookie consent banner"
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 w-auto sm:w-[420px] max-w-full"
        >
          <div className="bg-white/95 backdrop-blur-md border border-[#E8E8E2] rounded-2xl p-5 shadow-2xl shadow-neutral-900/10 text-[#171717]">
            {/* Header with Icon & Close */}
            <div className="flex items-start justify-between gap-3 mb-2.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-teal-50 border border-teal-200/60 flex items-center justify-center text-teal-700 shrink-0">
                  <Cookie className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-heading text-[#171717] leading-none">
                    Cookie & Privacy Preferences
                  </h4>
                  <div className="flex items-center gap-1.5 mt-1 text-[11px] font-mono text-teal-700">
                    <ShieldCheck className="w-3 h-3 text-teal-600" />
                    <span>GDPR & DPDP 2026 Compliant</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleConsent("essential")}
                aria-label="Dismiss cookie banner"
                className="text-neutral-400 hover:text-neutral-700 transition-colors p-1 rounded-lg hover:bg-neutral-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body Description */}
            <p className="text-xs text-neutral-600 leading-relaxed mb-4">
              We use essential cookies for platform security and optional
              analytics to improve our software and API tools. You can customize
              your choice or review our{" "}
              <Link
                href="/privacy/"
                className="text-teal-700 hover:text-teal-900 underline underline-offset-2 font-medium"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                href="/terms/"
                className="text-teal-700 hover:text-teal-900 underline underline-offset-2 font-medium"
              >
                Terms of Service
              </Link>
              .
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => handleConsent("accepted")}
                className="flex-1 px-4 py-2.5 rounded-xl bg-[#111111] hover:bg-teal-700 text-white text-xs font-semibold shadow-xs hover:shadow-sm transition-all duration-200 active:scale-[0.98] cursor-pointer text-center"
              >
                Accept All
              </button>
              <button
                onClick={() => handleConsent("essential")}
                className="flex-1 px-4 py-2.5 rounded-xl bg-white hover:bg-neutral-50 text-neutral-700 text-xs font-medium border border-[#E8E8E2] hover:border-neutral-300 transition-all duration-200 active:scale-[0.98] cursor-pointer text-center"
              >
                Essential Only
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
