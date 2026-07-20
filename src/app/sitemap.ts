import type { MetadataRoute } from "next";

const siteUrl = "https://www.starboardrealtors.co.in";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${siteUrl}/images/FEATURED OPPORTUNITIES/ChatGPT Image Jul 4, 2026, 08_40_14 PM.webp`,
        `${siteUrl}/images/FEATURED OPPORTUNITIES/Panchashil1.webp`,
        `${siteUrl}/images/FEATURED OPPORTUNITIES/Kasturi1.webp`,
        `${siteUrl}/images/FEATURED OPPORTUNITIES/Malpani.webp`,
        `${siteUrl}/images/FEATURED OPPORTUNITIES/Amar.webp`,
        `${siteUrl}/images/FEATURED OPPORTUNITIES/Jayaka.webp`,
        `${siteUrl}/images/FEATURED OPPORTUNITIES/Suma Shilpa.webp`,
      ],
    },
  ];
}
