# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Deployment & Git Repository

**CRITICAL**: This folder (`frontend-next/`) is the git repository. The parent `Mindfinders-website/` folder is for documentation only and is NOT a git repo.

| Info | Value |
|------|-------|
| Remote | https://github.com/GrowersCloud/mindfinders-website.git |
| Branch | `master` |
| Deployment | Vercel (auto-deploys on push to master) |
| Changelog | [CHANGELOG.md](CHANGELOG.md) - **update after every deployment** |

### Deploy Process
1. Make changes in this folder
2. Test: `npm run dev`
3. Build: `npm run build`
4. Stage: `git add <files>`
5. Commit: `git commit -m "message"`
6. Push: `git push origin master`
7. **Update [CHANGELOG.md](CHANGELOG.md)** with date, commit hash, and changes

### Post-Deployment Checklist
- [ ] Verify Vercel deployment succeeded
- [ ] Test changes on production site (mindfinders.ai)
- [ ] Update CHANGELOG.md with deployment details

## Development Commands

```bash
npm run dev      # Start Next.js dev server (http://localhost:3000)
npm run build    # Create production build with static optimization
npm run start    # Start production server
npm run lint     # Run ESLint
```

See [package.json](package.json) for complete scripts.

## Project Architecture

**Tech Stack:**
- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4

**Rendering Strategy:**
- Server Components by default (better SEO, smaller bundle)
- Client Components only where interactivity is needed (hooks, state, browser APIs)

**Content Model:**
- Single source of truth: All website copy lives in [src/lib/content.ts](src/lib/content.ts)
- Never hardcode text in components

**Key Directories:**
- [src/app](src/app) - Next.js App Router pages and layouts
- [src/components](src/components) - Reusable UI components
- [src/lib/content.ts](src/lib/content.ts) - ALL page copy (single source of truth)
- [src/app/globals.css](src/app/globals.css) - Global styles with design system variables

## Routing & Navigation

**Next.js App Router:** File-system based routing in [src/app](src/app)

**Routes:**
- `/` - [src/app/page.tsx](src/app/page.tsx) (Home)
- `/services` - [src/app/services/page.tsx](src/app/services/page.tsx)
- `/ai-agents` - [src/app/ai-agents/page.tsx](src/app/ai-agents/page.tsx)
- `/training-and-talent` - [src/app/training-and-talent/page.tsx](src/app/training-and-talent/page.tsx)
- `/about` - [src/app/about/page.tsx](src/app/about/page.tsx)
- `/get-started` - [src/app/get-started/page.tsx](src/app/get-started/page.tsx)
- `/ceo-sips-and-smoothies` - [src/app/ceo-sips-and-smoothies/page.tsx](src/app/ceo-sips-and-smoothies/page.tsx) (Marketing Landing Page)
- `/ceo-sips-and-smoothies/reservation` - [src/app/ceo-sips-and-smoothies/reservation/page.tsx](src/app/ceo-sips-and-smoothies/reservation/page.tsx) (Calendar Booking)
- `/faq`, `/privacy-policy`, `/terms-of-service` - Legal/support pages

