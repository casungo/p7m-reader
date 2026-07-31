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
  metaTitle: "P7M Reader – Open and extract P7M files online",
  metaDescription: "Open and extract P7M files locally in your browser. No upload and no account: the document stays on your device.",
  heroTitle: "Read a P7M file. Your document stays yours.",
  intro: "View the contents of a .p7m file directly in your browser. PDFs, XML and images stay on your device.",
  choose: "Choose a P7M file", demo: "Try a demo file", drop: "Or drag and drop the file here", download: "Download document",
  how: "How it works",
  steps: ["Choose the P7M file|Select it or drag it from your device.", "View the content|We open the embedded document locally.", "Download the document|Save the extracted content with one click."],
  benefits: ["Private: no file is uploaded.", "Fast: no account or waiting.", "Compatible: PDF, XML, PNG, JPEG and GIF.", "Offline: works without a connection."],
  faqTitle: "FAQ and limitations",
  faqs: [
    { question: "Are files uploaded to a server?", answer: "No. Reading, extraction and preview happen in the browser. We record only anonymous success or error events, never file names or contents." },
    { question: "Does it verify the legal validity of the signature?", answer: "No. It displays readable certificate data but does not verify integrity, revocation, timestamps or legal validity." },
    { question: "Which contents can I preview?", answer: "PDF, XML, PNG, JPEG and GIF images. Other contents can be extracted and downloaded as binary files." },
    { question: "Does it work offline?", answer: "Yes. After the first visit, the service can be reopened offline in the same browser." },
  ],
  source: "Source code", donate: "Support the creator", theme: "Change theme", change: "Change file", close: "Close",
  signatureInfo: "Signature information", warningTitle: "Warning: the signature is not verified.",
  warning: "P7M Reader extracts the document and shows readable certificate data. It does not check integrity, revocation, timestamps or legal validity: do not use this information as proof of authenticity.",
  noPreview: "Preview unavailable. You can download the extracted content.", demoError: "Unable to load the demo file",
  invalid: "it does not appear to be a valid P7M file or it is damaged", noDocument: "the signature contains no embedded document",
  empty: "the file is empty", extension: "choose a file with a .p7m extension", opening: "Opening", failed: "file could not be opened",
  signer: "signer", signers: "signers", noCertificate: "No readable certificate", unavailable: "Unavailable",
  viewer: "P7M viewer", results: "Extracted files", signerCountLabel: "Number of signers", signerNamesLabel: "Signers",
  validityLabel: "Certificate validity", properties: ["File last modified", "Author", "Created", "Modified", "Application", "PDF producer", "Page size"],
  newLabel: "New", allReleases: "All releases", versionLabel: "Version",
  container: "P7M container",
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
  empty: "die Datei ist leer", extension: "eine Datei mit der Endung .p7m auswählen", opening: "Öffne", failed: "Datei konnte nicht geöffnet werden", signer: "Unterzeichner", signers: "Unterzeichner", noCertificate: "Kein lesbares Zertifikat", unavailable: "Nicht verfügbar",
  viewer: "P7M-Anzeige", results: "Extrahierte Dateien", signerCountLabel: "Anzahl der Unterzeichner", signerNamesLabel: "Unterzeichner",
  validityLabel: "Zertifikatsgültigkeit", properties: ["Datei zuletzt geändert", "Autor", "Erstellt", "Geändert", "Anwendung", "PDF-Produzent", "Seitengröße"],
  newLabel: "Neu", allReleases: "Alle Versionen", versionLabel: "Version",
  container: "P7M-Container",
};

