import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://www.restoprint.co.uk";
const LAST_MOD = "2026-04-17";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Core pages
    { url: `${BASE}/`,           lastModified: LAST_MOD, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/services`,   lastModified: LAST_MOD, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/order`,      lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/industries`, lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.8 },

    // Service pages
    { url: `${BASE}/services/menus`,          lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/flyers`,         lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/business-cards`, lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/stickers`,       lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/posters`,        lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/packaging`,      lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/brochures`,      lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/banners`,        lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/stationery`,     lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/promotional`,    lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.8 },

    // Guides
    { url: `${BASE}/guides`,              lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/guides/paper`,        lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/guides/sizes`,        lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/guides/finishes`,     lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/guides/terminology`,  lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.6 },
  ];
}
