# Port Spec — AI CEO Sips page → MindFinders.ai

> **This is the canonical copy.** It lives here, in the repo it describes. The original was
> written in `Growers_Cloud_Full_Stack/Docs/partner-sites/` as a one-time handoff; that copy is
> historical and is not maintained. Edit this one.
>
> **For:** anyone working on `/programs/ai-ceo-sips-and-growth-executive-reception` in this repo.
> **Written by:** the GrowersCloud session that shipped the 2026-07-30 corrections release.
> **Written:** 2026-07-30. **Phase 1 executed, spec corrected:** 2026-07-30.
>
> **Read this whole file before editing anything.** Section 8 lists traps that caused real bugs —
> six inherited from the GrowersCloud page, three (§8.7–8.9) found while executing this port.
>
> **Companion file:** [`ai-ceo-sips-content-snapshot.json`](ai-ceo-sips-content-snapshot.json) —
> the verbatim copy payload. Verified byte-identical to the `sipsAndSmoothies` key currently in
> `src/lib/content.ts` (minus `reservation`, which was dropped with that route). It is the
> reference for §3.2's "do not reword" rule, and the fallback if the copy is ever damaged again.

---

## 0. Status — Phase 1 is done

Phase 1 shipped on 2026-07-30, six commits on `mindfinders-website` `master`, not yet pushed or
deployed at time of writing. The §9 checklist passes 83/83 against rendered HTML and built CSS.

What changed relative to this spec as originally written:

| § | Item | Outcome |
|---|---|---|
| 11 | Slug | **Done, not deferred.** Sam called it in before go-live. Now `/programs/ai-ceo-sips-and-growth-executive-reception`, matching GrowersCloud. Both older paths redirect. See §7. |
| 7 | Booking modal | Shipped, but the auto-resize assumption in this spec was **wrong**. See §8.7 — this one cost real debugging time. |
| 6 | Sitemap / robots.txt | No-op. MindFinders has no `sitemap`, `robots.txt` or `llms.txt` at all. |
| 2.1 | `container` | The concern was real. MindFinders' `.container` is **unlayered**, so it outranks every Tailwind utility. Needed its own class. See §8.8. |
| 2.1 | Fonts | `font-heading` mapped for free. `font-serif` did **not**. See §8.9. |

Two things this spec did not anticipate, both now written up as traps: §8.7 (GHL form sizing) and
§8.9 (`font-serif` never renders). Both were found by measuring in a browser, not by reading source.

---

## 1. Objective

Bring `https://www.mindfinders.ai/programs/ceo-sips-and-smoothies` to content parity with
`https://www.growerscloud.ai/programs/ai-ceo-sips-and-growth-executive-reception`.

**Copy verbatim:** all copy, all agenda facts, all imagery, **and the design and layout**.
**Keep MindFinders:** brand colours and fonts only. Plus their slug, for now.

That is the whole rule. The MindFinders page should be visually the same page as GrowersCloud's,
rendered in MindFinders red on MindFinders type. Not a reinterpretation.
**Add:** `noindex`, canonical to GrowersCloud, booking modal.
**Remove:** the `/reservation` sub-route, any Event JSON-LD.

**GrowersCloud is the source of truth.** If the two ever disagree, GrowersCloud wins.

---

## 2. Current state of both projects

| | GrowersCloud | MindFinders |
|---|---|---|
| Next / React | 16.1.1 / 19.2.3 | 16.1.5 / 19.2.3 |
| Tailwind | **3.4.1** (`tailwind.config.ts`) | **4** (CSS `@theme`) |
| Primary brand | `#88C52A` green | `#ED1B2F` red |
| Dark neutral | `#2F2F2F` | `#231F20` |
| Content seam | `src/lib/content.ts` | `src/lib/content.ts` |
| Sips route | `/programs/ai-ceo-sips-and-growth-executive-reception` | `/programs/ceo-sips-and-smoothies` |
| Page size | ~700 lines | 680 lines |
| `/reservation` | retired, 307 → `/` | **still live — retire it** |
| noindex | n/a (wants indexing) | **none — must be added** |

### ✅ DO copy `page.tsx` — then run the token swap in §2.1

**Sam's instruction: design and layout copy verbatim. Only branding colours and fonts stay
MindFinders.** So this is a literal port, not a rebuild.

An earlier draft of this spec said the opposite. That was wrong, and here is why the literal port
is safe despite the Tailwind 3 → 4 gap:

- The page is built almost entirely on **arbitrary values** (`bg-[#88C52A]`,
  `shadow-[8px_8px_0px_0px_#2F2F2F]`, `border-[3px]`). Arbitrary-value syntax is **core in both
  Tailwind 3 and 4** and behaves identically. Nothing to migrate.
- The only non-core classes it uses are `font-heading` / `font-sans` / `font-serif`,
  `animate-fade-in-up`, `delay-100…500`, `container`, and `animate-ping`. Every one is either
  already present in MindFinders or is three lines of portable CSS. See §2.1.

**Note on visual impact:** MindFinders' current Sips page is *not* the neo-brutalist design — it has
5 occurrences of the hard-shadow/thick-border idiom against dozens on ours. So this port is a real,
intended visual change to their page, not a subtle refresh. Expected; just be sure Sam sees it
before it ships.

---

## 2.1 The transformation — this is the whole job

Copy `page.tsx` verbatim, then apply exactly these changes. Nothing else.

### Colours — 184 occurrences, 3 find-and-replaces

| GrowersCloud | Count | → MindFinders | Their token |
|---|---|---|---|
| `#88C52A` (green accent) | 70 | `#ED1B2F` | `--color-primary` |
| `#2F2F2F` (dark neutral) | 109 | `#231F20` | `--color-secondary` |
| `#7AB52E` (green hover) | 5 | a darker red hover, e.g. `#C4162A` | — |

Leave `#F2F1EB` (hero text tint) and `#f8f9fa` (image placeholder bg) alone — neutrals, not brand.

**Sanity check after the swap:** grep the built CSS for `88C52A`, `7AB52E` and `2F2F2F`. All three
must return zero.

