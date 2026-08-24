"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

const TITLE_OVERRIDES: Record<string, string> = {
  services: "Services",
  "erp-crm": "Enterprise ERP & CRM",
  "whatsapp-api": "Official WhatsApp API",
  "tally-whatsapp-integration": "Tally WhatsApp Integration",
  "web-development": "Web Development & SEO",
  "digital-marketing": "Digital Marketing",
  "enterprise-consulting": "IT Consulting & Advisory",
  about: "About",
  contact: "Contact",
  careers: "Careers",
  partners: "Partners",
  locations: "Global Hubs",
  blog: "Insights",
  privacy: "Privacy Policy",
  terms: "Terms of Service",
};

function formatBreadcrumbTitle(slug: string): string {
  if (TITLE_OVERRIDES[slug]) {
    return TITLE_OVERRIDES[slug];
  }
  // If it's a location slug like whatsapp-api-mumbai
  if (slug.startsWith("whatsapp-api-")) {
    const city = slug.replace("whatsapp-api-", "");
    return `WhatsApp API · ${city.charAt(0).toUpperCase() + city.slice(1)}`;
  }
  return slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function BreadcrumbNav() {
  const pathname = usePathname();
  if (!pathname || pathname === "/") return null;

  const pathParts = pathname.split("/").filter(Boolean);

  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-[#E8E8E2] bg-[#FAFAF8]/95 backdrop-blur-md sticky top-16 md:top-20 z-30 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 py-2.5 overflow-x-auto whitespace-nowrap scrollbar-hide flex items-center">
        <ol className="flex items-center space-x-2 text-xs font-sans text-neutral-500">
          <li>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-neutral-500 hover:text-teal-800 transition-colors font-medium rounded-md px-1.5 py-0.5 hover:bg-neutral-200/50"
            >
              <Home className="w-3.5 h-3.5 text-neutral-400" />
              <span>Home</span>
            </Link>
          </li>

          {pathParts.map((part, index) => {
            const isLast = index === pathParts.length - 1;
            const url = `/${pathParts.slice(0, index + 1).join("/")}`;
            const formattedName = formatBreadcrumbTitle(part);

            return (
              <li key={url} className="flex items-center space-x-2">
                <ChevronRight className="w-3 h-3 text-neutral-300 shrink-0" />
                {isLast ? (
                  <span
                    className="font-semibold text-[#171717] bg-white border border-[#E8E8E2] px-2.5 py-0.5 rounded-md shadow-2xs text-xs"
                    aria-current="page"
                  >
                    {formattedName}
                  </span>
                ) : (
                  <Link
                    href={url}
                    className="text-neutral-500 hover:text-teal-800 font-medium transition-colors rounded-md px-1.5 py-0.5 hover:bg-neutral-200/50"
                  >
                    {formattedName}
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
