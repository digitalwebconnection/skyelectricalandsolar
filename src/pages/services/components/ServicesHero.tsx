import { motion } from "motion/react";
import { Sparkles, Phone } from "lucide-react";
import { useInquiryModal, useNavigation } from "../../../context";
import { CONTACT_INFO } from "../../../constants";

export function ServicesHero() {
  useNavigation();
  const { openInquiryModal } = useInquiryModal();

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 text-white border-b border-slate-800">
      {/* ================= FULL-WIDTH HERO BACKGROUND IMAGE WITH SMOOTH MOTION ================= */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          src="/assets/banner/banner-solar-mansion.webp"
          alt="Sky Electrical & Solar Services"
          className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-115"
          loading="eager"
        />

        {/* Deep Cinematic Gradient Overlays for High-Contrast Text Legibility */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/85 to-slate-950/50 lg:to-slate-950/30" />
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-transparent to-slate-950/95" />

        {/* Ambient Warm Solar Radiance Accents with Gentle Pulse */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 left-1/4 w-120 h-120 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none"
        />
      </div>

      {/* ================= HERO CONTENT (FULL-WIDTH CONTAINER) ================= */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-28 sm:pt-14 lg:pt-14 pb-16 sm:pb-22">
        {/* Main Header Text */}
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white tracking-tight leading-tight drop-shadow-md"
          >
            Engineered Clean Energy &amp;{" "}
            <span className="bg-linear-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              Master Electrical Services
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow-xs"
          >
            From tier-1 solar panel installations and smart solar batteries to high-speed EV
            chargers, switchboard upgrades, and complete residential electrical wiring. All backed
            by our 10-year workmanship warranty.
          </motion.p>

          {/* Quick Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button
              type="button"
              onClick={() => openInquiryModal()}
              className="relative group overflow-hidden inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-orange-500/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />
              <Sparkles className="h-4 w-4" />
              <span>Get Free System Assessment</span>
            </button>

            <a
              href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs sm:text-sm backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Phone className="h-4 w-4 text-amber-400" />
              <span>Call Solar Helpline: {CONTACT_INFO.phone1}</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ServicesHero;
