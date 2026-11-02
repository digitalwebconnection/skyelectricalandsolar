import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Zap,
  Award,
  ArrowLeft,
  Printer,
  Mail,
  Phone,
  Scale,
} from "lucide-react";
import { COMPANY_LEGAL_NAME, COMPANY_ABN, CONTACT_INFO } from "../../constants";
import { useNavigation } from "../../context";

export function TermsConditionsPage() {
  const { navigate } = useNavigation();

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const SECTIONS = [
    { id: "binding-agreement", title: "1. Agreement & Parties" },
    { id: "quotations-feasibility", title: "2. Quotes & 30-Day Guarantee" },
    { id: "stc-rebates", title: "3. STC Rebates & Incentives" },
    { id: "grid-approval", title: "4. DNSP Grid Connection" },
    { id: "site-access", title: "5. Site Access & Roof Safety" },
    { id: "payment-terms", title: "6. Payment Terms & Milestones" },
    { id: "warranties", title: "7. 10-Year Workmanship Warranty" },
    { id: "handover-metering", title: "8. Handover & Smart Metering" },
    { id: "liability-force-majeure", title: "9. Limitation of Liability" },
    { id: "cooling-off", title: "10. Cooling-Off & Cancellations" },
    { id: "governing-law", title: "11. Governing Law & Jurisdiction" },
    { id: "disputes-support", title: "12. Customer Care & Disputes" },
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
      <section className="relative pt-32 pb-16 lg:pt-14 lg:pb-20 bg-linear-to-b from-[#071d32] via-[#092540] to-[#0a2f52] text-white overflow-hidden border-b border-slate-800">
        {/* Ambient solar radiance & circuit accents */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-180 h-96 bg-orange-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-orange-400/40 to-transparent" />
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
            <span className="text-amber-400 font-semibold">Terms &amp; Conditions</span>
          </div>

          <div className="max-w-3xl">
            {/* Regulatory Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold mb-4 backdrop-blur-xs">
              <Scale className="h-4 w-4 text-amber-400" />
              <span>Australian Consumer Law (ACL) Compliant</span>
              <span className="text-amber-400/50">•</span>
              <span>Clean Energy Council Approved Standards</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Terms &amp;{" "}
              <span className="bg-linear-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                Conditions
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Commercial agreement, installation standards, rebate terms, and workmanship guarantees
              for residential and commercial solar systems installed by {COMPANY_LEGAL_NAME}.
            </p>

            {/* Quick Metadata Pill Strip */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-amber-400" />
                <span>Effective Date: October 2026</span>
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>10-Year In-House Warranty Backed</span>
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 text-orange-400" />
                <span>{COMPANY_ABN}</span>
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
                href={`mailto:${CONTACT_INFO.email}?subject=Terms%20Inquiry%20-%20Sky%20Electrical%20%26%20Solar`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 text-xs font-black shadow-md transition-all"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Legal Inquiries</span>
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
                  <span>Sections Guide</span>
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

              {/* Workmanship Guarantee Callout */}
              <div className="rounded-2xl bg-linear-to-br from-[#071d32] to-[#0b2b4a] p-5 text-white shadow-md">
                <div className="flex items-center gap-2 mb-2 text-emerald-400">
                  <Award className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Our 10-Year Promise
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Every installation is backed by our full 10-year in-house master electrician
                  workmanship warranty, covering roof penetrations, wiring, and structural mounts.
                </p>
                <div className="space-y-2 text-xs">
                  <a
                    href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-white hover:text-amber-400 font-bold"
                  >
                    <Phone className="h-3.5 w-3.5 text-amber-400" />
                    <span>{CONTACT_INFO.phone1}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Full Legal Policy Articles (8 cols) */}
            <div className="lg:col-span-8 space-y-10 text-sm leading-relaxed text-slate-700">
              {/* Highlight Notice */}
              <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200/80 p-5 flex items-start gap-3.5 text-emerald-950">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <strong className="block font-bold text-emerald-900 mb-1">
                    Transparent, Fair &amp; CEC-Accredited Terms
                  </strong>
                  These Terms &amp; Conditions govern the quotation, sale, supply, and installation
                  of all photovoltaic (PV) solar systems, battery storage units, EV chargers, and
                  electrical work provided by {COMPANY_LEGAL_NAME} ({COMPANY_ABN}). Nothing in these
                  terms excludes or limits any consumer guarantees under the{" "}
                  <em>Competition and Consumer Act 2010 (Cth)</em> or Australian Consumer Law.
                </div>
              </div>

              {/* SECTION 1 */}
              <article id="binding-agreement" className="scroll-mt-32">
                <h2 className="text-xl font-black text-slate-950 mb-3 flex items-center gap-2">
                  <span className="text-orange-600 font-mono">01.</span>
                  <span>Agreement &amp; Parties</span>
                </h2>
                <div className="space-y-3 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
                  <p>
                    This contract is between <strong>{COMPANY_LEGAL_NAME}</strong> (&quot;Sky
                    Electrical &amp; Solar&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;)
                    and the customer identified in the formal quotation, proposal, or digital
                    contract (&quot;you&quot;, &quot;your&quot;).
                  </p>
                  <p>
                    By accepting our quotation, paying a deposit, or digitally confirming an
                    installation schedule, you agree to be bound by these Terms and Conditions in
                    their entirety.
                  </p>
                </div>
              </article>

              {/* SECTION 2 */}
              <article id="quotations-feasibility" className="scroll-mt-32">
                <h2 className="text-xl font-black text-slate-950 mb-3 flex items-center gap-2">
                  <span className="text-orange-600 font-mono">02.</span>
                  <span>Solar Quotes &amp; 30-Day Price Guarantee</span>
                </h2>
                <div className="space-y-3 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
                  <p>
                    All formal quotes issued by {COMPANY_LEGAL_NAME} remain firm and valid for{" "}
                    <strong>30 calendar days</strong> from the date of issue, protecting you from
                    wholesale equipment and freight cost fluctuations during your decision-making
                    period.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs text-slate-700">
                    <li>
                      <strong>Initial Feasibility:</strong> Quotes prepared via satellite irradiance
                      and 3D modeling are subject to final on-site verification by our licensed
                      A-Grade electricians.
                    </li>
                    <li>
                      <strong>No Unexpected Hidden Charges:</strong> If site inspection reveals
                      unforeseen switchboard inadequacies, asbestos backing, or rafter reinforcement
                      requirements, we will present a clear written variation. You may accept the
                      variation or cancel with a 100% refund of your deposit.
                    </li>
                  </ul>
                </div>
              </article>

              {/* SECTION 3 */}
              <article id="stc-rebates" className="scroll-mt-32">
                <h2 className="text-xl font-black text-slate-950 mb-3 flex items-center gap-2">
                  <span className="text-orange-600 font-mono">03.</span>
                  <span>STC Rebates &amp; Government Incentives</span>
                </h2>
                <div className="space-y-3 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs text-xs">
                  <p>
                    Unless otherwise specified, quoted prices include the upfront point-of-sale
                    deduction of Federal Small-scale Technology Certificates (STCs) created under
                    the <em>Renewable Energy (Electricity) Act 2000 (Cth)</em>.
                  </p>
                  <p>
                    By accepting this agreement, you assign all rights to create and receive STCs
                    generated by your solar system to {COMPANY_LEGAL_NAME} or its nominated
                    registered agent. If you fail to sign the mandatory STC assignment documentation
                    upon system commissioning, you become liable to reimburse the full market value
                    of the STC discount subtracted from your quote.
                  </p>
                </div>
              </article>

              {/* SECTION 4 */}
              <article id="grid-approval" className="scroll-mt-32">
                <h2 className="text-xl font-black text-slate-950 mb-3 flex items-center gap-2">
                  <span className="text-orange-600 font-mono">04.</span>
                  <span>DNSP Grid Connection &amp; Approvals</span>
                </h2>
                <div className="space-y-3 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs text-xs">
                  <p>
                    Connecting a grid-tied solar system requires pre-approval from your local
                    Distribution Network Service Provider (DNSP):
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                    <li>
                      Western Australia: <strong>Western Power</strong>
                    </li>
                    <li>
                      New South Wales:{" "}
                      <strong>Ausgrid, Endeavour Energy, or Essential Energy</strong>
                    </li>
                    <li>
                      Queensland: <strong>Energex or Ergon Energy</strong>
                    </li>
                  </ul>
                  <p>
                    {COMPANY_LEGAL_NAME} manages all grid connection paperwork on your behalf. If
                    your local network operator imposes export limitations (e.g. 1.5kW or 0kW export
                    limiting) or rejects grid capacity, we will optimize the system design or
                    provide you the choice to withdraw with full deposit refund.
                  </p>
                </div>
              </article>

              {/* SECTION 5 */}
              <article id="site-access" className="scroll-mt-32">
                <h2 className="text-xl font-black text-slate-950 mb-3 flex items-center gap-2">
                  <span className="text-orange-600 font-mono">05.</span>
                  <span>Site Access, Structural Integrity &amp; Safety</span>
                </h2>
                <div className="space-y-3 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs text-xs">
                  <p>
                    On the agreed installation date, you must provide safe, unhindered access to the
                    installation area, roof perimeter, switchboard, and primary electricity meter
                    from 7:00 AM to 6:00 PM.
                  </p>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <strong className="block text-slate-900 font-bold">
                      Customer Obligations:
                    </strong>
                    <p className="text-slate-600">
                      You warrant that you are the registered owner of the property or have obtained
                      all necessary written landlord/body corporate approvals, and that the roof
                      structure is sound and free of hazardous asbestos deterioration.
                    </p>
                  </div>
                </div>
              </article>

              {/* SECTION 6 */}
              <article id="payment-terms" className="scroll-mt-32">
                <h2 className="text-xl font-black text-slate-950 mb-3 flex items-center gap-2">
                  <span className="text-orange-600 font-mono">06.</span>
                  <span>Payment Terms &amp; Milestones</span>
                </h2>
                <div className="space-y-3 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs text-xs">
                  <p>
                    Unless special commercial finance terms are agreed upon in writing, our standard
                    residential milestone structure is:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] text-orange-600 font-mono font-bold block mb-1">
                        STAGE 1
                      </span>
                      <strong className="block text-slate-900 font-bold mb-0.5">
                        Booking Deposit (10%)
                      </strong>
                      <span className="text-slate-600">
                        Secures your hardware and engineering allocation.
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] text-orange-600 font-mono font-bold block mb-1">
                        STAGE 2
                      </span>
                      <strong className="block text-slate-900 font-bold mb-0.5">
                        Material Dispatch
                      </strong>
                      <span className="text-slate-600">
                        When panels, inverters &amp; batteries arrive on-site.
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] text-orange-600 font-mono font-bold block mb-1">
                        STAGE 3
                      </span>
                      <strong className="block text-slate-900 font-bold mb-0.5">
                        Final Settlement
                      </strong>
                      <span className="text-slate-600">
                        Due upon successful system energization and handover.
                      </span>
                    </div>
                  </div>
                </div>
              </article>

              {/* SECTION 7 */}
              <article id="warranties" className="scroll-mt-32">
                <h2 className="text-xl font-black text-slate-950 mb-3 flex items-center gap-2">
                  <span className="text-orange-600 font-mono">07.</span>
                  <span>Warranties &amp; Guarantees</span>
                </h2>
                <div className="space-y-3 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs text-xs">
                  <p>
                    {COMPANY_LEGAL_NAME} provides one of Australia’s most comprehensive
                    triple-shield warranty packages:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>10-Year Workmanship Warranty:</strong> Covers all labor, roof
                        penetration seal integrity, isolator wiring, conduit fittings, and mounting
                        hardware against defects.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>25-Year Panel Performance Guarantee:</strong> Tier-1 photovoltaic
                        panels guaranteed to maintain minimum 84.8% output after 25 years of
                        operation.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>10-Year Inverter &amp; Battery Warranty:</strong> Full OEM
                        manufacturer backing (Sungrow, Tesla, Fronius, Alpha ESS) with local
                        Australian replacement support.
                      </div>
                    </li>
                  </ul>
                </div>
              </article>

              {/* SECTION 8 */}
              <article id="handover-metering" className="scroll-mt-32">
                <h2 className="text-xl font-black text-slate-950 mb-3 flex items-center gap-2">
                  <span className="text-orange-600 font-mono">08.</span>
                  <span>Handover &amp; Smart Metering</span>
                </h2>
                <div className="space-y-3 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs text-xs">
                  <p>
                    Upon physical completion, our CEC accredited electrician will commission your
                    system, verify inverter voltage regulation, assist you in downloading the live
                    monitoring smartphone app, and submit the Certificate of Electrical Safety.
                  </p>
                  <p>
                    If your property requires a bi-directional smart meter re-configuration to
                    credit solar exports, this is executed by your electricity retailer and DNSP
                    according to state metering timelines.
                  </p>
                </div>
              </article>

              {/* SECTION 9 */}
              <article id="liability-force-majeure" className="scroll-mt-32">
                <h2 className="text-xl font-black text-slate-950 mb-3 flex items-center gap-2">
                  <span className="text-orange-600 font-mono">09.</span>
                  <span>Limitation of Liability &amp; Force Majeure</span>
                </h2>
                <div className="space-y-3 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs text-xs">
                  <p>
                    Neither party is liable for delays caused by Force Majeure events beyond
                    reasonable control, including extreme weather (cyclones, severe hail, torrential
                    rain preventing safe roof access), grid outages, or global supply chain
                    embargoes.
                  </p>
                  <p>
                    To the extent permitted by law, our liability is limited to the repair,
                    replacement, or resupply of the affected electrical goods and services in
                    accordance with the Australian Consumer Law.
                  </p>
                </div>
              </article>

              {/* SECTION 10 */}
              <article id="cooling-off" className="scroll-mt-32">
                <h2 className="text-xl font-black text-slate-950 mb-3 flex items-center gap-2">
                  <span className="text-orange-600 font-mono">10.</span>
                  <span>Cooling-Off Rights &amp; Cancellations</span>
                </h2>
                <div className="space-y-3 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs text-xs">
                  <p>
                    If your agreement was formed as an unsolicited consumer agreement (e.g. an
                    in-home consultation not specifically requested), you are entitled to a
                    statutory <strong>10-business-day cooling-off period</strong> under the
                    Australian Consumer Law during which you may cancel without penalty.
                  </p>
                  <p>
                    Furthermore, if the final site audit indicates that solar is technically
                    unviable or requires unexpected switchboard costs exceeding your budget, you may
                    cancel and receive a 100% prompt refund of your deposit.
                  </p>
                </div>
              </article>

              {/* SECTION 11 */}
              <article id="governing-law" className="scroll-mt-32">
                <h2 className="text-xl font-black text-slate-950 mb-3 flex items-center gap-2">
                  <span className="text-orange-600 font-mono">11.</span>
                  <span>Governing Law &amp; Jurisdiction</span>
                </h2>
                <div className="space-y-3 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs text-xs">
                  <p>
                    This contract is governed by and construed in accordance with the laws of the
                    Australian State where the installation takes place (Western Australia, New
                    South Wales, or Queensland). Both parties submit to the non-exclusive
                    jurisdiction of the courts of that State.
                  </p>
                </div>
              </article>

              {/* SECTION 12 */}
              <article id="disputes-support" className="scroll-mt-32">
                <h2 className="text-xl font-black text-slate-950 mb-3 flex items-center gap-2">
                  <span className="text-orange-600 font-mono">12.</span>
                  <span>Customer Care &amp; Dispute Resolution</span>
                </h2>
                <div className="rounded-2xl bg-linear-to-br from-[#071d32] to-[#0c243c] p-7 text-white shadow-lg space-y-4">
                  <h3 className="text-lg font-black text-white">
                    Need Clarification or Post-Install Support?
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
                    If you have questions regarding your proposal terms, warranty claims, or
                    inverter performance, contact our customer advocacy team directly.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
                    <div className="flex items-start gap-2.5">
                      <Phone className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase block">
                          Solar Helpline
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
                          Legal Support
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
                      <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase block">
                          License Status
                        </span>
                        <span className="text-slate-200">CEC A-Grade Electrical</span>
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

export default TermsConditionsPage;
