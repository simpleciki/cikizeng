import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cikizeng.com";
  const lastModified = new Date("2026-04-08");

  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.7 as const,
  }));

  return [
    { url: baseUrl, lastModified, priority: 1.0 },
    { url: `${baseUrl}/projects`, lastModified, priority: 0.9 },
    { url: `${baseUrl}/work`, lastModified: new Date("2026-06-02"), priority: 0.9 },
    { url: `${baseUrl}/work/smartquotepro`, lastModified: new Date("2026-06-02"), priority: 0.9 },
    { url: `${baseUrl}/work/jumponion`, lastModified: new Date("2026-06-02"), priority: 0.9 },
    { url: `${baseUrl}/work/ivybloom`, lastModified: new Date("2026-06-03"), priority: 0.9 },
    { url: `${baseUrl}/work/cikibrain`, lastModified: new Date("2026-06-03"), priority: 0.9 },
    { url: `${baseUrl}/jumponion-sample`, lastModified: new Date("2026-04-10"), priority: 0.9 },
    { url: `${baseUrl}/method`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/case-studies`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/case-studies/sop-driven-autonomy`, lastModified, priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified, priority: 0.8 },
    ...blogEntries,
    { url: `${baseUrl}/pricing`, lastModified, priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified, priority: 0.2 },
    { url: `${baseUrl}/terms`, lastModified, priority: 0.2 },
  ];
}
