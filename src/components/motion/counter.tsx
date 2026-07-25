"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

interface CounterProps {
  to: number;
  suffix?: string;
  className?: string;
}

/**
 * Counts from 0 to `to` when scrolled into view. Writes straight to the
 * DOM node (no per-frame React renders). Renders the final value under
 * reduced motion or before hydration completes.
 */
export function Counter({ to, suffix = "", className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView || reduce || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        node.textContent = `${Math.round(v).toLocaleString()}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduce, to, suffix]);

  return (
    <span ref={ref} className={className}>
      {to.toLocaleString()}
      {suffix}
    </span>
  );
}
