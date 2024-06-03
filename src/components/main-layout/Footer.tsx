import { Container } from '@/components/Container';

export function Footer() {
  return (
    <footer className="bg-[#c7b1f2]">
      <Container>
        <div className="flex flex-col text-lg items-center md:flex-row-reverse md:justify-between py-2">
          <div className="flex gap-2 font-semibold w-full justify-center md:w-auto">
            <p className="mt-6 text-[#0e004b] md:mt-0">FAQ</p>
            <span>/</span>
            <p className="mt-6 text-[#0e004b] md:mt-0">Support</p>
          </div>
          <p className="mt-6 font-semibold text-[#0e004b] md:mt-0">
            &copy; {new Date().getFullYear()} ServiDesk. Privacy Policy
          </p>
        </div>
      </Container>
    </footer>
  );
}
