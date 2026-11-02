import React, { useState } from "react";
import { CONTACT_INFO } from "../../../constants";

interface IconProps {
  name:
    | "pin"
    | "clock"
    | "copy"
    | "external"
    | "phone"
    | "mail"
    | "arrow"
    | "zap"
    | "sun"
    | "check"
    | "chevron";
  size?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 20, className = "" }) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  const icons: Record<IconProps["name"], React.ReactNode> = {
    pin: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    copy: (
      <>
        <rect x="8" y="8" width="12" height="13" rx="2" />
        <path d="M16 8V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h2" />
      </>
    ),
    external: (
      <>
        <path d="M14 4h6v6" />
        <path d="m20 4-9 9" />
        <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
      </>
    ),
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    zap: <path d="m13 2-3 9h7L9 22l2-9H5l8-11Z" />,
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
  };

  return <svg {...common}>{icons[name]}</svg>;
};

interface LocationItem {
  number: string;
  state: string;
  shortHub: string;
  address: string;
  phone: string;
  hours: string;
  theme: "green" | "blue" | "orange";
  image: string;
}

const locations: LocationItem[] = [
  {
    number: "01",
    state: "NSW STATE HUB",
    shortHub: "NSW",
    address: "114 Burns Road, Kellyville NSW 2155",
    phone: "0489 939 658",
    hours: "Mon – Sat: 7:00 AM – 6:00 PM (AEST)",
    theme: "green",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "02",
    state: "VIC STATE HUB",
    shortHub: "VIC",
    address: "114 Bararossa drive Caversham WA 6055",
    phone: "0430 015 017",
    hours: "Mon – Sat: 7:00 AM – 6:00 PM (AWST)",
    theme: "blue",
    image:
      "https://images.unsplash.com/photo-1514395462725-fb4566210144?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "03",
    state: "QLD STATE HUB",
    shortHub: "QLD",
    address: "17 Western Avenue, Chermside, QLD 4032",
    phone: "0430 015 017",
    hours: "Mon – Sat: 7:00 AM – 6:00 PM (AEST)",
    theme: "orange",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1000&q=85",
  },
];

const themeStyles = {
  green: {
    num: "bg-[#0e6d45]",
    state: "text-[#0e6d45]",
    underline: "bg-[#0e6d45]",
    pin: "text-[#0e6d45]",
    outlineBtn: "bg-white border-[#0e6d45] text-[#0e6d45] hover:bg-[#eaf7f0]",
    solidBtn: "bg-[#0e6d45] border-[#0e6d45] text-white hover:bg-[#084b2f]",
    hoursIcon: "text-[#0e6d45]",
    callBtn: "bg-[#0a4d31] hover:bg-[#0e6d45] text-white",
    statusDot: "bg-[#0e6d45]",
    statusText: "text-[#0a4d31]",
    cornerGlow: "from-[#0e6d45]/20 via-[#0e6d45]/5 to-transparent",
    cornerWave: "#0e6d45",
  },
  blue: {
    num: "bg-[#1671d8]",
    state: "text-[#1671d8]",
    underline: "bg-[#1671d8]",
    pin: "text-[#1671d8]",
    outlineBtn: "bg-white border-[#1671d8] text-[#1671d8] hover:bg-[#ebf4ff]",
    solidBtn: "bg-[#1671d8] border-[#1671d8] text-white hover:bg-[#0e4e99]",
    hoursIcon: "text-[#1671d8]",
    callBtn: "bg-[#0c4383] hover:bg-[#1671d8] text-white",
    statusDot: "bg-[#1671d8]",
    statusText: "text-[#0c4383]",
    cornerGlow: "from-[#1671d8]/20 via-[#1671d8]/5 to-transparent",
    cornerWave: "#1671d8",
  },
  orange: {
    num: "bg-[#e85d1c]",
    state: "text-[#e85d1c]",
    underline: "bg-[#e85d1c]",
    pin: "text-[#e85d1c]",
    outlineBtn: "bg-white border-[#e85d1c] text-[#e85d1c] hover:bg-[#fff2ea]",
    solidBtn: "bg-[#e85d1c] border-[#e85d1c] text-white hover:bg-[#a53c0a]",
    hoursIcon: "text-[#e85d1c]",
    callBtn: "bg-[#4d2508] hover:bg-[#e85d1c] text-white",
    statusDot: "bg-[#e85d1c]",
    statusText: "text-[#4d2508]",
    cornerGlow: "from-[#e85d1c]/20 via-[#e85d1c]/5 to-transparent",
    cornerWave: "#e85d1c",
  },
};

