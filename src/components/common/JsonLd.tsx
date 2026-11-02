import { useEffect } from "react";
import { siteConfig } from "../../config/site";

export interface JsonLdProps {
  type?: "LocalBusiness" | "Article" | "Service";
  data?: Record<string, unknown>;
}

export function JsonLd({ type = "LocalBusiness", data }: JsonLdProps) {
  useEffect(() => {
    const defaultLocalBusiness = {
      "@context": "https://schema.org",
      "@type": "Electrician",
      name: siteConfig.name,
      image: "https://skyelectricalandsolar.com/assets/commercial-solar.webp",
      "@id": "https://skyelectricalandsolar.com",
      url: "https://skyelectricalandsolar.com",
      telephone: "+61430015017",
      priceRange: "$$",
      address: [
        {
          "@type": "PostalAddress",
          streetAddress: "113 Barbarossa drive",
          addressLocality: "Caversham",
          addressRegion: "WA",
          postalCode: "6055",
          addressCountry: "AU",
        },
        {
          "@type": "PostalAddress",
          streetAddress: "114 Burns Road",
          addressLocality: "Kellyville",
          addressRegion: "NSW",
          postalCode: "2155",
          addressCountry: "AU",
        },
        {
          "@type": "PostalAddress",
          streetAddress: "17 Western Avenue",
          addressLocality: "Chermside",
          addressRegion: "QLD",
          postalCode: "4032",
          addressCountry: "AU",
        },
      ],
      geo: {
        "@type": "GeoCoordinates",
        latitude: -31.8791,
        longitude: 115.9863,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:00",
        closes: "18:00",
      },
      sameAs: [
        siteConfig.links.facebook,
        siteConfig.links.x,
        siteConfig.links.youtube,
      ],
    };

    const schemaContent = data ? { "@context": "https://schema.org", "@type": type, ...data } : defaultLocalBusiness;

    let scriptTag = document.querySelector('script[data-schema="skye-jsonld"]');
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.setAttribute("type", "application/ld+json");
      scriptTag.setAttribute("data-schema", "skye-jsonld");
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaContent);
  }, [type, data]);

  return null;
}

export default JsonLd;

