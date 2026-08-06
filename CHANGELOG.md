# Changelog

All deployments to production are documented here. **Update this file after every push to master.**

> Last verified: 2026-07-31

---

## KNOWN ISSUES (for next session)

### 1. Vercel Auto-Deploy Not Working
- **Status**: Git pushes trigger deployments but they immediately get "Canceled"
- **Investigated**: Reconnected GitHub integration, checked settings - no ignored build step found
- **Manual deploy works**: `vercel --prod` successfully deploys
- **Action needed**: Check Vercel dashboard settings or contact Vercel support

---

## [2026-08-06] - Sips Parity Update + Partnership Section Moved Up
**Commits**: `45dcc2d` `160074d`

Executed from GrowersCloud's 2026-08-05 work order
(`Growers_Cloud_Full_Stack/Docs/partner-sites/mindfinders-2026-08-05-update-brief.md`), which
carried three changes already live on `www.growerscloud.ai`. Plus one section reorder Sam asked
for in the same session.

### Changed
- **Event date: Thursday August 6 → Wednesday October 7 2026.** Four fields, not the three the
  work order listed - see the warning below.
- **`socialContext` copy.** The h2 is now two full sentences ("No stage. No pitch from us." /
  "The only selling in the room is CEO-to-CEO.") instead of two short fragments, and the body
  leads on the pre-matched partnership rather than describing the format.
- **The `EXECUTIVE SOCIAL` eyebrow is now a section title.** Title case, typed identically to the
  "What You Walk Away With" h2, and it inherits the default dark text rather than carrying
  `#ED1B2F` - it is a title now, not an accent.
- **"Create Strategic Partnerships" moved above the agenda**, directly under Executive Social.

### Fixed
- The `socialContext` h2 lost `lg:whitespace-nowrap` and stepped down from `lg:text-7xl` to
  `lg:text-5xl`. The new lines are full sentences (43 characters, up from 20) and the section is a
  two-column grid, so from `lg` up the text column is only about half the container - `nowrap` was
  survivable at 20 characters and pushed the new lines straight out of it.

> ⚠️ **THE EVENT DATE IS A FOUR-FIELD CHANGE, AND THE FOURTH IS ON ANOTHER ROUTE.**
> `sipsAndSmoothies.hero.details[0]`, `.details.date`, `.finalThought.body`, **and
> `thankYou.aiCeoSips.eventLine`**. That last one drives `/thank-you/ai-ceo-sips`, so it is
> outside any check scoped to the Sips page's rendered HTML - and it is exactly where this page's
> form sends everyone who converts. Left stale it confirms the wrong date to every registrant.
> Grep `content.ts` for the old date rather than working from a field list, and check both routes.

> ⚠️ **The section label is hardcoded in `page.tsx`, not `content.ts`.** Every other change here
> rides along with the `sipsAndSmoothies` key. This one does not. A clean content swap ships
> everything else correctly and silently leaves the old red eyebrow in place - no type error, no
> build warning, no missing key. See port spec §12.2 for how to measure it rather than eyeball it.

> ⚠️ The non-breaking hyphen (U+2011) and non-breaking space (U+00A0) from port spec §3.3 live in
> two of those four strings. They were preserved by editing only the day/date prefix and never
> retyping the rest. Do it that way - retyping invites an editor to normalise them to ASCII.

**Deliberate divergence from GrowersCloud:** the section reorder is the first intentional layout
difference between the two pages. Their order runs executive social → agenda → CEO network effect.
Port spec §1 and §9 are annotated. Phase 2 auto-sync is unaffected (it syncs the content key only).

**Known cosmetic consequence, left for Sam:** the page alternates section backgrounds, and the
white agenda section used to separate Executive Social from CEO network effect. Both use the same
translucent grey and they are now adjacent, so they render as one continuous band with no seam.
Flipping the CEO network effect section to a white background restores the rhythm.

**Found, not fixed - pre-existing §8.1 bug in the hero `h1`.** Its three spans have no separator,
so the accessible text content of the page's most important heading reads
`The AI CEOSips & GrowthExecutive Reception`. Same defect the port spec documents and the same
one-line fix the `socialContext` h2 already uses a few lines below it. Flagged to Sam, awaiting a
decision.

