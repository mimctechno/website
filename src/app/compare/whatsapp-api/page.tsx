import type { Metadata } from "next";
import WhatsAppCompare from "@/views/compare/WhatsAppCompare";

export const metadata: Metadata = {
  title:
    "Direct Meta WhatsApp Cloud API vs. SaaS Aggregators (Wati, Twilio) | MIMC",
  description:
    "Compare direct Meta WhatsApp Cloud API vs 3rd-party aggregators (Wati, Twilio, AiSensy). Discover how to eliminate 15%-40% per-message surcharges and $0 per-agent user fees with official Meta SLA.",
  alternates: {
    canonical: "https://www.mimctechnologies.com/compare/whatsapp-api/",
  },
  openGraph: {
    url: "https://www.mimctechnologies.com/compare/whatsapp-api/",
    title:
      "Direct Meta WhatsApp Cloud API vs. SaaS Aggregators (Wati, Twilio) | MIMC",
    description:
      "Compare direct Meta WhatsApp Cloud API vs 3rd-party aggregators (Wati, Twilio, AiSensy). 0% message markups, $0 per-agent fees, zero ban risk, and instant Meta Embedded Signup.",
    type: "website",
    siteName: "MIMC Technologies",
    images: [{ url: "/logo.webp", width: 1200, height: 630 }],
  },
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can we keep our existing WhatsApp phone number when switching to MIMC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Meta provides an official number porting protocol. Your phone number, verified display name, and quality rating seamlessly transfer from your current BSP (like Wati, Twilio, or Gupshup) directly into your official Meta WABA with zero downtime.",
        },
      },
      {
        "@type": "Question",
        name: "Why do SaaS aggregators charge a markup on WhatsApp conversations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aggregators act as commercial middlemen. They take Meta's base conversation rate and add a 15% to 40% margin on top of it, alongside monthly platform fees ($49–$299/mo) and per-agent user fees ($29–$79/agent/mo). As an official Meta Cloud API Tech Provider, MIMC routes your messages directly to Meta's infrastructure with 0% middleman surcharge.",
        },
      },
      {
        "@type": "Question",
        name: "Do we have to pay monthly per-user fees for our support agents?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. With MIMC, you do not pay per-agent SaaS subscription fees. You have full code and data ownership to connect unlimited team members, automated AI agents, or multi-department inboxes without paying extra seat fees every month.",
        },
      },
      {
        "@type": "Question",
        name: "Will we lose our Meta Verified Green Tick checkmark during migration?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The Official Business Account (Green Tick) belongs to your business phone number and Meta Business Manager, not to the aggregator. Your green badge stays permanently active throughout the migration.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <WhatsAppCompare />
    </>
  );
}
