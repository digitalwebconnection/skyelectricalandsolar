import { motion } from "motion/react";
import {
  ShieldCheck,
  Award,
  Zap,
  Clock,
  BadgeCheck,
  CheckCircle2,
  FileCheck,
  MapPin,
  Sparkles,
} from "lucide-react";
import { BorderBeam } from "@/components/ui";

export function ServicesWhyChooseSection() {
  return (
    <section className="relative py-16 lg:py-14 bg-white text-slate-900 border-y border-slate-200/80 overflow-hidden">
      {/* Background Subtle Ambient Radiance with Motion */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.16, 0.08],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-orange-400/15 rounded-full blur-3xl"
        />
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Why Choose{" "} <br />
            <span className="bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Sky Electrical &amp; Solar?
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-900 leading-relaxed font-normal">
            We combine Clean Energy Council accredited electrical engineering with point-of-sale
            rebate deductions, tier-1 hardware, and 100% in-house master electricians.
          </p>
        </motion.div>

        {/* ================= BENTO GRID SHOWCASE WITH STAGGERED MOTION ================= */}
        <div className="space-y-6">
          {/* Top Row: Flagship Feature + Instant Rebate Deduction Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Card 1 (Flagship Showcase: 7 Cols) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7 relative rounded-xl bg-slate-950 text-white p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-2xl border border-slate-800 group"
            >
              {/* High-Resolution Background Photo with Deep Gradient Mask */}
              <div className="absolute inset-0 pointer-events-none select-none z-0">
                <img
                  src="/assets/reviews/smiling-solar-electrician.webp"
                  alt="In-house Master Electricians"
                  className="w-full h-full object-cover object-center opacity-30 filter brightness-[0.8] contrast-125 scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/85 to-slate-950/40" />
                <div className="absolute -top-24 -right-24 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
              </div>

              {/* Animated Magic UI Border Beam */}
              <BorderBeam
                size={280}
                duration={10}
                borderWidth={2}
                colorFrom="#f59e0b"
                colorTo="#ea580c"
              />

              <div className="relative z-10">
                {/* Top Floating Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-linear-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md">
                    <ShieldCheck className="h-4 w-4" />
                    <span>10-Year Workmanship Warranty</span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-semibold backdrop-blur-xs border border-white/10">
                    <Award className="h-3.5 w-3.5 text-amber-400" />
                    <span>Zero Subcontractors</span>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug mb-3">
                  100% In-House A-Grade Master Electricians
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-xl mb-8">
                  We never outsource your roof penetrations, high-voltage DC cabling, or switchboard
                  to unknown subcontractors. Every project is engineered, installed, and certified
                  by our own licensed electrical tradesmen.
                </p>

                {/* 3 Pillars Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 mb-1.5" />
                    <span className="font-bold text-white text-xs block">
                      Roof Integrity Guarantee
                    </span>
                    <span className="text-[11px] text-slate-400">Zero-leak flashing seal</span>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 mb-1.5" />
                    <span className="font-bold text-white text-xs block">
                      CEC Certified Engineers
                    </span>
                    <span className="text-[11px] text-slate-400">Design &amp; grid approval</span>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                    <CheckCircle2 className="h-4 w-4 text-orange-400 mb-1.5" />
                    <span className="font-bold text-white text-xs block">Official Certificate</span>
                    <span className="text-[11px] text-slate-400">
                      Insurance &amp; safety signed
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2 (Upfront Rebates: 5 Cols) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="lg:col-span-5 relative rounded-xl bg-linear-to-br from-amber-50/90 via-orange-50/60 to-white border-2 border-amber-300/80 p-8 sm:p-10 flex flex-col justify-between shadow-xl hover:border-amber-400 hover:shadow-2xl transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-950 font-bold text-xs uppercase tracking-wider">
                    <Zap className="h-3.5 w-3.5 text-orange-600" />
                    <span>Point-of-Sale Rebates</span>
                  </div>

                  <span className="text-xs font-mono font-bold text-amber-700 bg-amber-100/80 px-2.5 py-1 rounded-lg">
                    STC Approved
                  </span>
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Immediate Savings Deducted
                </span>

                <div className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight mb-2">
                  Up To{" "}
                  <span className="bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                    $2,400+
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-semibold mb-6">
                  Deducted directly off your upfront installation invoice.
                </p>

                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  As an Australian government-accredited clean energy retailer, we take care of all
                  STC (Small-scale Technology Certificates) paperwork and state rebates on your
                  behalf. You only pay the net balance.
                </p>
              </div>

              <div className="pt-6 border-t border-amber-200/80 space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-amber-600 shrink-0" />
                  <span className="font-semibold">Zero rebate paperwork hassle for homeowners</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-orange-600 shrink-0" />
                  <span className="font-semibold">
                    Full Western Australia, NSW, and QLD eligibility
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row: 3 Equal-Sized Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 3: Tier-1 Hardware */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              whileHover={{ y: -4 }}
              className="relative rounded-xl bg-[#faf8f5] border border-slate-200/90 p-8 flex flex-col justify-between hover:border-amber-400 hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="h-12 w-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-amber-600 shadow-2xs group-hover:scale-110 group-hover:bg-linear-to-br group-hover:from-amber-500 group-hover:to-orange-500 group-hover:text-slate-950 transition-all duration-300">
                    <BadgeCheck className="h-6 w-6" />
                  </div>

                  <span className="text-xs font-mono font-bold text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-2xs">
                    25-Yr Performance
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-950 mb-2.5 tracking-tight group-hover:text-orange-600 transition-colors">
                  Bloomberg Tier-1 Equipment
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  We exclusively install tier-1 monocrystalline N-Type TOPCon panels and
                  high-efficiency hybrid inverters engineered for high-heat Australian UV
                  resilience.
                </p>

                {/* Brand Badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200/60">
                  {["Sungrow", "Tesla", "Fronius", "Jinko", "Longi"].map((brand) => (
                    <span
                      key={brand}
                      className="px-2.5 py-1 rounded-lg bg-white border border-slate-200/80 text-[11px] font-bold text-slate-700 shadow-2xs"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-emerald-700">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                <span>85%+ Linear Output at Year 25</span>
              </div>
            </motion.div>

            {/* Card 4: Tri-State Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: 0.25 }}
              whileHover={{ y: -4 }}
              className="relative rounded-xl bg-[#faf8f5] border border-slate-200/90 p-8 flex flex-col justify-between hover:border-amber-400 hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="h-12 w-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-amber-600 shadow-2xs group-hover:scale-110 group-hover:bg-linear-to-br group-hover:from-amber-500 group-hover:to-orange-500 group-hover:text-slate-950 transition-all duration-300">
                    <Clock className="h-6 w-6" />
                  </div>

                  <span className="text-xs font-mono font-bold text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-2xs">
                    &lt; 15 Min Triage
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-950 mb-2.5 tracking-tight group-hover:text-orange-600 transition-colors">
                  Tri-State Local Support Hubs
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  Dedicated local operations centres, stocking warehouses, and rapid-response
                  electricians across Western Australia, New South Wales, and Queensland.
                </p>

                {/* State Hub Badges */}
                <div className="space-y-1.5 pt-4 border-t border-slate-200/60 text-xs">
                  <div className="flex items-center gap-2 text-slate-700">
                    <MapPin className="h-3.5 w-3.5 text-orange-500 shrink-0" />
                    <span className="font-bold">WA:</span>
                    <span>Caversham (Greater Perth Hub)</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <MapPin className="h-3.5 w-3.5 text-orange-500 shrink-0" />
                    <span className="font-bold">NSW:</span>
                    <span>Kellyville (Greater Sydney Hub)</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <MapPin className="h-3.5 w-3.5 text-orange-500 shrink-0" />
                    <span className="font-bold">QLD:</span>
                    <span>Chermside (Greater Brisbane Hub)</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-emerald-700">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                <span>Direct Local Electrician Dispatch</span>
              </div>
            </motion.div>

            {/* Card 5: Engineering & Compliance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: 0.35 }}
              whileHover={{ y: -4 }}
              className="relative rounded-xl bg-[#faf8f5] border border-slate-200/90 p-8 flex flex-col justify-between hover:border-amber-400 hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="h-12 w-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-amber-600 shadow-2xs group-hover:scale-110 group-hover:bg-linear-to-br group-hover:from-amber-500 group-hover:to-orange-500 group-hover:text-slate-950 transition-all duration-300">
                    <FileCheck className="h-6 w-6" />
                  </div>

                  <span className="text-xs font-mono font-bold text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-2xs">
                    100% Compliant
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-950 mb-2.5 tracking-tight group-hover:text-orange-600 transition-colors">
                  Full Australian Standards Certified
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  Every residential and commercial system strictly complies with AS/NZS 3000, AS/NZS
                  5033, and AS/NZS 5139 safety and grid protection standards.
                </p>

                {/* Standards Badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200/60">
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200/80 text-[11px] font-bold text-slate-700 shadow-2xs">
                    AS/NZS 3000 (Wiring)
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200/80 text-[11px] font-bold text-slate-700 shadow-2xs">
                    AS/NZS 5033 (Solar PV)
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200/80 text-[11px] font-bold text-slate-700 shadow-2xs">
                    AS/NZS 5139 (Battery)
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-emerald-700">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                <span>Certificate of Electrical Safety</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesWhyChooseSection;
