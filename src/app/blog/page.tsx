import type { Metadata } from "next";
import Blog from "@/views/Blog";

export const metadata: Metadata = {
  title: "Blog — ERP, WhatsApp API & Enterprise Software Insights",
  description: "Expert insights on WhatsApp Business API, Tally integration, ERP software, and digital marketing from MIMC Technologies.",
  alternates: { canonical: "https://www.mimctechnologies.com/blog/" },
  openGraph: { url: "https://www.mimctechnologies.com/blog/" },
};

export default function Page() { return <Blog />; }
