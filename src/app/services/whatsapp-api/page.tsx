import type { Metadata } from "next";
import WhatsAppAPI from "@/views/services/WhatsAppAPI";

export const metadata: Metadata = {
  title: "WhatsApp Business API — Official Setup & Integration",
  description: "Official WhatsApp Business API setup and management for India, Brazil, Southeast Asia, and Latin America. Tally integration, bulk messaging, and automation by MIMC Technologies.",
  alternates: { canonical: "https://www.mimctechnologies.com/services/whatsapp-api" },
  openGraph: { url: "https://www.mimctechnologies.com/services/whatsapp-api" },
};

export default function Page() { return <WhatsAppAPI />; }
