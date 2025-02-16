import { GetStaticProps } from "next";
import { getMensagens } from "../services/gistService";
import { Post } from "@/types/Post";
import Meta from "@/components/Meta";
import "./index.css";
import { useMensagens } from "@/hooks/useMensagens";
import Image from "next/image";

type HomeProps = {
  mensagens: Post[];
};

export default function Home({ mensagens }: HomeProps) {
  const listMensagens: Post[] = useMensagens(mensagens);
  return (
    <div className="container">
      <Meta />
      <h1>Semeando a Palavra</h1>
      <div className="content">
        {listMensagens.map((mensagem, index) => (
          <div key={index} className="card">
            <h2>{mensagem.title}</h2>
            <p>{mensagem.description}</p>
            <Image src={mensagem.image} alt={mensagem.imageAlt} width={0} height={0} layout="responsive" />
          </div>
        ))}
      </div>
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
