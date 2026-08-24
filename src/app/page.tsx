// src/app/page.tsx — Home page (/)
import type { Metadata } from "next";
import Home from "@/views/Home";

export const metadata: Metadata = {
  title:
    "WhatsApp Business API Setup & Custom ERP Software | MIMC Technologies",
  description:
    "Get Meta's official WhatsApp Business API live in 48 hours. Custom ERP, CRM & Tally Prime integration for enterprises across India, Canada, UAE & 100+ cities. Free consultation.",
  alternates: { canonical: "https://www.mimctechnologies.com/" },
  openGraph: {
    title:
      "WhatsApp Business API Setup & Custom ERP Software | MIMC Technologies",
    description:
      "Get Meta's official WhatsApp Business API live in 48 hours. Custom ERP, CRM & Tally Prime integration for enterprises across India, Canada, UAE & 100+ cities. Free consultation.",
    url: "https://www.mimctechnologies.com/",
    type: "website",
    siteName: "MIMC Technologies",
    images: [{ url: "/logo.webp", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <Home />;
}
