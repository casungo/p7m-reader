import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import {
  detectP7mContent,
  extractedName,
  formatFileSize,
  readPdfMetadata,
} from "../src/lib/p7m.ts";
import { currentRelease } from "../src/lib/release.ts";
import { unpackP7m } from "../src/lib/unpack-p7m.ts";
import worker from "../src/worker.ts";

test("estrae i PDF P7M reali", async () => {
  for (const fixture of [
    "samples/comune-ceva.pdf.p7m",
    "samples/ispra-atto-aggiuntivo.p7m",
  ]) {
    const { bytes, certificates } = unpackP7m(new Uint8Array(await readFile(fixture)));
    assert.equal(detectP7mContent(bytes).type, "application/pdf");
    assert.ok(certificates.length > 0);
  }
});

test("riconosce contenuti comuni e conserva i nomi", () => {
  assert.equal(detectP7mContent(new TextEncoder().encode("<?xml version=\"1.0\"?>")).ext, "xml");
  assert.equal(detectP7mContent(new TextEncoder().encode("%PDF-1.7")).ext, "pdf");
  assert.equal(extractedName("atto.pdf.p7m", "pdf"), "atto.pdf");
  assert.equal(extractedName("atto.p7m.p7m", "xml"), "atto.xml");
});

test("formatta dimensione file e metadati PDF", async () => {
  assert.equal(formatFileSize(512), "512 byte");
  assert.match(formatFileSize(2048), /^2\s?kB$/);

  const { bytes } = unpackP7m(new Uint8Array(await readFile("samples/ispra-atto-aggiuntivo.p7m")));
  const metadata = readPdfMetadata(bytes);
  assert.equal(metadata.author, "giovanni.reina");
  assert.equal(metadata.dimensions, "210 × 297 mm");
  assert.ok(metadata.created);

  const nested = unpackP7m(new Uint8Array(await readFile("samples/comune-ceva.pdf.p7m")));
  assert.equal(readPdfMetadata(nested.bytes).creator, "Microsoft Office Word");
});

test("rifiuta dati che non sono P7M", () => {
  assert.throws(() => unpackP7m(new Uint8Array([1, 2, 3])));
});

test("legge la release corrente e limita Novità a 14 giorni", () => {
  assert.deepEqual(currentRelease(
    "## 1.2.3 - 2026-07-29\n\n- Prima\n- Seconda\n",
    "1.2.3",
    new Date("2026-08-01"),
  ), {
    version: "1.2.3",
    date: "29 luglio 2026",
    isNew: true,
    changes: ["Prima", "Seconda"],
  });
  assert.equal(currentRelease(
    "## 1.2.3 - 2026-07-01\n\n- Prima\n",
    "1.2.3",
    new Date("2026-08-01"),
  ).isNew, false);
});

test("registra solo metriche anonime dalla stessa origine", async () => {
  const events: unknown[][] = [];
  const originalInfo = console.info;
  console.info = (...args) => events.push(args);
  const env = {
    ASSETS: { fetch: () => new Response("asset") },
  } as unknown as Env;

  try {
    const accepted = await worker.fetch(new Request("https://p7mreader.eu/metrics/opened", {
      method: "POST",
      headers: { Origin: "https://p7mreader.eu" },
    }), env);
    assert.equal(accepted.status, 204);
    assert.deepEqual(events, [["p7m_event", "opened"]]);

    const rejected = await worker.fetch(new Request("https://p7mreader.eu/metrics/failed", {
      method: "POST",
      headers: { Origin: "https://example.com" },
    }), env);
    assert.equal(rejected.status, 403);
    assert.equal(events.length, 1);
  } finally {
    console.info = originalInfo;
  }
});
