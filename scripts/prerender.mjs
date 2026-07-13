// Post-build pre-rendering (free, no headless browser).
// For each notes route it writes a static HTML file into dist/ that already
// contains the real SEO content (title, meta, headings, subject names) so
// Google indexes it immediately. The React app still boots and takes over on
// load. Runs automatically after `vite build`.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { semesters, generalResources } from "../src/data/notes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, "..", "dist");
const SITE = "https://portfolio-sidt0518.onrender.com";

const template = fs.readFileSync(path.join(DIST, "index.html"), "utf8");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Shared crawlable content block (all semesters + subjects) so every notes URL
// ships real text. Screen-reader/SEO friendly; React replaces it on hydration.
function contentHtml(focusSlug) {
  const semBlocks = semesters
    .map((sem) => {
      const items = sem.subjects
        .map((s) => `<li>${esc(s.code)} — ${esc(s.title)}</li>`)
        .join("");
      const soon = sem.comingSoon ? " (Coming Soon)" : "";
      return `<section><h2>${esc(sem.title)}${soon}</h2><ul>${items}</ul></section>`;
    })
    .join("");
  const gen = generalResources
    .map((r) => `<li>${esc(r.title)} — ${esc(r.description)}</li>`)
    .join("");
  return `<div id="root"><main>
    <h1>GyaanVault — SPPU M.Sc. Data Science Notes</h1>
    <p>Free, exam-ready study material for Savitribai Phule Pune University (SPPU)
    M.Sc. Data Science students under the NEP 2020 CBCS pattern. Download
    semester-wise notes, question papers, practicals and interview preparation
    for Statistics, Machine Learning, Deep Learning, Big Data, Python and more —
    all free to view and download.</p>
    <h2>General Resources</h2><ul>${gen}</ul>
    ${semBlocks}
    <p>Prepared for M.Sc. Data Science students of Pune University (SPPU).</p>
  </main></div>`;
}

function pageMeta(title, description, canonical) {
  return { title, description, canonical };
}

const routes = [
  {
    out: "notes/index.html",
    ...pageMeta(
      "SPPU M.Sc. Data Science Notes (Free, Semester-wise) | GyaanVault",
      "Free semester-wise notes, question papers, practicals and interview prep for SPPU (Savitribai Phule Pune University) M.Sc. Data Science students. Download exam-ready PDFs for Statistics, Machine Learning, Deep Learning, Big Data, Python and more.",
      `${SITE}/notes`
    ),
    focus: null,
  },
  ...semesters.map((sem) => ({
    out: `notes/${sem.slug}/index.html`,
    ...pageMeta(
      `${sem.title} Notes — SPPU M.Sc. Data Science | GyaanVault`,
      `Free ${sem.title} notes for SPPU (Savitribai Phule Pune University) M.Sc. Data Science — ${sem.subjects
        .map((s) => s.title)
        .slice(0, 4)
        .join(", ")} and more. View & download, exam-ready.`,
      `${SITE}/notes/${sem.slug}`
    ),
    focus: sem.slug,
  })),
];

let count = 0;
for (const r of routes) {
  let html = template;
  // swap <title>
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(r.title)}</title>`);
  // swap meta description
  html = html.replace(
    /<meta\s+name="description"[^>]*>/,
    `<meta name="description" content="${esc(r.description)}" />`
  );
  // add canonical (before </head>)
  html = html.replace(
    "</head>",
    `  <link rel="canonical" href="${r.canonical}" />\n  </head>`
  );
  // inject crawlable content into #root
  html = html.replace(/<div id="root">\s*<\/div>/, contentHtml(r.focus));

  const outPath = path.join(DIST, r.out);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html, "utf8");
  count++;
  console.log("✓ prerendered", r.out);
}
console.log(`\nPre-rendered ${count} notes routes into dist/`);
