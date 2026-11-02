import {
  AboutHero,
  AboutStory,
  AboutPillars,
  AboutStandards,
  AboutCta,
} from "./components";

export function AboutPage() {
  return (
    <div className="flex w-full flex-col">
      {/* 1. Hero Section: Light-themed, responsive 3-line headline & 4-metric counter strip */}
      <AboutHero />

      {/* 2. Founding Heritage: Editorial narrative, license credentials & comparison matrix */}
      <AboutStory />

      {/* 3. The Sky Engineering Pillars: 5-Card Modern Bento Grid */}
      <AboutPillars />

      {/* 4. National Compliance & Accreditations: Deep solar navy Australian Standards Wall */}
      <AboutStandards />

      {/* 6. Executive CTA: Dual-Panel Architectural Consultation & Direct Hotline */}
      <AboutCta />
    </div>
  );
}

export default AboutPage;
