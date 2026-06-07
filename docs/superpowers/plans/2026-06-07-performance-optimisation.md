# Performance Optimisation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Eliminate all main-thread animation bottlenecks and image bloat so the site loads instantly and stays smooth at 60 fps.

**Architecture:** Replace Framer Motion's JS-driven `animate` loops (which run on the main thread via requestAnimationFrame) with pure CSS `@keyframes` animations (which run on the compositor thread). Compress over-sized images at source, remove stray files, and tighten Next.js config. No new dependencies — the stack stays as Next.js 16 + Framer Motion (kept only for entrance transitions) + Tailwind 4.

**Tech Stack:** Next.js 16, Framer Motion 12, Tailwind CSS 4, TypeScript, `sharp` (built into Next.js image pipeline), `sips` (macOS built-in) for image compression.

---

## Root Cause Summary

| Issue | Impact |
|---|---|
| 36 Framer Motion `animate` particles (5 keyframes each, infinite) | Massive JS animation loop on main thread |
| Continuous `animate` on every project card (boxShadow, textShadow pulses) | More JS loops while scrolling |
| Hero photo continuous `y / scale / opacity` loop + 4 background blobs with JS animations | More main thread work on hero |
| `profile.jpg` 5160×3440 px (820 KB) | Slow LCP |
| `portfolio.png` 1.66 MB, `monad.png` 984 KB | Slow project page |
| Stray files in root (`1747982102828.jpeg`, photo/screenshot files) | Repo clutter |
| Unused default Next.js public assets (`file.svg`, `globe.svg`, `window.svg`, `vercel.svg`) | Clutter |
| Redundant `particles-client.tsx` wrapper | Unnecessary file |

## File Map

| Action | File | What changes |
|---|---|---|
| Delete | `1747982102828.jpeg` | Stray root file |
| Delete | `Photo on 15-02-2026 at 1.12 pm #4.jpg` | Stray root file |
| Delete | `Screenshot 2026-05-16 at 3.34.30 pm.png` | Stray root file |
| Delete | `public/file.svg`, `public/globe.svg`, `public/window.svg`, `public/vercel.svg` | Unused Next.js defaults |
| Compress | `public/profile.jpg` | Resize to 900px wide, re-save as progressive JPEG |
| Compress | `public/projects/portfolio.png` | Resize to 1400px wide |
| Compress | `public/projects/monad.png` | Resize to 1400px wide |
| Compress | `public/projects/factorlab.png` | Resize to 1400px wide |
| Delete | `components/particles-client.tsx` | Merged into layout |
| Rewrite | `components/floating-particles.tsx` | CSS-only particles, no Framer Motion |
| Modify | `app/layout.tsx` | Import FloatingParticles directly (no wrapper), add `<link rel="preload">` for profile image |
| Modify | `sections/projects.tsx` | Remove continuous JS `animate` on cards; use CSS |
| Modify | `sections/hero.tsx` | Remove continuous JS `animate` on background blobs; keep entrance only |
| Modify | `app/globals.css` | Add CSS keyframes for particles + card glow |
| Modify | `next.config.ts` | Add `deviceSizes`, `imageSizes` |

---

## Task 1: Delete stray root files and unused public assets

**Files:** `1747982102828.jpeg`, `Photo on 15-02-2026 at 1.12 pm #4.jpg`, `Screenshot 2026-05-16 at 3.34.30 pm.png`, `public/file.svg`, `public/globe.svg`, `public/window.svg`, `public/vercel.svg`

- [ ] **Step 1: Delete stray root files**

```bash
rm "/Users/hasansheikh/Desktop/hasan-sheikh-portfolio/1747982102828.jpeg"
rm "/Users/hasansheikh/Desktop/hasan-sheikh-portfolio/Photo on 15-02-2026 at 1.12 pm #4.jpg"
rm "/Users/hasansheikh/Desktop/hasan-sheikh-portfolio/Screenshot 2026-05-16 at 3.34.30 pm.png"
```

- [ ] **Step 2: Delete unused default Next.js public assets**

```bash
rm /Users/hasansheikh/Desktop/hasan-sheikh-portfolio/public/file.svg
rm /Users/hasansheikh/Desktop/hasan-sheikh-portfolio/public/globe.svg
rm /Users/hasansheikh/Desktop/hasan-sheikh-portfolio/public/window.svg
rm /Users/hasansheikh/Desktop/hasan-sheikh-portfolio/public/vercel.svg
```

