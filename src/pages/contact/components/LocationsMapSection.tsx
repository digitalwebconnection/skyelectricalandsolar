import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  Clock,
  Navigation,
  Copy,
  Check,
  ExternalLink,
  Phone,
  Mail,
  ShieldCheck,
} from "lucide-react";

interface Branch {
  id: "wa" | "nsw" | "qld";
  tab: string;
  short: string;
  city: string;
  subtitle: string;
  address: string;
  mapAddress: string;
  mapCardTitle: string;
  hours: string;
  serviceAreas: string;
  phone: string;
  email: string;
  status: string;
}

const branches: Branch[] = [
  {
    id: "wa",
    tab: "Western Australia",
    short: "WA Regional Center",
    city: "Caversham (Perth Hub)",
    subtitle: "Residential Solar & High-Output Battery Hub",
    address: "113 Barbarossa Drive, Caversham WA 6055",
    mapAddress: "113 Barbarossa Drive, Caversham WA 6055, Australia",
    mapCardTitle: "113 Barbarossa Dr",
    hours: "Mon – Sun 7:00 AM – 6:00 PM (AWST)",
    serviceAreas: "Greater Perth, Swan Valley, Caversham, Mandurah, Bunbury & Peel Region",
    phone: "0430 015 017",
    email: "info@skyelectricalandsolar.net.au",
    status: "Active Field Dispatch",
  },
  {
    id: "nsw",
    tab: "New South Wales",
    short: "NSW Regional Center",
    city: "Kellyville (Sydney Hub)",
    subtitle: "Residential Solar & Battery Solutions Hub",
    address: "114 Burns Road, Kellyville NSW 2155",
    mapAddress: "114 Burns Road, Kellyville NSW 2155, Australia",
    mapCardTitle: "114 Burns Road",
    hours: "Mon – Sat 7:00 AM – 6:00 PM (AEST)",
    serviceAreas: "Kellyville, Parramatta, Blacktown, Castle Hill & Greater Sydney",
    phone: "0489 935 658",
    email: "info@skyelectricalandsolar.net.au",
    status: "Active Field Dispatch",
  },
  {
    id: "qld",
    tab: "Queensland",
    short: "QLD Regional Center",
    city: "Chermside (Brisbane Hub)",
    subtitle: "Solar Installation & Battery Service Hub",
    address: "17 Western Avenue, Chermside, QLD 4032",
    mapAddress: "17 Western Avenue, Chermside QLD 4032, Australia",
    mapCardTitle: "17 Western Avenue",
    hours: "Mon – Sat 7:00 AM – 6:00 PM (AEST)",
    serviceAreas: "Chermside, Brisbane North, Aspley, Kedron & Greater Brisbane",
    phone: "0430 015 017",
    email: "info@skyelectricalandsolar.net.au",
    status: "Active Field Dispatch",
  },
];

