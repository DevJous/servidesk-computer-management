'use client';

import LogoServidesk from '@/../public/logo.png';
import { Container } from '@/components/Container';
import { UserCircleIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';

export function Header2() {
  return (
    <header className="bg-[#c7b1f2]">
      <nav>
        <Container className="relative z-50 flex justify-between py-2">
          <Link href="/" aria-label="Home" className="flex gap-2 items-center">
            <Image src={LogoServidesk} alt="Logo" className="h-12 w-12" />
            <h1 className="text-3xl font-bold text-black">ServiDesk</h1>
          </Link>

          <div className="flex items-center gap-3">
            <p className="text-lg font-bold text-black">Jose Sanchez Saltos</p>
            <UserCircleIcon
              className="h-10 w-10 fill-white"
              aria-hidden="true"
            />
          </div>
        </Container>
      </nav>
    </header>
  );
}