### Fonts — these map for free

Both projects happen to use the **same token names**, so the fonts swap with **no code changes**:

| Class | GrowersCloud resolves to | MindFinders resolves to |
|---|---|---|
| `font-heading` | Poppins | **Libre Franklin** (`--font-heading` in their `@theme`) ✅ |
| `font-serif` | Playfair | **PT Serif** (`--font-serif`) ✅ |
| `font-sans` | Inter | Tailwind default sans — **verify** this is what they want |

`font-heading` is already used across their existing pages, so the token is live.

### CSS to copy into their `globals.css`

The page uses these and they are **not** core Tailwind. Portable as-is:

```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translate3d(0, 40px, 0); }
  to   { opacity: 1; transform: translate3d(0, 0, 0); }
}
.animate-fade-in-up {
  animation-name: fadeInUp;
  animation-duration: 0.8s;
  animation-fill-mode: both;
}
.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-400 { animation-delay: 0.4s; }
.delay-500 { animation-delay: 0.5s; }
```

### `container` — verify, don't assume

Tailwind 4 dropped the `center` / `padding` config options that Tailwind 3 had. MindFinders already
defines its own `.container` in `globals.css` (~line 45), so the class exists — but **confirm its
horizontal padding matches**. Ours is `2rem` via `theme.extend.container.padding`. If theirs
differs, section gutters will be off and the agenda cards will sit at the wrong width.

`animate-ping` is core Tailwind in both. No action.

---

## 3. The canonical content

`mindfinders-sips-content.json` sits beside this file. It is the **verbatim** export of
`sipsAndSmoothies` from GrowersCloud's `src/lib/content.ts`, produced by evaluating the module
rather than retyping, so it is byte-faithful.

**Use that file as the source. Do not retype copy out of this spec or off the live page.**

### 3.0 ⚠️ The two `content.ts` files are NOT interchangeable

Both projects have `src/lib/content.ts`, but they hold **different content for different sites**.
MindFinders' is 768 lines covering their whole site:

```
home · services · aiAgents · trainingAndTalent · getStarted
about · faq · legal · sipsAndSmoothies · executiveRoundtable
```

**Do not overwrite the file.** They already have their own `sipsAndSmoothies` key at roughly
lines 508–672. Replace **only that key's contents** with the payload from
`mindfinders-sips-content.json`, and leave the other nine keys untouched. Overwriting the file
would wipe their homepage, services, about, FAQ and roundtable content.

Two shape notes when you swap the key in:

- Their existing `sipsAndSmoothies` is a fork of an **older** version of ours, so the sub-keys will
  be similar but not identical. Take our shape wholesale rather than trying to merge field by field.
- Our payload contains a `reservation` sub-key. **Drop it** — the reservation page is being retired
  (§7). Everything else transfers.

### 3.1 Structure

| Key | What it drives |
|---|---|
| `hero` | eyebrow, h1 lines, subtitle, ticket details, CTA label |
| `socialContext` | "No stage. No pitch from us. …" + offerings (§12) |
| `walkAway` | intro + 4 benefit cards + footer quote |
| `eveningProgram` | intro + **7 agenda cards** |
| `referrals` | CEO Network Effect section |
| `audience` | who it's for + the 15-CEO limit |
| `howToAttend` | 3-step invitation process |
| `eveningHost` | Kelli bio |
| `coHosts` | Samuel (GrowersCloud) + Tim (MindFinders) bios |
| `finalThought` | closing CTA block |
| `details` | date/time/venue |
| `reservation` | **ignore — the reservation page is being retired** |

### 3.2 🔒 DO NOT REWORD — this is the important part

The agenda and "What You Walk Away With" copy is **authored sales copy**. It was destroyed once
during the 2026-07-30 release by an agent that mistook a correction brief for replacement copy, and
had to be restored from git.

**Do not "improve", tighten, summarise, or regenerate any of it.** Port it exactly. If something
looks like a typo, flag it — do not fix it.

Phrases that must survive the port intact:

- "there are no strangers, only CEOs you haven't met yet"
- "The Anthropic + xAI deal, the OpenAI + Microsoft alliance, the Anthropic + Amazon partnership"
- "AI collapses that to a few days"
- "grow 3-5× faster than the ones still doing it like it's 2015"
- "The strategic part is over. Now for the show."
- "The demos are how you start moving Monday morning."
- "This one inverts that"
- "You will leave with a few ideas you can implement right away."
- "separates a $100M exit from a $120M exit"
- All **seven** agenda card titles, including "…Strategic Partnerships 10× Easier." and
  "Why This Could Be Your Biggest 2026 Growth Lever."

### 3.3 Two invisible characters that matter

`hero.details[0]` is `"Wednesday, October 7 | 5:00\u20118:00\u00A0PM"`.
(Was `"Thursday, August 6 | \u2026"` until the 2026-08-06 date change \u2014 see \u00A712.)

- `\u2011` is a **non-breaking hyphen**
- `\u00A0` is a **non-breaking space**

They bind "5:00‑8:00 PM" into one unbreakable token. Without them the line breaks at the hyphen on
narrow phones and strands a dangling "5:00-". Preserve them. They are in the JSON as real
characters — do not let an editor normalise them to ASCII.

---

## 4. The schedule — and why the numbers are what they are

Do not adjust these. Every duration claim on the page is load-bearing and was verified
programmatically.

| # | Time | Segment | Length |
|---|---|---|---|
| 01 | 5:00 PM | Arrival & casual networking | 50 min |
| 02 | 5:50 PM | Kelli's Welcome | 10 min |
| 03 | 6:00 PM | Executive Briefing #1 | 3 + 3, then 1 min transition |
| 04 | 6:07 PM | Executive Briefing #2 | 3 + 3, then 1 min transition |
| 05 | 6:14 PM | Executive Briefing #3 | 3 + 3, straight into demos |
| 06 | 6:20 PM | Two AI tool demos | 10 min |
| 07 | 6:30 PM | Networking block | 90 min |

