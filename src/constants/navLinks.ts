import type { NavItem } from "../types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Specials", href: "/specials", disabled: true },
  { label: "Blogs", href: "/blogs", disabled: true },
  { label: "Contact Us", href: "/contact-us" },
];

export const LEGAL_LINKS: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
];

export const SOLAR_SERVICE_LINKS: NavItem[] = [
  { label: "Solar Installation", href: "/services/solar-installation" },
  { label: "Electric Car Chargers", href: "/services/electric-car-chargers" },
  { label: "Solar Battery Storage", href: "/services/solar-battery" },
  { label: "All Domestic Electrical Work", href: "/services/all-domestic-electrical-work" },
  { label: "All Communications Work", href: "/services/all-communications-work-for-domestic-commercial" },
  { label: "Switchboard Upgrades", href: "/services/switchboard-upgrades" },
];

