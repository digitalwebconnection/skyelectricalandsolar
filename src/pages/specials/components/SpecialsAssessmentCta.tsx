import { useState } from "react";
import { motion } from "motion/react";
import {
  Phone,
  MapPin,
  Sparkles,
  ArrowRight,
  Calculator,
  Clock,
  Building,
  Home,
} from "lucide-react";
import { useInquiryModal } from "../../../context";
import { STATE_HUBS } from "../../../constants";
import { MagicCard, ShimmerButton } from "../../../components/ui";

export function SpecialsAssessmentCta() {
  const { openInquiryModal } = useInquiryModal();

  // Interactive Live Estimator State
  const [selectedState, setSelectedState] = useState<"WA" | "NSW" | "QLD">("WA");
  const [propertyType, setPropertyType] = useState<"single" | "double" | "commercial">("single");
  const [quarterlyBill, setQuarterlyBill] = useState<"low" | "mid" | "high">("mid");

  // Dynamic Rebate & Savings Calculations
  const calculations = {
    WA: {
      single: {
        low: { rebate: "$2,450", savings: "$1,450 / yr", recommended: "6.6kW Essential Solar" },
        mid: { rebate: "$3,150", savings: "$2,200 / yr", recommended: "10kW High-Efficiency Solar" },
        high: { rebate: "$3,850", savings: "$3,400 / yr", recommended: "13.2kW Solar + 10kWh Battery" },
      },
      double: {
        low: { rebate: "$2,450", savings: "$1,450 / yr", recommended: "6.6kW Essential Solar" },
        mid: { rebate: "$3,150", savings: "$2,150 / yr", recommended: "10kW Solar + Smart Inverter" },
        high: { rebate: "$3,850", savings: "$3,300 / yr", recommended: "13.2kW Solar + 10kWh Battery" },
      },
      commercial: {
        low: { rebate: "$4,500", savings: "$4,800 / yr", recommended: "20kW Commercial PV Array" },
        mid: { rebate: "$8,200", savings: "$8,500 / yr", recommended: "30kW - 50kW Commercial Array" },
        high: { rebate: "$15,000+", savings: "$16,000+ / yr", recommended: "100kW Turnkey Commercial Array" },
      },
    },
    NSW: {
      single: {
        low: { rebate: "$2,300", savings: "$1,500 / yr", recommended: "6.6kW Essential Solar" },
        mid: { rebate: "$2,950", savings: "$2,350 / yr", recommended: "10kW High-Efficiency Solar" },
        high: { rebate: "$3,700", savings: "$3,550 / yr", recommended: "13.2kW Solar + 10kWh Battery" },
      },
      double: {
        low: { rebate: "$2,300", savings: "$1,500 / yr", recommended: "6.6kW Essential Solar" },
        mid: { rebate: "$2,950", savings: "$2,300 / yr", recommended: "10kW Solar + Smart Inverter" },
        high: { rebate: "$3,700", savings: "$3,450 / yr", recommended: "13.2kW Solar + 10kWh Battery" },
      },
      commercial: {
        low: { rebate: "$4,200", savings: "$5,100 / yr", recommended: "20kW Commercial PV Array" },
        mid: { rebate: "$7,800", savings: "$9,200 / yr", recommended: "30kW - 50kW Commercial Array" },
        high: { rebate: "$14,500+", savings: "$17,500+ / yr", recommended: "100kW Turnkey Commercial Array" },
      },
    },
    QLD: {
      single: {
        low: { rebate: "$2,500", savings: "$1,600 / yr", recommended: "6.6kW Essential Solar" },
        mid: { rebate: "$3,200", savings: "$2,400 / yr", recommended: "10kW High-Yield Solar" },
        high: { rebate: "$3,900", savings: "$3,650 / yr", recommended: "13.2kW Solar + 10kWh Battery" },
      },
      double: {
        low: { rebate: "$2,500", savings: "$1,600 / yr", recommended: "6.6kW Essential Solar" },
        mid: { rebate: "$3,200", savings: "$2,350 / yr", recommended: "10kW High-Yield Solar" },
        high: { rebate: "$3,900", savings: "$3,500 / yr", recommended: "13.2kW Solar + 10kWh Battery" },
      },
      commercial: {
        low: { rebate: "$4,600", savings: "$5,300 / yr", recommended: "20kW Commercial PV Array" },
        mid: { rebate: "$8,500", savings: "$9,600 / yr", recommended: "30kW - 50kW Commercial Array" },
        high: { rebate: "$15,500+", savings: "$18,000+ / yr", recommended: "100kW Turnkey Commercial Array" },
      },
    },
  };

  const currentCalc = calculations[selectedState][propertyType][quarterlyBill];

  return (
    <section className="relative py-20 lg:py-24 bg-white text-slate-900 border-t border-slate-200/80 overflow-hidden">
      {/* Ambient Warm Glow Accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.07, 0.15, 0.07] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 left-1/3 w-110 h-110 bg-amber-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-10 right-10 w-110 h-110 bg-orange-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= INTERACTIVE REBATE ESTIMATOR TOOL ================= */}
        <div className="rounded-3xl bg-linear-to-br from-slate-950 via-[#071d32] to-slate-950 p-8 sm:p-12 lg:p-14 text-white shadow-2xl border border-slate-800 relative overflow-hidden mb-16">
          {/* Subtle Background Radial Aura */}
          <div className="pointer-events-none absolute -right-20 -top-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Interactive Calculator Controls */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/20 border border-orange-500/30 px-3.5 py-1 text-xs font-bold text-orange-400 mb-4">
                <Calculator className="w-3.5 h-3.5" />
                <span>Interactive Rebate &amp; Savings Calculator</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Calculate Your Exact Rebate &amp;{" "}
                <span className="bg-linear-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                  Annual Solar Savings
                </span>
              </h2>

              <p className="mt-3 text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                Configure your state and property profile below to see your estimated point-of-sale
                government STC rebate deduction and projected electricity bill savings.
              </p>

              {/* Step 1: Select State */}
              <div className="mt-6">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                  1. Select Your State Zone
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "WA", label: "Western Australia (WA)" },
                    { id: "NSW", label: "New South Wales (NSW)" },
                    { id: "QLD", label: "Queensland (QLD)" },
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedState(s.id as typeof selectedState)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        selectedState === s.id
                          ? "bg-orange-500 text-white border-orange-400 shadow-sm"
                          : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Property Type */}
              <div className="mt-4">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                  2. Select Property Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "single", label: "Single Storey", icon: Home },
                    { id: "double", label: "Double Storey", icon: Home },
                    { id: "commercial", label: "Commercial", icon: Building },
                  ].map((p) => {
                    const Icon = p.icon;
                    return (
                      <button
                        key={p.id}
                        onClick={() => setPropertyType(p.id as typeof propertyType)}
                        className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                          propertyType === p.id
                            ? "bg-amber-500 text-slate-950 border-amber-400 shadow-sm"
                            : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{p.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Quarterly Power Bill */}
              <div className="mt-4">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                  3. Average Quarterly Power Bill
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "low", label: "$400 – $600 / qtr" },
                    { id: "mid", label: "$600 – $1,000 / qtr" },
                    { id: "high", label: "$1,000+ / qtr" },
                  ].map((b) => (
                    <button
                      key={b.id}
                      onClick={() => setQuarterlyBill(b.id as typeof quarterlyBill)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        quarterlyBill === b.id
                          ? "bg-emerald-500 text-white border-emerald-400 shadow-sm"
                          : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
                      }`}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Live Results Display Box */}
            <div className="lg:col-span-5 bg-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/15 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>Estimated Rebate Outcome</span>
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                  {selectedState} Zone
                </span>
              </div>

              {/* Dynamic Calculation Cards */}
              <div className="space-y-3">
                <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-700/80">
                  <span className="text-xs text-slate-400 block">Upfront STC Government Rebate</span>
                  <div className="text-2xl sm:text-3xl font-black text-amber-400 mt-0.5">
                    {currentCalc.rebate}
                  </div>
                  <span className="text-[11px] text-slate-400">Deducted directly off your total invoice</span>
                </div>

                <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-700/80">
                  <span className="text-xs text-slate-400 block">Projected Annual Bill Savings</span>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400 mt-0.5">
                    {currentCalc.savings}
                  </div>
                  <span className="text-[11px] text-slate-400">Based on standard daytime self-consumption</span>
                </div>

                <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-700/80">
                  <span className="text-xs text-slate-400 block">Recommended System Match</span>
                  <div className="text-base font-bold text-white mt-0.5">
                    {currentCalc.recommended}
                  </div>
                  <span className="text-[11px] text-orange-400">Tier-1 CEC Certified Hardware</span>
                </div>
              </div>

              {/* Action Button */}
              <ShimmerButton
                onClick={() =>
                  openInquiryModal(
                    `Rebate Estimate: ${selectedState} (${propertyType}) - ${currentCalc.recommended} with ${currentCalc.rebate} STC Rebate`
                  )
                }
                className="w-full py-3.5 text-sm font-bold shadow-lg shadow-orange-500/25"
              >
                <Sparkles className="h-4 w-4 text-amber-200" />
                <span>Lock In This Rebate Quote</span>
                <ArrowRight className="h-4 w-4" />
              </ShimmerButton>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Mon – Sat: 7:00 AM – 6:00 PM</span>
                </span>
                <span className="text-emerald-400 font-semibold">● Live Dispatch Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= STATE DISPATCH HUBS WITH MAGIC CARDS ================= */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              State Operations &amp; Direct Dispatch Hubs
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Speak directly to our accredited state engineers to verify your exact roof viability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STATE_HUBS.map((hub) => (
              <MagicCard
                key={hub.id}
                gradientColor="rgba(249, 115, 22, 0.12)"
                gradientSize={300}
                className="rounded-3xl bg-slate-50 border border-slate-200/90 p-6 shadow-sm hover:shadow-lg hover:border-orange-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-md bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider">
                      {hub.shortState}
                    </span>
                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{hub.badge}</span>
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900">{hub.state} Hub</h4>
                  <p className="text-xs text-slate-600 mt-1 flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                    <span>{hub.address}</span>
                  </p>
                  <p className="text-xs text-slate-500 mt-2 italic">{hub.serviceArea}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <a
                    href={`tel:${hub.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-1.5 font-bold text-sm text-slate-900 hover:text-orange-600 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-orange-500" />
                    <span>{hub.phone}</span>
                  </a>

                  <button
                    onClick={() => openInquiryModal(`${hub.state} Special Solar Inquiry`)}
                    className="text-xs font-bold text-orange-600 hover:text-orange-700 underline cursor-pointer"
                  >
                    Claim Special →
                  </button>
                </div>
              </MagicCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialsAssessmentCta;
