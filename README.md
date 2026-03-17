# Adviso — Intelligent Academic Advising

> Premium Next.js + Tailwind CSS landing page for [Adviso](https://adviso.app) — the dual-sided academic advising platform for students and institutions.

---

## 🚀 Option 1 — Deploy to Vercel (recommended, fastest)

Click the button below to deploy the site to your own Vercel account in ~60 seconds.  
No local setup required.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fpaengstrom-crypto%2Fadviso-site&project-name=adviso-site&repository-name=adviso-site)

### Steps
1. Click **Deploy with Vercel** above (sign in with GitHub if prompted).
2. Vercel will clone the repo, install dependencies, and publish the site automatically.
3. Your live URL will be something like `https://adviso-site-<hash>.vercel.app`.
4. Every push to `main` re-deploys automatically from that point on.

---

## 💻 Option 2 — Run locally

### Prerequisites
- [Node.js 18+](https://nodejs.org) (LTS recommended)
- npm 9+ (ships with Node)

### 1 — Clone the repository
```bash
git clone https://github.com/paengstrom-crypto/adviso-site.git
cd adviso-site
```

### 2 — Install dependencies
```bash
npm install
```

### 3 — Start the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.  
The page hot-reloads whenever you save a file.

### 4 — Build for production (optional)
```bash
npm run build   # creates an optimised build in .next/
npm run start   # serves the production build on http://localhost:3000
```

---

## 📁 Project structure

```
adviso-site/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky glassy header + mobile menu
│   │   ├── Hero.tsx            # Hero section with dual CTAs
│   │   ├── StudentHub.tsx      # "Uncomplicate Your Degree"
│   │   ├── EnterpriseHub.tsx   # "Empower Your Advisors"
│   │   ├── About.tsx           # Founders story
│   │   └── Footer.tsx          # Footer with links
│   ├── globals.css             # Global styles & CSS custom properties
│   ├── layout.tsx              # Root layout (metadata, fonts)
│   └── page.tsx                # Homepage composition
└── public/
    └── images/
        ├── adviso-logo.svg           # ← swap with real logo
        └── founders-placeholder.svg  # ← swap with founders photo
```

### Swapping assets

| Asset | Path | Notes |
|---|---|---|
| **Logo** | `public/images/adviso-logo.svg` | Replace the placeholder SVG with your real logo file. Keeps the same filename — no code change needed. |
| **Founders photo** | `public/images/founders.jpg` | Drop in a `.jpg`, `.png`, or `.webp`. Then update the `src` prop in `app/components/About.tsx` (the exact line is marked with a comment). |

---

## 🛠 Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server at http://localhost:3000 |
| `npm run build` | Create optimised production build |
| `npm run start` | Serve production build locally |
| `npm run lint` | Run ESLint |

---

## 🏗 Stack

- [Next.js 16](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com)
- Zero external UI dependencies — pure CSS utilities + inline styles for glow effects

---

## 📬 Contact

Partnership inquiries → [partnerships@adviso.app](mailto:partnerships@adviso.app)  
General → [hello@adviso.app](mailto:hello@adviso.app)