**Navigation Patterns:**
- Services mega menu uses anchor links (#voice-ai, #smart-automations, etc.)
- AI Agents dropdown uses anchor links to sections on `/ai-agents` page
- Header uses `usePathname()` hook from `next/navigation` for active route detection

## Content Management Pattern

**CRITICAL RULE:** All website copy lives in [src/lib/content.ts](src/lib/content.ts)

**Never:**
- Hardcode text strings in component files
- Scatter content across templates
- Use inline text for headings, paragraphs, or lists

**Always:**
- Import `content` from `@/lib/content`
- Reference content objects: `content.home.hero.h1`, `content.services.sections[0].h2`
- Update copy by editing content.ts only

**Example Structure:**
```typescript
export const content = {
  home: {
    hero: { h1: "Automate Smarter, Grow Faster and Hire Better" },
    whatWeDo: {
      h2: "What We Do: What Is a Growth and AI Strategic Advisor",
      body: ["paragraph 1", "paragraph 2"]
    }
  },
  services: {
    hero: { h1: "...", subheadline: "..." },
    sections: [{ h2: "...", h3: "...", body: [...] }]
  }
}
```

## Design System

**IMPORTANT:** The authoritative style guide is [../mindfinders-style.md](../mindfinders-style.md). Always refer to it for the complete design system.

**Tailwind CSS 4:** Using `@theme` directive in [src/app/globals.css](src/app/globals.css)

**CSS Variables (Quick Reference):**
```css
/* Colors */
--primary: #ED1B2F           /* Vibrant red/crimson */
--secondary: #231F20         /* Deep charcoal */
--accent: #231F20            /* Deep charcoal */
--background: #ffffff
--text-muted: #88909b
--border: #666666

/* Typography */
--font-heading: 'Libre Franklin', sans-serif
--font-serif: 'PT Serif', serif (weights 400, 700)

/* Spacing */
--spacing-base: 24px

/* Shadows */
--shadow-natural: 6px 6px 9px rgba(0, 0, 0, 0.2)
--shadow-deep: 12px 12px 50px rgba(0, 0, 0, 0.3)
```

**Google Fonts:** Loaded in [src/app/layout.tsx](src/app/layout.tsx) using `next/font/google`

**Tailwind Usage:**
```tsx
<div className="text-[var(--primary)] bg-[var(--secondary)]">
<button className="hover:text-[var(--primary)] transition-colors">
```

**Custom Classes:**
- `.container` - max-width 1200px, auto margins, 10px padding
- `.container-standard` - max-width 800px, auto margins, 10px padding

## Component Architecture

### Header ([src/components/Header.tsx](src/components/Header.tsx))
**Client Component** (`"use client"`)

- Uses React hooks: `useState`, `useEffect`, `usePathname`
- Services mega menu (3 columns on desktop, accordion on mobile)
- Programs mega menu (2 columns on desktop: Events, etc.; accordion on mobile)
- AI Agents dropdown (7 items)
- Active route detection with `usePathname()` from `next/navigation`
- Mobile hamburger menu with state management
- Sticky positioning: `sticky top-0 z-50`

### Footer ([src/components/Footer.tsx](src/components/Footer.tsx))
**Server Component** (default)

- Dark background: `bg-[var(--accent)]`
- Links to FAQ, Privacy Policy, Terms of Service
- "Powered by GrowersCloud" text
- Simple, static component with no interactivity

### PageShell ([src/components/PageShell.tsx](src/components/PageShell.tsx))
**Server Component**

- Wrapper for interior pages
- Props: `h1` (hero heading), `subheadline?` (optional), `children` (page content)
- Hero band: dark bg, white text, centered H1
- Body sections: `.container` wrapper with consistent spacing

**Usage:**
```tsx
<PageShell h1={content.about.hero.h1} subheadline={content.about.hero.subheadline}>
  {/* page content */}
</PageShell>
```

### FAQAccordion ([src/components/FAQAccordion.tsx](src/components/FAQAccordion.tsx))
**Client Component** (`"use client"`)

- Uses `useState` for managing expanded/collapsed state
- Reusable on `/faq`, `/services`, `/ai-agents` pages
- ARIA attributes: `aria-expanded`, `aria-controls`, `aria-labelledby`
- Smooth height transitions with overflow handling
- Props: `faqs` array with `{ question: string, answer: string }` objects

**Usage:**
```tsx
<FAQAccordion faqs={content.faq.items} />
```

## Accessibility & SEO Requirements

**CRITICAL:**
- ONE H1 per page only (enforced by PageShell component)
- Strict heading hierarchy: H1 → H2 → H3 (no level skips)
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`
- Skip-to-content link required for keyboard navigation
- Visible focus states on all interactive elements
- Full keyboard navigation for menus, accordions, forms
- WCAG AA color contrast compliance

## Key Files Reference

- [src/app/layout.tsx](src/app/layout.tsx) - Root layout with fonts, metadata, Header/Footer
- [src/app/page.tsx](src/app/page.tsx) - Home page (/)
- [src/app/globals.css](src/app/globals.css) - Tailwind imports, `@theme` config, CSS variables
- [src/lib/content.ts](src/lib/content.ts) - **SINGLE SOURCE OF TRUTH** for all website copy
- [src/components/Header.tsx](src/components/Header.tsx) - Navigation with mega menu (Client)
- [src/components/Footer.tsx](src/components/Footer.tsx) - Site footer (Server)
- [src/components/PageShell.tsx](src/components/PageShell.tsx) - Page wrapper with hero (Server)
- [src/components/FAQAccordion.tsx](src/components/FAQAccordion.tsx) - Accordion (Client)
- [package.json](package.json) - Dependencies and scripts
- [next.config.ts](next.config.ts) - Next.js configuration
- [tsconfig.json](tsconfig.json) - TypeScript configuration

## Common Workflows

### Adding a New Page

1. Create `src/app/[route-name]/page.tsx` (Next.js auto-routing)
2. Add content object to [src/lib/content.ts](src/lib/content.ts)
3. Import `PageShell` and `content` in your page component
4. Update navigation links in [src/components/Header.tsx](src/components/Header.tsx) if needed

**Example:**
```tsx
import PageShell from "@/components/PageShell";
import { content } from "@/lib/content";

export default function MyPage() {
  return (
    <PageShell h1={content.myPage.hero.h1}>
      <section className="container py-16">
        <h2 className="text-3xl font-heading mb-6">{content.myPage.section.h2}</h2>
        {content.myPage.section.body.map((p, i) => (
          <p key={i} className="mb-4">{p}</p>
        ))}
      </section>
    </PageShell>
  );
}
```

### Updating Copy

1. Edit [src/lib/content.ts](src/lib/content.ts) ONLY
2. Never modify component files for copy changes
3. Changes reflect immediately in dev mode (`npm run dev`)

### Adding a Component

1. Create `.tsx` file in [src/components/](src/components/)
2. Decide if it needs interactivity (hooks, state):
   - **Client Component**: Add `"use client"` at top
   - **Server Component**: Default (no directive needed)
3. Export default function or named export
4. Import and use in pages/components
5. Use Tailwind classes and CSS variables: `text-[var(--primary)]`

**Example Server Component:**
```tsx
// src/components/Feature.tsx
export default function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 border border-[var(--border)] rounded">
      <h3 className="text-xl font-heading mb-2">{title}</h3>
      <p className="text-[var(--text-muted)]">{description}</p>
    </div>
  );
}
```

**Example Client Component:**
```tsx
// src/components/Toggle.tsx
"use client";

