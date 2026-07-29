# Design QA

## Evidence

- Source visual truth: `/home/casungo/.codex/generated_images/019fab4c-9db9-75e2-ac3c-8db0dc8c4582/call_kcKmms3SQZ9Ishqrwd1AgGBJ.png`
- Implementation capture: `.playwright-cli/page-2026-07-29T11-53-12-453Z.png`
- Comparison composite: `/tmp/apri-p7m-qa-comparison-final.png`
- Viewport: 1440 × 1024 CSS pixels at device scale factor 1
- Source: 1487 × 1058 pixels, normalized to 1440 × 1024
- Implementation: 1440 × 1024 pixels
- State: loaded PDF with certificate metadata

## Full-view comparison

The implementation preserves the selected design's primary proportions: 64 px
utility header, dominant vertical-document workspace, adjacent 260 px certificate
panel, fixed 360 px SEO sidebar, flat white surfaces, light dividers, compact
system typography and blue actions.
The misleading verification copy in the generated source was intentionally
replaced with accurate extraction-only language.

## Focused checks

- Typography: system font, compact UI weights, uppercase sidebar section labels
  and line wrapping match the reference hierarchy.
- Spacing: workspace/sidebar ratio, header density and central empty state match.
- Colors: neutral white/gray base and blue action/state tokens match.
- Assets: the real project icon is used; no placeholder or reconstructed logo.
- Copy: all visible claims match the implemented P7M capabilities.
- Interactions: file selection, PDF preview, download, certificate rendering,
  drag target and clear/reset were exercised.
- Console: no errors after file open and reset.

## Comparison history

- First pass P2: the empty implementation omitted the source's bottom metadata
  strip and disabled download action.
- Fix: added the three-part empty metadata strip and full-width disabled download
  row, then rebuilt and recaptured at the same viewport.
- Post-fix evidence: `/tmp/apri-p7m-qa-comparison-final.png`.
- Later product refinement: moved metadata beside the PDF to preserve vertical
  space for the dominant A4 use case; verified with a real four-page sample.

## Findings

No actionable P0, P1 or P2 differences remain. The source contains extra toolbar
controls and signature-verification claims that were deliberately omitted because
the product does not implement those capabilities.

## Follow-up polish

- P3: add purpose-matched toolbar icons only if an icon package becomes useful
  elsewhere; text controls are currently clearer and avoid a one-use dependency.

final result: passed