- [ ] **Step 3: Verify nothing references the deleted files**

```bash
grep -r "file.svg\|globe.svg\|window.svg\|vercel.svg\|1747982102828\|Photo on 15" /Users/hasansheikh/Desktop/hasan-sheikh-portfolio/app /Users/hasansheikh/Desktop/hasan-sheikh-portfolio/components /Users/hasansheikh/Desktop/hasan-sheikh-portfolio/sections /Users/hasansheikh/Desktop/hasan-sheikh-portfolio/lib
```

Expected: no output.

- [ ] **Step 4: Commit**

```bash
cd /Users/hasansheikh/Desktop/hasan-sheikh-portfolio
git add -A
git commit -m "chore: delete stray root files and unused default Next.js public assets"
```

---

## Task 2: Compress oversized images

All images stay in-place; `next/image` still serves them at correct display sizes with WebP/AVIF. But source size affects server memory and build time — and serves as fallback on older browsers.

**Files:** `public/profile.jpg`, `public/projects/portfolio.png`, `public/projects/monad.png`, `public/projects/factorlab.png`

- [ ] **Step 1: Compress profile.jpg to 900px wide**

`sips` is available on all macOS without install.

```bash
cd /Users/hasansheikh/Desktop/hasan-sheikh-portfolio
sips -Z 900 --setProperty formatOptions 85 public/profile.jpg
```

Expected: file shrinks from ~820 KB to ~80-120 KB.

- [ ] **Step 2: Verify profile.jpg is intact**

```bash
file public/profile.jpg && sips -g pixelWidth -g pixelHeight public/profile.jpg
```

Expected output includes `JPEG image data` and width ≤ 900.

- [ ] **Step 3: Compress portfolio.png to 1400px wide and convert to JPEG**

PNG with alpha is large. Convert to JPEG (no transparency needed for a screenshot).

```bash
sips -Z 1400 --setProperty format jpeg --setProperty formatOptions 85 public/projects/portfolio.png --out public/projects/portfolio.jpg
rm public/projects/portfolio.png
```

- [ ] **Step 4: Compress monad.png similarly**

```bash
sips -Z 1400 --setProperty format jpeg --setProperty formatOptions 85 public/projects/monad.png --out public/projects/monad.jpg
rm public/projects/monad.png
```

- [ ] **Step 5: Compress factorlab.png similarly**

```bash
sips -Z 1400 --setProperty format jpeg --setProperty formatOptions 85 public/projects/factorlab.png --out public/projects/factorlab.jpg
rm public/projects/factorlab.png
```

- [ ] **Step 6: Update image references in lib/data.ts**

Open `lib/data.ts` and change all `.png` project image references to `.jpg`:

Find: `"/projects/portfolio.png"` → Replace with: `"/projects/portfolio.jpg"`
Find: `"/projects/monad.png"` → Replace with: `"/projects/monad.jpg"`
Find: `"/projects/factorlab.png"` → Replace with: `"/projects/factorlab.jpg"`

```bash
sed -i '' 's|/projects/portfolio.png|/projects/portfolio.jpg|g; s|/projects/monad.png|/projects/monad.jpg|g; s|/projects/factorlab.png|/projects/factorlab.jpg|g' /Users/hasansheikh/Desktop/hasan-sheikh-portfolio/lib/data.ts
```

- [ ] **Step 7: Check file sizes**

```bash
ls -lh public/profile.jpg public/projects/
```

