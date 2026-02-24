# INSEAT Landing Rebuild Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild the `/` landing page to match the provided visual direction using a strict purple/white/black palette and modern section structure.

**Architecture:** Replace the current CMS-heavy landing composition with a self-contained section-based React page (`LandingPage.tsx`) that uses local content arrays and Framer Motion reveals. Keep existing router and non-landing routes intact. Centralize palette and typography tokens in global CSS for consistent visuals.

**Tech Stack:** React 19, TypeScript, Tailwind CSS, Framer Motion, React Router.

---

### Task 1: Research and reference extraction

**Files:**
- Modify: `naironai_full_implementation_guide.md`
- Evidence: `https://design.naironai.com/`

**Step 1: Open resource directory**
Run: `open https://design.naironai.com`
Expected: Resource list with inspiration, components, and motion links.

**Step 2: Pull implementation inspirations**
Run targeted searches on official sources (`ui.aceternity.com`, `magicui.design`, `v0.dev`).
Expected: Hero/feature/pricing/card structure references.

### Task 2: Baseline visual and behavior checks (RED)

**Files:**
- Verify: `src/pages/LandingPage.tsx`

**Step 1: Capture current page snapshot**
Run: Playwright navigate + screenshot on `http://localhost:5174`.
Expected: Existing layout does not match requested rebuilt composition.

**Step 2: Confirm mismatch criteria**
Check for: non-unified palette sections, legacy CMS sections, excessive external fetch noise.
Expected: Failing state against requested design.

### Task 3: Rebuild landing structure (GREEN)

**Files:**
- Modify: `src/pages/LandingPage.tsx`

**Step 1: Replace section composition with rebuilt one-page layout**
Implement: sticky nav, hero + device mock, metrics strip, dark feature grid, process timeline, admin dashboard block, mobile cards, pricing, CTA, footer.

**Step 2: Keep only allowed palette semantics**
Use black/white/purple and alpha shades only.

**Step 3: Add meaningful motion**
Use Framer Motion for staggered entrance and subtle float effects.

### Task 4: Tokenize styles and clean runtime noise

**Files:**
- Modify: `src/index.css`
- Modify: `src/App.css`
- Modify: `src/main.tsx`

**Step 1: Define palette + typography tokens**
Introduce CSS variables and reusable utility classes aligned with palette.

**Step 2: Remove dev overlays interfering with Playwright validation**
Remove Stagewise toolbar bootstrap and optional Sanity visual overlays from runtime init.

### Task 5: Verify in browser and build

**Files:**
- Verify: `src/pages/LandingPage.tsx`
- Verify: `src/index.css`
- Verify: `src/main.tsx`

**Step 1: Playwright validation loop**
After each major edit: navigate/snapshot/screenshot on `http://localhost:5174`.
Expected: Composition and palette match requested direction.

**Step 2: Production sanity check**
Run: `npm run build`
Expected: Successful TypeScript + Vite build.

**Step 3: Final visual pass**
Capture full-page screenshot for sign-off.
Expected: Rebuilt page with only purple/white/black visual language.
