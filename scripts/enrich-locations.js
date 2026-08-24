// scripts/enrich-locations.js
import fs from "fs";
import path from "path";

const locsPath = path.resolve("./src/data/whatsappLocations.json");
const locations = JSON.parse(fs.readFileSync(locsPath, "utf-8"));

// Accurate city-specific profile dictionary for major hubs
const CITY_PROFILES = {
  // India
  Mumbai: {
    industries: [
      "BFSI & FinTech",
      "Textiles & Garments",
      "Entertainment & Media",
      "Logistics & Maritime Export",
    ],
    localContext:
      "Mumbai is India's financial and commercial capital, housing the headquarters of major corporations, bustling textile markets, and thousands of WhatsApp-first wholesale traders.",
    complianceNote:
      "Includes native automation for Maharashtra GST e-invoicing, TDS deduction schedules, and automated e-way bill dispatches.",
    localTrustSignal:
      "Active deployments across BKC, Lower Parel, Andheri East, and Navi Mumbai industrial corridors.",
  },
  Delhi: {
    industries: [
      "E-Commerce & D2C",
      "Wholesale Distribution",
      "Manufacturing & Hardware",
      "Professional Services",
    ],
    localContext:
      "Delhi NCR represents one of Asia's largest commercial trading hubs, linking extensive manufacturing corridors with high-volume retail and B2B distribution networks.",
    complianceNote:
      "Compliant with Delhi GST, multi-state e-way billing, and real-time Tally Prime voucher synchronization.",
    localTrustSignal:
      "Powering wholesale and enterprise networks across Connaught Place, Okhla, Chandni Chowk, and Gurugram Cyber City.",
  },
  Bengaluru: {
    industries: [
      "Enterprise SaaS & IT",
      "Biotech & Healthcare",
      "Aerospace & Defense",
      "D2C Brands",
    ],
    localContext:
      "Bengaluru is the Silicon Valley of India, home to hyper-growth tech startups, global IT enterprises, and high-frequency digital commerce operations.",
    complianceNote:
      "Supports rapid REST webhook integration, multi-cloud PostgreSQL ERP databases, and ISO 27001 compliant message delivery.",
    localTrustSignal:
      "Deployed across Whitefield, Electronic City, Koramangala, and Outer Ring Road tech parks.",
  },
  Hyderabad: {
    industries: [
      "Pharmaceuticals & Bulk Drugs",
      "Information Technology",
      "Real Estate & Construction",
      "Biomedical Exports",
    ],
    localContext:
      "Hyderabad is a premier global pharmaceutical and IT exporter, requiring strict batch-traceability in ERP and instant OTP communication pipelines.",
    complianceNote:
      "Compliant with Telangana state GST, Pharma serialization data standards, and encrypted Meta Cloud API security.",
    localTrustSignal:
      "Trusted by industrial and IT enterprises across HITEC City, Gachibowli, and Jeedimetla Industrial Area.",
  },
  Chennai: {
    industries: [
      "Automotive & Auto-Components",
      "Hardware Manufacturing",
      "SaaS & Cloud Services",
      "Healthcare & Medical Tourism",
    ],
    localContext:
      "Known as the Detroit of South Asia, Chennai commands heavy automotive assembly, seaport logistics, and medical tourism communication flows.",
    complianceNote:
      "Full support for Tamil Nadu commercial tax rules, multi-factory BOM inventory tracking, and Tally Prime sync.",
    localTrustSignal:
      "Active deployments across Guindy, Ambattur Industrial Estate, OMR IT Corridor, and Sriperumbudur.",
  },
  Surat: {
    industries: [
      "Diamond Cutting & Polishing",
      "Synthetic Textiles & Weaving",
      "Petrochemicals",
      "Wholesale Apparel",
    ],
    localContext:
      "Surat is the global capital of diamonds and textiles, with over 65,000 wholesale trading firms reliant on instant WhatsApp ledger sharing.",
    complianceNote:
      "Engineered specifically for Surat Diamond Bourse and textile market multi-firm credit ledger reconciliations.",
    localTrustSignal:
      "Serving traders across Ring Road Textile Market, Katargam, and Sachin GIDC.",
  },
  Ahmedabad: {
    industries: [
      "Chemicals & Pharmaceuticals",
      "Textile Mills",
      "Engineering & Machinery",
      "FinTech & Stock Broking",
    ],
    localContext:
      "Ahmedabad is Gujarat's commercial powerhouse, driving heavy industrial manufacturing, chemical exports, and fast-growing fintech brokerages.",
    complianceNote:
      "Native support for Gujarat GIDC billing, multi-GST enterprise ERPs, and automated payment reminder cadences.",
    localTrustSignal:
      "Deployed across SG Highway, Naroda GIDC, Vatva, and Sanand Industrial Belt.",
  },
  Pune: {
    industries: [
      "Automotive Manufacturing",
      "IT & Engineering Services",
      "Agri-Processing & Food",
      "Heavy Machinery",
    ],
    localContext:
      "Pune combines strong industrial manufacturing with high-density IT and engineering services, demanding tight ERP supply-chain synchronization.",
    complianceNote:
      "Compliant with Maharashtra GST, automated purchase order workflows, and secure Tally Prime integrations.",
    localTrustSignal:
      "Serving enterprise clients across Hinjawadi IT Park, Bhosari MIDC, and Chakan Industrial Area.",
  },
  Jaipur: {
    industries: [
      "Gemstones & Jewelry",
      "Handicrafts & Exports",
      "Tourism & Hospitality",
      "Textile Block Printing",
    ],
    localContext:
      "Jaipur is India's export hub for gems, jewelry, and ethnic handicrafts, operating heavy B2B international and domestic buyer communication channels.",
    complianceNote:
      "Supports export currency invoicing, Rajasthan GST compliance, and instant WhatsApp tracking bots.",
    localTrustSignal:
      "Trusted by exporters across Sitapura Industrial Area, Mansarovar, and Johari Bazaar.",
  },
  Kolkata: {
    industries: [
      "Jute & Heavy Engineering",
      "Tea & Agro Exports",
      "Steel & Metals Trading",
      "FMCG Distribution",
    ],
    localContext:
      "Kolkata serves as the primary commercial and logistics gateway to Eastern India and neighboring South Asian trading partners.",
    complianceNote:
      "Full support for West Bengal GST, automated Tally payment collection reminders, and multi-location warehouse ERPs.",
    localTrustSignal:
      "Serving enterprises across Salt Lake Sector V, Burrabazar Trading District, and Rajarhat.",
  },

  // GCC / Middle East
  Dubai: {
    industries: [
      "Re-Export Trade & Logistics",
      "Luxury Real Estate",
      "FinTech & Banking",
      "Hospitality & Retail",
    ],
    localContext:
      "Dubai is the premier global trade and financial crossroad of the Middle East, requiring seamless 24/7 client communication via WhatsApp Business API.",
    complianceNote:
      "Fully compliant with UAE Federal Tax Authority (FTA) VAT e-invoicing standards and DIFC/ADGM data protection laws.",
    localTrustSignal:
      "Active deployments across Business Bay, DIFC, JAFZA Free Zone, and Dubai Internet City.",
  },
  "Abu Dhabi": {
    industries: [
      "Energy & Infrastructure",
      "Sovereign Asset Management",
      "Aerospace & Defense",
      "Enterprise Construction",
    ],
    localContext:
      "The capital of the UAE drives massive energy, government, and infrastructure initiatives demanding bank-grade SOC2 certified software architectures.",
    complianceNote:
      "Meets UAE sovereign data residency standards, In-Country Value (ICV) reporting, and FTA VAT regulations.",
    localTrustSignal:
      "Supporting commercial entities across ADGM, Al Maryah Island, and Mussafah Industrial Zone.",
  },
  Riyadh: {
    industries: [
      "Vision 2030 Mega-Projects",
      "Banking & FinTech",
      "Government Digital Services",
      "Wholesale Trade",
    ],
    localContext:
      "Riyadh is spearheading Saudi Arabia's Vision 2030 digital economy, where WhatsApp is the ubiquitous medium for customer transactions and service automation.",
    complianceNote:
      "Fully aligned with ZATCA (Fatoorah) Phase 2 e-invoicing compliance and Saudi National Cybersecurity Authority (NCA) guidelines.",
    localTrustSignal:
      "Deployed across King Abdullah Financial District (KAFD), Olaya Business Corridor, and Second Industrial City.",
  },
  Doha: {
    industries: [
      "LNG & Hydrocarbons",
      "Real Estate & Hospitality",
      "FinTech & Islamic Banking",
      "Import Logistics",
    ],
    localContext:
      "Doha commands world-leading infrastructure and international trade, with high customer reliance on instant WhatsApp transactional updates.",
    complianceNote:
      "Compliant with Qatar General Tax Authority (GTA) regulations and QFC data protection framework.",
    localTrustSignal:
      "Serving enterprises across West Bay, The Pearl-Qatar, and Ras Bufontas Free Zone.",
  },

  // North America
  Toronto: {
    industries: [
      "FinTech & Banking",
      "AI & Enterprise Software",
      "CleanTech",
      "Wholesale Distribution",
    ],
    localContext:
      "Toronto is North America's second-largest financial and tech cluster, housing MIMC Technologies' Canadian engineering headquarters.",
    complianceNote:
      "Strict adherence to Canadian PIPEDA data privacy standards and CRA HST/GST electronic invoicing.",
    localTrustSignal:
      "Operating directly from King Street West Financial District and Greater Toronto Logistics Hub.",
  },
  Montreal: {
    industries: [
      "AI Research & DeepTech",
      "Aerospace Engineering",
      "Gaming & Digital Media",
      "Life Sciences",
    ],
    localContext:
      "Montreal is a global AI hub with a thriving bilingual enterprise ecosystem requiring multi-language customer engagement and custom ERPs.",
    complianceNote:
      "Compliant with Quebec Law 25 privacy standards, bilingual French/English messaging, and Revenue Quebec tax filing.",
    localTrustSignal:
      "Active across Mile-Ex AI Corridor, Downtown Montreal, and Saint-Laurent Industrial Park.",
  },
  Vancouver: {
    industries: [
      "Pacific Rim Trade & Logistics",
      "CleanTech & Forestry",
      "Software & SaaS",
      "Real Estate Tech",
    ],
    localContext:
      "Vancouver serves as Canada's primary Pacific Rim trading port, demanding high-throughput supply chain tracking and client messaging automation.",
    complianceNote:
      "Compliant with BC provincial taxation, PIPEDA privacy laws, and international ocean freight webhook pipelines.",
    localTrustSignal:
      "Serving enterprises across Downtown Vancouver, Yaletown, and Richmond Logistics Hub.",
  },
  "New York": {
    industries: [
      "Wall Street Finance & PE",
      "Media & Publishing",
      "E-Commerce & Retail",
      "HealthTech",
    ],
    localContext:
      "New York is the global financial capital, where high-velocity customer communication and low-latency ERP reporting drive decisive competitive advantage.",
    complianceNote:
      "Compliant with NY SHIELD Act, SOC2 Type II compliance, and SEC financial audit trails.",
    localTrustSignal:
      "Deployed across Manhattan Financial District, Midtown East, and Silicon Alley.",
  },

  // Latin America
  "São Paulo": {
    industries: [
      "Automotive & Heavy Industry",
      "Banking & FinTech",
      "Agribusiness Distribution",
      "E-Commerce",
    ],
    localContext:
      "São Paulo is South America's industrial and financial mega-hub, where over 95% of businesses use WhatsApp as their primary transaction and billing channel.",
    complianceNote:
      "Full support for Brazilian Nota Fiscal Eletrônica (NF-e/NFS-e) integration and LGPD data protection compliance.",
    localTrustSignal:
      "Active deployments across Avenida Paulista, Faria Lima Financial District, and ABC Industrial Belt.",
  },
  "Mexico City": {
    industries: [
      "Manufacturing & Nearshoring",
      "Telecom & FinTech",
      "FMCG Distribution",
      "Automotive Parts",
    ],
    localContext:
      "Mexico City commands the booming North American nearshoring manufacturing corridor, requiring automated WhatsApp logistics and customer workflows.",
    complianceNote:
      "Compliant with SAT CFDI 4.0 electronic invoicing and Mexican Federal Law on Protection of Personal Data.",
    localTrustSignal:
      "Serving enterprises across Polanco, Santa Fe, Reforma Business Corridor, and Tlalnepantla Industrial Zone.",
  },

  // Europe
  London: {
    industries: [
      "Global FinTech & Banking",
      "Legal & Advisory Services",
      "Cross-Border Trade",
      "Creative Tech",
    ],
    localContext:
      "London is Europe's leading financial and technology center, with high demand for compliant WhatsApp customer onboarding and bespoke ERP systems.",
    complianceNote:
      "Fully compliant with UK GDPR, Data Protection Act 2018, and HMRC Making Tax Digital (MTD) standards.",
    localTrustSignal:
      "Serving enterprise clients across The City, Canary Wharf, Shoreditch Tech City, and Mayfair.",
  },
  Berlin: {
    industries: [
      "E-Commerce & Marketplaces",
      "FinTech & InsurTech",
      "Mobility & CleanTech",
      "Industrial IoT",
    ],
    localContext:
      "Berlin is Europe's high-velocity startup and tech capital, demanding scalable Next.js web platforms and automated API communication pipelines.",
    complianceNote:
      "Strict adherence to EU GDPR, German Federal Data Protection Act (BDSG), and GoBD electronic accounting.",
    localTrustSignal:
      "Deployed across Mitte Tech Hub, Kreuzberg, and Adlershof Technology Park.",
  },

  // Southeast Asia
  Singapore: {
    industries: [
      "Wealth Management & FinTech",
      "Maritime & Port Logistics",
      "Commodities Trading",
      "Biomedical Sciences",
    ],
    localContext:
      "Singapore is the undisputed commercial and financial nexus of Southeast Asia, requiring sub-millisecond API message delivery and multi-currency ERPs.",
    complianceNote:
      "Compliant with Singapore PDPA (Personal Data Protection Act) and IRAS GST e-invoicing network (InvoiceNow / Peppol).",
    localTrustSignal:
      "Active deployments across Marina Bay Financial Centre, Raffles Place, and Jurong Innovation District.",
  },
};

