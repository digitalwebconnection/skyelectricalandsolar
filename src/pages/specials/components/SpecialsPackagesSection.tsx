import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  CheckCircle2,
  Zap,
  BatteryCharging,
  Sun,
  Building2,
  Car,
  Clock,
  ArrowRight,
  ShieldCheck,
  TrendingDown,
  CircleDollarSign,
  Info,
} from "lucide-react";
import { useInquiryModal } from "../../../context";
import { MagicCard, BorderBeam, ShimmerButton } from "../../../components/ui";

interface SpecialPackage {
  id: string;
  name: string;
  category: "all" | "residential" | "battery" | "commercial";
  badge: string;
  badgeColor: string;
  image: string;
  originalPrice: string;
  promoPrice: string;
  weeklyRate: string;
  savings: string;
  annualSavingsEst: string;
  priceNote: string;
  description: string;
  specs: { icon: typeof Sun; label: string }[];
  inclusions: string[];
  ctaText: string;
  featured?: boolean;
}

const PACKAGES: SpecialPackage[] = [
  {
    id: "6kw-residential",
    name: "6.6kW Essential Solar Package",
    category: "residential",
    badge: "MOST POPULAR FOR FAMILIES",
    badgeColor: "bg-emerald-600 text-white",
    image: "/assets/banner/banner-6kw-special.webp",
    originalPrice: "$5,490",
    promoPrice: "$3,499*",
    weeklyRate: "$24 / week",
    savings: "Save $1,991",
    annualSavingsEst: "Estimated $1,400 – $1,900 / yr savings",
    priceNote: "*Net price after upfront STC rebate deduction for standard single-storey roof",
    description:
      "The definitive residential workhorse. Designed to drastically cut daytime air conditioning, heating, and household appliance power bills.",
    specs: [
      { icon: Sun, label: "15 x 440W Tier-1 N-Type Monocrystalline Panels" },
      { icon: Zap, label: "5kW Smart String Inverter with 98.4% Efficiency" },
      { icon: Clock, label: "24/7 Smartphone WiFi Generation & Export Tracking" },
      { icon: TrendingDown, label: "Fast Payback: Estimated 2.6 – 3.2 Years" },
    ],
    inclusions: [
      "Clean Energy Council accredited professional installation",
      "Western Power / Ausgrid / Energex grid connection paperwork processed",
      "25-Year Panel Product & Performance Output Warranty",
      "10-Year Inverter Warranty + 10-Year Sky Electrical Workmanship Guarantee",
    ],
    ctaText: "Claim 6.6kW Special",
  },
  {
    id: "13kw-battery-bundle",
    name: "13.2kW Solar + 10kWh Battery Hybrid Bundle",
    category: "battery",
    badge: "COMPLETE BLACKOUT RESILIENCE",
    badgeColor: "bg-linear-to-r from-amber-500 to-orange-600 text-white",
    image: "/assets/banner/banner-13kw-battery.webp",
    originalPrice: "$13,990",
    promoPrice: "$9,990*",
    weeklyRate: "$49 / week",
    savings: "Save $4,000",
    annualSavingsEst: "Estimated $2,800 – $3,600 / yr savings",
    priceNote: "*Includes high-yield panels + hybrid inverter + 10kWh LiFePO4 battery storage",
    description:
      "Achieve near-complete energy independence. Store abundant daytime solar and power your entire home throughout the night and during grid blackouts.",
    specs: [
      { icon: Sun, label: "30 x 440W Tier-1 High-Density Solar Panels" },
      { icon: BatteryCharging, label: "10kWh Modular LiFePO4 Battery Storage (10,000+ Cycles)" },
      { icon: Zap, label: "8kW-10kW Hybrid Inverter with <10ms EPS Blackout Switch" },
      { icon: TrendingDown, label: "Slash Grid Reliance by up to 85% – 90% Year-Round" },
    ],
    inclusions: [
      "Smart weather forecast charging & time-of-use tariff arbitrage",
      "Full household critical circuits blackout backup (EPS)",
      "10-Year Battery Warranty & 25-Year Solar Panel Warranty",
      "10-Year Sky Electrical In-House Workmanship Guarantee",
    ],
    ctaText: "Claim Battery Bundle Special",
    featured: true,
  },
  {
    id: "ev-charger-bundle",
    name: "Solar + Smart EV Level-2 Fast Charger Bundle",
    category: "battery",
    badge: "DRIVE ON 100% PURE SUNSHINE",
    badgeColor: "bg-blue-600 text-white",
    image: "/assets/banner/banner-battery-storage.webp",
    originalPrice: "$3,200",
    promoPrice: "$1,890*",
    weeklyRate: "$14 / week",
    savings: "Save $1,310",
    annualSavingsEst: "Save up to $2,200 / yr vs petrol costs",
    priceNote: "*Special promotional rate when bundled with any solar or battery system",
    description:
      "Transform your rooftop solar into free driving fuel. Charge your EV up to 4x faster than standard wall sockets with intelligent solar-only charging modes.",
    specs: [
      { icon: Car, label: "7.4kW (Single Phase) or 22kW (Three Phase) Smart Charger" },
      { icon: Sun, label: "Solar Excess Only Mode: Zero Grid Draw While Charging" },
      { icon: Zap, label: "Universal Type-2 Socket (Tesla, BYD, MG, Hyundai, Kia, etc.)" },
      { icon: Clock, label: "Smartphone Scheduling & Automated Off-Peak Charging" },
    ],
    inclusions: [
      "Dedicated 32A safety circuit & Type A/B RCD protection",
      "Weatherproof IP65 outdoor casing with integrated cable holster",
      "3-Year Comprehensive Hardware Warranty",
      "Full electrical certificate of safety compliance provided",
    ],
    ctaText: "Claim EV Bundle Special",
  },
  {
    id: "commercial-solar",
    name: "Commercial Solar 30kW – 100kW+ Turnkey",
    category: "commercial",
    badge: "MAXIMUM BUSINESS TAX DEDUCTIONS",
    badgeColor: "bg-slate-900 text-white",
    image: "/assets/banner/banner-commercial-solar.webp",
    originalPrice: "Custom Feasibility",
    promoPrice: "$0 Upfront Capex",
    weeklyRate: "Cashflow Positive",
    savings: "Instant Asset Write-Off Eligible",
    annualSavingsEst: "Offsets expensive peak commercial tariffs",
    priceNote: "*Quarterly commercial electricity bill savings typically exceed lease repayments",
    description:
      "Commercial solar tailored to your daytime business energy demand. Turn idle warehouse, workshop, or retail roofs into high-yielding profit centres.",
    specs: [
      { icon: Building2, label: "30kW to 100kW+ Tier-1 Commercial Grade PV Arrays" },
      { icon: Zap, label: "Commercial Multi-MPPT Inverters (98.8% Peak Efficiency)" },
      { icon: TrendingDown, label: "Immediate Reduction in Peak Commercial Demand Charges" },
      { icon: ShieldCheck, label: "STC / LGC Government Certificate Registration" },
    ],
    inclusions: [
      "Detailed 3D drone roof modeling & 12-month interval meter ROI audit",
      "Network distribution engineering submission (Western Power / Ausgrid / Energex)",
      "Dedicated senior commercial project engineer on-site",
      "Quarterly preventive maintenance and cleaning options",
    ],
    ctaText: "Book Commercial Feasibility",
  },
];

