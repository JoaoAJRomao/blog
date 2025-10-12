import { Container } from '@/components/Container';
import PostList from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <header>
        <h1 className='text-6xl font-bold text-center py-8'>Aqui é a header</h1>
      </header>

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>
      <footer>
        <p className='text-6xl font-bold text-center py-8'>Aqui é o Footer</p>
      </footer>
    </Container>
  );
}
