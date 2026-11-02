import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, Menu, X, ChevronRight, Sun, Sparkles } from "lucide-react";
import logoImg from "../../assets/logo.webp";
import { CONTACT_INFO, NAV_ITEMS } from "../../constants";
import { ShimmerButton } from "../common";
import { useInquiryModal, useNavigation } from "../../context";

export function Header() {
  const { openInquiryModal } = useInquiryModal();
  const { currentPath, navigate } = useNavigation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const isItemActive = (href: string, label: string) => {
    const item = NAV_ITEMS.find((n) => n.label === label);
    if (item?.disabled) return false;
    if (label === "Home" && (currentPath === "/" || currentPath === "")) return true;
    if (label === "About Us" && (currentPath === "/about-us" || currentPath.includes("about")))
      return true;
    if (label === "Contact Us" && currentPath.includes("contact")) return true;
    if (
      label === "Services" &&
      (currentPath === "/services" ||
        currentPath.startsWith("/services") ||
        currentPath.startsWith("/service"))
    )
      return true;
    return currentPath === href;
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // At or near the top of the page, always show top bar
      if (currentScrollY <= 20) {
        setShowTopBar(true);
      } else {
        // Scrolling down -> hide top bar
        // Scrolling up -> show top bar
        if (currentScrollY > lastScrollY && currentScrollY > 40) {
          setShowTopBar(false);
        } else if (currentScrollY < lastScrollY - 8) {
          setShowTopBar(true);
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Header: hardware-accelerated transform without causing any page layout shifts */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
          showTopBar ? "translate-y-0" : "-translate-y-10"
        }`}
      >
        {/* Top Solar Utility & Quick Contact Strip (40px) */}
        <div className="h-10 w-full bg-slate-50 border-b border-slate-200/80 text-xs text-slate-600 overflow-hidden shadow-xs relative">
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
                <Sun className="h-3.5 w-3.5 text-amber-600 animate-[spin_12s_linear_infinite]" />
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
                  href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`}
                  className="font-bold text-slate-900 hover:text-orange-600 transition-colors tracking-wide"
                >
                  {CONTACT_INFO.phone1}
                </a>
                <span className="text-slate-300 hidden sm:inline">|</span>
                <a
                  href={`tel:${CONTACT_INFO.phone2.replace(/\s/g, "")}`}
                  className="hidden sm:inline font-bold text-slate-700 hover:text-orange-600 transition-colors tracking-wide"
                >
                  {CONTACT_INFO.phone2}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar (80px) with Glassmorphism, Ambient Sunlight Aura & Energy Beam */}
        <nav className="relative bg-[#071d32]/95 backdrop-blur-xl border-b border-slate-800/80 shadow-md">
          {/* Ambient Sunlight Energy Glow behind Navigation */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-130 h-24 bg-linear-to-r from-orange-500/10 via-amber-400/15 to-orange-500/10 rounded-full blur-2xl z-0" />

          {/* Animated Electrical Border Beam on Navbar Bottom */}
          <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-orange-500/35 to-transparent overflow-hidden pointer-events-none">
            <motion.div
              animate={{ x: ["-100%", "300%"] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-48 h-full bg-linear-to-r from-transparent via-[#ff9200] to-transparent shadow-[0_0_8px_rgba(255,146,0,0.8)]"
            />
          </div>

          <div className="relative z-10 mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Logo with clean high-contrast container */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
              className="group flex items-center transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <div className="flex items-center  transition-shadow">
                <img
                  src={logoImg}
                  alt="Sky Electrical & Solar"
                  className="h-10 sm:h-14 w-auto object-contain filter drop-shadow-[0_1px_4px_rgba(240,90,40,0.3)] group-hover:drop-shadow-[0_2px_12px_rgba(249,115,22,0.45)] transition-all"
                />
              </div>
            </a>

            {/* Floating White Navigation Menu Pill with Gliding Animations */}
            <div
              onMouseLeave={() => setHoveredItem(null)}
              className="hidden lg:flex items-center gap-1 bg-white/95 backdrop-blur-md p-1.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.18)] border border-orange-200/60 ring-1 ring-orange-500/10 relative"
            >
              {NAV_ITEMS.map((item) => {
                const isDisabled = Boolean(item.disabled);
                const isActive = !isDisabled && isItemActive(item.href, item.label);
                const isHovered = !isDisabled && hoveredItem === item.label;

                if (isDisabled) {
                  return (
                    <span
                      key={item.label}
                      className="relative px-4.5 py-2 rounded-full text-[14px] font-semibold text-slate-400 select-none cursor-default"
                      title={`${item.label} (Coming Soon)`}
                    >
                      <span className="relative z-10">{item.label}</span>
                    </span>
                  );
                }

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onMouseEnter={() => setHoveredItem(item.label)}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(item.href);
                    }}
                    className={`relative px-4.5 py-2 rounded-full text-[14px] font-semibold transition-colors duration-200 cursor-pointer select-none ${
                      isActive ? "text-white" : "text-slate-700 hover:text-orange-600"
                    }`}
                  >
                    {/* Active Gliding Background Pill */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-full bg-linear-to-r from-amber-500 via-orange-500 to-solar-orange shadow-md shadow-orange-500/35"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}

                    {/* Smooth Hover Gliding Background (when inactive) */}
                    {!isActive && isHovered && (
                      <motion.div
                        layoutId="hoverNavIndicator"
                        className="absolute inset-0 rounded-full bg-orange-50/90"
                        transition={{ type: "spring", stiffness: 420, damping: 32 }}
                      />
                    )}

                    {/* Label & Active Live Pulse Dot */}
                    <span className="relative z-10 flex items-center gap-1.5">
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-white/90 animate-pulse shadow-xs" />
                      )}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <ShimmerButton onClick={() => openInquiryModal()}>
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

          {/* Mobile Navigation Drawer with Smooth Slide Transition */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="lg:hidden border-t border-slate-800 bg-[#071d32] px-5 pt-4 pb-8 space-y-4 shadow-xl overflow-hidden"
              >
                <div className="space-y-1">
                  {NAV_ITEMS.map((item) => {
                    const isDisabled = Boolean(item.disabled);
                    const isActive = !isDisabled && isItemActive(item.href, item.label);

                    if (isDisabled) {
                      return (
                        <div
                          key={item.label}
                          className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-slate-500 select-none cursor-default"
                        >
                          <span>{item.label}</span>
                          <span className="text-[11px] text-slate-500 font-normal">Coming Soon</span>
                        </div>
                      );
                    }

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(item.href);
                          setMobileMenuOpen(false);
                        }}
                        className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all cursor-pointer ${
                          isActive
                            ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                            : "text-slate-200 hover:bg-slate-800 hover:text-white"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          {isActive && (
                            <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping" />
                          )}
                          <span>{item.label}</span>
                        </span>
                        <ChevronRight
                          className={`h-4 w-4 ${isActive ? "text-orange-400" : "text-slate-400"}`}
                        />
                      </a>
                    );
                  })}
                </div>

                <div className="pt-4 border-t border-slate-800 space-y-3">
                  <a
                    href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`}
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
                      setMobileMenuOpen(false);
                      openInquiryModal();
                    }}
                    className="w-full py-3.5"
                  >
                    <Sparkles className="h-4 w-4 text-amber-200" />
                    <span>Get Free Solar Quote</span>
                  </ShimmerButton>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* Permanent Static Spacer: Guarantees ZERO document layout shift or jitter during header transforms */}
      <div className="h-30 w-full shrink-0" aria-hidden="true" />
    </>
  );
}

export default Header;
