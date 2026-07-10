import type { MetadataRoute } from "next";

const siteUrl = "https://www.starboardrealtors.co.in";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-07-10"),
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${siteUrl}/images/FEATURED OPPORTUNITIES/ChatGPT Image Jul 4, 2026, 08_40_14 PM.webp`,
        `${siteUrl}/images/FEATURED OPPORTUNITIES/Panchashil.webp`,
        `${siteUrl}/images/FEATURED OPPORTUNITIES/Kasturi.webp`,
        `${siteUrl}/images/FEATURED OPPORTUNITIES/Malpani.webp`,
      ],
    },
  ];
}
