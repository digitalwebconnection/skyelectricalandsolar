import { useRef } from "react";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { FadeContent } from "../../../components/common/FadeContent";
import ScrollStack, {
  ScrollStackItem,
  type ScrollStackHandle,
} from "../../../components/common/ScrollStack";
import { useInquiryModal } from "../../../context";

export function SolarSectorsSection() {
  const stackRef = useRef<ScrollStackHandle>(null);
  const { openInquiryModal } = useInquiryModal();

  return (
    <section
      id="solar-sectors"
      aria-label="Residential and Commercial Solar Solutions"
      className="relative py-8 sm:py-12 bg-white"
    >
      {/* Ambient Lighting Gradients (safely contained in clipped background container) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-amber-400/10 via-orange-400/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-sky-400/5 rounded-full blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= SECTION HEADER ================= */}
        <FadeContent
          effect="focus"
          blur={8}
          duration={1.2}
          threshold={0.15}
          className="text-center max-w-4xl mx-auto mb-8 sm:mb-12"
        >
          

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
            Engineered for{" "}
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Homes & Businesses
            </span>{" "}
            Across Australia
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Precision solar systems engineered for high yields, rapid payback,
            and decades of reliable clean energy.
          </p>
        </FadeContent>

        {/* ================= REACT BITS SCROLL STACK (WINDOW-LEVEL SCROLL) ================= */}
        <div className="relative w-full">
          <ScrollStack
            ref={stackRef}
            useWindowScroll={true}
            itemDistance={220}
            itemStackDistance={32}
            stackPosition="110px"
            itemScale={0.04}
            baseScale={0.92}
            dimAmount={0.2}
            blurAmount={0.5}
            tiltAmount={1.5}
            rotationAmount={0.5}
            snap={false}
            holdDistance={200}
            smoothScroll={false}
            innerClassName="px-0"
            className="w-full"
          >
            {/* ---------------- CARD 1: RESIDENTIAL SOLAR ---------------- */}
            <ScrollStackItem itemClassName="!h-auto lg:!h-[540px] !bg-white border border-amber-100 shadow-[0_20px_50px_-15px_rgba(245,158,11,0.14)] rounded-xl p-6 sm:p-8 lg:p-10 transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center h-full">
                {/* Left Side: Editorial Typography & Content */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
                  {/* Eyebrow Label */}
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-xs font-extrabold uppercase tracking-widest text-amber-700">
                      <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                      <span>01 • Residential Solar</span>
                    </div>
                  
                  </div>

                  {/* Headline */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold tracking-tight text-slate-900 leading-tight">
                    Power your home with the sun and enjoy true energy
                    independence.
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Our residential solar solutions maximize efficiency, reduce
                    electricity costs, and protect your household from rising
                    utility rates. Homeowners generate clean energy, minimize
                    grid reliance, and lock in long-term power savings.
                  </p>

                  {/* Stat Counters */}
                  <div className="grid grid-cols-3 gap-4  py-4">
                    <div>
                      <div className="text-2xl sm:text-3xl font-black text-amber-500 tracking-tight">
                        80%
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                        Bill Reduction
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                        25 Yrs
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                        Hardware Warranty
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-black text-emerald-600 tracking-tight">
                        ~9.2 T
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                        CO₂ Offset / Year
                      </div>
                    </div>
                  </div>

                  {/* Action Link & CTA */}
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1">
                    <button
                      type="button"
                      onClick={() => openInquiryModal('Residential Rooftop Solar')}
                      className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 px-6 sm:px-7 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 active:scale-95 cursor-pointer"
                    >
                      <span>Get Home Solar Quote</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>

                    <a
                      href="https://skyelectricalandsolar.com/blogs/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-600 hover:text-amber-700 transition-colors group"
                    >
                      <span>Know More</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>

                {/* Right Side: Fluid Photo Showcase */}
                <div className="lg:col-span-5 relative h-full">
                  <div className="relative overflow-hidden rounded-xl shadow-xl shadow-slate-900/10 group h-full min-h-[240px] sm:min-h-[280px] lg:min-h-[440px]">
                    <img
                      src="/assets/residential-solar.jpg"
                      alt="Residential Solar Rooftop Installation in Melbourne"
                      className="w-full h-full min-h-[240px] sm:min-h-[280px] lg:min-h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src =
                          "/assets/posters/poster-rooftop.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                

                    <div className="absolute bottom-5 left-5 right-5 text-white flex items-end justify-between">
                      <div>
                        <div className="text-xs uppercase tracking-wider text-amber-300 font-bold">
                          Sky Quality Guarantee
                        </div>
                        <div className="text-base sm:text-lg font-extrabold">
                          Clean Energy Council Accredited
                        </div>
                      </div>
                      <span className="text-xs bg-white/20 backdrop-blur-md px-3 py-1 rounded-full font-semibold border border-white/20">
                        Melbourne & Regional VIC
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollStackItem>

            {/* ---------------- CARD 2: COMMERCIAL & ENTERPRISE SOLAR ---------------- */}
            <ScrollStackItem itemClassName="!h-auto lg:!h-[540px] !bg-white border border-blue-100 shadow-[0_20px_50px_-15px_rgba(37,99,235,0.14)] rounded-xl p-6 sm:p-8 lg:p-10 transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center h-full">
                {/* Left Side: Editorial Typography & Content */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
                  {/* Eyebrow Label */}
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-extrabold uppercase tracking-widest text-blue-700">
                      <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                      <span>02 • Commercial & Enterprise</span>
                    </div>
                   
                  </div>

                  {/* Headline */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                    Empower your business with smart energy solutions that drive
                    profitability.
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Our commercial solar systems help businesses reduce
                    operating overheads, stabilize energy expenses against
                    rising tariffs, and build a competitive edge through
                    renewable energy.
                  </p>

                  {/* Stat Counters */}
                  <div className="grid grid-cols-3 gap-4  py-4">
                    <div>
                      <div className="text-2xl sm:text-3xl font-black text-blue-600 tracking-tight">
                        2–4 Yrs
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                        Average Payback
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                        500kW+
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                        Capacity Range
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-black text-emerald-600 tracking-tight">
                        100%
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                        Tax Write-Off Eligible
                      </div>
                    </div>
                  </div>

                  {/* Action Link & CTA */}
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1">
                    <button
                      type="button"
                      onClick={() => openInquiryModal('Commercial & Industrial Solar Arrays')}
                      className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 px-6 sm:px-7 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all duration-200 active:scale-95 cursor-pointer"
                    >
                      <span>Request Commercial Energy Audit</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>

                    <a
                      href="https://skyelectricalandsolar.com/blogs/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group"
                    >
                      <span>Know More</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>

                {/* Right Side: Fluid Photo Showcase */}
                <div className="lg:col-span-5 relative h-full">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-slate-900/10 group h-full min-h-[240px] sm:min-h-[280px] lg:min-h-[440px]">
                    <img
                      src="/assets/commercial-solar.jpg"
                      alt="Commercial Solar Array Installation"
                      className="w-full h-full min-h-[240px] sm:min-h-[280px] lg:min-h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = "/assets/solar-farm-bg.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                   
                    <div className="absolute bottom-5 left-5 right-5 text-white flex items-end justify-between">
                      <div>
                        <div className="text-xs uppercase tracking-wider text-sky-300 font-bold">
                          Commercial Turnkey
                        </div>
                        <div className="text-base sm:text-lg font-extrabold">
                          Offices to Industrial Warehouses
                        </div>
                      </div>
                      <span className="text-xs bg-white/20 backdrop-blur-md px-3 py-1 rounded-full font-semibold border border-white/20">
                        15kW – 500kW+ Turnkey
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          </ScrollStack>
        </div>

      </div>
    </section>
  );
}

export default SolarSectorsSection;
