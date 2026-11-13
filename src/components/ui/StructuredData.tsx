import { seo } from "@/lib/seo";

export default function StructuredData() {
  // Only owner-verified identity. No fabricated address, opening hours,
  // reviews, certifications, live availability or checkout offers.
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${seo.siteUrl}/#organization`,
        name: "MakanHati",
        url: `${seo.siteUrl}/`,
        logo: `${seo.siteUrl}/assets/brand/makanhati-logo.webp`,
        email: "info.makanhati@gmail.com",
        sameAs: [
          "https://www.instagram.com/makanhati.catering",
          "https://www.facebook.com/profile.php?id=61596128536440",
          "https://www.linkedin.com/company/makanhati-catering/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${seo.siteUrl}/#website`,
        name: "MakanHati",
        url: `${seo.siteUrl}/`,
        inLanguage: "id-ID",
        publisher: { "@id": `${seo.siteUrl}/#organization` },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
