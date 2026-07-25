"use client";

import { m, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
  children: ReactNode;
  /** Seconds to hold before the enter animation starts. */
  delay?: number;
  /** Rise distance in px. */
  y?: number;
  className?: string;
  /** Portion of the element visible before triggering (0–1). */
  amount?: number;
}

/**
 * Scroll-triggered fade-and-rise. Fires once, the first time the element
 * enters the viewport. Falls back to a plain fade for reduced motion.
 */
export function Reveal({ children, delay = 0, y = 32, className, amount = 0.3 }: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </m.div>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  /** Seconds between each child's entrance. */
  gap?: number;
  amount?: number;
}

const staggerParent = (gap: number): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap } },
});

/** Parent that staggers every direct <StaggerItem> child on scroll. */
export function Stagger({ children, className, gap = 0.1, amount = 0.2 }: StaggerProps) {
  return (
    <m.div
      className={className}
      variants={staggerParent(gap)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </m.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <m.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : 36 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
      }}
    >
      {children}
    </m.div>
  );
}
