import type { Metadata } from "next";
import Careers from "@/views/Careers";

export const metadata: Metadata = {
  title: "Careers — Join the MIMC Technologies Team",
  description: "We are hiring! Join MIMC Technologies to build enterprise software, WhatsApp API integrations, and digital marketing campaigns.",
  alternates: { canonical: "https://www.mimctechnologies.com/careers/" },
  openGraph: { url: "https://www.mimctechnologies.com/careers/" },
};

export default function Page() { return <Careers />; }
