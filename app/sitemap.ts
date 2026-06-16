import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

const routes = ["", "/about", "/services", "/careers", "/contact", "/countries", "/success-stories", "/blog"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-14");

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
