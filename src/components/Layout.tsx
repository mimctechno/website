import { type ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Navbar from "./navigation/Navbar";
import Footer from "./navigation/Footer";

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
}: {
  children: ReactNode;
  title?: string;
  description?: string;
}) {
  const location = useLocation();
  const pageTitle = title
    ? `${title} | MIMC Technologies`
    : "MIMC Technologies | Enterprise Solutions";
  const pageDesc =
    description ||
    "MIMC Technologies provides enterprise ERP, CRM, official WhatsApp API, and Tally integration solutions globally from Canada and India.";
  const currentUrl = `https://www.mimctechnologies.com${location.pathname}`;

  // Organization Schema (JSON-LD)
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MIMC Technologies",
    url: "https://www.mimctechnologies.com",
    logo: "https://www.mimctechnologies.com/logo.png",
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
    sameAs: [],
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

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content={currentUrl} />

        {/* Twitter */}
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
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

      <CyberGrid />

      {/* Extracted Header Component */}
      <Navbar />

      {/* Page Content */}
      <main className="relative z-10">{children}</main>

      {/* Extracted Footer Component */}
      <Footer />
    </div>
  );
}