export function SpecialsPackagesSection() {
  const { openInquiryModal } = useInquiryModal();
  const [activeTab, setActiveTab] = useState<"all" | "residential" | "battery" | "commercial">(
    "all",
  );
  const [pricingMode, setPricingMode] = useState<"upfront" | "weekly">("upfront");

  const filteredPackages = PACKAGES.filter((pkg) => {
    if (activeTab === "all") return true;
    if (activeTab === "residential") return pkg.category === "residential";
    if (activeTab === "battery") return pkg.category === "battery";
    if (activeTab === "commercial") return pkg.category === "commercial";
    return true;
  });

  return (
    <section
      id="specials-packages"
      className="relative py-20 lg:py-24 bg-[#faf8f5] text-slate-900 overflow-hidden"
    >
      {/* Background Solar Flares */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.16, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 right-10 w-110 h-110 bg-amber-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.14, 0.06] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-10 -left-20 w-110 h-110 bg-orange-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-xs sm:text-sm font-bold text-orange-700 border border-orange-200 mb-4"
          >
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span>Limited-Time Australian Promotional Bundles</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight"
          >
            Featured Clean Energy{" "}
            <span className="bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Specials &amp; Packages
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal"
          >
            Engineered with Tier-1 CEC approved hardware, smart mobile app monitoring, and full
            workmanship warranties. All promotions include upfront government STC rebate deductions.
          </motion.p>

          {/* Pricing Toggle Pill + Category Filter Bar */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Cash vs Finance Toggle */}
            <div className="inline-flex items-center bg-white p-1 rounded-full border border-slate-300 shadow-xs">
              <button
                onClick={() => setPricingMode("upfront")}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  pricingMode === "upfront"
                    ? "bg-slate-900 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <CircleDollarSign className="w-3.5 h-3.5" />
                <span>Net Upfront Cash</span>
              </button>
              <button
                onClick={() => setPricingMode("weekly")}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  pricingMode === "weekly"
                    ? "bg-orange-500 text-white shadow-xs"
                    : "text-slate-600 hover:text-orange-600"
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>$0 Upfront Finance / Wk</span>
              </button>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 bg-slate-200/60 p-1 rounded-full">
              {[
                { id: "all", label: "All Specials" },
                { id: "residential", label: "Residential" },
                { id: "battery", label: "Solar + Battery / EV" },
                { id: "commercial", label: "Commercial" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-white text-orange-600 shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ================= PACKAGES GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredPackages.map((pkg, index) => {
              const isFeatured = pkg.featured;

              return (
                <motion.div
                  key={pkg.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="relative rounded-3xl"
                >
                  {/* MagicCard with Cursor Following Energy Spotlight */}
                  <MagicCard
                    gradientColor="rgba(249, 115, 22, 0.15)"
                    gradientSize={400}
                    className="relative h-full flex flex-col justify-between rounded-3xl bg-white border border-slate-200/90 shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:border-orange-300/80 transition-all duration-300 overflow-hidden group"
                  >
                    {/* Glowing Electrical Border Beam on the Featured Bundle */}
                    {isFeatured && (
                      <BorderBeam
                        size={260}
                        duration={8}
                        colorFrom="#f59e0b"
                        colorTo="#ea580c"
                        borderWidth={2}
                      />
                    )}

                    {/* Top Image Banner */}
                    <div className="relative h-60 sm:h-68 w-full overflow-hidden bg-slate-900">
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/45 to-transparent" />

                      {/* Badge */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider shadow-md ${pkg.badgeColor}`}
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          {pkg.badge}
                        </span>
                      </div>

                      {/* Savings Tag */}
                      <div className="absolute top-4 right-4 bg-amber-400 text-slate-950 px-3 py-1 rounded-full text-xs font-black shadow-md flex items-center gap-1">
                        <TrendingDown className="w-3.5 h-3.5" />
                        <span>{pkg.savings}</span>
                      </div>

                      {/* Bottom Image Overlay Title & Price */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-sm">
                            {pkg.name}
                          </h3>
                          <p className="text-xs text-amber-300 font-medium mt-0.5 flex items-center gap-1">
                            <Info className="w-3.5 h-3.5 shrink-0" />
                            <span>{pkg.annualSavingsEst}</span>
                          </p>
                        </div>

                        {/* Interactive Price Display according to Toggle */}
                        <div className="text-right shrink-0">
                          <span className="text-xs text-slate-400 line-through block font-medium">
                            {pkg.originalPrice}
                          </span>
                          <span className="text-2xl sm:text-3xl font-black text-amber-400 drop-shadow-sm">
                            {pricingMode === "upfront" ? pkg.promoPrice : pkg.weeklyRate}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Description */}
                        <p className="text-sm text-slate-600 leading-relaxed font-normal mb-5">
                          {pkg.description}
                        </p>

                        {/* Technical Specs 2x2 Grid */}
                        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 mb-5 space-y-2.5">
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                            Engineering Specifications
                          </span>
                          {pkg.specs.map((spec, i) => {
                            const Icon = spec.icon;
                            return (
                              <div
                                key={i}
                                className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800"
                              >
                                <div className="w-5 h-5 rounded-md bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                                  <Icon className="w-3.5 h-3.5" />
                                </div>
                                <span className="font-medium">{spec.label}</span>
                              </div>
                            );
                          })}
                        </div>

                        {/* Standard Inclusions Checklist */}
                        <div className="space-y-2 mb-6">
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                            Turnkey Inclusions:
                          </span>
                          {pkg.inclusions.map((inc, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 text-xs sm:text-sm text-slate-700"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{inc}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Card Bottom CTA & Disclaimer */}
                      <div className="pt-4 border-t border-slate-100">
                        <p className="text-[11px] text-slate-500 italic mb-4 leading-tight">
                          {pkg.priceNote}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <ShimmerButton
                            onClick={() => openInquiryModal(pkg.name)}
                            className="w-full py-3.5 text-sm font-bold shadow-md shadow-orange-500/20"
                          >
                            <Sparkles className="w-4 h-4 text-amber-200" />
                            <span>{pkg.ctaText}</span>
                            <ArrowRight className="w-4 h-4" />
                          </ShimmerButton>
                        </div>
                      </div>
                    </div>
                  </MagicCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Quick Comparison Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 rounded-3xl bg-linear-to-r from-slate-900 via-[#071d32] to-slate-900 p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/20 border border-orange-500/40 text-orange-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold">
                100% Price &amp; Quality Workmanship Guarantee
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                All specials are installed by certified, Clean Energy Council accredited master
                electricians with zero hidden charges.
              </p>
            </div>
          </div>

          <button
            onClick={() => openInquiryModal("Custom Package Inquiry")}
            className="shrink-0 px-6 py-3 rounded-full bg-white text-slate-900 hover:bg-orange-50 hover:text-orange-600 font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
          >
            Request Custom Quotation
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default SpecialsPackagesSection;
