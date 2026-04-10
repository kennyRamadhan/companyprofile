# AGENT.md — Company Profile (Bangun Jaya Abadi)

## Project Overview

Company profile website for **Bangun Jaya Abadi**, built with Next.js (Pages Router) and deployed on Netlify. Supports multi-language (EN/ID) with markdown-based content managed via Netlify CMS.

## Tech Stack

| Layer        | Technology                          |
| ------------ | ----------------------------------- |
| Framework    | Next.js 16.x (Turbopack dev)       |
| Router       | Pages Router (`src/pages/`)         |
| Language     | TypeScript                          |
| Styling      | Tailwind CSS + PostCSS              |
| CMS          | Netlify CMS (`public/admin/`)      |
| Content      | Markdown files (`content/`)         |
| Deployment   | Netlify                             |
| Linting      | ESLint                              |

## Directory Structure

```
companyprofile/
├── content/                  # Markdown content files (CMS-managed)
│   ├── home_en.md            # Homepage content - English
│   └── home_id.md            # Homepage content - Indonesian
├── netlify/
│   └── index.html            # Netlify config/redirect
├── public/
│   ├── admin/                # Netlify CMS admin panel
│   │   ├── config.yml        # CMS configuration
│   │   └── index.html        # CMS entry point
│   └── uploads/              # Uploaded media assets
├── src/
│   ├── components/
│   │   └── Navbar.tsx        # Navigation component
│   ├── lib/
│   │   └── contentLoader.ts  # Markdown content loader utility
│   ├── pages/
│   │   ├── api/
│   │   │   └── hello.ts      # API route example
│   │   ├── en/
│   │   │   └── index.tsx     # English homepage
│   │   ├── id/
│   │   │   └── index.tsx     # Indonesian homepage
│   │   ├── _app.tsx          # Custom App component
│   │   └── _document.tsx     # Custom Document component
│   └── styles/
│       └── globals.css       # Global styles (Tailwind)
├── next.config.ts            # Next.js configuration
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
├── postcss.config.js         # PostCSS configuration
├── postcss.config.mjs        # PostCSS configuration (ESM)
└── package.json              # Dependencies & scripts
```

## Key Architecture Decisions

### Multi-language Routing
- Routes are locale-prefixed: `/en/` for English, `/id/` for Indonesian.
- Root `/` should redirect to a default locale.

### Content Management
- Markdown files in `content/` are loaded via `src/lib/contentLoader.ts`.
- Netlify CMS provides a GUI editor at `/admin/` for non-technical content editing.
- Content files follow naming convention: `{page}_{locale}.md`.

### Styling
- Tailwind CSS with global styles in `src/styles/globals.css`.
- PostCSS for processing.

## Development

```bash
npm install        # Install dependencies
npm run dev        # Start dev server (Turbopack) → http://localhost:3000
npm run build      # Production build
npm run start      # Start production server
```

## Prompt Guidelines for AI Assistance

When asking for help to enhance this website, include:

1. **Which page/component** — e.g., "the homepage (`/en/`)" or "Navbar component"
2. **What behavior you want** — e.g., "add a hero section with animated text"
3. **Design references** — any inspiration, color scheme, or style direction
4. **Content language** — specify EN, ID, or both
5. **Scope** — new feature, bug fix, styling, or content update

### Example Prompts

- "Tambahkan hero section di homepage dengan gambar background dan CTA button"
- "Buat halaman About Us (`/en/about` dan `/id/about`) dengan konten dari markdown"
- "Fix Navbar supaya responsive di mobile dengan hamburger menu"
- "Tambahkan footer dengan info kontak perusahaan dan social media links"
- "Setup i18n redirect otomatis dari `/` ke `/id/` berdasarkan browser language"
- "Buat halaman portfolio/projects untuk showcase proyek perusahaan"
- "Optimize SEO: tambahkan meta tags, Open Graph, dan sitemap.xml"