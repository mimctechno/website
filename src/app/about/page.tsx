import type { Metadata } from "next";
import About from "@/views/About";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about MIMC Technologies — an enterprise software company with offices in Canada and India, specializing in ERP, CRM, WhatsApp API, and Tally integrations.",
  alternates: { canonical: "https://www.mimctechnologies.com/about/" },
  openGraph: { url: "https://www.mimctechnologies.com/about/" },
};

export default function Page() { return <About />; }
