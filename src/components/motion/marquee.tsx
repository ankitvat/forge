import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  /** Reverse the scroll direction. */
  reverse?: boolean;
}

/**
 * Infinite marquee band. Pure CSS animation (compositor-only transform)
 * rather than a JS ticker — zero main-thread cost per frame. Content is
 * rendered twice and translated by -50% so the loop is seamless; the
 * duplicate is aria-hidden.
 */
export function Marquee({ children, className, reverse = false }: MarqueeProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className={cn(
          "animate-marquee flex w-max items-center will-change-transform",
          reverse && "[animation-direction:reverse]",
        )}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
