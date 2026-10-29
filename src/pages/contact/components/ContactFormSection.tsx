import { useState, useId } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Phone,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
  Clock,
  ArrowRight,
  Sun,
  BatteryCharging,
  Building2,
  Wrench,
} from "lucide-react";
import { CONTACT_INFO } from "../../../constants";
import { BorderBeam } from "../../../components/common/BorderBeam";

interface ServiceType {
  id: string;
  label: string;
  icon: typeof Sun;
}

const SERVICES: ServiceType[] = [
  { id: "residential", label: "Residential Solar", icon: Sun },
  { id: "battery", label: "Battery Storage", icon: BatteryCharging },
  { id: "commercial", label: "Commercial Solar", icon: Building2 },
  { id: "electrical", label: "Electrical & EV", icon: Wrench },
];

export function ContactFormSection() {
  const formId = useId();

  // Simple Form State
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    state: "WA",
    service: "residential",
    message: "",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceCode, setReferenceCode] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      const code = `SKY-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceCode(code);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1100);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      state: "WA",
      service: "residential",
      message: "",
    });
    setTouched({});
  };

  return (
    <section
      id="contact-form-section"
      className="relative py-20 lg:py-28 bg-[#faf8f5] text-slate-900 overflow-hidden border-b border-slate-200/80"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        <div className="absolute top-10 left-1/4 w-120 h-120 bg-amber-200/25 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-120 h-120 bg-orange-200/20 rounded-full blur-3xl" />

        {/* Delicate Wafer SVG Grid */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            maskImage:
              "radial-gradient(ellipse 85% 65% at 50% 50%, black 25%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 65% at 50% 50%, black 25%, transparent 80%)",
          }}
        >
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="simple-form-wafer-grid"
                width="48"
                height="48"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 48 0 L 0 0 0 48"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="0.75"
                  strokeOpacity="0.3"
                />
                <circle cx="0" cy="0" r="1.5" fill="#f59e0b" opacity="0.5" />
                <circle cx="48" cy="0" r="1.5" fill="#ea580c" opacity="0.5" />
                <circle cx="0" cy="48" r="1.5" fill="#ea580c" opacity="0.5" />
                <circle cx="48" cy="48" r="1.5" fill="#f59e0b" opacity="0.5" />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#simple-form-wafer-grid)"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-950 text-xs sm:text-sm font-semibold mb-4 shadow-xs"
          >
            <Sparkles className="h-4 w-4 text-orange-600" />
            <span className="font-bold">FAST &amp; TRANSPARENT QUOTE</span>
            <span className="text-slate-400">•</span>
            <span className="text-emerald-700 font-semibold">ZERO SALES PRESSURE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-tight"
          >
            Send Us a Message &amp;{" "}
            <span className="bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Get an Instant Quote
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
          >
            Tell us about your home or business. Our licensed Clean Energy Council
            designers will analyze your roof pitch and send an itemized STC rebate proposal.
          </motion.p>
        </div>

        {/* ================= 2-COLUMN SPLIT: SIMPLE FORM + RICH VISUAL IMAGE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* ================= LEFT 7 COLS: THE SIMPLE, CLEAN CONTACT FORM ================= */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="relative rounded-xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-xl shadow-slate-200/50 overflow-hidden flex-1 flex flex-col justify-between">
              
              <BorderBeam
                size={260}
                duration={12}
                colorFrom="#f59e0b"
                colorTo="#ea580c"
                borderWidth={1.5}
              />

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  /* ================= SUCCESS CONFIRMATION STATE ================= */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center my-auto"
                  >
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-600 mb-6 shadow-md shadow-emerald-500/20">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-slate-950 mb-2">
                      Inquiry Received Successfully!
                    </h3>

                    <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto mb-6">
                      Thank you, <strong className="text-slate-900">{formData.fullName}</strong>.
                      Our accredited Clean Energy Council team in{" "}
                      <strong className="text-amber-600">{formData.state}</strong> has been
                      notified and will review your proposal details immediately.
                    </p>

                    {/* Reference Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono font-bold text-slate-700 mb-8">
                      <span>Tracking ID:</span>
                      <span className="text-orange-600 font-extrabold">{referenceCode}</span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors cursor-pointer"
                      >
                        Send Another Inquiry
                      </button>

                      <a
                        href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`}
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-900 font-bold text-xs transition-colors flex items-center justify-center gap-2"
                      >
                        <Phone className="h-3.5 w-3.5 text-amber-600" />
                        <span>Direct Helpline: {CONTACT_INFO.phone1}</span>
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  /* ================= CLEAN, ACCESSIBLE INPUT FORM ================= */
                  <form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6 relative z-10"
                    noValidate
                  >
                    {/* 1. Service Selection Pills */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2.5">
                        1. What service do you need?
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {SERVICES.map((srv) => {
                          const Icon = srv.icon;
                          const isSelected = formData.service === srv.id;
                          return (
                            <button
                              key={srv.id}
                              type="button"
                              onClick={() =>
                                setFormData((prev) => ({ ...prev, service: srv.id }))
                              }
                              className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                                isSelected
                                  ? "bg-amber-50 border-amber-500 text-amber-950 font-extrabold shadow-sm"
                                  : "bg-slate-50 hover:bg-white border-slate-200/90 text-slate-600 font-medium"
                              }`}
                            >
                              <Icon
                                className={`h-5 w-5 mb-1 ${
                                  isSelected ? "text-orange-600" : "text-slate-400"
                                }`}
                              />
                              <span className="text-xs leading-tight">
                                {srv.label}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 2. Full Name & Phone Number Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label
                            htmlFor={`${formId}-fullName`}
                            className="text-xs font-bold uppercase tracking-wider text-slate-700"
                          >
                            Full Name <span className="text-orange-600">*</span>
                          </label>
                          <span className="text-[11px] text-slate-400">e.g. John Smith</span>
                        </div>
                        <input
                          id={`${formId}-fullName`}
                          name="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          onBlur={() => handleBlur("fullName")}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm font-medium focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                        />
                        {touched.fullName && !formData.fullName.trim() && (
                          <p className="mt-1 text-xs text-rose-600 font-semibold">
                            Please provide your name.
                          </p>
                        )}
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label
                            htmlFor={`${formId}-phone`}
                            className="text-xs font-bold uppercase tracking-wider text-slate-700"
                          >
                            Phone Number <span className="text-orange-600">*</span>
                          </label>
                          <span className="text-[11px] text-slate-400">04XX XXX XXX</span>
                        </div>
                        <input
                          id={`${formId}-phone`}
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={() => handleBlur("phone")}
                          placeholder="0412 345 678"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm font-medium focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                        />
                        {touched.phone && !formData.phone.trim() && (
                          <p className="mt-1 text-xs text-rose-600 font-semibold">
                            Please provide your phone number.
                          </p>
                        )}
                      </div>
                    </div>

                    {/* 3. Email & State Selection Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
                      <div className="sm:col-span-7">
                        <div className="flex items-center justify-between mb-1.5">
                          <label
                            htmlFor={`${formId}-email`}
                            className="text-xs font-bold uppercase tracking-wider text-slate-700"
                          >
                            Email Address <span className="text-orange-600">*</span>
                          </label>
                          <span className="text-[11px] text-slate-400">For quote delivery</span>
                        </div>
                        <input
                          id={`${formId}-email`}
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={() => handleBlur("email")}
                          placeholder="john@example.com.au"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm font-medium focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                        />
                        {touched.email &&
                          (!formData.email.trim() ||
                            !formData.email.includes("@")) && (
                            <p className="mt-1 text-xs text-rose-600 font-semibold">
                              Please provide a valid email address.
                            </p>
                          )}
                      </div>

                      <div className="sm:col-span-5">
                        <div className="flex items-center justify-between mb-1.5">
                          <label
                            htmlFor={`${formId}-state`}
                            className="text-xs font-bold uppercase tracking-wider text-slate-700"
                          >
                            State Hub <span className="text-orange-600">*</span>
                          </label>
                          <span className="text-[11px] text-slate-400">Local team</span>
                        </div>
                        <select
                          id={`${formId}-state`}
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-bold focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all cursor-pointer"
                        >
                          <option value="WA">Western Australia (WA Hub)</option>
                          <option value="NSW">New South Wales (NSW Hub)</option>
                          <option value="QLD">Queensland (QLD Hub)</option>
                        </select>
                      </div>
                    </div>

                    {/* 4. Message / System Notes */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label
                          htmlFor={`${formId}-message`}
                          className="text-xs font-bold uppercase tracking-wider text-slate-700"
                        >
                          Message / Property Details{" "}
                          <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <span className="text-[11px] text-slate-400">
                          e.g. Single storey, Colorbond roof
                        </span>
                      </div>
                      <textarea
                        id={`${formId}-message`}
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your property, average quarterly power bill, or any specific battery requirements..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm font-medium focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all resize-none"
                      />
                    </div>

                    {/* 5. Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={
                          isSubmitting ||
                          !formData.fullName.trim() ||
                          !formData.phone.trim() ||
                          !formData.email.trim()
                        }
                        className="group w-full py-4 px-6 rounded-xl bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 text-slate-950 font-black text-sm sm:text-base shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/35 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer "
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2 text-slate-950">
                            <span className="h-4 w-4 rounded-full border-2 border-slate-950 border-t-transparent animate-spin" />
                            <span>Calculating Rebate &amp; Sending...</span>
                          </div>
                        ) : (
                          <>
                            <Zap className="h-4 w-4 text-slate-950 fill-current group-hover:rotate-12 transition-transform" />
                            <span>Submit Inquiry &amp; Request Quote</span>
                            <ArrowRight className="h-4 w-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>

                      <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-500">
                        <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                        <span>100% Privacy Protected • Clean Energy Council A-Grade Installers</span>
                      </div>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ================= RIGHT 5 COLS: VISUAL IMAGE SHOWCASE WITH ACCREDITATION ================= */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-slate-300/60 border border-slate-200/90 h-full min-h-115 flex flex-col justify-between bg-slate-950 text-white">
              
              {/* Full Focal Showcase Image */}
              <img
                src="/assets/banner/banner-electrical-technician.jpg"
                alt="Sky Electrical & Solar licensed technician on site"
                className="absolute inset-0 w-full h-full object-cover object-center filter brightness-95 contrast-105"
                loading="lazy"
              />

              {/* Gradient Mask for Readability */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />

              <BorderBeam
                size={220}
                duration={10}
                colorFrom="#f59e0b"
                colorTo="#ea580c"
                borderWidth={1.5}
              />

              {/* Top Floating Badge */}
              <div className="relative z-10 p-6 sm:p-7 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-xs font-bold text-amber-300 shadow-md">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>On-Duty Local Crews</span>
                </span>

                <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-black text-xs shadow-md">
                  WA • NSW • QLD
                </span>
              </div>

              {/* Bottom Information Card Overlay */}
              <div className="relative z-10 p-6 sm:p-7">
                <div className="rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/15 p-5 shadow-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0" />
                    <h4 className="text-base font-extrabold text-white">
                      Direct CEC-Accredited Technicians
                    </h4>
                  </div>

                  <p className="text-xs text-slate-300 mb-4 leading-relaxed font-normal">
                    Speak directly with the engineers designing and installing your system.
                    Zero call centres, zero subcontractors, and guaranteed local post-install service.
                  </p>

                  <div className="pt-3 border-t border-white/15 grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Response Time
                      </span>
                      <span className="font-extrabold text-amber-400 flex items-center gap-1 mt-0.5">
                        <Clock className="h-3 w-3" />
                        &lt; 15 Minutes
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Workmanship
                      </span>
                      <span className="font-extrabold text-emerald-400 flex items-center gap-1 mt-0.5">
                        <CheckCircle2 className="h-3 w-3" />
                        10-Year Guarantee
                      </span>
                    </div>
                  </div>

                  {/* Immediate Dial Link */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">Prefer to call right now?</span>
                    <a
                      href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`}
                      className="inline-flex items-center gap-1 text-xs font-black text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      <Phone className="h-3 w-3" />
                      <span>{CONTACT_INFO.phone1}</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactFormSection;
