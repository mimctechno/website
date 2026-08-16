// src/app/layout.tsx
// Root layout — rendered once, wraps every page.
// This is the equivalent of index.html + App.tsx providers combined.
// Metadata here is the site-wide default, overridden per-page via generateMetadata().
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import CyberCursor from "@/components/CyberCursor";
import "../index.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mimctechnologies.com"),
  title: {
    default: "MIMC Technologies | Enterprise Software & WhatsApp API",
    template: "%s | MIMC Technologies",
  },
  description:
    "MIMC Technologies delivers ERP, CRM, official WhatsApp API, and Tally integration solutions globally from Canada and India.",
  openGraph: {
    siteName: "MIMC Technologies",
    type: "website",
    images: [{ url: "/logo.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/logo.webp"],
  },
  robots: { index: true, follow: true },
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
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
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
