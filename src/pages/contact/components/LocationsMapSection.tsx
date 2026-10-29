import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  Building,
} from "lucide-react";
import { STATE_HUBS } from "../../../constants";

export function LocationsMapSection() {
  const [activeHubId, setActiveHubId] = useState<"wa" | "nsw" | "qld">("wa");
  const [copied, setCopied] = useState(false);

  const activeHub =
    STATE_HUBS.find((h) => h.id === activeHubId) || STATE_HUBS[0];

  const handleCopy = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  // Google Maps embed URL dynamically responsive to the active hub address
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    activeHub.mapQuery,
  )}&t=m&z=14&output=embed&iwloc=near`;

  const googleDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    activeHub.mapQuery,
  )}`;

  return (
    <section
      id="locations-map"
      className="relative py-24 bg-white text-slate-900 overflow-hidden border-t border-slate-200/80"
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Building className="h-3.5 w-3.5 text-amber-600" />
            National Network • Local Branches
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Our 3 State Operational Hubs &amp; Interactive Map
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Select a state operations centre below to inspect the location, view
            local service hours, get driving directions, or call the branch
            office.
          </p>

          {/* State Hub Selector Pill Buttons */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-2 p-2 rounded-2xl bg-slate-100 border border-slate-200 shadow-inner">
            {STATE_HUBS.map((hub) => {
              const isActive = hub.id === activeHubId;
              return (
                <button
                  key={hub.id}
                  type="button"
                  onClick={() => setActiveHubId(hub.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-slate-900 text-white shadow-lg scale-[1.02]"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white"
                  }`}
                >
                  <MapPin
                    className={`h-4 w-4 ${isActive ? "text-amber-400" : "text-slate-400"}`}
                  />
                  <span>{hub.state}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-md font-mono ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {hub.shortState}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Grid: Hub Details Card (Left 5 Cols) + Interactive Map (Right 7 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Details Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeHub.id}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-5 rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-8 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* State Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                    {activeHub.badge}
                  </span>
                  <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Active Field Dispatch
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-950 mb-1">
                  {activeHub.city}
                </h3>
                <p className="text-xs text-orange-600 font-bold mb-6">
                  {activeHub.tagline}
                </p>

                {/* Street Address Box (Verbatim from image) */}
                <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-5 mb-5 space-y-3">
                  <div className="flex items-start gap-3.5">
                    <div className="h-10 w-10 rounded-xl bg-linear-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                        Registered Street Facility:
                      </span>
                      <p className="text-base font-extrabold text-slate-900 leading-snug">
                        {activeHub.address}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                    <button
                      type="button"
                      onClick={() => handleCopy(activeHub.address)}
                      className="inline-flex items-center gap-1.5 text-slate-600 hover:text-amber-600 font-bold cursor-pointer transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="h-4 w-4 text-emerald-600" />
                          <span className="text-emerald-700 font-bold">
                            Copied to clipboard!
                          </span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>

                    <a
                      href={googleDirectionsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-bold transition-colors"
                    >
                      <span>Get Directions</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                {/* Operating Hours & Suburb Coverage */}
                <div className="space-y-3 text-xs text-slate-600 mb-6">
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <Clock className="h-4 w-4 text-amber-600 shrink-0" />
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">
                        Office &amp; Workshop Hours
                      </span>
                      <span className="font-extrabold text-slate-900">
                        {activeHub.hours}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <Navigation className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">
                        Service Radius &amp; Suburbs
                      </span>
                      <span className="text-slate-700 font-medium">
                        {activeHub.serviceArea}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${activeHub.phone.replace(/\s/g, "")}`}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors shadow-md"
                >
                  <Phone className="h-3.5 w-3.5 text-amber-400" />
                  <span>
                    Call {activeHub.shortState}: {activeHub.phone}
                  </span>
                </a>
                <a
                  href={`mailto:${activeHub.email}`}
                  className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-200 transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 text-orange-600" />
                  <span>Email Branch</span>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Live Embedded Map (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl relative min-h-110 bg-slate-100 flex flex-col">
            {/* Top Interactive HUD */}
            <div className="absolute top-4 left-4 z-10 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 shadow-lg text-xs flex items-center gap-2.5 pointer-events-none">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
              </span>
              <span className="font-extrabold text-orange-600">
                {activeHub.shortState} Operational Hub:
              </span>
              <span className="text-slate-800 font-semibold">
                {activeHub.city}
              </span>
            </div>

            {/* Live Google Map */}
            <iframe
              key={activeHub.id}
              title={`Skye Electrical & Solar Map - ${activeHub.state}`}
              src={embedUrl}
              className="w-full h-full min-h-115 border-0"
              loading="lazy"
              allowFullScreen={true}
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Bottom Bar below map */}
            <div className="p-4 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                Direct on-site roof analysis and switchboard audits available
                daily.
              </span>

              <a
                href={googleDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-extrabold transition-colors"
              >
                <span>Open in Google Maps App</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationsMapSection;
