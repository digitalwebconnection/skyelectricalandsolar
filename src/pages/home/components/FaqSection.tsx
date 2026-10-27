import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  ChevronDown,
  PhoneCall,
  Sun,
  BatteryCharging,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react'
import { FadeContent } from '../../../components/common/FadeContent'
import { CONTACT_INFO } from '../../../constants'

interface FaqItem {
  id: string
  question: string
  answer: string
  category: 'all' | 'solar-battery' | 'rebates-savings' | 'install-warranty'
  highlights?: string[]
}

const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'rebates-savings',
    question: 'How much can I realistically save on my power bills with solar?',
    answer:
      'Most Australian homeowners reduce their electricity bills by 70% to 90% after installing a tailored solar system. With escalating grid tariffs, a properly sized 6.6kW system typically delivers $1,200 to $2,200 in annual power savings, paying for itself within 3 to 4 years.',
    highlights: [
      'Average 70%–90% reduction in quarterly electricity bills',
      'Rapid 3–4 year return on investment (ROI)',
      'Protection against future utility price hikes',
    ],
  },
  {
    id: 'faq-2',
    category: 'rebates-savings',
    question: 'Am I eligible for Australian federal and state solar rebates?',
    answer:
      'Yes! Most residential and small commercial installations qualify for federal Small-scale Technology Certificates (STCs), which provide an upfront discount of up to several thousand dollars directly on your quote. In Victoria, eligible homeowners can also access Solar Victoria panel rebates, battery rebates, and interest-free loans. Sky Electrical & Solar handles all rebate paperwork on your behalf.',
    highlights: [
      'Federal STC point-of-sale discount applied upfront',
      'Solar Victoria panel and battery rebate processing',
      'Zero paperwork hassle — we manage network approvals end-to-end',
    ],
  },
  {
    id: 'faq-3',
    category: 'solar-battery',
    question: 'Do solar panels still produce electricity on cloudy or rainy days?',
    answer:
      'Yes. Solar panels generate power using light photons, not heat. While solar output decreases during thick overcast skies or heavy rain (producing roughly 20% to 40% of their peak capacity), our premium Tier-1 monocrystalline panels with bifacial cell technology capture diffused ambient light efficiently throughout all seasons.',
    highlights: [
      'Generates clean power in rain, winter, and diffused daylight',
      'High-efficiency monocrystalline N-Type TOPCon solar cell technology',
      'Real-time inverter mobile app to track live production in any weather',
    ],
  },
  {
    id: 'faq-4',
    category: 'solar-battery',
    question: 'How does adding a battery storage system (Tesla / Alpha ESS) benefit me?',
    answer:
      'A solar battery stores the surplus energy generated during peak daytime sun so you can power your household during expensive evening peak tariff hours and overnight. It also provides automatic emergency blackout protection, keeping essential appliances running when the street grid goes down.',
    highlights: [
      'Achieve up to 90%–95% independence from the power grid',
      'Instant blackout and emergency backup power supply',
      'Store cheap daytime solar instead of exporting for minimal feed-in tariffs',
    ],
  },
  {
    id: 'faq-5',
    category: 'install-warranty',
    question: 'What warranties and guarantees come with Sky Electrical & Solar installations?',
    answer:
      'We only supply CEC-approved Tier-1 hardware backed by Australia’s most comprehensive warranty packages. Every installation comes with complete peace of mind.',
    highlights: [
      '25-Year Performance & Hardware Warranty on solar panels',
      '10-Year Comprehensive Warranty on inverters and storage batteries',
      '10-Year Sky Workmanship & Installation Guarantee by licensed electricians',
    ],
  },
  {
    id: 'faq-6',
    category: 'install-warranty',
    question: 'How long does the installation take, and who will do the work?',
    answer:
      'Once grid connection pre-approval is granted by your electricity distributor (DNSP), the physical rooftop installation for a residential home is completed in just 1 business day. All work is executed exclusively by our in-house, licensed, and Clean Energy Council accredited A-grade electricians — we never use unlicensed third-party subcontractors.',
    highlights: [
      'Completed in 1 day with minimal disruption to your home',
      'Strictly in-house, CEC-accredited licensed electricians',
      'Post-installation commissioning and Wi-Fi monitoring setup included',
    ],
  },
  
]

