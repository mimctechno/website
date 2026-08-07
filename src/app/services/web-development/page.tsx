import type { Metadata } from "next";
import WebDevelopment from "@/views/services/WebDevelopment";

export const metadata: Metadata = {
  title: "Web Development & SEO — High-Performance Websites That Rank",
  description: "Custom web development and technical SEO services by MIMC Technologies. Websites built for performance, Google rankings, and lead generation.",
  alternates: { canonical: "https://www.mimctechnologies.com/services/web-development" },
  openGraph: { url: "https://www.mimctechnologies.com/services/web-development" },
};

export default function Page() { return <WebDevelopment />; }
