# P7M Reader

[P7M Reader](https://p7mreader.eu) apre i file `.p7m`, estrae il documento
contenuto e lo mostra direttamente nel browser. I file non vengono caricati su
un server e non serve creare un account.

> P7M Reader è uno strumento di estrazione, non di verifica. Mostra i dati
> leggibili dei certificati, ma non verifica integrità della firma, revoca,
> marche temporali o validità legale del documento.

## Funzionalità

- estrazione locale di buste PKCS#7, anche annidate;
- anteprima di PDF, XML, PNG, JPEG e GIF;
- download dei contenuti non riconosciuti come file binari;
- visualizzazione di nome e periodo di validità dichiarato dei certificati;
- lettura best-effort dei metadati PDF non compressi;
- apertura di più file nella stessa sessione;
- file P7M demo per provare subito il flusso;
- interfaccia e pagine SEO statiche in 14 lingue;
- tema chiaro e scuro;
- riapertura offline dopo la prima visita;
- apertura dei `.p7m` dal file manager quando la PWA è installata in un browser
  Chromium desktop che supporta File Handling.
- ricezione dei `.p7m` dal menu Condividi sui browser installabili che supportano
  Web Share Target.

Non esiste un limite di dimensione imposto dall'applicazione. La dimensione
gestibile dipende dalla memoria disponibile nel browser.

## Privacy

Lettura, estrazione e anteprima avvengono sul dispositivo, in un Web Worker. Il
contenuto e il nome dei file non vengono inviati al server.

Quando il browser è online, l'app registra soltanto uno dei due eventi anonimi
`opened` o `failed` nei log del Worker. Ogni riga contiene il solo tipo di
evento: nessun nome, contenuto, formato, dimensione o identificatore del file.
Non usa cookie e non invia metriche offline.

## Formati

| Contenuto estratto | Comportamento |
| --- | --- |
| PDF | Anteprima nel visualizzatore PDF del browser e download |
| XML | Anteprima testuale e download |
| PNG, JPEG, GIF | Anteprima immagine e download |
| Altro | Download come file `.bin` |

## Sviluppo locale

Richiede Node.js 22 e pnpm 11.

```sh
pnpm install
pnpm dev
```

Il server di sviluppo Astro è disponibile all'indirizzo mostrato nel terminale.

Comandi principali:

```sh
pnpm test       # test di estrazione sui campioni reali
pnpm build      # test, controllo Astro e build di produzione
pnpm preview    # anteprima locale della build
pnpm types      # rigenera i tipi Cloudflare
pnpm wrangler dev
```

## Architettura

- `src/components/ReaderPage.astro` contiene la pagina e il flusso client;
- `src/i18n.ts` è la fonte unica per lingue, route e testi;
- `src/pages/index.astro` e `src/pages/[lang]/[slug].astro` generano le route;
- `src/workers/p7m.worker.ts` esegue il parsing fuori dal thread principale;
- `src/lib/unpack-p7m.ts` estrae le buste PKCS#7 con `node-forge`;
- `src/lib/p7m.ts` riconosce il contenuto, genera i nomi e legge i metadati PDF;
- `public/service-worker.js` gestisce la cache offline;
- `src/worker.ts` serve gli asset su Cloudflare e riceve le sole metriche
  anonime;
- `test/p7m.test.ts` verifica l'estrazione usando i due file in `samples/`.

## Metriche operative

Gli eventi sono righe `p7m_event opened` o `p7m_event failed` nei log
osservabili del Worker.

Le richieste a `/metrics/*` sono accettate soltanto dalla stessa origine.

## Verifica manuale

Dopo `pnpm build`, controllare:

1. entrambi i file P7M in `samples/`;
2. un file non valido e un file vuoto;
3. apertura multipla, cambio file e reset;
4. layout desktop e mobile;
5. riapertura offline dopo una prima visita online.

## Pubblicazione

La produzione gira su Cloudflare Workers all'indirizzo
[p7mreader.eu](https://p7mreader.eu). I push aggiornano soltanto il codice
sorgente: il workflow `.github/workflows/release.yml` esegue test e build,
carica una Worker Version e la porta al 100% esclusivamente quando viene
pubblicata una GitHub Release il cui tag corrisponde alla versione in
`package.json`. Le route Cloudflare restano gestite separatamente e non vengono
riscritte durante ogni release.

Le modifiche pubblicate sono documentate in [CHANGELOG.md](CHANGELOG.md).
