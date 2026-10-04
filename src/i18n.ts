export type Copy = {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  intro: string;
  choose: string;
  demo: string;
  drop: string;
  download: string;
  how: string;
  steps: [string, string, string];
  benefits: [string, string, string, string];
  faqTitle: string;
  faqs: Array<{ question: string; answer: string }>;
  source: string;
  donate: string;
  theme: string;
  change: string;
  close: string;
  signatureInfo: string;
  warningTitle: string;
  warning: string;
  noPreview: string;
  demoError: string;
  invalid: string;
  noDocument: string;
  empty: string;
  extension: string;
  opening: string;
  failed: string;
  signer: string;
  signers: string;
  noCertificate: string;
  unavailable: string;
  viewer: string;
  results: string;
  signerCountLabel: string;
  signerNamesLabel: string;
  validityLabel: string;
  properties: [string, string, string, string, string, string, string];
  newLabel: string;
  allReleases: string;
  versionLabel: string;
  container: string;
  project: string;
  preview: string;
  nestedSignatures: string;
  openingMany: string;
  failedMany: string;
  signerUnknown: string;
  socialImageAlt: string;
};

export type Locale = {
  code: string;
  segment: string;
  slug: string;
  path: string;
  name: string;
  ogLocale: string;
  copy: Copy;
};

const en: Copy = {
  metaTitle: "Open P7M files and extract PDF online | P7M Reader",
  metaDescription: "Open .p7m and .pdf.p7m files online for free. Extract and download the embedded PDF, XML or image in your browser. No upload, no account.",
  heroTitle: "Open P7M files. Extract your PDF.",
  intro: "Open a .p7m or .pdf.p7m file and download the document inside. Preview PDF, XML and images locally, without uploading your file.",
  choose: "Choose a P7M file", demo: "Try a demo file", drop: "Or drag and drop the file here", download: "Download document",
  how: "How it works",
  steps: ["Choose the P7M file|Select it or drag it from your device.", "View the content|We open the embedded document locally.", "Download the document|Save the extracted content with one click."],
  benefits: ["Private: no file is uploaded.", "Fast: no account or waiting.", "Compatible: PDF, XML, PNG, JPEG and GIF.", "Offline: works without a connection."],
  faqTitle: "FAQ and limitations",
  faqs: [
    { question: "What is a P7M file?", answer: "A .p7m file is a digitally signed PKCS#7 container. It can hold a PDF, XML or another document. P7M Reader extracts the embedded content without verifying the signature." },
    { question: "How do I convert P7M to PDF?", answer: "Choose your P7M file, preview the embedded PDF and select Download document. This extracts the original PDF. If the P7M contains XML or another format, P7M Reader downloads that format and does not convert it to PDF." },
    { question: "How do I open a .pdf.p7m file?", answer: "Select or drop the .pdf.p7m file here. P7M Reader opens the PDF inside the signed container. Renaming the file to .pdf does not extract the document." },
    { question: "How do I extract XML from an .xml.p7m file?", answer: "Choose the .xml.p7m file to preview the embedded XML as text, then select Download document to save the original XML. P7M Reader does not turn XML invoices into formatted PDFs." },
    { question: "Can I open P7M files on a phone?", answer: "Yes. Choose the .p7m file from your phone in a browser on Android or iPhone. No account is required. PDF preview depends on the browser; you can also download the extracted document." },
    { question: "Are files uploaded to a server?", answer: "No. Reading, extraction and preview happen in the browser. We record only anonymous success or error events, never file names or contents." },
    { question: "Does it verify the legal validity of the signature?", answer: "No. It displays readable certificate data but does not verify integrity, revocation, timestamps or legal validity." },
    { question: "Does it work offline?", answer: "Yes. After the first visit, the service can be reopened offline in the same browser." },
  ],
  source: "Source code", donate: "Support the creator", theme: "Change theme", change: "Change file", close: "Close",
  signatureInfo: "Signature information", warningTitle: "Warning: the signature is not verified.",
  warning: "P7M Reader extracts the document and shows readable certificate data. It does not check integrity, revocation, timestamps or legal validity: do not use this information as proof of authenticity.",
  noPreview: "Preview unavailable. You can download the extracted content.", demoError: "Unable to load the demo file",
  invalid: "it does not appear to be a valid P7M file or it is damaged", noDocument: "the signature contains no embedded document",
  empty: "the file is empty", extension: "choose a file with a .p7m extension", opening: "Opening {count} file…", failed: "{count} file could not be opened",
  signer: "signer", signers: "signers", noCertificate: "No readable certificate", unavailable: "Unavailable",
  viewer: "P7M viewer", results: "Extracted files", signerCountLabel: "Number of signers", signerNamesLabel: "Signers",
  validityLabel: "Certificate validity", properties: ["File last modified", "Author", "Created", "Modified", "Application", "PDF producer", "Page size"],
  newLabel: "New", allReleases: "All releases", versionLabel: "Version",
  container: "P7M container",
  project: "Project", preview: "Preview of {name}", nestedSignatures: "The file contains too many nested signatures",
  openingMany: "Opening {count} files…", failedMany: "{count} files could not be opened",
  signerUnknown: "Signer not identified",
  socialImageAlt: "P7M Reader. Open P7M files and extract the document locally. No upload, no account.",
};

const de: Copy = {
  ...en,
  metaTitle: "P7M Reader – P7M-Dateien online öffnen und extrahieren", metaDescription: "P7M-Dateien lokal im Browser öffnen und extrahieren. Kein Upload, kein Konto: Das Dokument bleibt auf Ihrem Gerät.",
  heroTitle: "P7M-Datei lesen. Ihr Dokument bleibt bei Ihnen.", intro: "Zeigen Sie den Inhalt einer .p7m-Datei direkt im Browser an. PDF, XML und Bilder bleiben auf Ihrem Gerät.",
  choose: "P7M-Datei auswählen", demo: "Demo-Datei ausprobieren", drop: "Oder die Datei hierher ziehen", download: "Dokument herunterladen", how: "So funktioniert es",
  steps: ["P7M-Datei auswählen|Auswählen oder vom Gerät hierher ziehen.", "Inhalt anzeigen|Das eingebettete Dokument wird lokal geöffnet.", "Dokument herunterladen|Den extrahierten Inhalt mit einem Klick speichern."],
  benefits: ["Privat: Keine Datei wird hochgeladen.", "Schnell: Kein Konto und keine Wartezeit.", "Kompatibel: PDF, XML, PNG, JPEG und GIF.", "Offline: Funktioniert ohne Verbindung."],
  faqTitle: "FAQ und Einschränkungen",
  faqs: [
    { question: "Werden Dateien auf einen Server hochgeladen?", answer: "Nein. Lesen, Extraktion und Vorschau erfolgen im Browser. Erfasst werden nur anonyme Erfolgs- oder Fehlerereignisse, niemals Dateinamen oder Inhalte." },
    { question: "Wird die Rechtsgültigkeit der Signatur geprüft?", answer: "Nein. Lesbare Zertifikatsdaten werden angezeigt, aber Integrität, Widerruf, Zeitstempel und Rechtsgültigkeit werden nicht geprüft." },
    { question: "Welche Inhalte kann ich ansehen?", answer: "PDF, XML sowie PNG-, JPEG- und GIF-Bilder. Andere Inhalte können extrahiert und als Binärdatei heruntergeladen werden." },
    { question: "Funktioniert es offline?", answer: "Ja. Nach dem ersten Besuch kann der Dienst im selben Browser offline erneut geöffnet werden." },
  ],
  source: "Quellcode", donate: "Entwickler unterstützen", theme: "Design wechseln", change: "Datei wechseln", close: "Schließen",
  signatureInfo: "Signaturinformationen", warningTitle: "Achtung: Die Signatur wird nicht geprüft.", noPreview: "Keine Vorschau verfügbar. Der extrahierte Inhalt kann heruntergeladen werden.",
  demoError: "Demo-Datei konnte nicht geladen werden", invalid: "keine gültige P7M-Datei oder beschädigt", noDocument: "die Signatur enthält kein eingebettetes Dokument",
  empty: "die Datei ist leer", extension: "eine Datei mit der Endung .p7m auswählen", opening: "Öffne {count} Datei…", failed: "{count} Datei konnte nicht geöffnet werden", signer: "Unterzeichner", signers: "Unterzeichner", noCertificate: "Kein lesbares Zertifikat", unavailable: "Nicht verfügbar",
  viewer: "P7M-Anzeige", results: "Extrahierte Dateien", signerCountLabel: "Anzahl der Unterzeichner", signerNamesLabel: "Unterzeichner",
  validityLabel: "Zertifikatsgültigkeit", properties: ["Datei zuletzt geändert", "Autor", "Erstellt", "Geändert", "Anwendung", "PDF-Produzent", "Seitengröße"],
  newLabel: "Neu", allReleases: "Alle Versionen", versionLabel: "Version",
  container: "P7M-Container",
};

