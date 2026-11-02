import { motion } from "motion/react";
import { Sparkles, ArrowDown, Award, BadgePercent, TrendingDown } from "lucide-react";
import { useInquiryModal } from "../../../context";
import { NumberTicker, ShimmerButton, Marquee } from "../../../components/ui";
import {
  froniusLogo,
  sungrowLogo,
  goodweLogo,
  jinkoLogo,
  longiLogo,
  seraphimLogo,
  solisLogo,
  growattLogo,
} from "../../../assets";

const PARTNER_LOGOS = [
  { name: "Fronius", logo: froniusLogo, type: "Smart Inverter" },
  { name: "Sungrow", logo: sungrowLogo, type: "Hybrid Inverter" },
  { name: "GoodWe", logo: goodweLogo, type: "Solar Inverter" },
  { name: "Jinko Solar", logo: jinkoLogo, type: "Tier-1 N-Type PV" },
  { name: "Longi Solar", logo: longiLogo, type: "Ultra-Black PV" },
  { name: "Seraphim", logo: seraphimLogo, type: "High-Density PV" },
  { name: "Solis", logo: solisLogo, type: "Commercial Inverter" },
  { name: "Growatt", logo: growattLogo, type: "Battery Inverter" },
];

export function SpecialsHero() {
  const { openInquiryModal } = useInquiryModal();

  const scrollToPackages = () => {
    const el = document.getElementById("specials-packages");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 text-white border-b border-slate-800">
      {/* ================= FULL-WIDTH HERO BACKGROUND IMAGE WITH SMOOTH MOTION ================= */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          src="/assets/banner/banner-solar-field.jpg"
          alt="Australian Solar Specials & Government Rebates"
          className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-115"
          loading="eager"
        />

        {/* Deep Multi-Layer Gradients for Contrast & Glow */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/90 to-slate-950/60 lg:to-slate-950/35" />
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/85 via-transparent to-slate-950/95" />

        {/* Ambient Warm Solar Radiance Accents with Gentle Pulse */}
        <motion.div
          animate={{
            scale: [1, 1.22, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 left-1/4 w-130 h-130 bg-amber-500/25 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.15, 0.28, 0.15],
          }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-10 right-10 w-110 h-110 bg-orange-600/20 rounded-full blur-3xl pointer-events-none"
        />
      </div>

      {/* ================= HERO CONTENT CONTAINER ================= */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-24 sm:pt-14 lg:pt-16 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-black text-white tracking-tight leading-[1.12] drop-shadow-md"
            >
              Exclusive Clean Energy Deals &amp;{" "}
              <span className="bg-linear-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                Government Solar Rebates
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-5 text-base sm:text-lg text-slate-200 leading-relaxed font-light max-w-2xl drop-shadow-xs"
            >
              Cut your quarterly electricity bills by up to 85%. Sky Electrical &amp; Solar combines
              tier-1 CEC approved hardware with upfront Small-Scale Technology Certificates (STC)
              rebates, giving you the lowest out-of-pocket price with zero paperwork stress.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <ShimmerButton
                onClick={() => openInquiryModal("General Promotional Solar Special")}
                className="py-3.5 px-8 text-sm sm:text-base font-bold shadow-xl shadow-orange-500/25"
              >
                <Sparkles className="h-4 w-4 text-amber-200" />
                <span>Claim A Promotional Special</span>
              </ShimmerButton>

              <button
                onClick={scrollToPackages}
                className="inline-flex items-center gap-2.5 rounded-full bg-white/10 px-6 py-3.5 text-sm sm:text-base font-semibold text-white border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <ArrowDown className="h-4 w-4 text-amber-400 animate-bounce" />
                <span>Explore Packages</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Live Animated Rebate Highlights Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-4"
          >
            <div className="relative rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-700/80 p-6 shadow-2xl space-y-5 overflow-hidden">
              {/* Subtle Solar Shimmer Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/15 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <BadgePercent className="w-4 h-4" />
                  <span>2026 Rebate Snapshot</span>
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30">
                  Active Now
                </span>
              </div>

              {/* Animated Numbers Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-950/60 rounded-xl p-3.5 border border-slate-800/80">
                  <span className="text-[11px] text-slate-400 block mb-1">Avg STC Rebate</span>
                  <div className="text-xl sm:text-2xl font-black text-amber-400">
                    <NumberTicker value={3250} prefix="$" />
                  </div>
                  <span className="text-[10px] text-slate-500">Point-of-Sale Deduction</span>
                </div>

                <div className="bg-slate-950/60 rounded-xl p-3.5 border border-slate-800/80">
                  <span className="text-[11px] text-slate-400 block mb-1">Systems Installed</span>
                  <div className="text-xl sm:text-2xl font-black text-white">
                    <NumberTicker value={15000} suffix="+" />
                  </div>
                  <span className="text-[10px] text-slate-500">Across WA, NSW, QLD</span>
                </div>

                <div className="bg-slate-950/60 rounded-xl p-3.5 border border-slate-800/80">
                  <span className="text-[11px] text-slate-400 block mb-1">Linear Warranty</span>
                  <div className="text-xl sm:text-2xl font-black text-emerald-400">
                    <NumberTicker value={25} suffix=" Yrs" />
                  </div>
                  <span className="text-[10px] text-slate-500">Guaranteed Output</span>
                </div>

                <div className="bg-slate-950/60 rounded-xl p-3.5 border border-slate-800/80">
                  <span className="text-[11px] text-slate-400 block mb-1">Max Bill Slash</span>
                  <div className="text-xl sm:text-2xl font-black text-orange-400">
                    <NumberTicker value={85} suffix="%" />
                  </div>
                  <span className="text-[10px] text-slate-500">With Battery Storage</span>
                </div>
              </div>

              {/* Fast Quote Trigger */}
              <button
                onClick={() => openInquiryModal("Instant Rebate Calculation")}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 py-3 text-xs sm:text-sm font-bold text-white shadow-lg transition-all cursor-pointer"
              >
                <TrendingDown className="w-4 h-4 text-amber-200" />
                <span>Calculate My Exact Rebate →</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* ================= TIER-1 BRAND MARQUEE STRIP ================= */}
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Accredited Tier-1 Manufacturers &amp; CEC Approved Equipment</span>
            </span>
            <span className="text-[11px] text-emerald-400 font-semibold hidden md:inline">
              100% Australian Standards AS/NZS 5033 Compliant
            </span>
          </div>

          <div className="rounded-2xl bg-slate-900/60 border border-slate-800/80 p-2 overflow-hidden backdrop-blur-md">
            <Marquee duration={28} pauseOnHover repeat={4} gap="2rem">
              {PARTNER_LOGOS.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center gap-3 bg-white/95 px-4 py-2 rounded-xl shadow-xs"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-6 w-auto max-w-[90px] object-contain filter contrast-125"
                  />
                  <div className="border-l border-slate-200 pl-2.5">
                    <span className="text-[12px] font-bold text-slate-800 block leading-tight">
                      {partner.name}
                    </span>
                    <span className="text-[10px] font-medium text-orange-600 block leading-tight">
                      {partner.type}
                    </span>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialsHero;
