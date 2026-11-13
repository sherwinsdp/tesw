import { test } from "node:test";
import assert from "node:assert/strict";
import {
  getSeoConfig,
  getRobotsPolicy,
  getSitemapEntries,
} from "../src/lib/seo-config.mjs";

test("Local and Vercel Preview cannot accidentally index the copied design", () => {
  for (const env of [
    {},
    { NODE_ENV: "development", SEO_INDEXING_ENABLED: "true" },
    {
      NODE_ENV: "production",
      VERCEL_ENV: "preview",
      SEO_INDEXING_ENABLED: "true",
    },
    {
      NODE_ENV: "production",
      VERCEL_ENV: "production",
      SEO_INDEXING_ENABLED: "false",
    },
  ]) {
    assert.equal(getSeoConfig(env).indexable, false);
    assert.equal(getRobotsPolicy(env).rules.disallow, "/");
    assert.deepEqual(getSitemapEntries(env), []);
  }
});
test("Approved production points exclusively to the owner-confirmed domain", () => {
  const env = {
    NODE_ENV: "production",
    VERCEL_ENV: "production",
    SEO_INDEXING_ENABLED: "true",
  };
  assert.equal(getSeoConfig(env).siteUrl, "https://makanhati.my.id");
  assert.equal(getSeoConfig(env).indexable, true);
  assert.equal(
    getRobotsPolicy(env).sitemap,
    "https://makanhati.my.id/sitemap.xml",
  );
  assert.deepEqual(getSitemapEntries(env), [
    { url: "https://makanhati.my.id/", changeFrequency: "weekly", priority: 1 },
  ]);
  assert.ok(getRobotsPolicy(env).rules.disallow.includes("/api/"));
});
test("Draft legal pages remain outside indexing until explicitly approved", () => {
  const env = { NODE_ENV: "production", SEO_INDEXING_ENABLED: "true" };
  assert.equal(getSeoConfig(env).legalApproved, false);
  assert.equal(getSitemapEntries(env).length, 1);
  assert.equal(
    getSitemapEntries({ ...env, LEGAL_PAGES_APPROVED: "true" }).length,
    3,
  );
});
test("Canonical configuration rejects insecure or misleading URL components", () => {
  for (const value of [
    "http://makanhati.my.id",
    "https://makanhati.my.id/folder",
    "https://makanhati.my.id?utm_source=test",
    "https://makanhati.my.id#pesan",
    "https://user:password@makanhati.my.id",
  ]) {
    assert.throws(() => getSeoConfig({ SITE_URL: value }));
  }
});
