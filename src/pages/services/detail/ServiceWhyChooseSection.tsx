import { motion } from "motion/react";
import { ShieldCheck, Award, CheckCircle2, Zap, Clock, MapPin, FileCheck2 } from "lucide-react";
import type { ServiceItem } from "../data/servicesData";
import { BorderBeam } from "@/components/ui";

interface ServiceWhyChooseSectionProps {
  service: ServiceItem;
}

export function ServiceWhyChooseSection({ service }: ServiceWhyChooseSectionProps) {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-[#faf8f5] text-slate-900 overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        <div className="absolute top-1/4 -right-28 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-28 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= SECTION HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Award className="h-4 w-4 text-orange-600" />
            <span>Master Electrician Standards</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Why Choose{" "}
            <span className="bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Sky Electrical &amp; Solar?
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Proven engineering expertise, zero subcontractors, and unconditional Australian
            warranties backing every {service.title.toLowerCase()} installation.
          </p>
        </motion.div>

        {/* ================= ASYMMETRIC BENTO GRID (REPLACING 4 IDENTICAL BOXES) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Flagship Panel (Left 5 cols): Dark Architectural Authority Pillar */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-5 relative rounded-3xl bg-[#051324] text-white p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-2xl border border-slate-800 group"
          >
            <BorderBeam size={280} duration={12} delay={0} colorFrom="#f59e0b" colorTo="#ea580c" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck className="h-4 w-4 text-amber-400" />
                  <span>The Sky Guarantee</span>
                </span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full font-bold">
                  CEC Certified
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-4">
                10-Year Workmanship &amp; Engineering Warranty
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed font-normal mb-8">
                Roof bracket flashings, isolators, high-voltage conduits, and switchboard terminals
                are 100% installed by in-house licensed tradesmen. If anything ever fails, we
                dispatch and resolve it at zero cost.
              </p>

              <div className="space-y-3 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>100% In-House A-Grade Master Electricians</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>$20M Comprehensive Public Liability Coverage</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0" />
                  <span>Official Certificate of Electrical Safety (COES)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span className="font-semibold">Clean Energy Council Approved</span>
              <span className="font-mono text-amber-400 font-bold">WA • NSW • QLD</span>
            </div>
          </motion.div>

          {/* Differentiated Pillars (Right 7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-5">
            {/* Pillar A: Upfront Government Rebates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -3 }}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-amber-400 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-9 w-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                    <Zap className="h-4 w-4" />
                  </div>
                  <h4 className="text-base sm:text-lg font-black text-slate-950">
                    Direct Point-of-Sale Government Rebates
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  We deduct all federal STC and state incentives directly off your upfront invoice.
                  You only pay the net balance with zero paperwork hassle.
                </p>
              </div>

              <div className="shrink-0 text-left sm:text-right p-3 rounded-xl bg-amber-50 border border-amber-200/80">
                <span className="text-[11px] font-bold text-amber-800 uppercase block">
                  Upfront Deductions
                </span>
                <span className="text-lg font-black text-slate-950 font-mono">Up to $2,400+</span>
              </div>
            </motion.div>

            {/* Pillar B: Tri-State Local Dispatch */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -3 }}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-amber-400 shadow-xs hover:shadow-lg transition-all duration-300 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-9 w-9 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <h4 className="text-base sm:text-lg font-black text-slate-950">
                    Tri-State Local Support &amp; Rapid Dispatch
                  </h4>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-[11px] font-bold">
                  <Clock className="h-3 w-3" />
                  <span>&lt; 15m Triage</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Dedicated local operations centers with fully stocked spare parts and rapid dispatch
                vans in Caversham (WA), Kellyville (NSW), and Chermside (QLD).
              </p>
            </motion.div>

            {/* Pillar C: Full Australian Standards Compliance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -3 }}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-amber-400 shadow-xs hover:shadow-lg transition-all duration-300 space-y-3"
            >
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700">
                  <FileCheck2 className="h-4 w-4" />
                </div>
                <h4 className="text-base sm:text-lg font-black text-slate-950">
                  Strict AS/NZS 3000 &amp; Grid Code Compliance
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                All wiring, isolation points, and equipment selections meet and exceed Western
                Power, Ausgrid, and Energex connection requirements.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {["AS/NZS 3000", "AS/NZS 5033", "AS/NZS 5139", "CEC Approved"].map((badge) => (
                  <span
                    key={badge}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 text-[11px] font-bold text-slate-700 border border-slate-200/80"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceWhyChooseSection;
