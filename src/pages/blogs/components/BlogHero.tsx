import { ArrowLeft } from "lucide-react";
import { useNavigation } from "../../../context";

export function BlogHero() {
  const { navigate } = useNavigation();

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 text-white border-b border-slate-800">
      {/* ================= FULL-WIDTH HERO BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
        <img
          src="/assets/banner/banner-solar-field.jpg"
          alt="Sky Electrical & Solar Clean Energy Knowledge Hub"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
          loading="eager"
        />

        {/* Deep Cinematic Gradient Overlays for High-Contrast Text Legibility */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/65 to-slate-950/50 lg:to-slate-950/10" />
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-transparent to-slate-950/55" />

        {/* Ambient Warm Solar Radiance Accents */}
        <div className="absolute -top-20 left-1/4 w-120 h-120 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* ================= HERO CONTENT (FULL-WIDTH CONTAINER) ================= */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-28 sm:pt-12 lg:pt-14 pb-16 sm:pb-20">
        {/* Breadcrumb Navigation */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300 mb-6">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-1 hover:text-amber-400 transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Home</span>
          </button>
          <span>/</span>
          <span className="text-amber-400 font-semibold">Blogs &amp; Solar Knowledge Hub</span>
        </div>

        {/* Main Header Text */}
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-md">
            Clean Energy Insights &amp;{" "}
            <span className="bg-linear-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              Solar Knowledge Hub
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow-xs">
            Practical breakdowns on Australian solar system sizing, battery payback ROI,
            state-specific rebates (STC &amp; PDRS), and grid regulations authored by certified
            master electricians.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BlogHero;