**The arithmetic:**
- Content block is 6:00 → 6:30 = **exactly 30 minutes**. The page says "Only 30 minutes of it is content."
- 180 − 30 = 150 = **exactly 2 hours 30 minutes**. The page says that in two places.
- Networking 6:30 → 8:00 = **90 minutes**. Card 07's eyebrow says "90 Minutes".
- 6:30 + 15 + 15 = 7:00, then **60 minutes** free mingling → 8:00. Card 07's body says "60 minutes".
- Demos 6:20 → 6:30 = **10 minutes**. Card 06's title says "10 Minutes".

Change any single time and at least three sentences elsewhere on the page become false.

### Format facts that must be consistent everywhere

- **Samuel Salter is the only featured speaker**, joining remotely.
- **Tim Booker** — On-Site Main Host. **Kelli Gilmore** — On-Site Co-Host & Moderator. Kelli is
  never presented as a speaker.
- Three briefings, 3 minutes each, each followed by **one** Kelli-moderated question (not open Q&A).
- **Two** live demos, 10 minutes total.
- **15 CEOs.** Event runs 5:00–8:00 PM, **Wednesday October 7 2026**, The Capital Grille, McLean VA.
  (Moved from Thursday August 6 on 2026-08-06 — see §12. The times above are unaffected: only the
  calendar date moved, so every duration claim in this section still holds.)

### 🚫 Phrases that must not appear anywhere

Grep the built output for every one of these. All are from the retired format:

```
first featured CEO      CEO speakers          CEO Spotlight
peer CEO case studies   four live AI tool     four AI tools
the last two hours      70 minutes            Chatgpt
Limited to 15 Executives                      6:10 PM   6:20 PM   6:40 PM
```

---

## 5. Images — 16 assets, ~2.7 MB

**Already copied.** All 16 are committed to `frontend-next/public/`, byte-identical to the
GrowersCloud originals — checksums verified at copy time. Nothing to do unless an asset changes
upstream, in which case copy the bytes across rather than re-exporting (see the warning below).

| Asset | Size |
|---|---|
| `/sips-hero-polo-casual.webp` | 207 KB |
| `/arrival-scene.webp` | 225 KB |
| `/demo-scene.webp` | 257 KB |
| `/networking-scene.webp` | 180 KB |
| `/strategic-alliance-venn.webp` | 490 KB |
| `/executive_lounge_vibe_1769639909462.webp` | 107 KB |
| `/premium_invitation_envelope_white_1769640014114.webp` | 205 KB |
| `/referral-networking-main-casual-v2.webp` | 167 KB |
| `/referral-partnership-luxury-polo.webp` | 171 KB |
| `/referral-partnership-financial-clean.webp` | 174 KB |
| `/kelli-gilmore.webp` | 46 KB |
| `/tim-booker-real.webp` | 100 KB |
| `/sam-salter-headshot-18.webp` | 319 KB |
| `/about/Sam_Salter_President_Reagan.webp` | 73 KB |
| `/Growers_Cloud_Logo.webp` | 5 KB |
| `/mindfinders-ai-logo.webp` | 7 KB |

**Do not re-export or "optimise" these.** `strategic-alliance-venn.webp` was already broken once by
a lossless re-export that took it from 131 KB to **3.08 MB**. It is currently 490 KB at WebP q90,
38.8 dB PSNR. Copy the bytes as-is.

Both logos are needed — MindFinders' for its own branding, GrowersCloud's for Samuel's co-host card.

---

## 6. SEO — this page must not compete with GrowersCloud

> **Correction to the original framing.** This section used to be headed "all equity goes to
> GrowersCloud." That is the wrong mental model and it matters for what you expect from the setup.
> `noindex` and `rel=canonical` are contradictory signals — the canonical says "index that URL
> instead", the `noindex` says "don't index me at all". In practice `noindex` wins and the
> canonical is largely ignored, so **nothing is passed to GrowersCloud**. The MindFinders page
> simply does not compete. That is the actual goal: no duplicate content, one page ranking.
> Keep both directives — the canonical is harmless and documents provenance — but understand it
> is the `noindex` doing the work.

### Required

In the MindFinders sips `layout.tsx` metadata:

```ts
robots: { index: false, follow: false },
alternates: {
  canonical: 'https://growerscloud.ai/programs/ai-ceo-sips-and-growth-executive-reception',
},
```

Also:
- **Remove this route from the MindFinders sitemap.**
- **Do NOT emit Event JSON-LD on MindFinders.** Only GrowersCloud publishes it. Two sites emitting
  conflicting `Event` schema for the same August 6 event at the same venue can damage the page you
  actually want ranking. If the current MindFinders page has an Event block, delete it.
- If MindFinders has an `llms.txt`, either omit this event or point the entry at the GrowersCloud
  URL, so AI search sends people to the canonical page.

### ⚠️ The trap — do not `Disallow` it in robots.txt

It is tempting to also add `Disallow: /programs/ceo-sips-and-smoothies` to MindFinders'
`robots.txt`. **Don't.** If Google cannot crawl the page it cannot read the `noindex`, and the URL
can sit in the index indefinitely with no snippet. Leave crawling **allowed** so the `noindex` is
actually seen.

---

## 7. Routing and the booking modal

### The slug moved — three live paths now

Since the slug change shipped (§11), the page lives at
`/programs/ai-ceo-sips-and-growth-executive-reception`, matching GrowersCloud path for path.
Both older paths were given out widely and must keep landing:

| Path | Code | Lands on |
|---|---|---|
| `/ceo-sips-and-smoothies` | 308 | new slug |
| `/programs/ceo-sips-and-smoothies` | 308 | new slug |
| `…/reservation` (all three slugs) | 307 | `/` |

Each resolves in **one hop** — the oldest flat path points straight at the current slug rather
than chaining through the intermediate one.

> ⚠️ **Redirect order is load-bearing.** Next.js takes the first match, so the `/reservation`
> rules must sit **above** the slug rules. Put them below and the slug rules' `:path*` wildcards
> swallow `/reservation` and forward it into a 404.

Note these are **308s, not 301s** — that is what Next emits for `permanent: true`. Same
canonicalisation behaviour, and it preserves the HTTP method.

