import styles from "./BlogPost.module.css";

import Head from "next/head";
import Image from "next/image";
import { Post } from "@/types/Post";
import Header from "@/components/Header";
import { useUpdateUrl } from "@/hooks/useUpdateUrl";
import { generateMetadata } from "@/components/Meta";
import { GetStaticPaths, GetStaticProps } from "next";
import MarkdownToText from "@/components/MarkdownToText";
import { getAllPosts, getPostById } from "@/services/postsService";

// 1. Indica que os parâmetros são estritamente estáticos
export const dynamicParams = false;

// 2. (Opcional) Define a revalidação para atualizar as páginas periodicamente
export const revalidate = 60; // 60 segundos

// 3. Gera todos os IDs possíveis para o build
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  // Supondo que cada post tem um campo "id"
  // Caso não tenha, ajuste a lógica conforme sua estrutura
  const paths = posts.map((post) => ({
    params: { id: String(post.id) },
  }));

  return { paths, fallback: false };
};

// 4. Busca os dados do post com base no parâmetro id
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostById(Number(params?.id));

  return {
    props: {
      post,
    },
    revalidate: 60, // 60 segundos
  };
};

// 5. Componente que mostra apenas o parâmetro estático
export default function BlogPost({ post }: { post: Post }) {
  useUpdateUrl(post?.title || "");

  if (!post) {
    return <div>Carregando...</div>;
  }

  const metadata = generateMetadata({
    title: post.title,
    description: post.description,
    image: post.image,
    url: `https://semeandoapalavra.vercel.app/posts/${post.id}`,
  });

  return (
    <div className={styles.container}>
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
      <main className={styles.main}>
        <div className={styles.header}>
          <h2>{post.title}</h2>
          <div className={styles.info}>
            <p className={styles.author}>{post.author}</p>
            <p className={styles.date}>{post.date}</p>
          </div>
        </div>
        <div className={styles.image}>{post.image && <Image src={post.image} alt={post.title} width={1500} height={1000} />}</div>
        <div className={styles.content}>
          <MarkdownToText>{post.text}</MarkdownToText>
        </div>
      </main>
    </div>
  );
}
