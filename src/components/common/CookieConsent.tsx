import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Cookie,
  ShieldCheck,
  Check,
  X,
  SlidersHorizontal,
  Lock,
  ArrowRight,
} from "lucide-react";
import { useNavigation } from "../../context";

const STORAGE_KEY = "sky_cookie_consent_v1";

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  status: "accepted" | "rejected" | "customized";
  timestamp: string;
}

export function CookieConsent() {
  const { navigate } = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    // Check if user already set their preference
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      // Gentle appearance delay to not conflict with page loader
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1400);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed = JSON.parse(saved) as CookiePreferences;
        setPreferences({
          necessary: true,
          analytics: parsed.analytics ?? true,
          marketing: parsed.marketing ?? false,
        });
      } catch {
        // Fallback if corrupt
      }
    }

    // Listen for custom trigger from Footer or other pages to re-open settings
    const handleOpenSettings = () => {
      setIsVisible(true);
      setIsCustomizing(true);
    };

    window.addEventListener("open-cookie-settings", handleOpenSettings);
    return () => {
      window.removeEventListener("open-cookie-settings", handleOpenSettings);
    };
  }, []);

  const saveAndClose = (prefs: CookiePreferences) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch {
      // Ignore if localStorage unavailable
    }
    setIsVisible(false);
    setIsCustomizing(false);
  };

  const handleAcceptAll = () => {
    const fullConsent: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      status: "accepted",
      timestamp: new Date().toISOString(),
    };
    setPreferences({ necessary: true, analytics: true, marketing: true });
    saveAndClose(fullConsent);
  };

  const handleRejectNonEssential = () => {
    const minimalConsent: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      status: "rejected",
      timestamp: new Date().toISOString(),
    };
    setPreferences({ necessary: true, analytics: false, marketing: false });
    saveAndClose(minimalConsent);
  };

  const handleSaveCustom = () => {
    const customConsent: CookiePreferences = {
      necessary: true,
      analytics: preferences.analytics,
      marketing: preferences.marketing,
      status: "customized",
      timestamp: new Date().toISOString(),
    };
    saveAndClose(customConsent);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <aside
          role="region"
          aria-label="Cookie consent banner"
          className="fixed bottom-4 left-4 right-4 sm:right-auto sm:left-6 sm:bottom-6 z-50 max-w-lg lg:max-w-xl pointer-events-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative isolate overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-700/80 bg-slate-950/95 backdrop-blur-2xl p-5 sm:p-6 text-white shadow-[0_20px_50px_rgba(2,132,199,0.25)] shadow-slate-950/80"
          >
            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-orange-500/15 blur-2xl -z-10" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-sky-500/15 blur-2xl -z-10" />

            {/* Top Bar: Icon, Title & Close Button */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-md shadow-orange-500/25">
                  <Cookie className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-extrabold text-white tracking-tight flex items-center gap-2">
                    <span>Cookie &amp; Privacy Choices</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                      Australian Privacy
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5 font-medium">
                    Sky Electrical &amp; Solar Pty Ltd
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleRejectNonEssential}
                aria-label="Decline and close"
                className="rounded-full p-1.5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Content Body */}
            {!isCustomizing ? (
              <>
                <p className="mt-3.5 text-xs sm:text-[13px] leading-relaxed text-slate-300 font-normal">
                  We use essential cookies to maintain site security and
                  navigation, and optional cookies to analyze traffic and provide
                  accurate solar rebate calculations for WA, NSW &amp; QLD. You can
                  accept all, decline non-essential cookies, or manage your preferences.
                </p>

                <div className="mt-2 text-xs text-slate-400">
                  Read our full{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setIsVisible(false);
                      navigate("/privacy-policy");
                    }}
                    className="font-bold text-amber-400 underline underline-offset-2 hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    Privacy Policy
                  </button>{" "}
                  and{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setIsVisible(false);
                      navigate("/terms-conditions");
                    }}
                    className="font-bold text-amber-400 underline underline-offset-2 hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    Terms of Service
                  </button>
                  .
                </div>

                {/* Primary Action Buttons */}
                <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3">
                  {/* Accept All (Primary) */}
                  <button
                    type="button"
                    onClick={handleAcceptAll}
                    className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 hover:from-orange-600 hover:to-amber-600 px-4 py-2.5 text-xs sm:text-sm font-extrabold text-white shadow-lg shadow-orange-500/30 active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <Check className="h-4 w-4 stroke-[2.5]" />
                    <span>Accept All</span>
                  </button>

                  {/* Reject / Decline (Secondary) */}
                  <button
                    type="button"
                    onClick={handleRejectNonEssential}
                    className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 hover:bg-slate-800 hover:border-slate-600 px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-200 active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <X className="h-4 w-4" />
                    <span>Reject Non-Essential</span>
                  </button>

                  {/* Customize Preferences */}
                  <button
                    type="button"
                    onClick={() => setIsCustomizing(true)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <SlidersHorizontal className="h-3.5 w-3.5" />
                    <span>Customize</span>
                  </button>
                </div>
              </>
            ) : (
              /* Granular Preferences View */
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 space-y-3 pt-2 border-t border-slate-800/80"
              >
                {/* 1. Strictly Necessary (Always On) */}
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                      <Lock className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Strictly Necessary Cookies</span>
                      <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-semibold">
                        Always Active
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 leading-normal">
                      Required for security, CSRF protection, and quote inquiry delivery.
                    </p>
                  </div>
                  <div className="flex h-5 w-9 shrink-0 items-center rounded-full bg-emerald-500/30 p-0.5 cursor-not-allowed">
                    <div className="h-4 w-4 rounded-full bg-emerald-400 translate-x-4 transition-transform shadow-xs flex items-center justify-center">
                      <Check className="h-2.5 w-2.5 text-slate-950 stroke-[3]" />
                    </div>
                  </div>
                </div>

                {/* 2. Analytics & Performance */}
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                      <ShieldCheck className="h-3.5 w-3.5 text-sky-400" />
                      <span>Analytics &amp; Performance</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 leading-normal">
                      Collects anonymous telemetry to help us calibrate solar calculator accuracy.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setPreferences((p) => ({ ...p, analytics: !p.analytics }))
                    }
                    role="switch"
                    aria-checked={preferences.analytics}
                    className={`flex h-5 w-9 shrink-0 items-center rounded-full p-0.5 transition-colors cursor-pointer ${
                      preferences.analytics ? "bg-amber-500" : "bg-slate-700"
                    }`}
                  >
                    <div
                      className={`h-4 w-4 rounded-full bg-white transition-transform shadow-xs ${
                        preferences.analytics ? "translate-x-4" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>

                {/* 3. Personalization & Regional Offers */}
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                      <Cookie className="h-3.5 w-3.5 text-orange-400" />
                      <span>State Hub Personalization</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 leading-normal">
                      Stores regional hub preferences (WA, NSW, QLD) for localized incentives.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setPreferences((p) => ({ ...p, marketing: !p.marketing }))
                    }
                    role="switch"
                    aria-checked={preferences.marketing}
                    className={`flex h-5 w-9 shrink-0 items-center rounded-full p-0.5 transition-colors cursor-pointer ${
                      preferences.marketing ? "bg-amber-500" : "bg-slate-700"
                    }`}
                  >
                    <div
                      className={`h-4 w-4 rounded-full bg-white transition-transform shadow-xs ${
                        preferences.marketing ? "translate-x-4" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>

                {/* Custom Action Buttons */}
                <div className="pt-2 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setIsCustomizing(false)}
                    className="text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    ← Back
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleRejectNonEssential}
                      className="rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-1.5 text-xs font-bold text-slate-300 hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      Reject All
                    </button>
                    <button
                      type="button"
                      onClick={handleSaveCustom}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-orange-500 hover:bg-orange-600 px-4 py-1.5 text-xs font-bold text-white shadow-md shadow-orange-500/25 transition-all cursor-pointer active:scale-95"
                    >
                      <span>Save Choices</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </aside>
      )}
    </AnimatePresence>
  );
}

export default CookieConsent;
