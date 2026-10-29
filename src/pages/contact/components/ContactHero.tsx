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
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { STATE_HUBS, CONTACT_INFO } from "../../../constants";
import { useInquiryModal } from "../../../context";

export function ContactHero() {
  const { openInquiryModal } = useInquiryModal();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2200);
  };

  const scrollToForm = () => {
    const el = document.getElementById("contact-form-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-white text-slate-900 pt-12 pb-24 lg:pt-16 lg:pb-32">
      {/* ================= BACKGROUND HIGH-TECH SOLAR WAFER BLUEPRINT ================= */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        {/* Soft solar horizon photo with smooth gradient mask */}
        <div
          className="absolute inset-0"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)",
          }}
        >
          <img
            src="/assets/solar-farm-bg.jpg"
            alt=""
            className="w-full h-full object-cover object-top opacity-25 filter brightness-105 contrast-110 saturate-125"
          />
          <div className="absolute inset-0 bg-linear-to-b from-white/90 via-white/80 to-white" />
        </div>

        {/* Ambient warm glowing orbs */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-225 h-125 bg-linear-to-b from-amber-400/20 via-orange-400/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

        {/* Crisp Solar Wafer SVG Grid pattern */}
        <div
          className="absolute inset-0 opacity-45"
          style={{
            maskImage:
              "radial-gradient(ellipse 90% 70% at 50% 40%, black 40%, rgba(0, 0, 0, 0.2) 80%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 70% at 50% 40%, black 40%, rgba(0, 0, 0, 0.2) 80%, transparent 100%)",
          }}
        >
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="contact-wafer-grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="0.8"
                  strokeOpacity="0.3"
                />
                <circle cx="0" cy="0" r="2.2" fill="#f59e0b" opacity="0.65" />
                <circle cx="60" cy="0" r="2.2" fill="#ea580c" opacity="0.65" />
                <circle cx="0" cy="60" r="2.2" fill="#ea580c" opacity="0.65" />
                <circle cx="60" cy="60" r="2.2" fill="#f59e0b" opacity="0.65" />
                <circle cx="30" cy="30" r="1.5" fill="#10b981" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-wafer-grid)" />
          </svg>
        </div>

        {/* Laser alignment guides */}
        <div className="absolute top-20 inset-x-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
        <div className="absolute top-44 inset-x-0 h-px bg-linear-to-r from-transparent via-orange-400/25 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= TOP BADGE & HEADLINE ================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18">
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs sm:text-sm font-semibold mb-5 shadow-xs"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
            </span>
            <span className="font-bold">Clean Energy Council Certified</span>
            <span className="text-slate-300">•</span>
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              Direct Support Across WA, NSW &amp; QLD
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.1]"
          >
            Get In Touch{" "}
            <span className="bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              With Us!
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal"
          >
            Connect directly with licensed Clean Energy Council solar designers
            and A-Grade master electricians. Transparent quotes, upfront STC
            rebates, and fast local dispatch.
          </motion.p>
        </div>

        {/* ================= MASTER BENTO SHOWCASE (ALL 6 IMAGE ELEMENTS ELEVATED) ================= */}
        {/* Row 1: The 3 State Physical Addresses (WA, NSW, QLD) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {STATE_HUBS.map((hub, index) => {
            const isCopied = copiedId === hub.id;
            const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              hub.mapQuery,
            )}`;

            return (
              <motion.div
                key={hub.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12 * index }}
                className="group relative rounded-3xl bg-white border border-slate-200/90 p-7 shadow-lg hover:shadow-2xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Radiant top accent band */}
                <div className="absolute top-0 left-8 right-8 h-1 rounded-t-full bg-linear-to-r from-amber-500 to-orange-500 opacity-80 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Top Hub Tag & State */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {hub.shortState} State Hub
                    </span>

                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Open
                    </span>
                  </div>

                  {/* Header Title with Location Pin */}
                  <div className="flex items-start gap-3.5 mb-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-amber-500 to-orange-500 text-white shadow-md shadow-orange-500/20 group-hover:scale-110 transition-transform">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                        Address
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        {hub.region}
                      </p>
                    </div>
                  </div>

                  {/* Physical Address Text Box (Verbatim from image) */}
                  <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4 mb-4">
                    <p className="text-sm font-bold text-slate-900 leading-snug">
                      {hub.address}
                    </p>

                    <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                      <button
                        type="button"
                        onClick={() => handleCopy(hub.address, hub.id)}
                        className="inline-flex items-center gap-1.5 text-slate-600 hover:text-amber-600 font-semibold cursor-pointer transition-colors"
                        title="Copy exact address"
                      >
                        {isCopied ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-600" />
                            <span className="text-emerald-700 font-bold">
                              Copied!
                            </span>
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
                        className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-bold transition-colors"
                      >
                        <span>Directions</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 px-1 mb-5">
                    <Clock className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                    <span>{hub.hours}</span>
                  </div>
                </div>

                {/* Direct Dial Link */}
                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={`tel:${hub.phone.replace(/\s/g, "")}`}
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-slate-900 hover:bg-linear-to-r hover:from-amber-600 hover:to-orange-600 text-white font-bold text-xs transition-all duration-300 shadow-sm group/btn"
                  >
                    <span className="flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5 text-amber-400 group-hover/btn:text-white transition-colors" />
                      <span>Call {hub.shortState}: {hub.phone}</span>
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover/btn:translate-x-1 group-hover/btn:text-white transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Row 2: Call Us (Dual Phones), Email, and "Get in Touch Now!!" Action Card */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 4: Call Us (Verbatim: 0430 015 017 & 0489 935 658) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-3xl bg-white border border-slate-200/90 p-7 shadow-lg hover:shadow-2xl hover:border-orange-400 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-amber-500 to-orange-500 text-white shadow-md shadow-orange-500/20">
                  <Phone className="h-6 w-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                  Direct Solar Helpline
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 mb-1">
                Call Us
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Speak directly with an accredited technician for quote advice or urgent electrical assistance:
              </p>

              <div className="space-y-3">
                <a
                  href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-500 hover:bg-amber-50/50 transition-all group"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Primary Support Line
                    </span>
                    <span className="text-base font-extrabold text-slate-900 tracking-wide group-hover:text-amber-600 transition-colors">
                      {CONTACT_INFO.phone1}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-amber-600 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-xs">
                    Dial →
                  </span>
                </a>

                <a
                  href={`tel:${CONTACT_INFO.phone2.replace(/\s/g, "")}`}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-orange-500 hover:bg-orange-50/50 transition-all group"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Engineering &amp; Technical
                    </span>
                    <span className="text-base font-extrabold text-slate-900 tracking-wide group-hover:text-orange-600 transition-colors">
                      {CONTACT_INFO.phone2}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-orange-600 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-xs">
                    Dial →
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available 7 Days • Direct Master Electricians</span>
            </div>
          </motion.div>

          {/* Card 5: Email (Verbatim: Info@skyelectricalandsolar.net.au) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.48 }}
            className="rounded-3xl bg-white border border-slate-200/90 p-7 shadow-lg hover:shadow-2xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-500/20">
                  <Mail className="h-6 w-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200">
                  Digital Support
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 mb-1">
                Email
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Send property building plans, switchboard pictures, or commercial solar specifications:
              </p>

              <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4 mb-4">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                  Official Inquiries Address:
                </span>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-sm font-extrabold text-slate-900 hover:text-amber-600 break-all transition-colors block"
                >
                  {CONTACT_INFO.email}
                </a>

                <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={() => handleCopy(CONTACT_INFO.email, "email")}
                    className="inline-flex items-center gap-1.5 text-slate-600 hover:text-amber-600 font-semibold cursor-pointer transition-colors"
                  >
                    {copiedId === "email" ? (
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
                    className="text-orange-600 hover:text-orange-700 font-bold"
                  >
                    Compose Email →
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
              <Clock className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
              <span>Average email reply in &lt; 15 minutes during day hours</span>
            </div>
          </motion.div>

          {/* Card 6: "Get in Touch Now!!" (Verbatim from image, styled as high-impact CTA) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.56 }}
            className="relative overflow-hidden rounded-3xl bg-linear-to-br from-amber-500 via-orange-500 to-amber-600 p-8 shadow-2xl text-white flex flex-col justify-between"
          >
            {/* Ambient solar radiance */}
            <div className="absolute -top-10 -right-10 w-44 h-44 bg-white/15 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-400/20 rounded-full blur-xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-4 backdrop-blur-xs">
                <Sparkles className="h-3.5 w-3.5 text-amber-200" />
                <span>Zero Obligation Consultation</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
                Get in Touch Now!!
              </h3>

              <p className="text-xs sm:text-sm text-white/95 leading-relaxed mb-6 font-medium">
                Claim your tailored 3D solar layout, battery storage plan, and
                verified Clean Energy Council STC government rebate calculations.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={scrollToForm}
                className="w-full py-4 px-6 rounded-2xl bg-white text-slate-950 font-black text-sm hover:bg-slate-50 transition-all duration-300 shadow-xl flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <Zap className="h-4 w-4 text-orange-600" />
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
          </motion.div>
        </div>

        {/* Bottom Key Value Proof Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <span className="text-3xl font-black text-amber-500 font-mono block">&lt; 15 Mins</span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">Average Response Time</span>
          </div>
          <div>
            <span className="text-3xl font-black text-slate-900 font-mono block">3 State Hubs</span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">WA • NSW • QLD Operations</span>
          </div>
          <div>
            <span className="text-3xl font-black text-emerald-600 font-mono block">100% In-House</span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">CEC Certified Installers</span>
          </div>
          <div>
            <span className="text-3xl font-black text-orange-500 font-mono block">10-Year</span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">Workmanship Warranty</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;
