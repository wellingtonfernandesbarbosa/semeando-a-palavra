import Head from "next/head";

interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export default function Meta({
  title = "Semeando a Palavra",
  description = "Semeando a Palavra de Deus a todos",
  keywords = "pregação, evangelho, bíblia, fé, cristianismo",
  image = "/default-thumbnail.jpg",
  url = "https://semeandoapalavra.vercel.app",
}: MetaProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>
  );
}
