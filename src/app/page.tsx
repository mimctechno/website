// src/app/page.tsx — Home page (/)
import type { Metadata } from "next";
import Home from "@/views/Home";

export const metadata: Metadata = {
  title: "Enterprise Software & WhatsApp API | MIMC Technologies",
  description:
    "MIMC Technologies delivers ERP, CRM, official WhatsApp API, and Tally integration solutions globally from Canada and India.",
  alternates: { canonical: "https://www.mimctechnologies.com/" },
  openGraph: {
    title: "Enterprise Software & WhatsApp API | MIMC Technologies",
    description:
      "MIMC Technologies delivers ERP, CRM, official WhatsApp API, and Tally integration solutions globally from Canada and India.",
    url: "https://www.mimctechnologies.com/",
  },
};

export default function Page() {
  return <Home />;
}
