import React, { useState, useEffect } from 'react'
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
  ArrowRight
} from 'lucide-react'
import { useInquiryModal } from '../../context'
import logoImg from '../../assets/logo.png'

const SERVICE_OPTIONS = [
  { label: 'Residential Rooftop Solar (6.6kW - 13.2kW)', icon: Home },
  { label: 'Commercial & Industrial Solar Arrays', icon: Building2 },
  { label: 'Battery Storage (Tesla Powerwall / Alpha ESS)', icon: BatteryCharging },
  { label: 'EV Charger Installation & Upgrades', icon: Zap },
  { label: 'CEC Electrical Service & Switchboard Upgrade', icon: Sun },
]

export function InquiryEnvelopeModal() {
  const { isOpen, closeInquiryModal, initialService } = useInquiryModal()

  // Animation Stage:
  // 0 = sealed (envelope closed with gold wax seal)
  // 1 = unsealing (top flap flips open, seal spins & fades)
  // 2 = emerging (letter slides up out of mailbox)
  // 3 = overlaid (letter overlays on top of mailbox, 100% proper, clear & visible)
  const [animStage, setAnimStage] = useState<0 | 1 | 2 | 3>(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: SERVICE_OPTIONS[0].label,
    bill: '',
    notes: ''
  })

  // Choreographed Envelope -> Form sequence
  useEffect(() => {
    if (isOpen) {
      if (initialService) {
        const matched = SERVICE_OPTIONS.find(s => s.label.toLowerCase().includes(initialService.toLowerCase()))
        if (matched) {
          setFormData(prev => ({ ...prev, service: matched.label }))
        }
      }

      setAnimStage(0)
      setIsSubmitted(false)
      setIsSubmitting(false)

      // 1. Stage 1: Unseal (open top flap & melt wax seal) after 250ms
      const t1 = setTimeout(() => {
        setAnimStage(1)
      }, 300)

      // 2. Stage 2: Slide letter upward out of mailbox slot after 800ms
      const t2 = setTimeout(() => {
        setAnimStage(2)
      }, 850)

      // 3. Stage 3: Fully overlay mailbox so form is clear, sharp & interactive after 1400ms
      const t3 = setTimeout(() => {
        setAnimStage(3)
      }, 1400)

      return () => {
        clearTimeout(t1)
        clearTimeout(t2)
        clearTimeout(t3)
      }
    } else {
      setAnimStage(0)
      setIsSubmitted(false)
      setIsSubmitting(false)
    }
  }, [isOpen, initialService])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeInquiryModal()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, closeInquiryModal])

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.phone) return

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 800)
  }

  // Fast forward animation if user clicks directly on envelope or seal
  const handleEnvelopeClick = () => {
    if (animStage < 3) {
      setAnimStage(3)
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Solar Inquiry Form"
      className="fixed inset-0 z-[100000] flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-y-auto bg-slate-950/85 backdrop-blur-md transition-all duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeInquiryModal()
      }}
    >
      {/* Floating Close Button */}
      <button
        onClick={closeInquiryModal}
        className="fixed top-4 right-4 z-[100020] p-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 shadow-2xl transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500"
        aria-label="Close Inquiry Dialog"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Main Container */}
      <div className="relative w-full max-w-2xl my-auto flex flex-col items-center">

        {/* =========================================================================
            1. THE MAILBOX / ENVELOPE (Animated Base)
           ========================================================================= */}
        <div
          onClick={handleEnvelopeClick}
          className={`relative w-[320px] sm:w-[420px] aspect-[16/10] transition-all duration-700 select-none cursor-pointer ${
            animStage === 3
              ? 'scale-95 opacity-40 blur-[1px] translate-y-10 sm:translate-y-16 -mb-64 pointer-events-none'
              : animStage === 2
              ? 'scale-100 opacity-90 translate-y-4'
              : 'scale-105 opacity-100 shadow-2xl'
          }`}
        >
          {/* Envelope Frame */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/80 shadow-2xl">
            {/* Ambient interior glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-black" />

            {/* Left Flap */}
            <div className="transition-all duration-700 absolute inset-0 bg-neutral-900 [clip-path:polygon(50%_50%,_0_0,_0_100%)] z-10" />

            {/* Right Flap */}
            <div className="transition-all duration-700 absolute inset-0 bg-neutral-800 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)] z-10" />

            {/* Bottom Flap */}
            <div className="transition-all duration-700 absolute inset-0 bg-neutral-900 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)] z-20 shadow-md" />

            {/* Top Flap (Opens upward smoothly in Stage >= 1) */}
            <div
              className={`transition-all duration-700 absolute inset-0 z-30 origin-top ${
                animStage >= 1
                  ? 'bg-neutral-800/90 [clip-path:polygon(50%_0%,_100%_0,_0_0)] -translate-y-1'
                  : 'bg-neutral-800 [clip-path:polygon(50%_50%,_100%_0,_0_0)]'
              }`}
            />

            {/* Gold Wax Seal (Spins, shrinks & fades away in Stage >= 1) */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-14 h-14 aspect-square rounded-full text-[11px] flex items-center justify-center font-black tracking-widest text-amber-950 bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 border-2 border-amber-200/90 shadow-xl shadow-amber-500/50 transition-all duration-700 [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] ${
                animStage >= 1
                  ? 'opacity-0 scale-0 rotate-180 pointer-events-none'
                  : 'opacity-100 scale-100 rotate-0 hover:scale-110'
              }`}
            >
              SKY
            </div>

            {/* Envelope Opening Status Label */}
            <div className="absolute bottom-2 left-0 right-0 z-20 text-center">
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400/80">
                {animStage === 0
                  ? 'Click Seal to Open Mailbox'
                  : animStage === 1
                  ? 'Opening Letter...'
                  : 'Sky Electrical & Solar'}
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            2. THE INQUIRY FORM (Slides UP and OVERLAYS the mailbox properly)
           ========================================================================= */}
        <div
          className={`relative z-50 w-full max-w-xl transition-all duration-700 ease-out ${
            animStage === 0
              ? 'opacity-0 translate-y-24 scale-90 pointer-events-none'
              : animStage === 1
              ? 'opacity-50 translate-y-16 scale-95 pointer-events-none'
              : animStage === 2
              ? 'opacity-90 translate-y-4 scale-98 pointer-events-none'
              : 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          }`}
        >
          {/* Pristine Crisp White Form Card with subtle amber border */}
          <div className="w-full bg-white text-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200/90 p-5 sm:p-7 md:p-8 relative overflow-hidden">
            
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500" />

            {isSubmitted ? (
              /* Success Confirmation */
              <div className="py-8 sm:py-10 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center text-emerald-600 shadow-xl shadow-emerald-500/20">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Inquiry Dispatched!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900 font-bold">{formData.name}</strong>. Your inquiry has been delivered directly to our Australian CEC accredited solar team.
                </p>

                <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/90 text-left max-w-md mx-auto text-xs text-amber-950 space-y-2">
                  <div className="flex items-center gap-1.5 font-bold text-amber-900">
                    <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Included in Your Complimentary Review:</span>
                  </div>
                  <p>• 3D satellite roof scan & solar yield simulation.</p>
                  <p>• Exact federal STC & Victorian battery rebate deductions.</p>
                  <p>• Fast quote consultation to <strong>{formData.phone}</strong> within 2 hours.</p>
                </div>

                <div className="pt-4 flex items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={closeInquiryModal}
                    className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all shadow-md cursor-pointer hover:shadow-lg active:scale-95"
                  >
                    Done & Return to Site
                  </button>
                </div>
              </div>
            ) : (
              /* The Full, High-Contrast, Clearly Visible Inquiry Form */
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Form Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={logoImg}
                      alt="Sky Electrical & Solar Logo"
                      className="h-10 w-auto object-contain"
                    />
                    <div>
                      <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-1.5">
                        <span>Solar & Battery Inquiry</span>
                        <Sparkles className="w-4 h-4 text-amber-500" />
                      </h2>
                      <p className="text-xs text-slate-500 font-medium">
                        Direct Inquiry • CEC Accredited Solar Engineers
                      </p>
                    </div>
                  </div>

                  <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700 border border-emerald-200/80">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>$0 Upfront Options</span>
                  </span>
                </div>

                {/* Name & Phone Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Henderson"
                        className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 0412 345 678"
                        className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all shadow-xs"
                      />
                    </div>
                  </div>
                </div>

                {/* Email & Quarterly Electricity Bill */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address <span className="text-slate-400 font-normal">(for quote PDF)</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com.au"
                        className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Estimated Power Bill <span className="text-slate-400 font-normal">(quarterly)</span>
                    </label>
                    <div className="relative">
                      <span className="text-xs font-bold text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">$</span>
                      <input
                        type="text"
                        value={formData.bill}
                        onChange={(e) => setFormData({ ...formData, bill: e.target.value })}
                        placeholder="e.g. $650 / quarter"
                        className="w-full pl-7 pr-3 py-2.5 text-sm rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all shadow-xs"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    System / Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all shadow-xs"
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt.label} value={opt.label}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Property & Roof Details */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Property Details or Questions <span className="text-slate-400 font-normal">(e.g. 2-storey, tile roof, battery query)</span>
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us about your property, roof type, or any specific requirements..."
                    className="w-full p-2.5 text-sm rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all resize-none shadow-xs"
                  />
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-extrabold text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 shadow-lg shadow-amber-500/25 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>Dispatching to Solar Engineers...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry & Claim Available Rebates</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="mt-2.5 flex items-center justify-center gap-4 text-[11px] text-slate-500">
                    <span className="flex items-center gap-1 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      100% Free & No Obligation
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-medium">
                      <Zap className="w-3.5 h-3.5 text-amber-500" />
                      Licensed Master Electricians
                    </span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default InquiryEnvelopeModal