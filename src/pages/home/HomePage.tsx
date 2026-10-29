import {
  SlidingBannerHero,
  HeroSection,
  TrustStrip,
  SolutionsSection,
  SolarSectorsSection,
  SolarCalculatorSection,
  WhyChooseUsSection,
  PartnersSection,
  ReviewsSection,
  FaqSection,
} from "./components";

export function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 0. Top Visual Sliding Banner Hero (Pure Image Carousel with React Bits PixelSwap auto-animation) */}
      <SlidingBannerHero />

      {/* 2. Key Industry Accreditation & Metrics Strip */}
      <TrustStrip />
      
      {/* 1. Hero Section with Left Content & Right 3D FlyingPosters Animation */}
      <HeroSection />

          {/* 6. 4-Step Process & Workmanship Guarantee */}
      <WhyChooseUsSection />

      {/* 3. Solar & Battery Core Solutions */}
      <SolutionsSection />

      {/* 5. Interactive Solar Savings & ROI Calculator */}
      <SolarCalculatorSection />
        {/* 4. Residential & Commercial Solar Sectors (with React Bits FadeContent) */}
      <SolarSectorsSection />



      {/* 6. Dual Logo Marquee: Inverter & Solar Panel Brand Partners */}
      <PartnersSection />

      {/* 7. Customer Reviews & Multi-Column Parallax Gallery */}
      <ReviewsSection />

      {/* 8. Frequently Asked Questions (FAQ) */}
      <FaqSection />
    </div>
  );
}

export default HomePage;
