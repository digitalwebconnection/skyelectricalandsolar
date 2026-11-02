import { SpecialsHero } from "./components/SpecialsHero";
import { SpecialsPackagesSection } from "./components/SpecialsPackagesSection";
import { SpecialsAssessmentCta } from "./components/SpecialsAssessmentCta";

export function SpecialsPage() {
  return (
    <div className="w-full bg-[#faf8f5]">
      {/* 1. Specials Promotional Hero Section with STC & Rebate Highlights */}
      <SpecialsHero />

      {/* 2. Featured Promotional Specials Packages (6.6kW, 13.2kW + Battery, EV, Commercial) */}
      <SpecialsPackagesSection />

      {/* 3. State Rebate Eligibility & Consultation Dispatch Hub */}
      <SpecialsAssessmentCta />
    </div>
  );
}

export default SpecialsPage;

