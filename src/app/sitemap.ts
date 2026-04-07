import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cikizeng.com";
  const lastModified = new Date("2026-04-06");

  return [
    { url: baseUrl, lastModified, priority: 1.0 },
    { url: `${baseUrl}/projects`, lastModified, priority: 0.9 },
    { url: `${baseUrl}/method`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/case-studies`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/case-studies/sop-driven-autonomy`, lastModified, priority: 0.9 },
    { url: `${baseUrl}/pricing`, lastModified, priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified, priority: 0.2 },
    { url: `${baseUrl}/terms`, lastModified, priority: 0.2 },
  ];
}
