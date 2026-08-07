"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Services", href: "/services" },
  { label: "WhatsApp API", href: "/services/whatsapp-api" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-cyber-border)] bg-[var(--color-cyber-bg)]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Home"
        >
          <img
            src="/logo.webp"
            alt="MIMC Technologies Logo"
            className="w-10 h-10 object-contain"
          />
          <div className="flex flex-col leading-none">
            <span
              className="font-[var(--font-cyber-head)] text-lg font-bold tracking-widest uppercase text-white cyber-glitch"
              data-text="MIMC"
            >
              MIMC
            </span>
            <span className="text-[var(--color-cyber-accent)] text-[9px] tracking-[0.4em] font-[var(--font-cyber-accent)] uppercase mt-0.5">
              TECHNOLOGIES
            </span>
          </div>
        </Link>

        <nav
          className="hidden md:flex gap-6 font-[var(--font-cyber-accent)] text-xs tracking-[0.2em] uppercase"
          aria-label="Main Navigation"
        >
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`cyber-bracket-link ${pathname === n.href ? "active" : "text-white/70"}`}
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="border border-[var(--color-cyber-accent)] px-4 py-1.5 text-[var(--color-cyber-accent)] hover:bg-[var(--color-cyber-accent)] hover:text-black transition-all"
          >
            CONTACT
          </Link>
        </nav>

        <button
          className="md:hidden text-[var(--color-cyber-accent)]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden border-t border-[var(--color-cyber-border)] bg-[var(--color-cyber-bg)] px-6 pb-6 space-y-4 font-[var(--font-cyber-accent)] text-sm tracking-widest uppercase"
        >
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-white/70 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all"
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-[var(--color-cyber-accent)] hover:bg-[var(--color-cyber-accent)] hover:text-black transition-all text-center border border-[var(--color-cyber-accent)] mt-2"
          >
            CONTACT
          </Link>
        </nav>
      )}
    </header>
  );
}
