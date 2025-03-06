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
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Semeando a Palavra de Deus a todos" />
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
