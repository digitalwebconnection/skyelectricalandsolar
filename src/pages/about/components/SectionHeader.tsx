import type { ReactNode } from "react";
import { FadeContent } from "../../../components/common/FadeContent";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}

/** Gradient-highlighted words inside section headlines */
export function Highlight({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={`bg-clip-text text-transparent ${
        tone === "dark"
          ? "bg-linear-to-r from-amber-300 via-orange-300 to-amber-400"
          : "bg-linear-to-r from-amber-500 via-orange-500 to-amber-600"
      }`}
    >
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const isDark = tone === "dark";

  return (
    <FadeContent
      effect="focus"
      blur={6}
      duration={0.9}
      threshold={0.15}
      className={`${isCenter ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${className}`}
    >
      {/* Precision Engineering Eyebrow Tag */}
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-[11px] font-extrabold tracking-[0.2em] uppercase transition-colors ${
            isDark
              ? "border-amber-400/30 bg-amber-400/10 text-amber-300 shadow-xs"
              : "border-amber-200/90 bg-amber-50/80 text-amber-800 shadow-xs"
          }`}
        >
          <span
            className={`h-2 w-2 rounded-full ${
              isDark ? "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" : "bg-amber-500"
            }`}
          />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2
        className={`${eyebrow ? "mt-3" : "mt-0"} font-serif text-2xl leading-[1.18] font-bold tracking-tight sm:text-3xl lg:text-[2.25rem] ${
          isDark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-3 text-sm leading-relaxed sm:text-base ${
            isDark ? "text-slate-300" : "text-slate-600"
          } ${isCenter ? "max-w-2xl mx-auto" : "max-w-xl"}`}
        >
          {description}
        </p>
      )}
    </FadeContent>
  );
}

export default SectionHeader;
