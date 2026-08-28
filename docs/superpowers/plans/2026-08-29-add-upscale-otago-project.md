# Add Upscale Otago Portfolio Project Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a self-contained Upscale Otago project card to the portfolio using the local reference site's story and the supplied cover image, with a Demo link to `https://upscaleotago.com`.

**Architecture:** Reuse the existing data-driven project-card renderer. Copy the supplied image into the portfolio's `public/projects` assets and add one `Project` object to `lib/data.ts`; no component, route, dependency, or external-folder wiring is needed.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS, Next Image, existing project data model.

---

### Task 1: Add the repository-owned cover image

**Files:**
- Create: `public/projects/upscaleotago.png`
- Source: `/Users/hasansheikh/Downloads/upscaleotagoreference.png`

- [ ] **Step 1: Copy the supplied image into the portfolio asset directory**

Run:

```bash
cp /Users/hasansheikh/Downloads/upscaleotagoreference.png public/projects/upscaleotago.png
```

Expected: `public/projects/upscaleotago.png` exists and the source Downloads file remains unchanged.

- [ ] **Step 2: Verify the copied asset**

Run:

```bash
file public/projects/upscaleotago.png
sips -g pixelWidth -g pixelHeight public/projects/upscaleotago.png
```

Expected: PNG image data with `pixelWidth: 1922` and `pixelHeight: 1016`.

- [ ] **Step 3: Commit the asset**

Run:

```bash
git add public/projects/upscaleotago.png
git commit -m "feat: add Upscale Otago project cover"
```

### Task 2: Add the Upscale Otago project data

**Files:**
- Modify: `lib/data.ts` in the `projects` array

- [ ] **Step 1: Add the new project object at the top of `projects`**

Insert this object before the existing Harvora entry:

```ts
  {
    id: 6,
    title: "Upscale Otago",
    year: "2026",
    description:
      "Freelanced and built a responsive digital marketing website for a Dunedin client, shaping a cinematic brand experience around a clock-tower hero and visual storytelling. Added motion-led interactions, performance-minded media handling, and SEO optimisations across metadata, Open Graph, canonical URLs, keywords, and semantic page structure. Built with Next.js, React, TypeScript, Tailwind CSS, Lucide React, and Sharp.",
    image: "/projects/upscaleotago.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lucide React", "Sharp"],
    demo: "https://upscaleotago.com",
    featured: true,
  },
```

The entry must not set `github` or `linkedin`, so the existing renderer produces only the Demo button.

- [ ] **Step 2: Run the available static check**

Run:

```bash
npm run lint
```

Expected: the command exits successfully with no new lint errors.

- [ ] **Step 3: Commit the data change**

Run:

```bash
git add lib/data.ts
git commit -m "feat: add Upscale Otago portfolio project"
```

### Task 3: Verify the rendered project page

**Files:**
- No additional files

- [ ] **Step 1: Confirm the running dev server serves the project route**

Run:

```bash
curl --max-time 30 -sS -o /tmp/hasan-portfolio-projects.html -w '%{http_code} %{content_type} %{size_download}\n' http://127.0.0.1:3001/projects
```

Expected: HTTP `200`, an HTML content type, and a non-zero response size.

- [ ] **Step 2: Confirm the new project content is present in the response**

Run:

```bash
rg -q 'Upscale Otago' /tmp/hasan-portfolio-projects.html
rg -q 'https://upscaleotago.com' /tmp/hasan-portfolio-projects.html
rg -q '/projects/upscaleotago.png' /tmp/hasan-portfolio-projects.html
```

Expected: all three assertions succeed.

- [ ] **Step 3: Run the production build**

Run:

```bash
npm run build
```

Expected: the Next.js production build completes successfully.

- [ ] **Step 4: Confirm only intended changes remain**

Run:

```bash
git status --short --branch
```

Expected: the working tree is clean and `main` is ahead of `origin/main` by the two implementation commits plus the already-committed design spec.

## Plan self-review

- **Spec coverage:** The asset copy, project metadata, Demo-only behavior, no external-folder dependency, reuse of the existing renderer, and route/build verification are covered by Tasks 1–3.
- **Completeness scan:** Every implementation step has a concrete command, expected result, or exact code snippet.
- **Type consistency:** The object uses the existing `Project` fields (`id`, `title`, `year`, `description`, `image`, `tags`, `demo`, and `featured`) and the existing `/projects` route.
