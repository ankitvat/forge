"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Loads only framer-motion's DOM-animation feature set (no drag/layout),
 * cutting the motion runtime in the client bundle by roughly two thirds.
 * `strict` makes any accidental `motion.*` usage (which would pull the
 * full bundle back in) throw in development — components must use `m.*`.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
