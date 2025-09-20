# Preview & Deploy Guide

This project is Next.js {"14.x"} with the App Router.

## Option A — Quick local preview (Node 18+)
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Option B — Docker (no Node needed on host)
```bash
docker build -t my-company-site .
docker run --rm -p 3000:3000 my-company-site
# open http://localhost:3000
```

## Option C — Vercel (recommended)
1. Push this folder to a **GitHub** repo.
2. Go to vercel.com, **New Project → Import Repo**.
3. Framework: **Next.js**, Node: **18**, Build Command: `next build`, Output: `.next` (defaults OK).
4. Deploy. You’ll get a public URL like `https://your-project.vercel.app`.

> Notes:
> - Tailwind is already configured (`tailwind.config.js`, `postcss.config.js`).
> - If you use images in `/public`, they’ll be served automatically.
> - `next.config.js` uses `output: 'standalone'` to enable lightweight Docker runtime.
