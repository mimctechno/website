import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';
import Layout from '../components/Layout';

export default function NotFound() {
  return (
    <Layout title="404 — Page Not Found">
      <div className="max-w-4xl mx-auto px-6 py-32 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--color-cyber-accent2)]/10 blur-[100px] pointer-events-none" />
        
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 border-2 border-[var(--color-cyber-accent2)] bg-[var(--color-cyber-accent2)]/10 flex items-center justify-center animate-pulse">
            <AlertTriangle className="w-12 h-12 text-[var(--color-cyber-accent2)]" />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-widest font-[var(--font-cyber-head)] text-white mb-6 cyber-glitch" data-text="ERROR 404">
          ERROR 404
        </h1>
        
        <p className="text-xl md:text-2xl font-[var(--font-cyber-accent)] text-[var(--color-cyber-accent2)] uppercase tracking-widest mb-12">
          &gt; SYSTEM_PATH_NOT_FOUND
        </p>

        <p className="text-[var(--color-cyber-muted-fg)] font-[var(--font-cyber-accent)] text-sm uppercase tracking-wider mb-12 max-w-lg mx-auto leading-relaxed">
          The requested data node does not exist in this sector. It may have been relocated, deleted, or you lack the required clearance level.
        </p>

        <Link to="/" className="inline-flex items-center gap-3 font-[var(--font-cyber-accent)] uppercase tracking-widest cyber-chamfer border-2 border-[var(--color-cyber-accent)] text-[var(--color-cyber-accent)] hover:bg-[var(--color-cyber-accent)] hover:text-black transition-all duration-300 px-8 py-4 font-bold relative z-10">
          <Home className="w-5 h-5" /> RETURN_TO_BASE
        </Link>
      </div>
    </Layout>
  );
}
