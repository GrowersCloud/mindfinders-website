# MindFinders Website

A production-ready marketing website for MindFinders built with **Next.js 14+ (App Router)**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser.

## 🛠️ Project Structure

- **`src/app`**: App Router pages and layout.
  - `page.tsx`: Home page
  - `services/`, `about/`, etc.: Interior pages
  - `layout.tsx`: Global layout (Fonts, Metadata)
  - `globals.css`: Tailwind configuration & CSS variables
- **`src/components`**: Reusable UI components.
  - `Header.tsx`: Navigation, Mega Menu, Mobile Menu
  - `Footer.tsx`: Site footer
  - `PageShell.tsx`: Wrapper for interior pages (Hero + Container)
  - `FAQAccordion.tsx`: Client-side accordion component
- **`src/lib`**: Utilities and Data.
  - `content.ts`: **Single Source of Truth** for website copy.

## 📝 How to Edit Content

All text content is centered in `src/lib/content.ts`. This makes it easy to update copy without touching the code structure.

1. Open `src/lib/content.ts`.
2. Find the section you want to edit (e.g., `home`, `services`, `about`).
3. Update the text strings.
4. Save - the site updates instantly in dev mode.

## 🎨 Design System

The design system is implemented using CSS variables in `globals.css` and configured in Tailwind. See [../mindfinders-style.md](../mindfinders-style.md) for the complete style guide.

- **Primary Color**: `#ED1B2F` (Vibrant Red/Crimson)
- **Secondary**: `#231F20` (Deep Charcoal)
- **Accent**: `#231F20` (Deep Charcoal)
- **Fonts**: `Libre Franklin` (Headings), `PT Serif` (Body/Accents), System Sans (UI)

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## 🚀 Deployment

### Git Repository

**IMPORTANT**: This folder (`frontend-next/`) is the git repository. The parent `Mindfinders-website/` folder is for documentation only and is NOT a git repo.

| Info | Value |
|------|-------|
| Remote | https://github.com/GrowersCloud/mindfinders-website.git |
| Branch | `master` |
| Deployment | Vercel (auto-deploys on push to master) |
| Changelog | See [CHANGELOG.md](CHANGELOG.md) |

### How to Deploy

1. Make your changes in this folder (`frontend-next/`)
2. Test locally: `npm run dev`
3. Build to verify: `npm run build`
4. Stage changes: `git add <files>`
5. Commit: `git commit -m "Your message"`
6. Push: `git push origin master`
7. **Update [CHANGELOG.md](CHANGELOG.md)** with the deployment details

Vercel automatically deploys when you push to master.

### Post-Deployment Checklist

After every deployment, update `CHANGELOG.md` with:
- Date
- Commit hash
- Summary of changes (Added/Changed/Fixed)
- Files modified
