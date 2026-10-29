import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown,
  HelpCircle,
  Phone,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Zap,
} from "lucide-react";
import { CONTACT_INFO } from "../../../constants";
import { BorderBeam } from "../../../components/common/BorderBeam";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const CONTACT_FAQS: FaqItem[] = [
  {
    id: "free-quote",
    question: "Are your solar roof proposals and site assessments 100% free?",
    answer:
      "Yes, completely free and with zero obligation. When you submit your property details, our Clean Energy Council accredited engineers model your roof using high-definition satellite imagery and solar irradiance algorithms. If an on-site inspection is required for switchboard verification or meter compliance, our local state team conducts it at no cost to you.",
  },
  {
    id: "turnaround-time",
    question: "How fast can you attend or install in WA, NSW, and QLD?",
    answer:
      "For initial quotes and digital system proposals, our turnaround is under 15 minutes during business hours. Physical site visits across Greater Perth (WA), Greater Sydney (NSW), and Greater Brisbane (QLD) are typically scheduled within 24 to 48 hours. Standard residential installations are completed within 1 to 2 weeks following network grid approval.",
  },
  {
    id: "rebates-discount",
    question: "How do you handle Australian Federal & State solar/battery rebates?",
    answer:
      "We are an approved Clean Energy Council accredited retailer and installer. We apply the maximum Federal Small-scale Technology Certificate (STC) discount directly as an upfront point-of-sale deduction on your invoice. For state-specific battery subsidies (such as Peak Demand or storage incentive schemes), our admin team manages the entire paperwork and compliance filing on your behalf.",
  },
  {
    id: "brands-supported",
    question: "What tier-1 solar panels, inverters, and battery systems do you install?",
    answer:
      "We partner only with globally proven, CEC-listed tier-1 manufacturers with local Australian warranty offices. This includes Tesla Powerwall, Sungrow, Growatt, Fronius, Solis, Jinko Solar, and Seraphim. Every component carries a full manufacturer warranty (typically 25 years for panels, 10 years for inverters & batteries) plus our Skye 10-year workmanship warranty.",
  },
  {
    id: "electrical-work",
    question: "Do you handle switchboard upgrades and EV charger installations too?",
    answer:
      "Yes! Because Skye Electrical & Solar employs in-house A-Grade licensed master electricians, we perform full switchboard modernizations, RCD safety switch installations, 3-phase power upgrades, and smart bidirectional EV charger installations alongside or independently of your solar system.",
  },
];

export function ContactFaqSection() {
  const [openId, setOpenId] = useState<string | null>("free-quote");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const scrollToForm = () => {
    const el = document.getElementById("contact-form-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-24 bg-white text-slate-900 overflow-hidden border-t border-slate-200/80">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="h-3.5 w-3.5 text-amber-600" />
            Clear Answers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Frequently Asked Questions Before Calling
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Everything you need to know about our quote process, licensing, and
            support across Western Australia, New South Wales, and Queensland.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {CONTACT_FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200/90 bg-white shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 bg-amber-500 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 sm:px-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* ================= FINAL HIGH-IMPACT CONVERSION BANNER ================= */}
        <div className="mt-18 relative overflow-hidden rounded-3xl bg-slate-950 text-white p-8 sm:p-12 lg:p-14 shadow-2xl border border-slate-800">
          <BorderBeam size={340} duration={14} colorFrom="#f59e0b" colorTo="#ea580c" />

          {/* Ambient flares */}
          <div className="absolute -top-24 right-0 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-500/30">
                <Sparkles className="h-3.5 w-3.5" />
                Australian Energy Independence
              </span>

              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Ready to Slash Your Power Bills With Clean Solar Energy?
              </h3>

              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                Speak directly with certified CEC solar engineers and master
                electricians. Free 3D roof analysis, upfront STC rebate
                calculations, and guaranteed local support.
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-300">
                <span className="flex items-center gap-1.5 font-bold text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                  WA • NSW • QLD Operational Hubs
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 font-bold text-amber-400">
                  <ShieldCheck className="h-4 w-4" />
                  10-Year Workmanship Warranty
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full sm:w-auto shrink-0">
              <button
                type="button"
                onClick={scrollToForm}
                className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-black text-sm shadow-xl shadow-orange-500/30 transition-all duration-300 hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2"
              >
                <Zap className="h-4 w-4" />
                <span>Request Free Solar Proposal</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </button>

              <a
                href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs border border-slate-700 transition-colors shadow-md"
              >
                <Phone className="h-3.5 w-3.5 text-amber-400" />
                <span>Call Hotline: {CONTACT_INFO.phone1}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactFaqSection;
