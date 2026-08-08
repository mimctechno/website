import type { Metadata } from "next";
import Locations from "@/views/Locations";

export const metadata: Metadata = {
  title: "Global Infrastructure & Locations | MIMC Technologies",
  description:
    "Explore MIMC Technologies global service areas. We provide enterprise WhatsApp API, ERP, CRM, and Web Development services across top regions.",
  alternates: { canonical: "https://www.mimctechnologies.com/locations/" },
  openGraph: {
    url: "https://www.mimctechnologies.com/locations/",
    title: "Global Infrastructure & Locations | MIMC Technologies",
    description:
      "Explore MIMC Technologies global service areas. We provide enterprise WhatsApp API, ERP, CRM, and Web Development services across top regions.",
    type: "website",
    siteName: "MIMC Technologies",
    images: [{ url: "/logo.webp", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <Locations />;
}
