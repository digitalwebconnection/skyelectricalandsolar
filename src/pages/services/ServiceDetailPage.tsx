import { ArrowLeft, BookOpen } from "lucide-react";
import { SERVICES_DATA } from "./data/servicesData";
import { useNavigation } from "../../context";
import {
  ServiceDetailHero,
  ServiceBenefitsSection,
  ServiceProcessSection,
  ServiceWhyChooseSection,
  ServiceDeepDiveSection,
  ServiceRecentInstallationsSection,
} from "./detail";

interface ServiceDetailPageProps {
  slug: string;
}

export function ServiceDetailPage({ slug }: ServiceDetailPageProps) {
  const { navigate } = useNavigation();

  // Normalize slug (strip trailing slashes or case differences)
  const cleanSlug = slug.replace(/\/$/, "").toLowerCase();

  const service = SERVICES_DATA.find(
    (s) => s.slug.toLowerCase() === cleanSlug || s.id.toLowerCase() === cleanSlug,
  );

  // Fallback if service not found
  if (!service) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-24 bg-[#faf8f5] text-center">
        <div className="h-16 w-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
          <BookOpen className="h-8 w-8" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
          Service Not Found
        </h1>
        <p className="text-slate-600 text-sm max-w-md mb-8">
          The electrical or solar service you are looking for may have been moved or updated.
        </p>
        <button
          type="button"
          onClick={() => navigate("/services")}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Return to All Services</span>
        </button>
      </div>
    );
  }

  return (
    <article className="w-full bg-[#faf8f5]">
      {/* 1. Hero Section with Image */}
      <ServiceDetailHero service={service} />

      {/* 2. Benefits of Installing Solar / Service */}
      <ServiceBenefitsSection service={service} />

      {/* 3. Our Solar Installation Process / Service Process */}
      <ServiceProcessSection service={service} />

      {/* 4. Why Choose Sky Electrical & Solar? */}
      <ServiceWhyChooseSection service={service} />

      {/* 5. Solar Installation / System Packages & Specifications */}
      <ServiceDeepDiveSection service={service} />

      {/* 6. Recent Installations Showcase */}
      <ServiceRecentInstallationsSection service={service} />
    </article>
  );
}

export default ServiceDetailPage;

