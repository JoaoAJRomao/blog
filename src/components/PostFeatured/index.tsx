import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';

export function PostFeatured() {
  const slug = '';
  const postLink = `/post/${slug}`;
  return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
      <PostCoverImage
        linkProps={{ href: postLink }}
        imageProps={{ width: 1200, height: 720, src: '/images/bryen_9.png', alt: 'Título do post', priority: true }}
      />

      <div className='flex flex-col gap-4 sm:justify-center'>
        <time className='text-slate-600 block text-sm/tight' dateTime='2025'>
          20/04/2025 10:00
        </time>

        <PostHeading url={postLink} as='h1'>
          Nunc rhoncus nec ante eu dapibus.
        </PostHeading>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod blandit ante non malesuada. Nunc congue
          urna id laoreet tempor. Nunc rhoncus nec ante eu dapibus. Sed egestas neque vel vehicula ullamcorper.
          Phasellus quis accumsan turpis, et condimentum nibh. tincidunt gravida est.
        </p>
      </div>
    </section>
  );
}
