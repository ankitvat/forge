import Link from "next/link";
import { NAV_LINKS } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-4xl uppercase">
            Forge<span className="text-primary">.</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Strength club & coaching. Built for people who show up.
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2">
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
      </div>
      <div className="border-t border-white/5 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Forge Strength Club. Train hard, recover harder.
      </div>
    </footer>
  );
}
