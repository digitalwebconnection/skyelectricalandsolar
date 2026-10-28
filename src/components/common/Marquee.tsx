import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cn } from "../../utils";

export interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  direction?: "ltr" | "rtl";
  pauseOnHover?: boolean;
  children: ReactNode;
  repeat?: number;
  duration?: number;
  gap?: string;
}

export function Marquee({
  className,
  reverse = false,
  direction,
  pauseOnHover = true,
  children,
  repeat = 4,
  duration = 35,
  gap = "1.5rem",
  style,
  ...props
}: MarqueeProps) {
  // If direction is provided, 'ltr' triggers Left-to-Right and 'rtl' triggers Right-to-Left.
  // Otherwise, reverse=true triggers Left-to-Right.
  const isLtr = direction ? direction === "ltr" : reverse;
  const animClass = isLtr ? "animate-marquee-ltr" : "animate-marquee-rtl";

  return (
    <div
      {...props}
      style={{
        ["--gap" as string]: gap,
        ["--duration" as string]: `${duration}s`,
        ...style,
      }}
      className={cn(
        "group flex overflow-hidden p-2 gap-(--gap) select-none",
        className,
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 items-center justify-around gap-(--gap)",
            animClass,
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
          aria-hidden={i > 0 ? true : undefined}
        >
          {children}
        </div>
      ))}
    </div>
  );
}

export default Marquee;
