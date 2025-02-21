import { getAllPosts } from "@/services/postsService";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const baseUrl = "https://semeandoapalavra.vercel.app"; // Substitua pelo seu domínio real
  const posts = await getAllPosts();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>1.0</priority>
  </url>
  ${posts
      .map(
        (post, index) => `
  <url>
    <loc>${baseUrl}/posts/${index + 1}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>0.8</priority>
  </url>`
      )
      .join("")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(sitemap);
}