const it: Copy = {
  ...en,
  metaTitle: "Apri file P7M ed estrai PDF online | P7M Reader", metaDescription: "Apri file .p7m e .pdf.p7m online gratis. Estrai e scarica il PDF, XML o l'immagine contenuta nel browser. Nessun upload, nessun account.",
  heroTitle: "Apri file P7M. Estrai il tuo PDF.", intro: "Apri file .p7m e .pdf.p7m online gratis, senza account. Leggi e scarica il documento nel browser. Il file resta sul dispositivo.",
  choose: "Scegli un file P7M", demo: "Prova con un file demo", drop: "Oppure trascina e rilascia qui il file", download: "Scarica documento", how: "Come funziona",
  steps: ["Scegli il file P7M|Scegli un file o prova il demo.", "Leggi il documento|Visualizza PDF, XML e immagini.", "Scarica il documento|Premi Scarica documento per salvarlo."],
  benefits: ["Privato: nessun file viene caricato.", "Veloce: nessun account o attesa.", "Compatibile: PDF, XML, PNG, JPEG e GIF.", "Offline: funziona anche senza connessione."],
  faqTitle: "FAQ e limitazioni",
  faqs: [
    { question: "Cos'è un file P7M?", answer: "Un file .p7m è una busta PKCS#7 con firma digitale. Può contenere un PDF, un XML o un altro documento. P7M Reader estrae il contenuto incorporato senza verificare la firma." },
    { question: "Come convertire un P7M in PDF?", answer: "Scegli il file P7M, visualizza il PDF contenuto e premi Scarica documento. Ottieni il PDF originale tramite estrazione. Se il P7M contiene un XML o un altro formato, P7M Reader scarica quel formato e non lo converte in PDF." },
    { question: "Come aprire un file .pdf.p7m?", answer: "Seleziona o trascina qui il file .pdf.p7m. Per esempio, Prova con un file demo apre comune-ceva.pdf.p7m: leggi l'anteprima e premi Scarica documento per ottenere comune-ceva.pdf. Rinominare il file in .pdf non estrae il documento. La firma non viene verificata." },
    { question: "Come estrarre XML da un file .xml.p7m?", answer: "Scegli il file .xml.p7m per leggere il contenuto XML come testo, poi premi Scarica documento per salvare l'XML originale. P7M Reader non trasforma le fatture XML in PDF impaginati." },
    { question: "Posso aprire file P7M dal cellulare?", answer: "Sì. Scegli il file .p7m dal telefono in un browser su Android o iPhone. Non serve un account. L'anteprima PDF dipende dal browser; puoi anche scaricare il documento estratto." },
    { question: "I file vengono caricati su un server?", answer: "No. Lettura, estrazione e anteprima avvengono nel browser. Registriamo solo eventi anonimi di riuscita o errore, mai nomi o contenuti dei file." },
    { question: "Verifica la validità legale della firma?", answer: "No. Mostra i dati leggibili dei certificati, ma non verifica integrità, revoca, marca temporale o validità legale della firma." },
    { question: "Funziona senza connessione?", answer: "Sì, dopo la prima visita il servizio può essere riaperto offline dallo stesso browser." },
  ],
  source: "Codice sorgente", donate: "Dona al creatore", theme: "Cambia tema", change: "Cambia file", close: "Chiudi",
  signatureInfo: "Informazioni sulla firma", warningTitle: "Attenzione: la firma non viene verificata.",
  warning: "P7M Reader estrae il documento e mostra i dati leggibili dei certificati. Non controlla integrità, revoca, marche temporali o validità legale: non usare queste informazioni come prova dell’autenticità del file.",
  noPreview: "Anteprima non disponibile. Puoi scaricare il contenuto estratto.", demoError: "Impossibile caricare il file demo",
  invalid: "non sembra un P7M valido oppure è danneggiato", noDocument: "la firma non contiene un documento incorporato", empty: "il file è vuoto",
  extension: "seleziona un file con estensione .p7m", opening: "Apro {count} file…", failed: "{count} file non aperto", signer: "firmatario", signers: "firmatari",
  noCertificate: "Nessun certificato leggibile", unavailable: "Non disponibile",
  viewer: "Visualizzatore P7M", results: "File estratti", signerCountLabel: "Numero di firmatari", signerNamesLabel: "Firmatari",
  validityLabel: "Validità certificato", properties: ["Ultima modifica file", "Autore", "Creato il", "Modificato il", "Applicazione", "Produttore PDF", "Dimensioni pagina"],
  newLabel: "Novità", allReleases: "Tutti i rilasci", versionLabel: "Versione",
  container: "Contenitore P7M",
  project: "Progetto", preview: "Anteprima di {name}", nestedSignatures: "Il file contiene troppe firme annidate",
  signerUnknown: "Firmatario non indicato",
  socialImageAlt: "P7M Reader. Apri file P7M ed estrai il documento localmente. Nessun upload, nessun account.",
  openingMany: "Apro {count} file…", failedMany: "{count} file non aperti",
};

const translated = (overrides: Partial<Copy>): Copy => ({ ...en, ...overrides });

