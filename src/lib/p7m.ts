import forge from "node-forge";

type AsnNode = { value?: string | AsnNode[] };

export type P7mCertificate = {
  subject: { getField: (name: string) => { value?: string } | null };
  validity: { notBefore: Date; notAfter: Date };
};

export type P7mContent = {
  type: string;
  ext: string;
  label: string;
};

const readOctets = (node?: AsnNode): string => {
  if (!node) return "";
  if (typeof node.value === "string") return node.value;
  return node.value?.map(readOctets).join("") ?? "";
};

const arrayBufferFrom = (bytes: Uint8Array) => new Uint8Array(bytes).buffer;

const parseMessage = (bytes: Uint8Array) =>
  forge.pkcs7.messageFromAsn1(
    forge.asn1.fromDer(forge.util.createBuffer(arrayBufferFrom(bytes))),
  );

export const unpackP7m = (inputBytes: Uint8Array) => {
  let bytes = inputBytes;
  const certificates: P7mCertificate[] = [];

  for (let depth = 0; depth < 5; depth++) {
    const message = parseMessage(bytes);
    certificates.push(
      ...((message as typeof message & { certificates?: P7mCertificate[] })
        .certificates ?? []),
    );
    const rawContent = message.content;
    const content = (
      typeof rawContent === "string" ? rawContent : rawContent?.getBytes()
    ) || readOctets(
      (message as typeof message & { rawCapture?: { content?: AsnNode } })
        .rawCapture?.content,
    );

    if (!content) throw new Error("Documento contenuto non trovato");
    bytes = Uint8Array.from(content, (char) => char.charCodeAt(0));

    try {
      parseMessage(bytes);
    } catch {
      return { bytes, certificates };
    }
  }

  throw new Error("Il file contiene troppe firme annidate");
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
