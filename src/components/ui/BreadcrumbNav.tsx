"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export default function BreadcrumbNav() {
  const pathname = usePathname();
  if (!pathname || pathname === "/") return null;

  const pathParts = pathname.split("/").filter(Boolean);

  return (
    <nav className="border-b border-[var(--color-cyber-border)] bg-[#050508]/80 backdrop-blur-md sticky top-16 md:top-20 z-40">
      <div className="max-w-7xl mx-auto px-6 py-2.5 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <ol className="flex items-center space-x-2 text-[10px] md:text-xs font-[var(--font-cyber-accent)] uppercase tracking-widest text-[var(--color-cyber-muted-fg)]">
          <li>
            <Link
              href="/"
              className="flex items-center hover:text-[var(--color-cyber-accent)] transition-colors"
            >
              <Home className="w-3 h-3 mr-1" />
              HOME
            </Link>
          </li>

          {pathParts.map((part, index) => {
            const isLast = index === pathParts.length - 1;
            const url = `/${pathParts.slice(0, index + 1).join("/")}`;
            const name = part.replace(/-/g, " ");

            return (
              <li key={url} className="flex items-center space-x-2">
                <ChevronRight className="w-3 h-3 text-[var(--color-cyber-border)]" />
                {isLast ? (
                  <span
                    className="text-[var(--color-cyber-accent)] font-semibold"
                    aria-current="page"
                  >
                    {name}
                  </span>
                ) : (
                  <Link
                    href={url}
                    className="hover:text-[var(--color-cyber-accent)] transition-colors"
                  >
                    {name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
