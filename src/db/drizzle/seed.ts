import { JsonPostRepository } from "@/repositories/post/json-post-repository";
import { drizzleDb } from "."
import { postsTable } from "./schemas"
//npx drizzle-kit push
(async () => {
  const jsonPostRepository = new JsonPostRepository();
  const posts = await jsonPostRepository.findAll();
  try {
    await drizzleDb.delete(postsTable); //LIMPA A BASE DE DADOS
    await drizzleDb.insert(postsTable).values(posts);
    console.log('\n', `${posts.length} post(s) foram salvos na base de dados.`, '\n')
  } catch (e) {
    console.log('\n', 'Erro ao carregar json para o banco de dados!', '\n', '\n', e, '\n')
  }
})();