const ptBR = translated({
  metaTitle: "P7M Reader – Abra e extraia arquivos P7M online", metaDescription: "Abra e extraia arquivos P7M localmente no navegador. Sem upload e sem conta: o documento permanece no seu dispositivo.",
  heroTitle: "Leia um arquivo P7M. Seu documento continua sendo seu.", intro: "Veja o conteúdo de um arquivo .p7m diretamente no navegador. PDF, XML e imagens ficam no seu dispositivo.",
  choose: "Escolher arquivo P7M", demo: "Testar arquivo de demonstração", drop: "Ou arraste e solte o arquivo aqui", download: "Baixar documento", how: "Como funciona",
  steps: ["Escolha o arquivo P7M|Selecione ou arraste-o do dispositivo.", "Veja o conteúdo|Abrimos o documento incorporado localmente.", "Baixe o documento|Salve o conteúdo extraído com um clique."],
  benefits: ["Privado: nenhum arquivo é enviado.", "Rápido: sem conta ou espera.", "Compatível: PDF, XML, PNG, JPEG e GIF.", "Offline: funciona sem conexão."],
  faqTitle: "Perguntas frequentes e limitações", source: "Código-fonte", donate: "Apoiar o criador", theme: "Mudar tema", change: "Trocar arquivo", close: "Fechar",
  faqs: [
    { question: "Os arquivos são enviados a um servidor?", answer: "Não. A leitura, extração e visualização acontecem no navegador. Registramos apenas eventos anônimos de sucesso ou erro, nunca nomes ou conteúdo dos arquivos." },
    { question: "A validade jurídica da assinatura é verificada?", answer: "Não. Os dados legíveis do certificado são exibidos, mas integridade, revogação, carimbo de tempo e validade jurídica não são verificados." },
    { question: "Quais conteúdos posso visualizar?", answer: "PDF, XML e imagens PNG, JPEG e GIF. Outros conteúdos podem ser extraídos e baixados como arquivos binários." },
    { question: "Funciona offline?", answer: "Sim. Após a primeira visita, o serviço pode ser aberto offline no mesmo navegador." },
  ],
});
const id = translated({
  metaTitle: "P7M Reader – Buka dan ekstrak file P7M online", metaDescription: "Buka dan ekstrak file P7M secara lokal di browser. Tanpa unggahan dan akun: dokumen tetap di perangkat Anda.",
  heroTitle: "Baca file P7M. Dokumen tetap milik Anda.", intro: "Lihat isi file .p7m langsung di browser. PDF, XML, dan gambar tetap di perangkat Anda.",
  choose: "Pilih file P7M", demo: "Coba file demo", drop: "Atau tarik dan lepaskan file di sini", download: "Unduh dokumen", how: "Cara kerja",
  steps: ["Pilih file P7M|Pilih atau tarik dari perangkat Anda.", "Lihat isinya|Kami membuka dokumen tertanam secara lokal.", "Unduh dokumen|Simpan hasil ekstraksi dengan satu klik."],
  benefits: ["Privat: tidak ada file yang diunggah.", "Cepat: tanpa akun atau menunggu.", "Kompatibel: PDF, XML, PNG, JPEG, dan GIF.", "Offline: berfungsi tanpa koneksi."],
  faqTitle: "FAQ dan batasan", source: "Kode sumber", donate: "Dukung pembuat", theme: "Ubah tema", change: "Ganti file", close: "Tutup",
  faqs: [
    { question: "Apakah file diunggah ke server?", answer: "Tidak. Pembacaan, ekstraksi, dan pratinjau berlangsung di browser. Kami hanya mencatat keberhasilan atau kesalahan anonim, bukan nama atau isi file." },
    { question: "Apakah keabsahan hukum tanda tangan diverifikasi?", answer: "Tidak. Data sertifikat yang terbaca ditampilkan, tetapi integritas, pencabutan, stempel waktu, dan keabsahan hukum tidak diverifikasi." },
    { question: "Konten apa yang dapat dilihat?", answer: "PDF, XML, serta gambar PNG, JPEG, dan GIF. Konten lain dapat diekstrak dan diunduh sebagai file biner." },
    { question: "Apakah dapat digunakan offline?", answer: "Ya. Setelah kunjungan pertama, layanan dapat dibuka kembali secara offline di browser yang sama." },
  ],
});
const vi = translated({
  metaTitle: "P7M Reader – Mở và trích xuất tệp P7M trực tuyến", metaDescription: "Mở và trích xuất tệp P7M cục bộ trong trình duyệt. Không tải lên, không cần tài khoản.",
  heroTitle: "Đọc tệp P7M. Tài liệu vẫn thuộc về bạn.", intro: "Xem nội dung tệp .p7m ngay trong trình duyệt. PDF, XML và hình ảnh vẫn ở trên thiết bị.",
  choose: "Chọn tệp P7M", demo: "Thử tệp mẫu", drop: "Hoặc kéo thả tệp vào đây", download: "Tải tài liệu", how: "Cách hoạt động",
  steps: ["Chọn tệp P7M|Chọn hoặc kéo từ thiết bị.", "Xem nội dung|Tài liệu nhúng được mở cục bộ.", "Tải tài liệu|Lưu nội dung đã trích xuất bằng một cú nhấp."],
  benefits: ["Riêng tư: không tệp nào được tải lên.", "Nhanh: không tài khoản, không chờ đợi.", "Tương thích: PDF, XML, PNG, JPEG và GIF.", "Ngoại tuyến: hoạt động khi mất mạng."],
  faqTitle: "Câu hỏi thường gặp và giới hạn", source: "Mã nguồn", donate: "Ủng hộ tác giả", theme: "Đổi giao diện", change: "Đổi tệp", close: "Đóng",
  faqs: [
    { question: "Tệp có được tải lên máy chủ không?", answer: "Không. Việc đọc, trích xuất và xem trước diễn ra trong trình duyệt. Chỉ sự kiện thành công hoặc lỗi ẩn danh được ghi lại, không bao giờ có tên hay nội dung tệp." },
    { question: "Có xác minh giá trị pháp lý của chữ ký không?", answer: "Không. Dữ liệu chứng thư đọc được được hiển thị, nhưng tính toàn vẹn, thu hồi, dấu thời gian và giá trị pháp lý không được xác minh." },
    { question: "Có thể xem trước nội dung nào?", answer: "PDF, XML và ảnh PNG, JPEG, GIF. Nội dung khác có thể được trích xuất và tải xuống dưới dạng tệp nhị phân." },
    { question: "Có hoạt động ngoại tuyến không?", answer: "Có. Sau lần truy cập đầu tiên, dịch vụ có thể được mở lại ngoại tuyến trong cùng trình duyệt." },
  ],
});
const es = translated({
  metaTitle: "P7M Reader – Abre y extrae archivos P7M online", metaDescription: "Abre y extrae archivos P7M localmente en el navegador. Sin subidas ni cuentas: el documento permanece en tu dispositivo.",
  heroTitle: "Lee un archivo P7M. Tu documento sigue siendo tuyo.", intro: "Consulta el contenido de un archivo .p7m directamente en el navegador. PDF, XML e imágenes permanecen en tu dispositivo.",
  choose: "Elegir archivo P7M", demo: "Probar archivo de ejemplo", drop: "O arrastra y suelta el archivo aquí", download: "Descargar documento", how: "Cómo funciona",
  steps: ["Elige el archivo P7M|Selecciónalo o arrástralo desde tu dispositivo.", "Consulta el contenido|Abrimos localmente el documento incorporado.", "Descarga el documento|Guarda el contenido extraído con un clic."],
  benefits: ["Privado: no se sube ningún archivo.", "Rápido: sin cuenta ni esperas.", "Compatible: PDF, XML, PNG, JPEG y GIF.", "Sin conexión: funciona offline."],
  faqTitle: "Preguntas frecuentes y limitaciones", source: "Código fuente", donate: "Apoyar al creador", theme: "Cambiar tema", change: "Cambiar archivo", close: "Cerrar",
  faqs: [
    { question: "¿Los archivos se suben a un servidor?", answer: "No. La lectura, extracción y vista previa se realizan en el navegador. Solo registramos eventos anónimos de éxito o error, nunca nombres ni contenido." },
    { question: "¿Se verifica la validez legal de la firma?", answer: "No. Se muestran los datos legibles del certificado, pero no se verifican la integridad, revocación, sellos de tiempo ni validez legal." },
    { question: "¿Qué contenidos puedo ver?", answer: "PDF, XML e imágenes PNG, JPEG y GIF. Otros contenidos pueden extraerse y descargarse como archivos binarios." },
    { question: "¿Funciona sin conexión?", answer: "Sí. Después de la primera visita, el servicio puede abrirse sin conexión en el mismo navegador." },
  ],
});
const ja = translated({
  metaTitle: "P7M Reader – P7Mファイルをオンラインで開いて抽出", metaDescription: "P7Mファイルをブラウザ内でローカルに開いて抽出します。アップロードもアカウントも不要です。",
  heroTitle: "P7Mファイルを読む。文書はあなたの端末に。", intro: ".p7mファイルの内容をブラウザで直接表示します。PDF、XML、画像は端末から外に出ません。",
  choose: "P7Mファイルを選択", demo: "デモファイルを試す", drop: "またはここにファイルをドロップ", download: "文書をダウンロード", how: "使い方",
  steps: ["P7Mファイルを選択|端末から選ぶかドラッグします。", "内容を表示|埋め込まれた文書をローカルで開きます。", "文書を保存|抽出した内容をワンクリックで保存します。"],
  benefits: ["非公開：ファイルはアップロードされません。", "高速：アカウントも待ち時間も不要。", "対応：PDF、XML、PNG、JPEG、GIF。", "オフライン：接続なしでも動作。"],
  faqTitle: "よくある質問と制限", source: "ソースコード", donate: "開発者を支援", theme: "テーマを変更", change: "ファイルを変更", close: "閉じる",
  faqs: [
    { question: "ファイルはサーバーにアップロードされますか？", answer: "いいえ。読み取り、抽出、プレビューはブラウザ内で行われます。記録されるのは匿名の成功・エラーイベントだけで、ファイル名や内容は記録されません。" },
    { question: "署名の法的有効性を検証しますか？", answer: "いいえ。読み取れる証明書データを表示しますが、完全性、失効、タイムスタンプ、法的有効性は検証しません。" },
    { question: "何をプレビューできますか？", answer: "PDF、XML、PNG、JPEG、GIF画像です。その他の内容は抽出してバイナリファイルとして保存できます。" },
    { question: "オフラインで使えますか？", answer: "はい。初回アクセス後は同じブラウザでオフラインでも開けます。" },
  ],
});
const ptPT = translated({
  ...ptBR, metaTitle: "P7M Reader – Abra e extraia ficheiros P7M online", metaDescription: "Abra e extraia ficheiros P7M localmente no navegador. Sem carregamentos nem conta: o documento fica no seu dispositivo.",
  heroTitle: "Leia um ficheiro P7M. O documento continua a ser seu.", intro: "Veja o conteúdo de um ficheiro .p7m diretamente no navegador. PDF, XML e imagens ficam no seu dispositivo.",
  choose: "Escolher ficheiro P7M", demo: "Testar ficheiro de demonstração", drop: "Ou arraste e largue o ficheiro aqui", download: "Descarregar documento", change: "Mudar ficheiro",
  faqs: [
    { question: "Os ficheiros são enviados para um servidor?", answer: "Não. A leitura, a extração e a pré-visualização são feitas no navegador. Registamos apenas eventos anónimos de sucesso ou erro, nunca os nomes nem o conteúdo dos ficheiros." },
    { question: "A validade jurídica da assinatura é verificada?", answer: "Não. São apresentados os dados legíveis do certificado, mas não são verificados a integridade, a revogação, as marcas temporais nem a validade jurídica." },
    { question: "Que conteúdos posso pré-visualizar?", answer: "PDF, XML e imagens PNG, JPEG e GIF. Os restantes conteúdos podem ser extraídos e descarregados como ficheiros binários." },
    { question: "Funciona sem ligação à Internet?", answer: "Sim. Após a primeira visita, o serviço pode ser novamente aberto sem ligação à Internet no mesmo navegador." },
  ],
});
const fr = translated({
  metaTitle: "P7M Reader – Ouvrir et extraire des fichiers P7M en ligne", metaDescription: "Ouvrez et extrayez les fichiers P7M localement dans le navigateur. Aucun envoi, aucun compte.",
  heroTitle: "Lisez un fichier P7M. Votre document reste à vous.", intro: "Affichez le contenu d’un fichier .p7m directement dans le navigateur. PDF, XML et images restent sur votre appareil.",
  choose: "Choisir un fichier P7M", demo: "Essayer un fichier de démonstration", drop: "Ou glissez-déposez le fichier ici", download: "Télécharger le document", how: "Comment ça marche",
  steps: ["Choisissez le fichier P7M|Sélectionnez-le ou glissez-le depuis votre appareil.", "Affichez le contenu|Le document intégré est ouvert localement.", "Téléchargez le document|Enregistrez le contenu extrait en un clic."],
  benefits: ["Privé : aucun fichier n’est envoyé.", "Rapide : aucun compte ni attente.", "Compatible : PDF, XML, PNG, JPEG et GIF.", "Hors ligne : fonctionne sans connexion."],
  faqTitle: "FAQ et limitations", source: "Code source", donate: "Soutenir le créateur", theme: "Changer de thème", change: "Changer de fichier", close: "Fermer",
  faqs: [
    { question: "Les fichiers sont-ils envoyés à un serveur ?", answer: "Non. La lecture, l’extraction et l’aperçu ont lieu dans le navigateur. Seuls des événements anonymes de réussite ou d’erreur sont enregistrés, jamais les noms ni le contenu." },
    { question: "La validité juridique de la signature est-elle vérifiée ?", answer: "Non. Les données lisibles du certificat sont affichées, mais l’intégrité, la révocation, l’horodatage et la validité juridique ne sont pas vérifiés." },
    { question: "Quels contenus puis-je afficher ?", answer: "PDF, XML et images PNG, JPEG et GIF. Les autres contenus peuvent être extraits et téléchargés comme fichiers binaires." },
    { question: "Le service fonctionne-t-il hors ligne ?", answer: "Oui. Après la première visite, il peut être rouvert hors ligne dans le même navigateur." },
  ],
});
const nl = translated({
  metaTitle: "P7M Reader – P7M-bestanden online openen en uitpakken", metaDescription: "Open en extraheer P7M-bestanden lokaal in de browser. Geen upload of account: het document blijft op uw apparaat.",
  heroTitle: "Lees een P7M-bestand. Uw document blijft van u.", intro: "Bekijk de inhoud van een .p7m-bestand direct in de browser. PDF, XML en afbeeldingen blijven op uw apparaat.",
  choose: "P7M-bestand kiezen", demo: "Demobestand proberen", drop: "Of sleep het bestand hierheen", download: "Document downloaden", how: "Hoe het werkt",
  steps: ["Kies het P7M-bestand|Selecteer of sleep het vanaf uw apparaat.", "Bekijk de inhoud|We openen het ingesloten document lokaal.", "Download het document|Sla de uitgepakte inhoud op met één klik."],
  benefits: ["Privé: er wordt niets geüpload.", "Snel: geen account of wachttijd.", "Compatibel: PDF, XML, PNG, JPEG en GIF.", "Offline: werkt zonder verbinding."],
  faqTitle: "Veelgestelde vragen en beperkingen", source: "Broncode", donate: "Steun de maker", theme: "Thema wijzigen", change: "Bestand wijzigen", close: "Sluiten",
  faqs: [
    { question: "Worden bestanden naar een server geüpload?", answer: "Nee. Lezen, uitpakken en voorvertonen gebeuren in de browser. Alleen anonieme succes- of foutgebeurtenissen worden vastgelegd, nooit namen of inhoud." },
    { question: "Wordt de juridische geldigheid van de handtekening gecontroleerd?", answer: "Nee. Leesbare certificaatgegevens worden getoond, maar integriteit, intrekking, tijdstempels en juridische geldigheid worden niet gecontroleerd." },
    { question: "Welke inhoud kan ik bekijken?", answer: "PDF, XML en PNG-, JPEG- en GIF-afbeeldingen. Andere inhoud kan als binair bestand worden uitgepakt en gedownload." },
    { question: "Werkt het offline?", answer: "Ja. Na het eerste bezoek kan de dienst offline opnieuw worden geopend in dezelfde browser." },
  ],
});
const pl = translated({
  metaTitle: "P7M Reader – Otwieraj i wyodrębniaj pliki P7M online", metaDescription: "Otwieraj i wyodrębniaj pliki P7M lokalnie w przeglądarce. Bez wysyłania i konta.",
  heroTitle: "Odczytaj plik P7M. Dokument pozostaje Twój.", intro: "Wyświetl zawartość pliku .p7m bezpośrednio w przeglądarce. PDF, XML i obrazy pozostają na urządzeniu.",
  choose: "Wybierz plik P7M", demo: "Wypróbuj plik demonstracyjny", drop: "Lub przeciągnij plik tutaj", download: "Pobierz dokument", how: "Jak to działa",
  steps: ["Wybierz plik P7M|Wybierz go lub przeciągnij z urządzenia.", "Wyświetl zawartość|Otwieramy osadzony dokument lokalnie.", "Pobierz dokument|Zapisz wyodrębnioną zawartość jednym kliknięciem."],
  benefits: ["Prywatnie: żaden plik nie jest wysyłany.", "Szybko: bez konta i czekania.", "Obsługa: PDF, XML, PNG, JPEG i GIF.", "Offline: działa bez połączenia."],
  faqTitle: "FAQ i ograniczenia", source: "Kod źródłowy", donate: "Wesprzyj twórcę", theme: "Zmień motyw", change: "Zmień plik", close: "Zamknij",
  faqs: [
    { question: "Czy pliki są wysyłane na serwer?", answer: "Nie. Odczyt, wyodrębnianie i podgląd odbywają się w przeglądarce. Rejestrowane są tylko anonimowe zdarzenia sukcesu lub błędu, nigdy nazwy ani treść." },
    { question: "Czy sprawdzana jest ważność prawna podpisu?", answer: "Nie. Wyświetlane są czytelne dane certyfikatu, ale integralność, unieważnienie, znaczniki czasu i ważność prawna nie są weryfikowane." },
    { question: "Jakie treści można wyświetlić?", answer: "PDF, XML oraz obrazy PNG, JPEG i GIF. Inne treści można wyodrębnić i pobrać jako pliki binarne." },
    { question: "Czy działa offline?", answer: "Tak. Po pierwszej wizycie usługę można ponownie otworzyć offline w tej samej przeglądarce." },
  ],
});
const uk = translated({
  metaTitle: "P7M Reader – Відкривайте та видобувайте файли P7M онлайн", metaDescription: "Відкривайте файли P7M локально у браузері. Без завантаження та облікового запису.",
  heroTitle: "Читайте файл P7M. Документ залишається вашим.", intro: "Переглядайте вміст файлу .p7m безпосередньо у браузері. PDF, XML і зображення залишаються на пристрої.",
  choose: "Вибрати файл P7M", demo: "Спробувати демофайл", drop: "Або перетягніть файл сюди", download: "Завантажити документ", how: "Як це працює",
  steps: ["Виберіть файл P7M|Виберіть або перетягніть його з пристрою.", "Перегляньте вміст|Вбудований документ відкривається локально.", "Завантажте документ|Збережіть видобутий вміст одним натисканням."],
  benefits: ["Приватно: файли не надсилаються.", "Швидко: без акаунта й очікування.", "Сумісність: PDF, XML, PNG, JPEG і GIF.", "Офлайн: працює без мережі."],
  faqTitle: "Поширені питання й обмеження", source: "Вихідний код", donate: "Підтримати автора", theme: "Змінити тему", change: "Змінити файл", close: "Закрити",
  faqs: [
    { question: "Чи надсилаються файли на сервер?", answer: "Ні. Читання, видобування та перегляд відбуваються у браузері. Записуються лише анонімні події успіху або помилки, ніколи не назви чи вміст." },
    { question: "Чи перевіряється юридична чинність підпису?", answer: "Ні. Показуються доступні дані сертифіката, але цілісність, відкликання, часові позначки та юридична чинність не перевіряються." },
    { question: "Який вміст можна переглянути?", answer: "PDF, XML і зображення PNG, JPEG та GIF. Інший вміст можна видобути й завантажити як двійковий файл." },
    { question: "Чи працює офлайн?", answer: "Так. Після першого відвідування сервіс можна знову відкрити офлайн у тому самому браузері." },
  ],
});
const ru = translated({
  metaTitle: "P7M Reader – Открывайте и извлекайте файлы P7M онлайн", metaDescription: "Открывайте и извлекайте файлы P7M локально в браузере. Без загрузки и учётной записи.",
  heroTitle: "Читайте файл P7M. Документ остаётся вашим.", intro: "Просматривайте содержимое файла .p7m прямо в браузере. PDF, XML и изображения остаются на устройстве.",
  choose: "Выбрать файл P7M", demo: "Попробовать демофайл", drop: "Или перетащите файл сюда", download: "Скачать документ", how: "Как это работает",
  steps: ["Выберите файл P7M|Выберите или перетащите его с устройства.", "Просмотрите содержимое|Встроенный документ открывается локально.", "Скачайте документ|Сохраните извлечённое содержимое одним нажатием."],
  benefits: ["Конфиденциально: файлы не загружаются.", "Быстро: без аккаунта и ожидания.", "Поддержка: PDF, XML, PNG, JPEG и GIF.", "Офлайн: работает без сети."],
  faqTitle: "Частые вопросы и ограничения", source: "Исходный код", donate: "Поддержать автора", theme: "Сменить тему", change: "Сменить файл", close: "Закрыть",
  faqs: [
    { question: "Файлы загружаются на сервер?", answer: "Нет. Чтение, извлечение и просмотр выполняются в браузере. Записываются только анонимные события успеха или ошибки, но не имена и содержимое." },
    { question: "Проверяется юридическая действительность подписи?", answer: "Нет. Показываются читаемые данные сертификата, но целостность, отзыв, временные метки и юридическая действительность не проверяются." },
    { question: "Какое содержимое можно просмотреть?", answer: "PDF, XML и изображения PNG, JPEG и GIF. Остальное содержимое можно извлечь и скачать как двоичный файл." },
    { question: "Работает ли сервис офлайн?", answer: "Да. После первого посещения сервис можно снова открыть офлайн в том же браузере." },
  ],
});

