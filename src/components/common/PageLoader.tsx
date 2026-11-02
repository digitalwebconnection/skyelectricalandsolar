import { Zap } from "lucide-react";

export function PageLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-[#faf8f5]">
      <div className="relative">
        <div className="h-16 w-16 rounded-2xl bg-linear-to-br from-amber-500 to-orange-500 flex items-center justify-center text-slate-950 shadow-lg shadow-orange-500/25 animate-bounce">
          <Zap className="h-8 w-8 fill-slate-950" />
        </div>
        <div className="absolute -inset-2 rounded-3xl bg-amber-400/20 blur-xl animate-pulse -z-10" />
      </div>

      <div className="mt-6 text-center space-y-1">
        <span className="text-sm font-black text-slate-900 tracking-tight block">
          Loading Energy Portal...
        </span>
        <span className="text-xs text-slate-500 font-medium">Sky Electrical &amp; Solar</span>
      </div>
    </div>
  );
}

export default PageLoader;
