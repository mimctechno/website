import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getLocationByCitySlug,
  getLocationsForService,
} from "@/data/canonicalLocations";
import {
  SERVICES_CONFIG,
  resolveCityServiceData,
} from "@/data/servicesRegistry";
import CityServiceDetail from "@/views/services/CityServiceDetail";

type Props = { params: Promise<{ city: string }> };

const service = SERVICES_CONFIG["tally-cloud"];

export function generateStaticParams() {
  const eligibleLocations = getLocationsForService("tally-cloud");
  return eligibleLocations.map((loc) => ({ city: loc.citySlug }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { city } = await props.params;
  const location = getLocationByCitySlug(city);
  if (!location || !location.supportsTallyCloud) return {};

  const title = service.getMetaTitle(location);
  const description = service.getMetaDescription(location);
  const url = `https://www.mimctechnologies.com/services/tally-cloud/${location.citySlug}/`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "MIMC Technologies",
      images: [{ url: "/logo.webp", width: 1200, height: 630 }],
    },
  };
}

export default async function Page(props: Props) {
  const { city } = await props.params;
  const location = getLocationByCitySlug(city);

  if (!location || !location.supportsTallyCloud) {
    notFound();
  }

  const data = resolveCityServiceData("tally-cloud", location);

  return <CityServiceDetail location={location} data={data} />;
}