const it: Copy = {
  ...en,
  metaTitle: "P7M Reader – Apri ed estrai file P7M online", metaDescription: "Apri ed estrai file P7M con P7M Reader. Nessun upload, nessun account: il documento resta sul tuo dispositivo.",
  heroTitle: "Leggi un file P7M. Il documento resta tuo.", intro: "Visualizza il contenuto di un file .p7m direttamente nel browser. PDF, XML e immagini restano sul tuo dispositivo.",
  choose: "Scegli un file P7M", demo: "Prova con un file demo", drop: "Oppure trascina e rilascia qui il file", download: "Scarica documento", how: "Come funziona",
  steps: ["Carica il file P7M|Selezionalo o trascinalo dal dispositivo.", "Visualizza il contenuto|Apriamo localmente il documento incorporato.", "Scarica il documento|Salva il contenuto estratto con un clic."],
  benefits: ["Privato: nessun file viene caricato.", "Veloce: nessun account o attesa.", "Compatibile: PDF, XML, PNG, JPEG e GIF.", "Offline: funziona anche senza connessione."],
  faqTitle: "FAQ e limitazioni",
  faqs: [
    { question: "I file vengono caricati su un server?", answer: "No. Lettura, estrazione e anteprima avvengono nel browser. Registriamo solo eventi anonimi di riuscita o errore, mai nomi o contenuti dei file." },
    { question: "Il servizio verifica la validità legale della firma?", answer: "No. Mostra i dati leggibili dei certificati, ma non verifica integrità, revoca, marca temporale o validità legale della firma." },
    { question: "Quali contenuti posso visualizzare?", answer: "PDF, XML, immagini PNG, JPEG e GIF. Gli altri contenuti possono essere estratti e scaricati come file binario." },
    { question: "Funziona senza connessione?", answer: "Sì, dopo la prima visita il servizio può essere riaperto offline dallo stesso browser." },
  ],
  source: "Codice sorgente", donate: "Dona al creatore", theme: "Cambia tema", change: "Cambia file", close: "Chiudi",
  signatureInfo: "Informazioni sulla firma", warningTitle: "Attenzione: la firma non viene verificata.",
  warning: "P7M Reader estrae il documento e mostra i dati leggibili dei certificati. Non controlla integrità, revoca, marche temporali o validità legale: non usare queste informazioni come prova dell’autenticità del file.",
  noPreview: "Anteprima non disponibile. Puoi scaricare il contenuto estratto.", demoError: "Impossibile caricare il file demo",
  invalid: "non sembra un P7M valido oppure è danneggiato", noDocument: "la firma non contiene un documento incorporato", empty: "il file è vuoto",
  extension: "seleziona un file con estensione .p7m", opening: "Apro", failed: "file non aperto", signer: "firmatario", signers: "firmatari",
  noCertificate: "Nessun certificato leggibile", unavailable: "Non disponibile",
  viewer: "Visualizzatore P7M", results: "File estratti", signerCountLabel: "Numero di firmatari", signerNamesLabel: "Firmatari",
  validityLabel: "Validità certificato", properties: ["Ultima modifica file", "Autore", "Creato il", "Modificato il", "Applicazione", "Produttore PDF", "Dimensioni pagina"],
  newLabel: "Novità", allReleases: "Tutti i rilasci", versionLabel: "Versione",
  container: "Contenitore P7M",
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

export const locales: Locale[] = [
  { code: "en", segment: "", slug: "", path: "/", name: "English", ogLocale: "en_US", copy: en },
  { code: "de", segment: "de", slug: "p7m-datei-oeffnen", path: "/de/p7m-datei-oeffnen/", name: "Deutsch", ogLocale: "de_DE", copy: de },
  { code: "pt-BR", segment: "pt-br", slug: "abrir-arquivo-p7m", path: "/pt-br/abrir-arquivo-p7m/", name: "Português (Brasil)", ogLocale: "pt_BR", copy: ptBR },
  { code: "id", segment: "id", slug: "buka-file-p7m", path: "/id/buka-file-p7m/", name: "Bahasa Indonesia", ogLocale: "id_ID", copy: id },
  { code: "vi", segment: "vi", slug: "mo-file-p7m", path: "/vi/mo-file-p7m/", name: "Tiếng Việt", ogLocale: "vi_VN", copy: vi },
  { code: "es", segment: "es", slug: "abrir-archivo-p7m", path: "/es/abrir-archivo-p7m/", name: "Español", ogLocale: "es_ES", copy: es },
  { code: "ja", segment: "ja", slug: "p7m-file-open", path: "/ja/p7m-file-open/", name: "日本語", ogLocale: "ja_JP", copy: ja },
  { code: "it", segment: "it", slug: "apri-file-p7m", path: "/it/apri-file-p7m/", name: "Italiano", ogLocale: "it_IT", copy: it },
  { code: "pt-PT", segment: "pt", slug: "abrir-ficheiro-p7m", path: "/pt/abrir-ficheiro-p7m/", name: "Português", ogLocale: "pt_PT", copy: ptPT },
  { code: "fr", segment: "fr", slug: "ouvrir-fichier-p7m", path: "/fr/ouvrir-fichier-p7m/", name: "Français", ogLocale: "fr_FR", copy: fr },
  { code: "nl", segment: "nl", slug: "p7m-bestand-openen", path: "/nl/p7m-bestand-openen/", name: "Nederlands", ogLocale: "nl_NL", copy: nl },
  { code: "pl", segment: "pl", slug: "otworz-plik-p7m", path: "/pl/otworz-plik-p7m/", name: "Polski", ogLocale: "pl_PL", copy: pl },
  { code: "uk", segment: "uk", slug: "vidkryty-fail-p7m", path: "/uk/vidkryty-fail-p7m/", name: "Українська", ogLocale: "uk_UA", copy: uk },
  { code: "ru", segment: "ru", slug: "otkryt-fail-p7m", path: "/ru/otkryt-fail-p7m/", name: "Русский", ogLocale: "ru_RU", copy: ru },
];

export const defaultLocale = locales[0];
export const translatedLocales = locales.slice(1);
