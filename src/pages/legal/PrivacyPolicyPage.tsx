import {
  ShieldCheck,
  Lock,
  FileText,
  Eye,
  Server,
  UserCheck,
  Mail,
  Phone,
  MapPin,
  ArrowLeft,
  Printer,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
} from "lucide-react";
import { COMPANY_LEGAL_NAME, COMPANY_ABN, CONTACT_INFO } from "../../constants";
import { useNavigation } from "../../context";

export function PrivacyPolicyPage() {
  const { navigate } = useNavigation();

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const SECTIONS = [
    { id: "introduction", title: "1. Overview & Commitment" },
    { id: "information-collected", title: "2. Information We Collect" },
    { id: "collection-methods", title: "3. How We Collect Data" },
    { id: "use-of-information", title: "4. Use of Information" },
    { id: "disclosure", title: "5. Disclosure to Third Parties" },
    { id: "security-storage", title: "6. Security & Storage" },
    { id: "cookies-telemetry", title: "7. Cookies & Analytics" },
    { id: "access-correction", title: "8. Access & Correction Rights" },
    { id: "complaints", title: "9. Complaints & OAIC" },
    { id: "contact-officer", title: "10. Contacting Us" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative w-full bg-[#faf8f5] text-slate-800">
      {/* ================= HERO HEADER BANNER ================= */}
      <section className="relative pt-32 pb-16 lg:pt-14 36 lg:pb-20 bg-linear-to-b from-[#071d32] via-[#092540] to-[#0a2f52] text-white overflow-hidden border-b border-slate-800">
        {/* Ambient solar radiance & circuit accents */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-180 h-96 bg-amber-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300 mb-6">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-1 hover:text-amber-400 transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Home</span>
            </button>
            <span>/</span>
            <span className="text-slate-400">Legal</span>
            <span>/</span>
            <span className="text-amber-400 font-semibold">Privacy Policy</span>
          </div>

          <div className="max-w-3xl">
            {/* Regulatory Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-semibold mb-4 backdrop-blur-xs">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>Australian Privacy Principles (APPs) Compliant</span>
              <span className="text-emerald-400/50">•</span>
              <span>Privacy Act 1988 (Cth)</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Privacy{" "}
              <span className="bg-linear-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              How {COMPANY_LEGAL_NAME} collects, utilizes, safeguards, and respects your personal
              and household energy data across Western Australia, New South Wales, and Queensland.
            </p>

            {/* Quick Metadata Pill Strip */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-amber-400" />
                <span>Last Updated: October 2026</span>
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <Lock className="h-3.5 w-3.5 text-orange-400" />
                <span>{COMPANY_ABN}</span>
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                <span>Clean Energy Council Accredited</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-bold transition-all cursor-pointer backdrop-blur-xs"
              >
                <Printer className="h-3.5 w-3.5 text-amber-400" />
                <span>Print Copy</span>
              </button>

              <a
                href={`mailto:${CONTACT_INFO.email}?subject=Privacy%20Inquiry%20-%20Sky%20Electrical%20%26%20Solar`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 text-xs font-black shadow-md transition-all"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Contact Privacy Officer</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT WRAPPER ================= */}
      <section className="relative py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Sticky Table of Contents (4 cols) */}
            <div className="hidden lg:block lg:col-span-4 sticky top-28 space-y-6">
              <div className="rounded-2xl bg-white border border-slate-200/90 p-5 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                  <FileText className="h-4 w-4 text-orange-500" />
                  <span>Table of Contents</span>
                </h3>
                <nav className="space-y-1 text-xs">
                  {SECTIONS.map((sec) => (
                    <button
                      key={sec.id}
                      type="button"
                      onClick={() => scrollToSection(sec.id)}
                      className="w-full text-left py-2 px-2.5 rounded-lg text-slate-600 hover:text-orange-600 hover:bg-orange-50 transition-colors font-medium flex items-center justify-between cursor-pointer"
                    >
                      <span>{sec.title}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Direct Privacy Help Box */}
              <div className="rounded-2xl bg-linear-to-br from-[#071d32] to-[#0b2b4a] p-5 text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-2.5 text-amber-400">
                  <UserCheck className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Privacy Officer
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Need to inspect, correct, or delete your solar consultation records? Contact our
                  designated privacy compliance desk.
                </p>
                <div className="space-y-2 text-xs">
                  <a
                    href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-white hover:text-amber-400 font-bold"
                  >
                    <Phone className="h-3.5 w-3.5 text-amber-400" />
                    <span>{CONTACT_INFO.phone1}</span>
                  </a>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex items-center gap-2 text-slate-300 hover:text-amber-400 font-medium break-all"
                  >
                    <Mail className="h-3.5 w-3.5 text-orange-400" />
                    <span>{CONTACT_INFO.email}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Full Legal Policy Articles (8 cols) */}
            <div className="lg:col-span-8 space-y-10 text-sm leading-relaxed text-slate-700">
              {/* Highlight Notice */}
              <div className="rounded-2xl bg-amber-50/70 border border-amber-200/80 p-5 flex items-start gap-3.5 text-amber-950">
                <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <strong className="block font-bold text-amber-900 mb-1">
                    Your Privacy Rights Under Australian Law
                  </strong>
                  {COMPANY_LEGAL_NAME} ({COMPANY_ABN}) is committed to respecting and safeguarding
                  your privacy. We strictly comply with the Australian Privacy Principles (APPs) set
                  out in the <em>Privacy Act 1988 (Cth)</em> and all relevant state electrical
                  safety and energy data regulations.
                </div>
              </div>

              {/* SECTION 1 */}
              <article id="introduction" className="scroll-mt-32">
                <h2 className="text-xl font-black text-slate-950 mb-3 flex items-center gap-2">
                  <span className="text-orange-600 font-mono">01.</span>
                  <span>Overview &amp; Commitment</span>
                </h2>
                <div className="space-y-3 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
                  <p>
                    This Privacy Policy explains how <strong>{COMPANY_LEGAL_NAME}</strong>{" "}
                    (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) collects, holds, uses, and
                    discloses personal information obtained through our website (
                    <strong>skyelectricalandsolar.net.au</strong>), solar assessment forms, direct
                    phone consultations, and on-site technical surveys.
                  </p>
                  <p>
                    By engaging with our website, submitting an inquiry, or contracting us for
                    residential or commercial solar, battery storage, EV charging, or master
                    electrical installations, you consent to the collection, storage, and processing
                    of your information in accordance with this policy.
                  </p>
                </div>
              </article>

              {/* SECTION 2 */}
              <article id="information-collected" className="scroll-mt-32">
                <h2 className="text-xl font-black text-slate-950 mb-3 flex items-center gap-2">
                  <span className="text-orange-600 font-mono">02.</span>
                  <span>Information We Collect</span>
                </h2>
                <div className="space-y-4 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
                  <p>
                    To accurately calculate solar irradiation, evaluate roof feasibility, process
                    government rebates, and dispatch our licensed electricians, we may collect the
                    following types of information:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-1 text-xs uppercase tracking-wide">
                        Contact Details
                      </span>
                      <p className="text-xs text-slate-600">
                        Full name, residential or commercial address, phone number, and email
                        address.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-1 text-xs uppercase tracking-wide">
                        Property &amp; Energy Data
                      </span>
                      <p className="text-xs text-slate-600">
                        National Meter Identifier (NMI), power bills, quarterly kWh consumption,
                        switchboard photos, and roof orientation.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-1 text-xs uppercase tracking-wide">
                        Satellite &amp; LIDAR Imagery
                      </span>
                      <p className="text-xs text-slate-600">
                        High-resolution roof pitch, azimuth, shading telemetry, and satellite scans
                        for 3D modeling.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-1 text-xs uppercase tracking-wide">
                        Technical Installation Logs
                      </span>
                      <p className="text-xs text-slate-600">
                        Inverter serial numbers, battery warranty telemetry, Clean Energy Council
                        compliance certificates, and grid connection approvals.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              {/* SECTION 3 */}
              <article id="collection-methods" className="scroll-mt-32">
                <h2 className="text-xl font-black text-slate-950 mb-3 flex items-center gap-2">
                  <span className="text-orange-600 font-mono">03.</span>
                  <span>How We Collect Your Data</span>
                </h2>
                <div className="space-y-3 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
                  <p>
                    We collect personal information directly from you wherever possible, through the
                    following channels:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs text-slate-700">
                    <li>
                      <strong>Digital Form Submissions:</strong> When you request a customized solar
                      quote, book a site consultation, or submit our multi-step quote wizard.
                    </li>
                    <li>
                      <strong>Telephone Consultations:</strong> When you contact our regional
                      dispatch desks across WA, NSW, or QLD.
                    </li>
                    <li>
                      <strong>On-Site Master Audits:</strong> When our A-Grade licensed electricians
                      inspect your property, roof structure, and switchboard.
                    </li>
                    <li>
                      <strong>Authorized Utilities &amp; DNSPs:</strong> With your explicit written
                      consent, we retrieve your historical smart meter interval data from your
                      electricity distributor to design accurate battery storage systems.
                    </li>
                  </ul>
                </div>
              </article>

              {/* SECTION 4 */}
              <article id="use-of-information" className="scroll-mt-32">
                <h2 className="text-xl font-black text-slate-950 mb-3 flex items-center gap-2">
                  <span className="text-orange-600 font-mono">04.</span>
                  <span>Use of Information</span>
                </h2>
                <div className="space-y-3 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
                  <p>
                    We use your personal data strictly for legitimate business purposes associated
                    with clean energy delivery:
                  </p>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        Engineering bespoke solar array and battery storage designs adapted to your
                        household power load.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        Filing and processing Federal STC (Small-scale Technology Certificate)
                        rebate claims to deduct discounts upfront from your invoice.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        Securing formal grid connection approval from your local Distribution
                        Network Service Provider (Western Power, Ausgrid, Endeavour, Energex, etc.).
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        Administering our 10-year in-house workmanship warranty and manufacturer
                        equipment product registrations.
                      </span>
                    </li>
                  </ul>
                </div>
              </article>

              {/* SECTION 5 */}
              <article id="disclosure" className="scroll-mt-32">
                <h2 className="text-xl font-black text-slate-950 mb-3 flex items-center gap-2">
                  <span className="text-orange-600 font-mono">05.</span>
                  <span>Disclosure to Third Parties</span>
                </h2>
                <div className="space-y-3 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
                  <p className="text-xs">
                    <strong>
                      We never sell, rent, or trade your personal data to external telemarketers or
                      third-party data brokers.
                    </strong>{" "}
                    We disclose information only to authorized organizations strictly required to
                    execute your installation:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs text-slate-700">
                    <li>
                      <strong>Government &amp; Regulatory Bodies:</strong> Clean Energy Regulator
                      (CER), Clean Energy Council (CEC), and state electrical safety regulators for
                      compliance audits.
                    </li>
                    <li>
                      <strong>Network Operators (DNSPs):</strong> Western Power (WA),
                      Ausgrid/Endeavour (NSW), and Energex/Ergon (QLD) for bi-directional solar
                      feed-in tariff metering approvals.
                    </li>
                    <li>
                      <strong>Equipment Manufacturers:</strong> Inverter and battery OEM monitoring
                      portals (e.g. Sungrow, Tesla, Fronius, Alpha ESS, Solis) to initialize your
                      live smartphone telemetry app and warranty coverage.
                    </li>
                    <li>
                      <strong>Subcontracted Master Electricians &amp; Freight:</strong>{" "}
                      CEC-accredited installers and crane/scissor-lift operators dispatched
                      specifically to your property.
                    </li>
                  </ul>
                </div>
              </article>

              {/* SECTION 6 */}
              <article id="security-storage" className="scroll-mt-32">
                <h2 className="text-xl font-black text-slate-950 mb-3 flex items-center gap-2">
                  <span className="text-orange-600 font-mono">06.</span>
                  <span>Data Security &amp; Storage</span>
                </h2>
                <div className="space-y-3 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
                  <p>
                    All electronic records are stored within secure, ISO 27001 certified data
                    centers located in Australia. We implement robust physical and electronic
                    safeguards:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <Lock className="h-4 w-4 text-emerald-600 mb-1" />
                      <strong className="block text-slate-900 font-bold mb-0.5">
                        256-Bit SSL Encryption
                      </strong>
                      <span>All quote submissions are encrypted in transit.</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <Server className="h-4 w-4 text-amber-600 mb-1" />
                      <strong className="block text-slate-900 font-bold mb-0.5">
                        Australian Data Sovereignty
                      </strong>
                      <span>Customer information remains within Australian servers.</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <Eye className="h-4 w-4 text-orange-600 mb-1" />
                      <strong className="block text-slate-900 font-bold mb-0.5">
                        Strict Role Access
                      </strong>
                      <span>Only vetted engineering personnel access schematics.</span>
                    </div>
                  </div>
                </div>
              </article>

              {/* SECTION 7 */}
              <article id="cookies-telemetry" className="scroll-mt-32">
                <h2 className="text-xl font-black text-slate-950 mb-3 flex items-center gap-2">
                  <span className="text-orange-600 font-mono">07.</span>
                  <span>Cookies &amp; Web Analytics</span>
                </h2>
                <div className="space-y-3 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs text-xs">
                  <p>
                    Our website uses session and persistent cookies to remember your selected hub
                    preferences (WA, NSW, or QLD), retain quote form progress across page reloads,
                    and monitor general web traffic patterns via aggregated analytics.
                  </p>
                  <p>
                    You can configure your browser to reject cookies; however, some interactive
                    features, such as our 3D solar calculator and hub locator, may experience
                    limited functionality.
                  </p>
                </div>
              </article>

              {/* SECTION 8 */}
              <article id="access-correction" className="scroll-mt-32">
                <h2 className="text-xl font-black text-slate-950 mb-3 flex items-center gap-2">
                  <span className="text-orange-600 font-mono">08.</span>
                  <span>Your Access &amp; Correction Rights</span>
                </h2>
                <div className="space-y-3 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs text-xs">
                  <p>
                    Under Australian Privacy Principles 12 and 13, you have the legal right to
                    request access to the personal data we hold about you and request corrections if
                    any details are inaccurate, incomplete, or out of date.
                  </p>
                  <p>
                    To request access or corrections, email{" "}
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-orange-600 font-bold hover:underline"
                    >
                      {CONTACT_INFO.email}
                    </a>
                    . We respond to all formal access requests within 14 business days without
                    administrative fees.
                  </p>
                </div>
              </article>

              {/* SECTION 9 */}
              <article id="complaints" className="scroll-mt-32">
                <h2 className="text-xl font-black text-slate-950 mb-3 flex items-center gap-2">
                  <span className="text-orange-600 font-mono">09.</span>
                  <span>Complaints &amp; OAIC Escalation</span>
                </h2>
                <div className="space-y-3 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs text-xs">
                  <p>
                    If you believe {COMPANY_LEGAL_NAME} has breached the Australian Privacy
                    Principles, you may submit a formal complaint to our Privacy Officer. We
                    investigate all complaints promptly and provide a written determination within
                    30 calendar days.
                  </p>
                  <p>
                    If you are unsatisfied with our internal resolution, you have the right to
                    escalate your complaint to the{" "}
                    <strong>Office of the Australian Information Commissioner (OAIC)</strong>:
                  </p>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-slate-900 block mb-1">
                      Office of the Australian Information Commissioner (OAIC)
                    </span>
                    <p className="text-slate-600">
                      Website:{" "}
                      <a
                        href="https://www.oaic.gov.au"
                        target="_blank"
                        rel="noreferrer"
                        className="text-orange-600 underline font-medium"
                      >
                        www.oaic.gov.au
                      </a>{" "}
                      | Phone: 1300 363 992 | Post: GPO Box 5218 Sydney NSW 2001
                    </p>
                  </div>
                </div>
              </article>

              {/* SECTION 10 */}
              <article id="contact-officer" className="scroll-mt-32">
                <h2 className="text-xl font-black text-slate-950 mb-3 flex items-center gap-2">
                  <span className="text-orange-600 font-mono">10.</span>
                  <span>Contact Our Privacy Team</span>
                </h2>
                <div className="rounded-2xl bg-linear-to-br from-[#071d32] to-[#0c243c] p-7 text-white shadow-lg space-y-4">
                  <h3 className="text-lg font-black text-white">{COMPANY_LEGAL_NAME}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
                    For any questions, privacy verification, or data access requests, our national
                    privacy coordinator is available during standard Australian business hours.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
                    <div className="flex items-start gap-2.5">
                      <Phone className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase block">
                          Phone
                        </span>
                        <a
                          href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`}
                          className="font-bold text-white hover:text-amber-400"
                        >
                          {CONTACT_INFO.phone1}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Mail className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase block">
                          Email
                        </span>
                        <a
                          href={`mailto:${CONTACT_INFO.email}`}
                          className="font-bold text-white hover:text-orange-400 break-all"
                        >
                          {CONTACT_INFO.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <MapPin className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase block">
                          Head Office
                        </span>
                        <span className="text-slate-200">113 Barbarossa Dr, Caversham WA 6055</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicyPage;
