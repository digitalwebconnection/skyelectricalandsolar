import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  type MotionValue,
  useScroll,
  useTransform,
} from "motion/react";
import { Star, CheckCircle2, ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { useInquiryModal } from "../../../context";

// Real customer images from src/assets/CUSTOMER
import customerImg1 from "@/assets/CUSTOMER/360_F_673626923_VgJavEOXpVLdVce0oLCiuQmvgNkGal2S.jpg";
import customerImg2 from "@/assets/CUSTOMER/images.jfif";
import customerImg3 from "@/assets/CUSTOMER/images (1).jfif";
import customerImg4 from "@/assets/CUSTOMER/images (2).jfif";
import customerImg5 from "@/assets/CUSTOMER/images (3).jfif";
import customerImg6 from "@/assets/CUSTOMER/images (4).jfif";
import customerImg7 from "@/assets/CUSTOMER/mature-man-and-portrait-with-arms-crossed-in-nature-for-morning-walk-relax-or-confidence-outdoor-person-face-and-happy-in-forest-with-wellness-holiday-or-explore-aust.jpg";
import customerImg8 from "@/assets/CUSTOMER/reporter-stands-smiling-camera-beautiful-coastal-area-reporting-environmental-issues-affecting-region-with-ocean-cliffs-background_697211-29141.avif";

export interface ReviewItem {
  icon?: ReactNode;
  title: string;
  description: string;
  author: string;
  rating?: number;
  image: string;
  systemTag?: string;
  savings?: string;
}

interface ColumnProps {
  items: Array<{ item: ReviewItem; itemNumber: number }>;
  y: MotionValue<number>;
  className?: string;
}

const cardThemes = [
  // 1: Soft Sky Blue
  {
    bg: "bg-[#EBF3FE]",
    iconColor: "text-blue-600",
    cornerGlow: "bg-blue-400/20",
  },
  // 2: Soft Solar Orange / Apricot
  {
    bg: "bg-[#FFF1E6]",
    iconColor: "text-orange-500",
    cornerGlow: "bg-orange-400/20",
  },
  // 3: Soft Mint Green
  {
    bg: "bg-[#EAF7EE]",
    iconColor: "text-emerald-600",
    cornerGlow: "bg-emerald-400/20",
  },
  // 4: Soft Lavender Purple
  {
    bg: "bg-[#F2EEFD]",
    iconColor: "text-purple-600",
    cornerGlow: "bg-purple-400/20",
  },
  // 5: Soft Aqua / Teal
  {
    bg: "bg-[#E5F7F8]",
    iconColor: "text-teal-600",
    cornerGlow: "bg-teal-400/20",
  },
  // 6: Soft Rose / Blush
  {
    bg: "bg-[#FFEBEF]",
    iconColor: "text-rose-600",
    cornerGlow: "bg-rose-400/20",
  },
  // 7: Soft Solar Butter Yellow
  {
    bg: "bg-[#FFF9DE]",
    iconColor: "text-amber-600",
    cornerGlow: "bg-amber-400/20",
  },
  // 8: Soft Periwinkle Blue
  {
    bg: "bg-[#EEF1FA]",
    iconColor: "text-indigo-600",
    cornerGlow: "bg-indigo-400/20",
  },
];

const CUSTOMER_REVIEWS: ReviewItem[] = [
  {
    title: "“Power Bill Dropped from $890 to Under $40!”",
    description:
      "We were skeptical about the 80% bill reduction claims, but Skye Electrical & Solar delivered beyond our expectations. In our very first quarter with the 10.4kW system, our bill plummeted to almost zero. The crew was punctual, friendly, and left our property spotless.",
    author: "Mark & Sarah T. • Caversham, WA",
    rating: 5,
    image: customerImg1,
    systemTag: "10.4kW Rooftop PV",
    savings: "Bill: $890 ➔ $38/qtr",
  },
  {
    title: "“Flawless CEC Certified Workmanship”",
    description:
      "The installation team was top-notch. Clean conduit runs, perfectly aligned Tier-1 black panels, and certified master electricians who clearly take pride in their craft. They walked us through the mobile monitoring app before leaving.",
    author: "David & Emma M. • Kellyville, NSW",
    rating: 5,
    image: customerImg2,
    systemTag: "Master Solar Install",
    savings: "1-Day Clean Install",
  },
  {
    title: "“High-Efficiency Panels & Precision Roof Clamping”",
    description:
      "From the satellite roof modeling to the cyclone-rated roof clamping, everything was done with precision. The team handled all network grid connection permits directly with Western Power with zero hassle on our part.",
    author: "Robert & Lisa P. • Chermside, QLD",
    rating: 5,
    image: customerImg3,
    systemTag: "8.8kW Tier-1 Array",
    savings: "82% Power Bill Cut",
  },
  {
    title: "“Inverter & Real-Time App Handled Seamlessly”",
    description:
      "Watching our daily energy production and battery state-of-charge from our phones is fantastic. The hybrid inverter was mounted with industrial-grade conduits, cleanly tucked away on our garage wall.",
    author: "Elena & Chris R. • Perth, WA",
    rating: 5,
    image: customerImg4,
    systemTag: "Hybrid Inverter Setup",
    savings: "Live App Telemetry",
  },
  {
    title: "“Blackout-Proof! Battery Storage Runs the Whole House”",
    description:
      "During a severe grid outage last month, our entire neighborhood went dark for 6 hours. Our battery storage kicked in within milliseconds—the fridge, lights, and Wi-Fi didn't even flicker. Total energy peace of mind.",
    author: "James & Chloe W. • Sydney, NSW",
    rating: 5,
    image: customerImg5,
    systemTag: "Tesla / Alpha ESS Storage",
    savings: "Zero Outage Downtime",
  },
  {
    title: "“Engineered for Maximum Summer Generation”",
    description:
      "We run ducted air conditioning all day in summer without dreading expensive power bills anymore. The team custom-angled our panels for maximum solar irradiance. Outstanding customer service and genuine savings.",
    author: "Anthony & Priya L. • Brisbane, QLD",
    rating: 5,
    image: customerImg6,
    systemTag: "13.2kW Dual-Inverter",
    savings: "$3,650 Annual Savings",
  },
  {
    title: "“Full Switchboard Upgrade & EV Charger Integrated”",
    description:
      "Because Skye employs in-house licensed master electricians, they modernized our switchboard with RCD safety switches and installed our smart EV charger on the same day. Incredible craftsmanship.",
    author: "George & Anita N. • The Hills, NSW",
    rating: 5,
    image: customerImg7,
    systemTag: "Switchboard + EV Charger",
    savings: "100% Code Compliant",
  },
  {
    title: "“Rigorous Safety Testing & Government STC Rebates”",
    description:
      "Skye Electrical & Solar deducted our Clean Energy Regulator STC rebates directly upfront on the invoice—no complicated paperwork for us. The technician performed thorough export meter testing before sign-off.",
    author: "Marcus & Rachel B. • Swan Valley, WA",
    rating: 5,
    image: customerImg8,
    systemTag: "Instant STC Rebates",
    savings: "$2,600+ Govt Subsidy",
  },
  {
    title: "“Full Rooftop Solar Array & 25-Year Warranty”",
    description:
      "They provided photos of our finished installation showing the symmetrical panel layout. Knowing the panels carry a 25-year performance warranty and a 10-year workmanship guarantee made Skye the obvious choice.",
    author: "Timothy & Karen S. • Moreton Bay, QLD",
    rating: 5,
    image: customerImg1,
    systemTag: "CEC Approved Array",
    savings: "25-Yr Full Warranty",
  },
];

const Column = ({ items, y, className = "" }: ColumnProps) => {
  return (
    <motion.div
      className={`relative flex h-full flex-col gap-5 sm:gap-6 ${className}`}
      style={{ y }}
    >
      {items.map(({ item, itemNumber }, i) => {
        const theme = cardThemes[(itemNumber - 1) % cardThemes.length];
        return (
          <div
            key={i}
            className={`group relative flex flex-col justify-between p-4 sm:p-5  ${theme.bg} border border-black/5 shadow-[0_8px_24px_-4px_rgba(20,72,140,0.06)] transition-all duration-300 hover:shadow-[0_16px_36px_-6px_rgba(245,158,11,0.2)] hover:-translate-y-1.5 select-none shrink-0 overflow-hidden`}
          >
            {/* Ambient corner glow that expands on hover */}
            <div
              className={`absolute -top-12 -right-12 w-36 h-36 rounded-full ${theme.cornerGlow} blur-2xl pointer-events-none transition-transform duration-500 group-hover:scale-150`}
            />

            <div className="relative z-10">
              {/* Project Installation Showcase Image */}
              <div className="relative w-full h-36 sm:h-44 overflow-hidden mb-3.5 shadow-md bg-slate-900 group/img rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
                  onError={(e) => {
                    e.currentTarget.src =
                      "/assets/reviews/family-solar-home.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/25 to-transparent pointer-events-none" />
              </div>

              {/* Top Star Rating & Milestone Number */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="ml-1 text-[11px] font-bold text-slate-700">
                    5.0
                  </span>
                </div>
              </div>

              <h3 className="text-sm sm:text-base font-heading font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors mb-1.5 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal line-clamp-4">
                {item.description}
              </p>
            </div>

            <div className="relative z-10 mt-3 pt-3 border-t border-black/5 flex items-center justify-between gap-1 text-[10px] sm:text-xs">
              <div className="flex items-center gap-2 truncate max-w-[70%]">
                <div className="h-6 w-6 rounded-full bg-linear-to-br from-amber-500 to-orange-500 text-white font-bold text-[10px] flex items-center justify-center shrink-0 shadow-2xs">
                  {item.author.charAt(0)}
                </div>
                <span className="font-bold text-slate-800 truncate">
                  {item.author}
                </span>
              </div>
              <span className="text-emerald-700 flex items-center gap-1 font-bold shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Client</span>
              </span>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export function ReviewsSection({
  reviews = CUSTOMER_REVIEWS,
}: {
  reviews?: ReviewItem[];
}) {
  const { openInquiryModal } = useInquiryModal();
  const { ref: sectionRef, visible: isVisible } = useReveal();
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const h =
    dimension.height ||
    (typeof window !== "undefined" ? window.innerHeight : 800);
  const y = useTransform(scrollYProgress, [0, 1], [0, h * 1.4]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, h * 2.1]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, h * 0.9]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, h * 1.8]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const getColItems = (offset: number, count = 4) => {
    if (!reviews || reviews.length === 0) return [];
    return Array.from({ length: count }, (_, i) => ({
      item: reviews[(i + offset) % reviews.length],
      itemNumber: ((i + offset) % cardThemes.length) + 1,
    }));
  };

  const col1 = getColItems(0, 4);
  const col2 = getColItems(4, 4);
  const col3 = getColItems(2, 4);
  const col4 = getColItems(6, 4);

  return (
    <section
      className="py-10 sm:py-16 bg-slate-50/70 relative overflow-hidden flex flex-col items-center"
      ref={sectionRef}
    >
      {/* Decorative ambient blurred backdrops */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center mb-10 sm:mb-12">
        <div
          className={`transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            What Homeowners Say About <br />
            <span className="bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Skye Electrical & Solar
            </span>
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-600 max-w-4xl mx-auto font-medium">
            Real client experiences, genuine job-site photos, and verified power
            bill savings from homeowners across WA, NSW, and QLD.
          </p>
        </div>
      </div>

      {/* Parallax Multi-Column Gallery Container */}
      <div
        ref={gallery}
        className="relative box-border flex h-[155vh] sm:h-[195vh] w-full max-w-350 gap-4 sm:gap-6 overflow-hidden px-4 sm:px-6 lg:px-8 py-4"
      >
        {/* Column 1 */}
        <Column items={col1} y={y} className="top-[-30%] w-1/2 lg:w-1/4" />

        {/* Column 2 */}
        <Column items={col2} y={y2} className="top-[-55%] w-1/2 lg:w-1/4" />

        {/* Column 3 (desktop) */}
        <Column
          items={col3}
          y={y3}
          className="top-[-25%] hidden lg:flex lg:w-1/4"
        />

        {/* Column 4 (desktop) */}
        <Column
          items={col4}
          y={y4}
          className="top-[-45%] hidden lg:flex lg:w-1/4"
        />

        {/* Top Gradient Fade Mask */}
        <div className="absolute top-0 left-0 right-0 h-28 sm:h-36 bg-linear-to-b from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none" />

        {/* Bottom Gradient Fade Mask */}
        <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-36 bg-linear-to-t from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none" />
      </div>

      {/* Bottom CTA Button */}
      <div className="relative z-20 mt-8 sm:mt-10">
        <button
          type="button"
          onClick={() => openInquiryModal()}
          className="inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 px-7 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 active:scale-95 cursor-pointer"
        >
          <span>Claim Your Guaranteed System Quote</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}

export default ReviewsSection;
