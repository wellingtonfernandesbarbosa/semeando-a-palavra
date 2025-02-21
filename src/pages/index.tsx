import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useMensagens } from "@/hooks/useMensagens";
import Header from "@/components/Header";

export default function Home() {
  const { mensagens, loading } = useMensagens();

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Head>
        <title>Semeando a Palavra</title>
        <meta name="description" content="Semeando a Palavra de Deus a todos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
                <h2 className={styles.title}>{mensagem.title}</h2>
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
