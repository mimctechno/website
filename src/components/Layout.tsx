import { type ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Navbar from "./navigation/Navbar";
import Footer from "./navigation/Footer";
import BreadcrumbNav from "./ui/BreadcrumbNav";

function CyberGrid() {
  return (
    <div
      className="fixed inset-0 pointer-events-none opacity-10 z-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 255, 170, 0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 170, 0.5) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    />
  );
}

export default function Layout({
  children,
  title,
  description,
  ogImage,
}: {
  children: ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
}) {
  const location = useLocation();
  const pageTitle = title
    ? `${title} | MIMC Technologies`
    : "MIMC Technologies | Enterprise Solutions";
  const pageDesc =
    description ||
    "MIMC Technologies provides enterprise ERP, CRM, official WhatsApp API, and Tally integration solutions globally from Canada and India.";
  const currentUrl = `https://www.mimctechnologies.com${location.pathname}`;
  const pageImage = ogImage ?? "https://www.mimctechnologies.com/logo.webp";
  const isHome = location.pathname === "/";

  // Organization Schema (JSON-LD)
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MIMC Technologies",
    url: "https://www.mimctechnologies.com",
    logo: "https://www.mimctechnologies.com/logo.webp",
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

  // WebSite schema with SiteLinksSearchBox — only on homepage
  const webSiteSchema = {
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
  };

  // Generate dynamic Breadcrumbs schema based on current route
  const pathParts = location.pathname.split("/").filter(Boolean);
  const breadcrumbItems = pathParts.map((part, index) => {
    const url = `https://www.mimctechnologies.com/${pathParts
      .slice(0, index + 1)
      .join("/")}`;
    const name = part
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());
    return {
      "@type": "ListItem",
      position: index + 2,
      name: name,
      item: url,
    };
  });

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
      ...breadcrumbItems,
    ],
  };

  return (
    <div className="min-h-screen bg-[var(--color-cyber-bg)] text-[var(--color-cyber-fg)] font-[var(--font-cyber-body)] overflow-x-hidden selection:bg-[var(--color-cyber-accent)] selection:text-black md:cursor-none [&_*]:md:cursor-none">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <link rel="canonical" href={currentUrl} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MIMC Technologies" />
        <meta property="og:image" content={pageImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>

      {/* JSON-LD Scripts (Rendered statically outside of Helmet for guaranteed crawling) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {isHome && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      )}

      <CyberGrid />

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
