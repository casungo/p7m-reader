import forge from "node-forge";
import type { P7mCertificate } from "./p7m";

type AsnNode = { value?: string | AsnNode[] };
type ForgeCertificate = {
  subject: { getField: (name: string) => { value?: string } | null };
  validity: { notBefore: Date; notAfter: Date };
};

const readOctets = (node?: AsnNode): string => {
  if (!node) return "";
  if (typeof node.value === "string") return node.value;
  return node.value?.map(readOctets).join("") ?? "";
};

const parseMessage = (bytes: Uint8Array) =>
  forge.pkcs7.messageFromAsn1(
    forge.asn1.fromDer(
      forge.util.createBuffer(new Uint8Array(bytes).buffer),
    ),
  );

export const unpackP7m = (inputBytes: Uint8Array) => {
  let bytes = inputBytes;
  const certificates: P7mCertificate[] = [];

  for (let depth = 0; depth < 5; depth++) {
    const message = parseMessage(bytes);
    const messageCertificates = (
      message as typeof message & { certificates?: ForgeCertificate[] }
    ).certificates ?? [];
    certificates.push(
      ...messageCertificates.map((certificate) => ({
        name:
          certificate.subject.getField("CN")?.value ??
          certificate.subject.getField("O")?.value ??
          "Firmatario non indicato",
        notBefore: certificate.validity.notBefore,
        notAfter: certificate.validity.notAfter,
      })),
    );

    const rawContent = message.content;
    const content =
      (typeof rawContent === "string" ? rawContent : rawContent?.getBytes()) ||
      readOctets(
        (message as typeof message & { rawCapture?: { content?: AsnNode } })
          .rawCapture?.content,
      );
    if (!content) throw new Error("Documento contenuto non trovato");
    bytes = Uint8Array.from(content, (character) => character.charCodeAt(0));

    try {
      parseMessage(bytes);
    } catch {
      return { bytes, certificates };
    }
  }

  throw new Error("Il file contiene troppe firme annidate");
};
