import type { Metadata } from "next";
import EnterpriseConsulting from "@/views/services/EnterpriseConsulting";

export const metadata: Metadata = {
  title: "Enterprise IT Consulting — Technology Audits & Digital Transformation",
  description: "Vendor-neutral enterprise IT consulting by MIMC Technologies. Technology audits, digital transformation roadmaps, vendor selection, and implementation oversight.",
  alternates: { canonical: "https://www.mimctechnologies.com/services/enterprise-consulting" },
  openGraph: { url: "https://www.mimctechnologies.com/services/enterprise-consulting" },
};

export default function Page() { return <EnterpriseConsulting />; }
