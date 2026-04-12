# AGENT.md — Company Profile (Syah Construction)

## Project Overview

Company profile website for **Syah Construction**, a construction company based in Indonesia. Built with Next.js (Pages Router) and deployed on Netlify. Supports multi-language (EN/ID) with markdown-based content managed via Netlify CMS.

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
│   ├── home_en.md
│   └── home_id.md
├── netlify/
│   └── index.html
├── public/
│   ├── admin/
│   │   ├── config.yml
│   │   └── index.html
│   ├── images/               # Project photos (real)
│   │   ├── pabrik_1.jpeg
│   │   ├── pabrik_2.jpeg
│   │   ├── pabrik_3.jpeg
│   │   ├── pabrik_4.jpeg
│   │   ├── rumah_1.jpeg      # Before-After
│   │   ├── rumah_2.jpeg      # Rencana Awal vs Hasil Akhir
│   │   ├── kantor_1.jpeg     # 3D render malam
│   │   ├── kantor_2.jpeg     # 3D render siang
│   │   ├── kantor_3.jpeg     # Neon sign malam (hasil jadi)
│   │   ├── kantor_4.jpeg     # Fasad batu alam (hasil jadi)
│   │   └── kantor_5.jpeg     # Area parkir (hasil jadi)
│   └── uploads/
├── src/
│   ├── components/
│   │   └── Navbar.tsx
│   ├── lib/
│   │   └── contentLoader.ts
│   ├── pages/
│   │   ├── api/
│   │   │   └── hello.ts
│   │   ├── en/
│   │   │   └── index.tsx
│   │   ├── id/
│   │   │   └── index.tsx
│   │   ├── _app.tsx
│   │   └── _document.tsx
│   └── styles/
│       └── globals.css
├── next.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Company Data

- **Nama:** Syah Construction
- **Didirikan:** 2021
- **Layanan:** Konstruksi Bangunan, Renovasi & Remodeling, Desain Arsitektur, Manajemen Proyek, Konsultasi Teknik
- **Proyek selesai:** 30+
- **Lokasi:** Indonesia

## Development

```bash
npm install
npm run dev        # → http://localhost:3000
npm run build
npm run start
```