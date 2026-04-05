import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: ["/", "/features"], disallow: ["/verify", "/api/"] },
    ],
    sitemap: "https://tabarak-pay.com/sitemap.xml",
  };
}
