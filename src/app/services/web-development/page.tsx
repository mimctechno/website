import type { Metadata } from "next";
import WebDevelopment from "@/views/services/WebDevelopment";

export const metadata: Metadata = {
  title:
    "Next.js Web Development & Technical SEO Services — India & Canada | MIMC",
  description:
    "Custom Next.js web development with 100/100 Core Web Vitals, sub-second load speeds, and programmatic SEO architecture for high-converting B2B and SaaS platforms.",
  alternates: {
    canonical: "https://www.mimctechnologies.com/services/web-development",
  },
  openGraph: {
    url: "https://www.mimctechnologies.com/services/web-development",
    title:
      "Next.js Web Development & Technical SEO Services — India & Canada | MIMC",
    description:
      "Custom Next.js web development with 100/100 Core Web Vitals, sub-second load speeds, and programmatic SEO architecture for high-converting B2B and SaaS platforms.",
    type: "website",
    siteName: "MIMC Technologies",
    images: [{ url: "/logo.webp", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <WebDevelopment />;
}
