"use client";
import { type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./navigation/Navbar";
import Footer from "./navigation/Footer";
import BreadcrumbNav from "./ui/BreadcrumbNav";

function CommercialGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none opacity-40 z-0 warm-grid-bg" />
  );
}

export default function Layout({
  children,
  // title, description, ogImage are accepted but ignored here —
  // each page exports generateMetadata() for Next.js to put them in <head>.
  // Kept as optional props so page files don't need to be rewritten.
  title: _title,
  description: _description,
  ogImage: _ogImage,
}: {
  children: ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
}) {
  const pathname = usePathname();
  const isHome = (pathname ?? "/") === "/";

  // Breadcrumb schema — built from current pathname
  const pathParts = (pathname ?? "/").split("/").filter(Boolean);
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.mimctechnologies.com",
      },
      ...pathParts.map((part, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: part.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        item: `https://www.mimctechnologies.com/${pathParts.slice(0, index + 1).join("/")}`,
      })),
    ],
  };

  // Organization schema — on every page
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MIMC Technologies",
    url: "https://www.mimctechnologies.com",
    logo: "https://www.mimctechnologies.com/logo.webp",
    image: "https://www.mimctechnologies.com/logo.webp",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-416-857-8831",
        contactType: "customer service",
        areaServed: "CA",
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-9259418994",
        contactType: "customer service",
        areaServed: "IN",
      },
    ],
    sameAs: ["https://www.linkedin.com/company/mimc-technologies"],
  };

  // WebSite schema — homepage only
  const webSiteSchema = isHome
    ? {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "MIMC Technologies",
        url: "https://www.mimctechnologies.com",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://www.mimctechnologies.com/blog?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      }
    : null;

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#171717] font-sans overflow-x-hidden selection:bg-teal-600 selection:text-white">
      {/* JSON-LD: breadcrumbs + org on every page, website schema on home only */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {webSiteSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      )}

      <CommercialGrid />

      {/* Extracted Header Component */}
      <Navbar />

      <BreadcrumbNav />

      {/* Page Content */}
      <main className="relative z-10">{children}</main>

      {/* Extracted Footer Component */}
      <Footer />
    </div>
  );
}