export function FaqSection() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true, // Open the first question by default
    'faq-2': false,
  })

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="relative py-20 sm:py-28 bg-slate-50/70 border-t border-slate-200/80 overflow-hidden"
    >
      {/* Ambient Lighting Gradients */}
      <div className="pointer-events-none absolute -top-40 right-1/4 w-[600px] h-[350px] bg-gradient-to-b from-amber-400/10 via-orange-400/5 to-transparent rounded-full blur-3xl -z-10" />
      <div className="pointer-events-none absolute bottom-0 left-10 w-[500px] h-[400px] bg-sky-400/5 rounded-full blur-[140px] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER ================= */}
        <FadeContent
          effect="focus"
          blur={8}
          duration={1.2}
          threshold={0.15}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >


          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Clear, honest answers about solar savings, government rebates, hardware warranties, and what to expect during your installation.
          </p>
        </FadeContent>

        

        {/* ================= MAIN ACCORDION + HELP ASIDE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Interactive Accordion List */}
          <div className="lg:col-span-8 space-y-3.5">
            {FAQ_DATA.map((faq) => {
              const isOpen = !!openIds[faq.id]
              return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl transition-all duration-200 overflow-hidden bg-white border ${
                      isOpen
                        ? 'border-amber-400/60 shadow-lg shadow-amber-500/5 ring-1 ring-amber-400/20'
                        : 'border-slate-200/80 hover:border-slate-300 shadow-xs'
                    }`}
                  >
                    {/* Accordion Question Trigger */}
                    <button
                      type="button"
                      onClick={() => toggleItem(faq.id)}
                      aria-expanded={isOpen}
                      className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer transition-colors"
                    >
                      <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {faq.question}
                      </span>
                      <span
                        className={`shrink-0 flex items-center justify-center h-8 w-8 rounded-full transition-transform duration-300 ${
                          isOpen
                            ? 'rotate-180 bg-amber-500 text-white'
                            : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                        }`}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </button>

                    {/* Accordion Answer Content */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-slate-100/90 text-sm text-slate-600 leading-relaxed">
                            <p>{faq.answer}</p>

                            {/* Key Highlights Bullet points if available */}
                            {faq.highlights && faq.highlights.length > 0 && (
                              <ul className="mt-3.5 space-y-2 pt-3 border-t border-slate-100">
                                {faq.highlights.map((highlight, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium"
                                  >
                                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                                    <span>{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
          </div>

          {/* Right Column: Direct Help & Fast Consultation Card */}
          <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-28">
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#0c243c] p-6 sm:p-7 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-xs font-bold text-amber-300 mb-3">
                <Sun className="h-3.5 w-3.5 text-amber-400" />
                Expert Solar Advice
              </span>

              <h3 className="text-xl font-extrabold text-white leading-tight">
                Have a question about your specific roof?
              </h3>

              <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Speak directly with an accredited solar engineer. We will review your switchboard, roof tilt, and electricity bill at no obligation.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, '')}`}
                  className="w-full flex items-center justify-center gap-2 h-11 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-500/25 transition-all duration-200 active:scale-95"
                >
                  <PhoneCall className="h-4 w-4" />
                  <span>Call {CONTACT_INFO.phone1}</span>
                </a>

                <a
                  href={`tel:${CONTACT_INFO.phone2.replace(/\s/g, '')}`}
                  className="w-full flex items-center justify-center gap-2 h-11 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all duration-200"
                >
                  <PhoneCall className="h-4 w-4 text-amber-400" />
                  <span>Direct Line: {CONTACT_INFO.phone2}</span>
                </a>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 font-medium text-slate-300">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  Clean Energy Council
                </span>
                <span>Licensed Electricians</span>
              </div>
            </div>

            {/* Quick Fact / Rebate Reminder Card */}
            <div className="rounded-2xl bg-amber-500/10 border border-amber-500/20 p-5 text-slate-800">
              <div className="flex items-start gap-3">
                <BatteryCharging className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700">
                    Victorian Rebate Notice
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Solar panel and battery rebate quotas are updated monthly. Secure your eligibility allocation before annual tariff changes.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default FaqSection
