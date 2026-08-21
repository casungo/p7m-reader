# Synthetic P7M fixtures

These files are generated locally with OpenSSL 3 using a temporary self-signed
certificate. They exercise extraction and content detection only; the private
key is not stored in this repository or in the evidence archive.

- `synthetic-*.p7m` are single signed containers for XML, PNG, JPEG, GIF and a
  binary payload.
- `synthetic-nested-2.p7m` contains two P7M layers around the XML payload.
- `synthetic-depth-6.p7m` is intentionally beyond the five-layer parser limit.
- `synthetic-invalid.p7m` is not a CMS object and must be rejected.

The two public PDF samples in `samples/` remain separate real documents and are
not synthetic fixtures.
