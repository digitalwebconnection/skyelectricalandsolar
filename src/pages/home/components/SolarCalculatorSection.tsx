import { useState, useMemo } from 'react'
import {
  Sun,
  BatteryCharging,
  Zap,
  TrendingDown,
  PhoneCall,
  ArrowRight,
  TreePine,
  DollarSign,
  Home,
  Building2,
  Compass,
  MapPin,
  Send,
} from 'lucide-react'
import { FadeContent } from '../../../components/common/FadeContent'
import { MagicCard } from '../../../components/common/MagicCard'
import { BorderBeam } from '../../../components/common/BorderBeam'
import { NumberTicker } from '../../../components/common/NumberTicker'
import { CONTACT_INFO } from '../../../constants'

type PropertyType = 'residential' | 'commercial'
type RoofOrientation = 'optimal' | 'balanced' | 'shaded'
type BillCycle = 'monthly' | 'quarterly'

export function SolarCalculatorSection() {
  const [propertyType, setPropertyType] = useState<PropertyType>('residential')
  const [billCycle, setBillCycle] = useState<BillCycle>('monthly')
  const [billAmount, setBillAmount] = useState<number>(350)
  const [postcode, setPostcode] = useState<string>('3000 Melbourne')
  const [hasBattery, setHasBattery] = useState<boolean>(true)
  const [roofOrientation, setRoofOrientation] = useState<RoofOrientation>('optimal')
  const [userPhone, setUserPhone] = useState<string>('')
  const [isQuoteSent, setIsQuoteSent] = useState<boolean>(false)

  // Derived effective monthly bill
  const monthlyBill = useMemo(() => {
    const val = Number(billAmount) || 0
    return billCycle === 'monthly' ? val : Math.round(val / 3)
  }, [billAmount, billCycle])

  // Dynamic Solar Calculations based on Australian standards
  const calculation = useMemo(() => {
    const safeMonthly = Math.max(10, monthlyBill)
    const annualBill = safeMonthly * 12
    const quarterlyBill = safeMonthly * 3

    // System Sizing (kW)
    let systemKw = 6.6
    let panelsCount = 16
    let inverterKw = 5.0

    if (propertyType === 'residential') {
      if (safeMonthly < 220) {
        systemKw = 6.6
        panelsCount = 16
        inverterKw = 5.0
      } else if (safeMonthly < 360) {
        systemKw = 8.8
        panelsCount = 21
        inverterKw = 6.0
      } else if (safeMonthly < 500) {
        systemKw = 10.0
        panelsCount = 24
        inverterKw = 8.0
      } else {
        systemKw = 13.2
        panelsCount = 32
        inverterKw = 10.0
      }
    } else {
      // Commercial Sizing
      if (safeMonthly < 600) {
        systemKw = 15.0
        panelsCount = 36
        inverterKw = 12.0
      } else if (safeMonthly < 1000) {
        systemKw = 30.0
        panelsCount = 72
        inverterKw = 25.0
      } else {
        systemKw = 50.0
        panelsCount = 120
        inverterKw = 40.0
      }
    }

    // Orientation multiplier
    const orientationMultiplier =
      roofOrientation === 'optimal' ? 1.0 : roofOrientation === 'balanced' ? 0.92 : 0.82

    // Savings percentage
    const baseSavingsRate = hasBattery ? 0.88 : 0.72
    const effectiveSavingsRate = Math.min(0.95, baseSavingsRate * orientationMultiplier)

    // Annual & 10-year savings
    const annualSavings = Math.round(annualBill * effectiveSavingsRate)
    const newMonthlyBill = Math.round(safeMonthly * (1 - effectiveSavingsRate))
    const newQuarterlyBill = newMonthlyBill * 3

    // 10-Year cumulative with 3% utility escalation
    const tenYearSavings = Math.round(annualSavings * 11.46)

    // STC Government Rebate (approx ~$340 per kW in Zone 3 / VIC)
    const governmentRebate = Math.round(systemKw * 345)

    // Payback Period (Years)
    const estimatedCost =
      propertyType === 'residential'
        ? systemKw * 950 + (hasBattery ? 7500 : 0) - governmentRebate
        : systemKw * 850 + (hasBattery ? 12000 : 0) - governmentRebate
    const paybackYears = Math.max(
      2.2,
      Math.min(6.5, estimatedCost / Math.max(1200, annualSavings))
    ).toFixed(1)

    // Environmental Offset
    const co2OffsetTonnes = Number((systemKw * 1.25 * orientationMultiplier).toFixed(1))

    return {
      systemKw,
      panelsCount,
      inverterKw,
      annualBill,
      quarterlyBill,
      annualSavings,
      newMonthlyBill,
      newQuarterlyBill,
      tenYearSavings,
      governmentRebate,
      paybackYears,
      co2OffsetTonnes,
    }
  }, [monthlyBill, propertyType, hasBattery, roofOrientation])

  const handleSendQuote = (e: React.FormEvent) => {
    e.preventDefault()
    if (!userPhone.trim()) return
    setIsQuoteSent(true)
    setTimeout(() => {
      window.location.href = `tel:${CONTACT_INFO.phone1.replace(/\s/g, '')}`
    }, 1200)
  }

  return (
    <section
      id="solar-calculator"
      aria-label="Solar Savings Calculator"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-white via-amber-50/20 to-white overflow-hidden border-y border-slate-100"
    >
      {/* Ambient Lighting Gradients */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-gradient-to-b from-amber-400/15 via-orange-400/5 to-transparent rounded-full blur-3xl -z-10" />
      <div className="pointer-events-none absolute bottom-10 right-0 w-[500px] h-[500px] bg-sky-400/5 rounded-full blur-[140px] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER ================= */}
        <FadeContent
          effect="focus"
          blur={8}
          duration={1.2}
          threshold={0.15}
          className="text-center max-w-6xl mx-auto mb-12 sm:mb-16"
        >
          

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Calculate Your Solar{' '}
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Savings & Payback
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Type your power bill or drag the slider to instantly discover your optimal system size, estimated quarterly savings, and government rebate entitlement.
          </p>
        </FadeContent>

        {/* ================= INTERACTIVE CALCULATOR GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ---------------- LEFT COLUMN: INTERACTIVE CONTROLS ---------------- */}
          <div className="lg:col-span-7 space-y-6">
            <div className=" space-y-7">
              
              {/* 1. Property Type Selector */}
              <div>
                <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500 block mb-3">
                  Step 1 • Select Property Type
                </label>
                <div className="grid grid-cols-2 gap-3 p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80">
                  <button
                    type="button"
                    onClick={() => {
                      setPropertyType('residential')
                      if (billAmount > 800 && billCycle === 'monthly') setBillAmount(350)
                    }}
                    className={`flex items-center justify-center gap-2.5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                      propertyType === 'residential'
                        ? 'bg-white text-slate-900 shadow-md shadow-slate-900/10'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Home className={`h-4 w-4 ${propertyType === 'residential' ? 'text-amber-500' : 'text-slate-400'}`} />
                    <span>Residential Home</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setPropertyType('commercial')
                      if (billAmount < 350 && billCycle === 'monthly') setBillAmount(750)
                    }}
                    className={`flex items-center justify-center gap-2.5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                      propertyType === 'commercial'
                        ? 'bg-white text-slate-900 shadow-md shadow-slate-900/10'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Building2 className={`h-4 w-4 ${propertyType === 'commercial' ? 'text-blue-600' : 'text-slate-400'}`} />
                    <span>Commercial Facility</span>
                  </button>
                </div>
              </div>

              {/* 2. Electricity Bill: INTERACTIVE INPUT FIELD & SLIDER */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <label htmlFor="bill-amount-input" className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block">
                      Step 2 • Enter Your Electricity Bill
                    </label>
                    <span className="text-xs text-slate-400">
                      {billCycle === 'monthly'
                        ? `(Approx $${(monthlyBill * 3).toLocaleString()} / quarter)`
                        : `(Approx $${monthlyBill.toLocaleString()} / month)`}
                    </span>
                  </div>

                  {/* Billing Frequency Switch (Monthly vs Quarterly) */}
                  <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl border border-slate-200 text-xs font-bold text-slate-600">
                    <button
                      type="button"
                      onClick={() => {
                        if (billCycle !== 'monthly') {
                          setBillCycle('monthly')
                          setBillAmount(Math.round(billAmount / 3))
                        }
                      }}
                      className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                        billCycle === 'monthly'
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'hover:text-slate-900'
                      }`}
                    >
                      Monthly
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (billCycle !== 'quarterly') {
                          setBillCycle('quarterly')
                          setBillAmount(billAmount * 3)
                        }
                      }}
                      className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                        billCycle === 'quarterly'
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'hover:text-slate-900'
                      }`}
                    >
                      Quarterly
                    </button>
                  </div>
                </div>

                {/* Direct Number Input Field */}
                <div className="relative flex items-center">
                  <div className="absolute left-4 flex items-center pointer-events-none text-amber-500 font-extrabold text-xl">
                    <DollarSign className="h-6 w-6 text-amber-500" />
                  </div>
                  <input
                    id="bill-amount-input"
                    type="number"
                    min={10}
                    max={20000}
                    step={10}
                    value={billAmount || ''}
                    onChange={(e) => {
                      const val = e.target.value === '' ? 0 : Number(e.target.value)
                      setBillAmount(val)
                    }}
                    placeholder="Enter bill amount (e.g. 350)"
                    className="w-full h-15 pl-12 pr-32 rounded-2xl bg-amber-50/40 border-2 border-amber-300 text-2xl sm:text-3xl font-black text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-500/20 transition-all shadow-inner"
                  />
                  <div className="absolute right-4 text-xs font-extrabold uppercase tracking-wider text-slate-600 bg-white px-3 py-1.5 rounded-xl border border-slate-200/90 shadow-xs pointer-events-none">
                    {billCycle === 'monthly' ? 'AUD / Month' : 'AUD / Quarter'}
                  </div>
                </div>

              

            
              </div>

              {/* 3. Suburb / Postcode Input Field */}
              <div>
                <label htmlFor="postcode-input" className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block mb-2">
                  Step 3 • Installation Postcode / Suburb
                </label>
                <div className="relative flex items-center">
                  <MapPin className="absolute left-3.5 h-4 w-4 text-amber-500 pointer-events-none" />
                  <input
                    id="postcode-input"
                    type="text"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    placeholder="e.g. 3000 Melbourne, 3121 Richmond, 3805..."
                    className="w-full h-11 pl-10 pr-28 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                  />
                  <span className="absolute right-3 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200/80">
                    STC Zone 3 Active
                  </span>
                </div>
              </div>

              {/* 4. Roof Sun Orientation Selector */}
              <div>
                <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500 block mb-3">
                  Step 4 • Roof Aspect & Sun Exposure
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setRoofOrientation('optimal')}
                    className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                      roofOrientation === 'optimal'
                        ? 'border-amber-500 bg-amber-50/50 text-slate-900 ring-2 ring-amber-500/20 shadow-xs'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <Compass className="h-4 w-4 mx-auto mb-1 text-amber-500" />
                    <div className="text-xs font-bold">North Facing</div>
                    <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">100% Yield</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setRoofOrientation('balanced')}
                    className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                      roofOrientation === 'balanced'
                        ? 'border-amber-500 bg-amber-50/50 text-slate-900 ring-2 ring-amber-500/20 shadow-xs'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <Sun className="h-4 w-4 mx-auto mb-1 text-orange-500" />
                    <div className="text-xs font-bold">East / West</div>
                    <div className="text-[10px] text-slate-500 font-medium mt-0.5">92% Yield</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setRoofOrientation('shaded')}
                    className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                      roofOrientation === 'shaded'
                        ? 'border-amber-500 bg-amber-50/50 text-slate-900 ring-2 ring-amber-500/20 shadow-xs'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <TreePine className="h-4 w-4 mx-auto mb-1 text-slate-400" />
                    <div className="text-xs font-bold">Partial Shade</div>
                    <div className="text-[10px] text-slate-500 font-medium mt-0.5">Optimized</div>
                  </button>
                </div>
              </div>

              {/* 5. Battery Storage Add-On Toggle */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent border border-emerald-500/25 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <BatteryCharging className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-bold text-slate-900">
                        Include Battery Storage (Tesla / Alpha ESS)
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-extrabold">
                        +Blackout Safe
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Store daytime solar power for night use and protect against grid outages.
                    </p>
                  </div>
                </div>

                {/* Toggle Button */}
                <button
                  type="button"
                  onClick={() => setHasBattery(!hasBattery)}
                  aria-pressed={hasBattery}
                  className={`relative inline-flex h-7 w-13 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    hasBattery ? 'bg-emerald-600' : 'bg-slate-300'
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                      hasBattery ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

            </div>
          </div>

          {/* ---------------- RIGHT COLUMN: RESULTS & RECOMMENDATIONS (MAGIC UI) ---------------- */}
          <div className="lg:col-span-5 relative">
            <MagicCard
              gradientColor={propertyType === 'residential' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(37, 99, 235, 0.15)'}
              gradientSize={400}
              className="rounded-xl bg-slate-900 text-white border border-slate-800 p-6 sm:p-4 shadow-2xl relative overflow-hidden"
            >
              {/* Magic UI Animated Border Beam */}
              <BorderBeam
                size={280}
                duration={10}
                colorFrom="#f59e0b"
                colorTo="#10b981"
                borderWidth={2}
              />

              {/* Card Header & Badge */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-5">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400">
                    Engineered System Match
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-0.5">
                    {calculation.systemKw} kW System
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 block font-medium">Configuration</span>
                  <span className="text-xs font-bold text-amber-300">
                    {calculation.panelsCount} x 415W Tier-1
                  </span>
                </div>
              </div>

              {/* Big Savings Metric with NumberTicker */}
              <div className="py-6 border-b border-slate-800">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                  Estimated Annual Electricity Savings
                </span>
                <div className="flex items-baseline gap-1 text-4xl sm:text-5xl font-black text-white tracking-tight">
                  <span className="text-amber-400">$</span>
                  <NumberTicker
                    value={calculation.annualSavings}
                    className="text-white"
                  />
                  <span className="text-sm font-semibold text-slate-400 ml-1">/ year</span>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-slate-300">
                  <span>
                    New Bill: <strong className="text-emerald-400">${calculation.newMonthlyBill}/mo</strong>
                    <span className="text-slate-500 ml-1">(${calculation.newQuarterlyBill}/qtr)</span>
                  </span>
                  <span className="text-emerald-400 font-bold">
                    ~{Math.round(((calculation.annualBill - (calculation.newMonthlyBill * 12)) / calculation.annualBill) * 100)}% Cheaper
                  </span>
                </div>
              </div>

              {/* Grid of Key Financial & Engineering Metrics */}
              <div className="grid grid-cols-2 gap-4 py-5 border-b border-slate-800">
                <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                    <TrendingDown className="h-3.5 w-3.5 text-amber-400" />
                    <span>Estimated Payback</span>
                  </div>
                  <div className="text-lg font-black text-white mt-1">
                    {calculation.paybackYears} Years
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                    <DollarSign className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Govt STC Rebate</span>
                  </div>
                  <div className="text-lg font-black text-emerald-400 mt-1">
                    ~${calculation.governmentRebate.toLocaleString()}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                    <Zap className="h-3.5 w-3.5 text-blue-400" />
                    <span>Inverter Size</span>
                  </div>
                  <div className="text-lg font-black text-white mt-1">
                    {calculation.inverterKw} kW Smart
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                    <TreePine className="h-3.5 w-3.5 text-teal-400" />
                    <span>CO₂ Offset</span>
                  </div>
                  <div className="text-lg font-black text-teal-300 mt-1">
                    ~{calculation.co2OffsetTonnes} T / yr
                  </div>
                </div>
              </div>

              

              {/* Instant Quote Delivery Input Field */}
              <div className="pt-5 space-y-3">
                <form onSubmit={handleSendQuote} className="space-y-2">
                  <label htmlFor="quote-phone-input" className="text-[11px] font-bold text-slate-300 block">
                    Get this custom {calculation.systemKw}kW breakdown via SMS / Call:
                  </label>
                  <div className="relative flex items-center">
                    <input
                      id="quote-phone-input"
                      type="tel"
                      value={userPhone}
                      onChange={(e) => setUserPhone(e.target.value)}
                      placeholder="Enter mobile (e.g. 0430 015 017)"
                      className="w-full h-11 pl-4 pr-28 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                    />
                    <button
                      type="submit"
                      disabled={isQuoteSent}
                      className="absolute right-1 px-4 h-9 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition-all cursor-pointer active:scale-95 disabled:opacity-75"
                    >
                      <span>{isQuoteSent ? 'Connecting...' : 'Request'}</span>
                      <Send className="h-3 w-3" />
                    </button>
                  </div>
                  {isQuoteSent && (
                    <p className="text-[11px] text-emerald-400 font-semibold animate-pulse">
                      ✓ Connecting you to Sky Solar Engineers...
                    </p>
                  )}
                </form>

                <a
                  href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, '')}`}
                  className="w-full flex items-center justify-center gap-2.5 h-12 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm shadow-lg shadow-orange-500/30 transition-all duration-200 active:scale-95"
                >
                  <PhoneCall className="h-4 w-4" />
                  <span>Call {CONTACT_INFO.phone1} Directly</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                
              </div>

            </MagicCard>
          </div>

        </div>

      </div>
    </section>
  )
}

export default SolarCalculatorSection
