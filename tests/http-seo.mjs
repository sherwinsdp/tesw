import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const base = process.env.BASE_URL || "http://127.0.0.1:3001";
const indexable = process.env.EXPECT_INDEXABLE === "true";
const res = await fetch(base);
assert.equal(res.status, 200);
const html = await res.text();
// Remove executable RSC/client payloads before proving content exists as HTML.
const page = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
assert.equal((page.match(/<h1\b/g) || []).length, 1);
assert.equal((page.match(/rel="canonical"/g) || []).length, 1);
assert.equal(
  new URL(page.match(/<link rel="canonical" href="([^"]+)"/)?.[1]).href,
  "https://makanhati.my.id/",
);
assert.ok(page.includes('<html lang="id"'));
assert.ok(
  page.includes("Catering Harian Jakarta Selatan Sesuai Selera | MakanHati"),
);
const robotsMeta = page.match(/<meta name="robots"[^>]+>/)?.[0] || "";
assert.ok(
  robotsMeta.includes(
    indexable ? 'content="index, follow"' : 'content="noindex, nofollow"',
  ),
  robotsMeta,
);
assert.equal(
  new URL(page.match(/<meta property="og:url" content="([^"]+)"/)?.[1]).href,
  "https://makanhati.my.id/",
);
assert.ok(page.includes('property="og:image"'));
assert.ok(page.includes('name="twitter:card" content="summary_large_image"'));
const menu = JSON.parse(
  await readFile(new URL("../src/data/menu.json", import.meta.url), "utf8"),
);
for (const m of menu) {
  assert.ok(page.includes(m.name), m.name);
  assert.ok(page.includes(m.description), m.description);
}
assert.equal((page.match(/class="menu-column"/g) || []).length, 15);
assert.equal((page.match(/class="menu-grid"/g) || []).length, 5);
assert.equal((page.match(/id="signup-form"/g) || []).length, 1);
assert.equal((page.match(/data-registration-cta/g) || []).length, 4);
assert.ok(page.includes("Rp660.000"));
assert.ok(!page.includes("Rp640.000"));
assert.ok(!page.includes("Pilihanmu:"));
const structured = JSON.parse(
  html.match(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
  )?.[1] || "{}",
);
assert.deepEqual(
  structured["@graph"].map((x) => x["@type"]),
  ["Organization", "WebSite"],
);
assert.ok(!JSON.stringify(structured).includes("openingHours"));
const robots = await fetch(base + "/robots.txt").then((r) => r.text());
const sitemap = await fetch(base + "/sitemap.xml").then((r) => r.text());
if (indexable) {
  assert.ok(robots.includes("Allow: /"));
  assert.ok(robots.includes("Disallow: /api/"));
  assert.ok(robots.includes("Sitemap: https://makanhati.my.id/sitemap.xml"));
  assert.ok(sitemap.includes("<loc>https://makanhati.my.id/</loc>"));
} else {
  assert.ok(robots.includes("Disallow: /"));
  assert.ok(!sitemap.includes("<loc>"));
}
for (const slug of ["kebijakan-privasi", "syarat-layanan"]) {
  const r = await fetch(base + "/" + slug);
  assert.equal(r.status, 200);
  const text = await r.text();
  assert.ok(text.includes("noindex"));
  assert.ok(text.includes(`href="https://makanhati.my.id/${slug}"`));
}
assert.equal((await fetch(base + "/halaman-tidak-ada")).status, 404);
const api = await fetch(base + "/api/registrations");
assert.equal(api.status, 405);
assert.ok(api.headers.get("x-robots-tag")?.includes("noindex"));
const invalid = await fetch(base + "/api/registrations", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Idempotency-Key": crypto.randomUUID(),
  },
  body: JSON.stringify({
    customerName: "A",
    instagramUsername: "bad",
    consent: false,
    website: "",
  }),
});
assert.equal(invalid.status, process.env.API_DISABLED === "true" ? 503 : 422);
const failed = await invalid.json();
assert.notEqual(failed.success, true);
assert.notEqual(failed.persisted, true);
const urls = new Set(
  [...page.matchAll(/(?:src|href)="(\/[^"#]+)"/g)].map((x) => x[1]),
);
for (const url of urls) {
  const r = await fetch(base + url);
  assert.equal(r.status, 200, url);
  await r.arrayBuffer();
}
assert.equal((await fetch(base + "/data/registrations/")).status, 404);
console.log(
  JSON.stringify(
    {
      passed: true,
      base,
      htmlBytes: html.length,
      indexable,
      serverRenderedMeals: menu.length,
      h1: 1,
      canonical: "https://makanhati.my.id/",
      verifiedLocalUrls: urls.size,
      apiStorageDisabled: process.env.API_DISABLED === "true",
    },
    null,
    2,
  ),
);
