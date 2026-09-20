import type { Metadata } from "next";
import ERPCRM from "@/views/services/ERPCRM";

export const metadata: Metadata = {
  title:
    "Custom ERP & CRM Software Development — India, Canada & Global | MIMC",
  description:
    "Replace expensive per-user SaaS licenses with custom ERP software you own 100%. Multi-warehouse inventory, billing, manufacturing, and CRM systems for mid-market businesses.",
  alternates: {
    canonical: "https://www.mimctechnologies.com/services/erp-crm/",
  },
  openGraph: {
    url: "https://www.mimctechnologies.com/services/erp-crm/",
    title:
      "Custom ERP & CRM Software Development — India, Canada & Global | MIMC",
    description:
      "Replace expensive per-user SaaS licenses with custom ERP software you own 100%. Multi-warehouse inventory, billing, manufacturing, and CRM systems for mid-market businesses.",
    type: "website",
    siteName: "MIMC Technologies",
    images: [{ url: "/logo.webp", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <ERPCRM />;
}
