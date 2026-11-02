import type * as React from "react";
import { cn } from "../../utils/helpers";

export interface ShineBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  borderWidth?: number;
  duration?: number;
  shineColor?: string | string[];
}

export function ShineBorder({
  borderWidth = 1.5,
  duration = 10,
  shineColor = ["#f59e0b", "#ea580c", "#fbbf24"],
  className,
  style,
  ...props
}: ShineBorderProps) {
  return (
    <>
      <style>{`
        @keyframes shineBorderAnim {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
        .magic-shine-border {
          animation: shineBorderAnim var(--duration, 10s) infinite linear;
        }
      `}</style>
      <div
        style={
          {
            "--border-width": `${borderWidth}px`,
            "--duration": `${duration}s`,
            backgroundImage: `radial-gradient(transparent,transparent, ${
              Array.isArray(shineColor) ? shineColor.join(",") : shineColor
            },transparent,transparent)`,
            backgroundSize: "300% 300%",
            mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "var(--border-width)",
            ...style,
          } as React.CSSProperties
        }
        className={cn(
          "magic-shine-border pointer-events-none absolute inset-0 size-full rounded-[inherit] will-change-[background-position] z-20",
          className
        )}
        {...props}
      />
    </>
  );
}

export default ShineBorder;

