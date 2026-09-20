import type { Metadata } from "next";
import TallyIntegration from "@/views/services/TallyIntegration";

export const metadata: Metadata = {
  title:
    "Tally Prime WhatsApp Integration — Auto Invoice & Payment Reminders | MIMC",
  description:
    "Automatically dispatch PDF invoices, outstanding payment reminders, and ledger statements directly from Tally Prime & ERP 9 to WhatsApp in < 3 seconds. 100% Meta Official API.",
  alternates: {
    canonical:
      "https://www.mimctechnologies.com/services/tally-whatsapp-integration/",
  },
  openGraph: {
    url: "https://www.mimctechnologies.com/services/tally-whatsapp-integration/",
    title:
      "Tally Prime WhatsApp Integration — Auto Invoice & Payment Reminders | MIMC",
    description:
      "Automatically dispatch PDF invoices, outstanding payment reminders, and ledger statements directly from Tally Prime & ERP 9 to WhatsApp in < 3 seconds. 100% Meta Official API.",
    type: "website",
    siteName: "MIMC Technologies",
    images: [{ url: "/logo.webp", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <TallyIntegration />;
}
