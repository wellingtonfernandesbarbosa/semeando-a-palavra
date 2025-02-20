import { getAllPosts } from "@/services/postsService";

// 1. Indica que os parâmetros são estritamente estáticos
export const dynamicParams = false;

// 2. (Opcional) Define a revalidação para atualizar as páginas periodicamente
export const revalidate = 60; // 60 segundos

// 3. Gera todos os IDs possíveis para o build
export async function generateStaticParams() {
  const posts = await getAllPosts();

  // Supondo que cada post tem um campo "id"
  // Caso não tenha, ajuste a lógica conforme sua estrutura
  return posts.map((post) => ({
    id: String(post.id),
  }));
}

// 4. Componente que mostra apenas o parâmetro estático
export default function BlogPost({ params }: { params: { id: string } }) {
  return <h1>Página do post: {params.id}</h1>;
}
