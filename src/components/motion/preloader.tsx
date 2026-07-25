"use client";

import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const EASE = [0.76, 0, 0.24, 1] as const;
const TICK_MS = 18;
const MAX_MS = 2500;

/**
 * Le-mugs-style page loader: brand mark + a 0→100 counter on a black
 * curtain that slides up once the count lands. The overlay is client-only —
 * the server sends the real page so a hydration failure can never leave the
 * user stuck on a black screen. Skipped entirely under reduced motion.
 */
export function Preloader() {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || reduce) return;

    const tick = setInterval(() => {
      setCount((c) => {
        if (c >= 100) {
          clearInterval(tick);
          setTimeout(() => setDone(true), 250);
          return 100;
        }
        return Math.min(100, c + (c < 60 ? 4 : c < 90 ? 2 : 1));
      });
    }, TICK_MS);

    // Hard safety cap — no matter what, the curtain lifts.
    const safety = setTimeout(() => setDone(true), MAX_MS);

    return () => {
      clearInterval(tick);
      clearTimeout(safety);
    };
  }, [mounted, reduce]);

  if (!mounted || reduce) return null;

  return (
    <AnimatePresence>
      {!done && (
        <m.div
          className="fixed inset-0 z-[100] flex items-end justify-between bg-background p-6 sm:p-10"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: EASE }}
          aria-hidden="true"
        >
          <span className="font-display text-2xl uppercase tracking-tight">
            Forge<span className="text-primary">.</span>
          </span>
          <span className="font-display text-7xl leading-none text-primary tabular-nums sm:text-9xl">
            {count}
          </span>
        </m.div>
      )}
    </AnimatePresence>
  );
}
