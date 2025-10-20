import type { Metadata } from 'next';
import './globals.css';
import { Container } from '@/components/Container';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: {
    default: 'The blog - Este é um blog com Next.js',
    template: '%s | The blog',
  },
  description: 'Essa seria a descrição do meu blog',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang='PT-BR'>
      <body>
        <Container>
          <Header />
          {children}
          <footer>
            <p className='text-6xl font-bold text-center py-8'>Aqui é o Footer</p>
          </footer>
        </Container>
      </body>
    </html>
  );
}
