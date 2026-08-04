import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/* Lets search engines crawl the whole site and points them at the sitemap. */
export default function robots(): MetadataRoute.Robots {
  const base = `https://${site.domain}`;
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
