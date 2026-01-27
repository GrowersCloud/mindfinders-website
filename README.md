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

The design system is implemented using CSS variables in `globals.css` and configured in Tailwind.

- **Primary Color**: `#cc3366` (Dusty Rose)
- **Secondary**: `#333333` (Charcoal)
- **Accent**: `#1f2124` (Near Black)
- **Fonts**: `Libre Franklin` (Headings), `PT Serif` (Accents), System Sans (Body)

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```
