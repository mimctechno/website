"use client";
import { useEffect, useState } from "react";

interface TerminalHeroVisualProps {
  lines: string[];
  accentColor?: string;
}

export default function TerminalHeroVisual({
  lines,
  accentColor = "var(--color-cyber-accent)",
}: TerminalHeroVisualProps) {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((v) => (v < lines.length ? v + 1 : v));
    }, 800);
    return () => clearInterval(timer);
  }, [lines]);

  return (
    <div className="relative h-[450px] p-[2px] cyber-chamfer-reverse bg-gradient-to-br from-[var(--color-cyber-accent)] to-[var(--color-cyber-accent2)] font-mono group">
      <div className="absolute inset-[2px] cyber-chamfer-reverse bg-[#050508] border border-[var(--color-cyber-border)] p-6 md:p-10 overflow-hidden flex flex-col relative">
        {/* Terminal Header */}
        <div className="flex justify-between items-center border-b border-[var(--color-cyber-border)] pb-2 mb-6 opacity-50 text-[10px] md:text-xs">
          <span>root@mimc-core:~#</span>
          <span>SYSTEM.EXECUTE()</span>
        </div>

        {/* Terminal Body */}
        <div
          className="flex-1 flex flex-col gap-3 text-sm md:text-base"
          style={{ color: accentColor }}
        >
          {lines.slice(0, visibleLines).map((line, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-white/30">&gt;</span>
              <span className="animate-pulse">{line}</span>
            </div>
          ))}
          {visibleLines < lines.length && (
            <div className="flex gap-3">
              <span className="text-white/30">&gt;</span>
              <span className="w-2 md:w-3 h-4 md:h-5 bg-current animate-blink" />
            </div>
          )}
          {visibleLines >= lines.length && (
            <div className="mt-8 border border-current/30 bg-current/10 p-4 md:p-6 cyber-chamfer w-full max-w-sm">
              <div className="text-white tracking-widest uppercase text-xs md:text-sm mb-2 font-bold">
                STATUS: OPTIMAL
              </div>
              <div className="text-[10px] md:text-xs text-[var(--color-cyber-muted-fg)] leading-relaxed uppercase tracking-widest">
                All systems active. Handshake verified.
                <br />
                Standing by for input...
              </div>
              <span className="inline-block w-2 h-3 mt-4 bg-current animate-blink" />
            </div>
          )}
        </div>

        {/* Scanline overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(transparent_50%,rgba(255,255,255,1)_50%)] bg-[length:100%_4px] z-10" />
      </div>
    </div>
  );
}
