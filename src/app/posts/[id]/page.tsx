import Image from "next/image";
import { getPostById, getAllPosts } from "@/services/postsService";
import { Post } from "@/types/Post";
import MarkdownToText from "@/components/MarkdownToText";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { generateMetadata as generatePageMetadata } from "@/components/Meta";
import styles from "./page.module.css";
import sanitizeString from "@/utils/sanitizeString";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((_, index) => ({ id: String(index + 1) }));
}

// 🟢 Adiciona metadata dinâmica para cada post
export async function generateMetadata({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const post: Post | null = await getPostById(id);

  if (!post) return {}; // Se o post não existir, não define metadata

  return generatePageMetadata({
    title: post.title,
    description: post.description,
    image: post.image,
    url: `https://semeandoapalavra.vercel.app/post/${id}?${sanitizeString(post.title)}`,
  });
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const post: Post | null = await getPostById(id);

  if (!post) return notFound();

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.header}>
          <h2>{post.title}</h2>
          <div className={styles.info}>
            <p className={styles.author}>{post.author}</p>
            <p className={styles.date}>{post.date}</p>
          </div>
        </div>
        <div className={styles.image}>{post.image && <Image src={post.image} alt={post.title} width={300} height={150} />}</div>
        <div className={styles.content}>
          <MarkdownToText>{post.text}</MarkdownToText>
        </div>
      </main>
    </div>
  );
}
