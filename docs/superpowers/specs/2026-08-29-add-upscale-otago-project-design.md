# Add Upscale Otago Portfolio Project

**Date:** 2026-08-29  
**Status:** Approved

## Context

The portfolio's projects page is driven by the `projects` array in `lib/data.ts` and renders each entry through the shared card UI in `sections/projects.tsx`. A local Upscale Otago website folder is available as reference material only; the portfolio must not depend on that folder at runtime or copy its source code into the portfolio.

## Design

Add one new project entry at the top of the existing `projects` array:

- **Title:** `Upscale Otago`
- **Year:** `2026`
- **Description:** `Freelanced and built a responsive digital marketing website for a Dunedin client, shaping a cinematic brand experience around a clock-tower hero and visual storytelling. Added motion-led interactions, performance-minded media handling, and SEO optimisations across metadata, Open Graph, canonical URLs, keywords, and semantic page structure. Built with Next.js, React, TypeScript, Tailwind CSS, Lucide React, and Sharp.`
- **Tags:** `Next.js`, `React`, `TypeScript`, `Tailwind CSS`, `Lucide React`, `Sharp`
- **Demo:** `https://upscaleotago.com`
- **Links:** Demo only; no GitHub or LinkedIn link
- **Featured:** `true`, consistent with the existing portfolio entries

The cover image `/Users/hasansheikh/Downloads/upscaleotagoreference.png` will be copied into the repository as `public/projects/upscaleotago.png`. The existing project-card image treatment will be reused without new component logic or special layout rules.

## Scope and boundaries

- Modify only the project data and add the repository-owned cover asset.
- Do not wire the external/local Upscale Otago folder into the page, build, or runtime.
- Do not add a GitHub button, new route, new component, or new dependency.
- Preserve the existing project-card ordering and behavior for all other projects.

## Data flow and behavior

The local image is served from the portfolio's `public/projects` directory and referenced by the project's `image` field. The existing `Projects` component will render the image, description, tags, and a single external Demo link. The link will retain the current behavior of opening in a new tab with `noopener noreferrer`.

If the image is missing, the existing card fallback will render; verification must ensure the committed asset exists so the normal image path is used. The external demo's availability is not required for the portfolio build, but the URL must be exact.

## Verification

1. Confirm the new image exists in `public/projects/upscaleotago.png` and retains the source image dimensions.
2. Run the project's lint/type/build checks that are available without changing dependencies.
3. Request `/projects` from the running local server and confirm the response includes `Upscale Otago`, the image path, and `https://upscaleotago.com`.
4. Confirm `git status` shows only the intended project data, image asset, and this design document before implementation work begins.
