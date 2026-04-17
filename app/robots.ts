import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = "https://www.restoprint.co.uk";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/_next/static/",
        "/_next/image/",
        "/_next/",
        "/api/",
        "/*.svg$",
        "/*.png$",
        "/*.jpg$",
        "/*.jpeg$",
        "/*.gif$",
        "/*.webp$",
        "/*.ico$",
      ],
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