### Files Modified
- `src/lib/content.ts` (six values across `sipsAndSmoothies` and `thankYou.aiCeoSips`)
- `src/app/programs/ai-ceo-sips-and-growth-executive-reception/page.tsx` (label, h2 classes, reorder)
- `docs/ai-ceo-sips-content-snapshot.json` (refreshed from the GrowersCloud payload, `reservation` dropped)
- `docs/ai-ceo-sips-port-spec.md` (**appended** §12, not overwritten - our copy carries §0, §8.7-8.9 and §11 that GrowersCloud's does not)

**Note back to GrowersCloud:** the work order warned that our snapshot carries a `matchmaking` key
theirs does not and that a blind refresh would delete it. That is a false alarm -
`mindfinders-sips-content.json` does contain `matchmaking`, byte-identical to ours. The refresh was
verified key-for-key: nothing lost, nothing gained, exactly four sections changed. Separately,
`matchmaking` is dead content either way - no component reads it since the CRO pass removed that
section.

---

## [2026-07-31] - Sips Hero Subtitle Focused on the Benefit
**Commit**: `3de7ca6`

### Changed
- Sips reception hero subtitle drops the speaker name and the Q&A format, so the hero leads with
  the benefit rather than the mechanics. "You'll get three concise executive briefings from
  Samuel Salter, each followed by a moderated CEO question, covering how to:" becomes "You'll get
  three concise executive briefings covering how to:". The three bullets beneath it are unchanged.

**Deliberately not changed:** the same framing still appears four times further down the page and
stays there by decision - the section heading "Three Executive Briefings From Samuel Salter", the
agenda intro, and the two agenda items naming Samuel Salter and Kelli's moderated question
(`content.ts` lines 547, 563, 579, 597). The hero was retargeted at the benefit; the agenda is
still where the format is explained. Do not "fix" this as an inconsistency.

### Files Modified
- `src/lib/content.ts` (one line, the `sipsAndSmoothies.hero.subtitle` key)

> **Deploy note:** contrary to the 2026-07-30 entry below, `vercel --prod` aliased
> `www.mindfinders.ai` on its own this time - no `vercel promote` was needed. Verified by
> grepping the live HTML on the real domain, not from the CLI output.

---

## [2026-07-30] - Sips Thank-You Page + Mobile Booking Modal Fix
**Commits**: `33203d5` `847c492` `e0af6fc` `6413628`

Shipped the same day as the port below, after the modal went live and the form was tested on a
real phone.

### Added
- **Thank-you page** at `/thank-you/ai-ceo-sips`, the redirect target set on the GHL form.
  Copy lives in `content.ts` under `thankYou.aiCeoSips`, reusing the already-authored 48-hour
  microcopy from the Sips page so the two cannot drift.
- `noindex, nofollow` on it: thin content that should not surface in search, and anyone arriving
  cold has skipped the form.

> **EVERY FORM GETS ITS OWN THANK-YOU PAGE.** `/thank-you` itself is deliberately a 404. Do not
> add a page there and do not point two forms at one URL: the copy names a specific event (date,
> venue, what happens next), so a shared page shows the wrong details to half the people who
> reach it. A new form means a new sibling route under `src/app/thank-you/` plus a new key under
> `thankYou`. The rule is repeated in the route's `layout.tsx`.
>
> The roundtable form still has no thank-you page. It needs its own, not this one.

### Fixed
- **Submit button was unreachable in the booking modal on a phone.** After ticking the consent
  box you could not scroll back up to submit. Two causes, both from the port:
  `FORM_HEIGHT_PX = 640` was measured on desktop (on a phone the fields stack and the consent
  paragraph wraps to ~20 lines, so the form is far taller than the screen), and `scrolling="no"`
  left the outer container as the only scroller. On touch devices, dragging over a cross-origin
  iframe does not scroll its parent, so the container scrolled once and the button was stranded.
- Below 640px the modal now uses a different scroll model: the panel fills the screen, the
  iframe fills the panel, and the GHL page scrolls natively inside it. The body is
  `overflow-hidden` in that mode **on purpose** - two nested scrollers is what broke it. Exactly
  one thing scrolls and it is the thing under the finger. Desktop is unchanged at 700x712.

### Corrected from the entry below
- That entry, and the code comments at the time, said GHL's post-submit redirect stays inside the
  iframe. **It does not: it navigates the top window.** The conclusion came from reading
  `form_embed.js`, whose only parent-navigation hook calls `history.replaceState` - but that is
  only the parent-side script, and the widget page inside the iframe does the top-level
  navigation itself. Testing a real submission was the only way to settle it. This is why the
  thank-you page is a full page with the normal site header and footer, not a compact panel.

### Files Modified
- `src/app/thank-you/layout.tsx`, `src/app/thank-you/ai-ceo-sips/page.tsx` (new)
- `src/components/SipsBookingModal.tsx`, `src/lib/content.ts`

### Still open (GHL side, not code)
- The form's submit button sits **above** the consent checkbox, which is why the journey needs
  any scrolling back at all. Reordering so submit comes last would remove the dependency on the
  fix above behaving perfectly on every device.
- The phone field still defaults to a non-US country flag.

---

## [2026-07-30] - AI CEO Sips Page Ported from GrowersCloud
**Commits**: `0caad38` `3710a6d` `847c6f2` `ce18579` `1c60a8b` `3d1e8b2` `3bedcfb` `060556d`

The Sips page is now a literal port of GrowersCloud's, which is the source of truth for its
copy and layout. Only brand colours and fonts are MindFinders'. **This is a visible redesign
of that page, not a refresh** - the neo-brutalist treatment (thick borders, hard offset
shadows) now runs throughout.

Spec and verification checklist live in [docs/ai-ceo-sips-port-spec.md](docs/ai-ceo-sips-port-spec.md).
83/83 checks pass against rendered HTML and built CSS.

### Changed
- **URL moved** to `/programs/ai-ceo-sips-and-growth-executive-reception`, matching GrowersCloud.
  Both older paths still land, in one hop: `/ceo-sips-and-smoothies` and
  `/programs/ceo-sips-and-smoothies` 308 to the new slug. These were given out widely, so they
  must not be removed.
- **Content**: replaced only the `sipsAndSmoothies` key in `content.ts`. The other nine keys are
  byte-identical - verified by diffing the untouched line ranges. Copy was generated from the
  canonical JSON, never retyped.
- **Colours**: 184 occurrences swapped, `#88C52A`→`#ED1B2F`, `#2F2F2F`→`#231F20`,
  `#7AB52E`→`#C4162A`. All three GrowersCloud hexes return zero in the built CSS.
- **Nav label**: "AI CEO Sips, Smoothies & Growth" was two event names out of date; now matches
  the page heading.
- **Registration** is a click-to-open modal on the page. The `/reservation` sub-route is retired
  and 307s to `/` under every slug it has ever had.

### Added
- 16 images, copied byte-for-byte (checksums verified), not re-exported.
- `robots: noindex, nofollow` + canonical to GrowersCloud. This page must not appear in Google:
  it would compete with GrowersCloud's for the same event. No `Event` JSON-LD anywhere on the
  site, for the same reason. **Do not add a robots.txt `Disallow` for this route** - a page
  Google cannot crawl is one whose noindex it cannot read.
- `docs/` with the port spec and content snapshot, so the project no longer depends on the
  GrowersCloud checkout.

### Fixed
- `font-serif` never rendered PT Serif anywhere on the site. The `h1-h6` rule in `globals.css`
  was unlayered, and unlayered styles outrank every cascade layer - so it beat Tailwind's
  utility and all headings rendered Libre Franklin regardless of markup. Moving the rule into
  `@layer base` fixes it for all three affected headings: the home page `h3`, the roundtable's
  closing `h2` and the Sips page's closing `h2`. The other 96 headings are unchanged.
- Booking modal sized to the form rather than the viewport, removing large white margins and a
  scrollbar. `form_embed.js` overwrites the iframe height and scrolling attribute after load, so
  a MutationObserver re-asserts them.
- Tailwind 4 was compiling class names quoted as examples inside `docs/`, putting GrowersCloud
  green back into the stylesheet from a markdown file. Excluded via `@source not`.

### Files Modified
- `src/lib/content.ts`, `src/app/programs/ai-ceo-sips-and-growth-executive-reception/{page,layout}.tsx`
- `src/components/SipsBookingModal.tsx` (new), `src/components/Header.tsx`, `src/app/programs/page.tsx`
- `src/app/globals.css`, `next.config.ts`, `docs/` (new), `README.md`, `CLAUDE.md`
- Deleted: `src/app/programs/ceo-sips-and-smoothies/reservation/page.tsx`

### Follow-ups (not blocking)
- `public/calendar-embed.html` is orphaned by the reservation retirement but still publicly
  reachable. Delete once confirmed the URL was never circulated.
- GHL-side: the phone field defaults to a non-US country flag. Check the form's post-submit
  redirect does not point at an old slug.
- On a 1280x720 window the modal body scrolls ~28px; a 700px modal cannot fit a 720px screen.

> **Deploy note:** `git push` alone did not update the live site. The push-triggered build was
> Canceled (see KNOWN ISSUES), and `vercel --prod` built successfully but left
> `www.mindfinders.ai` pinned to a 44-day-old deployment - it aliased only the `.vercel.app`
> URL. `vercel promote <deployment-url>` was required to move the domain. Verify against the
> real domain after deploying, not the CLI output.

---

## [2026-06-16] - CEO Sips Event Update
**Commit**: `087fbf5`
**Changes**:
- Renamed event to "The AI CEO Sips & Growth Cocktail Party"
- Changed event date from March 26 to August 6

---

## [2026-04-08] - Programs Routing Refactor
**Commit**: `7fa3583`

### Added
- **Programs Index Page**: New page at `/programs` summarizing events

### Changed
- Moved top-level routes `ceo-sips-and-smoothies` and `ai-executive-roundtable` inside `programs/` structural folder
- Implemented `/programs` scalable parent directory architecture
- Updated Header navigation to point to `programs/` equivalents
- Added 301 wild-card redirects to `next.config.ts` to forward previous links

### Files Modified
- `src/app/programs/page.tsx` (new)
- `src/app/programs/ceo-sips-and-smoothies/page.tsx` (moved)
- `src/app/programs/ai-executive-roundtable/page.tsx` (moved)
- `src/components/Header.tsx`
- `next.config.ts`

---

## [2026-02-18] - AI Executive Roundtable Date Update
**Commit**: `c163f6f`

### Changed
- Updated Session 1 (Webinar): **March 26th at 11:00 AM EST**
- Updated Session 2 (Workshop): **March 31st at 11:00 AM - 2:00 PM EST**

### Files Modified
- `src/lib/content.ts`

---

## [2026-02-11] - LMS Demo Branding Fix
**Commit**: `f8e7c62`

### Changed
- **LMS Demo**: Reverted unapproved "For Sale" branding.
- **Content**: Restored personalized "Welcome back, Samra" greeting.
- **Components**: Updated demo watermark to "DEMO" instead of "FOR SALE".

### Files Modified
- `src/app/employee-tool-preview-secret-x9/page.tsx`
- `src/app/employee-tool-preview-secret-x9/layout.tsx`

---

## [2026-02-10] - CEO Sips & Smoothies Date Update
**Commit**: `b49d749`

### Changed
- Updated event date from March 12 to **March 26**
- Updated in both hero section and event details section

### Files Modified
- `src/lib/content.ts`

---

## [2026-02-10] - AI Executive Roundtable Registration Page
**Commit**: `52d2b9d`

### Added
- **Registration Page**: New page at `/ai-executive-roundtable/register`
  - Form embed using static HTML isolation pattern (prevents React interference)
  - Premium Executive (Theme 3) design matching parent page
  - Benefits section and invitation-only messaging
- **Form Embed**: `public/roundtable-form-embed.html` with GrowersCloud form

### Changed
- Updated CTA buttons on `/ai-executive-roundtable` to link to registration page
- Added registration content to `content.ts`

### Files Modified
- `src/app/ai-executive-roundtable/register/page.tsx` (new)
- `public/roundtable-form-embed.html` (new)
- `src/app/ai-executive-roundtable/page.tsx`
- `src/lib/content.ts`

---

## [2026-02-10] - AI Executive Roundtable Page
**Commit**: `ai-executive-roundtable`

### Added
- **AI Executive Roundtable Page**: New landing page at `/ai-executive-roundtable`
  - Premium Executive (Theme 3) design
  - Glassmorphism effects and cinematic imagery
  - Strategic Lens visualization and Program Structure breakdown
- **Navigation Update**: Added "AI Executive Roundtable" to "Programs" mega-menu (Desktop) and Mobile Menu
- **Assets**: Added 3 new high-quality images:
  - `boardroom_hero.png`: Cinematic boardroom hero image
  - `strategy_lens.png`: Strategic Growth2X framework visualization
  - `workshop_collab.png`: Realistic executive collaboration photo

### Files Modified
- `src/app/ai-executive-roundtable/page.tsx` (new)
- `src/lib/content.ts` (added executiveRoundtable section)
- `src/components/Header.tsx` (navigation updates)
- `public/boardroom_hero.png` (new)
- `public/strategy_lens.png` (new)
- `public/workshop_collab.png` (new)

---

## [2026-02-03] - SEO & Metadata Refinement
**Commit**: `metadata-update`

### Changed
- Implemented comprehensive SEO metadata across the entire site
- Added `title.template` to root layout for consistent " | MindFinders AI" suffix
- Updated all page titles and descriptions to focus on "AI Workers", "AI Teammates", and "AI Solutions"
- Created customized metadata for: Home, AI Agents, Services, Training, About, Get Started, FAQ, Legal pages
- Added `layout.tsx` for `ceo-sips-and-smoothies` client component to handle metadata correctly

### Files Modified
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/ai-agents/page.tsx`
- `src/app/services/page.tsx`
- `src/app/training-and-talent/page.tsx`
- `src/app/about/page.tsx`
- `src/app/get-started/page.tsx`
- `src/app/ceo-sips-and-smoothies/layout.tsx` (new)
- `src/app/faq/page.tsx`
- `src/app/privacy-policy/page.tsx`
- `src/app/terms-of-service/page.tsx`

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

