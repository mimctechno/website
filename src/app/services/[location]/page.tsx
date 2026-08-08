// src/app/services/[location]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import whatsappLocations from "@/data/whatsappLocations.json";
import WhatsAppLocation from "@/views/services/WhatsAppLocation";

type Props = { params: Promise<{ location: string }> };

export function generateStaticParams() {
  return whatsappLocations.map((loc) => ({ location: loc.slug }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const locationData = whatsappLocations.find(
    (l) => l.slug === params.location,
  );
  if (!locationData) return {};

  const title = `WhatsApp API Provider in ${locationData.city} | MIMC Technologies`;
  const description = `Official WhatsApp Business API integration in ${locationData.city}. Secure ERP & Tally solutions for local enterprises by MIMC Technologies.`;
  const url = `https://www.mimctechnologies.com/services/${locationData.slug}/`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      url,
      title,
      description,
      type: "website",
      siteName: "MIMC Technologies",
      images: [{ url: "/logo.webp", width: 1200, height: 630 }],
    },
  };
}

export default async function Page(props: Props) {
  const params = await props.params;
  const locationData = whatsappLocations.find(
    (l) => l.slug === params.location,
  );
  if (!locationData) notFound();
  return <WhatsAppLocation data={locationData} />;
}
