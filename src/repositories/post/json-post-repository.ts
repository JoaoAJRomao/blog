import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { resolve } from 'path';
import { readFile } from 'fs/promises';

const ROOT_DIR = process.cwd();
const JSON_POST_FILE_PATH = resolve(ROOT_DIR, 'src', 'db', 'seed', 'post.json');

const SIMULATE_WAIT_IN_MS = 0;

export class JsonPostRepository implements PostRepository {
  private async simulateWait(): Promise<void> {
    if (SIMULATE_WAIT_IN_MS <= 0) return;

    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, SIMULATE_WAIT_IN_MS);
    });
  }

  private async readFromDisk(): Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_POST_FILE_PATH, 'utf-8');
    // A função deve retornar os dados parseados.
    return JSON.parse(jsonContent).posts as PostModel[];
  }

  async findAllPublic(): Promise<PostModel[]> {
    await this.simulateWait();
    return (await this.readFromDisk()).filter(post => post.published);
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.readFromDisk();
    const post = posts.find(post => post.id === id);

    if (!post) {
      throw new Error('Post não encontrado para ID');
    }

    return post;
  }

  async findBySlug(slug: string): Promise<PostModel> {
    const posts = await this.readFromDisk();
    const post = posts.find(post => post.slug === slug);

    if (!post) {
      throw new Error('Post não encontrado para Slug');
    }

    return post;
  }
}

export const postRepository: PostRepository = new JsonPostRepository();
