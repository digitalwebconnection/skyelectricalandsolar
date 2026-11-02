import { ArrowRight, CheckCircle2, MapPin, PhoneCall, Shield, Sparkles } from "lucide-react";
import { FadeContent } from "../../../components/common/FadeContent";
import { CONTACT_INFO } from "../../../constants";
import { useInquiryModal } from "../../../context";

export function AboutCta() {
  const { openInquiryModal } = useInquiryModal();

  return (
    <section
      aria-labelledby="about-cta-heading"
      className="relative overflow-hidden bg-linear-to-b from-white via-slate-50 to-amber-50/30 py-12 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeContent effect="focus" blur={6} duration={0.9} threshold={0.15}>
          {/* Architectural Container with Dual Split Layout */}
          <div className="relative isolate overflow-hidden rounded-3xl bg-linear-to-br from-[#071d32] via-[#092846] to-[#041322] border border-slate-800 shadow-xl shadow-slate-900/20 p-6 sm:p-8 lg:p-10 text-white">
            {/* Ambient Lighting Gradients with pure Tailwind */}
            <div className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-linear-to-br from-amber-400/20 via-orange-500/15 to-transparent blur-3xl -z-10" />
            <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl -z-10" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: Direct Consultation Promise */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/30 bg-white/5 px-3 py-0.5 text-[11px] font-black tracking-wider uppercase text-amber-300 backdrop-blur-md">
                    <Sparkles className="h-3 w-3 text-amber-400" />
                    <span>Complimentary Engineering Assessment</span>
                  </div>

                  <h2
                    id="about-cta-heading"
                    className="mt-3.5 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-[1.15] tracking-tight"
                  >
                    Speak With a Master Electrician,{" "}
                    <span className="bg-linear-to-r from-amber-300 via-orange-300 to-amber-400 bg-clip-text text-transparent">
                      Not a Call Center Broker.
                    </span>
                  </h2>

                  <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                    Get an honest, satellite-modeled solar and battery proposal engineered for your
                    exact roof pitch, power consumption, and maximum Australian Federal rebate
                    eligibility.
                  </p>
                </div>

                {/* 3 Value Pillars */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                    <span>3D Satellite Roof Shading &amp; Kilowatt Output Analysis</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                    <span>Upfront Government STC Rebate Deduction Calculated Instantly</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                    <span>100% In-House Installation Guarantee — Zero Subcontractors</span>
                  </div>
                </div>

                {/* Coverage Territory */}
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 pt-1">
                  <MapPin className="h-3.5 w-3.5 text-orange-400 shrink-0" />
                  <span>
                    Serving Western Australia (Perth Hub), New South Wales (Sydney Hub) &amp;
                    Queensland (Brisbane Hub)
                  </span>
                </div>
              </div>

              {/* Right Column: Direct Conversion Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-white/15 bg-white/[0.07] p-5 sm:p-6 backdrop-blur-xl shadow-xl flex flex-col justify-between space-y-5">
                  {/* Status Tag */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      <span className="text-xs font-bold text-slate-200">
                        Technicians On Call Today
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold text-amber-300">
                      Zero Obligation
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Get Your Free Solar Proposal
                    </h3>
                    <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                      Custom system modeling, battery feasibility, and payback timeline delivered
                      directly to your inbox.
                    </p>
                  </div>

                  {/* Primary & Secondary Action Buttons */}
                  <div className="space-y-2.5 pt-1">
                    <button
                      type="button"
                      onClick={() => openInquiryModal()}
                      className="w-full flex items-center justify-center gap-2 h-11 sm:h-12 rounded-full bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-orange-500/25 transition-all duration-200 active:scale-98 cursor-pointer"
                    >
                      <span>Claim Free Solar Assessment</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>

                    <a
                      href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`}
                      className="w-full flex items-center justify-center gap-2 h-10 sm:h-11 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-slate-100 font-bold text-xs sm:text-sm transition-all duration-200"
                    >
                      <PhoneCall className="h-3.5 w-3.5 text-amber-400" />
                      <span>Call Direct: {CONTACT_INFO.phone1}</span>
                    </a>
                  </div>

                  {/* Trust footer stamp */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-center gap-2 text-[10px] text-slate-400">
                    <Shield className="h-3 w-3 text-emerald-400" />
                    <span>Clean Energy Council Accredited • Master Electricians</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}

export default AboutCta;