type LocalizedUi = Pick<Copy,
  | "signatureInfo" | "warningTitle" | "warning" | "noPreview" | "demoError" | "invalid" | "noDocument"
  | "empty" | "extension" | "opening" | "openingMany" | "failed" | "failedMany" | "signer" | "signers"
  | "noCertificate" | "unavailable" | "viewer" | "results" | "signerCountLabel" | "signerNamesLabel"
  | "validityLabel" | "properties" | "newLabel" | "allReleases" | "versionLabel" | "container"
  | "project" | "preview" | "nestedSignatures"
  | "signerUnknown" | "socialImageAlt"
>;

type FaqItem = Copy["faqs"][number];

const localizedFaqs: Record<string, FaqItem[]> = {
  de: [
    { question: "Was ist eine P7M-Datei?", answer: "Eine .p7m-Datei ist ein digital signierter PKCS#7-Container. Sie kann ein PDF, XML oder ein anderes Dokument enthalten. P7M Reader extrahiert den eingebetteten Inhalt, ohne die Signatur zu prüfen." },
    { question: "Wie wandle ich P7M in PDF um?", answer: "Wählen Sie die P7M-Datei aus, öffnen Sie die PDF-Vorschau und klicken Sie auf „Dokument herunterladen“. Dadurch wird das ursprüngliche PDF extrahiert. Enthält die P7M-Datei XML oder ein anderes Format, lädt P7M Reader dieses Format herunter und wandelt es nicht in PDF um." },
    { question: "Wie öffne ich eine .pdf.p7m-Datei?", answer: "Wählen Sie die .pdf.p7m-Datei aus oder ziehen Sie sie hierher. P7M Reader öffnet das PDF im signierten Container. Das Umbenennen der Datei in .pdf extrahiert das Dokument nicht." },
    { question: "Kann ich P7M-Dateien auf dem Smartphone öffnen?", answer: "Ja. Wählen Sie die .p7m-Datei im Browser auf Ihrem Android-Smartphone oder iPhone aus. Ein Konto ist nicht erforderlich. Die PDF-Vorschau hängt vom Browser ab. Sie können das extrahierte Dokument auch herunterladen." },
  ],
  "pt-BR": [
    { question: "O que é um arquivo P7M?", answer: "Um arquivo .p7m é um contêiner PKCS#7 assinado digitalmente. Ele pode conter um PDF, XML ou outro documento. O P7M Reader extrai o conteúdo incorporado sem verificar a assinatura." },
    { question: "Como converter P7M para PDF?", answer: "Escolha o arquivo P7M, visualize o PDF incorporado e selecione Baixar documento. Isso extrai o PDF original. Se o P7M contiver XML ou outro formato, o P7M Reader baixará esse formato sem convertê-lo para PDF." },
    { question: "Como abrir um arquivo .pdf.p7m?", answer: "Selecione ou arraste o arquivo .pdf.p7m para cá. O P7M Reader abre o PDF dentro do contêiner assinado. Renomear o arquivo para .pdf não extrai o documento." },
    { question: "Posso abrir arquivos P7M no celular?", answer: "Sim. Selecione o arquivo .p7m no navegador do seu celular Android ou iPhone. Não é necessário ter uma conta. A pré-visualização de PDF depende do navegador; você também pode baixar o documento extraído." },
  ],
  id: [
    { question: "Apa itu file P7M?", answer: "File .p7m adalah kontainer PKCS#7 yang ditandatangani secara digital. File ini dapat berisi PDF, XML, atau dokumen lain. P7M Reader mengekstrak konten di dalamnya tanpa memverifikasi tanda tangan." },
    { question: "Bagaimana cara mengubah P7M menjadi PDF?", answer: "Pilih file P7M, pratinjau PDF di dalamnya, lalu pilih Unduh dokumen. Cara ini mengekstrak PDF aslinya. Jika P7M berisi XML atau format lain, P7M Reader akan mengunduh format tersebut dan tidak mengubahnya menjadi PDF." },
    { question: "Bagaimana cara membuka file .pdf.p7m?", answer: "Pilih atau seret file .pdf.p7m ke sini. P7M Reader membuka PDF di dalam kontainer bertanda tangan. Mengganti nama file menjadi .pdf tidak mengekstrak dokumen." },
    { question: "Bisakah saya membuka file P7M di ponsel?", answer: "Bisa. Pilih file .p7m dari ponsel Android atau iPhone melalui browser. Anda tidak perlu akun. Pratinjau PDF bergantung pada browser; Anda juga dapat mengunduh dokumen hasil ekstraksi." },
  ],
  vi: [
    { question: "Tệp P7M là gì?", answer: "Tệp .p7m là vùng chứa PKCS#7 được ký số. Tệp có thể chứa PDF, XML hoặc tài liệu khác. P7M Reader trích xuất nội dung được nhúng mà không xác minh chữ ký." },
    { question: "Làm cách nào để chuyển P7M sang PDF?", answer: "Chọn tệp P7M, xem trước PDF bên trong rồi chọn Tải tài liệu. Thao tác này trích xuất PDF gốc. Nếu P7M chứa XML hoặc định dạng khác, P7M Reader sẽ tải xuống định dạng đó chứ không chuyển sang PDF." },
    { question: "Làm cách nào để mở tệp .pdf.p7m?", answer: "Chọn hoặc kéo tệp .pdf.p7m vào đây. P7M Reader mở PDF bên trong vùng chứa đã ký. Đổi tên tệp thành .pdf không trích xuất tài liệu." },
    { question: "Tôi có thể mở tệp P7M trên điện thoại không?", answer: "Có. Chọn tệp .p7m trên điện thoại Android hoặc iPhone bằng trình duyệt. Bạn không cần tài khoản. Khả năng xem trước PDF tùy thuộc vào trình duyệt; bạn cũng có thể tải tài liệu đã trích xuất." },
  ],
  es: [
    { question: "¿Qué es un archivo P7M?", answer: "Un archivo .p7m es un contenedor PKCS#7 firmado digitalmente. Puede incluir un PDF, XML u otro documento. P7M Reader extrae el contenido integrado sin verificar la firma." },
    { question: "¿Cómo convierto P7M a PDF?", answer: "Elige el archivo P7M, previsualiza el PDF incluido y selecciona Descargar documento. Así se extrae el PDF original. Si el P7M contiene XML u otro formato, P7M Reader descarga ese formato y no lo convierte a PDF." },
    { question: "¿Cómo abro un archivo .pdf.p7m?", answer: "Selecciona o arrastra aquí el archivo .pdf.p7m. P7M Reader abre el PDF dentro del contenedor firmado. Cambiar la extensión a .pdf no extrae el documento." },
    { question: "¿Puedo abrir archivos P7M en el móvil?", answer: "Sí. Elige el archivo .p7m desde el navegador de tu teléfono Android o iPhone. No necesitas una cuenta. La vista previa del PDF depende del navegador; también puedes descargar el documento extraído." },
  ],
  ja: [
    { question: "P7Mファイルとは何ですか？", answer: ".p7mファイルはデジタル署名付きのPKCS#7コンテナです。PDF、XML、その他の文書を含むことがあります。P7M Readerは署名を検証せずに、格納された内容を抽出します。" },
    { question: "P7MをPDFに変換するには？", answer: "P7Mファイルを選び、格納されたPDFをプレビューして「文書をダウンロード」を選択します。元のPDFが抽出されます。XMLなど別の形式が含まれている場合は、その形式のままダウンロードされ、PDFには変換されません。" },
    { question: ".pdf.p7mファイルを開くには？", answer: ".pdf.p7mファイルを選択するか、ここにドラッグします。P7M Readerが署名付きコンテナ内のPDFを開きます。拡張子を.pdfに変更しても文書は抽出されません。" },
    { question: "スマートフォンでP7Mファイルを開けますか？", answer: "はい。AndroidスマートフォンまたはiPhoneのブラウザから.p7mファイルを選択してください。アカウントは不要です。PDFをプレビューできるかはブラウザによります。抽出した文書をダウンロードすることもできます。" },
  ],
  "pt-PT": [
    { question: "O que é um ficheiro P7M?", answer: "Um ficheiro .p7m é um contentor PKCS#7 assinado digitalmente. Pode conter um PDF, XML ou outro documento. O P7M Reader extrai o conteúdo incorporado sem verificar a assinatura." },
    { question: "Como converter P7M para PDF?", answer: "Escolha o ficheiro P7M, pré-visualize o PDF incorporado e selecione Descarregar documento. Isto extrai o PDF original. Se o P7M contiver XML ou outro formato, o P7M Reader descarrega esse formato sem o converter para PDF." },
    { question: "Como abrir um ficheiro .pdf.p7m?", answer: "Selecione ou arraste o ficheiro .pdf.p7m para aqui. O P7M Reader abre o PDF dentro do contentor assinado. Mudar a extensão do ficheiro para .pdf não extrai o documento." },
    { question: "Posso abrir ficheiros P7M no telemóvel?", answer: "Sim. Selecione o ficheiro .p7m no navegador do seu telemóvel Android ou iPhone. Não precisa de uma conta. A pré-visualização de PDF depende do navegador; também pode descarregar o documento extraído." },
  ],
  fr: [
    { question: "Qu’est-ce qu’un fichier P7M ?", answer: "Un fichier .p7m est un conteneur PKCS#7 signé numériquement. Il peut contenir un PDF, un fichier XML ou un autre document. P7M Reader extrait le contenu intégré sans vérifier la signature." },
    { question: "Comment convertir un P7M en PDF ?", answer: "Choisissez le fichier P7M, affichez l’aperçu du PDF intégré, puis sélectionnez Télécharger le document. Le PDF d’origine est ainsi extrait. Si le P7M contient du XML ou un autre format, P7M Reader télécharge ce format sans le convertir en PDF." },
    { question: "Comment ouvrir un fichier .pdf.p7m ?", answer: "Sélectionnez ou faites glisser le fichier .pdf.p7m ici. P7M Reader ouvre le PDF contenu dans le conteneur signé. Renommer le fichier en .pdf n’extrait pas le document." },
    { question: "Puis-je ouvrir des fichiers P7M sur mon téléphone ?", answer: "Oui. Sélectionnez le fichier .p7m dans le navigateur de votre téléphone Android ou iPhone. Aucun compte n’est nécessaire. L’aperçu PDF dépend du navigateur ; vous pouvez aussi télécharger le document extrait." },
  ],
  nl: [
    { question: "Wat is een P7M-bestand?", answer: "Een .p7m-bestand is een digitaal ondertekende PKCS#7-container. Het kan een PDF, XML of een ander document bevatten. P7M Reader pakt de ingesloten inhoud uit zonder de handtekening te controleren." },
    { question: "Hoe zet ik P7M om naar PDF?", answer: "Kies het P7M-bestand, bekijk de ingesloten PDF en kies Document downloaden. Zo pak je de originele PDF uit. Bevat het P7M-bestand XML of een ander formaat, dan downloadt P7M Reader dat formaat zonder het naar PDF om te zetten." },
    { question: "Hoe open ik een .pdf.p7m-bestand?", answer: "Selecteer het .pdf.p7m-bestand of sleep het hierheen. P7M Reader opent de PDF in de ondertekende container. De bestandsextensie wijzigen in .pdf pakt het document niet uit." },
    { question: "Kan ik P7M-bestanden op mijn telefoon openen?", answer: "Ja. Kies het .p7m-bestand in de browser op je Android-telefoon of iPhone. Een account is niet nodig. PDF-voorbeelden zijn afhankelijk van de browser; je kunt het uitgepakte document ook downloaden." },
  ],
  pl: [
    { question: "Czym jest plik P7M?", answer: "Plik .p7m to cyfrowo podpisany kontener PKCS#7. Może zawierać plik PDF, XML lub inny dokument. P7M Reader wyodrębnia osadzoną zawartość bez weryfikowania podpisu." },
    { question: "Jak przekonwertować P7M na PDF?", answer: "Wybierz plik P7M, wyświetl osadzony PDF i wybierz Pobierz dokument. Spowoduje to wyodrębnienie oryginalnego pliku PDF. Jeśli P7M zawiera XML lub inny format, P7M Reader pobierze go bez konwertowania na PDF." },
    { question: "Jak otworzyć plik .pdf.p7m?", answer: "Wybierz plik .pdf.p7m lub przeciągnij go tutaj. P7M Reader otworzy plik PDF z podpisanego kontenera. Zmiana rozszerzenia na .pdf nie wyodrębnia dokumentu." },
    { question: "Czy mogę otwierać pliki P7M na telefonie?", answer: "Tak. Wybierz plik .p7m w przeglądarce na telefonie z Androidem lub iPhonie. Konto nie jest potrzebne. Podgląd PDF zależy od przeglądarki; możesz też pobrać wyodrębniony dokument." },
  ],
  uk: [
    { question: "Що таке файл P7M?", answer: "Файл .p7m — це контейнер PKCS#7 із цифровим підписом. Він може містити PDF, XML або інший документ. P7M Reader видобуває вбудований вміст без перевірки підпису." },
    { question: "Як перетворити P7M на PDF?", answer: "Виберіть файл P7M, перегляньте вбудований PDF і натисніть «Завантажити документ». Так ви видобудете оригінальний PDF. Якщо P7M містить XML або інший формат, P7M Reader завантажить його без перетворення на PDF." },
    { question: "Як відкрити файл .pdf.p7m?", answer: "Виберіть файл .pdf.p7m або перетягніть його сюди. P7M Reader відкриє PDF у підписаному контейнері. Зміна розширення на .pdf не видобуває документ." },
    { question: "Чи можна відкривати файли P7M на телефоні?", answer: "Так. Виберіть файл .p7m у браузері на телефоні Android або iPhone. Обліковий запис не потрібен. Попередній перегляд PDF залежить від браузера; видобутий документ також можна завантажити." },
  ],
  ru: [
    { question: "Что такое файл P7M?", answer: "Файл .p7m — это контейнер PKCS#7 с цифровой подписью. Он может содержать PDF, XML или другой документ. P7M Reader извлекает встроенное содержимое, не проверяя подпись." },
    { question: "Как преобразовать P7M в PDF?", answer: "Выберите файл P7M, откройте предварительный просмотр встроенного PDF и нажмите «Скачать документ». Так извлекается исходный PDF. Если в P7M содержится XML или другой формат, P7M Reader скачает его без преобразования в PDF." },
    { question: "Как открыть файл .pdf.p7m?", answer: "Выберите файл .pdf.p7m или перетащите его сюда. P7M Reader откроет PDF внутри контейнера с подписью. Переименование файла в .pdf не извлекает документ." },
    { question: "Можно ли открывать файлы P7M на телефоне?", answer: "Да. Выберите файл .p7m в браузере на телефоне Android или iPhone. Учётная запись не нужна. Возможность просмотра PDF зависит от браузера; извлечённый документ можно скачать." },
  ],
};

const localizedUi: Record<string, LocalizedUi> = {
  de: {
    signatureInfo: "Signaturinformationen", warningTitle: "Achtung: Die Signatur wird nicht geprüft.",
    warning: "P7M Reader extrahiert das Dokument und zeigt lesbare Zertifikatsdaten an. Integrität, Widerruf, Zeitstempel und Rechtsgültigkeit werden nicht geprüft. Verwenden Sie diese Angaben nicht als Echtheitsnachweis.",
    noPreview: "Keine Vorschau verfügbar. Sie können den extrahierten Inhalt herunterladen.", demoError: "Die Demodatei konnte nicht geladen werden",
    invalid: "ist keine gültige P7M-Datei oder ist beschädigt", noDocument: "die Signatur enthält kein eingebettetes Dokument",
    empty: "die Datei ist leer", extension: "wählen Sie eine Datei mit der Endung .p7m",
    opening: "Öffne {count} Datei…", openingMany: "Öffne {count} Dateien…",
    failed: "{count} Datei konnte nicht geöffnet werden", failedMany: "{count} Dateien konnten nicht geöffnet werden",
    signer: "Unterzeichner", signers: "Unterzeichner", noCertificate: "Kein lesbares Zertifikat", unavailable: "Nicht verfügbar",
    viewer: "P7M-Viewer", results: "Extrahierte Dateien", signerCountLabel: "Anzahl der Unterzeichner", signerNamesLabel: "Unterzeichner",
    validityLabel: "Gültigkeit des Zertifikats", properties: ["Zuletzt geändert", "Autor", "Erstellt", "Geändert", "Anwendung", "PDF-Erzeuger", "Seitengröße"],
    newLabel: "Neu", allReleases: "Alle Versionen", versionLabel: "Version", container: "P7M-Container",
    project: "Projekt", preview: "Vorschau von {name}", nestedSignatures: "Die Datei enthält zu viele verschachtelte Signaturen",
    signerUnknown: "Unterzeichner nicht angegeben", socialImageAlt: "P7M Reader. P7M-Dateien lokal öffnen und Inhalte extrahieren. Kein Upload, kein Konto.",
  },
  "pt-BR": {
    signatureInfo: "Informações da assinatura", warningTitle: "Atenção: a assinatura não é verificada.",
    warning: "O P7M Reader extrai o documento e mostra os dados legíveis do certificado. Não verifica integridade, revogação, carimbos de tempo nem validade jurídica. Não use essas informações como prova de autenticidade.",
    noPreview: "Pré-visualização indisponível. Você pode baixar o conteúdo extraído.", demoError: "Não foi possível carregar o arquivo de demonstração",
    invalid: "não parece ser um arquivo P7M válido ou está danificado", noDocument: "a assinatura não contém um documento incorporado",
    empty: "o arquivo está vazio", extension: "selecione um arquivo com a extensão .p7m",
    opening: "Abrindo {count} arquivo…", openingMany: "Abrindo {count} arquivos…",
    failed: "{count} arquivo não pôde ser aberto", failedMany: "{count} arquivos não puderam ser abertos",
    signer: "signatário", signers: "signatários", noCertificate: "Nenhum certificado legível", unavailable: "Indisponível",
    viewer: "Visualizador P7M", results: "Arquivos extraídos", signerCountLabel: "Número de signatários", signerNamesLabel: "Signatários",
    validityLabel: "Validade do certificado", properties: ["Última modificação do arquivo", "Autor", "Criado em", "Modificado em", "Aplicativo", "Produtor do PDF", "Tamanho da página"],
    newLabel: "Novo", allReleases: "Todas as versões", versionLabel: "Versão", container: "Contêiner P7M",
    project: "Projeto", preview: "Pré-visualização de {name}", nestedSignatures: "O arquivo contém assinaturas aninhadas demais",
    signerUnknown: "Signatário não informado", socialImageAlt: "P7M Reader. Abra arquivos P7M e extraia o conteúdo localmente. Sem upload, sem conta.",
  },
  id: {
    signatureInfo: "Informasi tanda tangan", warningTitle: "Perhatian: tanda tangan tidak diverifikasi.",
    warning: "P7M Reader mengekstrak dokumen dan menampilkan data sertifikat yang dapat dibaca. Aplikasi ini tidak memeriksa integritas, pencabutan, stempel waktu, atau keabsahan hukum. Jangan gunakan informasi ini sebagai bukti keaslian.",
    noPreview: "Pratinjau tidak tersedia. Anda dapat mengunduh konten hasil ekstraksi.", demoError: "File demo tidak dapat dimuat",
    invalid: "tampaknya bukan file P7M yang valid atau file rusak", noDocument: "tanda tangan tidak berisi dokumen tertanam",
    empty: "file kosong", extension: "pilih file dengan ekstensi .p7m",
    opening: "Membuka {count} file…", openingMany: "Membuka {count} file…",
    failed: "{count} file tidak dapat dibuka", failedMany: "{count} file tidak dapat dibuka",
    signer: "penanda tangan", signers: "penanda tangan", noCertificate: "Tidak ada sertifikat yang dapat dibaca", unavailable: "Tidak tersedia",
    viewer: "Penampil P7M", results: "File hasil ekstraksi", signerCountLabel: "Jumlah penanda tangan", signerNamesLabel: "Penanda tangan",
    validityLabel: "Masa berlaku sertifikat", properties: ["Terakhir diubah", "Penulis", "Dibuat", "Diubah", "Aplikasi", "Produsen PDF", "Ukuran halaman"],
    newLabel: "Baru", allReleases: "Semua rilis", versionLabel: "Versi", container: "Kontainer P7M",
    project: "Proyek", preview: "Pratinjau {name}", nestedSignatures: "File berisi terlalu banyak tanda tangan bertingkat",
    signerUnknown: "Penanda tangan tidak diketahui", socialImageAlt: "P7M Reader. Buka file P7M dan ekstrak isinya secara lokal. Tanpa unggahan atau akun.",
  },
  vi: {
    signatureInfo: "Thông tin chữ ký", warningTitle: "Lưu ý: chữ ký chưa được xác minh.",
    warning: "P7M Reader trích xuất tài liệu và hiển thị dữ liệu chứng thư có thể đọc được. Công cụ không kiểm tra tính toàn vẹn, trạng thái thu hồi, dấu thời gian hay giá trị pháp lý. Không dùng thông tin này làm bằng chứng xác thực.",
    noPreview: "Không thể xem trước. Bạn có thể tải nội dung đã trích xuất.", demoError: "Không thể tải tệp mẫu",
    invalid: "có vẻ không phải tệp P7M hợp lệ hoặc tệp đã bị hỏng", noDocument: "chữ ký không chứa tài liệu được nhúng",
    empty: "tệp trống", extension: "chọn tệp có phần mở rộng .p7m",
    opening: "Đang mở {count} tệp…", openingMany: "Đang mở {count} tệp…",
    failed: "Không thể mở {count} tệp", failedMany: "Không thể mở {count} tệp",
    signer: "người ký", signers: "người ký", noCertificate: "Không có chứng thư đọc được", unavailable: "Không có sẵn",
    viewer: "Trình xem P7M", results: "Tệp đã trích xuất", signerCountLabel: "Số người ký", signerNamesLabel: "Người ký",
    validityLabel: "Thời hạn hiệu lực của chứng thư", properties: ["Lần sửa đổi gần nhất", "Tác giả", "Ngày tạo", "Ngày sửa đổi", "Ứng dụng", "Trình tạo PDF", "Kích thước trang"],
    newLabel: "Mới", allReleases: "Tất cả bản phát hành", versionLabel: "Phiên bản", container: "Tệp chứa P7M",
    project: "Dự án", preview: "Bản xem trước của {name}", nestedSignatures: "Tệp chứa quá nhiều chữ ký lồng nhau",
    signerUnknown: "Không rõ người ký", socialImageAlt: "P7M Reader. Mở tệp P7M và trích xuất nội dung ngay trên thiết bị. Không tải lên, không cần tài khoản.",
  },
  es: {
    signatureInfo: "Información de la firma", warningTitle: "Aviso: la firma no se verifica.",
    warning: "P7M Reader extrae el documento y muestra los datos legibles del certificado. No comprueba la integridad, la revocación, las marcas de tiempo ni la validez legal. No uses estos datos como prueba de autenticidad.",
    noPreview: "Vista previa no disponible. Puedes descargar el contenido extraído.", demoError: "No se pudo cargar el archivo de ejemplo",
    invalid: "no parece ser un archivo P7M válido o está dañado", noDocument: "la firma no contiene ningún documento integrado",
    empty: "el archivo está vacío", extension: "elige un archivo con la extensión .p7m",
    opening: "Abriendo {count} archivo…", openingMany: "Abriendo {count} archivos…",
    failed: "No se pudo abrir {count} archivo", failedMany: "No se pudieron abrir {count} archivos",
    signer: "firmante", signers: "firmantes", noCertificate: "No hay ningún certificado legible", unavailable: "No disponible",
    viewer: "Visor P7M", results: "Archivos extraídos", signerCountLabel: "Número de firmantes", signerNamesLabel: "Firmantes",
    validityLabel: "Validez del certificado", properties: ["Última modificación", "Autor", "Creado", "Modificado", "Aplicación", "Productor del PDF", "Tamaño de página"],
    newLabel: "Nuevo", allReleases: "Todas las versiones", versionLabel: "Versión", container: "Contenedor P7M",
    project: "Proyecto", preview: "Vista previa de {name}", nestedSignatures: "El archivo contiene demasiadas firmas anidadas",
    signerUnknown: "Firmante no identificado", socialImageAlt: "P7M Reader. Abre archivos P7M y extrae su contenido localmente. Sin subidas ni cuentas.",
  },
  ja: {
    signatureInfo: "署名情報", warningTitle: "注意：署名は検証されていません。",
    warning: "P7M Readerは文書を抽出し、読み取り可能な証明書データを表示します。署名の完全性、失効、タイムスタンプ、法的有効性は検証しません。この情報を真正性の証明として使用しないでください。",
    noPreview: "プレビューできません。抽出した内容をダウンロードできます。", demoError: "デモファイルを読み込めませんでした",
    invalid: "有効なP7Mファイルではないか、破損しているようです", noDocument: "署名に埋め込み文書が含まれていません",
    empty: "ファイルが空です", extension: "拡張子が.p7mのファイルを選択してください",
    opening: "{count}個のファイルを開いています…", openingMany: "{count}個のファイルを開いています…",
    failed: "{count}個のファイルを開けませんでした", failedMany: "{count}個のファイルを開けませんでした",
    signer: "署名者", signers: "署名者", noCertificate: "読み取り可能な証明書がありません", unavailable: "利用できません",
    viewer: "P7Mビューアー", results: "抽出したファイル", signerCountLabel: "署名者数", signerNamesLabel: "署名者",
    validityLabel: "証明書の有効期間", properties: ["最終更新日時", "作成者", "作成日時", "更新日時", "アプリケーション", "PDF作成ソフト", "ページサイズ"],
    newLabel: "新着", allReleases: "すべてのリリース", versionLabel: "バージョン", container: "P7Mコンテナ",
    project: "プロジェクト", preview: "{name}のプレビュー", nestedSignatures: "ファイルに含まれる署名の入れ子が多すぎます",
    signerUnknown: "署名者不明", socialImageAlt: "P7M Reader。P7Mファイルを開いて内容を端末内で抽出します。アップロードやアカウントは不要です。",
  },
  "pt-PT": {
    signatureInfo: "Informações sobre a assinatura", warningTitle: "Atenção: a assinatura não é verificada.",
    warning: "O P7M Reader extrai o documento e apresenta os dados legíveis do certificado. Não verifica a integridade, a revogação, as marcas temporais nem a validade jurídica. Não utilize estas informações como prova de autenticidade.",
    noPreview: "Pré-visualização indisponível. Pode descarregar o conteúdo extraído.", demoError: "Não foi possível carregar o ficheiro de demonstração",
    invalid: "não parece ser um ficheiro P7M válido ou está danificado", noDocument: "a assinatura não contém um documento incorporado",
    empty: "o ficheiro está vazio", extension: "selecione um ficheiro com a extensão .p7m",
    opening: "A abrir {count} ficheiro…", openingMany: "A abrir {count} ficheiros…",
    failed: "Não foi possível abrir {count} ficheiro", failedMany: "Não foi possível abrir {count} ficheiros",
    signer: "signatário", signers: "signatários", noCertificate: "Não existe nenhum certificado legível", unavailable: "Indisponível",
    viewer: "Visualizador P7M", results: "Ficheiros extraídos", signerCountLabel: "Número de signatários", signerNamesLabel: "Signatários",
    validityLabel: "Validade do certificado", properties: ["Última modificação", "Autor", "Criado em", "Modificado em", "Aplicação", "Produtor do PDF", "Tamanho da página"],
    newLabel: "Novo", allReleases: "Todas as versões", versionLabel: "Versão", container: "Contentor P7M",
    project: "Projeto", preview: "Pré-visualização de {name}", nestedSignatures: "O ficheiro contém demasiadas assinaturas aninhadas",
    signerUnknown: "Signatário não indicado", socialImageAlt: "P7M Reader. Abra ficheiros P7M e extraia o conteúdo localmente. Sem carregamentos nem conta.",
  },
  fr: {
    signatureInfo: "Informations sur la signature", warningTitle: "Attention : la signature n’est pas vérifiée.",
    warning: "P7M Reader extrait le document et affiche les données lisibles du certificat. Il ne vérifie ni l’intégrité, ni la révocation, ni les horodatages, ni la validité juridique. N’utilisez pas ces informations comme preuve d’authenticité.",
    noPreview: "Aucun aperçu disponible. Vous pouvez télécharger le contenu extrait.", demoError: "Impossible de charger le fichier de démonstration",
    invalid: "ne semble pas être un fichier P7M valide ou est endommagé", noDocument: "la signature ne contient aucun document intégré",
    empty: "le fichier est vide", extension: "choisissez un fichier avec l’extension .p7m",
    opening: "Ouverture de {count} fichier…", openingMany: "Ouverture de {count} fichiers…",
    failed: "Impossible d’ouvrir {count} fichier", failedMany: "Impossible d’ouvrir {count} fichiers",
    signer: "signataire", signers: "signataires", noCertificate: "Aucun certificat lisible", unavailable: "Indisponible",
    viewer: "Lecteur P7M", results: "Fichiers extraits", signerCountLabel: "Nombre de signataires", signerNamesLabel: "Signataires",
    validityLabel: "Validité du certificat", properties: ["Dernière modification", "Auteur", "Créé le", "Modifié le", "Application", "Producteur PDF", "Taille de page"],
    newLabel: "Nouveau", allReleases: "Toutes les versions", versionLabel: "Version", container: "Conteneur P7M",
    project: "Projet", preview: "Aperçu de {name}", nestedSignatures: "Le fichier contient trop de signatures imbriquées",
    signerUnknown: "Signataire non identifié", socialImageAlt: "P7M Reader. Ouvrez des fichiers P7M et extrayez leur contenu localement. Aucun envoi, aucun compte.",
  },
  nl: {
    signatureInfo: "Handtekeninggegevens", warningTitle: "Let op: de handtekening is niet gecontroleerd.",
    warning: "P7M Reader pakt het document uit en toont leesbare certificaatgegevens. De integriteit, intrekking, tijdstempels en juridische geldigheid worden niet gecontroleerd. Gebruik deze informatie niet als bewijs van echtheid.",
    noPreview: "Voorbeeld niet beschikbaar. U kunt de uitgepakte inhoud downloaden.", demoError: "Het demobestand kon niet worden geladen",
    invalid: "lijkt geen geldig P7M-bestand te zijn of is beschadigd", noDocument: "de handtekening bevat geen ingesloten document",
    empty: "het bestand is leeg", extension: "kies een bestand met de extensie .p7m",
    opening: "Bezig met openen van {count} bestand…", openingMany: "Bezig met openen van {count} bestanden…",
    failed: "{count} bestand kon niet worden geopend", failedMany: "{count} bestanden konden niet worden geopend",
    signer: "ondertekenaar", signers: "ondertekenaars", noCertificate: "Geen leesbaar certificaat", unavailable: "Niet beschikbaar",
    viewer: "P7M-weergave", results: "Uitgepakte bestanden", signerCountLabel: "Aantal ondertekenaars", signerNamesLabel: "Ondertekenaars",
    validityLabel: "Geldigheid van het certificaat", properties: ["Laatst gewijzigd", "Auteur", "Aangemaakt", "Gewijzigd", "Toepassing", "PDF-producent", "Paginagrootte"],
    newLabel: "Nieuw", allReleases: "Alle versies", versionLabel: "Versie", container: "P7M-container",
    project: "Project", preview: "Voorbeeld van {name}", nestedSignatures: "Het bestand bevat te veel geneste handtekeningen",
    signerUnknown: "Ondertekenaar onbekend", socialImageAlt: "P7M Reader. Open P7M-bestanden en pak de inhoud lokaal uit. Geen upload of account.",
  },
  pl: {
    signatureInfo: "Informacje o podpisie", warningTitle: "Uwaga: podpis nie jest weryfikowany.",
    warning: "P7M Reader wyodrębnia dokument i wyświetla czytelne dane certyfikatu. Nie weryfikuje integralności, unieważnienia, znaczników czasu ani ważności prawnej. Nie używaj tych informacji jako dowodu autentyczności.",
    noPreview: "Podgląd jest niedostępny. Możesz pobrać wyodrębnioną zawartość.", demoError: "Nie udało się wczytać pliku demonstracyjnego",
    invalid: "to nieprawidłowy lub uszkodzony plik P7M", noDocument: "podpis nie zawiera osadzonego dokumentu",
    empty: "plik jest pusty", extension: "wybierz plik z rozszerzeniem .p7m",
    opening: "Otwieranie {count} pliku…", openingMany: "Otwieranie {count} plików…",
    failed: "Nie udało się otworzyć {count} pliku", failedMany: "Nie udało się otworzyć {count} plików",
    signer: "podpisujący", signers: "podpisujący", noCertificate: "Brak czytelnego certyfikatu", unavailable: "Niedostępne",
    viewer: "Przeglądarka P7M", results: "Wyodrębnione pliki", signerCountLabel: "Liczba podpisujących", signerNamesLabel: "Podpisujący",
    validityLabel: "Ważność certyfikatu", properties: ["Ostatnia modyfikacja", "Autor", "Utworzono", "Zmodyfikowano", "Aplikacja", "Producent PDF", "Rozmiar strony"],
    newLabel: "Nowość", allReleases: "Wszystkie wydania", versionLabel: "Wersja", container: "Kontener P7M",
    project: "Projekt", preview: "Podgląd: {name}", nestedSignatures: "Plik zawiera zbyt wiele zagnieżdżonych podpisów",
    signerUnknown: "Nieznany podpisujący", socialImageAlt: "P7M Reader. Otwieraj pliki P7M i wyodrębniaj ich zawartość lokalnie. Bez wysyłania i konta.",
  },
  uk: {
    signatureInfo: "Відомості про підпис", warningTitle: "Увага: підпис не перевіряється.",
    warning: "P7M Reader видобуває документ і показує читабельні дані сертифіката. Цілісність, відкликання, часові позначки та юридична чинність не перевіряються. Не використовуйте ці дані як доказ справжності.",
    noPreview: "Попередній перегляд недоступний. Ви можете завантажити видобутий вміст.", demoError: "Не вдалося завантажити демонстраційний файл",
    invalid: "це не схоже на справжній файл P7M або файл пошкоджено", noDocument: "підпис не містить вбудованого документа",
    empty: "файл порожній", extension: "виберіть файл із розширенням .p7m",
    opening: "Відкриваємо {count} файл…", openingMany: "Відкриваємо {count} файли…",
    failed: "Не вдалося відкрити {count} файл", failedMany: "Не вдалося відкрити {count} файлів",
    signer: "підписант", signers: "підписантів", noCertificate: "Немає читабельного сертифіката", unavailable: "Недоступно",
    viewer: "Переглядач P7M", results: "Видобуті файли", signerCountLabel: "Кількість підписантів", signerNamesLabel: "Підписанти",
    validityLabel: "Строк дії сертифіката", properties: ["Час останньої зміни", "Автор", "Створено", "Змінено", "Застосунок", "Виробник PDF", "Розмір сторінки"],
    newLabel: "Нове", allReleases: "Усі версії", versionLabel: "Версія", container: "Контейнер P7M",
    project: "Проєкт", preview: "Попередній перегляд: {name}", nestedSignatures: "Файл містить забагато вкладених підписів",
    signerUnknown: "Підписанта не вказано", socialImageAlt: "P7M Reader. Відкривайте файли P7M і видобувайте вміст локально. Без завантаження на сервер і облікового запису.",
  },
  ru: {
    signatureInfo: "Сведения о подписи", warningTitle: "Внимание: подпись не проверяется.",
    warning: "P7M Reader извлекает документ и показывает читаемые данные сертификата. Целостность, отзыв, временные метки и юридическая действительность не проверяются. Не используйте эти сведения как доказательство подлинности.",
    noPreview: "Предварительный просмотр недоступен. Вы можете скачать извлечённое содержимое.", demoError: "Не удалось загрузить демонстрационный файл",
    invalid: "файл не похож на допустимый P7M или повреждён", noDocument: "подпись не содержит встроенного документа",
    empty: "файл пуст", extension: "выберите файл с расширением .p7m",
    opening: "Открываем {count} файл…", openingMany: "Открываем {count} файлов…",
    failed: "Не удалось открыть {count} файл", failedMany: "Не удалось открыть {count} файлов",
    signer: "подписант", signers: "подписанты", noCertificate: "Нет читаемого сертификата", unavailable: "Недоступно",
    viewer: "Просмотр P7M", results: "Извлечённые файлы", signerCountLabel: "Количество подписантов", signerNamesLabel: "Подписанты",
    validityLabel: "Срок действия сертификата", properties: ["Дата изменения", "Автор", "Создано", "Изменено", "Приложение", "Создатель PDF", "Размер страницы"],
    newLabel: "Новое", allReleases: "Все версии", versionLabel: "Версия", container: "Контейнер P7M",
    project: "Проект", preview: "Предварительный просмотр: {name}", nestedSignatures: "Файл содержит слишком много вложенных подписей",
    signerUnknown: "Подписант не указан", socialImageAlt: "P7M Reader. Открывайте файлы P7M и извлекайте содержимое локально. Без загрузки на сервер и учётной записи.",
  },
};