const LocationCard: React.FC<{
  location: LocationItem;
  copiedKey: string | null;
  onCopy: (text: string, key: string) => void;
}> = ({ location, copiedKey, onCopy }) => {
  const { number, state, shortHub, address, phone, hours, theme, image } = location;

  const t = themeStyles[theme];

  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address,
  )}`;

  const isCopied = copiedKey === `addr-${number}`;

  return (
    <article className="group relative overflow-hidden bg-white border border-[#e3eeea] rounded-xl shadow-md shadow-[#0f4630]/5 hover:shadow-2xl hover:shadow-[#0f4630]/15 transition-all duration-300 hover:-translate-y-1.5 flex flex-col">
      {/* Banner Image Header with subtle hover zoom effect */}
      <div className="h-44 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ backgroundImage: `url("${image}")` }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/5 via-black/10 to-black/35" />

        {/* Circular Number Badge */}
        <div
          className={`absolute top-4 left-4 z-10 w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-black border-2 border-white/60 shadow-md ${t.num}`}
        >
          {number}
        </div>

        {/* Live Status Pill */}
        <div
          className={`absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-full bg-white text-xs font-bold flex items-center gap-2 shadow-md ${t.statusText}`}
        >
          <span className="relative flex h-2 w-2">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${t.statusDot}`}
            />
            <span className={`relative inline-flex rounded-full h-2 w-2 ${t.statusDot}`} />
          </span>
          Open Now
        </div>
      </div>

      {/* Card Content */}
      <div className="relative p-6 flex flex-col flex-1 z-10">
        {/* State Hub Label */}
        <div
          className={`inline-block text-xs font-black tracking-wider uppercase mb-3.5 ${t.state}`}
        >
          {state}
          <span className={`block w-8 h-0.5 mt-1.5 ${t.underline}`} />
        </div>

        {/* Address */}
        <div className="flex items-start gap-3 min-h-18">
          <div className={`mt-0.5 shrink-0 ${t.pin}`}>
            <Icon name="pin" size={23} />
          </div>

          <div>
            <h3 className="text-base font-extrabold text-[#11221c] mb-1">Address</h3>
            <p className="text-sm leading-relaxed text-[#485e55]">{address}</p>
          </div>
        </div>

        {/* Action Buttons: Copy Address & Directions */}
        <div className="grid grid-cols-2 gap-3 py-4 mt-2 border-t border-[#e8efec]">
          <button
            type="button"
            className={`min-h-11 rounded-full flex items-center justify-center gap-2 text-xs font-bold border transition-all cursor-pointer ${t.outlineBtn}`}
            onClick={() => onCopy(address, `addr-${number}`)}
          >
            <Icon name={isCopied ? "check" : "copy"} size={17} />
            {isCopied ? "Copied!" : "Copy Address"}
          </button>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`min-h-11 rounded-full flex items-center justify-center gap-2 text-xs font-bold border transition-all cursor-pointer shadow-xs ${t.solidBtn}`}
          >
            Directions
            <Icon name="external" size={16} />
          </a>
        </div>

        {/* Operating Hours */}
        <div className="flex items-center gap-2.5 text-xs text-[#62756d] mb-5">
          <span className={t.hoursIcon}>
            <Icon name="clock" size={17} />
          </span>
          <span>{hours}</span>
        </div>

        {/* Click to Call Pill */}
        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className={`mt-auto flex items-center justify-between px-5 py-3.5 rounded-full text-xs sm:text-sm font-bold shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${t.callBtn}`}
        >
          <span className="flex items-center gap-2.5">
            <Icon name="phone" size={18} />
            Call {shortHub}: {phone}
          </span>
          <Icon name="chevron" size={18} className="call-arrow" />
        </a>
      </div>

      {/* Fluid decorative colored wave in bottom-right corner matching image */}
      <div className="absolute -bottom-6 -right-6 w-32 h-32 pointer-events-none opacity-40 z-0 overflow-hidden">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M 10 100 C 30 70, 70 30, 100 10 L 100 100 Z"
            fill={t.cornerWave}
            opacity="0.35"
          />
          <path d="M 35 100 C 55 80, 80 55, 100 35 L 100 100 Z" fill={t.cornerWave} opacity="0.6" />
        </svg>
      </div>
    </article>
  );
};