import { useState } from "react";

export default function Toggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--primary)]">
      {isOpen ? "Close" : "Open"}
    </button>
  );
}
```

### Working with Client vs Server Components

**Server Components (default):**
- No hooks, run on server, better SEO, smaller bundle
- Use for static content, layouts, data fetching

**Client Components (`"use client"`):**
- Can use hooks (`useState`, `useEffect`, etc.)
- Can access browser APIs
- Can handle user interactions

**Rule:** Use Server Components by default, only add `"use client"` when needed.

## Next.js Specific Patterns

**Metadata for SEO:**
```tsx
// In page.tsx files
export const metadata = {
  title: "Page Title - MindFinders",
  description: "Page description for SEO"
};
```

**Font Optimization:**
Google Fonts loaded via `next/font/google` in [src/app/layout.tsx](src/app/layout.tsx)

**Image Optimization:**
Use `next/image` for images when/if images are added:
```tsx
import Image from "next/image";
<Image src="/logo.png" alt="MindFinders" width={200} height={50} />
```

**Link Component:**
Always use `next/link` for internal navigation:
```tsx
import Link from "next/link";
<Link href="/services">Services</Link>
```

**Dynamic Routes:**
Not currently used, but available via `[param]` folders if needed:
```
src/app/blog/[slug]/page.tsx  →  /blog/my-post
```

**Static Export:**
Site can be statically exported with `npm run build` (all routes pre-rendered at build time)

## Content Structure Example

The [src/lib/content.ts](src/lib/content.ts) file exports a single `content` object:

```typescript
export const content = {
  home: {
    hero: {
      h1: "Automate Smarter, Grow Faster and Hire Better"
    },
    whatWeDo: {
      h2: "What We Do: What Is a Growth and AI Strategic Advisor",
      body: [
        "A Growth and AI Strategic Advisor is...",
        "We assist businesses in unlocking..."
      ]
    },
    pillars: [
      {
        title: "Human Capital Management for Execution",
        text: "Strategy that translates into results..."
      },
      // ... more pillars
    ]
  },
  services: {
    hero: {
      h1: "Services",
      subheadline: "AI-Enabled Solutions for Modern Business"
    },
    sections: [
      {
        id: "voice-ai",
        h2: "Voice AI & Virtual Assistants",
        h3: "Subtitle",
        body: ["Paragraph 1", "Paragraph 2"]
      }
    ]
  },
  faq: {
    items: [
      {
        question: "What is MindFinders?",
        answer: "MindFinders is..."
      }
    ]
  }
}
```

**Pattern:** Nested objects with `h1`, `h2`, `h3`, `body`, `bullets`, `items` keys.

## Specification References

For detailed requirements beyond this architectural overview:

- **Design System:** [../mindfinders-style.md](../mindfinders-style.md) (authoritative style guide)
- **Website Copy:** [../final_mindfinders-website-copy.md](../final_mindfinders-website-copy.md)
- **Getting Started:** [README.md](README.md)
- **Build Specs (archived):** [../archive/final_prompt-1-26-build-mindfinders-website.md](../archive/final_prompt-1-26-build-mindfinders-website.md)