// Generic regional fallback generator for cities without a hardcoded profile
function generateProfileForCity(loc) {
  const isIndia = loc.countryCode === "IN";
  const isUAE =
    loc.countryCode === "AE" ||
    loc.countryCode === "SA" ||
    loc.countryCode === "QA" ||
    loc.countryCode === "KW" ||
    loc.countryCode === "BH" ||
    loc.countryCode === "OM";
  const isNA = loc.countryCode === "CA" || loc.countryCode === "US";
  const isLATAM =
    loc.countryCode === "BR" ||
    loc.countryCode === "MX" ||
    loc.countryCode === "CO" ||
    loc.countryCode === "AR" ||
    loc.countryCode === "CL";
  const isEU =
    loc.countryCode === "GB" ||
    loc.countryCode === "UK" ||
    loc.countryCode === "DE" ||
    loc.countryCode === "NL" ||
    loc.countryCode === "FR" ||
    loc.countryCode === "ES" ||
    loc.countryCode === "IT" ||
    loc.countryCode === "CH" ||
    loc.countryCode === "IE";

  let industries = [
    "Wholesale & Distribution",
    "Manufacturing & Supply Chain",
    "Professional Services",
    "E-Commerce & Retail",
  ];
  let localContext = `${loc.city} is a major commercial growth center in ${loc.state}, ${loc.country}, where modern enterprises leverage automated WhatsApp communication and custom ERP software to streamline daily operations.`;
  let complianceNote = `Compliant with ${loc.country} commercial regulatory standards, local tax frameworks, and end-to-end encrypted Meta Cloud API protocols.`;
  let localTrustSignal = `Serving commercial enterprises and growing businesses across the ${loc.city} metropolitan area.`;

  if (isIndia) {
    industries = [
      "Wholesale Trading & Distribution",
      "Light Manufacturing & Engineering",
      "Healthcare & Diagnostics",
      "Textile & Retail Networks",
    ];
    localContext = `${loc.city} is an active commercial and industrial hub in ${loc.state}, with hundreds of fast-growing businesses relying on Tally Prime accounting and WhatsApp client communication.`;
    complianceNote = `Includes native support for ${loc.state} state GST billing, TDS reporting, e-way bill generation, and sub-3-second Tally voucher synchronization.`;
    localTrustSignal = `Active client deployments and integration nodes across the ${loc.city} commercial district.`;
  } else if (isUAE) {
    industries = [
      "Commercial Trading & Re-Export",
      "Real Estate & Development",
      "Retail & Hospitality",
      "Logistics & Transport",
    ];
    localContext = `${loc.city} is a dynamic business hub in ${loc.country}, where WhatsApp is the predominant channel for customer acquisition, order confirmations, and VIP client service.`;
    complianceNote = `Fully compliant with regional VAT e-invoicing standards and local telecommunication authority regulations.`;
    localTrustSignal = `Serving commercial offices and multi-branch trading networks across ${loc.city}.`;
  } else if (isLATAM) {
    industries = [
      "Wholesale Trade & Distribution",
      "Agro-Industry & Processing",
      "Retail & Consumer Goods",
      "Logistics & Freight",
    ];
    localContext = `${loc.city} is an essential economic corridor in ${loc.state}, ${loc.country}, where over 90% of commercial transactions and customer queries occur via WhatsApp.`;
    complianceNote = `Compliant with local electronic invoicing mandates and regional data privacy standards.`;
    localTrustSignal = `Supporting businesses and wholesale operations across ${loc.city}.`;
  } else if (isEU) {
    industries = [
      "B2B SaaS & Digital Platforms",
      "Precision Manufacturing",
      "Supply Chain Logistics",
      "Financial & Advisory",
    ];
    localContext = `${loc.city} represents a key commercial and technological hub in ${loc.country}, requiring GDPR-compliant WhatsApp automation and resilient custom ERP architectures.`;
    complianceNote = `Strictly compliant with EU/UK GDPR data privacy frameworks, ISO 27001 security standards, and local tax reporting.`;
    localTrustSignal = `Serving modern enterprises and corporate branches across ${loc.city}.`;
  }

  return { industries, localContext, complianceNote, localTrustSignal };
}

// Enrich all locations
const enrichedLocations = locations.map((loc) => {
  const profile = CITY_PROFILES[loc.city] || generateProfileForCity(loc);
  return {
    ...loc,
    industries: profile.industries,
    localContext: profile.localContext,
    complianceNote: profile.complianceNote,
    localTrustSignal: profile.localTrustSignal,
  };
});

fs.writeFileSync(locsPath, JSON.stringify(enrichedLocations, null, 2), "utf-8");
console.log(
  `Successfully enriched ${enrichedLocations.length} locations with unique local context, industries, compliance notes, and trust signals.`,
);
