import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { drizzleDb } from '@/db/drizzle';

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    console.log('\n', 'DRIZZLE - findAllPublic', '\n');
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true)
    });
    return posts;
  }
  async findBySlugPublic(slug: string): Promise<PostModel> {
    console.log('\n', 'DRIZZLE - findBySlugPublic', '\n');
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq, and }) => and(eq(posts.published, true), eq(posts.slug, slug))
    });
    if (!post) throw new Error('Post não encontrado para Slug');
    return post;
  }
  async findAll(): Promise<PostModel[]> {
    console.log('\n', 'DRIZZLE - findAll', '\n');
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });
    return posts;
  }
  async findById(id: string): Promise<PostModel> {
    console.log('\n', 'DRIZZLE - findById', '\n');
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id)
    });
    if (!post) throw new Error('Post não encontrado para ID informado');
    return post;
  }
}

// (async () => {
//   //o-papel-do-silencio-em-uma-vida-criativa true
//   //organizacao-pessoal-por-onde-comecar true
//   //10-habitos-para-aumentar-sua-produtividade false
//   //como-a-tecnologia-impacta-nosso-bem-estar false
//   //bc9a540f-66a9-4ab0-8d50-6216ab1cac53 true
//   //3993fcf7-2490-48ed-be2e-58c2030ee764 true
//   //be3f14a1-0105-4e2e-bfc9-133a05e7bda6 false
//   //6b204dab-2312-4525-820a-a0463560835f false
//   const repo = new DrizzlePostRepository();
//   const posts = await repo.findBySlugPublic('o-papel-do-silencio-em-uma-vida-criativa-adoadoado');
//   // posts.forEach(post => console.log(post.id, post.published));
//   console.log(posts);
// })();
