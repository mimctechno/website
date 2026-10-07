// src/app/services/[location]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import whatsappLocations from "@/data/whatsappLocations.json";

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

  const citySlug = locationData.slug.replace(/^whatsapp-api-/, "");
  const canonicalUrl = `https://www.mimctechnologies.com/services/whatsapp-api/${citySlug}/`;

  return {
    title: `Redirecting to WhatsApp API in ${locationData.city} | MIMC Technologies`,
    description: `Redirecting to official WhatsApp Business API solutions in ${locationData.city}.`,
    robots: {
      index: false,
      follow: true,
    },
    alternates: { canonical: canonicalUrl },
  };
}

export default async function Page(props: Props) {
  const params = await props.params;
  const locationData = whatsappLocations.find(
    (l) => l.slug === params.location,
  );
  if (!locationData) notFound();

  const citySlug = locationData.slug.replace(/^whatsapp-api-/, "");
  const targetUrl = `/services/whatsapp-api/${citySlug}/`;
  const canonicalUrl = `https://www.mimctechnologies.com${targetUrl}`;

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#171717] font-sans flex items-center justify-center p-6">
      <div className="max-w-md w-full p-8 rounded-2xl bg-white border border-[#E8E8E2] text-center space-y-4 shadow-sm">
        <div className="w-10 h-10 border-2 border-teal-700 border-t-transparent rounded-full animate-spin mx-auto" />
        <h1 className="text-base font-bold text-neutral-900 font-heading">
          Redirecting to {locationData.city} Regional Hub...
        </h1>
        <p className="text-xs text-neutral-500">
          This URL has moved permanently to our updated regional directory.
        </p>
        <div className="pt-2">
          <a
            href={targetUrl}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-teal-700 hover:text-teal-900 underline"
          >
            Click here if you are not redirected automatically &rarr;
          </a>
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace("${targetUrl}");`,
          }}
        />
      </div>
    </div>
  );
}
