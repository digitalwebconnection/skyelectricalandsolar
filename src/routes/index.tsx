import { lazy, Suspense, useEffect } from "react";
import { useNavigation } from "../context";
import { siteConfig } from "../config/site";
import { SERVICES_DATA } from "../pages/services/data/servicesData";
import { BLOG_POSTS } from "../pages/blogs/data/blogData";
import WebsiteLoader from "@/components/common/WebsiteLoader";

// Lazy load pages for optimal code splitting & lightning fast initial load
const HomePage = lazy(() => import("../pages/home/HomePage"));
const AboutPage = lazy(() => import("../pages/about/AboutPage"));
const SpecialsPage = lazy(() => import("../pages/specials/SpecialsPage"));
const ContactPage = lazy(() => import("../pages/contact/ContactPage"));
const BlogsPage = lazy(() => import("../pages/blogs/BlogsPage"));
const BlogDetailPage = lazy(() => import("../pages/blogs/BlogDetailPage"));
const ServicesPage = lazy(() => import("../pages/services/ServicesPage"));
const ServiceDetailPage = lazy(() => import("../pages/services/ServiceDetailPage"));
const PrivacyPolicyPage = lazy(() => import("../pages/legal/PrivacyPolicyPage"));
const TermsConditionsPage = lazy(() => import("../pages/legal/TermsConditionsPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

export function AppRouter() {
  const { currentPath } = useNavigation();

  // Match routes
  const isAbout =
    currentPath === "/about-us" ||
    currentPath === "/about" ||
    currentPath.includes("about");
  const isSpecials =
    currentPath === "/specials" ||
    currentPath.startsWith("/special") ||
    currentPath.includes("special");
  const isHome =
    (currentPath === "/" || currentPath === "") && !isSpecials && !isAbout;
  const isContact = currentPath.includes("contact");
  const isServiceDetail =
    currentPath.startsWith("/services/") ||
    (currentPath.startsWith("/service/") && currentPath !== "/service");
  const isServices =
    !isServiceDetail &&
    (currentPath === "/services" ||
      currentPath === "/service" ||
      currentPath.startsWith("/services") ||
      currentPath.startsWith("/service"));
  const isBlogDetail =
    currentPath.startsWith("/blogs/") ||
    (currentPath.startsWith("/blog/") && currentPath !== "/blog");
  const isBlogs = !isBlogDetail && currentPath.includes("blog");
  const isPrivacy = currentPath.includes("privacy");
  const isTerms = currentPath.includes("terms");

  // Extract slugs
  const blogSlug = isBlogDetail
    ? currentPath.replace(/^\/(blogs|blog)\//, "").split("/")[0].split("?")[0]
    : "";
  const serviceSlug = isServiceDetail
    ? currentPath.replace(/^\/(services|service)\//, "").split("/")[0].split("?")[0]
    : "";

  useEffect(() => {
    if (isAbout) {
      document.title = `About Us | ${siteConfig.name} - Clean Energy Engineering`;
    } else if (isSpecials) {
      document.title = `Solar & Battery Specials | ${siteConfig.name}`;
    } else if (isHome) {
      document.title = siteConfig.title;
    } else if (isContact) {
      document.title = `Contact Us | ${siteConfig.name} - WA, NSW & QLD Energy Hubs`;
    } else if (isServiceDetail) {
      const activeService = SERVICES_DATA.find(
        (s) =>
          s.slug.toLowerCase() === serviceSlug.toLowerCase() ||
          s.id.toLowerCase() === serviceSlug.toLowerCase(),
      );
      document.title = activeService
        ? `${activeService.title} | ${siteConfig.name}`
        : `Electrical & Solar Service | ${siteConfig.name}`;
    } else if (isServices) {
      document.title = `Services | ${siteConfig.name} - Solar, Battery, EV & Electrical`;
    } else if (isBlogDetail) {
      const activePost = BLOG_POSTS.find(
        (p) =>
          p.slug.toLowerCase() === blogSlug.toLowerCase() ||
          p.id.toLowerCase() === blogSlug.toLowerCase(),
      );
      document.title = activePost
        ? `${activePost.title} | ${siteConfig.name}`
        : `Clean Energy Guide | ${siteConfig.name}`;
    } else if (isBlogs) {
      document.title = `Clean Energy Insights & Blogs | ${siteConfig.name}`;
    } else if (isPrivacy) {
      document.title = `Privacy Policy | ${siteConfig.name} - APPs Compliant`;
    } else if (isTerms) {
      document.title = `Terms & Conditions | ${siteConfig.name} - CEC Standards`;
    } else {
      document.title = `404 Not Found | ${siteConfig.name}`;
    }
  }, [
    isAbout,
    isSpecials,
    isHome,
    isContact,
    isServiceDetail,
    isServices,
    isBlogDetail,
    isBlogs,
    isPrivacy,
    isTerms,
    serviceSlug,
    blogSlug,
  ]);

  return (
    <Suspense fallback={<WebsiteLoader minDuration={1800} />}>
      {isAbout ? (
        <AboutPage />
      ) : isSpecials ? (
        <SpecialsPage />
      ) : isHome ? (
        <HomePage />
      ) : isContact ? (
        <ContactPage />
      ) : isServiceDetail ? (
        <ServiceDetailPage slug={serviceSlug} />
      ) : isServices ? (
        <ServicesPage />
      ) : isBlogDetail ? (
        <BlogDetailPage slug={blogSlug} />
      ) : isBlogs ? (
        <BlogsPage />
      ) : isPrivacy ? (
        <PrivacyPolicyPage />
      ) : isTerms ? (
        <TermsConditionsPage />
      ) : (
        <NotFoundPage />
      )}
    </Suspense>
  );
}

export default AppRouter;
