# Changelog

All deployments to production are documented here. **Update this file after every push to master.**

> Last verified: 2026-02-03

---

## KNOWN ISSUES (for next session)

### 1. Vercel Auto-Deploy Not Working
- **Status**: Git pushes trigger deployments but they immediately get "Canceled"
- **Investigated**: Reconnected GitHub integration, checked settings - no ignored build step found
- **Manual deploy works**: `vercel --prod` successfully deploys
- **Action needed**: Check Vercel dashboard settings or contact Vercel support

---

## [2026-02-03] - Homepage Hero Update
**Commit**: `3f992c7`

### Changed
- Added "with AI." as third line of homepage hero headline
- Reduced hero section height from 90vh to 85vh to keep CTA above fold
- Adjusted button margin from mt-10 to mt-8

### Files Modified
- `src/app/page.tsx`

---

## [2026-02-03] - Footer Partnership Badge Update
**Commit**: `31ca884`

### Changed
- Updated footer text from "Powered By" to "MindFinders.ai is a Silver Partner of"
- GrowersCloud logo and link remain unchanged

### Files Modified
- `src/components/Footer.tsx`

---

## [2026-02-02] - Route Rename: sips-and-smoothies → ceo-sips-and-smoothies
**Commit**: `604310b`

### Changed
- Renamed route `/sips-and-smoothies` to `/ceo-sips-and-smoothies` for better SEO and brand clarity
- Updated all internal navigation links in Header component
- Updated all CTA links within the landing page to use new reservation path

### Files Modified
- `src/app/ceo-sips-and-smoothies/page.tsx` (renamed from sips-and-smoothies)
- `src/app/ceo-sips-and-smoothies/reservation/page.tsx` (renamed from sips-and-smoothies/reservation)
- `src/components/Header.tsx`
- `CLAUDE.md`

---

## [2026-01-30] - Calendar Embed Fix (Static HTML Isolation)
**Commit**: `40d4334`

### Fixed
- Calendar widget now displays reliably using static HTML isolation pattern
- Prevents React rendering lifecycle from interfering with GrowersCloud embed

### Added
- `public/calendar-embed.html` - Static HTML file containing GrowersCloud embed code (iframe + script)
- This file is completely outside React and will never be affected by React re-renders

### Changed
- `CalendarEmbed` component now iframes the static HTML file instead of embedding directly
- Increased calendar container height to 1100px for better visibility

### Technical Details
- **Problem**: React's rendering lifecycle conflicted with GrowersCloud's form_embed.js script, causing calendar to appear then disappear
- **Solution**: Isolate the embed in a static HTML file that React never touches
- **Pattern**: Use this approach for any third-party embeds that include their own scripts

### Files Modified
- `public/calendar-embed.html` (new)
- `src/app/sips-and-smoothies/reservation/page.tsx`
- `CHANGELOG.md`

---

## [2026-01-30] - Reservation Page & CTA Links
**Commit**: `819849a`

### Added
- New **Reservation Page** at `/sips-and-smoothies/reservation`
  - "Velvet Rope" hero design with exclusive invitation messaging
  - Embedded GrowersCloud calendar widget for booking
  - Benefits section (Practical AI Insights, Peer-Level Networking, High-End Experience)
  - Theme 3: Premium Executive styling consistent with parent page
- Reservation content section in `content.ts` with hero copy, benefits, and footer

### Changed
- **Sips & Smoothies page**: Converted all CTA buttons to `<Link>` components pointing to `/sips-and-smoothies/reservation`
  - Hero CTA button → Link
  - "How to Attend" section CTA → Link
  - Host section CTA → Link
  - Final CTA section → Link

### Files Modified
- `src/app/sips-and-smoothies/reservation/page.tsx` (new)
- `src/app/sips-and-smoothies/page.tsx`
- `src/lib/content.ts`
- `CHANGELOG.md`

---

## [2026-01-29] - Mobile Menu Fix (SUCCESSFUL)

### Fixed
- **Mobile menu now displays all navigation items** when hamburger is clicked
- Root cause: Mobile menu was nested inside `<header>` with `sticky top-0`, creating a stacking context that clipped the menu content
- Solution: Used React Portal (`createPortal`) to render mobile menu directly to `document.body`, escaping the header's stacking context

### Technical Changes
- Added `createPortal` import from `react-dom`
- Added `mounted` state for SSR safety
- Extracted mobile menu into separate `MobileMenu` component
- Changed nav container from `h-[calc(100vh-5rem)]` to `flex-1` for reliable height
- Menu now renders outside DOM hierarchy via portal

### Files Modified
- `src/components/Header.tsx`

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

