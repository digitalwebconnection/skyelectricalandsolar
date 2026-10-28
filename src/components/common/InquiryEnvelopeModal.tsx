import React, { useState, useEffect } from "react";
import {
  X,
  Sun,
  Zap,
  CheckCircle2,
  ShieldCheck,
  Send,
  User,
  Phone,
  Mail,
  Home,
  Building2,
  BatteryCharging,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useInquiryModal } from "../../context";
import logoImg from "../../assets/logo.png";
import { MagicCard } from "./MagicCard";
import { BorderBeam } from "./BorderBeam";

const SERVICE_OPTIONS = [
  { label: "Residential Rooftop Solar (6.6kW - 13.2kW)", icon: Home },
  { label: "Commercial & Industrial Solar Arrays", icon: Building2 },
  {
    label: "Battery Storage (Tesla Powerwall / Alpha ESS)",
    icon: BatteryCharging,
  },
  { label: "EV Charger Installation & Upgrades", icon: Zap },
  { label: "CEC Electrical Service & Switchboard Upgrade", icon: Sun },
];

type AnimStage = "sealed" | "opening" | "emerging" | "expanding" | "settled";

export function InquiryEnvelopeModal() {
  const { isOpen, closeInquiryModal, initialService } = useInquiryModal();

  // Full 4-Step Animated Choreography (per user request):
  // 1. 'sealed': Mailbox closed, wax seal on. Form hidden deep inside in miniature size.
  // 2. 'opening': Seal pops, top flap flips open 180deg. Mailbox mouth opens. Form STILL hidden inside.
  // 3. 'emerging': From deep inside mailbox, form comes out in SMALL SIZE ('bov in andr thi nani siz ma form bar ave')!
  // 4. 'expanding': Small form zooms and expands smoothly to PROPER full size ('pachii propar ave form')!
  // 5. 'settled': Form is centered, full proper size, 100% interactive and ready to type.
  const [stage, setStage] = useState<AnimStage>("sealed");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: SERVICE_OPTIONS[0].label,
    bill: "",
    notes: "",
  });

  // Full animated sequence execution
  useEffect(() => {
    if (isOpen) {
      if (initialService) {
        const matched = SERVICE_OPTIONS.find((s) =>
          s.label.toLowerCase().includes(initialService.toLowerCase()),
        );
        if (matched) {
          setFormData((prev) => ({ ...prev, service: matched.label }));
        }
      }

      setStage("sealed");
      setIsSubmitted(false);
      setIsSubmitting(false);

      // Step 1: Mailbox stays sealed briefly, then top flap begins opening at 300ms
      const t1 = setTimeout(() => {
        setStage("opening");
      }, 300);

      // Step 2: Flap takes 650ms to flip 180deg. At 950ms, mailbox is fully open!
      // Form emerges from deep inside the mailbox in SMALL SIZE:
      const t2 = setTimeout(() => {
        setStage("emerging");
      }, 950);

      // Step 3: At 1700ms, small emerging form zooms & expands to PROPER FULL SIZE:
      const t3 = setTimeout(() => {
        setStage("expanding");
      }, 1700);

      // Step 4: At 2300ms, form settles into full interactive mode
      const t4 = setTimeout(() => {
        setStage("settled");
      }, 2300);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
      };
    } else {
      setStage("sealed");
      setIsSubmitted(false);
      setIsSubmitting(false);
    }
  }, [isOpen, initialService]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeInquiryModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeInquiryModal]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  // Fast forward animation if user clicks anywhere to skip
  const handleFastForward = () => {
    if (stage !== "settled") {
      setStage("settled");
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Solar Inquiry Form"
      className="fixed inset-0 z-100000 flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-y-auto bg-slate-950/90 transition-all duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeInquiryModal();
      }}
    >
      {/* Main Single Centered Grid Container: Back Plate, Form, and Front Pocket share same stacking context */}
      <div className="relative w-full max-w-xl my-auto grid grid-cols-1 grid-rows-1 place-items-center py-6 sm:py-10">
        {/* =========================================================================
            LAYER 1: ENVELOPE BACK PLATE & 3D TOP FLAP (z-0: Behind the letter)
           ========================================================================= */}
        <div
          onClick={handleFastForward}
          style={{ perspective: "1200px" }}
          className={`col-start-1 row-start-1 relative w-[320px] sm:w-115 h-55 sm:h-70 z-0 transition-all duration-700 select-none cursor-pointer ${
            stage === "expanding" || stage === "settled"
              ? "opacity-0 scale-90 translate-y-12 pointer-events-none"
              : "opacity-100 scale-100 shadow-2xl"
          }`}
        >
          {/* Back Plate Box - Automatically clips corners with overflow-hidden when sealed */}
          <div
            className={`relative w-full h-full rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl ${
              stage === "sealed" ? "overflow-hidden" : "overflow-visible"
            }`}
          >
            {/* Ambient interior golden glow behind letter (illuminates only when open) */}
            <div
              className={`absolute inset-0 rounded-2xl bg-linear-to-b from-amber-500/25 via-slate-900 to-black pointer-events-none transition-opacity duration-500 ${
                stage === "sealed" ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* 3D Top Flap (Flips UPWARD 180deg: z-35 closed -> z-5 open) */}
            <div
              className="absolute top-0 inset-x-0 h-1/2 origin-top transition-transform duration-700 ease-in-out"
              style={{
                transform:
                  stage !== "sealed" ? "rotateX(180deg)" : "rotateX(0deg)",
                transformStyle: "preserve-3d",
                zIndex: stage === "sealed" ? 35 : 5,
              }}
            >
              {/* Outer flap face (pointing down when closed - perfectly auto-clipped by rounded-2xl parent) */}
              <div
                className="absolute inset-0 bg-neutral-800 border-b border-slate-700/60 shadow-md"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              />
              {/* Inner flap face (pointing up when open) */}
              <div
                className="absolute inset-0 bg-linear-to-t from-neutral-900 to-slate-900 border-t border-slate-700/60 shadow-md"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  transform: "rotateX(180deg)",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              />
            </div>
          </div>
        </div>

        <div
          onClick={handleFastForward}
          style={{ transformOrigin: "center center" }}
          className={`col-start-1 row-start-1 w-full max-w-xl ${
            stage === "sealed" || stage === "opening"
              ? "invisible opacity-0 scale-[0.35] translate-y-16 pointer-events-none z-10 duration-300"
              : stage === "emerging"
                ? "visible opacity-100 scale-[0.52] sm:scale-[0.58] -translate-y-28 sm:-translate-y-36 pointer-events-none z-20 transition-all duration-700 ease-[cubic-bezier(0.2,0,0.1,1)]"
                : stage === "expanding"
                  ? "visible opacity-100 scale-100 translate-y-0 pointer-events-none z-50 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  : "visible opacity-100 scale-100 translate-y-0 pointer-events-auto z-50 duration-300"
          }`}
        >
          {/* Luxury Modern Solar Tech Form Card using Magic UI MagicCard & BorderBeam */}
          <MagicCard
            className="relative w-full bg-white/95 backdrop-blur-2xl text-slate-900 rounded-xl shadow-[0_25px_60px_-15px_rgba(15,23,42,0.35),0_0_50px_rgba(245,158,11,0.18)] border border-amber-500/25 p-4 sm:p-5 md:p-6 overflow-hidden"
            gradientColor="rgba(245, 158, 11, 0.16)"
            gradientSize={380}
          >
            {/* Animated Laser Border Beam from Magic UI */}
            <BorderBeam
              size={260}
              duration={8}
              borderWidth={2}
              colorFrom="#f59e0b"
              colorTo="#ea580c"
            />

            {/* Subtle high-tech background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-size-[20px_20px] opacity-35 pointer-events-none" />

            {/* Ambient luxury glow accents */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-orange-400/15 rounded-full blur-3xl pointer-events-none" />

            {/* Top radiant solar energy horizon line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-linear-to-r from-amber-400 via-orange-500 to-amber-500 shadow-[0_2px_12px_rgba(245,158,11,0.7)]" />

            {isSubmitted ? (
              /* Success Confirmation */
              <div className="py-8 sm:py-10 text-center space-y-4 animate-fadeIn relative z-10">
                <div className="w-16 h-16 mx-auto rounded-xl bg-linear-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-500 flex items-center justify-center text-emerald-600 shadow-xl shadow-emerald-500/20">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Inquiry Dispatched!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you,{" "}
                  <strong className="text-slate-900 font-bold">
                    {formData.name}
                  </strong>
                  . Your inquiry has been delivered directly to our Australian
                  CEC accredited solar team.
                </p>

                <div className="p-4 rounded-xl bg-linear-to-br from-amber-50/90 to-orange-50/50 border border-amber-200/90 text-left max-w-md mx-auto text-xs text-amber-950 space-y-2 shadow-xs">
                  <div className="flex items-center gap-1.5 font-bold text-amber-900">
                    <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Included in Your Complimentary Review:</span>
                  </div>
                  <p>• 3D satellite roof scan & solar yield simulation.</p>
                  <p>
                    • Exact federal STC & Victorian battery rebate deductions.
                  </p>
                  <p>
                    • Fast quote consultation to{" "}
                    <strong>{formData.phone}</strong> within 2 hours.
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={closeInquiryModal}
                    className="px-7 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all shadow-md cursor-pointer hover:shadow-lg active:scale-95"
                  >
                    Done & Return to Site
                  </button>
                </div>
              </div>
            ) : (
              /* The New Sleek, Modern, High-End Inquiry Form */
              <form onSubmit={handleSubmit} className="space-y-3 relative z-10">
                {/* Form Header */}
                <div className="flex items-center justify-between border-b border-slate-200/70 pb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={logoImg}
                      alt="Skye Electrical & Solar Logo"
                      className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-xs shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-base sm:text-lg md:text-xl font-black text-slate-900 tracking-tight">
                          Solar & Battery{" "}
                          <span className="bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                            Inquiry
                          </span>
                        </h2>
                      </div>
                      <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                        <span className="hidden xs:inline text-slate-300">
                          •
                        </span>
                        <span className="hidden xs:inline text-[11px] font-semibold text-slate-500">
                          2-Hour Quote Response
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={closeInquiryModal}
                      className="h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition-all flex items-center justify-center cursor-pointer hover:rotate-90 shadow-2xs"
                      aria-label="Close Inquiry Dialog"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Name & Phone Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Full Name <span className="text-amber-500">*</span>
                    </label>
                    <div className="group flex items-center rounded-xl border border-slate-200/90 bg-white hover:border-slate-300 focus-within:border-amber-500 focus-within:ring-4 focus-within:ring-amber-500/15 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 group-focus-within:bg-amber-500 group-focus-within:text-white flex items-center justify-center transition-all ml-1.5 shrink-0 pointer-events-none">
                        <User className="w-3.5 h-3.5" />
                      </div>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. John Henderson"
                        className="w-full pl-2.5 pr-3 py-2 text-sm font-semibold bg-transparent text-slate-900 placeholder:text-slate-400 placeholder:font-normal focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Phone Number <span className="text-amber-500">*</span>
                    </label>
                    <div className="group flex items-center rounded-xl border border-slate-200/90 bg-white hover:border-slate-300 focus-within:border-amber-500 focus-within:ring-4 focus-within:ring-amber-500/15 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 group-focus-within:bg-amber-500 group-focus-within:text-white flex items-center justify-center transition-all ml-1.5 shrink-0 pointer-events-none">
                        <Phone className="w-3.5 h-3.5" />
                      </div>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="e.g. 0412 345 678"
                        className="w-full pl-2.5 pr-3 py-2 text-sm font-semibold bg-transparent text-slate-900 placeholder:text-slate-400 placeholder:font-normal focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Email & Quarterly Electricity Bill */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1 items-center justify-between">
                      <span>Email Address</span>
                      <span className="text-[10px] font-semibold text-slate-400 normal-case">
                        For quote PDF
                      </span>
                    </label>
                    <div className="group flex items-center rounded-xl border border-slate-200/90 bg-white hover:border-slate-300 focus-within:border-amber-500 focus-within:ring-4 focus-within:ring-amber-500/15 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 group-focus-within:bg-amber-500 group-focus-within:text-white flex items-center justify-center transition-all ml-1.5 shrink-0 pointer-events-none">
                        <Mail className="w-3.5 h-3.5" />
                      </div>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com.au"
                        className="w-full pl-2.5 pr-3 py-2 text-sm font-semibold bg-transparent text-slate-900 placeholder:text-slate-400 placeholder:font-normal focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1 items-center justify-between">
                      <span>Estimated Power Bill</span>
                      <span className="text-[10px] font-semibold text-slate-400 normal-case">
                        Quarterly
                      </span>
                    </label>
                    <div className="group flex items-center rounded-xl border border-slate-200/90 bg-white hover:border-slate-300 focus-within:border-amber-500 focus-within:ring-4 focus-within:ring-amber-500/15 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 group-focus-within:bg-amber-500 group-focus-within:text-white font-black text-xs flex items-center justify-center transition-all ml-1.5 shrink-0 pointer-events-none">
                        $
                      </div>
                      <input
                        type="text"
                        value={formData.bill}
                        onChange={(e) =>
                          setFormData({ ...formData, bill: e.target.value })
                        }
                        placeholder="e.g. $650 / quarter"
                        className="w-full pl-2.5 pr-3 py-2 text-sm font-semibold bg-transparent text-slate-900 placeholder:text-slate-400 placeholder:font-normal focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1 items-center justify-between">
                    <span>System / Service Required</span>
                    <span className="text-[10px] font-semibold text-amber-600 normal-case flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-500" />
                      <span>Govt Rebates Eligible</span>
                    </span>
                  </label>
                  <div className="group relative flex items-center rounded-xl border border-slate-200/90 bg-white hover:border-slate-300 focus-within:border-amber-500 focus-within:ring-4 focus-within:ring-amber-500/15 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 group-focus-within:bg-amber-500 group-focus-within:text-white flex items-center justify-center transition-all ml-1.5 shrink-0 pointer-events-none">
                      <Zap className="w-3.5 h-3.5" />
                    </div>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full pl-2.5 pr-9 py-2.5 text-sm font-semibold bg-transparent text-slate-900 focus:outline-none cursor-pointer appearance-none"
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt.label} value={opt.label}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {/* Custom Down Chevron */}
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Property & Roof Details */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1 items-center justify-between">
                    <span>Property Details or Questions</span>
                    <span className="text-[10px] font-semibold text-slate-400 normal-case">
                      e.g. 2-storey, tile roof, battery
                    </span>
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    placeholder="Tell us about your property, roof type, or any specific requirements..."
                    className="w-full px-3 py-2 text-sm font-semibold rounded-xl border border-slate-200/90 bg-white hover:border-slate-300 text-slate-900 placeholder:text-slate-400 placeholder:font-normal focus:border-amber-500 focus:ring-4 focus:ring-amber-500/15 focus:outline-none transition-all resize-none shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                  />
                </div>

                {/* Action Button & Trust Indicators */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full py-3.5 px-6 rounded-xl font-black text-sm tracking-wide text-slate-950 bg-linear-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 shadow-[0_12px_28px_-6px_rgba(245,158,11,0.5)] hover:shadow-[0_16px_36px_-6px_rgba(245,158,11,0.65)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50 overflow-hidden"
                  >
                    {/* Shimmer light sweep on hover */}
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/35 to-transparent pointer-events-none" />

                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>Dispatching to Solar Engineers...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        <span>Submit Inquiry & Claim Available Rebates</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </MagicCard>
        </div>

        {/* =========================================================================
            LAYER 3: ENVELOPE FRONT POCKET & SEAL (z-30: Physically in front of letter!)
            - The left, right, and bottom flaps cover the lower part of the form!
            - When the form slides UP, it physically emerges from inside this pocket!
           ========================================================================= */}
        <div
          onClick={handleFastForward}
          className={`col-start-1 row-start-1 relative w-[320px] sm:w-115 h-55 sm:h-70 z-30 pointer-events-none select-none transition-all duration-700 ${
            stage === "expanding" || stage === "settled"
              ? "opacity-0 scale-90 translate-y-12"
              : "opacity-100 scale-100"
          }`}
        >
          {/* Front Pocket Flaps (Left, Right, Bottom) */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            {/* Left Pocket Flap */}
            <div className="absolute inset-0 bg-neutral-900 [clip-path:polygon(50%_50%,0_0,0_100%)]" />

            {/* Right Pocket Flap */}
            <div className="absolute inset-0 bg-neutral-800 [clip-path:polygon(50%_50%,100%_0,100%_100%)]" />

            {/* Bottom Pocket Flap */}
            <div className="absolute inset-0 bg-neutral-900 [clip-path:polygon(50%_50%,100%_100%,0_100%)] shadow-md" />
          </div>

          {/* Gold Wax Seal (Spins and dissolves when mailbox opens) */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-16 h-16 rounded-full text-xs flex flex-col items-center justify-center font-black tracking-widest text-amber-950 bg-linear-to-br from-amber-300 via-amber-400 to-amber-600 border-2 border-amber-200/90 shadow-xl shadow-amber-500/60 transition-all duration-500 [clip-path:polygon(50%_0%,80%_10%,100%_35%,100%_70%,80%_90%,50%_100%,20%_90%,0%_70%,0%_35%,20%_10%)] ${
              stage !== "sealed"
                ? "opacity-0 scale-150 rotate-140"
                : "opacity-100 scale-100 rotate-0"
            }`}
          >
            <span className="text-[14px] font-black tracking-wider leading-none">
              SKYE
            </span>
            <span className="text-[7px] font-extrabold tracking-widest uppercase opacity-85">
              SOLAR
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InquiryEnvelopeModal;
