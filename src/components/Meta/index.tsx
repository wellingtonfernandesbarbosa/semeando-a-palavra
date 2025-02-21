interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export function generateMetadata({
  title = "Semeando a Palavra",
  description = "Semeando a Palavra de Deus a todos",
  keywords = "pregação, evangelho, bíblia, fé, cristianismo",
  image = "/default-thumbnail.jpg",
  url = "https://semeandoapalavra.vercel.app",
}: MetaProps) {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
