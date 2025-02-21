import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useMensagens } from "@/hooks/useMensagens";
import Header from "@/components/Header";
import { generateMetadata } from "@/components/Meta";
import Link from "next/link";
import sanitizeString from "@/utils/sanitizeStrings";

export default function Home() {
  const { mensagens, loading } = useMensagens();

  if (loading) {
    return <p>Carregando...</p>;
  }

  const metadata = generateMetadata({
    title: "Semeando a Palavra",
    description: "Semeando a Palavra de Deus a todos",
    keywords: "pregação, evangelho, bíblia, fe, cristianismo",
  });

  return (
    <>
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
      <Header />
      <main className={styles.container}>
        <div className={styles.posts}>
          {mensagens
            .slice()
            .reverse()
            .map((mensagem, index) => (
              <div key={index} className={styles.post}>
                <Link href={`/posts/${mensagem.id}?${sanitizeString(mensagem.title)}`}>
                  <h2 className={styles.title}>{mensagem.title}</h2>
                </Link>
                <div className={styles.info}>
                  <p className={styles.author}>{mensagem.author}</p>
                  <p className={styles.date}>{mensagem.date}</p>
                </div>
                <p className={styles.description}>{mensagem.description}</p>
                <Image
                  src={mensagem.image}
                  alt={mensagem.imageAlt}
                  width={500}
                  height={300}
                  style={{ objectFit: "cover" }}
                  priority={index === 0} // Adiciona prioridade à primeira imagem
                />
              </div>
            ))}
        </div>
      </main>
    </>
  );
}
