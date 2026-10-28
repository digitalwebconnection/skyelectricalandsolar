import { useState, useEffect } from 'react'
import {
  Phone,
  Mail,
  Menu,
  X,
  ChevronRight,
  Sun,
  Sparkles,
} from 'lucide-react'
import logoImg from '../../assets/logo.png'
import { CONTACT_INFO, NAV_ITEMS } from '../../constants'
import { ShimmerButton } from '../common'
import { useInquiryModal } from '../../context'

export function Header() {
  const { openInquiryModal } = useInquiryModal()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('Home')
  const [showTopBar, setShowTopBar] = useState(true)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // At or near the top of the page, always show top bar
      if (currentScrollY <= 20) {
        setShowTopBar(true)
      } else {
        // Scrolling down -> hide top bar
        // Scrolling up -> show top bar
        if (currentScrollY > lastScrollY && currentScrollY > 40) {
          setShowTopBar(false)
        } else if (currentScrollY < lastScrollY - 8) {
          setShowTopBar(true)
        }
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Fixed Header: hardware-accelerated transform without causing any page layout shifts */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
          showTopBar ? 'translate-y-0' : '-translate-y-10'
        }`}
      >
        {/* Top Solar Utility & Quick Contact Strip (40px) */}
        <div className="h-10 w-full bg-slate-50 border-b border-slate-200/80 text-xs text-slate-600 overflow-hidden shadow-xs">
          <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Left Solar Energy Highlights */}
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700 border border-emerald-200/80">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                CEC Accredited Solar Installers
              </span>

              <span className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-medium text-amber-800 border border-amber-200/60">
                <Sun className="h-3.5 w-3.5 text-amber-600" />
                <span>Solar Rebates & Government Incentives Available</span>
              </span>
            </div>

            {/* Right Direct Contacts */}
            <div className="flex items-center gap-4 text-xs ml-auto sm:ml-0">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="hidden sm:inline-flex items-center gap-1.5 text-slate-600 hover:text-orange-600 transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-orange-500" />
                <span className="hidden md:inline">{CONTACT_INFO.email}</span>
              </a>

              <div className="flex items-center gap-2 pl-3 border-l border-slate-200">
                <Phone className="h-3.5 w-3.5 text-orange-500" />
                <span className="text-slate-500 hidden xs:inline">Solar Helpline:</span>
                <a
                  href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, '')}`}
                  className="font-bold text-slate-900 hover:text-orange-600 transition-colors tracking-wide"
                >
                  {CONTACT_INFO.phone1}
                </a>
                <span className="text-slate-300 hidden sm:inline">|</span>
                <a
                  href={`tel:${CONTACT_INFO.phone2.replace(/\s/g, '')}`}
                  className="hidden sm:inline font-bold text-slate-700 hover:text-orange-600 transition-colors tracking-wide"
                >
                  {CONTACT_INFO.phone2}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar (80px) */}
        <nav className="relative bg-[#071d32] border-b border-slate-800 shadow-md">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Logo with clean high-contrast container */}
            <a
              href="/"
              className="group flex items-center transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center rounded-2xl bg-[#071d32] px-4 py-2 transition-shadow">
                <img
                  src={logoImg}
                  alt="Sky Electrical & Solar"
                  className="h-10 sm:h-14  w-auto object-contain filter drop-shadow-[0_1px_4px_rgba(240,90,40,0.3)]"
                />
              </div>
            </a>

            {/* Floating White Navigation Menu Pill */}
            <div className="hidden lg:flex items-center gap-1 bg-white p-1.5 rounded-full shadow-lg border border-slate-100">
              {NAV_ITEMS.map((item) => {
                const isActive = activeItem === item.label
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      setActiveItem(item.label)
                    }}
                    className={`relative px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold shadow-sm'
                        : 'text-slate-700 hover:text-orange-600 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </a>
                )
              })}
            </div>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <ShimmerButton
                onClick={() => openInquiryModal()}
              >
                <Sparkles className="h-4 w-4 text-amber-200" />
                <span>Get Free Solar Quote</span>
              </ShimmerButton>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center rounded-xl p-2.5 text-slate-200 bg-slate-800/80 hover:text-orange-400 hover:bg-slate-800 focus:outline-none transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-orange-400" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-slate-800 bg-[#071d32] px-5 pt-4 pb-8 space-y-4 shadow-xl">
              <div className="space-y-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeItem === item.label
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => {
                        setActiveItem(item.label)
                        setMobileMenuOpen(false)
                      }}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                        isActive
                          ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                          : 'text-slate-200 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className={`h-4 w-4 ${isActive ? 'text-orange-400' : 'text-slate-400'}`} />
                    </a>
                  )
                })}
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <a
                  href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, '')}`}
                  className="flex items-center justify-center gap-2.5 rounded-xl bg-slate-800/80 border border-slate-700 py-3 text-sm font-semibold text-slate-200 hover:text-orange-400 hover:border-orange-400 transition-colors"
                >
                  <Phone className="h-4 w-4 text-orange-400" />
                  <span>Call {CONTACT_INFO.phone1}</span>
                </a>

                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center justify-center gap-2.5 rounded-xl bg-slate-800/80 border border-slate-700 py-3 text-xs font-medium text-slate-300"
                >
                  <Mail className="h-4 w-4 text-orange-400" />
                  <span>{CONTACT_INFO.email}</span>
                </a>

                <ShimmerButton
                  onClick={() => {
                    setMobileMenuOpen(false)
                    openInquiryModal()
                  }}
                  className="w-full py-3.5"
                >
                  <Sparkles className="h-4 w-4 text-amber-200" />
                  <span>Get Free Solar Quote</span>
                </ShimmerButton>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Permanent Static Spacer: Guarantees ZERO document layout shift or jitter during header transforms */}
      <div className="h-[120px] w-full shrink-0" aria-hidden="true" />
    </>
  )
}

export default Header
