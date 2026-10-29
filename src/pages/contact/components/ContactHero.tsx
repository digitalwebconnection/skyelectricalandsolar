import { useState } from "react";
import { motion } from "motion/react";
import {
  Phone,
  ArrowRight,
  Zap,
} from "lucide-react";
import { CONTACT_INFO } from "../../../constants";
import { useInquiryModal } from "../../../context";

export function ContactHero() {
  useInquiryModal();
  const [] = useState<string | null>(null);


  const scrollToForm = () => {
    const el = document.getElementById("contact-form-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <section className="relative w-full overflow-hidden bg-slate-950 text-white">
      {/* ================= 1. FULL-WIDTH CINEMATIC HERO BANNER ================= */}
      <div className="relative w-full min-h-145 sm:min-h-160 lg:min-h-130 flex flex-col justify-between overflow-hidden">
        
        {/* Full-Width Background Image with Subtle Slow Motion Zoom */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
          <motion.img
            src="/assets/banner/banner-solar-mansion.jpg"
            alt="Sky Electrical & Solar Australian Clean Energy Installation"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.06, 1] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
            loading="eager"
          />

          {/* Deep Cinematic Gradient Overlays for High-Contrast Text Legibility */}
          {/* Left-to-right gradient: dense dark on left for text, semi-transparent on right for image visibility */}
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/85 to-slate-950/45 lg:to-slate-950/30" />
          
          {/* Top-to-bottom soft vignette */}
          <div className="absolute inset-0 bg-linear-to-b from-slate-950/70 via-transparent to-slate-950/95" />

          {/* Warm Solar Radiance Orbs */}
          <div className="absolute -top-24 left-1/4 w-120 h-120 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />

          {/* Subtle High-Tech Solar Wafer SVG Grid Overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              maskImage:
                "radial-gradient(ellipse 70% 60% at 30% 40%, black 30%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 60% at 30% 40%, black 30%, transparent 80%)",
            }}
          >
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="banner-wafer-grid"
                  width="44"
                  height="44"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 44 0 L 0 0 0 44"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="0.8"
                    strokeOpacity="0.4"
                  />
                  <circle cx="0" cy="0" r="1.5" fill="#f59e0b" opacity="0.6" />
                  <circle cx="44" cy="0" r="1.5" fill="#ea580c" opacity="0.6" />
                  <circle cx="0" cy="44" r="1.5" fill="#ea580c" opacity="0.6" />
                  <circle cx="44" cy="44" r="1.5" fill="#f59e0b" opacity="0.6" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#banner-wafer-grid)" />
            </svg>
          </div>

          {/* Subtle Scanning Laser Line */}
          <div className="absolute top-28 inset-x-0 h-px bg-linear-to-r from-transparent via-amber-400/35 to-transparent" />
        </div>

        {/* ================= 2. BANNER CONTENT (CENTERED ON CONTAINER) ================= */}
        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-14 pb-12 sm:pb-16 flex-1 flex flex-col justify-center">
          <div className="max-w-3xl">
            
            

            {/* Monumental Hero Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.08]"
            >
              Get In Touch With{" "}
              <span className="bg-linear-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                Solar Experts
              </span>
            </motion.h1>

            {/* Subheading / Description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-normal max-w-4xl drop-shadow-sm"
            >
              Connect directly with licensed Clean Energy Council solar designers
              and A-Grade master electricians. Transparent quotes, upfront Australian
              STC government rebate calculations, and fast local dispatch across WA, NSW &amp; QLD.
            </motion.p>

            {/* Banner Call-To-Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
            >
              {/* Primary Instant Proposal Button */}
              <button
                type="button"
                onClick={scrollToForm}
                className="group relative inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-orange-500/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <Zap className="h-4 w-4 text-slate-950 fill-current group-hover:rotate-12 transition-transform" />
                <span>Get in Touch Now!!</span>
                <ArrowRight className="h-4 w-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Direct Helpline Button */}
              <a
                href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-bold text-sm sm:text-base shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <Phone className="h-4 w-4 text-amber-400" />
                <span>Call {CONTACT_INFO.phone1}</span>
              </a>

            </motion.div>

          </div>
        </div>

     

      </div>
    </section>
  );
}

export default ContactHero;
