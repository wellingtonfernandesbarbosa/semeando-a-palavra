const GIST_ID = "89aaf3fd336d17216e6a6f1089c027d6";

export async function getMensagens() {
  const res = await fetch(`https://api.github.com/gists/${GIST_ID}`);
  const data = await res.json();
  const arquivos = data.files;

  const mensagens = Object.keys(arquivos).map((key) => ({
    titulo: arquivos[key].filename.replace('.md', ''),
    conteudo: arquivos[key].content,
  }));

  const conteudo = mensagens[0].conteudo;

  return JSON.parse(conteudo);
}
