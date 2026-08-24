"use client";

import { Star, ShieldCheck } from "lucide-react";

export default function ServiceBadges({
  rating,
  reviewCount,
}: {
  rating: number;
  reviewCount: number;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-6">
      {/* 5-Star Rating Badge */}
      <div className="inline-flex items-center gap-2 bg-white border border-[#E8E8E2] px-3.5 py-1.5 rounded-full shadow-xs">
        <div className="flex text-amber-500">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-3.5 h-3.5 fill-current" />
          ))}
        </div>
        <div className="h-3.5 w-px bg-neutral-200 mx-0.5" />
        <span className="text-xs font-bold text-[#171717]">
          {rating.toFixed(1)}/5
        </span>
        <span className="text-[11px] text-neutral-500 font-medium">
          ({reviewCount} Enterprise Audits)
        </span>
      </div>

      {/* Verified Partner Badge */}
      <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200/60 px-3.5 py-1.5 rounded-full">
        <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-800">
          DEPLOYMENT READY · 99.99% SLA
        </span>
      </div>
    </div>
  );
}
