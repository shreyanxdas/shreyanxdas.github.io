import { Welcome } from '../components/Welcome/Welcome';
import { HeaderSimple } from '@/components/HeaderSimple/HeaderSimple';

export function HomePage() {
  return (
    <>
      <HeaderSimple />
      <Welcome />
    </>
  );
}
