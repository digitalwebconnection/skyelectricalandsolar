import { useState } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Copy,
  Check,
  ExternalLink,
  Clock,
  Zap,
  ArrowRight,
  Sparkles,
  Radio,
} from "lucide-react";
import { STATE_HUBS, CONTACT_INFO } from "../../../constants";
import { useInquiryModal } from "../../../context";
import { BorderBeam } from "../../../components/common/BorderBeam";

export function ContactChannelsSection() {
  const { openInquiryModal } = useInquiryModal();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const scrollToForm = () => {
    const el = document.getElementById("contact-form-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-8 lg:py-14 bg-[#faf8f5] text-slate-900 overflow-hidden border-b border-slate-200/80">
      {/* ================= INLINE ANIMATION KEYFRAMES ================= */}
      <style>{`
        @keyframes channelsLaserSweep {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        @keyframes channelsPulseGlow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.35;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.7;
          }
        }
        @keyframes channelsCircuitFlow {
          0% {
            stroke-dashoffset: 48;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        @keyframes channelsFloatParticle {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.35;
          }
          50% {
            transform: translateY(-18px) scale(1.25);
            opacity: 0.85;
          }
        }
      `}</style>

      {/* ================= RICH HIGH-TECH SOLAR ARCHITECTURAL BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        
        {/* 1. PHOTOGRAPHIC HORIZON DEPTH LAYER (Warm Solar Farm with Soft Mask) */}
        <div
          className="absolute inset-0"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0.04) 75%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0.04) 75%, transparent 100%)",
          }}
        >
          <img
            src="/assets/solar-farm-bg.jpg"
            alt=""
            className="w-full h-full object-cover object-top opacity-35 filter brightness-105 contrast-110 saturate-125"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#faf8f5]/85 via-white/90 to-[#faf8f5]" />
        </div>

        {/* 2. DYNAMIC SOLAR AMBIENT GLOW ORBS */}
        <div
          className="absolute top-12 left-1/2 -translate-x-1/2 w-180 sm:w-240 h-120 bg-linear-to-tr from-amber-400/25 via-orange-400/18 to-yellow-300/15 rounded-full blur-3xl pointer-events-none"
          style={{ animation: "channelsPulseGlow 9s ease-in-out infinite" }}
        />
        <div className="absolute top-1/3 -left-20 w-110 h-110 bg-amber-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -right-20 w-110 h-110 bg-orange-500/12 rounded-full blur-3xl" />
        <div className="absolute top-2/3 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

        {/* 3. CRISP SOLAR CELL WAFER SVG BLUEPRINT PATTERN */}
        <div
          className="absolute inset-0 opacity-45"
          style={{
            maskImage:
              "radial-gradient(ellipse 90% 70% at 50% 45%, black 40%, rgba(0,0,0,0.2) 80%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 70% at 50% 45%, black 40%, rgba(0,0,0,0.2) 80%, transparent 100%)",
          }}
        >
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="channels-rich-wafer-grid"
                width="48"
                height="48"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 48 0 L 0 0 0 48"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="0.8"
                  strokeOpacity="0.32"
                />
                <circle cx="0" cy="0" r="2" fill="#f59e0b" opacity="0.65" />
                <circle cx="48" cy="0" r="2" fill="#ea580c" opacity="0.65" />
                <circle cx="0" cy="48" r="2" fill="#ea580c" opacity="0.65" />
                <circle cx="48" cy="48" r="2" fill="#f59e0b" opacity="0.65" />
                <circle cx="24" cy="24" r="1.4" fill="#10b981" opacity="0.45" />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#channels-rich-wafer-grid)"
            />
          </svg>
        </div>

        {/* 4. DYNAMIC ANIMATED SOLAR CIRCUIT TRACES */}
        <svg
          className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 80 140 H 340 L 400 200 H 720 L 780 140 H 1220"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="1.4"
            strokeDasharray="6 6"
            style={{ animation: "channelsCircuitFlow 3s linear infinite" }}
          />
          <circle cx="340" cy="140" r="3.2" fill="#f59e0b" />
          <circle cx="400" cy="200" r="3.5" fill="#ea580c" />
          <circle cx="720" cy="200" r="3.5" fill="#ea580c" />
          <circle cx="780" cy="140" r="3.2" fill="#f59e0b" />

          {/* Lower Circuit Line */}
          <path
            d="M 120 560 H 420 L 480 500 H 840 L 900 560 H 1180"
            fill="none"
            stroke="#ea580c"
            strokeWidth="1.2"
            strokeDasharray="6 6"
            style={{ animation: "channelsCircuitFlow 3.4s linear infinite" }}
          />
          <circle cx="420" cy="560" r="3" fill="#ea580c" />
          <circle cx="480" cy="500" r="3" fill="#f59e0b" />
          <circle cx="840" cy="500" r="3" fill="#f59e0b" />
          <circle cx="900" cy="560" r="3" fill="#ea580c" />
        </svg>

        {/* 5. DYNAMIC HORIZONTAL SCANNING LASER BEAMS */}
        {/* Top Laser Guide */}
        <div className="absolute top-16 inset-x-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent">
          <div
            className="absolute top-0 h-px w-80 bg-linear-to-r from-transparent via-amber-500 to-transparent shadow-[0_0_12px_#f59e0b]"
            style={{ animation: "channelsLaserSweep 8.5s linear infinite" }}
          />
        </div>

        {/* Mid-section Laser Guide */}
        <div className="absolute top-1/2 inset-x-0 h-px bg-linear-to-r from-transparent via-orange-400/30 to-transparent">
          <div
            className="absolute top-0 h-px w-96 bg-linear-to-r from-transparent via-orange-500 to-transparent shadow-[0_0_12px_#ea580c]"
            style={{
              animation: "channelsLaserSweep 12s linear infinite",
              animationDelay: "3s",
            }}
          />
        </div>

        {/* Lower Laser Guide */}
        <div className="absolute bottom-16 inset-x-0 h-px bg-linear-to-r from-transparent via-amber-400/35 to-transparent">
          <div
            className="absolute top-0 h-px w-72 bg-linear-to-r from-transparent via-amber-500 to-transparent shadow-[0_0_10px_#f59e0b]"
            style={{
              animation: "channelsLaserSweep 9.5s linear infinite",
              animationDelay: "5.5s",
            }}
          />
        </div>

       

        {/* 7. FLOATING SOLAR ENERGY SPARKS */}
        <div
          className="absolute top-1/4 left-[15%] w-2 h-2 rounded-full bg-amber-400/60 shadow-[0_0_8px_#f59e0b]"
          style={{ animation: "channelsFloatParticle 4.5s ease-in-out infinite" }}
        />
        <div
          className="absolute top-1/3 right-[20%] w-2.5 h-2.5 rounded-full bg-orange-400/50 shadow-[0_0_8px_#ea580c]"
          style={{
            animation: "channelsFloatParticle 5.5s ease-in-out infinite",
            animationDelay: "1.5s",
          }}
        />
        <div
          className="absolute bottom-1/3 left-[30%] w-2 h-2 rounded-full bg-yellow-400/60 shadow-[0_0_8px_#facc15]"
          style={{
            animation: "channelsFloatParticle 6s ease-in-out infinite",
            animationDelay: "2.8s",
          }}
        />
        <div
          className="absolute bottom-1/4 right-[28%] w-1.5 h-1.5 rounded-full bg-emerald-400/50 shadow-[0_0_6px_#10b981]"
          style={{
            animation: "channelsFloatParticle 4s ease-in-out infinite",
            animationDelay: "3.2s",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ================= 1. OPEN EDITORIAL HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-tight"
          >
            Three State Facilities.{" "}
            <span className="bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              One Direct Connection.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
          >
            Direct access to Clean Energy Council accredited master electricians.
            Visit our operational hubs, talk to our dispatch line, or claim your proposal.
          </motion.p>
        </div>

        {/* ================= 2. THE 3 HUBS — OPEN ARCHITECTURAL SHOWCASE (NO BOXES) ================= */}
        <div className="relative mb-16 lg:mb-20">
          {/* Animated SVG Circuit Conduit Line spanning all 3 hubs */}
          <div className="hidden lg:block absolute top-10 inset-x-12 h-1 overflow-visible pointer-events-none z-0">
            <svg className="w-full h-4" xmlns="http://www.w3.org/2000/svg">
              <line
                x1="12%"
                y1="2"
                x2="88%"
                y2="2"
                stroke="#f59e0b"
                strokeWidth="2"
                strokeDasharray="6 6"
                strokeOpacity="0.45"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-200/90">
            {STATE_HUBS.map((hub, idx) => {
              const isCopied = copiedKey === hub.id;
              const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                hub.mapQuery,
              )}`;

              return (
                <motion.div
                  key={hub.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className={`pt-8 lg:pt-0 ${
                    idx === 0 ? "lg:pr-8" : idx === 1 ? "lg:px-8" : "lg:pl-8"
                  } flex flex-col justify-between`}
                >
                  <div>
                    {/* Top Watermark Number & State Indicator */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-amber-500 to-orange-500 text-white font-black text-sm shadow-md shadow-orange-500/25">
                          0{idx + 1}
                        </span>
                        <div>
                          <span className="text-xs font-black uppercase tracking-wider text-amber-700 block">
                            {hub.shortState} State Hub
                          </span>
                          <span className="text-xs text-slate-500 font-medium">
                            {hub.city}
                          </span>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50/90 px-2.5 py-1 rounded-full border border-emerald-200 shadow-2xs">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        Open Now
                      </span>
                    </div>

                    {/* Address Title */}
                    <div className="flex items-center gap-2 mb-2 mt-4">
                      <MapPin className="h-5 w-5 text-orange-600 shrink-0" />
                      <h3 className="text-xl font-extrabold text-slate-950">
                        Address
                      </h3>
                    </div>

                    {/* Exact Physical Address (Verbatim) */}
                    <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug tracking-tight mb-4 pl-7">
                      {hub.address}
                    </p>

                    {/* Seamless Inline Quick Actions (No enclosing card) */}
                    <div className="pl-7 flex flex-wrap items-center gap-3 mb-6">
                      <button
                        type="button"
                        onClick={() => handleCopy(hub.address, hub.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-amber-600 bg-white hover:bg-amber-50 border border-slate-200/80 px-3 py-1.5 rounded-full transition-colors cursor-pointer shadow-2xs"
                      >
                        {isCopied ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-600" />
                            <span className="text-emerald-700">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            <span>Copy Address</span>
                          </>
                        )}
                      </button>

                      <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-700 bg-orange-50/80 hover:bg-orange-100 border border-orange-200/60 px-3 py-1.5 rounded-full transition-colors shadow-2xs"
                      >
                        <span>Directions</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>

                    {/* Operating Hours */}
                    <div className="pl-7 flex items-center gap-2 text-xs text-slate-500 mb-6">
                      <Clock className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                      <span>{hub.hours}</span>
                    </div>
                  </div>

                  {/* Direct State Hub Dial Button */}
                  <div className="pl-7">
                    <a
                      href={`tel:${hub.phone.replace(/\s/g, "")}`}
                      className="inline-flex items-center justify-between w-full px-4 py-3 rounded-2xl bg-slate-900 hover:bg-linear-to-r hover:from-amber-600 hover:to-orange-600 text-white font-bold text-xs transition-all duration-300 shadow-md group/dial"
                    >
                      <span className="flex items-center gap-2">
                        <Phone className="h-3.5 w-3.5 text-amber-400 group-hover/dial:text-white transition-colors" />
                        <span>Call {hub.shortState}: {hub.phone}</span>
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover/dial:translate-x-1 group-hover/dial:text-white transition-transform" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= 3. DIRECT CHANNELS & CTA — FLUID HORIZON SHOWCASE (NO BOXES) ================= */}
        <div className="pt-12 border-t-2 border-slate-200/70">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left 7 Columns: Direct Call Us & Email Channels Showcase */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Call Us Stream (Verbatim: 0430 015 017 & 0489 935 658) */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500 text-white shadow-xs">
                    <Phone className="h-4 w-4" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-950">
                    Call Us
                  </h3>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full ml-2 border border-emerald-200/70">
                    <Radio className="h-3 w-3 text-emerald-500 animate-pulse" />
                    Available 7 Days
                  </span>
                </div>
                
                <p className="text-xs text-slate-500 mb-4 pl-10">
                  Speak directly with an accredited technician for quote advice or urgent electrical assistance:
                </p>

                {/* Massive Display Numbers (Clean Action Pills) */}
                <div className="pl-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`}
                    className="group/p1 flex items-center justify-between p-4 rounded-2xl bg-white hover:bg-amber-50/80 border border-slate-200/80 hover:border-amber-400 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Primary Support Line
                      </span>
                      <span className="text-lg font-black text-slate-950 group-hover/p1:text-amber-600 transition-colors">
                        {CONTACT_INFO.phone1}
                      </span>
                    </div>
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-900 group-hover/p1:bg-amber-500 group-hover/p1:text-white shadow-xs transition-colors">
                      <Phone className="h-4 w-4" />
                    </span>
                  </a>

                  <a
                    href={`tel:${CONTACT_INFO.phone2.replace(/\s/g, "")}`}
                    className="group/p2 flex items-center justify-between p-4 rounded-2xl bg-white hover:bg-orange-50/80 border border-slate-200/80 hover:border-orange-400 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Engineering &amp; Technical
                      </span>
                      <span className="text-lg font-black text-slate-950 group-hover/p2:text-orange-600 transition-colors">
                        {CONTACT_INFO.phone2}
                      </span>
                    </div>
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-900 group-hover/p2:bg-orange-500 group-hover/p2:text-white shadow-xs transition-colors">
                      <Phone className="h-4 w-4" />
                    </span>
                  </a>
                </div>
              </div>

              {/* Email Stream (Verbatim: Info@skyelectricalandsolar.net.au) */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-500 text-white shadow-xs">
                    <Mail className="h-4 w-4" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-950">
                    Email
                  </h3>
                  <span className="text-xs text-slate-400 font-medium ml-2">
                    Plans &amp; Inquiries
                  </span>
                </div>

                <div className="pl-10 flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-base sm:text-lg font-extrabold text-slate-950 hover:text-amber-600 underline underline-offset-4 decoration-amber-400 transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>

                  <button
                    type="button"
                    onClick={() => handleCopy(CONTACT_INFO.email, "email")}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-amber-600 bg-white hover:bg-amber-50 border border-slate-200/80 px-3 py-1.5 rounded-full transition-colors cursor-pointer shadow-2xs"
                  >
                    {copiedKey === "email" ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${CONTACT_INFO.email}?subject=Solar%20Quote%20Inquiry`}
                    className="text-xs font-bold text-orange-600 hover:text-orange-700 bg-orange-50/80 px-2.5 py-1 rounded-full border border-orange-200/60"
                  >
                    Compose Email →
                  </a>
                </div>
              </div>

            </div>

            {/* Right 5 Columns: "Get in Touch Now!!" Radiant Action Portal */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-3xl bg-linear-to-br from-amber-500 via-orange-500 to-amber-600 p-8 sm:p-10 text-white shadow-2xl shadow-orange-500/30"
              >
                {/* Ambient Solar Flares */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/20 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-amber-300/30 rounded-full blur-xl pointer-events-none" />

                <BorderBeam
                  size={240}
                  duration={12}
                  colorFrom="#ffffff"
                  colorTo="#fed7aa"
                  borderWidth={2}
                />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-4 backdrop-blur-xs">
                    <Sparkles className="h-3.5 w-3.5 text-amber-200" />
                    <span>Zero Obligation Proposal</span>
                  </div>

                  {/* Heading (Verbatim from image) */}
                  <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
                    Get in Touch Now!!
                  </h3>

                  <p className="text-sm text-white/95 leading-relaxed mb-8 font-medium">
                    Claim your tailored 3D solar layout, blackout-proof battery analysis,
                    and verified Clean Energy Council STC rebate calculations.
                  </p>

                  <div className="space-y-3">
                    <button
                      type="button"
                      onClick={scrollToForm}
                      className="w-full py-4 px-6 rounded-2xl bg-white text-slate-950 font-black text-sm hover:bg-slate-50 transition-all duration-300 shadow-xl flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Zap className="h-4 w-4 text-orange-600 fill-current" />
                      <span>Fill Instant Quote Form</span>
                      <ArrowRight className="h-4 w-4 text-orange-600 ml-1" />
                    </button>

                    <button
                      type="button"
                      onClick={() => openInquiryModal()}
                      className="w-full py-2.5 text-xs text-center font-bold text-white/90 hover:text-white transition-colors underline underline-offset-4 cursor-pointer"
                    >
                      Or Open Quick Inquiry Envelope
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* ================= 4. BOTTOM KEY VALUE PROOF STRIP ================= */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <span className="text-2xl sm:text-3xl font-black text-amber-500 font-mono block">
              &lt; 15 Mins
            </span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">
              Average Turnaround
            </span>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-black text-slate-900 font-mono block">
              3 State Hubs
            </span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">
              WA • NSW • QLD Operations
            </span>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono block">
              100% In-House
            </span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">
              CEC Certified Electricians
            </span>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-black text-orange-500 font-mono block">
              10-Year
            </span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">
              Workmanship Warranty
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactChannelsSection;
