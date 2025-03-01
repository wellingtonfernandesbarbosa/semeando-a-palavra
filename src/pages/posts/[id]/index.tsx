import Header from "@/components/Header";
import MarkdownToText from "@/components/MarkdownToText";
import { getAllPosts, getPostById } from "@/services/postsService";
import { Post } from "@/types/Post";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Meta from "@/components/Meta";
import { useUpdateUrl } from "@/hooks/useUpdateUrl";
import styles from "./BlogPost.module.css";

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

  return { paths, fallback: "blocking" }; // 'blocking' para carregamento assíncrono
};

// 4. Busca os dados do post com base no parâmetro id
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postId = Number(params?.id);
  const post = await getPostById(postId);

  if (!post || post.id > postId) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60, // 60 segundos
  };
};

// 5. Componente que mostra apenas o parâmetro estático
export default function BlogPost({ post }: { post: Post }) {
  // Use o hook useUpdateUrl para atualizar a URL com base no título do post
  useUpdateUrl(post?.title);

  if (!post) {
    return <div>Carregando...</div>;
  }

  return (
    <div className={styles.container}>
      <Meta title={post.title} description={post.description} image={post.image} url={`https://semeandoapalavra.vercel.app/posts/${post.id}`} />
      <Header size="small" />
      <main className={styles.main}>
        <div className={styles.header}>
          <h2>{post.title}</h2>
          <div className={styles.info}>
            <p className={styles.author}>{post.author}</p>
            <p className={styles.date}>{post.date}</p>
          </div>
        </div>
        <div className={styles.image}>{post.image && <Image src={post.image} alt={post.title} title={post.title} width={1500} height={1000} />}</div>
        <div className={styles.content}>
          <MarkdownToText>{post.text}</MarkdownToText>
        </div>
      </main>
    </div>
  );
}
