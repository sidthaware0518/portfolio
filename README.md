# 💼 Data Scientist Portfolio

A modern, premium, fully responsive personal portfolio for an aspiring Data Scientist.
Built with **React + Vite + Tailwind CSS** with glassmorphism, dark/light mode,
smooth animations (framer-motion), a typing hero effect, and a live GitHub dashboard.

## ✨ Sections
Hero · About · Skills · Projects · Experience · Certifications · Education ·
Achievements · GitHub Stats · Blog · Contact

## 🛠️ Tech Stack
- React 18 + Vite
- Tailwind CSS (dark mode via `class`)
- framer-motion (animations)
- react-icons

## ✏️ How to personalize (IMPORTANT)
**Almost everything lives in one file:** [`src/data/profile.js`](src/data/profile.js).
Open it and edit the text — name, titles, email, social links, skills, projects,
experience, education, certifications, blog, etc. Look for `// TODO` markers.

Other quick edits:
- **Your photo:** put `profile.jpg` in `/public`, then in `src/components/Hero.jsx`
  replace the initials `<span>` with `<img src="/profile.jpg" className="w-full h-full object-cover" />`.
- **Your resume:** put `resume.pdf` in `/public` (see `public/resume-README.txt`).
- **SEO/title:** edit the meta tags in [`index.html`](index.html) (replace "Your Name").
- **GitHub stats:** set `githubUsername` in `profile.js` (already set to `suyoug`).

## 🚀 Run locally
```bash
npm install
npm run dev
```
Open the printed URL (usually http://localhost:5173).

## 📦 Build
```bash
npm run build      # output goes to /dist
npm run preview    # preview the production build
```

## ☁️ Deploy

### Option A — Vercel (recommended, easiest)
1. Push this folder to a **new GitHub repo** (see below).
2. Go to https://vercel.com → sign in with GitHub.
3. **Add New → Project** → import your repo.
4. Vercel auto-detects Vite. Framework: **Vite**, Build: `npm run build`, Output: `dist`. Click **Deploy**.
5. You get a link like `https://your-portfolio.vercel.app`. Done! 🎉

### Option B — GitHub Pages
1. Install gh-pages: `npm i -D gh-pages`
2. In `vite.config.js` add `base: "/REPO_NAME/"`.
3. Add scripts: `"deploy": "vite build && gh-pages -d dist"`.
4. Run `npm run deploy`, then enable Pages in repo Settings → Pages.

### Push to GitHub
```bash
git init
git add -A
git commit -m "My data science portfolio"
git branch -M main
git remote add origin https://github.com/suyoug/portfolio.git
git push -u origin main
```

## 🎨 Favicon suggestions
A simple `DS` monogram favicon is already included (`public/favicon.svg`).
Other ideas: your initials, a 📊/🧠/⚛️ glyph, or generate one at https://favicon.io.
