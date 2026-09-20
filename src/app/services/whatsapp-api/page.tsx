import type { Metadata } from "next";
import WhatsAppAPI from "@/views/services/WhatsAppAPI";

export const metadata: Metadata = {
  title:
    "Official WhatsApp Business API Provider — India, UAE, Canada & Global | MIMC",
  description:
    "Get Meta's Official WhatsApp Business API live in 48 hours. Official BSP onboarding, Green Tick verification, bulk messaging, and automated Tally/ERP integrations. Free setup quote.",
  alternates: {
    canonical: "https://www.mimctechnologies.com/services/whatsapp-api/",
  },
  openGraph: {
    url: "https://www.mimctechnologies.com/services/whatsapp-api/",
    title:
      "Official WhatsApp Business API Provider — India, UAE, Canada & Global | MIMC",
    description:
      "Get Meta's Official WhatsApp Business API live in 48 hours. Official BSP onboarding, Green Tick verification, bulk messaging, and automated Tally/ERP integrations. Free setup quote.",
    type: "website",
    siteName: "MIMC Technologies",
    images: [{ url: "/logo.webp", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <WhatsAppAPI />;
}
