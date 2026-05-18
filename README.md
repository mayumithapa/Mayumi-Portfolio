# Mayumi Thapa — Portfolio

A modern, animated, dark-themed portfolio built with **Vite + React + TypeScript + Tailwind CSS + Framer Motion**.

![tech](https://img.shields.io/badge/Vite-5-646cff?logo=vite&logoColor=white) ![tech](https://img.shields.io/badge/React-18-149eca?logo=react&logoColor=white) ![tech](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white) ![tech](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss&logoColor=white)

## ✨ Features

- Glassmorphism cards with animated gradient borders
- Aurora-style animated background blobs + subtle grid
- Smooth Framer Motion scroll reveals
- Typewriter role rotator in the hero
- Code-style hero card with syntax-highlighted snippet
- Fully responsive (mobile menu, fluid grids)
- Single source of truth for all content in `src/data/portfolio.ts`

## 🚀 Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:5173>.

## 🏗️ Build for production

```bash
npm run build
npm run preview
```

The static output lives in `dist/` — deploy it anywhere (Vercel, Netlify, GitHub Pages, Cloudflare Pages).

## ✏️ Customize content

Almost everything you'll want to change lives in **one file**:

```
src/data/portfolio.ts
```

Update:

- `profile.socials` — replace the GitHub / LinkedIn / LeetCode URLs with your actual profile URLs.
- `projects[].href` — confirm each repo URL matches your real GitHub repo path.
- `experience`, `skills`, `achievements`, `education` — already pre-filled from your CV.

## 🎨 Theme

Brand colors and animations are defined in `tailwind.config.js` (`brand.*`) and in `src/index.css`. The site is dark by default and built to look great on any screen.

## 📦 Project structure

```
src/
├─ App.tsx
├─ main.tsx
├─ index.css
├─ data/
│  └─ portfolio.ts          ← edit your content here
├─ lib/
│  └─ utils.ts
└─ components/
   ├─ AnimatedBackground.tsx
   ├─ Navbar.tsx
   ├─ Hero.tsx
   ├─ About.tsx
   ├─ Skills.tsx
   ├─ Experience.tsx
   ├─ Projects.tsx
   ├─ Achievements.tsx
   ├─ Contact.tsx
   ├─ Footer.tsx
   └─ SectionHeading.tsx
```

## 🚢 Deploy to Vercel (recommended)

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Vite — just click **Deploy**.

## 🚢 Deploy to GitHub Pages

1. In `vite.config.ts`, add `base: "/<repo-name>/"`.
2. Run `npm run build`.
3. Push the `dist/` folder to a `gh-pages` branch (or use the `gh-pages` npm package).

---

Made with ♥ — Mayumi Thapa
