import { motion } from "motion/react";
import {
  Clock,
  Compass,
  FileCheck2,
  Wrench,
  Zap,
  PhoneCall,
  CheckCircle2,
  Building2,
  ArrowRight,
} from "lucide-react";
import { CONTACT_INFO } from "../../../constants";
import { useInquiryModal } from "../../../context";

const STEPS = [
  {
    step: "01",
    time: "< 15 Minutes",
    title: "Rapid Local Triage",
    desc: "Your inquiry is instantly routed to a licensed Clean Energy Council engineer in your state (WA, NSW, or QLD) for property review.",
    icon: Clock,
    color: "from-amber-500 to-orange-500",
  },
  {
    step: "02",
    time: "Within 2 Hours",
    title: "3D Satellite Solar Modeling",
    desc: "Using high-definition satellite imagery and LIDAR irradiance tools, we simulate panel tilt, shading, and annual kWh generation.",
    icon: Compass,
    color: "from-orange-500 to-amber-600",
  },
  {
    step: "03",
    time: "Same Day Delivery",
    title: "Itemized Rebate Proposal",
    desc: "We present a transparent fixed-price quote with Federal STC discounts and state incentives subtracted upfront.",
    icon: FileCheck2,
    color: "from-amber-600 to-emerald-600",
  },
  {
    step: "04",
    time: "1-Day Installation",
    title: "Master Electrician Install",
    desc: "Our in-house A-Grade electricians commission your solar array and battery storage, backed by our 10-year workmanship warranty.",
    icon: Wrench,
    color: "from-emerald-600 to-teal-600",
  },
];

export function AssistanceProcessSection() {
  const { openInquiryModal } = useInquiryModal();

  return (
    <section className="relative py-24 bg-slate-50 text-slate-900 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            Clear &amp; Rapid Turnaround
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            What Happens After You Contact Us?
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            We eliminate the waiting game. From your first call or digital quote
            submission to energizing your solar array, here is our 4-step process.
          </p>
        </div>

        {/* 4-Step Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-3xl bg-white border border-slate-200/90 p-7 shadow-lg hover:shadow-2xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black text-slate-300 group-hover:text-amber-500 transition-colors font-mono">
                      {item.step}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                      {item.time}
                    </span>
                  </div>

                  <div
                    className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-md shadow-orange-500/20 mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-black text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-amber-600 group-hover:translate-x-1 transition-transform">
                  <span>Guaranteed SLA</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Specialized Channel Callout Boxes */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1: Urgent Electrical Support */}
          <div className="rounded-3xl border border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50 p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-900 text-xs font-bold uppercase tracking-wider mb-4">
                <Zap className="h-3.5 w-3.5 text-orange-600" />
                Urgent Electrical Callout
              </div>
              <h3 className="text-2xl font-black text-slate-950 mb-2">
                Switchboard Fault or Solar Inverter Tripping?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                Our A-Grade licensed master electricians are on standby for
                emergency repairs, circuit breaker trips, blown isolators, and
                safety switch compliance across WA, NSW, and QLD.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a
                href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-sm shadow-md transition-colors"
              >
                <PhoneCall className="h-4 w-4" />
                <span>Call Emergency Line: {CONTACT_INFO.phone1}</span>
              </a>
              <span className="text-xs text-slate-500 font-semibold">
                Fast dispatch available
              </span>
            </div>
          </div>

          {/* Card 2: Commercial Solar & Microgrids */}
          <div className="rounded-3xl border border-slate-200 bg-slate-900 text-white p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
                <Building2 className="h-3.5 w-3.5" />
                Commercial &amp; Enterprise
              </div>
              <h3 className="text-2xl font-black text-white mb-2">
                Commercial Solar &amp; Microgrids (30kW – 250kW+)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                Looking for industrial rooftop arrays, peak-demand shaving
                batteries, or commercial EV charging hubs? Speak directly with
                our lead commercial electrical engineers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => openInquiryModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-black text-sm shadow-md transition-all cursor-pointer"
              >
                <span>Request Feasibility Study</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href={`mailto:${CONTACT_INFO.email}?subject=Commercial%20Solar%20Tender`}
                className="text-xs text-amber-400 hover:text-amber-300 font-bold underline underline-offset-4"
              >
                Submit RFP / Tender Documents
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AssistanceProcessSection;