const ContactSupportSection: React.FC<{
  copiedKey: string | null;
  onCopy: (text: string, key: string) => void;
}> = ({ copiedKey, onCopy }) => {
  const email = CONTACT_INFO.email;
  const isCopied = copiedKey === "email";

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-7 rounded-xl border border-[#d2ebe0] bg-linear-to-br from-[#edf9f3] via-[#f4faf7] to-[#f8fbf9] shadow-sm">
      {/* Call Us Support (7 cols) */}
      <div className="md:col-span-7 min-w-0">
        <div className="flex items-start gap-3.5 mb-5">
          {/* Green Vertical Accent Bar */}
          <div className="w-1.5 h-12 bg-[#16a34a] rounded-full shrink-0 mt-0.5" />

          {/* Icon Circle */}
          <div className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center bg-linear-to-br from-[#087c50] to-[#16a56c] text-white shadow-md shadow-[#087c50]/20">
            <Icon name="phone" size={22} />
          </div>

          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#11221c]">Call Us</h3>
              <span className="text-[11px] font-bold text-[#15803d] bg-[#dcfce7] rounded-full px-2.5 py-0.5 border border-[#bbf7d0]">
                Available 7 Days
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#62756d] mt-1 leading-relaxed">
              Speak directly with an accredited technician for quote advice or urgent electrical
              assistance.
            </p>
          </div>
        </div>

        {/* Dual Support Numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <a
            href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`}
            className="group flex items-center gap-3.5 p-3.5 bg-white rounded-2xl border border-[#e2efea] hover:border-[#159460]/40 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            <div className="w-11 h-11 rounded-full shrink-0 flex items-center justify-center bg-[#159460] text-white shadow-xs group-hover:scale-105 transition-transform">
              <Icon name="phone" size={20} />
            </div>
            <div>
              <span className="block text-[10px] font-black text-[#07834e] tracking-wider mb-0.5 uppercase">
                PRIMARY SUPPORT LINE
              </span>
              <strong className="text-base font-extrabold text-[#11221c]">
                {CONTACT_INFO.phone1}
              </strong>
            </div>
          </a>

          <a
            href={`tel:${CONTACT_INFO.phone2.replace(/\s/g, "")}`}
            className="group flex items-center gap-3.5 p-3.5 bg-white rounded-2xl border border-[#e2efea] hover:border-[#176ed2]/40 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            <div className="w-11 h-11 rounded-full shrink-0 flex items-center justify-center bg-[#176ed2] text-white shadow-xs group-hover:scale-105 transition-transform">
              <Icon name="phone" size={20} />
            </div>
            <div>
              <span className="block text-[10px] font-black text-[#176ed2] tracking-wider mb-0.5 uppercase">
                ENGINEERING &amp; TECHNICAL
              </span>
              <strong className="text-base font-extrabold text-[#11221c]">
                {CONTACT_INFO.phone2}
              </strong>
            </div>
          </a>
        </div>
      </div>

      {/* Email Support (5 cols with divider) */}
      <div className="md:col-span-5 md:border-l md:border-[#cce4d9] md:pl-7 flex flex-col justify-between h-full pt-4 md:pt-0 border-t border-[#cce4d9] md:border-t-0 min-w-0">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-11 h-11 rounded-full shrink-0 flex items-center justify-center bg-linear-to-br from-[#087c50] to-[#16a56c] text-white shadow-md shadow-[#087c50]/20">
              <Icon name="mail" size={20} />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-[#11221c]">Email</h3>
              <p className="text-xs text-[#62756d]">Plans &amp; Inquiries</p>
            </div>
          </div>

          <a
            href={`mailto:${email}`}
            className="block text-xs sm:text-sm font-extrabold text-[#11221c] hover:text-[#087c50] break-all my-2.5 transition-colors"
          >
            {email}
          </a>
        </div>

        <button
          type="button"
          onClick={() => onCopy(email, "email")}
          className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-[#087c50] text-[#087c50] hover:bg-[#087c50] hover:text-white text-xs font-bold transition-all duration-200 cursor-pointer w-full sm:w-auto self-start"
        >
          <Icon name={isCopied ? "check" : "copy"} size={16} />
          {isCopied ? "Copied!" : "Copy Email"}
        </button>
      </div>
    </div>
  );
};

const ProposalCard: React.FC = () => {
  const scrollToForm = () => {
    const el = document.getElementById("contact-form-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-55 rounded-xl overflow-hidden p-6 sm:p-5 flex flex-col justify-center bg-linear-to-br from-[#063d27] via-[#0d5c3c] to-[#167a51] shadow-xl shadow-[#004b30]/15 group">
      {/* Background Solar House & Foliage Texture */}
      <div
        className="absolute inset-0 bg-cover bg-right opacity-35 mix-blend-overlay pointer-events-none group-hover:scale-105 transition-transform duration-700"
        style={{
          backgroundImage: "url('/images/contact/bottom_solar.png')",
        }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-[#063d27]/95 via-[#0d5c3c]/85 to-transparent pointer-events-none" />

      {/* Decorative leafy flourish in bottom-right */}
      <div className="absolute -bottom-8 -right-8 w-40 h-40 pointer-events-none opacity-40">
        <svg viewBox="0 0 100 100" fill="#a7f3d0">
          <circle cx="70" cy="70" r="30" opacity="0.3" />
        </svg>
      </div>

      <div className="relative z-10 max-w-md">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold text-white border border-white/30 bg-white/15 backdrop-blur-xs mb-3 shadow-xs">
          <Icon name="zap" size={13} />
          Zero Obligation Proposal
        </span>

        <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-2 tracking-tight">
          Get in Touch Now!!
        </h3>

        <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-4">
          Claim your tailored 3D solar layout, blackout-proof battery analysis, and verified Clean
          Energy Council STC rebate calculations.
        </p>

        <button
          type="button"
          onClick={scrollToForm}
          className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-white text-[#075d41] hover:bg-[#dff8e9] text-xs sm:text-sm font-extrabold shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
        >
          {/* Subtle gleam sweep effect on button hover */}
          <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          <Icon name="zap" size={15} />
          Fill Instant Quote Form
          <Icon name="arrow" size={15} />
        </button>
      </div>
    </div>
  );
};

export function ContactChannelsSection() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2200);
  };

  return (
    <section
      id="contact-channels-section"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-14 bg-[#f8fbfa] text-[#10251e]"
      style={{
        background:
          "radial-gradient(circle at 10% 15%, rgba(34, 197, 94, 0.08), transparent 32%), radial-gradient(circle at 90% 20%, rgba(56, 189, 248, 0.08), transparent 35%), #f8fbfa",
      }}
    >
      {/* ================= BACKGROUND GRAPHICS & EFFECTS ================= */}
      {/* 1. Left Green Aura & Rotating Radiant Sun */}
      <div className="absolute top-10 -left-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Sweeping Left Green Energy Arch */}
      <svg
        className="absolute top-0 left-0 w-44 h-80 pointer-events-none z-0 opacity-70"
        viewBox="0 0 180 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M -20 0 C 40 80, 80 180, 0 320"
          stroke="#34c759"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M -10 20 C 50 100, 70 180, 10 280"
          stroke="#86efac"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>

      {/* Floating Radiant Sun Illustration (Matching Reference Image) */}
      <div className="absolute top-12 left-4 sm:left-10 pointer-events-none z-10 drop-shadow-md">
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 8 Radiant Solar Spokes */}
          <g stroke="#f59e0b" strokeWidth="3" strokeLinecap="round">
            <line x1="28" y1="4" x2="28" y2="11" />
            <line x1="28" y1="45" x2="28" y2="52" />
            <line x1="4" y1="28" x2="11" y2="28" />
            <line x1="45" y1="28" x2="52" y2="28" />
            <line x1="11" y1="11" x2="16" y2="16" />
            <line x1="40" y1="40" x2="45" y2="45" />
            <line x1="11" y1="45" x2="16" y2="40" />
            <line x1="40" y1="16" x2="45" y2="11" />
          </g>
          {/* Sun Disc */}
          <circle cx="28" cy="28" r="11" fill="#ffad00" />
          {/* Top-Left Curved Crescent Highlight */}
          <path
            d="M 21 24 C 23 20, 27 19, 30 20"
            stroke="#ffffff"
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* 2. Top-Right Rooftop Solar House Hero & Sweeping Green Solar Ribbon */}
      <div
        className="absolute top-0 right-0 w-305 max-w-[55%] pointer-events-none z-0 hidden md:block overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.3) 18%, black 50%), linear-gradient(to bottom, black 40%, rgba(0, 0, 0, 0.4) 75%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.3) 18%, black 50%), linear-gradient(to bottom, black 40%, rgba(0, 0, 0, 0.4) 75%, transparent 100%)",
        }}
        aria-hidden="true"
      >
        <img
          src="/images/contact/house_faded.png"
          alt=""
          className="w-full h-auto block object-contain object-top opacity-95"
        />
      </div>

      {/* Top-Right Green Energy Ribbon Swoosh */}
      <svg
        className="absolute top-0 right-0 w-96 h-64 pointer-events-none z-10 opacity-85 hidden md:block"
        viewBox="0 0 380 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M 340 -10 C 290 70, 260 140, 190 200 C 150 235, 90 245, 20 220"
          stroke="#34c759"
          strokeWidth="7"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M 350 15 C 305 85, 280 145, 215 205"
          stroke="#86efac"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= SECTION HEADER ================= */}
        <header className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-serif font-bold tracking-tight text-[#0d1f18] leading-tight">
            Your Local <span className="text-[#ff7300] italic font-serif">Solar Experts</span>
          </h2>

          <p className="mt-4 text-[#000000] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Direct access to Clean Energy Council accredited master electricians.
            <br className="hidden sm:inline" />
            Visit our operational hubs, talk to our dispatch line, or claim your proposal.
          </p>
        </header>

        {/* ================= 3-COLUMN LOCATIONS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
          {locations.map((location) => (
            <LocationCard
              key={location.number}
              location={location}
              copiedKey={copiedKey}
              onCopy={handleCopy}
            />
          ))}
        </div>

        {/* ================= BOTTOM SUPPORT & PROPOSAL CTA ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
            <ContactSupportSection copiedKey={copiedKey} onCopy={handleCopy} />
          </div>
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col">
            <ProposalCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactChannelsSection;
