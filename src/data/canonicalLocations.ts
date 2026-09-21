import whatsappLocations from "./whatsappLocations.json";

export interface CanonicalLocation {
  citySlug: string;
  legacySlug: string;
  city: string;
  state: string;
  country: string;
  countryCode: string;
  phone: string;
  industries: string[];
  localContext: string;
  complianceNote: string;
  localTrustSignal: string;
  supportsTally: boolean;
  supportsTallyCloud: boolean;
  supportsERP: boolean;
  supportsWhatsApp: boolean;
  supportsWebDev: boolean;
  supportsSEO: boolean;
}

const TALLY_COUNTRY_CODES = new Set(["IN", "AE", "SA", "QA", "KW", "BH", "OM"]);

export const CANONICAL_LOCATIONS: CanonicalLocation[] = (
  whatsappLocations as Array<{
    city: string;
    state: string;
    country: string;
    countryCode: string;
    slug: string;
    phone: string;
    industries?: string[];
    localContext?: string;
    complianceNote?: string;
    localTrustSignal?: string;
  }>
).map((loc) => {
  const citySlug = loc.slug.replace(/^whatsapp-api-/, "");
  const isTallyEligible = TALLY_COUNTRY_CODES.has(loc.countryCode);

  return {
    citySlug,
    legacySlug: loc.slug,
    city: loc.city,
    state: loc.state,
    country: loc.country,
    countryCode: loc.countryCode,
    phone:
      loc.phone ||
      (loc.countryCode === "CA" ? "+1-416-857-8831" : "+91-9259418994"),
    industries: loc.industries || [
      "Wholesale & Distribution",
      "Manufacturing & Supply Chain",
      "Professional Services",
      "E-Commerce & Retail",
    ],
    localContext:
      loc.localContext ||
      `${loc.city} is a major commercial growth center in ${loc.state}, ${loc.country}, where modern enterprises leverage cloud automation and enterprise systems to streamline operations.`,
    complianceNote:
      loc.complianceNote ||
      `Compliant with ${loc.country} commercial regulatory standards, local tax frameworks, and enterprise encryption protocols.`,
    localTrustSignal:
      loc.localTrustSignal ||
      `Serving commercial enterprises and growing businesses across the ${loc.city} metropolitan area.`,
    supportsTally: isTallyEligible,
    supportsTallyCloud: isTallyEligible,
    supportsERP: true,
    supportsWhatsApp: true,
    supportsWebDev: true,
    supportsSEO: true,
  };
});

export function getLocationByCitySlug(
  citySlug: string,
): CanonicalLocation | undefined {
  return CANONICAL_LOCATIONS.find((l) => l.citySlug === citySlug);
}

export function getLocationByLegacySlug(
  slug: string,
): CanonicalLocation | undefined {
  return CANONICAL_LOCATIONS.find(
    (l) => l.legacySlug === slug || l.citySlug === slug,
  );
}

export function getLocationsForService(
  serviceId:
    | "tally-cloud"
    | "tally-whatsapp-integration"
    | "erp-crm"
    | "whatsapp-api"
    | "web-development"
    | "digital-marketing"
    | "enterprise-consulting",
): CanonicalLocation[] {
  switch (serviceId) {
    case "tally-cloud":
      return CANONICAL_LOCATIONS.filter((l) => l.supportsTallyCloud);
    case "tally-whatsapp-integration":
      return CANONICAL_LOCATIONS.filter((l) => l.supportsTally);
    case "erp-crm":
      return CANONICAL_LOCATIONS.filter((l) => l.supportsERP);
    case "whatsapp-api":
      return CANONICAL_LOCATIONS.filter((l) => l.supportsWhatsApp);
    case "web-development":
      return CANONICAL_LOCATIONS.filter((l) => l.supportsWebDev);
    case "digital-marketing":
      return CANONICAL_LOCATIONS.filter((l) => l.supportsSEO);
    case "enterprise-consulting":
      return CANONICAL_LOCATIONS;
    default:
      return CANONICAL_LOCATIONS;
  }
}
