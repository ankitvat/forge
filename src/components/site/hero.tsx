"use client";

import Image from "next/image";
import Link from "next/link";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SplitWords } from "@/components/motion/split-words";
import { IMAGES } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;
// Entrances wait for the preloader curtain to lift.
const AFTER_LOADER = 1.9;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // Background sinks slower than the page scrolls — classic hero parallax.
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-svh flex-col justify-end overflow-hidden">
      <m.div className="absolute inset-0 -z-10" style={reduce ? undefined : { y: bgY }}>
        <Image
          src={IMAGES.hero}
          alt="Lifter chalking up under gym lights"
          fill
          priority
          sizes="100vw"
          className="scale-110 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/25" />
      </m.div>

      <div className="mx-auto w-full max-w-6xl px-5 pt-40 pb-16 sm:pb-20">
        <m.p
          className="mb-4 text-xs font-semibold tracking-[0.35em] text-primary uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: AFTER_LOADER, duration: 0.6 }}
        >
          Strength club — est. 2019
        </m.p>

        <h1 className="font-display text-[16vw] leading-[0.9] uppercase sm:text-8xl lg:text-[7.5rem]">
          <SplitWords onMount delay={AFTER_LOADER} text="Build lean muscle." />
          <br />
          <span className="text-outline">
            <SplitWords onMount delay={AFTER_LOADER + 0.35} text="Drop body fat." />
          </span>
        </h1>

        <m.div
          className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: AFTER_LOADER + 0.7, duration: 0.7, ease: EASE }}
        >
          <p className="max-w-md text-base text-muted-foreground sm:text-lg">
            Coaching, programming and a community that won&apos;t let you quit. Commit for 6 months
            — change your life forever.
          </p>
          <div className="flex shrink-0 items-center gap-3">
            <Button asChild size="lg" className="font-semibold uppercase">
              <Link href="#membership">
                Start today <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-semibold uppercase">
              <Link href="#method">The method</Link>
            </Button>
          </div>
        </m.div>
      </div>

      <m.div
        className="pointer-events-none absolute right-6 bottom-6 hidden text-muted-foreground sm:block"
        style={{ opacity: fade }}
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <ArrowDown className="size-5" />
      </m.div>
    </section>
  );
}
