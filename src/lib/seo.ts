import type { Metadata } from "next";
import { getSeoConfig } from "./seo-config.mjs";

export const seo = getSeoConfig();
export const title =
  "Catering Harian Jakarta Selatan Sesuai Selera | MakanHati";
export const description =
  "Segera hadir di Kuningan: menu rumahan dengan pilihan rasa gurih, pedas, atau creamy. Daftar untuk mendapatkan informasi promo launching MakanHati.";

export function legalMetadata(name: string, path: string): Metadata {
  return {
    title: `${name} | MakanHati`,
    alternates: { canonical: `${seo.siteUrl}${path}` },
    robots: {
      index: seo.indexable && seo.legalApproved,
      follow: seo.indexable && seo.legalApproved,
    },
    openGraph: { title: `${name} | MakanHati`, url: `${seo.siteUrl}${path}` },
  };
}
