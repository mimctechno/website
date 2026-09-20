import type { Metadata } from "next";
import DigitalMarketing from "@/views/services/DigitalMarketing";

export const metadata: Metadata = {
  title: "B2B Technical SEO & Programmatic Search Growth | MIMC Technologies",
  description:
    "Data-driven technical SEO, AI search engine optimization (GEO), and programmatic multi-location search campaigns designed to generate qualified enterprise inbound leads.",
  alternates: {
    canonical: "https://www.mimctechnologies.com/services/digital-marketing/",
  },
  openGraph: {
    url: "https://www.mimctechnologies.com/services/digital-marketing/",
    title: "B2B Technical SEO & Programmatic Search Growth | MIMC Technologies",
    description:
      "Data-driven technical SEO, AI search engine optimization (GEO), and programmatic multi-location search campaigns designed to generate qualified enterprise inbound leads.",
    type: "website",
    siteName: "MIMC Technologies",
    images: [{ url: "/logo.webp", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <DigitalMarketing />;
}
