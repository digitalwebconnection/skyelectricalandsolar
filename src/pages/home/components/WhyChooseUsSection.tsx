import { useState, useEffect } from 'react'
import { FileSearch, Calculator, Wrench, Zap, CheckCircle2, Award, Shield } from 'lucide-react'
import { SkewHoverCard } from '../../../components/common/SkewHoverCard'

export function WhyChooseUsSection() {
  const steps = [
    {
      num: '01',
      icon: FileSearch,
      title: 'Free Roof & Energy Audit',
      desc: 'We analyze your roof orientation, shading, and historical power bills to design the optimum system size.',
    },
    {
      num: '02',
      icon: Calculator,
      title: 'Custom Proposal & Rebate Check',
      desc: 'Receive transparent pricing showing upfront government STC rebate discounts and estimated payback timelines.',
    },
    {
      num: '03',
      icon: Wrench,
      title: 'Certified Master Installation',
      desc: 'Clean Energy Council accredited electricians install your Tier-1 hardware in as little as one day.',
    },
    {
      num: '04',
      icon: Zap,
      title: 'Grid Connection & Power Savings',
      desc: 'We finalize distributor meter connections and set up live mobile telemetry so you can watch your savings accumulate.',
    },
  ]

  const [activeCardIndex, setActiveCardIndex] = useState<number>(0)
  const [isUserHovering, setIsUserHovering] = useState<boolean>(false)

  // Auto hover cycle every 9s across each card
  useEffect(() => {
    if (isUserHovering) return

    const timer = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % steps.length)
    }, 9000)

    return () => clearInterval(timer)
  }, [isUserHovering, steps.length])

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
            <Award className="h-3.5 w-3.5 text-emerald-600" />
            Simple & Transparent Process
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How Switching to Solar Works With Us
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Zero hassle, zero hidden fees. From the initial satellite roof analysis to switching on your system, we handle everything from start to finish.
          </p>
        </div>

        {/* 4 Step Timeline Grid with Auto Hover Cycling Every 9s */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-8 items-start min-h-[300px]">
          {steps.map((step, index) => (
            <SkewHoverCard
              key={index}
              num={step.num}
              icon={step.icon}
              title={step.title}
              desc={step.desc}
              isActive={activeCardIndex === index}
              cycleDuration={9}
              onMouseEnter={() => {
                setIsUserHovering(true)
                setActiveCardIndex(index)
              }}
              onMouseLeave={() => {
                setIsUserHovering(false)
              }}
              onClick={() => {
                setActiveCardIndex(index)
              }}
            />
          ))}
        </div>

        {/* Guarantee Seal Box */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border border-amber-200/80 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 shrink-0 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-md">
              <Shield className="h-7 w-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">
                100% Workmanship & Performance Guarantee
              </h4>
              <p className="text-xs text-slate-600 mt-1 max-w-xl">
                All solar panels are backed by a 25-Year Manufacturer Warranty, 10-Year Inverter Warranty, and 10-Year Workmanship Warranty on all electrical labor.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-white/90 border border-emerald-200/80 rounded-full px-4 py-2 shrink-0 shadow-xs">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            <span>Guaranteed CEC Compliance</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUsSection
