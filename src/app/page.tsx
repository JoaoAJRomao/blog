import { SpinLoader } from '@/components/SpinLoader';

export default async function HomePage() {
  return (
    <div>
      <SpinLoader containerClasses='min-h-[500px] bg-amber-500' />
    </div>
  );
}
