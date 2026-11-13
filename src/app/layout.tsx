import type { Metadata, Viewport } from "next";
import { seo, title, description } from "@/lib/seo";
import "./base.css";

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title,
  description,
  alternates: { canonical: `${seo.siteUrl}/` },
  robots: {
    index: seo.indexable,
    follow: seo.indexable,
    googleBot: {
      index: seo.indexable,
      follow: seo.indexable,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "MakanHati",
    title,
    description,
    url: `${seo.siteUrl}/`,
    images: [
      {
        url: "/assets/hero/menu-showcase.webp",
        alt: "Ilustrasi tiga pilihan rasa menu MakanHati",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/hero/menu-showcase.webp"],
  },
  icons: {
    icon: { url: "/assets/brand/makanhati-logo.webp", type: "image/webp" },
    apple: "/assets/brand/makanhati-logo.png",
  },
  manifest: "/site.webmanifest",
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#811b32",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/fonts/07c7676b89ed2778-s.p.2bn3s6zvc0dyp.woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/fonts/9d036f80216c14ee-s.p.3u4lli0-axodc.woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/hero/menu-showcase.webp"
          fetchPriority="high"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