export function LocationsMapSection() {
  const [activeState, setActiveState] = useState<"wa" | "nsw" | "qld">("wa");
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const activeBranch = branches.find((branch) => branch.id === activeState) || branches[0];

  const handleCopy = async (address: string) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopiedAddress(address);
      setTimeout(() => setCopiedAddress(null), 2200);
    } catch {
      setCopiedAddress(null);
    }
  };

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    activeBranch.mapAddress,
  )}`;

  return (
    <section
      id="state-operations"
      className="relative overflow-hidden py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-[#fdfbf9] via-[#fff8f2] to-[#fff6ee] text-slate-800"
    >
      {/* ================= HIGH-END DECORATIVE BACKGROUND ACCENTS ================= */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        {/* Subtle orange dot grid pattern on the top-left */}
        <div
          className="absolute top-8 left-6 w-80 h-96 opacity-35"
          style={{
            backgroundImage: "radial-gradient(#f97316 1.5px, transparent 1.5px)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* Ambient radial glow halos */}
        <div className="absolute -top-16 left-1/4 w-125 h-125 bg-orange-300/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-10 w-150 h-150 bg-amber-400/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-175 h-80 bg-orange-400/10 rounded-full blur-3xl" />

        {/* Australia Silhouette & Stylized Map Pin (Top-Right) */}
        <div className="absolute top-0 right-0 w-90 sm:w-120 lg:w-140 opacity-70 lg:opacity-85 translate-x-8 -translate-y-4">
          <svg
            viewBox="0 0 500 450"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            {/* Australia Silhouette Background */}
            <path
              d="M360 80 C375 68 390 62 405 72 C420 82 435 115 445 145 C455 175 470 215 460 255 C450 295 420 335 380 345 C340 355 315 325 285 330 C255 335 235 355 195 345 C155 335 135 305 105 285 C75 265 55 225 65 185 C75 145 105 125 145 115 C185 105 215 125 255 115 C285 105 310 82 335 85 Z"
              fill="#f97316"
              fillOpacity="0.08"
            />
            {/* Concentric Pulse Circles */}
            <circle
              cx="380"
              cy="150"
              r="170"
              stroke="#F97316"
              strokeWidth="1"
              strokeOpacity="0.15"
            />
            <circle
              cx="380"
              cy="150"
              r="130"
              stroke="#F97316"
              strokeWidth="1"
              strokeOpacity="0.22"
            />
            <circle
              cx="380"
              cy="150"
              r="90"
              stroke="#F97316"
              strokeWidth="1"
              strokeOpacity="0.32"
            />
            <circle
              cx="380"
              cy="150"
              r="55"
              stroke="#F97316"
              strokeWidth="1.2"
              strokeOpacity="0.5"
              strokeDasharray="4 4"
            />

            {/* Stylized Floating Orange Pin Marker */}
            <g transform="translate(380, 150) translate(-36, -72)">
              <path
                d="M36 0 C16.1 0 0 16.1 0 36 C0 63 36 96 36 96 C36 96 72 63 72 36 C72 16.1 55.9 0 36 0 Z"
                fill="url(#pinOrangeGrad)"
                filter="drop-shadow(0 12px 20px rgba(249,115,22,0.45))"
              />
              <circle cx="36" cy="36" r="14" fill="white" />
            </g>

            <defs>
              <linearGradient id="pinOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff9f38" />
                <stop offset="100%" stopColor="#ea580c" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Bottom Glowing Light Trails & Roads Network */}
        <div className="absolute -bottom-6 right-0 w-full max-w-5xl h-44 opacity-80 pointer-events-none">
          <svg
            viewBox="0 0 900 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <filter id="roadGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <linearGradient id="roadLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
                <stop offset="35%" stopColor="#fb923c" stopOpacity="0.85" />
                <stop offset="75%" stopColor="#ea580c" stopOpacity="1" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Glowing Golden Road Trajectory */}
            <path
              d="M 80 150 C 300 150, 480 125, 610 90 C 670 75, 750 45, 900 35"
              stroke="url(#roadLineGradient)"
              strokeWidth="4.5"
              strokeLinecap="round"
              filter="url(#roadGlowFilter)"
            />
            <path
              d="M 100 155 C 310 155, 490 130, 620 95 C 680 80, 760 50, 910 40"
              stroke="#fed7aa"
              strokeWidth="1.8"
              strokeLinecap="round"
              opacity="0.8"
            />
            <path
              d="M 240 155 C 410 155, 540 128, 640 98 C 710 78, 780 54, 910 50"
              stroke="url(#roadLineGradient)"
              strokeWidth="2.5"
              strokeDasharray="9 7"
              opacity="0.65"
            />

            {/* Glowing Pin Marker on the Road */}
            <g transform="translate(630, 60)">
              <circle cx="0" cy="20" r="16" fill="#f97316" fillOpacity="0.25" />
              <path
                d="M0 0 C-8 0 -14 6 -14 14 C-14 24 0 36 0 36 C0 36 14 24 14 14 C14 6 8 0 0 0 Z"
                fill="#ea580c"
                filter="drop-shadow(0 3px 8px rgba(234,88,12,0.6))"
              />
              <circle cx="0" cy="14" r="5" fill="white" />
            </g>
          </svg>
        </div>
      </div>

      {/* ================= MAIN CONTENT CONTAINER ================= */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading & Subheading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#111827] tracking-tight leading-[1.12]">
            Our 3 State Operational{" "}
            <span className="block mt-1 bg-linear-to-r from-solar-orange via-solar-sun to-[#fb923c] bg-clip-text text-transparent">
              Hubs &amp; Interactive Map
            </span>
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Select a state operations center below to inspect the location, view local service
            hours, get driving directions, or call the branch office.
          </p>
        </div>

        {/* State Hub Selector Tabs: Rounded Pill */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-slate-100 max-w-full">
            {branches.map((branch) => {
              const isActive = branch.id === activeState;
              return (
                <button
                  key={branch.id}
                  type="button"
                  onClick={() => setActiveState(branch.id)}
                  aria-pressed={isActive}
                  className={`flex items-center gap-2.5 px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-linear-to-r from-solar-sun to-solar-orange text-white shadow-[0_4px_16px_rgba(249,115,22,0.35)] scale-[1.01]"
                      : "text-slate-600 hover:text-slate-900 bg-transparent"
                  }`}
                >
                  <MapPin
                    className={`w-4 h-4 shrink-0 transition-colors ${
                      isActive ? "text-white fill-white" : "text-slate-400"
                    }`}
                  />
                  <span>{branch.tab}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Grid: Left Branch Details + Right Live Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* LEFT: Branch Details Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBranch.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28 }}
              className="lg:col-span-5 flex flex-col justify-between bg-white rounded-[28px] p-6 sm:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.07)] border border-slate-100"
            >
              <div>
                {/* Top Header Badges */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold bg-[#fff2e5] text-solar-orange border border-orange-100/80">
                    {activeBranch.short}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#ecfdf5] text-[#059669] border border-emerald-100/80">
                    <span className="w-2 h-2 rounded-full bg-eco-green animate-pulse" />
                    {activeBranch.status}
                  </span>
                </div>

                {/* City Heading & Subtitle */}
                <h3 className="text-2xl sm:text-[28px] font-black text-[#0f172a] tracking-tight">
                  {activeBranch.city}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-solar-sun mt-1 mb-6">
                  {activeBranch.subtitle}
                </p>

                {/* Info Card 1: Branch Address */}
                <div className="p-4 sm:p-4.5 rounded-2xl bg-[#f8fafc] border border-slate-100 mb-3.5 shadow-xs">
                  <div className="flex items-start gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-solar-sun to-solar-orange text-white flex items-center justify-center shrink-0 shadow-sm shadow-orange-500/20">
                      <MapPin className="w-6 h-6 fill-white" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-extrabold tracking-wider text-slate-400 uppercase block">
                        BRANCH ADDRESS
                      </span>
                      <p className="text-sm font-bold text-slate-900 leading-snug mt-0.5">
                        {activeBranch.address}
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-slate-200/70 my-3.5" />

                  <div className="flex items-center justify-between text-xs font-bold">
                    <button
                      type="button"
                      onClick={() => handleCopy(activeBranch.mapAddress)}
                      className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                    >
                      {copiedAddress === activeBranch.mapAddress ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span className="text-emerald-700">Copied to clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-slate-400" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>

                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-solar-orange hover:text-[#c2410c] transition-colors"
                    >
                      <span>Get Directions</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Info Card 2: Hours of Operation */}
                <div className="p-4 rounded-2xl bg-[#f8fafc] border border-slate-100 mb-3.5 flex items-center gap-3.5 shadow-xs">
                  <div className="w-10 h-10 rounded-full bg-orange-50 text-solar-sun flex items-center justify-center shrink-0 border border-orange-100/70">
                    <Clock className="w-5 h-5" />
                  </div>

                  <div className="min-w-0">
                    <span className="text-[10px] font-extrabold tracking-wider text-slate-400 uppercase block">
                      HOURS OF OPERATION
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">
                      {activeBranch.hours}
                    </p>
                  </div>
                </div>

                {/* Info Card 3: Service Areas & Suburbs */}
                <div className="p-4 rounded-2xl bg-[#f8fafc] border border-slate-100 mb-5 flex items-start gap-3.5 shadow-xs">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#059669] flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100/70">
                    <Navigation className="w-5 h-5 fill-current" />
                  </div>

                  <div className="min-w-0">
                    <span className="text-[10px] font-extrabold tracking-wider text-slate-400 uppercase block">
                      SERVICE AREAS &amp; SUBURBS
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug mt-0.5">
                      {activeBranch.serviceAreas}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${activeBranch.phone.replace(/[^+\d]/g, "")}`}
                  className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#0a192f] hover:bg-[#112240] text-white font-bold text-xs sm:text-sm transition-all shadow-md group cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-solar-sun group-hover:scale-110 transition-transform" />
                  <span>Call {activeBranch.phone}</span>
                </a>

                <a
                  href={`mailto:${activeBranch.email}`}
                  className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold text-xs sm:text-sm transition-all shadow-xs group cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-solar-sun group-hover:scale-110 transition-transform" />
                  <span>Email Branch</span>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT: Live Map Panel */}
          <div className="lg:col-span-7 relative min-h-115 sm:min-h-130 lg:min-h-full rounded-[28px] overflow-hidden border border-slate-100 shadow-[0_12px_40px_rgba(0,0,0,0.07)] bg-slate-100 flex flex-col">
            {/* Floating Top-Left Address Card over Map */}
            <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-lg border border-slate-100/90 max-w-70 sm:max-w-xs pointer-events-auto">
              <h4 className="text-sm font-bold text-slate-900 leading-snug">
                {activeBranch.mapCardTitle}
              </h4>
              <p className="text-[11px] text-slate-500 truncate mt-0.5 mb-2.5">
                {activeBranch.mapAddress}
              </p>
              <div className="flex items-center gap-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(activeBranch.mapAddress)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-semibold shadow-xs transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open in Maps</span>
                </a>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1a73e8] flex items-center justify-center transition-colors shadow-xs"
                  title="Get Directions"
                >
                  <Navigation className="w-4 h-4 rotate-45" />
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <iframe
              key={activeBranch.id}
              title={`${activeBranch.city} Location Map`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                activeBranch.mapAddress,
              )}&output=embed`}
              className="w-full h-full min-h-100 flex-1 border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Bottom Footer Bar */}
            <div className="p-3.5 px-5 bg-white border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium text-slate-700">
                  Street view, real-time traffic and nearby services available.
                </span>
              </div>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-bold text-solar-orange hover:text-[#c2410c] transition-colors whitespace-nowrap"
              >
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationsMapSection;
