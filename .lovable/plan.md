
## Goal

Reshape the site so it reads as one continuous story:

1. **Homepage** — introduces **Ready2Trace** as the company (problem, vision, what we build).
2. **PackyTrace (B2C)** — dedicated section/page introducing the consumer product.
3. **How PackyTrace works** — the 15-second scan→understand→engage flow + features.
4. **For Companies (B2B)** — the origin story: "we built a consumer product, then realized brands need the other half" → leads into the B2B service.
5. **Brand Dashboard** — new page showing the B2B dashboard model from the attached PDF (mockup-style, GDPR-aware).

## Changes

### 1. Homepage (`src/routes/index.tsx`) — pure company intro
- Strip out the deep PackyTrace product pitch.
- New structure:
  - Hero: "Ready2Trace — the digital layer behind food packaging."
  - Intro: the problem (fragmented labels, dead QR codes, brands disconnected from buyers).
  - "What we build" — two-pillar visual: **PackyTrace (B2C)** + **Brand Dashboard (B2B)**, each linking to its own page.
  - Why Ready2Trace (kept, refined).
  - Closing CTA → Meet PackyTrace / See the Dashboard.

### 2. New route `src/routes/packytrace.tsx` — B2C product intro
- Hero positioning PackyTrace as the consumer-facing product.
- Who it's for, the consumer value (allergens, recipes, recycling, rewards, AI chat).
- Visual product moments + CTA → **See how it works** (`/how-it-works`).

### 3. `src/routes/how-it-works.tsx` — keep as PackyTrace deep-dive
- Minor copy update so it clearly reads as the second step from `/packytrace`.
- Add a closing bridge: *"We built this for shoppers. Then brands asked: what about us?"* → link to `/companies`.

### 4. `src/routes/companies.tsx` — the B2B story
- Reframe opening as the **origin narrative**: started as a consumer product, evolved into a startup serving brands too.
- Explain the B2B service (first-party, pack-level, GDPR-safe insight vs. €40k–150k traditional research — pull from PDF benchmarking).
- CTA → **See the dashboard** (`/dashboard`).

### 5. New route `src/routes/dashboard.tsx` — Brand Dashboard mockup page
Content built from the attached PDF, presented as a designed product page (not a live app):
- **Hero**: "The Brand Dashboard — pack-level insight, GDPR-safe by design."
- **Why a dashboard** section: short version of the "industry cost" comparison table (Ready2Trace €40–80k/yr vs. €30k–150k+/yr alternatives).
- **Mockup section** — visual dashboard tiles (static, designed):
  - Total scans (18,420, +12%)
  - First-time scanners (71%)
  - Return-scan rate (23% — account 31% / anon 18%)
  - Recycling completion (41%)
  - Allergen alert rate (12%)
  - Avg dwell time (47s)
  - "Scan volume: new vs returning" — stylized bar/line placeholder
  - "Engagement by region" — stylized list/bars
  - "Allergen alert triggers" (gluten 12%, lactose 8%, nuts 3%)
  - "Loyalty engagement" tile
  - "SKU comparison" mini-table
  - "Dietary profile of buyers" + "Top requested variant"
- **GDPR-by-design** section: 3 data tiers (never-personal / pseudonymized consumer-side / aggregated k≥5 only). Short, clear cards.
- **Closing CTA** → Contact.

### 6. Nav + Footer (`src/components/site/Nav.tsx`, `Footer.tsx`)
- Update primary nav order to reflect the journey:
  `Home · PackyTrace · How it works · For Companies · Dashboard · About · Contact`
- Footer mirrors the same grouping (Product: PackyTrace, How it works / Business: For Companies, Dashboard).

### 7. SEO
- Each new/changed route gets its own `head()` with unique title + description + og tags matching its slice of the story.

## Out of scope
- No real data / no backend. Dashboard is a presentation page using static mock numbers from the PDF.
- No auth, no login.
- Visual system (colors, typography, animations) stays as-is — only structural + copy changes plus new dashboard visuals built with existing tokens.
