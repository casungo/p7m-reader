# Changelog

## 1.4.1 - 2026-07-31

- Versiona l'URL del manifest PWA per evitare che la cache Cloudflare mantenga la configurazione precedente dopo una release.

## 1.4.0 - 2026-07-31

- Interfaccia, metadati SEO, FAQ e route statiche disponibili nelle stesse 14 lingue di Excel to Markdown.
- Sitemap con alternate `hreflang` reciproci e selettore lingua responsive.
- PWA aggiornata: cache offline di tutte le lingue e apertura locale dei `.p7m` ricevuti dal menu Condividi.
- File P7M demo per provare subito il parser reale e correzione del nome accessibile del marchio.
- Aggiornamento ad Astro 7, TypeScript 6, `node-forge` 1.4 e dipendenze di sviluppo correnti.

## 1.3.1 - 2026-07-31

- Registra gli eventi anonimi nei log nativi del Worker, disponibili senza attivare servizi aggiuntivi.

## 1.3.0 - 2026-07-31

- PWA installabile con apertura dei file `.p7m` dall'app su Chromium desktop.
- Metadati SEO e social completi, sitemap, robots e nuove icone di installazione.
- Eventi anonimi `opened` e `failed`, senza dati sui file.
- Migliorati focus da tastiera, nuovo tentativo dopo file non validi e layout desktop/mobile.
- Deploy di release tramite versioni Worker, senza riscrivere il dominio personalizzato.

## 1.2.2 - 2026-07-29

- Interfaccia più neutra: rimossi serif, barre decorative e accenti colorati superflui.
- Schermata di apertura semplificata per dare più spazio al documento.

## 1.2.1 - 2026-07-29

- Collega il dominio `p7mreader.eu` al Worker rinominato `p7m-reader`.

## 1.2.0 - 2026-07-29

- Nuova identità P7M Reader per `p7mreader.eu`, dal nome al marchio.
- Palette ispirata ai colori europei, con blu `#003399` e giallo `#ffcc00`.
- Interfaccia ridisegnata attorno al documento, mantenendo privacy e limiti ben visibili.
- Icone operative uniformate con Lucide.

## 1.1.0 - 2026-07-29

- Metadati locali per PDF: autore, date, applicazione, produttore e dimensioni pagina.
- Gerarchia più chiara per documento, firmatari e avviso sui limiti della verifica.
- Tema scuro persistente e FAQ sempre visibili in una sidebar scrollabile.
- Nuove icone per codice sorgente, cambio file, chiusura e download.

## 1.0.0 - 2026-07-29

- Estrazione locale di PDF, XML, PNG, JPEG, GIF e contenuti binari dai file P7M.
- Anteprima nel browser e download del documento estratto.
- Dati leggibili dei certificati, senza dichiarazioni di verifica legale.
- Supporto a buste P7M annidate e uso offline dopo la prima visita.
