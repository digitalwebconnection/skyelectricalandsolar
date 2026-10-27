import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowUpRight,
  CheckCircle2,
  Zap,
  ChevronUp,
} from 'lucide-react'
import logoImg from '../../assets/logo.png'
import {
  APP_NAME,
  COMPANY_LEGAL_NAME,
  CONTACT_INFO,
  LEGAL_LINKS,
  NAV_ITEMS,
} from '../../constants'

const SOLAR_SERVICES = [
  { label: 'Residential Solar (6.6kW–13.2kW)', href: '/services' },
  { label: 'Commercial & Industrial Arrays', href: '/services' },
  { label: 'Battery Storage (Tesla & Alpha ESS)', href: '/services' },
  { label: 'EV Charger Installation', href: '/services' },
  { label: 'Inverter Diagnostics & Upgrades', href: '/services' },
  { label: 'Switchboard & Safety Compliance', href: '/services' },
]

const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  const scrollToTop = () => {
    const lenis = (window as unknown as { lenis?: { scrollTo: (target: number, options?: object) => void } }).lenis
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.3 })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer
      id="footer-contact"
      aria-label="Footer"
      className="relative w-full bg-[#05111e] text-slate-300 border-t border-slate-800/80 overflow-hidden"
    >
      {/* Reusable SVG Definition for Squircle ClipPath */}
      <svg width={0} height={0} style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5" />
          </clipPath>
        </defs>
      </svg>

      {/* Radiant Solar Accent Line at Top */}
      <div className="h-1 w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500" />

      {/* Subtle Ambient Background Gradients */}
      <div className="pointer-events-none absolute -top-40 right-1/4 w-[600px] h-[350px] bg-gradient-to-b from-amber-500/5 via-orange-500/5 to-transparent rounded-full blur-3xl -z-10" />
      <div className="pointer-events-none absolute bottom-0 left-10 w-[500px] h-[350px] bg-sky-500/5 rounded-full blur-[140px] -z-10" />

      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 lg:px-8">
        {/* ================= MAIN 4-COLUMN FOOTER GRID (NO CTA) ================= */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 pb-14 border-b border-slate-800/80">
          
          {/* Column 1: Brand Info & Social Dock (Col span 4) */}
          <div className="space-y-6 lg:col-span-4">
            <a href="/" className="inline-block transition-transform hover:scale-[1.01]">
              <div className="inline-flex items-center ">
                <img
                  src={logoImg}
                  alt={APP_NAME}
                  className="h-24 w-auto max-w-100 object-contain drop-shadow-[0_2px_6px_rgba(240,90,40,0.35)]"
                />
              </div>
            </a>

         

          

            {/* Social Media Squircle Animated Dock */}
            <div className="pt-2">
              <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Connect With Our Team
              </span>
              
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl" />
                <div className="relative flex items-end gap-x-2.5 p-2">
                  
                  {/* Facebook */}
                  <a
                    href={CONTACT_INFO.socials.facebook}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="relative group"
                  >
                    <div
                      style={{ clipPath: 'url(#squircleClip)' }}
                      className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg border border-blue-500/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </div>
                  </a>

                  {/* YouTube */}
                  <a
                    href={CONTACT_INFO.socials.youtube}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="YouTube"
                    className="relative group"
                  >
                    <div
                      style={{ clipPath: 'url(#squircleClip)' }}
                      className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg border border-red-500/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </div>
                  </a>

                  {/* X (formerly Twitter) */}
                  <a
                    href={CONTACT_INFO.socials.x}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="X"
                    className="relative group"
                  >
                    <div
                      style={{ clipPath: 'url(#squircleClip)' }}
                      className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl flex items-center justify-center shadow-lg border border-slate-600/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </div>
                  </a>

                  {/* Direct Phone Call */}
                  <a
                    href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, '')}`}
                    aria-label="Direct Phone Line"
                    className="relative group"
                  >
                    <div
                      style={{ clipPath: 'url(#squircleClip)' }}
                      className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg border border-amber-400/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                    >
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                  </a>

                </div>
              </div>
            </div>

          </div>

          {/* Column 2: Quick Links (Col span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              <span>Navigation</span>
            </h4>
            <ul className="space-y-3 text-sm">
              {NAV_ITEMS.map((item, index) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`group inline-flex items-center gap-1.5 transition-all duration-200 hover:translate-x-1 ${
                      index === 0
                        ? 'text-amber-400 font-bold hover:text-amber-300'
                        : 'text-slate-400 hover:text-amber-400'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solar & Battery Solutions (Col span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              <span>Solar Solutions</span>
            </h4>
            <ul className="space-y-3 text-sm">
              {SOLAR_SERVICES.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="group inline-flex items-center gap-1.5 text-slate-400 hover:text-orange-400 transition-all duration-200 hover:translate-x-1"
                  >
                    <span>{service.label}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-orange-400" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Legal Links below services */}
            <div className="mt-6 pt-5 border-t border-slate-800">
              <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Legal & Privacy
              </span>
              <ul className="space-y-2 text-xs">
                {LEGAL_LINKS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Contact & Service Areas (Col span 3) */}
          <div className="space-y-4 lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>Get in Touch</span>
            </h4>

            {/* Phone 1 */}
            <a
              href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, '')}`}
              className="group flex items-center gap-3 rounded-2xl border border-slate-800 bg-[#091b2e]/60 p-3 transition-all hover:border-amber-500/50 hover:bg-[#0c243c]"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 transition-colors group-hover:bg-amber-500 group-hover:text-white">
                <Phone className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-slate-400 font-medium">Customer Hotline</span>
                <span className="font-bold text-white group-hover:text-amber-400 transition-colors text-sm">
                  {CONTACT_INFO.phone1}
                </span>
              </div>
            </a>

            {/* Phone 2 */}
            <a
              href={`tel:${CONTACT_INFO.phone2.replace(/\s/g, '')}`}
              className="group flex items-center gap-3 rounded-2xl border border-slate-800 bg-[#091b2e]/60 p-3 transition-all hover:border-orange-500/50 hover:bg-[#0c243c]"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                <Phone className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-slate-400 font-medium">Direct Engineering Line</span>
                <span className="font-bold text-white group-hover:text-orange-400 transition-colors text-sm">
                  {CONTACT_INFO.phone2}
                </span>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="group flex items-center gap-3 rounded-2xl border border-slate-800 bg-[#091b2e]/60 p-3 transition-all hover:border-blue-500/50 hover:bg-[#0c243c]"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <Mail className="h-4 w-4" />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-[11px] text-slate-400 font-medium">Email Inquiries</span>
                <span className="truncate text-xs font-bold text-white group-hover:text-blue-400 transition-colors">
                  {CONTACT_INFO.email}
                </span>
              </div>
            </a>

            {/* Operating Hours & Location */}
            <div className="pt-2 space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-slate-500" />
                <span>Mon – Sat: 7:00 AM – 6:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-slate-500" />
                <span>Melbourne & All Regional Victoria</span>
              </div>
            </div>
          </div>

        </div>

        {/* ================= COMPLIANCE & ACCREDITATIONS BAR ================= */}
        <div className="py-6 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              Clean Energy Council Approved
            </span>
            <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
              <Zap className="h-4 w-4 text-amber-400" />
              A-Grade Licensed Electricians
            </span>
            <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
              <ShieldCheck className="h-4 w-4 text-orange-400" />
              100% Workmanship Warranty
            </span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <ChevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* ================= BOTTOM COPYRIGHT & LEGAL ================= */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {CURRENT_YEAR} {COMPANY_LEGAL_NAME}. All rights reserved.</p>
          <p className="text-center md:text-right">
            Designed for high performance, compliance, and clean energy independence across Victoria.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
