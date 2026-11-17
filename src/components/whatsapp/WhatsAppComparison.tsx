"use client";

import { Check, X, AlertTriangle, ShieldCheck, Zap } from "lucide-react";

export default function WhatsAppComparison() {
  const comparisonRows = [
    {
      feature: "API Gateway Architecture",
      mimc: {
        text: "Direct Meta Cloud API (v20+)",
        highlight: true,
        sub: "Zero intermediary hops, Meta SLA",
      },
      aggregators: {
        text: "3rd-Party Proxy Relays",
        sub: "Wati / Twilio / AiSensy queue servers",
      },
      unofficial: {
        text: "Unofficial Web Scrapers",
        sub: "Browser emulator scripts (Puppeteer)",
      },
    },
    {
      feature: "Per-Message Markup",
      mimc: {
        text: "0% Surcharge",
        highlight: true,
        sub: "Pay direct Meta base conversation rates",
      },
      aggregators: {
        text: "+15% to 40% Markup",
        sub: "Inflated margin on every conversation",
      },
      unofficial: {
        text: "Unstable / Flat Rate",
        sub: "Frequent billing disruptions",
      },
    },
    {
      feature: "Monthly Per-Seat Agent Fees",
      mimc: {
        text: "$0 / Unlimited Agents",
        highlight: true,
        sub: "Self-hosted / custom agent dashboards",
      },
      aggregators: {
        text: "$29 – $79 / Agent / Mo",
        sub: "Escalating monthly subscription tax",
      },
      unofficial: {
        text: "N/A (Single device)",
        sub: "Simultaneous access crashes session",
      },
    },
    {
      feature: "Phone Number Ban Risk",
      mimc: {
        text: "0% Risk (Official Meta SLA)",
        highlight: true,
        sub: "Approved WABA & Meta compliance",
      },
      aggregators: {
        text: "Low (Shared Tenant Risk)",
        sub: "Susceptible to provider-level outages",
      },
      unofficial: {
        text: "Critical (Permanent Bans)",
        sub: "Algorithm detects bot; permanent loss",
      },
    },
    {
      feature: "Event-Driven Webhook Dispatch",
      mimc: {
        text: "Sub-Second Direct Stream",
        highlight: true,
        sub: "Instant ERP/CRM database webhooks",
      },
      aggregators: {
        text: "Delayed Multi-Hop Sync",
        sub: "Requires Zapier/Make or polled CSVs",
      },
      unofficial: {
        text: "Unreliable / Crashes",
        sub: "High packet drop rate",
      },
    },
    {
      feature: "Meta Embedded Signup (3-Min)",
      mimc: {
        text: "Official 1-Click Meta Login",
        highlight: true,
        sub: "Instant WABA provisioning via Meta",
      },
      aggregators: {
        text: "Proprietary Sign-in Flow",
        sub: "Locked into their proprietary cloud",
      },
      unofficial: {
        text: "QR Code Scan (Insecure)",
        sub: "Exposes session keys locally",
      },
    },
    {
      feature: "Data Privacy & Governance",
      mimc: {
        text: "SOC 2 Type II & ISO 27001",
        highlight: true,
        sub: "Bank-grade direct cloud encryption",
      },
      aggregators: {
        text: "Stored in Vendor Cloud",
        sub: "Customer chats hosted on 3rd-party silos",
      },
      unofficial: {
        text: "Zero Security Compliance",
        sub: "Plain-text storage on local PC",
      },
    },
    {
      feature: "Official Green Tick (OBA) Setup",
      mimc: {
        text: "Direct Fast-Track Assistance",
        highlight: true,
        sub: "Handled directly via Meta Business Manager",
      },
      aggregators: {
        text: "Expensive Add-On Upsell",
        sub: "Additional agency fees charged",
      },
      unofficial: {
        text: "Impossible",
        sub: "Unofficial lines cannot be verified",
      },
    },
  ];

  return (
    <section className="my-16 sm:my-20">
      <div className="mb-8">
        <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block mb-1">
          [ THE ENTERPRISE DIFFERENCE ]
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717]">
          Direct Meta Cloud API vs. 3rd-Party SaaS Aggregators
        </h2>
        <p className="text-sm text-neutral-600 mt-2 max-w-3xl">
          Why growing enterprises choose MIMC&apos;s direct Meta infrastructure
          over expensive middlemen who add per-message markups and per-agent
          monthly fees.
        </p>
      </div>

      <div className="overflow-x-auto rounded-3xl border border-[#E8E8E2] bg-white shadow-xs">
        <table className="w-full text-left border-collapse min-w-[760px]">
          <thead>
            <tr className="border-b border-[#E8E8E2] bg-[#FAFAF8]">
              <th className="py-4 px-6 text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 w-1/4">
                Capability / Architecture
              </th>
              <th className="py-4 px-6 text-xs font-mono font-bold uppercase tracking-wider text-teal-800 bg-teal-50/70 border-x border-teal-100 w-1/3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
                  <span>MIMC TECHNOLOGIES (DIRECT META)</span>
                </div>
              </th>
              <th className="py-4 px-6 text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 w-1/4">
                SaaS Aggregators (Wati, Twilio, AiSensy)
              </th>
              <th className="py-4 px-6 text-xs font-mono font-bold uppercase tracking-wider text-rose-700/80 w-1/5">
                Unofficial Bots / Scrapers
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E8E8E2] text-sm">
            {comparisonRows.map((row, idx) => (
              <tr
                key={idx}
                className="hover:bg-[#F9F9F7] transition-colors group"
              >
                <td className="py-4 px-6 font-semibold text-[#171717]">
                  {row.feature}
                </td>
                <td className="py-4 px-6 bg-teal-50/40 border-x border-teal-100">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-teal-900">
                        {row.mimc.text}
                      </div>
                      <div className="text-[11px] text-teal-700/80 font-normal mt-0.5">
                        {row.mimc.sub}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 text-neutral-600">
                  <div>
                    <div className="font-medium text-[#171717]">
                      {row.aggregators.text}
                    </div>
                    <div className="text-[11px] text-neutral-500 mt-0.5">
                      {row.aggregators.sub}
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 text-neutral-500">
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-rose-900">
                        {row.unofficial.text}
                      </div>
                      <div className="text-[11px] text-neutral-400 mt-0.5">
                        {row.unofficial.sub}
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
