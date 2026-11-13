export function getSeoConfig(env = process.env) {
  const site = new URL(env.SITE_URL || "https://makanhati.my.id");
  if (
    site.protocol !== "https:" ||
    site.username ||
    site.password ||
    site.search ||
    site.hash ||
    site.pathname !== "/"
  ) {
    throw new Error(
      "SITE_URL harus origin HTTPS tanpa path, query, atau kredensial.",
    );
  }
  const indexable =
    env.SEO_INDEXING_ENABLED === "true" &&
    env.NODE_ENV === "production" &&
    env.VERCEL_ENV !== "preview";
  return {
    siteUrl: site.origin,
    indexable,
    legalApproved: env.LEGAL_PAGES_APPROVED === "true",
  };
}

export function getRobotsPolicy(env = process.env) {
  const { siteUrl, indexable, legalApproved } = getSeoConfig(env);
  return indexable
    ? {
        rules: {
          userAgent: "*",
          allow: "/",
          disallow: [
            "/api/",
            ...(legalApproved ? [] : ["/kebijakan-privasi", "/syarat-layanan"]),
          ],
        },
        sitemap: `${siteUrl}/sitemap.xml`,
      }
    : { rules: { userAgent: "*", disallow: "/" } };
}

export function getSitemapEntries(env = process.env) {
  const { siteUrl, indexable, legalApproved } = getSeoConfig(env);
  if (!indexable) return [];
  return [
    { url: `${siteUrl}/`, changeFrequency: "weekly", priority: 1 },
    ...(legalApproved
      ? [
          {
            url: `${siteUrl}/kebijakan-privasi`,
            changeFrequency: "yearly",
            priority: 0.2,
          },
          {
            url: `${siteUrl}/syarat-layanan`,
            changeFrequency: "yearly",
            priority: 0.2,
          },
        ]
      : []),
  ];
}
