// Generates GyaanVault study-material PDFs from the content modules.
// Run:  node scripts/generate-content.mjs
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createDoc } from "./pdflib.mjs";
import { practicals } from "./content-practicals.mjs";
import { interviews } from "./content-interview.mjs";
import { papers } from "./content-papers.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "..", "public", "study-material");

function renderBlocks(pdf, blocks) {
  for (const b of blocks) {
    if (b.t === "h1") pdf.h1(b.v);
    else if (b.t === "h2") pdf.h2(b.v);
    else if (b.t === "h3") pdf.h3(b.v);
    else if (b.t === "para") pdf.para(b.v);
    else if (b.t === "muted") pdf.muted(b.v);
    else if (b.t === "bullets") pdf.bullets(b.v);
    else if (b.t === "steps") pdf.steps(b.v);
    else if (b.t === "code") pdf.code(b.v);
    else if (b.t === "hr") pdf.hr();
  }
}

async function build(doc) {
  const outPath = path.join(OUT, doc.file);
  const pdf = createDoc(outPath);
  pdf.cover({
    title: doc.title,
    subtitle: doc.subtitle,
    code: doc.code,
    badge: doc.badge,
  });
  renderBlocks(pdf, doc.blocks);
  await pdf.finish();
  console.log("✓", doc.file);
}

const all = [...practicals, ...interviews, ...papers];
for (const doc of all) await build(doc);
console.log(`\nDone — generated ${all.length} PDFs into public/study-material/`);
