import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { detectP7mContent, extractedName } from "../src/lib/p7m.ts";
import { unpackP7m } from "../src/lib/unpack-p7m.ts";

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

test("rifiuta dati che non sono P7M", () => {
  assert.throws(() => unpackP7m(new Uint8Array([1, 2, 3])));
});
