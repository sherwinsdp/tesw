import type { MetadataRoute } from "next";
import { getSitemapEntries } from "@/lib/seo-config.mjs";
export default function sitemap(): MetadataRoute.Sitemap {
  return getSitemapEntries() as MetadataRoute.Sitemap;
}
