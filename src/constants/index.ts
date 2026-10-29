import type { NavItem } from "../types";

export const APP_NAME = "Skye Electrical & Solar";
export const COMPANY_LEGAL_NAME = "Skye Electrical & Solar Pty Ltd";
export const COMPANY_ABN = "ABN 89 632 094 190";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Blogs", href: "/blogs" },
  { label: "Services", href: "/services" },
  { label: "Specials", href: "/specials" },
  { label: "Contact Us", href: "/contact-us" },
];

export const LEGAL_LINKS: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
];

export const CONTACT_INFO = {
  phone1: "0430 015 017",
  phone2: "0489 935 658",
  email: "info@skyelectricalandsolar.net.au",
  description:
    "Your trusted partner for electrical installations, maintenance, and solar energy solutions designed for efficiency and reliability.",
  socials: {
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    x: "https://x.com",
  },
} as const;

export interface StateHub {
  id: "wa" | "nsw" | "qld";
  state: string;
  shortState: string;
  region: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  serviceArea: string;
  mapQuery: string;
  badge: string;
  tagline: string;
}

export const STATE_HUBS: StateHub[] = [
  {
    id: "wa",
    state: "Western Australia",
    shortState: "WA",
    region: "Perth & Southwest",
    city: "Caversham (Perth Hub)",
    address: "113 Barbarossa drive Caversham wa 6055",
    phone: "0430 015 017",
    email: "info@skyelectricalandsolar.net.au",
    hours: "Mon – Sat: 7:00 AM – 6:00 PM (AWST)",
    serviceArea: "Greater Perth, Swan Valley, Caversham, Mandurah, Bunbury & Peel Region",
    mapQuery: "113 Barbarossa drive Caversham wa 6055",
    badge: "WA Regional Centre",
    tagline: "Residential Solar & High-Output Battery Hub",
  },
  {
    id: "nsw",
    state: "New South Wales",
    shortState: "NSW",
    region: "Sydney & The Hills",
    city: "Kellyville (Sydney Hub)",
    address: "114 Burns Road, Kellyville NSW 2155",
    phone: "0489 935 658",
    email: "info@skyelectricalandsolar.net.au",
    hours: "Mon – Sat: 7:00 AM – 6:00 PM (AEST)",
    serviceArea: "Greater Sydney, The Hills District, Kellyville, Parramatta, Penrith & Wollongong",
    mapQuery: "114 Burns Road, Kellyville NSW 2155",
    badge: "NSW Operations Centre",
    tagline: "Commercial Solar & Master Electrical Engineering",
  },
  {
    id: "qld",
    state: "Queensland",
    shortState: "QLD",
    region: "Brisbane & Gold Coast",
    city: "Chermside (Brisbane Hub)",
    address: "17 Western Avenue, Chermside, QLD 4032",
    phone: "0430 015 017",
    email: "info@skyelectricalandsolar.net.au",
    hours: "Mon – Sat: 7:00 AM – 6:00 PM (AEST)",
    serviceArea: "Brisbane North, Chermside, Moreton Bay, Ipswich, Sunshine Coast & Gold Coast",
    mapQuery: "17 Western Avenue, Chermside, QLD 4032",
    badge: "QLD Sunshine Operations",
    tagline: "High-Efficiency Solar & EV Infrastructure Hub",
  },
];

