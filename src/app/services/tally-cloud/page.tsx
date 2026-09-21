import type { Metadata } from "next";
import TallyCloud from "@/views/services/TallyCloud";

export const metadata: Metadata = {
  title:
    "Tally on Cloud Provider — Fast Tally Prime Cloud Hosting on Mac & PC | MIMC",
  description:
    "Run Tally Prime securely on cloud. Access anywhere on Mac, Windows, tablet or browser. Fast NVMe speed, multi-user support & automatic daily backup. Free live demo.",
  alternates: {
    canonical: "https://www.mimctechnologies.com/services/tally-cloud/",
  },
  openGraph: {
    url: "https://www.mimctechnologies.com/services/tally-cloud/",
    title:
      "Tally on Cloud Provider — Fast Tally Prime Cloud Hosting on Mac & PC | MIMC",
    description:
      "Run Tally Prime securely on cloud. Access anywhere on Mac, Windows, tablet or browser. Fast NVMe speed, multi-user support & automatic daily backup. Free live demo.",
    type: "website",
    siteName: "MIMC Technologies",
    images: [{ url: "/logo.webp", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <TallyCloud />;
}
