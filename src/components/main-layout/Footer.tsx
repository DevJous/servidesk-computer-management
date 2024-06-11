import { Container } from '@/components/Container';

export function Footer() {
  return (
    <footer className="bg-[#c7b1f2]">
      <Container>
        <div className="flex h-12 flex-col text-lg items-center md:flex-row-reverse md:justify-between py-2"></div>
      </Container>
    </footer>
  );
}
