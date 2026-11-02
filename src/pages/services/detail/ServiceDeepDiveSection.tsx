import { motion } from "motion/react";
import { Check, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import type { ServiceItem } from "../data/servicesData";
import { useInquiryModal } from "../../../context";
import { BorderBeam } from "@/components/ui";

interface ServiceDeepDiveSectionProps {
  service: ServiceItem;
}

export function ServiceDeepDiveSection({ service }: ServiceDeepDiveSectionProps) {
  const { openInquiryModal } = useInquiryModal();

  return (
    <section className="relative py-12 sm:py-16 lg:py-14 bg-[#040810] text-white border-t border-slate-800/80 overflow-hidden">
      {/* ================= HIGH-TECH METALLIC SHINE, CORNER RIBBONS & LUXURY JET-BLACK STYLES ================= */}
      <style>{`
        /* Continuous Glossy Shining Light Sweep Effect ("signing" / shine) */
        @keyframes deepdiveCardShine {
          0% {
            transform: translateX(-180%) rotate(25deg);
            opacity: 0;
          }
          20% {
            opacity: 0.85;
          }
          45% {
            transform: translateX(280%) rotate(25deg);
            opacity: 0;
          }
          100% {
            transform: translateX(280%) rotate(25deg);
            opacity: 0;
          }
        }

        .deepdive_card_shine {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          border-radius: 24px;
          z-index: 15;
        }

        .deepdive_card_shine::after {
          content: '';
          position: absolute;
          top: -60%;
          bottom: -60%;
          left: 0;
          width: 150px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.05) 20%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(251, 191, 36, 0.4) 60%,
            rgba(255, 255, 255, 0.3) 70%,
            transparent 100%
          );
          transform: translateX(-180%) rotate(25deg);
          animation: deepdiveCardShine 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .deepdive_card_wrap:hover .deepdive_card_shine::after {
          animation-duration: 2s;
        }

        /* Diagonal Corner Ribbon Container */
        .card_ribbon_box {
          position: absolute;
          overflow: hidden;
          width: 140px;
          height: 140px;
          top: -8px;
          left: -8px;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          z-index: 25;
        }

        /* Diagonal Ribbon Banner Strip */
        .card_ribbon_box::before {
          content: attr(data-ribbon);
          position: absolute;
          width: 160%;
          height: 34px;
          transform: rotate(-45deg) translateY(-18px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-weight: 800;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.45);
        }

        /* Folded Corner Tab Dog-Ears */
        .card_ribbon_box::after {
          content: '';
          position: absolute;
          width: 8px;
          bottom: 0;
          left: 0;
          height: 8px;
          z-index: -1;
        }

        /* 1. STANDARD TIER RIBBON (Titanium Silver / Chrome) */
        .card_ribbon_box.ribbon_standard::before {
          background-image: linear-gradient(45deg, #475569 0%, #64748b 50%, #94a3b8 100%);
        }
        .card_ribbon_box.ribbon_standard::after {
          box-shadow: 132px -132px #1e293b;
          background-image: linear-gradient(45deg, #334155 0%, #475569 50%, #334155 100%);
        }

        /* 2. PREMIUM TIER RIBBON (Luminous Solar Flame / Warm Orange-Gold) */
        .card_ribbon_box.ribbon_premium::before {
          background-image: linear-gradient(45deg, #ff512f 0%, #f09819 50%, #ff512f 100%);
        }
        .card_ribbon_box.ribbon_premium::after {
          box-shadow: 132px -132px #991b1b;
          background-image: linear-gradient(45deg, #b91c1c 0%, #ea580c 50%, #b91c1c 100%);
        }

        /* 3. HIGH-YIELD / ENTERPRISE TIER RIBBON (Solar Amber / Gold-Bronze) */
        .card_ribbon_box.ribbon_highyield::before {
          background-image: linear-gradient(45deg, #ea580c 0%, #f59e0b 50%, #d97706 100%);
        }
        .card_ribbon_box.ribbon_highyield::after {
          box-shadow: 132px -132px #7c2d12;
          background-image: linear-gradient(45deg, #9a3412 0%, #c2410c 50%, #9a3412 100%);
        }
      `}</style>

      {/* Radiant Background Ambient Flares */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-225 h-100 bg-amber-500/12 rounded-full blur-[160px]" />
        <div className="absolute -bottom-24 right-1/4 w-125 h-75 bg-orange-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= SECTION HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 lg:mb-18"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {service.packagesTitle}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {service.packagesSubtitle}
          </p>
        </motion.div>

        {/* ================= 3 COMPARATIVE ARCHITECTURAL CARDS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-2">
          {service.packages.map((pkg, idx) => {
            const isFeatured = pkg.featured;
            const ribbonText = isFeatured ? "PREMIUM" : idx === 0 ? "STANDARD" : "HIGH YIELD";
            const ribbonClass = isFeatured
              ? "ribbon_premium"
              : idx === 0
                ? "ribbon_standard"
                : "ribbon_highyield";

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                className={`deepdive_card_wrap relative rounded-3xl flex flex-col justify-between transition-all duration-400 group overflow-visible ${
                  isFeatured
                    ? "bg-linear-to-b from-[#131c2d] via-[#090f1a] to-[#020408] border-2 border-amber-400 shadow-2xl shadow-amber-500/15 scale-[1.03] lg:-translate-y-3 z-10"
                    : "bg-linear-to-b from-[#0e1420] via-[#070b13] to-[#020306] border border-white/12 hover:border-amber-400/50 shadow-xl"
                }`}
              >
                {/* 1. Folded Diagonal Corner Ribbon */}
                <div className={`card_ribbon_box ${ribbonClass}`} data-ribbon={ribbonText} />

                {/* 2. Continuous Glossy Shining Light Sweep ("Signing" Effect) */}
                <div className="deepdive_card_shine" />

                {/* 3. Shining Perimeter Border Beam */}
                <BorderBeam
                  size={isFeatured ? 340 : 260}
                  duration={isFeatured ? 8 : 13}
                  delay={idx * 3}
                  borderWidth={isFeatured ? 2 : 1.2}
                  colorFrom={isFeatured ? "#f59e0b" : idx === 0 ? "#94a3b8" : "#fbbf24"}
                  colorTo={isFeatured ? "#ea580c" : idx === 0 ? "#f59e0b" : "#ea580c"}
                />

                {/* 4. Ambient Top Halo Glow */}
                <div
                  className={`pointer-events-none absolute -top-14 left-1/2 -translate-x-1/2 w-72 h-36 rounded-full blur-2xl transition-all duration-500 ${
                    isFeatured
                      ? "bg-amber-500/25 group-hover:bg-amber-500/40"
                      : "bg-white/5 group-hover:bg-amber-500/15"
                  }`}
                />

                {/* 5. Card Content Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between relative z-10">
                  <div>
                    {/* Header Row: Left is cleared for Ribbon, Right has Tagline */}
                    <div className="flex items-start justify-end pl-28 min-h-11.5 mb-2">
                      <span className="text-[11px] font-semibold text-amber-300 bg-amber-500/10 border border-amber-400/30 px-3 py-1 rounded-full text-right leading-tight shadow-2xs">
                        {pkg.tagline}
                      </span>
                    </div>

                    {/* Package Name (Cleanly cleared below Ribbon, 100% full visibility) */}
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug mb-5 pt-1">
                      {pkg.name}
                    </h3>

                    {/* Recommended For Profile Box in Glassmorphism */}
                    <div className="p-4 rounded-2xl bg-white/4 border border-white/10 backdrop-blur-md mb-6 relative overflow-hidden group-hover:border-amber-400/30 transition-colors">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-amber-400 to-orange-500" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block mb-1 pl-1">
                        Recommended For:
                      </span>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal pl-1">
                        {pkg.idealFor}
                      </p>
                    </div>

                    {/* Specifications Checklist */}
                    <div className="space-y-3.5 mb-8">
                      {pkg.specs.map((spec, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 group-hover:text-white transition-colors"
                        >
                          <div className="mt-0.5 h-5 w-5 rounded-full bg-linear-to-br from-amber-400 to-orange-500 text-slate-950 flex items-center justify-center shrink-0 shadow-xs shadow-amber-500/25">
                            <Check className="h-3 w-3 stroke-3" />
                          </div>
                          <span className="leading-snug font-medium">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Inquiry Action Button */}
                  <div className="pt-5 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => openInquiryModal(`${service.title} - ${pkg.name}`)}
                      className="w-full py-4 px-5 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-slate-950 shadow-orange-500/30 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Sparkles className="h-4 w-4" />
                      <span>Request System Quote</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= BOTTOM TURNKEY GUARANTEE NOTE ================= */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>
              All systems include comprehensive CEC sign-off, grid-connection paperwork, and 10-year
              workmanship warranty.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceDeepDiveSection;
