interface FAQ {
  q: string;
  a: string;
}

interface Breadcrumb {
  name: string;
  url: string;
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  faqs: FAQ[];
  breadcrumbs: Breadcrumb[];
  rating: number;
  reviewCount: number;
}

export default function ServiceSchema({
  name,
  description,
  url,
  faqs,
  breadcrumbs,
  rating,
  reviewCount,
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${url}#product`,
        name: name,
        description: description,
        image: "https://www.mimctechnologies.com/logo.webp",
        brand: {
          "@type": "Brand",
          name: "MIMC Technologies",
          url: "https://www.mimctechnologies.com",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: rating.toString(),
          reviewCount: reviewCount.toString(),
          bestRating: "5",
          worstRating: "1",
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: url,
          hasMerchantReturnPolicy: {
            "@type": "MerchantReturnPolicy",
            applicableCountry: "US",
            returnPolicyCategory:
              "https://schema.org/MerchantReturnFiniteReturnWindow",
            merchantReturnDays: 14,
            returnMethod: "https://schema.org/ReturnByMail",
            returnFees: "https://schema.org/FreeReturn",
          },
          shippingDetails: {
            "@type": "OfferShippingDetails",
            shippingRate: {
              "@type": "MonetaryAmount",
              value: "0",
              currency: "USD",
            },
            deliveryTime: {
              "@type": "ShippingDeliveryTime",
              handlingTime: {
                "@type": "QuantitativeValue",
                minValue: 0,
                maxValue: 0,
                unitCode: "DAY",
              },
              transitTime: {
                "@type": "QuantitativeValue",
                minValue: 0,
                maxValue: 0,
                unitCode: "DAY",
              },
            },
            shippingDestination: {
              "@type": "DefinedRegion",
              addressCountry: [
                "IN",
                "US",
                "CA",
                "GB",
                "AU",
                "NZ",
                "IE",
                "ZA",
                "AE",
                "SG",
                "MY",
                "BR",
                "MX",
                "DE",
                "FR",
                "IT",
                "ES",
                "NL",
                "JP",
                "KR",
              ],
            },
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: crumb.url,
        })),
      },
      faqs.length > 0 && {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
