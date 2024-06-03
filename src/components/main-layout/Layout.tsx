import { Footer } from '@/components/main-layout/Footer';
import { Header } from '@/components/main-layout/Header';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
    </>
  );
}
