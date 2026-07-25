"use client";

import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** Total drift in px across the element's scroll journey. */
  drift?: number;
}

/**
 * Scroll-linked parallax: the child drifts vertically as the wrapper
 * travels through the viewport. The child is rendered slightly oversized
 * by the caller (e.g. `scale-110` on an image) so the drift never shows
 * gaps. No-ops under reduced motion.
 */
export function Parallax({ children, className, drift = 60 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-drift, drift]);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      {/* `relative` — next/image `fill` children anchor to this drifting
          layer (and it silences the "invalid position" dev warning). */}
      <m.div style={reduce ? undefined : { y }} className="relative h-full w-full">
        {children}
      </m.div>
    </div>
  );
}
