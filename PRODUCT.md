# PRD — P7M Reader

Data audit: 2026-08-12
Stato: prodotto web pubblico v1.4.1; flusso demo reale verificato, compatibilità utenti non misurata.

## Intento

- Utenti: persone che devono estrarre e leggere il contenuto di un file `.p7m` senza caricarlo a un server.
- Job principale: aprire una busta PKCS#7, mostrare PDF/XML/immagini o scaricare il binario, mantenendo chiaro che non si verifica la validità legale della firma.
- Non-obiettivi: verifica di integrità/revoca/marca temporale, validazione legale, account, upload server-side o promessa di supportare ogni dimensione/browser.

## Maturità attuale

### Capacità del repository

La versione `1.4.1` implementa estrazione locale anche annidata, Web Worker, anteprima PDF/XML/PNG/JPEG/GIF, download, metadati certificato dichiarati, PWA/offline, demo, 14 lingue, File Handling e Share Target. I limiti legali e di privacy sono documentati; test e build sono presenti.

### Evidenza d’uso reale

`https://p7mreader.eu/` ha restituito 200. In una sessione browser read-only il file demo è stato aperto, estratto in `comune-ceva.pdf`, mostrato in anteprima e scaricato; l’interfaccia mostrava firmatari/dati del certificato e l’avvertenza che la firma non è verificata. Questo dimostra il percorso demo, non la compatibilità generale.

## Stato del lavoro

- Completato: release pubblica, estrazione/anteprima/download locale, demo e copy sui limiti.
- Attivo: manutenzione e raccolta di failure report per browser/formati.
- Bloccato: nessun blocker del repository osservato; la validazione legale resta fuori scope per definizione.
- Congelato/indeciso: nuove promesse di formato o validità richiedono fixture e limiti espliciti.

## Prossima azione / decisione owner

Raccogliere casi di compatibilità per browser, dispositivi e formati P7M mantenendo invariata la distinzione tra estrazione e verifica legale.

## Audit anti-slop

### Testo

Nessun difetto confermato con la soglia; la limitazione “strumento di estrazione, non di verifica” è precisa e visibile.

### Codice

Nessun difetto anti-slop confermato con la soglia. Worker, test sui campioni e pubblicazione release-only sono comportamenti motivati.

### Design

Nessun difetto confermato con la soglia. La gerarchia del flusso demo e l’avvertenza legale sostengono il job principale.

## Fonti di evidenza

- [AGENTS.md](AGENTS.md)
- [README.md](README.md)
- [CHANGELOG.md](CHANGELOG.md)
- `src/`, `test/`, `samples/`, `.github/workflows/release.yml`
- Controllo live read-only: [p7mreader.eu](https://p7mreader.eu/), 200 il 2026-08-12; solo estrazione demo.