Expected: all files under 200 KB.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "perf: compress and resize all source images"
```

---

## Task 3: Replace Framer Motion particles with CSS-only particles

This is the single biggest win. 36 Framer Motion `animate` props = 36 JS animation loops on the main thread. Replacing with CSS `@keyframes` moves all animation work to the compositor thread — zero JS cost after mount.

**Files:** `components/floating-particles.tsx` (rewrite), `app/globals.css` (add keyframes), `components/particles-client.tsx` (delete), `app/layout.tsx` (update import)

- [ ] **Step 1: Add CSS particle keyframes to globals.css**

Append to the end of `app/globals.css`:

```css
/* Particle animations — compositor-thread only, no JS */
@keyframes particle-float-a {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(18px, -30px) scale(1.15); }
  66%       { transform: translate(-12px, 10px) scale(0.9); }
}
@keyframes particle-float-b {
  0%, 100% { transform: translate(0, 0) scale(1); }
  40%       { transform: translate(-20px, -18px) scale(1.1); }
  70%       { transform: translate(14px, 22px) scale(0.95); }
}
@keyframes particle-float-c {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50%       { transform: translate(22px, -12px) scale(1.2); }
}
@keyframes particle-opacity {
  0%, 100% { opacity: var(--p-opacity-low); }
  50%       { opacity: var(--p-opacity-high); }
}
```

- [ ] **Step 2: Rewrite components/floating-particles.tsx**

Replace the entire file content with:

```tsx
const PARTICLES = [
  { id:  0, x: 13,  y:  7,  size: 5, opL: 0.12, opH: 0.22, dur: 18, del: 0,   anim: "a", color: "0,212,255" },
  { id:  1, x: 50,  y: 20,  size: 3, opL: 0.10, opH: 0.18, dur: 22, del: 1.5, anim: "b", color: "56,189,248" },
  { id:  2, x: 80,  y: 35,  size: 6, opL: 0.14, opH: 0.25, dur: 16, del: 3,   anim: "c", color: "14,165,233" },
  { id:  3, x: 25,  y: 60,  size: 4, opL: 0.11, opH: 0.20, dur: 20, del: 0.8, anim: "a", color: "96,165,250" },
  { id:  4, x: 68,  y: 75,  size: 3, opL: 0.09, opH: 0.16, dur: 25, del: 4,   anim: "b", color: "0,212,255" },
  { id:  5, x: 90,  y: 10,  size: 5, opL: 0.13, opH: 0.22, dur: 19, del: 2,   anim: "c", color: "6,182,212" },
  { id:  6, x: 40,  y: 88,  size: 4, opL: 0.10, opH: 0.19, dur: 23, del: 5,   anim: "a", color: "56,189,248" },
  { id:  7, x: 10,  y: 45,  size: 6, opL: 0.15, opH: 0.26, dur: 17, del: 1,   anim: "b", color: "14,165,233" },
  { id:  8, x: 60,  y: 55,  size: 3, opL: 0.08, opH: 0.14, dur: 28, del: 6,   anim: "c", color: "0,212,255" },
  { id:  9, x: 35,  y: 30,  size: 5, opL: 0.12, opH: 0.21, dur: 21, del: 3.5, anim: "a", color: "96,165,250" },
  { id: 10, x: 75,  y: 90,  size: 4, opL: 0.11, opH: 0.18, dur: 24, del: 7,   anim: "b", color: "6,182,212" },
  { id: 11, x: 55,  y: 15,  size: 3, opL: 0.09, opH: 0.17, dur: 26, del: 2.5, anim: "c", color: "56,189,248" },
  { id: 12, x: 20,  y: 80,  size: 5, opL: 0.13, opH: 0.23, dur: 20, del: 4.5, anim: "a", color: "14,165,233" },
  { id: 13, x: 85,  y: 50,  size: 4, opL: 0.10, opH: 0.18, dur: 22, del: 8,   anim: "b", color: "0,212,255" },
  { id: 14, x: 45,  y: 65,  size: 6, opL: 0.14, opH: 0.24, dur: 18, del: 1.2, anim: "c", color: "96,165,250" },
] as const;

export function FloatingParticles() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden>
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: `rgba(${p.color}, ${p.opL})`,
            boxShadow: `0 0 ${p.size * 3}px rgba(${p.color}, ${p.opL * 0.6})`,
            "--p-opacity-low": p.opL,
            "--p-opacity-high": p.opH,
            animation: `particle-float-${p.anim} ${p.dur}s ease-in-out ${p.del}s infinite, particle-opacity ${p.dur * 0.7}s ease-in-out ${p.del}s infinite`,
            willChange: "transform, opacity",
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
```

- [ ] **Step 3: Delete components/particles-client.tsx**

```bash
rm /Users/hasansheikh/Desktop/hasan-sheikh-portfolio/components/particles-client.tsx
```

- [ ] **Step 4: Update app/layout.tsx to import FloatingParticles directly**

In `app/layout.tsx`, replace:
```tsx
import { ParticlesClient } from "@/components/particles-client";
```
with:
```tsx
import { FloatingParticles } from "@/components/floating-particles";
```

And replace `<ParticlesClient />` with `<FloatingParticles />`.

The final layout body becomes:
```tsx
<ThemeProvider
  attribute="class"
  defaultTheme="dark"
  forcedTheme="dark"
  disableTransitionOnChange={false}
