import { ArrowLeft, Home, Zap, Phone } from "lucide-react";
import { useNavigation } from "../context";
import { CONTACT_INFO } from "../constants";

export function NotFoundPage() {
  const { navigate } = useNavigation();

  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center px-4 py-24 bg-[#faf8f5] text-slate-900 text-center relative overflow-hidden">
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-140 h-140 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-md w-full space-y-6">
        <div className="h-20 w-20 mx-auto rounded-3xl bg-linear-to-br from-amber-500 to-orange-500 flex items-center justify-center text-slate-950 shadow-xl shadow-orange-500/20">
          <Zap className="h-10 w-10 fill-slate-950" />
        </div>

        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-600 block mb-1">
            Error 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Page Not Found
          </h1>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            The clean energy page or engineering guide you are looking for does not exist or may
            have been relocated.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
          >
            <Home className="h-4 w-4" />
            <span>Return to Home</span>
          </button>

          <button
            type="button"
            onClick={() => navigate("/services")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black text-xs shadow-md transition-all cursor-pointer"
          >
            <span>Explore Services</span>
            <ArrowLeft className="h-4 w-4 rotate-180" />
          </button>
        </div>

        <div className="pt-6 border-t border-slate-200/80 text-xs text-slate-500 flex items-center justify-center gap-2">
          <Phone className="h-3.5 w-3.5 text-amber-500" />
          <span>Need help? Call our engineers: </span>
          <a
            href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`}
            className="font-bold text-slate-900 hover:text-orange-600"
          >
            {CONTACT_INFO.phone1}
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
