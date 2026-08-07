import type { Metadata } from "next";
import Privacy from "@/views/Privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "MIMC Technologies privacy policy covering data collection, WhatsApp API data handling, security protocols, and GDPR compliance for enterprise clients.",
  alternates: { canonical: "https://www.mimctechnologies.com/privacy/" },
  openGraph: { url: "https://www.mimctechnologies.com/privacy/" },
};

export default function Page() { return <Privacy />; }
