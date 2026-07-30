export default function BrowserMockup({
  title = "mimc.tech/enterprise",
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden bg-[#050508] border border-[var(--color-cyber-border)] shadow-[0_0_30px_rgba(0,255,170,0.1)] hover:shadow-[0_0_50px_rgba(0,255,170,0.2)] transition-shadow duration-500 flex flex-col group">
      {/* Browser Chrome */}
      <div className="h-10 bg-[#0b141a] border-b border-[var(--color-cyber-border)] flex items-center px-4 gap-4 relative">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-gray-600" />
          <div className="w-2.5 h-2.5 rounded-full bg-gray-600" />
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-cyber-accent)]" />
        </div>
        <div className="flex-1 max-w-md mx-auto bg-black/50 border border-[var(--color-cyber-border)]/50 rounded flex items-center justify-center px-2 py-1">
          <span className="text-[10px] text-[var(--color-cyber-muted-fg)] font-mono tracking-widest truncate">
            {title}
          </span>
        </div>
      </div>

      {/* Browser Content */}
      <div
        className="flex-1 relative p-4 sm:p-8 flex flex-col gap-6"
        style={{
          backgroundImage:
            "linear-gradient(#25D3660a 1px, transparent 1px), linear-gradient(90deg, #25D3660a 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        {children || (
          <div className="flex flex-col gap-6 animate-in fade-in duration-1000">
            {/* Wireframe Hero */}
            <div className="w-full h-32 sm:h-48 border border-[var(--color-cyber-accent)]/20 bg-[var(--color-cyber-accent)]/5 flex flex-col items-center justify-center gap-3 cyber-chamfer">
              <div className="w-1/2 h-4 sm:h-6 bg-[var(--color-cyber-accent)]/20 animate-pulse" />
              <div className="w-3/4 h-2 sm:h-3 bg-[var(--color-cyber-accent)]/10" />
              <div className="w-24 h-8 bg-[var(--color-cyber-accent)]/80 text-black font-bold text-[10px] flex items-center justify-center mt-4">
                LAUNCH_
              </div>
            </div>

            {/* Wireframe Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="h-20 border border-[var(--color-cyber-border)]/50 bg-black/40 flex flex-col items-center justify-center gap-2">
                <div className="w-6 h-6 rounded bg-[var(--color-cyber-accent)]/20" />
                <div className="w-16 h-1 bg-[var(--color-cyber-accent)]/10" />
              </div>
              <div className="h-20 border border-[var(--color-cyber-border)]/50 bg-black/40 flex flex-col items-center justify-center gap-2">
                <div className="w-6 h-6 rounded bg-[var(--color-cyber-accent)]/20" />
                <div className="w-16 h-1 bg-[var(--color-cyber-accent)]/10" />
              </div>
              <div className="h-20 border border-[var(--color-cyber-border)]/50 bg-black/40 hidden sm:flex flex-col items-center justify-center gap-2">
                <div className="w-6 h-6 rounded bg-[var(--color-cyber-accent)]/20" />
                <div className="w-16 h-1 bg-[var(--color-cyber-accent)]/10" />
              </div>
            </div>
          </div>
        )}

        <div className="absolute bottom-4 right-4 z-20 bg-black/80 backdrop-blur-md border border-[var(--color-cyber-accent)] px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-[var(--color-cyber-accent)] font-[var(--font-cyber-accent)] text-[10px] tracking-widest uppercase animate-blink">
            UI_RENDER_ACTIVE
          </span>
        </div>
      </div>
    </div>
  );
}
