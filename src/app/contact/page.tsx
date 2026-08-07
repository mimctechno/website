import type { Metadata } from "next";
import Contact from "@/views/Contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with MIMC Technologies. Offices in Canada and India. We respond within 24 hours for ERP, CRM, WhatsApp API, and Tally integration enquiries.",
  alternates: { canonical: "https://www.mimctechnologies.com/contact" },
  openGraph: { url: "https://www.mimctechnologies.com/contact" },
};

export default function Page() { return <Contact />; }