>
  <FloatingParticles />
  <Navbar />
  <main className="min-h-screen">
    {children}
  </main>
  <WaveDivider />
  <Footer />
</ThemeProvider>
```

- [ ] **Step 5: Build and verify no TypeScript errors**

```bash
cd /Users/hasansheikh/Desktop/hasan-sheikh-portfolio && npx tsc --noEmit 2>&1
```

Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "perf: replace 36 Framer Motion particle loops with CSS compositor animations"
```

---

## Task 4: Remove continuous Framer Motion animations from project cards

Every project card has a `boxShadow` pulse and title `textShadow` pulse running as JS animations. Replace these with CSS.

**Files:** `sections/projects.tsx`, `app/globals.css`

- [ ] **Step 1: Add card-glow CSS animation to globals.css**

Append to `app/globals.css`:

```css
@keyframes card-glow {
  0%, 100% { box-shadow: 0 10px 30px rgba(0,0,0,0.35), 0 0 0px rgba(0,212,255,0.0); }
  50%       { box-shadow: 0 12px 34px rgba(0,0,0,0.38), 0 0 22px rgba(0,212,255,0.14); }
}
.card-glow-pulse {
  animation: card-glow 2.8s ease-in-out infinite;
}
```

- [ ] **Step 2: Refactor project cards in sections/projects.tsx**

Replace the inner `<motion.div whileHover ... animate={{ boxShadow: [...] }} ...>` wrapper for each card. Change it to a plain `<div>` with the `card-glow-pulse` class:

Find this pattern (the inner motion.div with boxShadow animate):
```tsx
<motion.div
  whileHover={{ y: -8 }}
  animate={{
    boxShadow: [
      "0 10px 30px rgba(0,0,0,0.35), 0 0 0px rgba(0,212,255,0.0)",
      "0 12px 34px rgba(0,0,0,0.38), 0 0 22px rgba(0,212,255,0.14)",
      "0 10px 30px rgba(0,0,0,0.35), 0 0 0px rgba(0,212,255,0.0)",
    ],
  }}
  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.12 }}
  className="group relative bg-secondary border border-border hover:border-primary/60 rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_34px_rgba(0,212,255,0.2)] transition-all duration-300 flex flex-col h-full"
>
```

Replace with:
```tsx
<div
  className="group relative bg-secondary border border-border hover:border-primary/60 rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_34px_rgba(0,212,255,0.2)] transition-all duration-300 hover:-translate-y-2 flex flex-col h-full card-glow-pulse"
>
```

Also find and remove the continuous `animate` on project title h3 (textShadow pulse):
```tsx
<motion.h3
  className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground"
  animate={{
    textShadow: [
      "0 0 0px rgba(0,212,255,0)",
      "0 0 14px rgba(0,212,255,0.22)",
      "0 0 0px rgba(0,212,255,0)",
    ],
  }}
  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 }}
>
  {project.title}
</motion.h3>
```

Replace with a plain element (no animation needed on title text):
```tsx
<h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">
  {project.title}
</h3>
```

And remove the continuous `animate` on the page title h1 (y + textShadow loop):
```tsx
<motion.h1
  className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground inline-block"
  animate={{
    y: [0, -4, 0],
    textShadow: [
      "0 0 0px rgba(0,212,255,0)",
      "0 0 24px rgba(0,212,255,0.3)",
      "0 0 0px rgba(0,212,255,0)",
    ],
  }}
  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
>
```

Replace with a static heading (entrance motion already handled by parent `motion.div`):
```tsx
<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground inline-block">
```

Also close the closing `</motion.h1>` tag → `</h1>`.

The `motion.span` for `!` blinking opacity can stay — it's a single element. Keep it.

