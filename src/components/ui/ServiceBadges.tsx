import { Star } from "lucide-react";

export default function ServiceBadges({
  rating,
  reviewCount,
}: {
  rating: number;
  reviewCount: number;
}) {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-8">
      {/* 5-Star Badge */}
      <div className="inline-flex items-center gap-2 border border-[var(--color-cyber-border)] bg-[var(--color-cyber-card)] px-3 py-1.5 cyber-chamfer-reverse group hover:border-[#ffb800]/50 transition-colors">
        <div className="flex text-[#ffb800]">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-3.5 h-3.5 fill-current" />
          ))}
        </div>
        <div className="h-4 w-px bg-[var(--color-cyber-border)] mx-1"></div>
        <span className="font-[var(--font-cyber-accent)] text-xs uppercase tracking-widest text-white group-hover:text-[#ffb800] transition-colors">
          {rating.toFixed(1)}/5
        </span>
        <span className="font-[var(--font-cyber-accent)] text-[10px] uppercase tracking-widest text-[var(--color-cyber-muted-fg)] ml-1">
          ({reviewCount} REVIEWS)
        </span>
      </div>

      {/* In-Stock Badge */}
      <div className="inline-flex items-center gap-2 border border-[var(--color-cyber-accent)]/30 bg-[var(--color-cyber-accent)]/5 px-3 py-1.5 cyber-chamfer">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-3 h-3 bg-[var(--color-cyber-accent)] rounded-full animate-ping opacity-75"></div>
          <div className="w-1.5 h-1.5 bg-[var(--color-cyber-accent)] rounded-full relative z-10"></div>
        </div>
        <span className="font-[var(--font-cyber-accent)] text-[10px] sm:text-xs uppercase tracking-widest text-[var(--color-cyber-accent)] font-bold">
          STATUS: IN_STOCK // DEPLOYMENT READY
        </span>
      </div>
    </div>
  );
}
