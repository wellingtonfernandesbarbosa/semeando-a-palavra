import styles from "@/styles/Home.module.css";

import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import Header from "@/components/Header";
import { useMensagens } from "@/hooks/useMensagens";
import sanitizeString from "@/utils/sanitizeStrings";

export default function Home() {
  const { mensagens, loading } = useMensagens();

  return (
    <div className={styles.container}>
      <Head>
        <title>Semeando a Palavra</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Semeando a Palavra de Deus a todos" />

        {/* Open Graph */}
        <meta property="og:title" content="Semeando a Palavra" />
        <meta property="og:site_name" content="Semeando a Palavra" />
        <meta property="og:description" content="Semeando a Palavra de Deus a todos" />
        <meta property="og:url" content="https://semeandoapalavra.vercel.app" />
        <meta property="og:image" content="https://semeandoapalavra.vercel.app/logo.jpg" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Semeando a Palavra" />
        <meta name="twitter:description" content="Semeando a Palavra de Deus a todos" />
        <meta name="twitter:image" content="https://semeandoapalavra.vercel.app/logo.jpg" />

        {/* Ícones */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </Head>

      <Header />

      <main className={styles.mainCcontainer}>
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
    </div>
  );
}
