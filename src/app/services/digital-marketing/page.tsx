import type { Metadata } from "next";
import DigitalMarketing from "@/views/services/DigitalMarketing";

export const metadata: Metadata = {
  title: "Digital Marketing — SEO, Google Ads & WhatsApp Campaigns",
  description: "Digital marketing services by MIMC Technologies — SEO, Google Ads, WhatsApp marketing for India, Brazil, and global markets. Drive leads with data-driven campaigns.",
  alternates: { canonical: "https://www.mimctechnologies.com/services/digital-marketing" },
  openGraph: { url: "https://www.mimctechnologies.com/services/digital-marketing" },
};

export default function Page() { return <DigitalMarketing />; }
