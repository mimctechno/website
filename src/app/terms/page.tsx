import type { Metadata } from "next";
import Terms from "@/views/Terms";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "MIMC Technologies terms of service for enterprise software, WhatsApp API integrations, Tally solutions, and SLA agreements.",
  alternates: { canonical: "https://www.mimctechnologies.com/terms" },
  openGraph: { url: "https://www.mimctechnologies.com/terms" },
};

export default function Page() { return <Terms />; }
