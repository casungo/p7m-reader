export type P7mCertificate = {
  name: string;
  notBefore: Date;
  notAfter: Date;
};

export type P7mContent = {
  type: string;
  ext: string;
  label: string;
};

export type PdfMetadata = {
  author?: string;
  created?: Date;
  modified?: Date;
  creator?: string;
  producer?: string;
  dimensions?: string;
};

export const detectP7mContent = (bytes: Uint8Array): P7mContent => {
  const head = new TextDecoder("ascii").decode(bytes.slice(0, 16));
  const text = new TextDecoder().decode(bytes.slice(0, 300)).trimStart();
  if (head.startsWith("%PDF-")) return { type: "application/pdf", ext: "pdf", label: "PDF" };
  if (text.startsWith("<?xml") || /^<[\w:.-]+[\s>]/.test(text)) {
    return { type: "application/xml", ext: "xml", label: "XML" };
  }
  if (head.startsWith("\x89PNG")) return { type: "image/png", ext: "png", label: "Immagine PNG" };
  if (head.startsWith("\xff\xd8\xff")) return { type: "image/jpeg", ext: "jpg", label: "Immagine JPEG" };
  if (head.startsWith("GIF8")) return { type: "image/gif", ext: "gif", label: "Immagine GIF" };
  return { type: "application/octet-stream", ext: "bin", label: "File" };
};

export const extractedName = (name: string, ext: string) => {
  const bare = name.replace(/(\.p7m)+$/gi, "");
  return bare.toLowerCase().endsWith(`.${ext}`) ? bare : `${bare || "documento"}.${ext}`;
};

export const formatFileSize = (bytes: number) => {
  const units = ["byte", "kilobyte", "megabyte", "gigabyte"] as const;
  const unit = Math.min(Math.floor(Math.log(Math.max(bytes, 1)) / Math.log(1024)), units.length - 1);
  return new Intl.NumberFormat("it-IT", {
    style: "unit",
    unit: units[unit],
    maximumFractionDigits: unit ? 1 : 0,
  }).format(bytes / 1024 ** unit);
};

const pdfString = (value: string) => {
  const decoded = value.startsWith("\xfe\xff")
    ? new TextDecoder("utf-16be").decode(Uint8Array.from(value.slice(2), (character) => character.charCodeAt(0)))
    : value;
  return decoded.replace(/\\([\\()])/g, "$1").replace(/\\([nrtbf])/g, (_, escape) =>
    ({ n: "\n", r: "\r", t: "\t", b: "\b", f: "\f" } as Record<string, string>)[escape] ?? escape,
  );
};

const pdfDate = (value?: string) => {
  const match = value?.match(/^D:(\d{4})(\d{2})(\d{2})(\d{2})?(\d{2})?(\d{2})?/);
  if (!match) return undefined;
  const [, year, month, day, hour = "00", minute = "00", second = "00"] = match;
  return new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}`);
};

export const readPdfMetadata = (bytes: Uint8Array): PdfMetadata => {
  const source = new TextDecoder("latin1").decode(bytes);
  const value = (key: string) => {
    const matches = [...source.matchAll(new RegExp(`/${key}\\s*\\(((?:\\\\.|[^\\\\)])*)\\)`, "g"))];
    return matches.at(-1)?.[1] ? pdfString(matches.at(-1)![1]).trim() : undefined;
  };
  const box = source.match(/\/MediaBox\s*\[\s*([\d.-]+)\s+([\d.-]+)\s+([\d.-]+)\s+([\d.-]+)/);
  const width = box ? Math.abs(Number(box[3]) - Number(box[1])) * 25.4 / 72 : 0;
  const height = box ? Math.abs(Number(box[4]) - Number(box[2])) * 25.4 / 72 : 0;

  return {
    author: value("Author"),
    created: pdfDate(value("CreationDate")),
    modified: pdfDate(value("ModDate")),
    creator: value("Creator"),
    producer: value("Producer"),
    dimensions: width && height ? `${Math.round(width)} × ${Math.round(height)} mm` : undefined,
  };
};
