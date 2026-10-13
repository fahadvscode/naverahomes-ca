import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content";

const allowed = [
  "Googlebot",
  "Googlebot-Image",
  "Google-InspectionTool",
  "Storebot-Google",
  "Bingbot",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Amazonbot",
  "Bytespider",
  "Meta-ExternalAgent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...allowed.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/thank-you", "/api/"],
      })),
      { userAgent: "*", allow: "/", disallow: ["/thank-you", "/api/"] },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
