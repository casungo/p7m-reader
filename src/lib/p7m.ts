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
