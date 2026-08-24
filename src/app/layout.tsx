// src/app/layout.tsx
// Root layout — rendered once, wraps every page.
// Metadata here is the site-wide default, overridden per-page via generateMetadata().
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import CyberCursor from "@/components/CyberCursor";
import "../index.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mimctechnologies.com"),
  title: {
    default:
      "Official WhatsApp Business API, Custom ERP & Tally Integration | MIMC Technologies",
    template: "%s | MIMC Technologies",
  },
  description:
    "Get Meta's Official WhatsApp Business API setup, custom ERP/CRM software, and automated Tally Prime integration. Live in 48 hours for enterprises in India, Canada, UAE, USA & worldwide.",
  keywords: [
    "WhatsApp Business API Provider",
    "Official Meta WhatsApp API",
    "Tally WhatsApp Integration",
    "Custom ERP Software",
    "Enterprise CRM Development",
    "Tally Prime Invoice Automation",
    "Next.js Web Development",
    "B2B Software Development",
  ],
  authors: [
    { name: "MIMC Technologies", url: "https://www.mimctechnologies.com" },
  ],
  creator: "MIMC Technologies",
  publisher: "MIMC Technologies",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "https://www.mimctechnologies.com/",
  },
  openGraph: {
    siteName: "MIMC Technologies",
    type: "website",
    locale: "en_US",
    url: "https://www.mimctechnologies.com",
    title:
      "Official WhatsApp Business API, Custom ERP & Tally Integration | MIMC Technologies",
    description:
      "Get Meta's Official WhatsApp Business API setup, custom ERP/CRM software, and automated Tally Prime integration. Live in 48 hours for enterprises globally.",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "MIMC Technologies - WhatsApp Business API and Enterprise ERP Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Official WhatsApp Business API, Custom ERP & Tally Integration | MIMC",
    description:
      "Official Meta WhatsApp Business API onboarding, custom ERP development, and automated Tally integration across India, Canada & 100+ cities.",
    images: ["/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const globalKnowledgeGraphSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.mimctechnologies.com/#organization",
      name: "MIMC Technologies",
      legalName: "MIMC Technologies Inc.",
      url: "https://www.mimctechnologies.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mimctechnologies.com/logo.webp",
        width: 1200,
        height: 630,
      },
      description:
        "Official Meta WhatsApp Business API provider, custom enterprise ERP/CRM software development, and automated Tally Prime invoicing solutions.",
      foundingDate: "2014",
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "Saudi Arabia" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "Singapore" },
        { "@type": "Country", name: "Brazil" },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9259418994",
          contactType: "customer service & sales",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+1-416-857-8831",
          contactType: "enterprise consulting & North America sales",
          areaServed: ["CA", "US"],
          availableLanguage: ["English"],
        },
      ],
      sameAs: [
        "https://www.linkedin.com/company/mimc-technologies",
        "https://github.com/mimctechnologies",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.mimctechnologies.com/#website",
      url: "https://www.mimctechnologies.com",
      name: "MIMC Technologies",
      publisher: {
        "@id": "https://www.mimctechnologies.com/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://www.mimctechnologies.com/locations/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.mimctechnologies.com/#toronto-hub",
      name: "MIMC Technologies — Canada Corporate Headquarters",
      url: "https://www.mimctechnologies.com",
      telephone: "+1-416-857-8831",
      email: "info@mimctechnologies.com",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "100 King Street West, Suite 5600",
        addressLocality: "Toronto",
        addressRegion: "ON",
        postalCode: "M5X 1C9",
        addressCountry: "CA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 43.6487,
        longitude: -79.3817,
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.mimctechnologies.com/#delhi-hub",
      name: "MIMC Technologies — Asia Engineering & Meta BSP Hub",
      url: "https://www.mimctechnologies.com",
      telephone: "+91-9259418994",
      email: "info@mimctechnologies.com",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Cyber City, DLF Phase 2",
        addressLocality: "Gurugram, Delhi NCR",
        addressRegion: "Haryana",
        postalCode: "122002",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 28.4908,
        longitude: 77.0894,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
        {/* Global Knowledge Graph JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(globalKnowledgeGraphSchema),
          }}
        />
        {/* Ahrefs analytics */}
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="/Bt3NzhUDDxD16DTZxg67Q"
          async
        />
      </head>
      <body>
        <CyberCursor />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
