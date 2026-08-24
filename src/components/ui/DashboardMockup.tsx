"use client";

import {
  BarChart3,
  Users,
  MessageSquare,
  Activity,
  Settings,
  Lock,
  Zap,
} from "lucide-react";

interface DashboardMockupProps {
  title: string;
  stats: { label: string; value: string }[];
  tableHeaders: string[];
  tableRows: string[][];
}

export default function DashboardMockup({
  title,
  stats,
  tableHeaders,
  tableRows,
}: DashboardMockupProps) {
  return (
    <div className="w-full rounded-2xl bg-white border border-[#E8E8E2] overflow-hidden shadow-lg flex flex-col sm:flex-row">
      {/* Sidebar Navigation */}
      <div className="w-1/4 max-w-[190px] border-r border-[#E8E8E2] bg-[#FAFAF8] p-5 flex flex-col justify-between hidden sm:flex">
        <div className="space-y-4">
          <div className="flex items-center gap-2.5 pb-3 border-b border-[#E8E8E2]">
            <div className="w-6 h-6 rounded-md bg-[#111111] flex items-center justify-center text-white text-[10px] font-bold">
              M
            </div>
            <span className="font-heading font-bold text-xs text-[#171717]">
              Console 3.4
            </span>
          </div>

          <div className="space-y-1 text-xs font-medium">
            {[
              { icon: BarChart3, label: "Overview", active: true },
              { icon: Users, label: "Accounts", active: false },
              { icon: MessageSquare, label: "Dispatch", active: false },
              { icon: Activity, label: "Telemetry", active: false },
              { icon: Settings, label: "Config", active: false },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg transition-colors ${
                  item.active
                    ? "bg-teal-50 text-teal-800 font-semibold"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                <item.icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-[10px] font-mono text-neutral-400 border-t border-[#E8E8E2] pt-3 flex items-center gap-1">
          <Lock className="w-3 h-3 text-teal-600" />
          <span>SOC2 ENCRYPTED</span>
        </div>
      </div>

      {/* Main Console Content */}
      <div className="flex-1 p-5 sm:p-6 flex flex-col gap-4 sm:gap-5 bg-white">
        <header className="flex justify-between items-center border-b border-[#E8E8E2] pb-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-[#171717] ml-2">
              {title}
            </h3>
          </div>
          <div className="inline-flex items-center gap-1.5 text-[10px] font-mono font-medium text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
            LIVE TELEMETRY
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 min-[400px]:grid-cols-3 gap-3">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-[#FAFAF8] border border-[#E8E8E2] p-3 rounded-xl"
            >
              <div className="text-neutral-500 text-[10px] uppercase font-mono tracking-wider mb-0.5 truncate">
                {s.label}
              </div>
              <div className="text-base sm:text-xl font-extrabold text-[#171717] font-heading truncate">
                {s.value}
              </div>
            </div>
          ))}
        </div>

        {/* Table View */}
        <div className="border border-[#E8E8E2] rounded-xl overflow-hidden bg-[#FAFAF8]/50">
          <table className="w-full text-left text-[11px] font-sans border-collapse">
            <thead className="bg-[#FAFAF8] text-neutral-500 uppercase tracking-wider text-[10px] font-mono border-b border-[#E8E8E2]">
              <tr>
                {tableHeaders.map((h, i) => (
                  <th key={i} className="p-2.5 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E8E2]">
              {tableRows.map((row, i) => (
                <tr
                  key={i}
                  className="hover:bg-white transition-colors text-neutral-800"
                >
                  {row.map((cell, j) => (
                    <td key={j} className="p-2.5 font-medium truncate">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
