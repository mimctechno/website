import type { Metadata } from "next";
import Services from "@/views/Services";

export const metadata: Metadata = {
  title: "Services — ERP, WhatsApp API, Tally Integration & More",
  description: "MIMC Technologies offers enterprise ERP, CRM, official WhatsApp API, Tally WhatsApp integration, web development, and SEO services globally.",
  alternates: { canonical: "https://www.mimctechnologies.com/services/" },
  openGraph: { url: "https://www.mimctechnologies.com/services/" },
};

export default function Page() { return <Services />; }
