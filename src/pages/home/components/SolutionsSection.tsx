import { RotatingCards } from "../../../components/common/RotatingCards";

export function SolutionsSection() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24 bg-linear-to-br from-amber-100/40 via-slate-50/90 to-orange-100/30 border-y border-amber-200/70">
      {/* ================= BACKGROUND WRAPPER (z-0: above section bg, behind z-10 content) ================= */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        {/* ================= 1. TOP BATTERY STORAGE VISUAL (Fades seamlessly downward into section) ================= */}
        <div
          className="absolute top-0 inset-x-0 h-44 sm:h-56 lg:h-64 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 20%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 20%, transparent 100%)",
          }}
        >
          <img
            src="/assets/posters/poster-battery.jpg"
            alt=""
            className="w-full h-full object-cover object-top opacity-65 filter brightness-[0.96] contrast-[1.05] saturate-[1.15]"
          />
          {/* Subtle warm golden overlay on top visual */}
          <div className="absolute inset-0 bg-linear-to-b from-amber-500/10 via-transparent to-transparent" />
        </div>

        {/* ================= 2. BOTTOM BATTERY STORAGE VISUAL (Fades seamlessly upward into section) ================= */}
        <div
          className="absolute bottom-0 inset-x-0 h-44 sm:h-56 lg:h-64 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0.9) 20%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0.9) 20%, transparent 100%)",
          }}
        >
          <img
            src="/assets/posters/poster-battery.jpg"
            alt=""
            className="w-full h-full object-cover object-bottom opacity-65 filter brightness-[0.96] contrast-[1.05] saturate-[1.15]"
          />
          {/* Subtle warm golden overlay on bottom visual */}
          <div className="absolute inset-0 bg-linear-to-t from-orange-500/10 via-transparent to-transparent" />
        </div>

        {/* ================= 3. ARCHITECTURAL SOLAR GRID (Visible engineering texture) ================= */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(245, 158, 11, 0.25) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(245, 158, 11, 0.25) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        {/* ================= 4. SOLAR HEXAGON CELL WAFER PATTERN (SVG) ================= */}
        <svg
          className="absolute inset-0 w-full h-full opacity-25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="solutions-hex-solar-grid"
              width="96"
              height="96"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 48 0 L 96 24 L 96 72 L 48 96 L 0 72 L 0 24 Z"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="1.2"
                strokeOpacity="0.4"
              />
              <circle cx="48" cy="0" r="2.5" fill="#f59e0b" opacity="0.7" />
              <circle cx="96" cy="48" r="2.5" fill="#ea580c" opacity="0.7" />
              <circle cx="48" cy="96" r="2.5" fill="#10b981" opacity="0.7" />
              <circle cx="0" cy="48" r="2.5" fill="#f59e0b" opacity="0.7" />
              <circle cx="48" cy="48" r="3" fill="#f97316" opacity="0.6" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#solutions-hex-solar-grid)"
          />
        </svg>

        {/* ================= 5. LUMINOUS SOLAR ENERGY AURA (Behind cards & text) ================= */}
        {/* Major Sunburst Core behind 3D Rotating Cards */}
        <div
          className="absolute top-1/2 left-4 sm:left-12 lg:left-24 -translate-y-1/2 w-130 h-130 bg-linear-to-tr from-amber-400/35 via-orange-400/30 to-yellow-300/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4.5s" }}
        />

        {/* Clean Energy Emerald / Cyan Flare top-right */}
        <div
          className="absolute top-1/4 right-0 w-125 h-125 bg-linear-to-bl from-emerald-400/20 via-teal-300/12 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s" }}
        />

        {/* ================= 6. ANIMATED SOLAR ORBITAL MECHANISM (Behind 3D Cards) ================= */}
        <div className="absolute top-1/2 left-0 sm:left-4 lg:left-14 -translate-y-1/2 w-145 h-145 flex items-center justify-center">
          {/* Clockwise Outer Orbit */}
          <svg
            viewBox="0 0 580 580"
            className="w-full h-full animate-[spin_50s_linear_infinite] drop-shadow-[0_0_12px_rgba(245,158,11,0.35)]"
          >
            <circle
              cx="290"
              cy="290"
              r="260"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="1.8"
              strokeDasharray="10 14"
              opacity="0.6"
            />
            <circle cx="290" cy="30" r="6" fill="#f59e0b" />
            <circle cx="550" cy="290" r="5" fill="#ea580c" />
            <circle cx="290" cy="550" r="6" fill="#10b981" />
            <circle cx="30" cy="290" r="5" fill="#f59e0b" />
          </svg>

          {/* Counter-Clockwise Middle Orbit */}
          <svg
            viewBox="0 0 580 580"
            className="absolute inset-0 w-full h-full animate-[spin_35s_linear_infinite_reverse] drop-shadow-[0_0_8px_rgba(234,88,12,0.3)]"
          >
            <circle
              cx="290"
              cy="290"
              r="190"
              fill="none"
              stroke="#ea580c"
              strokeWidth="2"
              strokeDasharray="20 22"
              opacity="0.5"
            />
            <circle cx="290" cy="100" r="4.5" fill="#f97316" />
            <circle cx="480" cy="290" r="4.5" fill="#f59e0b" />
            <circle cx="290" cy="480" r="4.5" fill="#10b981" />
            <circle cx="100" cy="290" r="4.5" fill="#ea580c" />
          </svg>

          {/* Inner Glowing Precision Ring */}
          <svg
            viewBox="0 0 580 580"
            className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]"
          >
            <circle
              cx="290"
              cy="290"
              r="130"
              fill="none"
              stroke="#10b981"
              strokeWidth="1.5"
              strokeDasharray="6 8"
              opacity="0.45"
            />
          </svg>
        </div>

        {/* ================= 7. VOLUMETRIC DIAGONAL SUNBEAMS ================= */}
        <div className="absolute -top-40 left-1/3 w-90 h-200 bg-linear-to-b from-amber-300/25 via-orange-300/12 to-transparent -rotate-45 blur-2xl" />
      </div>

      {/* ================= FOREGROUND CONTENT WRAPPER (z-10: 100% untouched layout & text) ================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* ================= LEFT SIDE: 3D Animated Cards (Fully Visible, No Box/Container) ================= */}
          <div className="lg:col-span-5 w-full flex items-center justify-center overflow-visible">
            <RotatingCards />
          </div>

          {/* ================= RIGHT SIDE: Normal Content ================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-serif leading-[1.15]">
              Smart Power, <br />
              <span className="bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Brighter Future.
              </span>
            </h2>

            <div className="mt-6 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Founded in 2019, Skye Electrical & Solar has grown into a
                trusted name for both electrical services and solar energy
                solutions. From the very beginning, our mission has been to
                deliver high-quality, reliable, and sustainable services that
                meet the needs of both residential and commercial clients.
              </p>

              <p>
                We specialize in a wide range of services, including general
                electrical work, solar panel installation, battery storage
                solutions, and energy efficiency upgrades. Our team consists of
                skilled and certified professionals who are committed to
                ensuring every project is completed to the highest standards,
                using only quality materials and advanced technology.
              </p>

              <p className="font-semibold text-slate-800">
                With nearly a decade of experience, Skye Electrical & Solar is
                your trusted partner for safe, efficient, and sustainable energy
                solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionsSection;
