# Design Specification: Add X (Twitter) Social Link

## Overview
Add Hasan Sheikh's X (formerly Twitter) profile link (`https://x.com/thehasansheikh1`) to the portfolio website across all primary social link locations: the Hero section on the front page, the Contact section on the contact tab, and the Footer component across all pages. Also launch the local development server on `localhost` so changes can be visually reviewed before any deployment.

## Proposed Changes

### 1. Data Layer (`lib/data.ts`)
- Add `x: "https://x.com/thehasansheikh1"` to the `socialLinks` object export.

### 2. Front Page Hero Section (`sections/hero.tsx`)
- Render a new social icon button for X alongside GitHub, LinkedIn, and Email.
- Use the official X SVG logo formatted consistently with the other circular icon buttons (`w-11 h-11 rounded-full border-2 border-primary...`).
- Include `aria-label="X (Twitter)"` for accessibility.

### 3. Contact Tab (`sections/contact.tsx`)
- Render a new social icon card for X in the "Connect With Me On" container alongside GitHub, LinkedIn, and Email.
- Apply matching Framer Motion motion properties (`whileHover={{ scale: 1.1, y: -2 }}`).

### 4. Footer Component (`components/footer.tsx`)
- Add an `X` link targeting `socialLinks.x` next to GitHub, LinkedIn, and Email.

### 5. Local Server Verification
- Launch `npm run dev` and ensure localhost is accessible so the user can verify the UI changes visually.

## Verification
- Run `npm run build` to verify type safety and build correctness.
- Verify localhost dev server is running.
