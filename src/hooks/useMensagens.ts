import { useEffect, useState } from "react";
import { getMensagens } from "@/services/gistService";
import { Post } from "@/types/Post";

export const useMensagens = () => {
  const [mensagens, setMensagens] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMensagens = async () => {
      const data = await getMensagens();
      setMensagens(data);
      setLoading(false);
    };

    fetchMensagens();
  }, []);

  return { mensagens, loading };
};