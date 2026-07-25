# FORGE — Strength Club

A dark, type-driven gym landing page. Next.js 16 (App Router, Turbopack), Tailwind CSS 4, shadcn/ui, Framer Motion.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Project phases

**Phase 1 — Boilerplate.** create-next-app (TS, Tailwind 4, src dir), shadcn/ui (radix, css variables), framer-motion. Dark-only brand theme (near-black canvas, volt-lime primary) in `globals.css`; Anton display + Inter body via `next/font`.

**Phase 2 — Content & animations.** All copy/data in `src/lib/content.ts`; sections in `src/components/site/*`; motion primitives in `src/components/motion/*`:

- `Preloader` — 0→100 counter curtain that slides away (le-mugs style)
- `SplitWords` — per-word clipped slide-up headline reveals (viewport trigger lives on the unclipped root — observing clipped words never fires)
- `Reveal` / `Stagger` / `StaggerItem` — scroll-triggered fade-rise
- `Marquee` — infinite band, pure CSS transform (no JS per frame)
- `Parallax` — scroll-linked drift via `useScroll`/`useTransform`
- `Counter` — in-view count-up writing directly to the DOM node

**Phase 3 — Optimizations.**

- `LazyMotion` + `m.*` components (`strict`) — ships only framer-motion's DOM-animation subset (~⅔ smaller motion runtime); `strict` throws if full `motion.*` sneaks back in
- `prefers-reduced-motion` respected by every primitive (fades or renders final state)
- Hero image `priority`; all images through `next/image` with explicit `sizes`
- Compositor-only animations (transform/opacity); counters bypass React re-renders
- Metadata (OG/Twitter), `robots.ts`, `sitemap.ts`

> Replace `forge.example.com` in `layout.tsx`, `robots.ts` and `sitemap.ts` with the real domain before deploying.