### `/reservation` — retire it

MindFinders had a live `/programs/ceo-sips-and-smoothies/reservation` page (145 lines).
GrowersCloud retired its equivalent and 307-redirects it. Do the same:

```ts
// next.config.ts redirects()
{
  source: '/programs/ai-ceo-sips-and-growth-executive-reception/reservation',
  destination: '/',
  permanent: false,   // 307 — matches GrowersCloud's treatment
}
```

Then delete the route folder. Note this is not optional and not really a separate step: the
route reads `sips.reservation`, and §3.0 drops that key, so the folder has to go with it.

**Left behind:** `public/calendar-embed.html` is now orphaned — the deleted reservation page was
its only consumer — but stays publicly reachable. Left in place deliberately in case the URL was
used in outreach. Sam's call to delete.

### Booking modal — ✅ widget confirmed

Registration is a **click-to-open modal**, never an eager inline iframe. Every CTA opens it.

**MindFinders uses a GHL _form_, not a booking calendar:**

```ts
const SIPS_FORM_IFRAME_SRC = "https://links.growerscloud.ai/widget/form/fehFJkNbVkqrJVrDORNO";
```

GHL form name: `Direct - AI CEO Sips and Growth Executive Social`.

**Take the inline embed's `src` only — discard the rest of the GHL snippet.** Do not paste GHL's
`<iframe>` markup or its `<script src=".../js/form_embed.js">` tag into the page. The modal loads
that helper script itself, once per session, when it first opens. An eager page-level script tag is
exactly what the forms-and-booking pattern forbids.

