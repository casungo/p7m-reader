# Design QA

## Current identity

- Brand: P7M Reader (`p7mreader.eu`).
- Palette: EU Reflex Blue (`#003399`), EU Yellow (`#ffcc00`) and cold paper
  neutrals. The site does not use the EU emblem or claim institutional status.
- Mark: folded document with a `P7M` band; no checkmark or other symbol that
  could imply signature verification.
- Signature line: “Il documento dentro la firma.”

## Browser evidence

- Desktop empty state: `output/playwright/p7m-reader-desktop-final.png`.
- Desktop document state: `output/playwright/p7m-reader-document.png`.
- Mobile state: `output/playwright/p7m-reader-mobile.png`.
- Desktop viewport: 1440 × 900 CSS pixels.
- Mobile viewport: 390 × 844 CSS pixels.

## Checks

- The fixed desktop sidebar fits at 1440 × 900 without its own scrollbar.
- The A4 workspace remains dominant and certificate data stays beside the
  preview on desktop.
- The mobile header, upload action and metadata stack without horizontal
  overflow.
- Focus styles, dark mode, reduced motion and the extraction-only legal warning
  remain intact.
- `pnpm test`, `astro check` and `astro build` pass.

final result: passed
