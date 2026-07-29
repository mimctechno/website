import { type ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Terminal, Shield, MapPin, Menu, X } from 'lucide-react';
import CyberCursor from './CyberCursor';

const NAV = [
  { label: 'Services', href: '/services' },
  { label: 'WhatsApp API', href: '/services/whatsapp-api' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

function CyberGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none opacity-10"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 255, 170, 0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 170, 0.5) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}
    />
  );
}

export default function Layout({ children, title, description }: {
  children: ReactNode;
  title?: string;
  description?: string;
}) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const pageTitle = title ? `${title} | MIMC Technologies` : 'MIMC Technologies | Enterprise Solutions';
  const pageDesc = description || 'MIMC Technologies provides enterprise ERP, CRM, official WhatsApp API, and Tally integration solutions globally from Canada and India.';

  // Build breadcrumb list
  const crumbs = [{ name: 'Home', href: '/' }];
  const segments = location.pathname.split('/').filter(Boolean);
  let path = '';
  segments.forEach(seg => {
    path += '/' + seg;
    crumbs.push({ name: seg.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()), href: path });
  });

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `https://www.mimctechnologies.com${c.href}`,
    })),
  };

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MIMC Technologies',
    url: 'https://www.mimctechnologies.com',
    logo: 'https://www.mimctechnologies.com/logo.png',
    contactPoint: [
      { '@type': 'ContactPoint', telephone: '+1-416-857-8831', contactType: 'customer service', areaServed: 'CA' },
      { '@type': 'ContactPoint', telephone: '+91-9259418994', contactType: 'customer service', areaServed: 'IN' },
    ],
    sameAs: [],
  };

  return (
    <div className="min-h-screen bg-[var(--color-cyber-bg)] text-[var(--color-cyber-fg)] font-[var(--font-cyber-body)] overflow-x-hidden selection:bg-[var(--color-cyber-accent)] selection:text-black md:cursor-none [&_*]:md:cursor-none">
      <CyberCursor />
      <CyberGrid />

      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* SEO meta via document.title & dynamic DOM updates */}
      <script dangerouslySetInnerHTML={{ __html: `
        document.title = ${JSON.stringify(pageTitle)};
        document.querySelector('meta[name="description"]').setAttribute('content', ${JSON.stringify(pageDesc)});
        document.querySelector('meta[property="og:title"]').setAttribute('content', ${JSON.stringify(pageTitle)});
        document.querySelector('meta[name="twitter:title"]').setAttribute('content', ${JSON.stringify(pageTitle)});
        
        // Update canonical and URL tags
        const currentUrl = 'https://www.mimctechnologies.com' + ${JSON.stringify(location.pathname)};
        const canonical = document.getElementById('canonical-url');
        if(canonical) canonical.setAttribute('href', currentUrl);
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if(ogUrl) ogUrl.setAttribute('content', currentUrl);
      ` }} />

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-[var(--color-cyber-border)] bg-[var(--color-cyber-bg)]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/logo.png" alt="MIMC Technologies Logo" className="w-10 h-10 object-contain" />
            <div className="flex flex-col leading-none">
              <span className="font-[var(--font-cyber-head)] text-lg font-bold tracking-widest uppercase text-white cyber-glitch" data-text="MIMC">MIMC</span>
              <span className="text-[var(--color-cyber-accent)] text-[9px] tracking-[0.4em] font-[var(--font-cyber-accent)] uppercase mt-0.5">TECHNOLOGIES</span>
            </div>
          </Link>

          <nav className="hidden md:flex gap-6 font-[var(--font-cyber-accent)] text-xs tracking-[0.2em] uppercase">
            {NAV.map(n => (
              <Link key={n.href} to={n.href}
                className={`transition-all hover:text-[var(--color-cyber-accent)] hover:cyber-glow-text ${location.pathname === n.href ? 'text-[var(--color-cyber-accent)]' : ''}`}>
                {n.label}
              </Link>
            ))}
            <Link to="/contact" className="border border-[var(--color-cyber-accent)] px-4 py-1.5 text-[var(--color-cyber-accent)] hover:bg-[var(--color-cyber-accent)] hover:text-black transition-all">
              GET_DEMO
            </Link>
          </nav>

          <button className="md:hidden text-[var(--color-cyber-accent)]" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-[var(--color-cyber-border)] bg-[var(--color-cyber-bg)] px-6 pb-6 space-y-4 font-[var(--font-cyber-accent)] text-sm tracking-widest uppercase">
            {NAV.map(n => (
              <Link key={n.href} to={n.href} onClick={() => setMenuOpen(false)}
                className="block py-2 hover:text-[var(--color-cyber-accent)] transition-colors">
                {n.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Breadcrumbs (shown on inner pages) */}
      {location.pathname !== '/' && (
        <div className="max-w-7xl mx-auto px-6 pt-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-[var(--font-cyber-accent)] text-xs text-[var(--color-cyber-muted-fg)] uppercase tracking-widest">
            {crumbs.map((c, i) => (
              <span key={c.href} className="flex items-center gap-2">
                {i > 0 && <span className="text-[var(--color-cyber-accent)]">/</span>}
                {i === crumbs.length - 1
                  ? <span className="text-[var(--color-cyber-accent)]">{c.name}</span>
                  : <Link to={c.href} className="hover:text-[var(--color-cyber-accent)] transition-colors">{c.name}</Link>}
              </span>
            ))}
          </nav>
        </div>
      )}

      {/* Page content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="w-full bg-[#030303] text-[var(--color-cyber-fg)] pt-20 pb-10 px-6 md:px-12 border-t border-[var(--color-cyber-accent)] relative z-20 mt-32">
        <div className="absolute top-0 left-0 w-full h-[1px] shadow-[0_0_20px_rgba(0,255,170,1)]" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 font-[var(--font-cyber-accent)] font-bold uppercase tracking-widest text-xs md:text-sm mb-16">
            <div className="space-y-4">
              <div className="mb-6 text-[var(--color-cyber-accent2)] flex items-center gap-2"><Terminal className="w-4 h-4" /> SERVICES</div>
              {[['ERP & CRM', '/services/erp-crm'], ['WhatsApp API', '/services/whatsapp-api'], ['Tally Integration', '/services/tally-whatsapp-integration'], ['Web Development', '/services/web-development'], ['SEO & Marketing', '/services/digital-marketing']].map(([label, href]) => (
                <Link key={href as string} to={href as string} className="block text-[var(--color-cyber-muted-fg)] hover:text-[var(--color-cyber-accent)] transition-all">{label}</Link>
              ))}
            </div>
            <div className="space-y-4">
              <div className="mb-6 text-[var(--color-cyber-accent2)] flex items-center gap-2"><Shield className="w-4 h-4" /> COMPANY</div>
              {[['About Us', '/about'], ['Careers', '/careers'], ['Blog', '/blog'], ['Contact', '/contact']].map(([label, href]) => (
                <Link key={href as string} to={href as string} className="block text-[var(--color-cyber-muted-fg)] hover:text-[var(--color-cyber-accent)] transition-all">{label}</Link>
              ))}
            </div>
            <div className="space-y-4">
              <div className="mb-6 text-[var(--color-cyber-accent2)] flex items-center gap-2"><MapPin className="w-4 h-4" /> COMM_LINK</div>
              <a href="tel:+14168578831" className="block text-[var(--color-cyber-muted-fg)] hover:text-[var(--color-cyber-accent)] transition-all">+1 416-857-8831</a>
              <a href="tel:+919259418994" className="block text-[var(--color-cyber-muted-fg)] hover:text-[var(--color-cyber-accent)] transition-all">+91 925941-8994</a>
              <a href="mailto:info@mimctechnologies.com" className="block text-[var(--color-cyber-muted-fg)] hover:text-[var(--color-cyber-accent)] transition-all text-[10px]">info@mimctechnologies.com</a>
              <div className="pt-2 text-[var(--color-cyber-muted-fg)]">India & Canada</div>
            </div>
            <div className="space-y-4">
              <div className="mb-6 text-[var(--color-cyber-accent2)] flex items-center gap-2"><Shield className="w-4 h-4" /> LEGAL</div>
              <Link to="/privacy" className="block text-[var(--color-cyber-muted-fg)] hover:text-[var(--color-cyber-accent)] transition-all">Privacy Policy</Link>
              <Link to="/terms" className="block text-[var(--color-cyber-muted-fg)] hover:text-[var(--color-cyber-accent)] transition-all">Terms of Service</Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-[var(--color-cyber-border)] pt-8 font-[var(--font-cyber-accent)] text-xs text-[var(--color-cyber-muted-fg)] uppercase tracking-widest">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="MIMC Logo" className="w-5 h-5 opacity-50" />
              <span>© 2026 MIMC Technologies. All rights reserved.</span>
            </div>
            <div className="mt-4 md:mt-0 text-[var(--color-cyber-accent)]">SYS.VER.9.4</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
