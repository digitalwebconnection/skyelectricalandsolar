export const ROUTES = {
  HOME: "/",
  ABOUT: "/about-us",
  SERVICES: "/services",
  SERVICE_DETAIL: (slug: string) => `/services/${slug}`,
  BLOGS: "/blogs",
  BLOG_DETAIL: (slug: string) => `/blogs/${slug}`,
  SPECIALS: "/specials",
  CONTACT: "/contact-us",
  PRIVACY: "/privacy-policy",
  TERMS: "/terms-conditions",
} as const;

export default ROUTES;

