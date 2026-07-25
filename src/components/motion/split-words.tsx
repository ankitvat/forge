"use client";

import { m, useReducedMotion, type Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

interface SplitWordsProps {
  text: string;
  className?: string;
  /** Seconds to hold before the first word animates. */
  delay?: number;
  /** Animate on mount (hero) instead of on scroll into view. */
  onMount?: boolean;
}

/**
 * Le-mugs-style headline reveal: each word slides up from behind a clipped
 * line, staggered left to right. Words wrap naturally — the clip is per
 * word, not per line, so no layout measurement is needed.
 *
 * The viewport trigger lives on the UNCLIPPED root span and drives the
 * words via variants. Observing the words themselves would never fire:
 * they start translated fully outside their overflow-hidden wrapper, so
 * an IntersectionObserver sees zero visible pixels.
 */
export function SplitWords({ text, className, delay = 0, onMount = false }: SplitWordsProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  const wordVariants: Variants = {
    hidden: { y: reduce ? 0 : "110%", opacity: reduce ? 0 : 1 },
    show: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, delay: delay + i * 0.07, ease: EASE },
    }),
  };

  return (
    <m.span
      className={className}
      aria-label={text}
      initial="hidden"
      {...(onMount
        ? { animate: "show" }
        : { whileInView: "show", viewport: { once: true, amount: 0.5 } })}
    >
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="inline-block overflow-hidden pb-[0.08em] align-bottom"
        >
          <m.span
            className="inline-block will-change-transform"
            variants={wordVariants}
            custom={i}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </m.span>
        </span>
      ))}
    </m.span>
  );
}
