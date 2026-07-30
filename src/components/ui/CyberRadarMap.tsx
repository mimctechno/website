export default function CyberRadarMap() {
  const locations = [
    { name: "CANADA", top: "35%", left: "25%", delay: "0s" },
    { name: "INDIA", top: "45%", left: "70%", delay: "1.5s" },
  ];

  return (
    <div className="w-full h-64 sm:h-80 border border-[var(--color-cyber-border)] bg-[#050508] relative overflow-hidden group cyber-chamfer-reverse">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 255, 170, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 170, 0.5) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          backgroundPosition: "center center",
        }}
      />

      {/* Radar Sweep */}
      <div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -mt-[400px] -ml-[400px] border border-[var(--color-cyber-accent)]/20 rounded-full flex items-center justify-center animate-spin"
        style={{ animationDuration: "8s" }}
      >
        <div className="w-1/2 h-full bg-gradient-to-tr from-transparent via-[var(--color-cyber-accent)]/5 to-[var(--color-cyber-accent)]/20 rounded-tr-full origin-bottom-left" />
        <div className="absolute w-[600px] h-[600px] border border-[var(--color-cyber-accent)]/10 rounded-full" />
        <div className="absolute w-[400px] h-[400px] border border-[var(--color-cyber-accent)]/10 rounded-full" />
        <div className="absolute w-[200px] h-[200px] border border-[var(--color-cyber-accent)]/10 rounded-full" />
      </div>

      {/* Map Nodes */}
      {locations.map((loc) => (
        <div
          key={loc.name}
          className="absolute flex flex-col items-center group/node"
          style={{ top: loc.top, left: loc.left }}
        >
          {/* Signal Ping */}
          <div className="relative flex items-center justify-center">
            <div
              className="absolute w-12 h-12 bg-[var(--color-cyber-accent)]/20 rounded-full animate-ping"
              style={{ animationDelay: loc.delay, animationDuration: "3s" }}
            />
            <div className="w-3 h-3 bg-[var(--color-cyber-accent)] shadow-[0_0_10px_rgba(0,255,170,0.8)] border border-white" />

            {/* Tooltip */}
            <div className="absolute top-6 flex-col items-center hidden sm:flex opacity-0 group-hover/node:opacity-100 transition-opacity duration-300 z-10 whitespace-nowrap">
              <div className="w-px h-6 bg-[var(--color-cyber-accent)]" />
              <div className="bg-black/90 border border-[var(--color-cyber-accent)] px-3 py-1 font-[var(--font-cyber-accent)] text-[10px] uppercase tracking-widest text-white shadow-[0_0_15px_rgba(0,255,170,0.2)]">
                {loc.name}_NODE{" "}
                <span className="text-[var(--color-cyber-accent)] ml-2">
                  ONLINE
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Decorative Overlays */}
      <div className="absolute top-4 left-4 flex gap-2">
        <div className="w-2 h-2 bg-red-500 animate-pulse" />
        <div className="font-mono text-[10px] text-[var(--color-cyber-accent)] uppercase tracking-widest">
          SAT_TRACKING // ACTIVE
        </div>
      </div>

      <div className="absolute bottom-4 right-4 flex gap-1 items-end h-6">
        <div className="w-1.5 h-2 bg-[var(--color-cyber-accent)]/50 group-hover:bg-[var(--color-cyber-accent)] transition-colors" />
        <div className="w-1.5 h-3 bg-[var(--color-cyber-accent)]/50 group-hover:bg-[var(--color-cyber-accent)] transition-colors delay-75" />
        <div className="w-1.5 h-4 bg-[var(--color-cyber-accent)]/50 group-hover:bg-[var(--color-cyber-accent)] transition-colors delay-150" />
        <div className="w-1.5 h-6 bg-[var(--color-cyber-accent)]/50 group-hover:bg-[var(--color-cyber-accent)] transition-colors delay-200" />
      </div>

      {/* Viewport Crosshairs */}
      <div className="absolute top-1/2 left-0 w-4 h-px bg-[var(--color-cyber-accent)]/50" />
      <div className="absolute top-1/2 right-0 w-4 h-px bg-[var(--color-cyber-accent)]/50" />
      <div className="absolute top-0 left-1/2 w-px h-4 bg-[var(--color-cyber-accent)]/50" />
      <div className="absolute bottom-0 left-1/2 w-px h-4 bg-[var(--color-cyber-accent)]/50" />
    </div>
  );
}
