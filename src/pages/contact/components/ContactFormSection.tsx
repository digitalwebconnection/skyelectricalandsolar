import { useState, useId } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Send,
  Phone,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
  Sun,
  Battery,
  Building2,
  Home,
  Check,
  TrendingDown,
} from "lucide-react";
import { CONTACT_INFO } from "../../../constants";
import { BorderBeam } from "../../../components/common/BorderBeam";

interface ServiceOption {
  id: string;
  label: string;
  tagline: string;
  icon: typeof Home;
  recommended: string;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  {
    id: "residential-solar",
    label: "Residential Solar",
    tagline: "6.6kW – 13.2kW Rooftop Arrays",
    icon: Home,
    recommended: "Most Popular",
  },
  {
    id: "battery-storage",
    label: "Battery Storage",
    tagline: "Tesla Powerwall 3 & Alpha ESS",
    icon: Battery,
    recommended: "Blackout Backup",
  },
  {
    id: "commercial-solar",
    label: "Commercial Solar",
    tagline: "30kW – 100kW+ Three-Phase Systems",
    icon: Building2,
    recommended: "Enterprise ROI",
  },
  {
    id: "electrical-ev",
    label: "Master Electrical & EV",
    tagline: "EV Smart Chargers & Switchboards",
    icon: Zap,
    recommended: "A-Grade Certified",
  },
];

interface BillTier {
  range: string;
  solarSize: string;
  estimatedSavings: string;
}

const BILL_TIERS: BillTier[] = [
  {
    range: "$300 – $600 / quarter",
    solarSize: "6.6kW Array (16 Panels)",
    estimatedSavings: "$1,400 – $2,200 / year",
  },
  {
    range: "$600 – $1,200 / quarter",
    solarSize: "8.8kW – 10kW Array (22 Panels)",
    estimatedSavings: "$2,400 – $3,900 / year",
  },
  {
    range: "$1,200 – $2,000 / quarter",
    solarSize: "13.2kW Dual-Inverter + Battery",
    estimatedSavings: "$4,200 – $6,500 / year",
  },
  {
    range: "$2,000+ / commercial",
    solarSize: "30kW – 100kW+ Commercial",
    estimatedSavings: "$8,500 – $25,000+ / year",
  },
];

