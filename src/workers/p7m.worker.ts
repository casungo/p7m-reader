import { unpackP7m } from "../lib/unpack-p7m";

self.addEventListener("message", (event: MessageEvent<ArrayBuffer>) => {
  try {
    const { bytes, certificates } = unpackP7m(new Uint8Array(event.data));
    self.postMessage({ bytes: bytes.buffer, certificates }, { transfer: [bytes.buffer] });
  } catch (error) {
    self.postMessage({
      error: error instanceof Error ? error.message : "File P7M non leggibile",
    });
  }
});
