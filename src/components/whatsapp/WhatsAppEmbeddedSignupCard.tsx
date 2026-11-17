"use client";

import {
  CheckCircle2,
  Zap,
  ArrowRight,
  ShieldCheck,
  Lock,
  ExternalLink,
} from "lucide-react";

export default function WhatsAppEmbeddedSignupCard() {
  const steps = [
    {
      num: "01",
      title: "Login with Meta Business",
      desc: "Authenticate using your official Facebook / Meta Business Manager credentials in an encrypted popup dialog.",
    },
    {
      num: "02",
      title: "Register Your Business Number",
      desc: "Assign a clean phone number or port your existing company mobile or landline without losing message history.",
    },
    {
      num: "03",
      title: "Dispatch Live via MIMC Cloud",
      desc: "Your WABA and phone number are automatically provisioned. Sandbox API tokens and webhooks activate instantly.",
    },
  ];

  const rateCategories = [
    {
      cat: "Utility Conversations",
      desc: "Transaction receipts, order confirmations, billing alerts, shipping updates.",
      multiplier: "Lowest Official Base Rate",
      markup: "0% Surcharge",
    },
    {
      cat: "Authentication (OTP)",
      desc: "Secure 2-factor verification codes, login tokens, password resets.",
      multiplier: "Sub-Second Global Delivery",
      markup: "0% Surcharge",
    },
    {
      cat: "Service (Support)",
      desc: "Customer-initiated inquiries, technical support tickets, two-way chats.",
      multiplier: "Free 1,000 / mo included by Meta",
      markup: "0% Surcharge",
    },
    {
      cat: "Marketing Broadcasts",
      desc: "Promotional campaigns, seasonal offers, product launches, re-engagement.",
      multiplier: "Tiered Volume Base Rate",
      markup: "0% Surcharge",
    },
  ];

  return (
    <section className="my-16 sm:my-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: 3-Minute Embedded Signup Flow */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-teal-50/70 via-white to-emerald-50/40 border border-teal-200/80 shadow-xs flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/70 border border-teal-300 text-teal-900 text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <Zap className="w-3.5 h-3.5 text-teal-700" />
              <span>OFFICIAL META EMBEDDED SIGNUP</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#171717] font-heading mb-3">
              Connect Your WhatsApp Business Account in 3 Minutes
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed mb-6">
              Skip days of email exchanges and complex manual paperwork. As an
              approved Meta Cloud API Tech Provider, MIMC lets you onboard
              directly using Meta&apos;s native self-serve dialog.
            </p>

            <div className="space-y-4 mb-8">
              {steps.map((s, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-teal-700 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    {s.num}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#171717]">
                      {s.title}
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed mt-0.5">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-teal-200/60 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#inquire"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#111111] hover:bg-teal-700 text-white font-semibold text-sm transition-all shadow-xs active:scale-95"
            >
              <span>Start 3-Minute Meta Onboarding</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <div className="flex items-center gap-1.5 text-xs font-mono text-teal-800">
              <ShieldCheck className="w-4 h-4 text-teal-700" />
              <span>Meta App Review Approved</span>
            </div>
          </div>
        </div>

        {/* Right: Transparent Meta Rate Card */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E8E2] shadow-xs flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-700 text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <Lock className="w-3.5 h-3.5 text-teal-600" />
              <span>DIRECT META CONVERSATION PRICING</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#171717] font-heading mb-3">
              Official Base Rates. Zero Hidden Markups.
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed mb-6">
              You pay Meta directly for 24-hour conversation windows based on
              official regional price tiers. MIMC adds 0% surcharge on your
              message traffic.
            </p>

            <div className="space-y-3">
              {rateCategories.map((rc, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-[#FAFAF8] border border-[#E8E8E2] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div>
                    <div className="font-bold text-xs sm:text-sm text-[#171717]">
                      {rc.cat}
                    </div>
                    <div className="text-[11px] text-neutral-500 mt-0.5">
                      {rc.desc}
                    </div>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded border border-emerald-300">
                      {rc.markup}
                    </span>
                    <div className="text-[10px] text-neutral-400 font-mono mt-0.5">
                      {rc.multiplier}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-[#E8E8E2] flex items-center justify-between text-xs text-neutral-500 font-mono">
            <span>
              * Billed in 24-hour conversation sessions per Meta official
              guidelines.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
