# Sky Electrical & Solar

High-performance, CEC-accredited clean energy and master electrical contracting website. Built for residential and commercial solar installations, Tesla & Sungrow battery storage, EV chargers, switchboard upgrades, and communications infrastructure across WA, NSW, and QLD.

---

## 🛠 Tech Stack

- **Framework**: React 19 + TypeScript (Vite 8)
- **Styling**: Tailwind CSS v4 + Motion
- **Smooth Scroll**: Lenis
- **Animations**: Magic UI (AnimatedGridPattern, BorderBeam, FlickeringGrid) + GSAP
- **Icons**: Lucide React
- **Deployment**: Vercel SPA with automated route rewrites and immutable asset caching

---

## 📂 Project Architecture

```
skyelectricalandsolar/
├── public/                  # Static assets served as-is
│   ├── images/              # Organised URL-referenced media
│   │   ├── banners/         # High-resolution hero sliders
│   │   ├── posters/         # Dynamic flying posters
│   │   ├── reviews/         # Verified customer & job photos
│   │   ├── services/        # Commercial & residential solar
│   │   └── backgrounds/     # Radial & high-tech backgrounds
│   ├── og-image.jpg         # Social share image (1200x630)
│   ├── robots.txt           # Crawl rules & sitemap pointer
│   └── sitemap.xml          # Comprehensive SEO sitemap
│
├── src/
│   ├── assets/              # Bundled assets (brands, customers, logos)
│   ├── components/
│   │   ├── ui/              # Visual effects & primitives (Magic UI, GSAP)
│   │   ├── common/          # Shared components (SEO, JsonLd, ErrorBoundary, WhatsApp)
│   │   └── layout/          # Header, Footer, Layout shell
│   ├── pages/               # Feature pages (Home, Services, Blogs, Contact, Legal)
│   ├── routes/              # Code-split lazy routing & path constants
│   ├── services/            # API client & inquiry submit handler
│   ├── config/              # Site defaults & typed environment variables
│   ├── constants/           # Navigation, social links, and brand partners
│   ├── context/             # Navigation, Inquiry modal, and Theme context
│   ├── hooks/               # Custom hooks (debounce, reveal, local storage)
│   ├── types/               # TypeScript interfaces & service types
│   └── utils/               # Formatting, helpers, and cn utility
```

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

### 3. Build for Production

```bash
npm run build
```

---

## 🛡 Verification & Standards

- **Clean Energy Council (CEC)** Standards Compliant
- **AS/NZS 3000:2018** Wiring Rules Compliant
- **AS/NZS 5139:2019** Battery Energy Storage Compliant
- **WCAG 2.1 AA** Accessible High-Contrast Palette