export function ContactFormSection() {
  const formId = useId();
  const [selectedService, setSelectedService] = useState("residential-solar");
  const [selectedState, setSelectedState] = useState("WA");
  const [selectedTierIndex, setSelectedTierIndex] = useState(1);
  const [propertyType, setPropertyType] = useState("Single Storey House");
  const [roofType, setRoofType] = useState("Tin / Colorbond");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceCode, setReferenceCode] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    postcode: "",
    notes: "",
  });

  const activeTier = BILL_TIERS[selectedTierIndex];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const code = `SKY-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceCode(code);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      address: "",
      postcode: "",
      notes: "",
    });
  };

  return (
    <section
      id="contact-form-section"
      className="relative py-20 bg-slate-50 text-slate-900 overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-200/35 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="h-3.5 w-3.5 text-orange-600" />
            Interactive System Proposal
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Design Your Solar Solution &amp; Request a Quote
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Select your preferred system and bill tier below. Our Clean Energy
            Council engineers will compute your optimal roof layout and Federal
            STC rebate deductions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* ================= LEFT 7 COLS: HIGH-TECH FORM ================= */}
          <div className="lg:col-span-7 relative rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-10 shadow-xl overflow-hidden">
            <BorderBeam size={280} duration={14} colorFrom="#f59e0b" colorTo="#ea580c" />

            <AnimatePresence mode="wait">
              {isSuccess ? (
                /* Success Screen */
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  className="py-10 text-center"
                >
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-6 shadow-inner">
                    <CheckCircle2 className="h-10 w-10 animate-bounce" />
                  </div>

                  <span className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                    Inquiry Confirmed
                  </span>

                  <h3 className="mt-3 text-2xl sm:text-3xl font-black text-slate-950">
                    Thank You, {formData.fullName || "Valued Customer"}!
                  </h3>

                  <p className="mt-3 text-slate-600 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                    Your request has been routed directly to the{" "}
                    <strong className="text-slate-900 font-bold">
                      {selectedState} Operations Hub
                    </strong>. A certified solar technician will reach out within
                    15 minutes with your 3D satellite proposal.
                  </p>

                  {/* Summary Ticket Card */}
                  <div className="mt-6 mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left max-w-md w-full">
                    <div className="flex justify-between items-center text-xs text-slate-500 mb-3 border-b border-slate-200 pb-2">
                      <span>Inquiry Reference ID:</span>
                      <strong className="text-orange-600 font-mono font-bold text-sm">
                        {referenceCode}
                      </strong>
                    </div>

                    <div className="space-y-2 text-xs text-slate-700">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Service:</span>
                        <strong className="font-semibold text-slate-900">
                          {SERVICE_OPTIONS.find((s) => s.id === selectedService)?.label}
                        </strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Assigned State Hub:</span>
                        <strong className="font-semibold text-slate-900">
                          {selectedState} Regional Centre
                        </strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Estimated Offset Savings:</span>
                        <strong className="font-bold text-emerald-600">
                          {activeTier.estimatedSavings}
                        </strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Phone Contact:</span>
                        <span className="font-semibold text-slate-900">{formData.phone}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto px-7 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors cursor-pointer shadow-md"
                    >
                      Submit Another Inquiry
                    </button>
                    <a
                      href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`}
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-amber-500/10 text-amber-800 hover:bg-amber-500/20 border border-amber-300 font-bold text-sm flex items-center justify-center gap-2 transition-colors"
                    >
                      <Phone className="h-4 w-4 text-orange-600" />
                      <span>Speak with Engineer Now</span>
                    </a>
                  </div>
                </motion.div>
              ) : (
                /* Interactive Multi-Part Form */
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  {/* Step 1: System Selection Chips */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-800 mb-3">
                      1. Select Your Clean Energy Solution <span className="text-orange-600">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {SERVICE_OPTIONS.map((srv) => {
                        const Icon = srv.icon;
                        const isSelected = selectedService === srv.id;
                        return (
                          <button
                            key={srv.id}
                            type="button"
                            onClick={() => setSelectedService(srv.id)}
                            className={`relative flex items-start gap-3.5 p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? "bg-amber-50/80 border-amber-500 ring-2 ring-amber-500/25 shadow-sm"
                                : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/60"
                            }`}
                          >
                            <div
                              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                                isSelected
                                  ? "bg-linear-to-br from-amber-500 to-orange-500 text-white shadow-md shadow-orange-500/20"
                                  : "bg-slate-100 text-slate-600"
                              }`}
                            >
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-1">
                                <span className="font-extrabold text-sm text-slate-900 truncate">
                                  {srv.label}
                                </span>
                                {isSelected && (
                                  <Check className="h-4 w-4 text-amber-600 stroke-3 shrink-0" />
                                )}
                              </div>
                              <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                                {srv.tagline}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Interactive Quarterly Bill Selector with Live Savings Gauge */}
                  <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                        2. Approximate Electricity Bill
                      </label>
                      <span className="text-[11px] font-bold text-amber-700 bg-amber-100/70 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                        <TrendingDown className="h-3 w-3 text-amber-600" />
                        Live Savings Estimator
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {BILL_TIERS.map((tier, idx) => {
                        const isCurrent = selectedTierIndex === idx;
                        return (
                          <button
                            key={tier.range}
                            type="button"
                            onClick={() => setSelectedTierIndex(idx)}
                            className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                              isCurrent
                                ? "bg-slate-900 border-slate-900 text-white shadow-md"
                                : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                            }`}
                          >
                            <span className="text-xs font-bold block leading-tight">
                              {tier.range}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Live Computation Result Banner */}
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        <span className="text-slate-600">
                          Recommended System:{" "}
                          <strong className="text-slate-900 font-bold">
                            {activeTier.solarSize}
                          </strong>
                        </span>
                      </div>
                      <div className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-lg">
                        Est. Savings: {activeTier.estimatedSavings}
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Location Hub, Roof & Property Specifications */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                    <div>
                      <label
                        htmlFor={`${formId}-state`}
                        className="block text-xs font-extrabold uppercase tracking-wider text-slate-800 mb-1.5"
                      >
                        Target State Hub <span className="text-orange-600">*</span>
                      </label>
                      <select
                        id={`${formId}-state`}
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}
                        className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-xs sm:text-sm font-bold text-slate-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 cursor-pointer"
                      >
                        <option value="WA">WA – Caversham (Perth Hub)</option>
                        <option value="NSW">NSW – Kellyville (Sydney Hub)</option>
                        <option value="QLD">QLD – Chermside (Brisbane Hub)</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor={`${formId}-property`}
                        className="block text-xs font-extrabold uppercase tracking-wider text-slate-800 mb-1.5"
                      >
                        Property Type
                      </label>
                      <select
                        id={`${formId}-property`}
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-xs sm:text-sm font-bold text-slate-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 cursor-pointer"
                      >
                        <option value="Single Storey House">Single Storey Home</option>
                        <option value="Double Storey House">Double Storey Home</option>
                        <option value="Commercial Factory / Shed">Commercial / Industrial Shed</option>
                        <option value="Rural / Farm Property">Rural / Acreage Property</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor={`${formId}-roof`}
                        className="block text-xs font-extrabold uppercase tracking-wider text-slate-800 mb-1.5"
                      >
                        Roof Material
                      </label>
                      <select
                        id={`${formId}-roof`}
                        value={roofType}
                        onChange={(e) => setRoofType(e.target.value)}
                        className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-xs sm:text-sm font-bold text-slate-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 cursor-pointer"
                      >
                        <option value="Tin / Colorbond">Tin / Colorbond Metal</option>
                        <option value="Concrete Tile">Concrete / Terracotta Tile</option>
                        <option value="Flat / Kliplok">Flat / Kliplok Roof</option>
                        <option value="Other">Other / Not Sure</option>
                      </select>
                    </div>
                  </div>

                  {/* Step 4: Contact & Site Address Fields */}
                  <div className="space-y-4 pt-1">
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-800">
                      3. Where Should We Send Your Proposal?
                    </label>

                    {/* Name */}
                    <div>
                      <label
                        htmlFor={`${formId}-name`}
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        Full Name <span className="text-orange-600">*</span>
                      </label>
                      <input
                        type="text"
                        id={`${formId}-name`}
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        placeholder="e.g. David Morrison"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
                      />
                    </div>

                    {/* Phone & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <div className="flex justify-between items-baseline mb-1">
                          <label
                            htmlFor={`${formId}-phone`}
                            className="text-xs font-semibold text-slate-700"
                          >
                            Phone Number <span className="text-orange-600">*</span>
                          </label>
                          <span
                            id={`${formId}-phone-hint`}
                            className="text-[11px] text-slate-500"
                          >
                            e.g. 0430 000 000
                          </span>
                        </div>
                        <input
                          type="tel"
                          id={`${formId}-phone`}
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          autoComplete="tel"
                          aria-describedby={`${formId}-phone-hint`}
                          placeholder="Australian mobile or landline"
                          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between items-baseline mb-1">
                          <label
                            htmlFor={`${formId}-email`}
                            className="text-xs font-semibold text-slate-700"
                          >
                            Email Address <span className="text-orange-600">*</span>
                          </label>
                          <span
                            id={`${formId}-email-hint`}
                            className="text-[11px] text-slate-500"
                          >
                            For 3D PDF Layout
                          </span>
                        </div>
                        <input
                          type="email"
                          id={`${formId}-email`}
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          autoComplete="email"
                          aria-describedby={`${formId}-email-hint`}
                          placeholder="name@example.com.au"
                          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Street Address & Postcode */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="sm:col-span-2">
                        <label
                          htmlFor={`${formId}-address`}
                          className="block text-xs font-semibold text-slate-700 mb-1"
                        >
                          Installation Street Address
                        </label>
                        <input
                          type="text"
                          id={`${formId}-address`}
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          autoComplete="street-address"
                          placeholder="Street name, suburb"
                          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor={`${formId}-postcode`}
                          className="block text-xs font-semibold text-slate-700 mb-1"
                        >
                          Postcode <span className="text-orange-600">*</span>
                        </label>
                        <input
                          type="text"
                          id={`${formId}-postcode`}
                          name="postcode"
                          value={formData.postcode}
                          onChange={handleChange}
                          required
                          maxLength={4}
                          autoComplete="postal-code"
                          placeholder="e.g. 6055"
                          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Notes */}
                    <div>
                      <label
                        htmlFor={`${formId}-notes`}
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        Project Notes or Specific Questions (Optional)
                      </label>
                      <textarea
                        id={`${formId}-notes`}
                        name="notes"
                        rows={2}
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Mention any existing solar panels, 3-phase switchboard questions, or EV charger requirements..."
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submission Action */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full overflow-hidden rounded-2xl bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 px-8 py-4 text-base font-black text-white shadow-xl shadow-orange-500/25 transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl active:scale-[0.99] disabled:opacity-75 cursor-pointer flex items-center justify-center gap-3"
                    >
                      <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                      {isSubmitting ? (
                        <>
                          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          <span>Routing to {selectedState} Engineering Hub...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit for Free 3D Satellite Solar Proposal</span>
                          <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>

                    <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck className="h-4 w-4 text-emerald-600" />
                        100% Privacy Protected (Zero Spam)
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4 text-amber-600" />
                        Australian Government STC Rebate Deductions
                      </span>
                    </div>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* ================= RIGHT 5 COLS: ADVISOR VIP PANEL & HUBS SUMMARY ================= */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Support Card */}
            <div className="rounded-3xl bg-white border border-slate-200/90 p-7 shadow-lg">
              <div className="flex items-center gap-3.5 mb-5">
                <div className="relative">
                  <div className="h-12 w-12 rounded-2xl bg-linear-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-md shadow-orange-500/20">
                    <Sun className="h-6 w-6" />
                  </div>
                  <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white" />
                  </span>
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-slate-950">
                    Skye Energy Support Desk
                  </h4>
                  <p className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                    <span>🟢 Technicians Active in WA, NSW &amp; QLD</span>
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-5">
                Prefer to discuss your roof specs or switchboard immediately over the phone? Dial our priority line:
              </p>

              {/* Direct Call Hotlines */}
              <div className="space-y-3">
                <a
                  href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-900 text-white hover:bg-linear-to-r hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-md group"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-amber-400 group-hover:text-white transition-colors">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block group-hover:text-white">
                        Priority Helpline
                      </span>
                      <span className="text-base font-black tracking-wide">
                        {CONTACT_INFO.phone1}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-white group-hover:bg-white/20">
                    Call Now
                  </span>
                </a>

                <a
                  href={`tel:${CONTACT_INFO.phone2.replace(/\s/g, "")}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-900 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                        Engineering Desk
                      </span>
                      <span className="text-base font-bold text-slate-900">
                        {CONTACT_INFO.phone2}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-200 text-slate-800">
                    Connect
                  </span>
                </a>
              </div>
            </div>

            {/* Accreditation & Guarantee Badges */}
            <div className="rounded-3xl bg-white border border-slate-200/90 p-7 shadow-lg space-y-4">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-orange-500" />
                <span>The Skye Electrical Quality Guarantee</span>
              </h4>

              <div className="space-y-3.5 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-slate-900 font-bold block text-sm">
                      Upfront STC Government Rebate Deduction
                    </strong>
                    We subtract the full Australian Clean Energy Regulator
                    rebates directly on your invoice.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-slate-900 font-bold block text-sm">
                      100% In-House Master Electricians
                    </strong>
                    No subcontracting roulette. Your installation is signed off
                    by licensed A-Grade master electricians.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-slate-900 font-bold block text-sm">
                      10-Year Comprehensive Workmanship Warranty
                    </strong>
                    Complete protection covering electrical safety, roof
                    integrity, and switchboard compliance.
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