**Why this drops in cleanly** (verified against GrowersCloud's `BookingModal`):

- The modal already injects `https://links.growerscloud.ai/js/form_embed.js` — the same script the
  GHL snippet ships with. Form and booking widgets both use it. ✅ held up.
- The modal validates inbound `postMessage` against origin `https://links.growerscloud.ai`. The
  form is on that origin, so resize and completion events pass validation unchanged. ✅ held up.
- ~~`form_embed.js` drives iframe auto-resize the same way for `/widget/form/` as for
  `/widget/booking/`. No height handling to change.~~ ❌ **This is wrong.** It does not, and it
  actively fights you. See §8.7 before you touch the modal.

**Note the domain is `links.growerscloud.ai`, not MindFinders.** That is intentional — MindFinders'
GHL is hosted on the GrowersCloud domain. No source parameter or hidden tracking field is needed:
the two sites use different widget IDs (GrowersCloud `/widget/booking/fZ0oyUjeAkW7L0ZPOchJ`,
MindFinders `/widget/form/fehFJkNbVkqrJVrDORNO`), so submissions are already distinguishable by
which widget they arrived through.

**GrowersCloud is not changing.** It keeps its booking calendar. Do not touch it.

### After submission — the redirect leaves the page

GHL's post-submit behaviour is a **redirect to a URL you configure on the form**, and that
redirect **navigates the top window**, not the iframe. The visitor leaves the modal behind and
lands on a normal full page.

> ⚠️ Do not try to establish this by reading `form_embed.js`. That is only the parent-side
> script, and its sole parent-navigation hook (`modify-parent-url`) calls `history.replaceState`,
> which rewrites the address bar without navigating. Reading it leads you confidently to the
> wrong answer — it did here. The widget page *inside* the iframe does the top-level navigation
> itself. Only a real submission settles it.

Current destination: `/thank-you/ai-ceo-sips`.

**Every form gets its own thank-you page.** `/thank-you` itself is deliberately a 404. The copy
on these pages names a specific event — date, venue, what happens next — so two forms sharing one
URL shows the wrong details to half the people who reach it. A new form means a new sibling route
under `src/app/thank-you/` plus a new key under `thankYou` in `content.ts`. The rule is repeated
in that route's `layout.tsx`.

These are full pages: normal site header and footer, `noindex` (thin content, and anyone arriving
cold has skipped the form). Because the browser genuinely lands on a distinct URL, it is also a
clean conversion trigger if GA4 or a pixel is ever added — no `postMessage` plumbing needed.

### CTA placement

**Every section ends with a "Request an Invitation" button — 9 sections, 9 buttons.** This was
added deliberately: the page is long and on a phone a reader who is sold partway down should not
have to scroll back to the hero.

Implement it as **one shared render helper**, not nine pasted copies, so they cannot drift apart.
Full width on mobile (thumb target), auto width from `sm` up.

---

## 8. Traps — these already caused real bugs

### 8.1 Headline spans concatenate without spaces

Multi-line headlines split on `\n` into block-level spans. Their **text content** joins with no
separator, so screen readers and copy/paste got:

```
An Executive Social.Not a Pitch.
Executive Briefing #1:How AI Makes CEO-to-CEO…
```

The visual looked fine, which is why it survived for months. If you render titles the same way,
add an explicit space on every line but the last:

```tsx
{line}{i < arr.length - 1 ? ' ' : ''}
```

### 8.2 `whitespace-nowrap` on the hero ticket line = horizontal scroll on every phone

The date line carried `whitespace-nowrap` at **all** breakpoints. At `text-lg` it is 313 px wide;
with padding it demanded a **395 px viewport**, so iPhone 14 (390), iPhone SE (375) and common
Androids (360) all scrolled sideways. Fix pattern: `text-base` on mobile, `sm:whitespace-nowrap`,
plus the non-breaking characters from §3.3.

### 8.3 Card headings that do not scale down

The agenda card `h3` went straight to `text-3xl` at the base breakpoint with no mobile step. Card
04's 20-word title ran **10 lines and filled an entire phone screen** before any body copy. Give
headings a real mobile step.

### 8.4 Widows

Project rule: no hanging words. The agenda intro dropped "live." onto its own line; the Walk Away
intro stranded its closing words. Fix with a wider measure plus `text-balance`, not by editing copy.

### 8.5 Verify mobile in a sized iframe

`resize_window` silently fails in this environment — it reports success without changing the
viewport. Load the page in an iframe of a fixed width instead; an iframe gets its own viewport, so
mobile media queries evaluate for real. Test 320 / 360 / 375 / 390 / 430.

### 8.6 Tailwind 4 in the MindFinders repo

Do not go looking for a `tailwind.config.ts` — there isn't one. Their tokens live in
`src/app/globals.css` under `@theme`.

**On hex vs tokens:** §2.1 tells you to find-and-replace raw hex values, which is deliberate. It
keeps the port a mechanical, verifiable transformation of a file that is already written that way,
and it is the fastest route to "looks identical in their colours." Converting the page to their
`primary` / `secondary` tokens afterwards is a reasonable follow-up, but doing it *during* the port
mixes two kinds of change and makes a visual regression much harder to bisect. Port first,
tokenise later if you want it.

What you must *not* do is leave any GrowersCloud hex in place — see the grep check in §9.

### 8.7 🚨 The GHL form does NOT auto-resize — and `form_embed.js` overwrites your iframe

This spec told you (in §7) that `form_embed.js` handles auto-resize for `/widget/form/` the same
way it does for `/widget/booking/`. **It does not.** This cost real debugging time on the port.

What actually happens, measured in the browser:

- `iframe-resizer` posts a single `[iFrameSizer]<id>:<height>:<width>:init` on load and then
  **goes silent**. It ignored three subsequent manual height changes and never answered a
  re-measure request.
- Worse, after load it **reaches back into your iframe and overwrites two things**: the height
  (to ~720px) and the `scrolling` attribute (back to `"yes"`). Set them as JSX props and it looks
  like your code did nothing.

Consequences if you don't handle it:

- **Dead space.** GHL reports this form as **650×549**; it renders ~580px tall once the consent
  paragraph wraps. A `max-w-4xl` modal at `92vh` is 896×787 — a small form marooned in white.
- **A scrollbar you cannot style away.** GHL's page fills whatever height it is handed and then
  overflows it by a few pixels, so a scrollbar appears at 640, 720 and 760 alike. It is *their*
  scrollbar, inside a cross-origin iframe. `scrolling="no"` is the only lever — and it is one of
  the two attributes the script resets.

**The fix that works:** size the modal to the form (`max-w-[700px]`, height following content),
set an explicit iframe height, and re-assert height + `scrolling` with a `MutationObserver` after
the script has had its turn. One correction, not a tug of war — but bound the observer anyway in
case a future GHL build fights back.

**Don't chase an exact pixel height.** Leave headroom above the form's real height and let the
modal body scroll, so a stale constant degrades to a scrollbar rather than a clipped form.

Two knock-on notes:

- With the panel height driven by content, a failed/unmounted iframe collapses the body to zero
  and takes any absolutely-positioned fallback with it. Give the body a `min-h`.
- At a 1280×720 window a ~700px modal cannot fit; ~28px of scroll remains. That is geometry, not
  a bug.

### 8.7c 🚨 That desktop height made the form unsubmittable on a phone

The fix above is correct **on desktop only**, and shipping it unqualified broke mobile. Reported
from a real phone: after ticking the consent box, the submit button could not be scrolled back
to. It sat above the fold, permanently out of reach.

Two things combined:

- The measured height is a **desktop** measurement. On a phone the fields stack and the consent
  paragraph wraps to roughly twenty lines, so the form runs far taller than the screen. A fixed
  640px iframe cannot show it.
- With `scrolling="no"`, the outer container is the only scroller — and **on touch devices,
  dragging over a cross-origin iframe does not scroll its parent.** So the container scrolled
  once, and then a finger on the form could not bring it back.

**The rule: exactly one thing scrolls, and it must be the thing under the finger.** Two nested
scrollers around a cross-origin iframe is the bug, not the layout.

Below 640px wide, hand scrolling to the iframe: panel fills the screen, iframe fills the panel,
`scrolling="yes"`, and the outer body goes `overflow-hidden`. Desktop keeps the snug fit. The
`MutationObserver` has to defend **whichever model is active** — left defending the desktop one,
it re-pins 720px on mobile and strands the button again.

Test it by scrolling *down to the consent box and back up to submit*, at 375/390/430. Checking
that the form renders is not enough; it rendered fine the whole time it was unsubmittable.

### 8.7b 😅 This document put GrowersCloud green back into the stylesheet

Worth knowing, because it is invisible and it defeats the §9 grep check.

Tailwind 4 auto-detects source files across the whole project. This spec quotes GrowersCloud
class names as examples (`bg-[#88C52A]`, `shadow-[8px_8px_0px_0px_#2F2F2F]`). The moment the file
was copied into the repo, Tailwind read those as real utilities and emitted them — putting
`#88c52a` and `#2f2f2f` straight back into the built CSS, from a *markdown file*.

The §9 colour check caught it on the very next run. Fixed with a source exclusion in
`globals.css`:

```css
@source not "../../docs";
```

**The general lesson:** any prose in this repo that quotes a Tailwind arbitrary-value class will
be compiled unless excluded. If docs move or new ones are added, re-run the §9 grep.

### 8.8 MindFinders' `.container` is unlayered and beats every Tailwind utility

§2.1 said "verify, don't assume" about `.container`. Here is what verification found.

Their `.container` (`max-width: 1200px; padding: 0 10px`) is declared in `globals.css` **outside
any `@layer`**. Unlayered rules outrank layered ones, and Tailwind 4 puts its utilities in
`@layer utilities` — so `.container` wins against `max-w-3xl`, `max-w-7xl`, `px-4`, everything.

The ported page leans on exactly those utilities sitting on the container element. Reuse
`.container` and the `max-w-3xl` sections render at 1200px instead of 768px.

**Do not "fix" the global `.container`.** Nine other pages already combine it with `max-w-*` and
`px-*` utilities that are being silently swallowed today; unlayering it would reflow the whole
site. Give the ported page **its own class** in `@layer components`, reproducing Tailwind 3's
container geometry (`center`, `padding: 2rem`, stepped max-widths with `2xl: 1400px`). Layered, so
the page's own utilities win exactly as they do on GrowersCloud.

### 8.9 `font-serif` silently renders the heading font

`globals.css` has an unlayered `h1, h2, h3, h4, h5, h6 { font-family: var(--font-heading) }`. Same
mechanism as §8.8: it outranks Tailwind's `font-serif` utility, so **every heading renders Libre
Franklin no matter what the markup asks for**.

The ported page closes on a `font-serif` h2 (Playfair on GrowersCloud, PT Serif here). The source
looks correct; only the computed style in a browser reveals it.

**✅ Fixed site-wide 2026-07-30.** It was a pre-existing bug, not something the port introduced —
the home page `h3` and the roundtable's closing `h2` were silently affected too. The heading rule
now lives in `@layer base`.

> **The lever is the layer, not the specificity.** The first attempt at this wrapped the selector
> in `:where()` to drop it to zero specificity. **That does nothing.** Cascade layers outrank
> specificity outright, and unlayered styles sit above every layer — so an unlayered rule beats a
> layered utility even at zero specificity. Only moving the rule into `base`, which Tailwind
> orders below `utilities`, lets the utility win.
>
> Same reasoning applies to §8.8: that is why `.sips-container` had to be declared in
> `@layer components` rather than just given a weaker selector.

Verified in a browser across five pages: the three `font-serif` headings render PT Serif; the
other 96 headings still render Libre Franklin.

---

## 9. Verification checklist

Run against the **rendered HTML**, not the source. Every item below was verified this way on
GrowersCloud before release.

- [ ] All 7 agenda times present: 5:00 / 5:50 / 6:00 / 6:07 / 6:14 / 6:20 / 6:30 PM
- [ ] None of the banned phrases in §4 appear anywhere
- [ ] "Limited to 15 CEOs" · "Only 30 minutes of it is content" · "2 hours and 30 minutes"
- [ ] All three host roles correct; Samuel is the only featured speaker
- [ ] Every protected phrase from §3.2 present verbatim
- [ ] 9 sections, 9 CTAs, all opening the modal
- [ ] The modal loads `/widget/form/fehFJkNbVkqrJVrDORNO` and the form renders and submits
- [ ] No `form_embed.js` `<script>` tag sits at page level — the modal injects it on open
- [ ] GrowersCloud's calendar ID (`fZ0oyUjeAkW7L0ZPOchJ`) appears nowhere in the MindFinders repo
- [ ] The `socialContext` h2 ("No stage. No pitch from us." / "The only selling in the room is
      CEO-to-CEO.") has a space in the **text content**, not just visually
- [ ] `robots: noindex, nofollow` present; canonical points at GrowersCloud
- [ ] **No** Event JSON-LD on the page
- [ ] Route absent from sitemap; **not** disallowed in robots.txt
- [ ] **No `Event` JSON-LD anywhere on the MindFinders site** — check every built page, not just
      this one. Zero is the target
- [ ] `/reservation` returns 307 **under every slug the page has ever had**
- [ ] Both old slugs 308 to the current one, **in one hop**, and `/reservation` is not swallowed
      by the slug wildcards (see the ordering warning in §7)
- [ ] Booking modal on desktop: form fills it with no dead space and **no scrollbar** — the
      widget does not auto-resize and `form_embed.js` overwrites your height and `scrolling`.
      See §8.7
- [ ] Booking modal on a phone (375 / 390 / 430): scroll **down to the consent box and back up
      to submit**. Rendering correctly is not the test — it rendered fine the whole time the
      submit button was unreachable. See §8.7c
- [ ] Submitting redirects to `/thank-you/ai-ceo-sips` as a **full page**, not inside the modal
- [ ] `/thank-you` (bare) is a 404, and no two forms share a thank-you URL
- [ ] No horizontal scroll at 320 / 360 / 375 / 390 / 430 px
- [ ] **Grep the built CSS for `88C52A`, `7AB52E` and `2F2F2F` — all three must return zero**
- [ ] `font-heading` renders Libre Franklin, `font-serif` renders PT Serif
- [ ] `animate-fade-in-up` and `delay-*` actually animate (they are custom CSS, easy to forget)
- [ ] `.container` gutters match — agenda cards sit at the intended width, not edge-to-edge
- [ ] Layout matches GrowersCloud section for section — **except the CEO network effect section,
      which MindFinders deliberately moved above the agenda on 2026-08-06 (§12).** Current order:
      hero → executive social → CEO network effect → agenda → walk away → audience →
      invitation process → hosts → final thought
- [ ] MindFinders' other nine `content.ts` keys are untouched (home, services, aiAgents,
      trainingAndTalent, getStarted, about, faq, legal, executiveRoundtable)
- [ ] All 16 images resolve (no 404s, no broken `next/image`)
- [ ] `tsc --noEmit` clean; production build green

---

## 10. Phase 2 — auto-sync (do not build yet)

Sam's goal: maintain content in GrowersCloud only and have MindFinders follow automatically.

Both projects separate content from presentation at the same `src/lib/content.ts` seam, which is
what makes this feasible — but note their file holds nine other keys (§3.0), so the sync must
target the `sipsAndSmoothies` key only, never the whole module.

The intended design:

1. GrowersCloud exposes the `sipsAndSmoothies` object as JSON at a stable URL.
2. MindFinders fetches it in a server component with ISR revalidation and renders it through the
   ported page, merging it over just that one key.
3. MindFinders commits a snapshot as a fallback and wraps the fetch in `try/catch`, so a
   GrowersCloud outage degrades to last-known-good instead of failing the build.
4. Images stay copied in MindFinders' `public/` — they change rarely, and hotlinking would couple
   their page load to GrowersCloud uptime.

**Do Phase 1 first and confirm it looks right.** If you wire the sync at the same time and the page
looks wrong, you will not know whether the fault is the port or the transport.

---

## 11. Open items

| Item | Owner | Status |
|---|---|---|
| MindFinders form widget | Sam | ✅ Provided 2026-07-30 — `/widget/form/fehFJkNbVkqrJVrDORNO`, see §7 |
| Slug change to match GrowersCloud | Sam | ✅ **Done 2026-07-30.** Now `/programs/ai-ceo-sips-and-growth-executive-reception`. The "needs a 301 first" caveat turned out to be weaker than it read: the page is `noindex`, so there is no ranking equity to preserve at either end. The redirect is purely about not breaking links already sent to CEOs. See §7. |
| GHL form styling | Sam | Submit button now renders MindFinders red (was GrowersCloud green). Phone field still defaults to a non-US country flag — cosmetic, GHL-side |
| GHL post-submit redirect | Sam | Worth checking it does not still point at an old slug, which would add a needless hop |
| `font-serif` broken site-wide | — | Open, see §8.9. Scoped fix shipped for the Sips page only; home and roundtable still affected |
| `public/calendar-embed.html` | Sam | Orphaned by the reservation retirement, still publicly reachable. Delete if the URL was never circulated |
| Phase 2 auto-sync | — | Not started, see §10 |

**Nothing is blocking the port.** Everything needed to execute Phase 1 is in this spec and the
JSON beside it.

### GHL housekeeping (cosmetic, Sam's side, not blocking)

The form is named `Direct - AI CEO Sips and Growth Executive Social` — note it says **Social**
while the event is called **Executive Reception** everywhere else, and the name carries a leading
space. Neither is user-facing; both will look untidy in GHL reporting once there are more events.

---

## 12. Revision — 2026-08-06: parity update + section reorder

Executed from GrowersCloud's work order
(`Growers_Cloud_Full_Stack/Docs/partner-sites/mindfinders-2026-08-05-update-brief.md`),
which brought three changes already live on `www.growerscloud.ai`. Plus one local reorder Sam
asked for in the same session. Appended, not merged over — this file keeps §0 and §8.7–8.9,
which GrowersCloud's copy does not have.

### What changed

| # | Change | Where |
|---|---|---|
| 1 | `socialContext.h2` / `.body` replaced. h2 is now two full **sentences**. | `content.ts` |
| 2 | The `EXECUTIVE SOCIAL` eyebrow became a **section title**. | `page.tsx` |
| 3 | Event date Thursday August 6 → **Wednesday October 7 2026**. | `content.ts` ×3 + 1 |
| 4 | CEO network effect section **moved above the agenda**. | `page.tsx` |

### 12.1 The h2 had to be retyped down, not just refilled

The new h2 lines are full sentences (up to 43 characters, from 20). The old markup rendered each
line at `lg:text-7xl` with `lg:whitespace-nowrap`, and this section is a two-column grid
(`grid lg:grid-cols-2 gap-20`), so from `lg` up the text column is only about half the container.
`nowrap` was survivable at 20 characters and pushes the new lines straight out of the column.

```
h2 wrapper : text-4xl md:text-5xl lg:text-7xl leading-[0.95]
          -> text-3xl md:text-4xl lg:text-5xl leading-[1.05]
each span  : block lg:whitespace-nowrap
          -> block text-balance
```

The `{line}{i < arr.length - 1 ? ' ' : ''}` separator from §8.1 was **kept**. It is still the only
thing putting a real space between the two sentences in the text content — verified in the built
HTML, where React emits `No stage. No pitch from us.<!-- --> ` before the second span.

### 12.2 🚨 The section label is hardcoded in the JSX, not in `content.ts`

**This is the trap in this update.** Every other change here rides along with the
`sipsAndSmoothies` content key. This one does not — the label is literal JSX. A clean content swap
ships every other change correctly and leaves the stale red eyebrow behind, and **nothing fails to
signal it**: no type error, no build warning, no missing key.

The label went from an eyebrow (small, red, uppercase, wide-tracked) to a section title typed
identically to the `walkAway` h2 — `text-4xl md:text-6xl font-bold font-heading leading-tight
tracking-tighter text-balance block mb-4` — and the text from `EXECUTIVE SOCIAL` to
`Executive Social`.

Four things it depends on:

1. **Title case.** It is a title now, so `Executive Social`, not `EXECUTIVE SOCIAL`.
2. **No colour class at all.** It inherits the default dark text. GrowersCloud's is simply the
   inherited black; the instruction is to match that *behaviour*, not to swap the red for
   `#231F20` literally.
3. **Still a `<span>`.** The section already has an `h2`; a second would muddle the outline.
4. **Typed identically to the `walkAway` h2** — that is the whole target.

The two eyebrow devices must not come back. At 60px, caps carry far more visual mass (every glyph
at cap height, no descenders), and 0.3em tracking adds ~18px per character, which pushes the two
words past the column unaided. On GrowersCloud the caps version measured *identical* to the
`walkAway` h2 on `fontSize` and still read clearly oversized — which is why `textTransform` belongs
in the check below, not just size.

**Verify by measuring, not by eye.** Run on the rendered page; the two strings must match *each
other*:

```js
const pick = t => [...document.querySelectorAll('h2, span')]
  .find(e => e.textContent.trim().startsWith(t));
[pick('Executive Social'), pick('What You Walk Away With')]
  .map(e => { const s = getComputedStyle(e);
    return `${s.fontSize} | ${s.letterSpacing} | ${s.lineHeight} | ${s.textTransform}`; });
```

Do **not** chase GrowersCloud's absolute numbers (`60px | -3px | 60px | none`). We run Tailwind 4
with our own `@theme` scale, so our px may legitimately differ. Matching their pixels is not the
requirement and will send you after a false failure.

### 12.3 The date lives in four places, not three

The work order lists three fields. There is a fourth it did not cover:

| Field | Value |
|---|---|
| `sipsAndSmoothies.hero.details[0]` | `Wednesday, October 7 \| 5:00[U+2011]8:00[U+00A0]PM` |
| `sipsAndSmoothies.details.date` | `October 7` |
| `sipsAndSmoothies.finalThought.body` | `…Fifteen seats. October 7. The Capital Grille.` |
| **`thankYou.aiCeoSips.eventLine`** | `Wednesday, October 7 · 5:00[U+2011]8:00[U+00A0]PM · …` |

`thankYou.aiCeoSips` is a **different route** (`/thank-you/ai-ceo-sips`), so it is outside any
check scoped to "the Sips page's rendered HTML" — and it is exactly where this page's form sends
every person who converts. Left alone it would have confirmed the wrong date to every registrant.

**Rule going forward: the event date is a four-field change.** Grep `content.ts` for the old date
rather than working from a field list, and check both rendered routes.

⚠️ The non-breaking hyphen (U+2011) and non-breaking space (U+00A0) from §3.3 appear in **two** of
those strings. Both were preserved by editing only the day/date prefix and never retyping the rest
of the string. Do it that way — retyping invites an editor to normalise them to ASCII. Verified
present in the built HTML for both routes.

### 12.4 Section reorder — a deliberate divergence from GrowersCloud

Sam asked for the CEO network effect ("Create Strategic Partnerships…") section to sit directly
under Executive Social. It now does, ahead of the agenda:

```
hero -> executive social -> CEO network effect -> agenda -> walk away ->
audience -> invitation process -> hosts -> final thought
```

It reads well with the new copy: Executive Social now closes on "the only selling in the room is
CEO-to-CEO", and this section is what that selling actually looks like, so the two run as one
argument before the agenda backs it up.

**But it breaks §1's "GrowersCloud is the source of truth" for layout, and §9's "matches
GrowersCloud section for section".** Both have been annotated. This is the first intentional
layout divergence between the two pages — if GrowersCloud reorders, the two will need reconciling
by hand rather than by a straight content sync (§10 Phase 2 syncs the content key only, so it is
unaffected).

**Open cosmetic consequence:** the page alternates section backgrounds
(gray / white / gray / white…). Executive Social and CEO network effect are **both** the same
translucent grey, and the white agenda section used to separate them. They are now adjacent, so
they render as one continuous grey band with no seam. Flipping the CEO network effect section to a
white background restores the rhythm. Not done — it is a visual call for Sam.

### 12.5 Two notes back to GrowersCloud

1. **The `matchmaking` warning in the work order is a false alarm.** It says our content snapshot
   carries a `matchmaking` key theirs does not, and that a blind refresh would delete it.
   `mindfinders-sips-content.json` **does** contain `matchmaking`, byte-identical to ours. The
   refresh was verified key-for-key: nothing lost, nothing gained, exactly four sections changed
   (`hero`, `socialContext`, `details`, `finalThought`).

   Separately: `matchmaking` is **dead content on our side either way** — it is in `content.ts` and
   in the snapshot, but no component reads it. The section was removed from this page during the
   CRO pass (see the header comment in `page.tsx`). Left in place; harmless, and it keeps the
   snapshot a faithful mirror of theirs.

2. **Pre-existing §8.1 bug in the hero `h1`, still unfixed.** The three h1 spans have no
   separator, so the accessible text content of the page's most important heading reads:

   ```
   The AI CEOSips & GrowthExecutive Reception
   ```

   Same defect §8.1 documents and the same fix (`{line}{i < arr.length - 1 ? ' ' : ''}`) that the
   `socialContext` h2 already uses a few lines below it. Not introduced by this update and not
   fixed by it — flagged to Sam, awaiting the go-ahead.

### 12.6 Verification run

`tsc --noEmit` clean; production build green (18/18 static pages). Checked against the **built
HTML**, not source: no `August 6` and no `An Executive Social` on either route; `Executive Social`
present in title case with no all-caps version; `Wednesday, October 7` in the hero ticket line;
`October 7 · 5:00-8:00 PM` in the details line; `Fifteen seats. October 7.` in the closing quote;
both non-breaking characters intact on both routes; no `lg:whitespace-nowrap` anywhere in the
output; no Event JSON-LD.

**Not yet run — needs a browser:** the §12.2 computed-style comparison, and the §9 responsive
checks at 320/360/375/390/430 (the ticket line is two characters longer than the string §8.2's
313px measurement was taken on, and the reorder puts a new section boundary mid-page).

---

## 13. Revision — 2026-08-27: event moved to October 15, 6:00–9:00 PM

Requested directly on the MindFinders side (not a GrowersCloud work order this time — no upstream
brief to port from). Event moved from **Wednesday, October 7, 5:00–8:00 PM** to **Thursday,
October 15, 6:00–9:00 PM**.

To keep every duration claim in §4 true without re-deriving the arithmetic, the whole agenda was
shifted **+1 hour** rather than re-timed: 5:00→6:00, 5:50→6:50, 6:00→7:00, 6:07→7:07, 6:14→7:14,
6:20→7:20, 6:30→7:30. The new end time (7:30 + 90 min networking = 9:00 PM) matches the new close
time, and every relative-duration sentence from §4 (30 min content, 2h30m total, 90 min networking,
10 min demos) still holds unchanged.

Updated (see §12.3 for the pattern — same four fields, edited by substring replace, not retyped,
to keep the U+2011 non-breaking hyphen and U+00A0 non-breaking space in `hero.details[0]` and
`thankYou.aiCeoSips.eventLine` intact):

| Field | New value |
|---|---|
| `sipsAndSmoothies.hero.details[0]` | `Thursday, October 15 \| 6:00[U+2011]9:00[U+00A0]PM` |
| `sipsAndSmoothies.eveningProgram.items[*].time` (all 7) | shifted +1 hour, see above |
| `sipsAndSmoothies.eveningProgram.items[0].description` | `"Doors open at 6:00."` |
| `sipsAndSmoothies.details.date` | `October 15` |
| `sipsAndSmoothies.details.time` | `6:00-9:00 PM` |
| `sipsAndSmoothies.finalThought.body` | `…Fifteen seats. October 15. The Capital Grille.` |
| `thankYou.aiCeoSips.eventLine` | `Thursday, October 15 · 6:00[U+2011]9:00[U+00A0]PM · …` |

Also updated the stale dev comment at `page.tsx` (hero ticket-line block, near line 114) that
referenced the old "Wednesday, October 7" string length — the new string is the same character
count (35), so the mobile-wrap fix from §8.2 needs no further changes, but re-measure if the date
ever changes to a string of different length.

**Not yet run:** the §9 verification checklist against rendered/built HTML (this revision only
touched source and ran `tsc --noEmit`, which is clean).
