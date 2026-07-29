import { Link } from "react-router-dom";
import { Terminal, Shield, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="w-full bg-[#030303] text-[var(--color-cyber-fg)] pt-20 pb-10 px-6 md:px-12 border-t border-[var(--color-cyber-accent)] relative z-20 mt-32"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Site Footer
      </h2>
      <div className="absolute top-0 left-0 w-full h-[1px] shadow-[0_0_20px_rgba(0,255,170,1)]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 font-[var(--font-cyber-accent)] font-bold uppercase tracking-widest text-xs md:text-sm mb-16">
          <nav aria-label="Services Links" className="space-y-4">
            <div className="mb-6 text-[var(--color-cyber-accent2)] flex items-center gap-2">
              <Terminal className="w-4 h-4" aria-hidden="true" /> SERVICES
            </div>
            {[
              ["ERP & CRM", "/services/erp-crm"],
              ["WhatsApp API", "/services/whatsapp-api"],
              ["Tally Integration", "/services/tally-whatsapp-integration"],
              ["Web Development", "/services/web-development"],
              ["SEO & Marketing", "/services/digital-marketing"],
            ].map(([label, href]) => (
              <Link
                key={href as string}
                to={href as string}
                className="block text-[var(--color-cyber-muted-fg)] hover:text-[var(--color-cyber-accent)] transition-all"
              >
                {label}
              </Link>
            ))}
          </nav>

          <nav aria-label="Company Links" className="space-y-4">
            <div className="mb-6 text-[var(--color-cyber-accent2)] flex items-center gap-2">
              <Shield className="w-4 h-4" aria-hidden="true" /> COMPANY
            </div>
            {[
              ["About Us", "/about"],
              ["Careers", "/careers"],
              ["Blog", "/blog"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={href as string}
                to={href as string}
                className="block text-[var(--color-cyber-muted-fg)] hover:text-[var(--color-cyber-accent)] transition-all"
              >
                {label}
              </Link>
            ))}
          </nav>

          <address className="space-y-4 not-italic">
            <div className="mb-6 text-[var(--color-cyber-accent2)] flex items-center gap-2">
              <MapPin className="w-4 h-4" aria-hidden="true" /> COMM_LINK
            </div>
            <a
              href="tel:+14168578831"
              className="block text-[var(--color-cyber-muted-fg)] hover:text-[var(--color-cyber-accent)] transition-all"
              aria-label="Call Canada Office at +1 416-857-8831"
            >
              +1 416-857-8831
            </a>
            <a
              href="tel:+919259418994"
              className="block text-[var(--color-cyber-muted-fg)] hover:text-[var(--color-cyber-accent)] transition-all"
              aria-label="Call India Office at +91 925941-8994"
            >
              +91 925941-8994
            </a>
            <a
              href="mailto:info@mimctechnologies.com"
              className="block text-[var(--color-cyber-muted-fg)] hover:text-[var(--color-cyber-accent)] transition-all text-[10px]"
              aria-label="Email info@mimctechnologies.com"
            >
              info@mimctechnologies.com
            </a>
            <div className="pt-2 text-[var(--color-cyber-muted-fg)]">
              India & Canada
            </div>
          </address>

          <nav aria-label="Legal Links" className="space-y-4">
            <div className="mb-6 text-[var(--color-cyber-accent2)] flex items-center gap-2">
              <Shield className="w-4 h-4" aria-hidden="true" /> LEGAL
            </div>
            <Link
              to="/privacy"
              className="block text-[var(--color-cyber-muted-fg)] hover:text-[var(--color-cyber-accent)] transition-all"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="block text-[var(--color-cyber-muted-fg)] hover:text-[var(--color-cyber-accent)] transition-all"
            >
              Terms of Service
            </Link>
          </nav>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-[var(--color-cyber-border)] pt-8 font-[var(--font-cyber-accent)] text-xs text-[var(--color-cyber-muted-fg)] uppercase tracking-widest">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="MIMC Logo"
              className="w-5 h-5 opacity-50"
            />
            <span>© 2026 MIMC Technologies. All rights reserved.</span>
          </div>
          <div
            className="mt-4 md:mt-0 text-[var(--color-cyber-accent)]"
            aria-hidden="true"
          >
            SYS.VER.9.4
          </div>
        </div>
      </div>
    </footer>
  );
}
