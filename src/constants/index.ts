import type { NavItem } from '../types'

export const APP_NAME = 'Sky Electrical & Solar'
export const COMPANY_LEGAL_NAME = 'Sky Electrical & Solar Pty Ltd'
export const COMPANY_ABN = 'ABN 89 632 094 190'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Services', href: '/services' },
  { label: 'Specials', href: '/specials' },
  { label: 'Contact Us', href: '/contact-us' },
]

export const LEGAL_LINKS: NavItem[] = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-conditions' },
]

export const CONTACT_INFO = {
  phone1: '0430 015 017',
  phone2: '0489 935 658',
  email: 'info@skyelectricalandsolar.net.au',
  description:
    'Your trusted partner for electrical installations, maintenance, and solar energy solutions designed for efficiency and reliability.',
  socials: {
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
    x: 'https://x.com',
  },
} as const
