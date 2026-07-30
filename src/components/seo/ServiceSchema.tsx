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
        brand: {
          "@type": "Organization",
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
