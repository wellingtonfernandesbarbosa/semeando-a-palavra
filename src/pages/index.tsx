import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useMensagens } from "@/hooks/useMensagens";
import Header from "@/components/Header";
import Link from "next/link";
import sanitizeString from "@/utils/sanitizeStrings";
import Head from "next/head";

export default function Home() {
  const { mensagens, loading } = useMensagens();

  if (loading) {
    return <p className={styles.loading}>Carregando...</p>;
  }

  return (
    <>
      <Head>
        <title>Semeando a Palavra</title>
        <meta title="Semeando a Palavra" />
        <meta property="og:description" content="Semeando a Palavra de Deus a todos" />
        <meta name="description" content="Semeando a Palavra de Deus a todos" />
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
