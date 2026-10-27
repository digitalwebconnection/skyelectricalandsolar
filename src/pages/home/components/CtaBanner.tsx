import { Clock, ArrowRight, PhoneCall } from 'lucide-react'
import { CONTACT_INFO } from '../../../constants'
import { ShimmerButton } from '../../../components/common/ShimmerButton'

export function CtaBanner() {
  return (
    <section className="bg-gradient-to-r from-slate-900 via-[#071d32] to-slate-900 py-16 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      <div className="mx-auto max-w-5xl px-4 text-center relative z-10">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 px-3.5 py-1 text-xs font-semibold text-amber-300 mb-4">
          <Clock className="h-3.5 w-3.5" />
          Limited Monthly Rebate Allocation
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Ready to Cut Your Power Bills with Sky Electrical & Solar?
        </h2>
        <p className="mt-4 text-slate-300 text-base max-w-2xl mx-auto">
          Contact our licensed solar technicians today for a free on-site roof analysis and customized solar savings report.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <ShimmerButton
            className="h-12 px-8 text-base font-bold shadow-amber-500/30"
            onClick={() => {
              window.location.href = `tel:${CONTACT_INFO.phone1.replace(/\s/g, '')}`
            }}
          >
            <span>Get Your Free Solar Quote</span>
            <ArrowRight className="h-4 w-4" />
          </ShimmerButton>

          <a
            href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, '')}`}
            className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-slate-700 bg-slate-800/80 px-6 text-sm font-semibold text-white transition-all hover:bg-slate-700 hover:border-slate-600"
          >
            <PhoneCall className="h-4 w-4 text-orange-400" />
            <span>Call {CONTACT_INFO.phone1}</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default CtaBanner
