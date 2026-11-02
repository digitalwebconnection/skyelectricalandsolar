import { useEffect } from "react";
import { siteConfig } from "../../config/site";

export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
}

export function SEO({
  title,
  description = siteConfig.description,
  canonical,
  ogImage = siteConfig.ogImage,
  ogType = "website",
}: SEOProps) {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;

  useEffect(() => {
    // Document title
    document.title = fullTitle;

    // Meta Description
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement("meta");
      descMeta.setAttribute("name", "description");
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute("content", description);

    // Open Graph Meta Tags
    const setMetaTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    setMetaTag("og:title", fullTitle);
    setMetaTag("og:description", description);
    setMetaTag("og:type", ogType);
    setMetaTag("og:image", ogImage);
    if (canonical) {
      setMetaTag("og:url", canonical);
    }

    // Twitter Card Tags
    const setTwitterTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    setTwitterTag("twitter:card", "summary_large_image");
    setTwitterTag("twitter:title", fullTitle);
    setTwitterTag("twitter:description", description);
    setTwitterTag("twitter:image", ogImage);

    // Canonical Link
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }
  }, [fullTitle, description, canonical, ogImage, ogType]);

  return null;
}

export default SEO;

