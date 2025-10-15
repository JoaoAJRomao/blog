import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostCoverImage } from '@/components/PostCoverImage';
import { PostHeading } from '@/components/PostHeading';
import PostList from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />
      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <PostCoverImage
          linkProps={{ href: '/post/test' }}
          imageProps={{ width: 1200, height: 720, src: '/images/bryen_9.png', alt: 'Título do post', priority: true }}
        />

        <div className='flex flex-col gap-4 sm:justify-center'>
          <time className='text-slate-600 block text-sm/tight' dateTime='2025'>
            20/04/2025 10:00
          </time>

          <PostHeading url='#' as='h1'>
            Nunc rhoncus nec ante eu dapibus.
          </PostHeading>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod blandit ante non malesuada. Nunc
            congue urna id laoreet tempor. Nunc rhoncus nec ante eu dapibus. Sed egestas neque vel vehicula ullamcorper.
            Phasellus quis accumsan turpis, et condimentum nibh. tincidunt gravida est.
          </p>
        </div>
      </section>
      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>
      <footer>
        <p className='text-6xl font-bold text-center py-8'>Aqui é o Footer</p>
      </footer>
    </Container>
  );
}
