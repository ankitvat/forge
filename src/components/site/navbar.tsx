"use client";

import Link from "next/link";
import { m, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/content";

/**
 * Fixed header that slides away when scrolling down and returns on the
 * first upward scroll — keeps the oversized hero type unobstructed.
 */
export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(latest > prev && latest > 120);
  });

  return (
    <m.header
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-md"
      animate={{ y: hidden ? "-100%" : 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="#" className="font-display text-xl uppercase tracking-tight">
          Forge<span className="text-primary">.</span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Button asChild size="sm" className="font-semibold uppercase">
          <Link href="#contact">Start today</Link>
        </Button>
      </nav>
    </m.header>
  );
}
