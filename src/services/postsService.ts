import { getMensagens } from "@/services/gistService";
import { Post } from "@/types/Post";

export async function getAllPosts(): Promise<Post[]> {
  return await getMensagens(); // Já retorna o array tratado
}

export async function getPostById(id: number): Promise<Post | null> {
  const posts = await getAllPosts();
  return posts[id - 1] || null; // Ajuste para buscar pelo índice correto
}