Also: the outer `<motion.div>` that wraps each card (the stagger container item) can remain as a motion.div for the entrance animation — only remove the inner glow animate.

- [ ] **Step 3: Check TypeScript**

```bash
npx tsc --noEmit 2>&1
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add sections/projects.tsx app/globals.css
git commit -m "perf: replace JS animate card/title glow loops with CSS animations"
```

---

## Task 5: Remove continuous JS animations from hero section

Hero has: continuous `y` loop on the photo (JS), 4 background `motion.div` blobs with `animate` (JS), 2 blobs inside the hexagon with `animate` (JS). Replace with CSS.

**Files:** `sections/hero.tsx`, `app/globals.css`

- [ ] **Step 1: Add hero-float CSS animation to globals.css**

Append to `app/globals.css`:

```css
@keyframes hero-float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-12px); }
}
.hero-photo-float {
  animation: hero-float 3s ease-in-out infinite;
}

@keyframes hex-glow-pulse {
  0%, 100% { opacity: 0.25; transform: scale(1.1); }
  50%       { opacity: 0.40; transform: scale(1.15); }
}
@keyframes hex-glow-pulse-2 {
  0%, 100% { opacity: 0.15; transform: scale(1.05); }
  50%       { opacity: 0.25; transform: scale(1.08); }
}
.hex-glow-a { animation: hex-glow-pulse  3s ease-in-out infinite; }
.hex-glow-b { animation: hex-glow-pulse-2 3s ease-in-out 0.5s infinite; }
```

- [ ] **Step 2: Update the hero photo motion.div**

In `sections/hero.tsx`, the outer photo wrapper is:
```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{
    opacity: 1,
    scale: 1,
    y: [0, -12, 0],
  }}
  transition={{
    opacity: { duration: 0.6, delay: 0.2 },
    scale: { duration: 0.6, delay: 0.2 },
    y: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.8,
    },
  }}
  className="order-1 lg:order-2 flex justify-center lg:justify-end"
>
```

Replace with — keep entrance animation, add CSS float class:
```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="order-1 lg:order-2 flex justify-center lg:justify-end hero-photo-float"
>
```

- [ ] **Step 3: Replace hex glow motion.divs with CSS-driven divs**

Find the two `<motion.div ... className="absolute inset-0 hexagon-clip bg-primary/25 blur-xl">` blobs:

```tsx
<motion.div
  className="absolute inset-0 hexagon-clip bg-primary/25 blur-xl"
  animate={{
    scale: [1.1, 1.15, 1.1],
    opacity: [0.25, 0.4, 0.25],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
<motion.div
  className="absolute inset-0 hexagon-clip bg-primary/15"
  animate={{
    scale: [1.05, 1.08, 1.05],
    opacity: [0.15, 0.25, 0.15],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
    delay: 0.5,
  }}
/>
```

Replace with plain divs using CSS classes:
```tsx
<div className="absolute inset-0 hexagon-clip bg-primary/25 blur-xl hex-glow-a" />
<div className="absolute inset-0 hexagon-clip bg-primary/15 hex-glow-b" />
```

- [ ] **Step 4: Replace background blob motion.divs with plain divs**

At the bottom of the hero section there are 4 background divs — 2 with CSS `aurora-blob` class (already CSS — leave them) and 2 with JS `animate`:

```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 0.08, scale: 1 }}
  transition={{ duration: 1 }}
  className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"
/>
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 0.05, scale: 1 }}
  transition={{ duration: 1, delay: 0.2 }}
  className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"
/>
```

