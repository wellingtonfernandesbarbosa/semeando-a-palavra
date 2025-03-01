import styles from "@/styles/Home.module.css";

import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import Header from "@/components/Header";
import { useMensagens } from "@/hooks/useMensagens";
import sanitizeString from "@/utils/sanitizeStrings";

export default function Home() {
  const { mensagens, loading } = useMensagens();

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <Header />
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Semeando a Palavra</title>
        <meta title="Semeando a Palavra" />
        <meta property="og:title" content="Semeando a Palavra" />
        <meta property="og:site_name" content="Semeando a Palavra" />
        <meta name="twitter:title" property="og:title" itemProp="name" content="Semeando a Palavra" />
        <meta name="description" content="Semeando a Palavra de Deus a todos" />
        <meta name="twitter:description" property="og:description" itemProp="description" content="Semeando a Palavra de Deus a todos" />
        <meta property="og:url" content="https://semeandoapalavra.vercel.app" />
        <meta property="og:image" content="https://semeandoapalavra.vercel.app/logo.jpg" itemProp="image primaryImageOfPage" />
        <meta name="twitter:image" property="og:image" itemProp="image" content="https://semeandoapalavra.vercel.app/logo.jpg" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:description" content="Semeando a Palavra de Deus a todos" />
        <meta name="keywords" content="pregação, evangelho, bíblia, fé, cristianismo" />
      </Head>
      <Header />
      <main className={styles.container}>
        <div className={styles.posts}>
          {mensagens
            .slice()
            .reverse()
            .map((mensagem, index) => (
              <div key={index} className={styles.post}>
                <div className={styles.header}>
                  <Link href={`/posts/${mensagem.id}?${sanitizeString(mensagem.title)}`}>
                    <h2 className={styles.title}>{mensagem.title}</h2>
                  </Link>
                  <div className={styles.info}>
                    <p className={styles.author}>{mensagem.author}</p>
                    <p className={styles.date}>{mensagem.date}</p>
                  </div>
                </div>
                <p className={styles.description}>{mensagem.description}</p>
                <Image
                  src={mensagem.image}
                  alt={mensagem.imageAlt}
                  title={mensagem.imageTitle}
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
