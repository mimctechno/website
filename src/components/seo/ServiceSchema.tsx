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
        "@type": "Service",
        "@id": `${url}#service`,
        name: name,
        description: description,
        provider: {
          "@type": "Organization",
          name: "MIMC Technologies",
          url: "https://www.mimctechnologies.com",
        },
        areaServed: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: "43.6532",
            longitude: "-79.3832",
          },
          geoRadius: "40000000",
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
          availability: "https://schema.org/InStock",
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
