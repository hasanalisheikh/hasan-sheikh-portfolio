# Add X (Twitter) Social Link Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Hasan Sheikh's X profile link (`https://x.com/thehasansheikh1`) to the portfolio website across Hero, Contact section, and Footer, and launch the local server.

**Architecture:** Update `socialLinks` in `lib/data.ts` and add X social icon SVG buttons to `sections/hero.tsx`, `sections/contact.tsx`, and `components/footer.tsx`. Launch `npm run dev` for local review.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, Framer Motion

---

### Task 1: Update `socialLinks` in `lib/data.ts`

**Files:**
- Modify: `lib/data.ts:10-14`

- [ ] **Step 1: Update socialLinks configuration**

Add `x: "https://x.com/thehasansheikh1"` to `socialLinks` in `lib/data.ts`:

```ts
export const socialLinks = {
  github: "https://github.com/hasanalisheikh",
  linkedin: "https://www.linkedin.com/in/hasan-sheikh-737145348/",
  email: "mailto:hasanalisheikh1@outlook.com",
  x: "https://x.com/thehasansheikh1",
};
```

---

### Task 2: Add X Icon Button to Hero Section (`sections/hero.tsx`)

**Files:**
- Modify: `sections/hero.tsx:31-68`

- [ ] **Step 1: Add X social button to Hero section**

Add the X social button SVG inside the social links container in `sections/hero.tsx`:

```tsx
              <a
                href={socialLinks.x}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
```

---

### Task 3: Add X Social Card to Contact Section (`sections/contact.tsx`)

**Files:**
- Modify: `sections/contact.tsx:260-318`

- [ ] **Step 1: Add X social card to Contact section**

Add the X motion card inside the "Connect With Me On" flex container in `sections/contact.tsx`:

```tsx
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={socialLinks.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-200"
                    aria-label="X (Twitter)"
                  >
                    <svg
                      className="w-8 h-8 sm:w-10 sm:h-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </motion.a>
```

---

### Task 4: Add X Text Link to Footer (`components/footer.tsx`)

**Files:**
- Modify: `components/footer.tsx:26-50`

- [ ] **Step 1: Add X link to Footer component**

Add the X link inside the flex container in `components/footer.tsx`:

```tsx
            <a
              href={socialLinks.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              X
            </a>
```

---

### Task 5: Build Verification & Launch Dev Server

**Files:**
- Run commands: `npm run build`, `npm run dev`

- [ ] **Step 1: Run build check**

Run `npm run build` to verify there are no TypeScript or JSX compilation errors.

- [ ] **Step 2: Start local server**

Run `npm run dev` in the background and verify localhost is up.
