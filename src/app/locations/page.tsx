import type { Metadata } from "next";
import Locations from "@/views/Locations";

export const metadata: Metadata = {
  title: "WhatsApp Business API & ERP Services in 100+ Cities Worldwide | MIMC",
  description:
    "Official Meta WhatsApp Business API setup, custom ERP development, and automated Tally integration across 100+ major commercial cities in India, Canada, UAE, USA, UK, and worldwide.",
  alternates: { canonical: "https://www.mimctechnologies.com/locations/" },
  openGraph: {
    url: "https://www.mimctechnologies.com/locations/",
    title:
      "WhatsApp Business API & ERP Services in 100+ Cities Worldwide | MIMC",
    description:
      "Official Meta WhatsApp Business API setup, custom ERP development, and automated Tally integration across 100+ major commercial cities in India, Canada, UAE, USA, UK, and worldwide.",
    type: "website",
    siteName: "MIMC Technologies",
    images: [{ url: "/logo.webp", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <Locations />;
}
