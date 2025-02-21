import Head from "next/head";

interface MetaProps {
  title: string;
  description: string;
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

export default function Meta({ title, description, keywords, image, url }: MetaProps) {
  const metadata = generateMetadata({ title, description, keywords, image, url });

  return (
    <Head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <meta property="og:title" content={metadata.openGraph.title} />
      <meta property="og:description" content={metadata.openGraph.description} />
      <meta property="og:image" content={metadata.openGraph.images[0].url} />
      <meta property="og:url" content={metadata.openGraph.url} />
      <meta property="og:type" content={metadata.openGraph.type} />
      <meta name="twitter:card" content={metadata.twitter.card} />
      <meta name="twitter:title" content={metadata.twitter.title} />
      <meta name="twitter:description" content={metadata.twitter.description} />
      <meta name="twitter:image" content={metadata.twitter.images[0]} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
