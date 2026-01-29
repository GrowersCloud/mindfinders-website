# Changelog

All deployments to production are documented here. **Update this file after every push to master.**

> Last verified: 2026-01-29

---

## KNOWN ISSUES (for next session)

### 1. Mobile Menu Bug - STILL BROKEN
- **Status**: FIX ATTEMPTED BUT DID NOT WORK - needs re-investigation
- **Problem**: Mobile menu navigation links are cut off when menu is opened (user cannot see nav items)
- **Attempted Fix**: Changed `overflow-hidden` to `overflow-x-hidden overflow-y-auto` in Header.tsx (lines 216, 219, 290, 337, 383)
- **Result**: Deployed via `vercel --prod` but mobile menu STILL NOT WORKING
- **Next Steps**: Re-examine Header.tsx mobile menu implementation, test locally, find actual root cause

### 2. Vercel Auto-Deploy Not Working
- **Status**: Git pushes trigger deployments but they immediately get "Canceled"
- **Investigated**: Reconnected GitHub integration, checked settings - no ignored build step found
- **Manual deploy works**: `vercel --prod` successfully deploys
- **Action needed**: Check Vercel dashboard settings or contact Vercel support

---

## [2026-01-29] - Documentation Update
**Commit**: `343fa9b`

### Added
- Created CHANGELOG.md with full deployment history
- Added Deployment section to README.md (git repo info, deploy process, checklist)
- Added Deployment & Git Repository section to CLAUDE.md

### Removed
- Deleted stale COMMITS_PENDING.md (superseded by CHANGELOG.md)

### Files Modified
- `CHANGELOG.md` (new)
- `README.md`
- `CLAUDE.md`
- `COMMITS_PENDING.md` (deleted)

---

## [2026-01-29] - Mobile Menu Fix (UNSUCCESSFUL)
**Commit**: `44ec721`

### Attempted Fix (DID NOT RESOLVE ISSUE)
- Attempted to fix mobile menu visibility bug where navigation links are cut off
- Changed `overflow-hidden` to `overflow-x-hidden overflow-y-auto` on menu container and inner panels
- **Result**: Fix was deployed but mobile menu is STILL NOT WORKING - needs further investigation

### Files Modified
- `src/components/Header.tsx` (lines 216, 219, 290, 337, 383)

---

## [2026-01-29] - Sips & Smoothies Refinement
**Commit**: `c437ef1`

### Changed
- Refined Sips & Smoothies landing page styling and layout
- Added 9 new promotional images for the event page

### Files Modified
- `src/app/globals.css`
- `src/app/sips-and-smoothies/page.tsx`
- `src/components/Footer.tsx`
- `src/lib/content.ts`
- `public/ai_demo_portrait_1769644040625.png` (new)
- `public/ai_executive_dashboard_clean_1769639935230.png` (new)
- `public/executive_cocktail_lounge_vibe_1769639909462.png` (new)
- `public/growers-cloud-logo.png` (new)
- `public/premium_invitation_envelope_white_1769640014114.png` (new)
- `public/referral-networking-main.png` (new)
- `public/referral-partnership-financial.png` (new)
- `public/referral-partnership-luxury.png` (new)
- `public/smoothie_lounge_vibe_1769644027222.png` (new)

---

## [2026-01-28] - AI CEO Sips & Smoothies Landing Page
**Commit**: `1afbbf7`

### Added
- AI CEO Sips & Smoothies invitation-only landing page (`/sips-and-smoothies`)
- Programs mega-menu in navigation header (2 columns on desktop, accordion on mobile)
- Mobile accordion support for Programs menu

### Files Modified
- `src/app/sips-and-smoothies/page.tsx` (new)
- `src/components/Header.tsx`
- `src/lib/content.ts`
- `public/sips-hero.png` (new)
- `public/referral-partnership.png` (new)
- `public/tim-booker-real.jpg` (new)

---

## [2026-01-27] - Complete Website Implementation
**Commit**: `e5d3208`

### Added
- Full MindFinders website implementation with all pages
- Pages: Home, Services, AI Agents, Training & Talent, About, Get Started, FAQ, Privacy Policy, Terms of Service
- Design system with crimson (#ED1B2F) and charcoal (#231F20) brand colors
- Responsive navigation with Services mega-menu and AI Agents dropdown
- FAQAccordion component for expandable FAQ sections
- PageShell component for consistent page layouts
- TopBar component with phone number
- All website copy centralized in `src/lib/content.ts`

### Files Modified
- All files in `src/app/` (pages and layouts)
- All files in `src/components/`
- `src/lib/content.ts`
- `src/app/globals.css`
- Multiple assets in `public/`

---

## [2026-01-26] - Initial Setup
**Commit**: `dfc44f0`

### Added
- Initial Next.js 16 project setup from Create Next App
- TypeScript configuration
- Tailwind CSS 4 setup
- ESLint configuration
- Basic project structure

### Files Modified
- Initial project scaffolding (17 files)

