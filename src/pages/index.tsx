import "./index.css";

import Image from "next/image";
import { GetStaticProps } from "next";

import { Post } from "@/types/Post";
import Meta from "@/components/Meta";
import { getMensagens } from "../services/gistService";

type HomeProps = {
  mensagens: Post[];
};

export const getStaticProps: GetStaticProps = async () => {
  const mensagens = await getMensagens();

  return {
    props: { mensagens },
    revalidate: 60,
  };
};

export default function Home({ mensagens }: HomeProps) {
  return (
    <div className="container">
      <Meta />
      <header>
        <h1>Semeando a Palavra</h1>
      </header>
      <div className="content">
        {mensagens
          .map((mensagem, index) => (
            <div key={index} className="card">
              <h2 className="title">{mensagem.title}</h2>
              <p className="author">{mensagem.author}</p>
              <p className="description">{mensagem.description}</p>
              <Image src={mensagem.image} alt={mensagem.imageAlt} width={0} height={0} layout="responsive" />
            </div>
          ))
          .reverse()}
      </div>
    </div>
  );
}
