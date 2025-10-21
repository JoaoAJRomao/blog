import { PostCoverImage } from '../PostCoverImage';
import { PostSummary } from '../PostSummary';
import { findAllPublicPostsCached } from '@/lib/post/queries';

export async function PostFeatured() {
  const post = (await findAllPublicPostsCached())[0];

  if (!post) {
    throw new Error('Post do topo não encontrado');
  }

  const postLink = `/post/${post.slug}`;
  return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
      <PostCoverImage
        linkProps={{ href: postLink }}
        imageProps={{ width: 1200, height: 720, src: post.coverImageUrl, alt: post.title, priority: true }}
      />

      <PostSummary
        createdAt={post.createdAt}
        postHeading='h1'
        excerpt={post.excerpt}
        postLink={postLink}
        title={post.title}
      />
    </section>
  );
}
