import { ServicesHero } from "./components/ServicesHero";
import { ServicesGridSection } from "./components/ServicesGridSection";
import { ServicesWhyChooseSection } from "./components/ServicesWhyChooseSection";
import { ServicesCtaSection } from "./components/ServicesCtaSection";

export function ServicesPage() {
  return (
    <div className="w-full bg-[#faf8f5]">
      {/* 1. Hero Section with Full-Width Image */}
      <ServicesHero />

      {/* 2. 6 Core Services Grid in Middle of Page */}
      <ServicesGridSection />

      {/* 3. Why Choose Sky Electrical & Solar */}
      <ServicesWhyChooseSection />

      {/* 4. Consultation & Rapid Assessment CTA */}
      <ServicesCtaSection />
    </div>
  );
}

export default ServicesPage;