These have a one-shot entrance `animate` (opacity 0→0.08). Change to use CSS classes with initial opacity set directly (no JS needed since these don't need to animate in):
```tsx
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl opacity-[0.08]" />
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl opacity-[0.05]" />
```

- [ ] **Step 5: TypeScript check**

```bash
npx tsc --noEmit 2>&1
```

Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add sections/hero.tsx app/globals.css
git commit -m "perf: replace hero continuous JS animations with CSS keyframes"
```

---

## Task 6: Update next.config.ts image optimisation

Add `deviceSizes` and `imageSizes` to avoid generating too many variants, and verify formats.

**Files:** `next.config.ts`

- [ ] **Step 1: Update next.config.ts**

Replace the entire file with:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 828, 1080, 1280, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
```

- [ ] **Step 2: Verify build works**

```bash
cd /Users/hasansheikh/Desktop/hasan-sheikh-portfolio && npm run build 2>&1 | tail -30
```

Expected: build completes with no errors. May show route sizes.

- [ ] **Step 3: Commit**

```bash
git add next.config.ts
git commit -m "perf: tune Next.js image optimisation config"
```

---

## Task 7: Add lazy loading and correct priority to images

`profile.jpg` is LCP — it already has `priority`. Project images are below the fold on the projects page — confirm they do NOT have `priority` and check `loading` attribute is absent (Next.js adds `loading="lazy"` automatically for non-priority images).

**Files:** `sections/projects.tsx`, `sections/hero.tsx`

- [ ] **Step 1: Verify hero profile image has priority**

In `sections/hero.tsx`, the Image component should have `priority`:
```tsx
<Image
  src={personalInfo.avatar}
  alt={personalInfo.name}
  fill
  priority
  sizes="(max-width: 640px) 288px, (max-width: 768px) 384px, 448px"
  className="object-cover"
/>
```

If `priority` is already present, no change needed. Confirm and move on.

- [ ] **Step 2: Verify project images do NOT have priority**

In `sections/projects.tsx`, the project Image components should NOT have `priority`. Confirm:
```tsx
<Image
  src={project.image}
  alt={project.title}
  fill
  sizes="(max-width: 1024px) calc(100vw - 2rem), calc((1152px - 1.5rem) / 2)"
  className={project.imageContain ? "object-contain bg-[#0d0d0d]" : "object-cover"}
/>
```

No `priority` here means Next.js applies `loading="lazy"` automatically. Good.

- [ ] **Step 3: Add `fetchPriority="high"` hint to hero section**

In `sections/hero.tsx`, update the Image to also include fetchPriority:
```tsx
<Image
  src={personalInfo.avatar}
  alt={personalInfo.name}
  fill
  priority
  fetchPriority="high"
  sizes="(max-width: 640px) 288px, (max-width: 768px) 384px, 448px"
  className="object-cover"
/>
```

- [ ] **Step 4: TypeScript check**

```bash
npx tsc --noEmit 2>&1
```

Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add sections/hero.tsx sections/projects.tsx
git commit -m "perf: verify lazy loading on project images, add fetchPriority to LCP image"
```

---

## Task 8: Final cleanup — remove unused imports and verify build

After all changes, floating-particles.tsx no longer uses framer-motion. particles-client.tsx is deleted. Confirm no dead imports.

**Files:** `components/floating-particles.tsx`, `app/layout.tsx`

- [ ] **Step 1: Verify floating-particles.tsx has no framer-motion import**

The rewritten file in Task 3 should have no `import { motion } from "framer-motion"`. Confirm:

```bash
grep -n "framer-motion\|useMemo" /Users/hasansheikh/Desktop/hasan-sheikh-portfolio/components/floating-particles.tsx
```

Expected: no output.

- [ ] **Step 2: Verify layout.tsx has no particles-client import**

```bash
grep -n "particles-client\|ParticlesClient" /Users/hasansheikh/Desktop/hasan-sheikh-portfolio/app/layout.tsx
```

Expected: no output.

- [ ] **Step 3: Run full build**

```bash
npm run build 2>&1
```

Expected: exits 0. Note any warnings.

- [ ] **Step 4: Run dev server briefly to visually confirm**

```bash
npm run dev &
sleep 4
open http://localhost:3000
```

Visually confirm: particles visible, hero photo floating, project cards have glow pulse, no JS errors in console.

```bash
kill %1
```

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "perf: final cleanup — remove dead imports, verify build"
```

---

## Self-Review

**Spec coverage:**
- ✅ Website loads slow → images compressed, JS animation loops eliminated
- ✅ Things get stuck → 36+N main-thread animate loops replaced with CSS compositor
- ✅ Stray files → Task 1 deletes root stray files and unused public assets
- ✅ Ordered code/folders → particles-client wrapper deleted, imports direct, no redundant files

**Placeholder scan:** No TBD, no TODOs, all steps have exact commands or code.

**Type consistency:** `FloatingParticles` export name is consistent across tasks 3 and 8. `PARTICLES` constant defined once in Task 3. No conflicts.
