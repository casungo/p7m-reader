# AGENTS.md

## Product

P7M Reader (`p7mreader.eu`) extracts embedded content from `.p7m` files entirely in the
browser. It previews PDF, XML, PNG, JPEG and GIF files and downloads unknown
content as binary. It does **not** verify signature integrity, revocation,
timestamps or legal validity; never claim otherwise.

The UI follows `exceltomarkdown.app`: one viewport-first tool, dominant document
workspace on the left and compact SEO/help copy in a fixed right sidebar.
Vertical A4 documents are the primary use case, so certificate information
belongs beside the preview on desktop, not below it.

## Architecture

- `src/components/ReaderPage.astro`: complete page, UI flow and client rendering.
- `src/i18n.ts`: locale routes and translated copy.
- `src/pages/index.astro` and `src/pages/[lang]/[slug].astro`: static routes.
- `src/lib/p7m.ts`: content detection and extracted filenames; keep it free of
  `node-forge` so the main bundle stays small.
- `src/lib/unpack-p7m.ts`: PKCS#7 parsing with `node-forge`.
- `src/workers/p7m.worker.ts`: parsing off the main browser thread.
- `src/worker.ts`: Cloudflare assets plus anonymous `opened`/`failed` metrics.
- `public/service-worker.js`: offline cache, including the hashed parser worker.
- `test/p7m.test.ts`: smallest regression suite using both real sample files.

Files never leave the browser. Metrics contain only `opened` or `failed`, use no
cookies, and are skipped offline. There is intentionally no file-size limit.

## Commands

```sh
pnpm test
pnpm build
pnpm wrangler dev
pnpm wrangler deploy
```

`pnpm build` runs tests and `astro check` before building. For browser QA, test
both sample P7Ms, an invalid file, reset, mobile layout and offline reopening.

## Working rules

- Preserve the extraction-only product promise and privacy copy.
- Keep parsing in the Web Worker and avoid importing `unpack-p7m.ts` into the
  page bundle.
- Prefer the existing plain Astro/CSS structure; add no UI framework or icon
  dependency for one-off decoration.
- Keep the main task usable without reading the SEO sidebar.
- Do not commit `.playwright-cli`, `output/`, `.wrangler/` or `dist/`.
- Distinguish commit/push from deploy. Do not deploy unless requested.

## Project memory

Treat this file as the durable project brain. During every work session, update
it with useful decisions, current behavior, invariants, remaining work and
concrete ideas discovered while implementing. Replace stale notes instead of
appending a conversation transcript; keep it concise and actionable.

Current product state:

- The public product identity is **P7M Reader** at `p7mreader.eu`; use “Apri file
  P7M online” only as descriptive SEO copy, never as the brand name.
- The visual system uses cold paper neutrals around the folded-document `P7M`
  monogram; avoid decorative color bars, colored sidebar accents and serif
  typography.
- UI icons come from `@lucide/astro`; keep `public/icon.svg` custom because it is
  the product mark, not interface decoration.
- Version `1.3.1` is recorded in `package.json` and `CHANGELOG.md`; the header
  reads that changelog entry for its compact release menu.
- `p7mreader.eu` is declared as a custom-domain route in `wrangler.jsonc`; keep
  that binding with the renamed `p7m-reader` Worker.
- Production deploys run only when a GitHub Release is published. Pushes are
  for source control; preview unreleased changes locally.
- File actions live with the open document. Its bar shows container type,
  extracted content type, original size and signer count.
- The fixed desktop sidebar must fit without its own scrollbar at 1440×900.
- The native browser PDF viewer remains intentional. Consider PDF.js only when
  custom controls become a real requirement; it adds bundle and maintenance.
- The brand mark is the local document-and-seal SVG in `public/icon.svg`.
- The release menu shows “Novità” only for the first 14 days after the changelog
  date.
- Dark mode uses the existing CSS tokens and a small persisted theme toggle;
  DaisyUI is intentionally unnecessary for this plain Astro page.
- PDF metadata is read locally with the small best-effort parser in `p7m.ts`;
  unavailable or compressed fields are omitted instead of guessed.
- Keep the explicit download action: it preserves the extracted filename across
  browsers even when the native PDF viewer also exposes download controls.
- Chromium may show the Blob URL UUID inside its native PDF toolbar; the page
  shows the real extracted filename above it and the explicit download saves
  that name. Removing the UUID would require replacing the native viewer.
- `README.md` is the operator-facing project guide: keep its privacy,
  extraction-only limitations, commands, architecture and release-only deploy
  notes aligned with the implementation.
- The GitHub “About” panel points to `p7mreader.eu`, describes local
  extraction without signature-verification claims and uses focused topics for
  P7M, PKCS#7, privacy, offline use, Astro and Cloudflare Workers.
- Release CI uploads and promotes a tagged Worker Version instead of running
  `wrangler deploy`; this preserves the existing custom-domain trigger and does
  not require route-write permission on every release.
- SEO basics are static and dependency-free: Astro has the production `site`,
  while `robots.txt`, the one-URL sitemap and the editable `og-image.svg`
  source live in `public/`.
- The manifest uses raster install icons plus a maskable icon. Chromium desktop
  can pass `.p7m` files to the installed PWA through `file_handlers` and
  `launchQueue`; other browsers keep the normal picker and drag-and-drop flow.
- Anonymous `opened` and `failed` events use native Worker observability logs
  because Analytics Engine is not enabled on the account. Keep each line
  limited to the event; do not add file metadata, identifiers or request
  location.
- The English root and 13 translated static routes match Excel-to-Markdown's
  language set. Keep `src/i18n.ts`, reciprocal hreflang links, the generated
  sitemap and the language menu in sync.
- The empty state includes a bundled public P7M demo so visitors can exercise
  the real parser immediately; keep it on the same local extraction path as
  user-selected files.
- The PWA caches every locale shell and accepts shared `.p7m` files through a
  local service-worker handoff. Never route shared file bytes through the
  Worker or another server.
- Astro 7 is intentional. TypeScript stays on 6 until `astro check` supports
  TypeScript 7's compiler API.

## Git workflow

- After a requested change passes its proportional checks, commit and push it
  to the current branch unless the user explicitly says not to.
- For substantial or multi-part requests, split the work into precise commits
  by coherent purpose instead of one catch-all commit. If one file contains
  unrelated changes, stage its hunks separately.
- Keep documentation and project-memory updates with the change they explain,
  or in a separate documentation commit when they describe several changes.
- After all requested changes are committed and pushed, ask whether to publish
  a release. Do not publish one without an explicit confirmation such as
  “fai la release” or “ok, falla”.
- If the user answers the release question with more changes, treat that as a
  decision not to release yet: implement, validate, commit and push the new work,
  then ask again. Continue until the user explicitly confirms the release.
- When a release is explicitly confirmed, choose the SemVer level autonomously
  from the shipped changes, update version and changelog, validate, commit and
  push the release preparation, publish the GitHub Release and verify the
  release-triggered deployment.
- Never treat push as deploy. Production follows published GitHub Releases.
