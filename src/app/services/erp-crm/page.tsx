import type { Metadata } from "next";
import ERPCRM from "@/views/services/ERPCRM";

export const metadata: Metadata = {
  title: "Enterprise ERP & CRM Solutions — Custom Software Development",
  description: "Custom ERP and CRM solutions for manufacturing, retail, distribution, and services companies. Cloud & on-premise deployments by MIMC Technologies.",
  alternates: { canonical: "https://www.mimctechnologies.com/services/erp-crm" },
  openGraph: { url: "https://www.mimctechnologies.com/services/erp-crm" },
};

export default function Page() { return <ERPCRM />; }
