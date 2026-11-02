import { motion } from "motion/react";
import { Clock, ArrowRight } from "lucide-react";
import type { ServiceItem } from "../data/servicesData";

interface ServiceProcessSectionProps {
  service: ServiceItem;
}

export function ServiceProcessSection({ service }: ServiceProcessSectionProps) {
  return (
    <section className="relative py-16 sm:py-20 lg:py-14 bg-white text-slate-900 border-y border-slate-200/80 overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-75 bg-amber-400/8 rounded-full blur-[140px]" />
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            {service.processTitle}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {service.processSubtitle}
          </p>
        </motion.div>

        {/* ================= CONNECTED ENGINEERING PROCESS PIPELINE ================= */}
        <div className="relative">
          {/* Continuous Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
            {service.process.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between"
              >
                <div>
                  {/* Milestone Node on the Track */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white border-2 border-slate-200 group-hover:border-amber-500 shadow-md group-hover:shadow-amber-500/25 transition-all duration-300">
                      <span className="font-mono text-base font-black text-slate-800 group-hover:text-orange-600 transition-colors">
                        {step.step}
                      </span>
                      {/* Pulse Ring */}
                      <span className="absolute -inset-1 rounded-2xl bg-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xs" />
                    </div>

                    {/* Turnaround Tag */}
                    <div className="lg:hidden flex items-center gap-1 text-[11px] font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full">
                      <Clock className="h-3 w-3 text-orange-500" />
                      <span>{step.timeframe}</span>
                    </div>
                  </div>

                  {/* Desktop Turnaround Pill */}
                  <div className="hidden lg:inline-flex items-center gap-1 text-[10px] font-bold text-slate-600 bg-slate-100 border border-slate-200/80 px-2.5 py-0.5 rounded-full mb-3 shadow-2xs">
                    <Clock className="h-3 w-3 text-orange-500" />
                    <span>{step.timeframe}</span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-black text-slate-950 mb-2 tracking-tight group-hover:text-orange-600 transition-colors leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{step.desc}</p>
                </div>

                {/* Bottom Phase Indicator */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 group-hover:text-amber-600 transition-colors">
                  <span>Stage 0{idx + 1} of 05</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceProcessSection;
