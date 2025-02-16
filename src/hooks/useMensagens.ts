import { useMemo } from "react";
import { Post } from "@/types/Post";

export function useMensagens(mensagens: Post[]) {
  return useMemo(() => {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return JSON.parse(mensagens[0].conteudo) as Post[];
    } catch (error) {
      console.error("Erro ao processar mensagens:", error);
      return [];
    }
  }, [mensagens]);
}
