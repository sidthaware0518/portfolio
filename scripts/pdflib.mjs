// Small branded-PDF helper built on pdfkit (pure JS, no browser needed).
// Renders GyaanVault study material with a cover page, headings, paragraphs,
// bullet lists, and syntax-neutral code blocks. Used by generate-content.mjs.
import PDFDocument from "pdfkit";
import fs from "node:fs";

const NAVY = "#0f1a36";
const NAVY_DK = "#070b1a";
const BRAND = "#2563eb";
const BRAND_LT = "#3b82f6";
const ACCENT = "#0891b2";
const INK = "#1e293b";
const MUTED = "#64748b";
const CODE_BG = "#0f172a";
const CODE_FG = "#e2e8f0";
const RULE = "#e2e8f0";

const MARGIN = 54;

export function createDoc(outPath) {
  const doc = new PDFDocument({ size: "A4", margin: MARGIN, bufferPages: true });
  const stream = fs.createWriteStream(outPath);
  doc.pipe(stream);
  const width = doc.page.width - MARGIN * 2;

  const api = {
    doc,
    width,
    _done: new Promise((res) => stream.on("finish", res)),

    cover({ title, subtitle, code, badge, footer }) {
      const W = doc.page.width;
      const H = doc.page.height;
      doc.save();
      doc.rect(0, 0, W, H).fill(NAVY_DK);
      doc.rect(0, 0, W, 260).fill(NAVY);
      // logo mark
      doc.roundedRect(MARGIN, 90, 54, 54, 14).fill(BRAND);
      doc.polygon([MARGIN + 12, 128], [MARGIN + 22, 116], [MARGIN + 32, 122], [MARGIN + 44, 106])
        .lineWidth(2.4).stroke("#ffffff");
      doc.fillColor("#ffffff").fontSize(22).font("Helvetica-Bold")
        .text("GyaanVault", MARGIN + 68, 100);
      doc.fillColor("#93c5fd").fontSize(10).font("Helvetica")
        .text("SPPU M.Sc. Data Science — Free Study Material", MARGIN + 68, 128);

      doc.fillColor("#ffffff").font("Helvetica-Bold").fontSize(30)
        .text(title, MARGIN, 320, { width: W - MARGIN * 2 });
      if (code)
        doc.fillColor("#22d3ee").fontSize(14).font("Helvetica-Bold")
          .text(code, MARGIN, doc.y + 6);
      if (subtitle)
        doc.fillColor("#cbd5e1").fontSize(13).font("Helvetica")
          .text(subtitle, MARGIN, doc.y + 10, { width: W - MARGIN * 2 });
      if (badge)
        doc.fillColor("#93c5fd").fontSize(11).font("Helvetica")
          .text(badge, MARGIN, doc.y + 18);

      doc.fillColor("#64748b").fontSize(9).font("Helvetica")
        .text(footer || "Prepared by Siddheshwar Thaware · Free for SPPU students", MARGIN, H - 70, { width: W - MARGIN * 2 });
      doc.restore();
      doc.addPage();
      return api;
    },

    h1(t) {
      ensure(doc, 70);
      doc.moveDown(0.4);
      doc.fillColor(BRAND).font("Helvetica-Bold").fontSize(17).text(t, { width });
      doc.moveTo(MARGIN, doc.y + 3).lineTo(MARGIN + width, doc.y + 3).lineWidth(1).stroke(RULE);
      doc.moveDown(0.5);
      return api;
    },
    h2(t) {
      ensure(doc, 50);
      doc.moveDown(0.3);
      doc.fillColor(ACCENT).font("Helvetica-Bold").fontSize(13).text(t, { width });
      doc.moveDown(0.25);
      return api;
    },
    h3(t) {
      ensure(doc, 40);
      doc.fillColor(INK).font("Helvetica-Bold").fontSize(11.5).text(t, { width });
      doc.moveDown(0.15);
      return api;
    },
    para(t) {
      doc.fillColor(INK).font("Helvetica").fontSize(10.5).text(t, { width, align: "left", lineGap: 2 });
      doc.moveDown(0.4);
      return api;
    },
    muted(t) {
      doc.fillColor(MUTED).font("Helvetica-Oblique").fontSize(9.5).text(t, { width, lineGap: 1 });
      doc.moveDown(0.3);
      return api;
    },
    bullets(items) {
      doc.font("Helvetica").fontSize(10.5).fillColor(INK);
      items.forEach((it) => {
        ensure(doc, 24);
        const y = doc.y;
        doc.circle(MARGIN + 3, y + 5.5, 1.8).fill(BRAND_LT);
        doc.fillColor(INK).text(it, MARGIN + 14, y, { width: width - 14, lineGap: 1.5 });
        doc.moveDown(0.2);
      });
      doc.moveDown(0.2);
      return api;
    },
    steps(items) {
      doc.font("Helvetica").fontSize(10.5);
      items.forEach((it, i) => {
        ensure(doc, 24);
        const y = doc.y;
        doc.fillColor(BRAND).font("Helvetica-Bold").text(`${i + 1}.`, MARGIN, y, { width: 18 });
        doc.fillColor(INK).font("Helvetica").text(it, MARGIN + 20, y, { width: width - 20, lineGap: 1.5 });
        doc.moveDown(0.2);
      });
      doc.moveDown(0.2);
      return api;
    },
    code(src) {
      const lines = src.replace(/\t/g, "  ").split("\n");
      const lh = 12.2;
      const padY = 8;
      doc.font("Courier").fontSize(9);
      // paginate long blocks
      let i = 0;
      while (i < lines.length) {
        const avail = doc.page.height - MARGIN - doc.y - padY * 2;
        let n = Math.max(1, Math.floor(avail / lh));
        if (n >= lines.length - i) n = lines.length - i;
        if (n < 1 || (doc.y > doc.page.height - 120 && n < 4)) { doc.addPage(); continue; }
        const chunk = lines.slice(i, i + n);
        const boxH = chunk.length * lh + padY * 2;
        const yTop = doc.y;
        doc.roundedRect(MARGIN, yTop, width, boxH, 6).fill(CODE_BG);
        doc.fillColor(CODE_FG).font("Courier").fontSize(9);
        chunk.forEach((ln, k) => {
          doc.text(ln || " ", MARGIN + 12, yTop + padY + k * lh, { width: width - 24, lineBreak: false });
        });
        doc.y = yTop + boxH;
        doc.moveDown(0.5);
        i += n;
      }
      return api;
    },
    hr() {
      ensure(doc, 20);
      doc.moveTo(MARGIN, doc.y + 2).lineTo(MARGIN + width, doc.y + 2).lineWidth(0.6).stroke(RULE);
      doc.moveDown(0.5);
      return api;
    },
    spacer(n = 1) { doc.moveDown(n); return api; },

    async finish() {
      // page footers with numbering
      const range = doc.bufferedPageRange();
      for (let i = 1; i < range.count; i++) {
        doc.switchToPage(i);
        doc.fillColor(MUTED).font("Helvetica").fontSize(8)
          .text(`GyaanVault · gyaanvault notes · Page ${i}`, MARGIN, doc.page.height - 34, {
            width, align: "center",
          });
      }
      doc.end();
      await api._done;
    },
  };
  return api;
}

function ensure(doc, need) {
  if (doc.y + need > doc.page.height - MARGIN - 24) doc.addPage();
}
