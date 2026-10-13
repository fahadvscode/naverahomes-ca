import type { MetadataRoute } from "next";
import { LAST_UPDATED, SITE_URL } from "@/lib/content";

const routes = [
  "",
  "/floor-plans",
  "/pricing",
  "/location",
  "/gallery",
  "/faq",
  "/register",
  "/blog/brampton-pre-construction-guide",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: LAST_UPDATED,
    changeFrequency: route === "" || route === "/pricing" || route === "/faq" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/register" ? 0.9 : 0.7,
  }));
}
