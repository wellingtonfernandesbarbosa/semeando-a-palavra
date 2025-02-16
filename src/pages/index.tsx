import { GetStaticProps } from "next";
import { getMensagens } from "../services/gistService";
import { Post } from "@/types/Post";
import Meta from "@/components/Meta";
import "./index.css";

type HomeProps = {
  mensagens: Post[];
};

export default function Home({ mensagens }: HomeProps) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const listMensagens: Post[] = JSON.parse(mensagens[0].conteudo);
  return (
    <div className="page">
      <Meta />
      <h1>Semeando a Palavra</h1>
      {listMensagens.map((mensagem, index) => (
        <div key={index}>
          <h2>{mensagem.title}</h2>
          <p>{mensagem.description}</p>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const mensagens = await getMensagens();

  return {
    props: { mensagens },
    revalidate: 60,
  };
};
