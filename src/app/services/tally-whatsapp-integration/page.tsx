import type { Metadata } from "next";
import TallyIntegration from "@/views/services/TallyIntegration";

export const metadata: Metadata = {
  title: "Tally WhatsApp Integration — Auto Invoice & Reminder Dispatch",
  description: "Send invoices, payment reminders, and ledger statements directly from Tally ERP 9 & Tally Prime to WhatsApp. Official API integration by MIMC Technologies.",
  alternates: { canonical: "https://www.mimctechnologies.com/services/tally-whatsapp-integration" },
  openGraph: { url: "https://www.mimctechnologies.com/services/tally-whatsapp-integration" },
};

export default function Page() { return <TallyIntegration />; }
