import { readFileSync, writeFileSync, copyFileSync } from "node:fs";
import { spawnSync } from "node:child_process";

// Run from the project root. Requires librsvg (rsvg-convert) and DejaVu Sans fonts.
const mark = readFileSync("public/icon.svg", "utf8")
  .replace(/<svg[^>]*>/, '<svg x="76" y="58" width="64" height="64" viewBox="0 0 512 512">');
const variants = [
  { source: "og-image.svg", image: "og-p7m-pdf.png", lines: ["Open P7M files.", "Extract your PDF."], privacy: "No upload. No account.", action: "OPEN &amp; EXTRACT", formats: "PDF · XML · Images" },
  { source: "og-image-it.svg", image: "og-p7m-pdf-it.png", lines: ["Apri file P7M.", "Estrai il tuo PDF."], privacy: "Nessun upload. Nessun account.", action: "APRI ED ESTRAI", formats: "PDF · XML · Immagini" },
];
for (const { source, image, lines, privacy, action, formats } of variants) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f2f5f7"/>
  <g font-family="DejaVu Sans, sans-serif" fill="#243444">
    ${mark}
    <text x="158" y="101" font-size="30" font-weight="700">P7M Reader</text>
    <text x="76" y="226" font-size="16" letter-spacing="3" fill="#637382">${action}</text>
    <text x="72" y="312" font-size="58" font-weight="700" letter-spacing="-2">${lines[0]}</text>
    <text x="72" y="385" font-size="58" font-weight="700" letter-spacing="-2">${lines[1]}</text>
    <text x="76" y="448" font-size="25" fill="#637382">${privacy}</text>
    <text x="76" y="557" font-size="22" font-weight="700">p7mreader.eu</text>
    <path d="M832 145h200l68 68v283H832z" fill="#fdfefe" stroke="#d2dbe2" stroke-width="2"/>
    <path d="M1032 145v68h68" fill="#e6edf2" stroke="#d2dbe2" stroke-width="2"/>
    <text x="864" y="274" font-size="30" font-weight="700">.pdf.p7m</text>
    <path d="M858 309h204" stroke="#d2dbe2" stroke-width="2"/>
    <rect x="867" y="343" width="198" height="102" rx="8" fill="#f2f5f7" stroke="#d2dbe2"/>
    <text x="966" y="409" text-anchor="middle" font-size="46" font-weight="700">PDF</text>
    <text x="966" y="549" text-anchor="middle" font-size="17" fill="#637382">${formats}</text>
  </g>
</svg>`;
  writeFileSync(`public/${source}`, svg + "\n");
  const result = spawnSync("rsvg-convert", ["--output", `public/${image}`, `public/${source}`], { stdio: "inherit" });
  if (result.error || result.status !== 0) throw result.error ?? new Error("librsvg could not render " + source);
}
// Keep the previously shared image URL working.
copyFileSync("public/og-p7m-pdf.png", "public/og-image.png");