const withLocaleUi = (code: string, copy: Copy): Copy => ({
  ...copy,
  ...(localizedUi[code] ?? {}),
  faqs: localizedFaqs[code] ? [...localizedFaqs[code], ...copy.faqs] : copy.faqs,
});

export const locales: Locale[] = [
  { code: "en", segment: "", slug: "", path: "/", name: "English", ogLocale: "en_US", copy: en },
  { code: "de", segment: "de", slug: "p7m-datei-oeffnen", path: "/de/p7m-datei-oeffnen/", name: "Deutsch", ogLocale: "de_DE", copy: withLocaleUi("de", de) },
  { code: "pt-BR", segment: "pt-br", slug: "abrir-arquivo-p7m", path: "/pt-br/abrir-arquivo-p7m/", name: "Português (Brasil)", ogLocale: "pt_BR", copy: withLocaleUi("pt-BR", ptBR) },
  { code: "id", segment: "id", slug: "buka-file-p7m", path: "/id/buka-file-p7m/", name: "Bahasa Indonesia", ogLocale: "id_ID", copy: withLocaleUi("id", id) },
  { code: "vi", segment: "vi", slug: "mo-file-p7m", path: "/vi/mo-file-p7m/", name: "Tiếng Việt", ogLocale: "vi_VN", copy: withLocaleUi("vi", vi) },
  { code: "es", segment: "es", slug: "abrir-archivo-p7m", path: "/es/abrir-archivo-p7m/", name: "Español", ogLocale: "es_ES", copy: withLocaleUi("es", es) },
  { code: "ja", segment: "ja", slug: "p7m-file-open", path: "/ja/p7m-file-open/", name: "日本語", ogLocale: "ja_JP", copy: withLocaleUi("ja", ja) },
  { code: "it", segment: "it", slug: "apri-file-p7m", path: "/it/apri-file-p7m/", name: "Italiano", ogLocale: "it_IT", copy: it },
  { code: "pt-PT", segment: "pt", slug: "abrir-ficheiro-p7m", path: "/pt/abrir-ficheiro-p7m/", name: "Português", ogLocale: "pt_PT", copy: withLocaleUi("pt-PT", ptPT) },
  { code: "fr", segment: "fr", slug: "ouvrir-fichier-p7m", path: "/fr/ouvrir-fichier-p7m/", name: "Français", ogLocale: "fr_FR", copy: withLocaleUi("fr", fr) },
  { code: "nl", segment: "nl", slug: "p7m-bestand-openen", path: "/nl/p7m-bestand-openen/", name: "Nederlands", ogLocale: "nl_NL", copy: withLocaleUi("nl", nl) },
  { code: "pl", segment: "pl", slug: "otworz-plik-p7m", path: "/pl/otworz-plik-p7m/", name: "Polski", ogLocale: "pl_PL", copy: withLocaleUi("pl", pl) },
  { code: "uk", segment: "uk", slug: "vidkryty-fail-p7m", path: "/uk/vidkryty-fail-p7m/", name: "Українська", ogLocale: "uk_UA", copy: withLocaleUi("uk", uk) },
  { code: "ru", segment: "ru", slug: "otkryt-fail-p7m", path: "/ru/otkryt-fail-p7m/", name: "Русский", ogLocale: "ru_RU", copy: withLocaleUi("ru", ru) },
];

export const defaultLocale = locales[0];
export const translatedLocales = locales.slice(1);
