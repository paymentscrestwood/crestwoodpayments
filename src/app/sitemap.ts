import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/* Tells Google which pages exist. Submit this to Search Console:
   https://crestwoodpayments.ca/sitemap.xml */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;
  const routes = [
    "",
    "/solutions",
    "/pricing",
    "/calculator",
    "/about",
    "/contact",
    "/apply",
  ];
  return routes.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
