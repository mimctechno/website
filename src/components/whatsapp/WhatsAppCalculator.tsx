"use client";

import { useState } from "react";
import {
  Calculator,
  ArrowRight,
  Sparkles,
  TrendingDown,
  ShieldCheck,
} from "lucide-react";

export default function WhatsAppCalculator() {
  const [volume, setVolume] = useState<number>(50000);
  const [agents, setAgents] = useState<number>(5);

  // Aggregator typical costs:
  // - Platform base plan: ~$99/mo ($1,188/yr)
  // - Per-agent fee: ~$39/agent/mo
  // - Aggregator conversation markup: ~$0.0028 per message
  const aggregatorAnnualBase = 1188;
  const aggregatorAgentCost = agents * 39 * 12;
  const aggregatorMarkup = volume * 0.0028 * 12;
  const totalAggregatorAnnual = Math.round(
    aggregatorAnnualBase + aggregatorAgentCost + aggregatorMarkup,
  );

  // MIMC Direct Meta Cost:
  // - Direct Meta base rates (no middleman markup)
  // - $0 per-agent user fee
  // - Flat infrastructure maintenance & gateway monitoring (~$49/mo flat or $588/yr)
  const mimcAnnual = Math.round(588);

  const annualSavings = Math.max(0, totalAggregatorAnnual - mimcAnnual);
  const savingsPercent = Math.round(
    (annualSavings / totalAggregatorAnnual) * 100,
  );

  return (
    <section className="my-16 sm:my-20 rounded-3xl bg-gradient-to-br from-[#111111] via-[#161616] to-[#0D0D0D] text-white p-6 sm:p-10 lg:p-12 border border-neutral-800 shadow-xl relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Sliders & Controls */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-teal-400 uppercase tracking-widest mb-2">
              <Calculator className="w-4 h-4" />
              <span>INTERACTIVE ROI CALCULATOR</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-heading">
              How Much Are You Overpaying With SaaS Aggregators?
            </h2>
            <p className="text-sm text-neutral-400 mt-2">
              Calculate the money your enterprise saves every year by
              eliminating third-party per-agent fees and per-message surcharges.
            </p>
          </div>

          {/* Slider 1: Message Volume */}
          <div className="space-y-3 bg-neutral-900/60 p-5 rounded-2xl border border-neutral-800">
            <div className="flex justify-between items-center text-sm font-semibold">
              <span className="text-neutral-300">
                Estimated Monthly Message Volume:
              </span>
              <span className="font-mono text-teal-400 font-bold text-base">
                {volume.toLocaleString()} msgs/mo
              </span>
            </div>
            <input
              type="range"
              min={5000}
              max={500000}
              step={5000}
              value={volume}
              aria-label="Estimated Monthly Message Volume"
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-teal-400"
            />
            <div className="flex justify-between text-[11px] font-mono text-neutral-500">
              <span>5,000</span>
              <span>100,000</span>
              <span>250,000</span>
              <span>500,000+</span>
            </div>
          </div>

          {/* Slider 2: Support Agents */}
          <div className="space-y-3 bg-neutral-900/60 p-5 rounded-2xl border border-neutral-800">
            <div className="flex justify-between items-center text-sm font-semibold">
              <span className="text-neutral-300">
                Number of Support Agents / Users:
              </span>
              <span className="font-mono text-teal-400 font-bold text-base">
                {agents} {agents === 1 ? "Agent" : "Agents"}
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              value={agents}
              aria-label="Number of Support Agents / Users"
              onChange={(e) => setAgents(Number(e.target.value))}
              className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-teal-400"
            />
            <div className="flex justify-between text-[11px] font-mono text-neutral-500">
              <span>1 Agent</span>
              <span>10 Agents</span>
              <span>20 Agents</span>
              <span>30 Agents</span>
            </div>
          </div>
        </div>

        {/* Right Column: Live Savings Scoreboard */}
        <div className="lg:col-span-5 bg-neutral-900/90 border border-neutral-800 p-6 sm:p-8 rounded-3xl relative">
          <div className="space-y-5">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 flex items-center justify-between">
              <span>PROJECTED SPEND ANALYSIS</span>
              <span className="text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded text-[10px]">
                {savingsPercent}% REDUCTION
              </span>
            </div>

            <div className="space-y-2 border-b border-neutral-800 pb-4">
              <div className="flex justify-between text-xs text-neutral-400">
                <span>Traditional SaaS Aggregator (Wati/Twilio):</span>
                <span className="font-mono text-rose-400 font-semibold line-through">
                  ${totalAggregatorAnnual.toLocaleString()}/yr
                </span>
              </div>
              <div className="flex justify-between text-xs text-neutral-400">
                <span>MIMC Direct Meta Infrastructure:</span>
                <span className="font-mono text-teal-400 font-semibold">
                  ${mimcAnnual.toLocaleString()}/yr
                </span>
              </div>
            </div>

            {/* Big Highlight Box */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/60 to-teal-950/60 border border-emerald-800/40 text-center">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-300 font-bold mb-1 flex items-center justify-center gap-1.5">
                <TrendingDown className="w-4 h-4 text-emerald-400" />
                <span>YOUR ESTIMATED ANNUAL SAVINGS:</span>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
                ${annualSavings.toLocaleString()}
                <span className="text-base text-neutral-300 font-normal">
                  {" "}
                  / year
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 mt-1">
                Direct Meta billing · $0 per-agent fees · 0% message surcharge
              </p>
            </div>

            <a
              href="#inquire"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-teal-500 hover:bg-teal-400 text-neutral-950 font-bold text-sm shadow-md transition-all active:scale-95"
            >
              <span>Lock Direct Meta Rates & Onboard</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="text-[11px] text-center font-mono text-neutral-500 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>Includes Official Meta Green Tick Assistance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
