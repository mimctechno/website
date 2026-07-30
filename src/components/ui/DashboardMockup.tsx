import {
  BarChart3,
  Users,
  MessageSquare,
  Activity,
  Settings,
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
    <div className="w-full flex flex-col sm:flex-row bg-[#050508] border border-[var(--color-cyber-border)] overflow-hidden shadow-[0_0_30px_rgba(0,255,170,0.1)] relative cyber-chamfer-reverse min-h-[300px] sm:aspect-[16/9]">
      {/* Sidebar */}
      <div className="w-1/4 max-w-[200px] border-r border-[var(--color-cyber-border)] bg-black/50 p-4 sm:p-6 flex flex-col gap-6 hidden sm:flex">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-6 bg-[var(--color-cyber-accent)] animate-pulse shrink-0" />
          <span className="font-bold text-white tracking-widest text-sm font-[var(--font-cyber-head)] truncate">
            MIMC
          </span>
        </div>
        {[BarChart3, Users, MessageSquare, Activity, Settings].map(
          (Icon, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 px-3 py-2 ${i === 0 ? "bg-[var(--color-cyber-accent)]/10 text-[var(--color-cyber-accent)] border-l-2 border-[var(--color-cyber-accent)]" : "text-[var(--color-cyber-muted-fg)]"}`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <div className="h-2 w-16 bg-current opacity-20 hidden lg:block" />
            </div>
          ),
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-3 sm:p-6 flex flex-col gap-4 sm:gap-6 overflow-hidden">
        <header className="flex justify-between items-end border-b border-[var(--color-cyber-border)] pb-2 sm:pb-4">
          <h3 className="text-sm sm:text-xl font-bold text-white font-[var(--font-cyber-head)] uppercase tracking-widest truncate pr-2 sm:pr-4">
            {title}
          </h3>
          <span className="text-[var(--color-cyber-accent)] text-[8px] sm:text-[10px] font-mono tracking-widest border border-[var(--color-cyber-accent)]/30 px-2 py-1 shrink-0">
            SYS_DATE :: {new Date().toISOString().split("T")[0]}
          </span>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-1 min-[400px]:grid-cols-3 gap-2 sm:gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-black/40 border border-[var(--color-cyber-border)] p-2 sm:p-4 cyber-chamfer"
            >
              <div className="text-[var(--color-cyber-muted-fg)] text-[8px] sm:text-[10px] uppercase tracking-widest mb-1 truncate">
                {s.label}
              </div>
              <div className="text-xs sm:text-2xl font-bold text-[var(--color-cyber-accent)] font-mono truncate">
                {s.value}
              </div>
            </div>
          ))}
        </div>

        {/* Chart Placeholder (CSS driven) */}
        <div className="h-20 sm:h-32 border border-[var(--color-cyber-border)] bg-black/40 relative overflow-hidden flex items-end p-2 gap-1 sm:gap-2">
          <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none" />
          {[40, 70, 45, 90, 60, 100, 85].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-[var(--color-cyber-accent)]/20 border-t border-[var(--color-cyber-accent)] transition-all hover:bg-[var(--color-cyber-accent)]/50"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>

        {/* Table */}
        <div className="flex-1 border border-[var(--color-cyber-border)] bg-black/40 overflow-hidden hidden sm:block">
          <table className="w-full text-left text-[10px] font-mono border-collapse">
            <thead className="bg-[var(--color-cyber-border)]/30 text-[var(--color-cyber-muted-fg)] uppercase tracking-widest">
              <tr>
                {tableHeaders.map((h, i) => (
                  <th key={i} className="p-3 font-normal">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, i) => (
                <tr
                  key={i}
                  className="border-t border-[var(--color-cyber-border)]/50 text-white/80 hover:bg-[var(--color-cyber-accent)]/10 transition-colors"
                >
                  {row.map((cell, j) => (
                    <td key={j} className="p-3 truncate">
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
