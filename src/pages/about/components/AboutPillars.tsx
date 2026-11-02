import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Play,
  X,
} from "lucide-react";
import { useInquiryModal } from "../../../context";

export function AboutPillars() {
  const { openInquiryModal } = useInquiryModal();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedPillar, setSelectedPillar] = useState<string | null>(null);

  return (
    <section
      id="about-pillars"
      aria-labelledby="about-pillars-heading"
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#f8fcff] via-[#ffffff] to-[#eef7ff] py-14 lg:py-20 font-sans-modern border-y border-slate-200/60"
    >

      {/* ================= BACKGROUND: IMAGE & AMBIENCE ================= */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Background Image with subtle gradient wash */}
        <img
          src="/assets/modern-solar-home-twilight.jpg"
          alt="Modern solar architectural home"
          className="h-full w-full object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-black/50" />


        {/* Ambient Radiant Sky & Amber Glows */}
        <div className="absolute -top-24 right-10 h-96 w-96 rounded-full bg-gradient-to-bl from-sky-300/20 via-blue-200/10 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-0 h-80 w-80 rounded-full bg-gradient-to-tr from-sky-400/15 via-blue-200/10 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= TOP TIER: HEADLINE, PHILOSOPHY & BUTTONS ================= */}
        <div className="max-w-3xl">
          {/* Eyebrow Capsule Tag with Horizontal Accent Ruler */}
          <div className="flex items-center gap-4">
          </div>

          {/* Main Headline */}
          <h2
            id="about-pillars-heading"
            className="mt-6 font-sans-modern text-3xl sm:text-4xl lg:text-[50px] font-black tracking-tight text-[#0a1d4a] leading-[1.14]"
          >
            Designed Around
            <br />
            <span className="text-[#0052cc]">Engineering Rigor,</span>
            <br />
            <span className="text-[#0a1d4a]">Not Sales Quotas.</span>
          </h2>

          {/* Subtitle Paragraph */}
          <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-slate-900 font-normal">
            Every detail of our systems—from cable sizing and DC isolators to
            inverter clipping ratios—is specified by licensed electricians to
            outlast harsh Australian conditions.
          </p>

          {/* Action Buttons: Deep Blue Craftsmanship Pill & Circular Watch Process */}
          <div className="mt-8 flex flex-wrap items-center gap-5 sm:gap-6">
            {/* Primary: Our Craftsmanship Button */}
            <button
              type="button"
              onClick={() => openInquiryModal()}
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#0047ab] to-[#0052cc] px-7 py-3 text-sm font-bold text-white shadow-[0_10px_22px_rgba(0,71,171,0.35)] hover:shadow-[0_14px_28px_rgba(0,71,171,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Our Craftsmanship</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

          </div>
        </div>
      </div>

      {/* ================= MODAL 1: WATCH OUR PROCESS VIDEO / WORKFLOW OVERVIEW ================= */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVideoModalOpen(false)}
              className="fixed inset-0 bg-slate-950/75 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-sky-200 bg-white shadow-2xl z-10 p-6 sm:p-8"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0052cc]">
                    <Play className="h-5 w-5 fill-current" />
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-slate-900">
                      Our Master Electrician Installation Protocol
                    </h3>
                    <p className="text-xs text-slate-500">
                      Watch how Sky Electrical engineers every solar roof with
                      precision.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(false)}
                  className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Video Showcase Card */}
              <div className="mt-6 relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 shadow-inner">
                <img
                  src="/assets/banner/banner-electrical-technician.jpg"
                  alt="Sky Solar Engineering Team on site"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/40 flex flex-col items-center justify-center text-white p-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-white shadow-xl hover:scale-110 transition-transform cursor-pointer">
                    <Play className="h-7 w-7 fill-current ml-1" />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-slate-200 max-w-md">
                    3D LiDAR modeling, AS/NZS 3000 switchboard compliance, and
                    thermal stress testing on every installation.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsVideoModalOpen(false);
                    openInquiryModal();
                  }}
                  className="rounded-full bg-[#0052cc] px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-blue-700 transition-all cursor-pointer"
                >
                  Schedule Engineering Consultation
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ================= MODAL 2: INTERACTIVE PILLAR TECHNICAL DETAILS ================= */}
      <AnimatePresence>
        {selectedPillar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPillar(null)}
              className="fixed inset-0 bg-slate-950/75 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-sky-200 bg-white shadow-2xl z-10 p-6 sm:p-8"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <h3 className="text-lg font-black text-slate-900">
                  Engineering Pillar Specifications
                </h3>
                <button
                  type="button"
                  onClick={() => setSelectedPillar(null)}
                  className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-6 space-y-4">
                {selectedPillar === "craftsmanship" && (
                  <div>
                    <h4 className="text-base font-bold text-[#0052cc]">
                      100% In-House Master Electricians • Zero Subcontracting
                    </h4>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      Most solar companies are sales offices that auction
                      installations to third-party subcontractors. At Sky, every
                      quote, wire, inverter, and grid switch is handled by our
                      own employed licensed Australian electricians.
                    </p>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
                      <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        <span>AS/NZS 3000 & 5033 Compliant</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        <span>Heavy-Duty UV Conduits</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        <span>Full Safety Sign-Off</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        <span>VIC REC 10834 & NSW EW 205806</span>
                      </div>
                    </div>
                  </div>
                )}

                {selectedPillar === "hardware" && (
                  <div>
                    <h4 className="text-base font-bold text-emerald-600">
                      Tier-1 Hardware Only • Bloomberg Tier-1 Verified
                    </h4>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      Zero cheap no-name modules. We strictly partner with
                      Bloomberg Tier-1 manufacturers (Jinko, LONGi, Sungrow,
                      Fronius) backed by verifiable Australian manufacturer
                      warranties and 25-Year Performance Cover.
                    </p>
                  </div>
                )}

                {selectedPillar === "support" && (
                  <div>
                    <h4 className="text-base font-bold text-sky-600">
                      Direct Local Support • STC Rebate Deductions
                    </h4>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      Australian STC rebates deducted directly off your quote.
                      Zero complicated paperwork—our compliance team handles all
                      distributor approvals and grid sign-offs.
                    </p>
                  </div>
                )}

                {selectedPillar === "future" && (
                  <div>
                    <h4 className="text-base font-bold text-lime-600">
                      A Greener Tomorrow • Clean Energy Future
                    </h4>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      Clean energy engineered to maximize self-consumption,
                      minimize grid dependence, and future-proof Australian
                      households against rising utility costs.
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedPillar(null);
                    openInquiryModal();
                  }}
                  className="rounded-full bg-orange-500 px-6 py-2 text-xs font-bold text-white shadow-md hover:bg-orange-600 transition-all cursor-pointer"
                >
                  Request Engineering Consultation
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default AboutPillars;
