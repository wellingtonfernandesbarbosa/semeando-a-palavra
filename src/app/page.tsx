import styles from "./page.module.css";
import Image from "next/image";
import { getMensagens } from "@/services/gistService";
import { Post } from "@/types/Post";
import Header from "@/components/Header";
import { generateMetadata } from "@/components/Meta";

export const metadata = generateMetadata({
  title: "Semeando a Palavra",
  description: "Semeando a Palavra de Deus a todos",
});

export default async function Home() {
  const mensagens: Post[] = await getMensagens();

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.posts}>
        {mensagens
          .slice()
          .reverse()
          .map((mensagem, index) => (
            <div key={index} className={styles.post}>
              <h2 className={styles.title}>{mensagem.title}</h2>
              <p className={styles.author}>{mensagem.author}</p>
              <p className={styles.description}>{mensagem.description}</p>
              <Image src={mensagem.image} alt={mensagem.imageAlt} width={500} height={300} style={{ objectFit: "cover" }} />
            </div>
          ))}
      </div>
    </div>
  );
}
